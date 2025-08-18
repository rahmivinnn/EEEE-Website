import { useState, useEffect } from 'react';

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
  icon: string;
  api: any;
}

interface WalletState {
  connected: boolean;
  wallet: WalletInfo | null;
  address: string | null;
  balance: string | null;
  loading: boolean;
  error: string | null;
}

export function useCardanoWallet() {
  const [state, setState] = useState<WalletState>({
    connected: false,
    wallet: null,
    address: null,
    balance: null,
    loading: false,
    error: null,
  });

  // Check available wallets
  const getAvailableWallets = (): WalletInfo[] => {
    const wallets: WalletInfo[] = [];
    
    if (typeof window !== 'undefined' && window.cardano) {
      if (window.cardano.lace) {
        wallets.push({
          name: 'Lace',
          icon: '🦋',
          api: window.cardano.lace
        });
      }
      if (window.cardano.nami) {
        wallets.push({
          name: 'Nami',
          icon: '🌊',
          api: window.cardano.nami
        });
      }
      if (window.cardano.eternl) {
        wallets.push({
          name: 'Eternl',
          icon: '♾️',
          api: window.cardano.eternl
        });
      }
      if (window.cardano.flint) {
        wallets.push({
          name: 'Flint',
          icon: '🔥',
          api: window.cardano.flint
        });
      }
      if (window.cardano.yoroi) {
        wallets.push({
          name: 'Yoroi',
          icon: '⛩️',
          api: window.cardano.yoroi
        });
      }
      if (window.cardano.gerowallet) {
        wallets.push({
          name: 'GeroWallet',
          icon: '🏛️',
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
      
      setState(prev => ({
        ...prev,
        connected: true,
        wallet: walletInfo,
        address: addressHex,
        balance: balanceAda,
        loading: false,
        error: null,
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
    });
    localStorage.removeItem('connectedWallet');
  };

  // Auto-reconnect on page load
  useEffect(() => {
    const savedWallet = localStorage.getItem('connectedWallet');
    if (savedWallet) {
      const availableWallets = getAvailableWallets();
      const wallet = availableWallets.find(w => w.name === savedWallet);
      if (wallet) {
        connectWallet(wallet);
      }
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

  return {
    ...state,
    availableWallets: getAvailableWallets(),
    connectWallet,
    disconnectWallet,
    getUtxos,
    submitTransaction,
  };
}