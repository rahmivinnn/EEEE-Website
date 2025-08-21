import { IStorage } from './storage';
import { StakingPosition, StakingSnapshot } from '@shared/schema';

interface RewardCalculationResult {
  positionId: string;
  dailyReward: number;
  totalReward: number;
  lastCalculated: Date;
}

export class RewardCalculator {
  private storage: IStorage;
  private isRunning = false;

  constructor(storage: IStorage) {
    this.storage = storage;
  }

  /**
   * Start the reward calculation service
   * Runs daily at midnight to calculate rewards for all active positions
   */
  public startRewardCalculation() {
    if (this.isRunning) return;
    
    this.isRunning = true;
    console.log('🚀 Reward calculation service started');
    
    // Calculate rewards immediately on start
    this.calculateAllRewards();
    
    // Schedule daily calculations at midnight
    const now = new Date();
    const tomorrow = new Date(now);
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(0, 0, 0, 0);
    
    const msUntilMidnight = tomorrow.getTime() - now.getTime();
    
    setTimeout(() => {
      this.calculateAllRewards();
      
      // Then run every 24 hours
      setInterval(() => {
        this.calculateAllRewards();
      }, 24 * 60 * 60 * 1000);
    }, msUntilMidnight);
  }

  /**
   * Stop the reward calculation service
   */
  public stopRewardCalculation() {
    this.isRunning = false;
    console.log('⏹️ Reward calculation service stopped');
  }

  /**
   * Calculate rewards for all active staking positions
   */
  public async calculateAllRewards(): Promise<RewardCalculationResult[]> {
    try {
      console.log('📊 Starting daily reward calculation...');
      
      // Get all active staking positions
      const allPositions = await this.storage.getAllStakingPositions();
      const activePositions = allPositions.filter(pos => pos.status === 'active');
      
      console.log(`Found ${activePositions.length} active staking positions`);
      
      const results: RewardCalculationResult[] = [];
      
      for (const position of activePositions) {
        try {
          const result = await this.calculatePositionReward(position);
          results.push(result);
        } catch (error) {
          console.error(`Error calculating rewards for position ${position.id}:`, error);
        }
      }
      
      console.log(`✅ Completed reward calculation for ${results.length} positions`);
      return results;
    } catch (error) {
      console.error('❌ Error in calculateAllRewards:', error);
      throw error;
    }
  }

  /**
   * Calculate rewards for a specific staking position
   */
  public async calculatePositionReward(position: StakingPosition): Promise<RewardCalculationResult> {
    const now = new Date();
    const stakedAmount = parseFloat(position.stakedAmount);
    const apy = position.apy;
    
    // Get the last calculation date
    const lastSnapshot = await this.storage.getLatestStakingSnapshot(position.id);
    const lastCalculated = lastSnapshot ? new Date(lastSnapshot.snapshotDate) : new Date(position.startDate);
    
    // Calculate days since last calculation
    const daysSinceLastCalculation = Math.floor((now.getTime() - lastCalculated.getTime()) / (1000 * 60 * 60 * 24));
    
    if (daysSinceLastCalculation === 0) {
      // Already calculated today
      return {
        positionId: position.id,
        dailyReward: 0,
        totalReward: parseFloat(position.claimableRewards || '0'),
        lastCalculated
      };
    }
    
    // Calculate daily reward: (stakedAmount * APY / 365)
    const dailyRewardRate = apy / 365 / 100;
    const dailyReward = stakedAmount * dailyRewardRate;
    const totalNewReward = dailyReward * daysSinceLastCalculation;
    
    // Update claimable rewards
    const currentClaimableRewards = parseFloat(position.claimableRewards || '0');
    const newClaimableRewards = currentClaimableRewards + totalNewReward;
    
    // Create snapshot
    await this.storage.createStakingSnapshot({
      stakingPositionId: position.id,
      snapshotDate: now.toISOString(),
      stakedAmount: position.stakedAmount,
      apy: position.apy.toString(),
      dailyReward: dailyReward.toString(),
      totalRewards: newClaimableRewards.toString(),
      rewardType: position.rewardType
    });
    
    // Update staking position with new claimable rewards
    await this.updateStakingPositionRewards(position.id, newClaimableRewards, now);
    
    console.log(`💰 Position ${position.id}: +${totalNewReward.toFixed(6)} EEEEE (${daysSinceLastCalculation} days)`);
    
    return {
      positionId: position.id,
      dailyReward,
      totalReward: newClaimableRewards,
      lastCalculated: now
    };
  }

  /**
   * Calculate rewards for a specific position on-demand
   */
  public async calculateRewardsForPosition(positionId: string): Promise<number> {
    try {
      const position = await this.storage.getStakingPositionById(positionId);
      if (!position || position.status !== 'active') {
        return 0;
      }
      
      const result = await this.calculatePositionReward(position);
      return result.totalReward;
    } catch (error) {
      console.error(`Error calculating rewards for position ${positionId}:`, error);
      return 0;
    }
  }

  /**
   * Update staking position with new reward amounts
   */
  private async updateStakingPositionRewards(positionId: string, claimableRewards: number, lastCalculation: Date) {
    try {
      // This would typically update the database
      // For now, we'll use a placeholder implementation
      console.log(`Updating position ${positionId} with ${claimableRewards.toFixed(6)} claimable rewards`);
      
      // In a real implementation, this would call storage.updateStakingPosition
      // await this.storage.updateStakingPosition(positionId, {
      //   claimableRewards: claimableRewards.toString(),
      //   lastRewardCalculation: lastCalculation.toISOString()
      // });
    } catch (error) {
      console.error(`Error updating position ${positionId}:`, error);
      throw error;
    }
  }

  /**
   * Get reward statistics for all positions
   */
  public async getRewardStatistics() {
    try {
      const allPositions = await this.storage.getAllStakingPositions();
      const activePositions = allPositions.filter(pos => pos.status === 'active');
      
      const totalStaked = activePositions.reduce((sum, pos) => sum + parseFloat(pos.stakedAmount), 0);
      const totalRewards = activePositions.reduce((sum, pos) => sum + parseFloat(pos.claimableRewards || '0'), 0);
      const averageAPY = activePositions.length > 0 
        ? activePositions.reduce((sum, pos) => sum + pos.apy, 0) / activePositions.length 
        : 0;
      
      return {
        totalActivePositions: activePositions.length,
        totalStaked,
        totalClaimableRewards: totalRewards,
        averageAPY,
        lastCalculation: new Date().toISOString()
      };
    } catch (error) {
      console.error('Error getting reward statistics:', error);
      throw error;
    }
  }

  /**
   * Process reward claim and update position
   */
  public async processRewardClaim(positionId: string, claimedAmount: number, transactionHash: string) {
    try {
      const position = await this.storage.getStakingPositionById(positionId);
      if (!position) {
        throw new Error('Staking position not found');
      }
      
      const currentClaimable = parseFloat(position.claimableRewards || '0');
      const remainingRewards = Math.max(0, currentClaimable - claimedAmount);
      
      // Update position with remaining rewards
      await this.updateStakingPositionRewards(positionId, remainingRewards, new Date());
      
      console.log(`✅ Processed claim: ${claimedAmount} EEEEE from position ${positionId}`);
      
      return {
        claimedAmount,
        remainingRewards,
        transactionHash
      };
    } catch (error) {
      console.error(`Error processing reward claim for position ${positionId}:`, error);
      throw error;
    }
  }
}

// Singleton instance
let rewardCalculatorInstance: RewardCalculator | null = null;

export function getRewardCalculator(storage: IStorage): RewardCalculator {
  if (!rewardCalculatorInstance) {
    rewardCalculatorInstance = new RewardCalculator(storage);
  }
  return rewardCalculatorInstance;
}

export function startRewardCalculationService(storage: IStorage) {
  const calculator = getRewardCalculator(storage);
  calculator.startRewardCalculation();
  return calculator;
}