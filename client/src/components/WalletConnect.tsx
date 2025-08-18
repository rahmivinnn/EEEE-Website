import { useState } from 'react';
import { Wallet, ExternalLink, Copy, CheckCircle, AlertCircle } from 'lucide-react';
import { useCardanoWallet } from '@/hooks/useCardanoWallet';
import { useToast } from '@/hooks/use-toast';

export default function WalletConnect() {
  const [showWallets, setShowWallets] = useState(false);
  const { toast } = useToast();
  const {
    connected,
    wallet,
    address,
    balance,
    loading,
    error,
    availableWallets,
    connectWallet,
    disconnectWallet,
  } = useCardanoWallet();

  const copyAddress = async () => {
    if (address) {
      await navigator.clipboard.writeText(address);
      toast({
        title: "Address Copied",
        description: "Wallet address copied to clipboard",
      });
    }
  };

  const formatAddress = (addr: string) => {
    if (!addr) return '';
    return `${addr.slice(0, 8)}...${addr.slice(-8)}`;
  };

  if (connected && wallet) {
    return (
      <div className="bg-gradient-to-br from-zinc-900/90 to-black/90 backdrop-blur-xl border border-zinc-800 rounded-2xl p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="text-2xl">{wallet.icon}</div>
            <div>
              <h3 className="font-semibold text-white">{wallet.name}</h3>
              <div className="flex items-center gap-2 text-sm text-zinc-400">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Connected
              </div>
            </div>
          </div>
          <button
            onClick={disconnectWallet}
            className="px-4 py-2 bg-red-500/20 text-red-400 rounded-lg hover:bg-red-500/30 transition-colors"
          >
            Disconnect
          </button>
        </div>

        <div className="space-y-3">
          <div className="flex items-center justify-between p-3 bg-zinc-800/50 rounded-lg">
            <span className="text-zinc-400">Balance</span>
            <span className="font-mono text-lg text-white">{balance} ADA</span>
          </div>
          
          <div className="flex items-center justify-between p-3 bg-zinc-800/50 rounded-lg">
            <span className="text-zinc-400">Address</span>
            <div className="flex items-center gap-2">
              <span className="font-mono text-sm text-white">{formatAddress(address || '')}</span>
              <button
                onClick={copyAddress}
                className="p-1 hover:bg-zinc-700 rounded"
              >
                <Copy className="w-4 h-4 text-zinc-400" />
              </button>
            </div>
          </div>
        </div>

        {error && (
          <div className="mt-4 p-3 bg-red-500/20 border border-red-500/30 rounded-lg flex items-center gap-2">
            <AlertCircle className="w-5 h-5 text-red-400" />
            <span className="text-red-400 text-sm">{error}</span>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-zinc-900/90 to-black/90 backdrop-blur-xl border border-zinc-800 rounded-2xl p-6">
      <div className="text-center mb-6">
        <Wallet className="w-12 h-12 text-violet-400 mx-auto mb-3" />
        <h3 className="text-xl font-semibold text-white mb-2">Connect Cardano Wallet</h3>
        <p className="text-zinc-400 text-sm">
          Connect your Cardano wallet to view real balance and make transactions
        </p>
      </div>

      {!showWallets ? (
        <button
          onClick={() => setShowWallets(true)}
          disabled={loading}
          className="w-full px-6 py-3 bg-gradient-to-r from-violet-500 to-purple-500 text-white font-semibold rounded-xl hover:from-violet-600 hover:to-purple-600 transition-all duration-300 disabled:opacity-50"
        >
          {loading ? 'Connecting...' : 'Connect Wallet'}
        </button>
      ) : (
        <div className="space-y-3">
          <h4 className="text-sm font-medium text-zinc-300 mb-3">Choose Your Wallet:</h4>
          
          {availableWallets.length === 0 ? (
            <div className="text-center py-6">
              <AlertCircle className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
              <p className="text-zinc-400 text-sm mb-3">No Cardano wallets detected</p>
              <p className="text-xs text-zinc-500">
                Please install Lace, Nami, Eternl, or another Cardano wallet extension
              </p>
              <a
                href="https://www.lace.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-violet-400 hover:text-violet-300 text-sm mt-2"
              >
                Download Lace <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          ) : (
            availableWallets.map((walletInfo) => (
              <button
                key={walletInfo.name}
                onClick={() => connectWallet(walletInfo)}
                disabled={loading}
                className="w-full p-3 bg-zinc-800/50 hover:bg-zinc-800/70 border border-zinc-700 rounded-lg transition-colors flex items-center gap-3 disabled:opacity-50"
              >
                <div className="text-2xl">{walletInfo.icon}</div>
                <span className="text-white font-medium">{walletInfo.name}</span>
              </button>
            ))
          )}
          
          <button
            onClick={() => setShowWallets(false)}
            className="w-full mt-4 px-4 py-2 text-zinc-400 hover:text-white transition-colors"
          >
            Cancel
          </button>
        </div>
      )}

      {error && (
        <div className="mt-4 p-3 bg-red-500/20 border border-red-500/30 rounded-lg flex items-center gap-2">
          <AlertCircle className="w-5 h-5 text-red-400" />
          <span className="text-red-400 text-sm">{error}</span>
        </div>
      )}
    </div>
  );
}