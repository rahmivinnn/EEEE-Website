import { useState, useEffect } from 'react';
import { useCardanoWallet } from '@/hooks/useCardanoWallet';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

interface LockPeriodOption {
  id: 'flexible' | '30' | '90';
  name: string;
  days: number | null;
  apy: number;
  bonus?: string;
  description: string;
}

interface StakingPosition {
  id: string;
  userId: string;
  stakedAmount: string;
  lockPeriod: 'flexible' | '30' | '90';
  apy: number;
  startDate: string;
  lockEndDate?: string;
  claimableRewards: string;
  status: 'active' | 'completed' | 'withdrawn';
  rewardType: 'EEEEE' | 'partner' | 'nft';
}

const SMART_CONTRACT_ADDRESS = 'addr1qx2fxv2umyhttkxyxp8x0dlpdt3k6cwng5pxj3jhsydzer3jcu5d8ps7zex2k2xt3uqxgjqnnj0vs2f062ck98jaggqnq';

const lockPeriodOptions: LockPeriodOption[] = [
  {
    id: 'flexible',
    name: 'Flexible',
    days: null,
    apy: 12,
    description: 'Unstake anytime with lower rewards'
  },
  {
    id: '30',
    name: '30 Days',
    days: 30,
    apy: 20,
    description: 'Higher APY with 30-day lock period'
  },
  {
    id: '90',
    name: '90 Days',
    days: 90,
    apy: 35,
    bonus: 'NFT Whitelist',
    description: 'Maximum APY + bonus NFT whitelist access'
  }
];

export default function StakingInterface() {
  const { connected, address, balance, stakeTokens, claimRewards, unstakeTokens } = useCardanoWallet();
  const queryClient = useQueryClient();
  
  const [stakingAmount, setStakingAmount] = useState('');
  const [selectedLockPeriod, setSelectedLockPeriod] = useState<'flexible' | '30' | '90'>('flexible');
  const [isStaking, setIsStaking] = useState(false);
  const [isClaiming, setIsClaiming] = useState(false);
  const [isUnstaking, setIsUnstaking] = useState(false);

  // Fetch user's staking positions
  const { data: stakingPositions, isLoading } = useQuery({
    queryKey: [`/api/staking-positions/${address}`],
    enabled: !!address,
  });

  // Calculate total staked and claimable rewards
  const totalStaked = stakingPositions?.reduce((sum: number, pos: StakingPosition) => 
    sum + parseFloat(pos.stakedAmount), 0) || 0;
  
  const totalClaimableRewards = stakingPositions?.reduce((sum: number, pos: StakingPosition) => 
    sum + parseFloat(pos.claimableRewards), 0) || 0;

  // Stake tokens mutation
  const stakeMutation = useMutation({
    mutationFn: async ({ amount, lockPeriod }: { amount: string, lockPeriod: 'flexible' | '30' | '90' }) => {
      const txHash = await stakeTokens(amount, lockPeriod, SMART_CONTRACT_ADDRESS);
      
      // Create staking position in database
      const selectedOption = lockPeriodOptions.find(opt => opt.id === lockPeriod)!;
      const lockEndDate = lockPeriod !== 'flexible' 
        ? new Date(Date.now() + (selectedOption.days! * 24 * 60 * 60 * 1000))
        : undefined;
      
      const response = await fetch('/api/staking-positions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userId: address,
          stakedAmount: amount,
          lockPeriod,
          apy: selectedOption.apy,
          lockEndDate: lockEndDate?.toISOString(),
          rewardType: 'EEEEE',
          transactionHash: txHash,
          smartContractAddress: SMART_CONTRACT_ADDRESS,
          status: 'active'
        })
      });
      
      if (!response.ok) throw new Error('Failed to create staking position');
      return response.json();
    },
    onSuccess: (data) => {
      console.log('✅ Staking successful:', data);
      queryClient.invalidateQueries({ queryKey: [`/api/staking-positions/${address}`] });
      setStakingAmount('');
      setIsStaking(false);
    },
    onError: (error) => {
      console.error('❌ Staking failed:', error);
      alert(`Staking failed: ${error instanceof Error ? error.message : 'Unknown error'}`);
      setIsStaking(false);
    }
  });

  // Claim rewards mutation
  const claimMutation = useMutation({
    mutationFn: async (positionId: string) => {
      const txHash = await claimRewards(positionId, SMART_CONTRACT_ADDRESS);
      
      // Create reward claim record
      const response = await fetch('/api/reward-claims', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userId: address,
          stakingPositionId: positionId,
          amount: totalClaimableRewards.toString(),
          rewardType: 'EEEEE',
          transactionHash: txHash
        })
      });
      
      if (!response.ok) throw new Error('Failed to record reward claim');
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [`/api/staking-positions/${address}`] });
      setIsClaiming(false);
    },
    onError: (error) => {
      console.error('Claim failed:', error);
      setIsClaiming(false);
    }
  });

  const handleStake = async () => {
    if (!stakingAmount || !connected) {
      console.log('❌ Cannot stake: missing amount or wallet not connected');
      return;
    }

    const numAmount = parseFloat(stakingAmount);
    if (isNaN(numAmount) || numAmount <= 0) {
      console.log('❌ Invalid staking amount:', stakingAmount);
      return;
    }

    console.log(`🚀 Starting stake: ${stakingAmount} EEEEE, Lock: ${selectedLockPeriod}, Connected: ${connected}`);
    setIsStaking(true);
    stakeMutation.mutate({ amount: stakingAmount, lockPeriod: selectedLockPeriod });
  };

  const handleClaimRewards = async () => {
    if (!stakingPositions?.length || totalClaimableRewards <= 0) return;
    
    setIsClaiming(true);
    // For simplicity, claim from the first active position
    const activePosition = stakingPositions.find((pos: StakingPosition) => pos.status === 'active');
    if (activePosition) {
      claimMutation.mutate(activePosition.id);
    }
  };

  const selectedOption = lockPeriodOptions.find(opt => opt.id === selectedLockPeriod)!;
  const estimatedDailyReward = stakingAmount ? 
    (parseFloat(stakingAmount) * selectedOption.apy / 365 / 100).toFixed(6) : '0';
  const estimatedMonthlyReward = stakingAmount ? 
    (parseFloat(stakingAmount) * selectedOption.apy / 12 / 100).toFixed(6) : '0';

  return (
    <div className="bg-gradient-to-br from-zinc-900/90 to-black/90 backdrop-blur-xl border border-zinc-800 rounded-3xl p-8">
      <div className="flex items-center gap-4 mb-6">
        <div className="p-3 bg-gradient-to-br from-yellow-500 to-purple-600 rounded-xl">
          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,7C13.4,7 14.8,8.6 14.8,10V11.5C15.4,11.5 16,12.1 16,12.7V16.2C16,16.8 15.4,17.3 14.8,17.3H9.2C8.6,17.3 8,16.8 8,16.2V12.7C8,12.1 8.6,11.5 9.2,11.5V10C9.2,8.6 10.6,7 12,7M12,8.2C11.2,8.2 10.5,8.7 10.5,10V11.5H13.5V10C13.5,8.7 12.8,8.2 12,8.2Z"/>
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-white tracking-wide">STAKING POOL</h3>
      </div>

      {/* Staking Stats */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="p-4 bg-gradient-to-br from-purple-500/10 to-yellow-500/10 rounded-xl">
          <div className="text-2xl font-bold text-purple-400">{totalStaked.toFixed(2)}</div>
          <div className="text-xs text-zinc-400">TOTAL STAKED</div>
        </div>
        <div className="p-4 bg-gradient-to-br from-yellow-500/10 to-purple-500/10 rounded-xl">
          <div className="text-2xl font-bold text-yellow-400">{totalClaimableRewards.toFixed(6)}</div>
          <div className="text-xs text-zinc-400">CLAIMABLE REWARDS</div>
        </div>
      </div>

      {/* Lock Period Selection */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-zinc-400 mb-3">LOCK PERIOD</label>
        <div className="grid grid-cols-1 gap-3">
          {lockPeriodOptions.map((option) => (
            <div
              key={option.id}
              onClick={() => setSelectedLockPeriod(option.id)}
              className={`p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                selectedLockPeriod === option.id
                  ? 'border-purple-500 bg-purple-500/10'
                  : 'border-zinc-700 bg-zinc-800/50 hover:border-zinc-600'
              }`}
            >
              <div className="flex justify-between items-center mb-2">
                <div className="flex items-center gap-3">
                  <span className="font-bold text-white">{option.name}</span>
                  <span className="text-2xl font-bold text-yellow-400">{option.apy}% APY</span>
                </div>
                {option.bonus && (
                  <span className="px-2 py-1 bg-gradient-to-r from-purple-500 to-yellow-500 rounded-full text-xs font-bold text-white">
                    {option.bonus}
                  </span>
                )}
              </div>
              <p className="text-sm text-zinc-400">{option.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Staking Amount Input */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-zinc-400 mb-3">AMOUNT TO STAKE</label>
        <input
          type="number"
          value={stakingAmount}
          onChange={(e) => setStakingAmount(e.target.value)}
          placeholder="Enter amount..."
          className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-xl text-white focus:border-purple-500 focus:outline-none transition-colors"
        />
        {stakingAmount && (
          <div className="mt-3 p-3 bg-zinc-800/50 rounded-xl">
            <div className="text-sm text-zinc-400 mb-1">Estimated Rewards:</div>
            <div className="flex justify-between text-sm">
              <span className="text-zinc-300">Daily: <span className="text-yellow-400">{estimatedDailyReward} EEEEE</span></span>
              <span className="text-zinc-300">Monthly: <span className="text-yellow-400">{estimatedMonthlyReward} EEEEE</span></span>
            </div>
          </div>
        )}
      </div>

      {/* Action Buttons */}
      <div className="space-y-3">
        <button
          onClick={handleStake}
          disabled={!stakingAmount || !connected || isStaking}
          className="w-full py-3 bg-gradient-to-r from-yellow-600 to-purple-600 rounded-xl font-bold tracking-wide hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
        >
          {isStaking ? 'STAKING...' : connected ? 'STAKE NOW' : 'CONNECT WALLET FIRST'}
        </button>
        
        {totalClaimableRewards > 0 && (
          <button
            onClick={handleClaimRewards}
            disabled={isClaiming || !connected}
            className="w-full py-3 bg-gradient-to-r from-green-600 to-blue-600 rounded-xl font-bold tracking-wide hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
          >
            {isClaiming ? 'CLAIMING...' : `CLAIM ${totalClaimableRewards.toFixed(6)} EEEEE`}
          </button>
        )}
      </div>

      {/* Active Positions */}
      {stakingPositions && stakingPositions.length > 0 && (
        <div className="mt-6 pt-6 border-t border-zinc-700">
          <h4 className="text-lg font-bold text-white mb-4">ACTIVE POSITIONS</h4>
          <div className="space-y-3">
            {stakingPositions.map((position: StakingPosition) => (
              <div key={position.id} className="p-4 bg-zinc-800/50 rounded-xl">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-white font-medium">{position.stakedAmount} EEEEE</span>
                  <span className="text-yellow-400">{position.apy}% APY</span>
                </div>
                <div className="flex justify-between text-sm text-zinc-400">
                  <span>Lock: {position.lockPeriod === 'flexible' ? 'Flexible' : `${position.lockPeriod} days`}</span>
                  <span>Rewards: {position.claimableRewards} EEEEE</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}