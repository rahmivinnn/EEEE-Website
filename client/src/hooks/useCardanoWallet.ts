import { useState, useEffect, useCallback } from 'react';
import { Buffer } from 'buffer';
import { LaceLogo, NamiLogo, EternlLogo, FlintLogo, YoroiLogo, GeroLogo } from '@/components/CardanoLogos';
import { SmartContractService, SMART_CONTRACT_CONFIG } from '@/utils/smartContract';

declare global {
  interface Window {
    cardano?: {
      lace?: any;
      nami?: any;
      eternl?: any;
      flint?: any;
      yoroi?: any;
      gerowallet?: any;
    };
  }
}

interface WalletInfo {
  name: string;
  icon: string | React.ComponentType<{ className?: string }>;
  api: any;
}

interface WalletState {
  connected: boolean;
  wallet: WalletInfo | null;
  address: string | null;
  balance: string | null;
  loading: boolean;
  error: string | null;
  smartContractService: SmartContractService | null;
}

export function useCardanoWallet() {
  const [state, setState] = useState<WalletState>({
    connected: false,
    wallet: null,
    address: null,
    balance: null,
    loading: false,
    error: null,
    smartContractService: null,
  });

  // Check available wallets
  const getAvailableWallets = (): WalletInfo[] => {
    const wallets: WalletInfo[] = [];
    
    if (typeof window !== 'undefined' && window.cardano) {
      if (window.cardano.lace) {
        wallets.push({
          name: 'Lace',
          icon: LaceLogo,
          api: window.cardano.lace
        });
      }
      if (window.cardano.nami) {
        wallets.push({
          name: 'Nami',
          icon: NamiLogo,
          api: window.cardano.nami
        });
      }
      if (window.cardano.eternl) {
        wallets.push({
          name: 'Eternl',
          icon: EternlLogo,
          api: window.cardano.eternl
        });
      }
      if (window.cardano.flint) {
        wallets.push({
          name: 'Flint',
          icon: FlintLogo,
          api: window.cardano.flint
        });
      }
      if (window.cardano.yoroi) {
        wallets.push({
          name: 'Yoroi',
          icon: YoroiLogo,
          api: window.cardano.yoroi
        });
      }
      if (window.cardano.gerowallet) {
        wallets.push({
          name: 'GeroWallet',
          icon: GeroLogo,
          api: window.cardano.gerowallet
        });
      }
    }
    
    return wallets;
  };

  // Connect to wallet
  const connectWallet = async (walletInfo: WalletInfo) => {
    setState(prev => ({ ...prev, loading: true, error: null }));
    
    try {
      // Enable wallet API
      const api = await walletInfo.api.enable();
      
      // Get wallet address
      const addresses = await api.getUsedAddresses();
      const addressHex = addresses[0];
      
      // Convert hex address to bech32
      const networkId = await api.getNetworkId();
      
      // Get balance
      const balanceHex = await api.getBalance();
      const balanceLovelace = parseInt(balanceHex, 16);
      const balanceAda = (balanceLovelace / 1_000_000).toFixed(6);
      
      // Initialize smart contract service
      const contractService = new SmartContractService(api);
      
      setState(prev => ({
        ...prev,
        connected: true,
        wallet: walletInfo,
        address: addressHex,
        balance: balanceAda,
        loading: false,
        error: null,
        smartContractService: contractService,
      }));

      // Store connection in localStorage
      localStorage.setItem('connectedWallet', walletInfo.name);
      
    } catch (error) {
      setState(prev => ({
        ...prev,
        loading: false,
        error: error instanceof Error ? error.message : 'Failed to connect wallet',
      }));
    }
  };

  // Disconnect wallet
  const disconnectWallet = () => {
    setState({
      connected: false,
      wallet: null,
      address: null,
      balance: null,
      loading: false,
      error: null,
      smartContractService: null,
    });
    localStorage.removeItem('connectedWallet');
  };

  // Auto-reconnect on page load
  useEffect(() => {
    const savedWallet = localStorage.getItem('connectedWallet');
    console.log('🔄 Auto-reconnect check:', { savedWallet });

    if (savedWallet) {
      // Wait a bit for wallet extensions to load
      setTimeout(() => {
        const availableWallets = getAvailableWallets();
        console.log('🔍 Available wallets:', availableWallets.map(w => w.name));

        const wallet = availableWallets.find(w => w.name === savedWallet);
        if (wallet) {
          console.log('🔗 Auto-reconnecting to:', wallet.name);
          connectWallet(wallet);
        } else {
          console.log('❌ Saved wallet not found, clearing localStorage');
          localStorage.removeItem('connectedWallet');
        }
      }, 1000);
    }
  }, []);

  // Get UTXO for transactions
  const getUtxos = async () => {
    if (!state.wallet?.api) return [];
    try {
      const api = await state.wallet.api.enable();
      return await api.getUtxos();
    } catch (error) {
      console.error('Failed to get UTXOs:', error);
      return [];
    }
  };

  // Submit transaction
  const submitTransaction = async (txCbor: string) => {
    if (!state.wallet?.api) throw new Error('No wallet connected');
    
    try {
      const api = await state.wallet.api.enable();
      const txHash = await api.submitTx(txCbor);
      return txHash;
    } catch (error) {
      throw new Error(error instanceof Error ? error.message : 'Failed to submit transaction');
    }
  };

  // Sign transaction (CIP-30)
  const signTransaction = async (txCbor: string, partialSign: boolean = false) => {
    if (!state.wallet?.api) throw new Error('No wallet connected');
    
    try {
      const api = await state.wallet.api.enable();
      const witnessSet = await api.signTx(txCbor, partialSign);
      return witnessSet;
    } catch (error) {
      throw new Error(error instanceof Error ? error.message : 'Failed to sign transaction');
    }
  };

  // Sign data (CIP-30)
  const signData = async (address: string, payload: string) => {
    if (!state.wallet?.api) throw new Error('No wallet connected');
    
    try {
      const api = await state.wallet.api.enable();
      const signature = await api.signData(address, payload);
      return signature;
    } catch (error) {
      throw new Error(error instanceof Error ? error.message : 'Failed to sign data');
    }
  };

  // Get collateral UTXOs
  const getCollateral = async () => {
    if (!state.wallet?.api) return [];
    
    try {
      const api = await state.wallet.api.enable();
      return await api.getCollateral();
    } catch (error) {
      console.error('Failed to get collateral:', error);
      return [];
    }
  };

  // Stake tokens to smart contract
  const stakeTokens = useCallback(async (
    amount: string,
    lockPeriod: 'flexible' | '30' | '90',
    smartContractAddress: string
  ): Promise<string> => {
    if (!state.smartContractService) throw new Error('Smart contract service not initialized');
    
    try {
      setState(prev => ({ ...prev, loading: true, error: null }));
      
      // Use smart contract service to stake tokens
      const txHash = await state.smartContractService.stakeTokens(amount, lockPeriod);
      
      console.log('✅ Staking transaction submitted:', txHash);
      return txHash;
    } catch (error) {
      console.error('❌ Staking failed:', error);
      const errorMessage = error instanceof Error ? error.message : 'Failed to stake tokens';
      setState(prev => ({ ...prev, error: `Staking failed: ${errorMessage}` }));
      throw error;
    } finally {
      setState(prev => ({ ...prev, loading: false }));
    }
  }, [state.smartContractService]);

  // Claim rewards from smart contract
  const claimRewards = useCallback(async (
    stakingPositionId: string,
    smartContractAddress: string
  ): Promise<string> => {
    if (!state.smartContractService) throw new Error('Smart contract service not initialized');
    
    try {
      setState(prev => ({ ...prev, loading: true, error: null }));
      
      // Use smart contract service to claim rewards
      const txHash = await state.smartContractService.claimRewards(stakingPositionId);
      
      console.log('✅ Claim transaction submitted:', txHash);
      return txHash;
    } catch (error) {
      console.error('❌ Claim failed:', error);
      const errorMessage = error instanceof Error ? error.message : 'Failed to claim rewards';
      setState(prev => ({ ...prev, error: `Claim failed: ${errorMessage}` }));
      throw error;
    } finally {
      setState(prev => ({ ...prev, loading: false }));
    }
  }, [state.smartContractService]);

  // Unstake tokens from smart contract
  const unstakeTokens = useCallback(async (
    stakingPositionId: string,
    smartContractAddress: string
  ): Promise<string> => {
    if (!state.smartContractService) throw new Error('Smart contract service not initialized');
    
    try {
      setState(prev => ({ ...prev, loading: true, error: null }));
      
      // Use smart contract service to unstake tokens
      const txHash = await state.smartContractService.unstakeTokens(stakingPositionId);
      
      console.log('✅ Unstake transaction submitted:', txHash);
      return txHash;
    } catch (error) {
      console.error('❌ Unstake failed:', error);
      const errorMessage = error instanceof Error ? error.message : 'Failed to unstake tokens';
      setState(prev => ({ ...prev, error: `Unstake failed: ${errorMessage}` }));
      throw error;
    } finally {
      setState(prev => ({ ...prev, loading: false }));
    }
  }, [state.smartContractService]);

  return {
    ...state,
    availableWallets: getAvailableWallets(),
    connectWallet,
    disconnectWallet,
    getUtxos,
    submitTransaction,
    signTransaction,
    signData,
    getCollateral,
    stakeTokens,
    claimRewards,
    unstakeTokens,
  };
}