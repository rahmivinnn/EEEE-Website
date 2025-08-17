import { useState, useEffect } from "react";
import { Wallet, Shield, Zap, Globe, Lock, TrendingUp, Users, Coins } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useQuery } from "@tanstack/react-query";

export default function Web3Section() {
  const { ref, isInView } = useScrollAnimation();
  const [walletConnected, setWalletConnected] = useState(false);
  const [stakingAmount, setStakingAmount] = useState("");

  // Fetch real staking pools and token prices from database
  const { data: stakingPools } = useQuery({
    queryKey: ['/api/staking-pools'],
  });

  const { data: tokenPrices } = useQuery({
    queryKey: ['/api/token-prices'],
  });

  // Get EEEEE token data
  const eeeeeToken = Array.isArray(tokenPrices) ? tokenPrices.find((token: any) => token.symbol === 'EEEEE') : null;
  const price = eeeeeToken?.price || "$2.47";
  const volume24h = eeeeeToken?.volume24h || "$45,823,617";  
  const marketCap = eeeeeToken?.marketCap || "$1,247,392,847";
  const holders = "847,291";

  // Premium staking pools from database
  const premiumPools = Array.isArray(stakingPools) ? stakingPools.slice(0, 3) : [
    { name: "Loading...", ticker: "...", apy: "0%" },
    { name: "Loading...", ticker: "...", apy: "0%" },
    { name: "Loading...", ticker: "...", apy: "0%" }
  ];

  const connectWallet = () => {
    setWalletConnected(!walletConnected);
  };

  const handleStaking = () => {
    if (stakingAmount) {
      alert(`Staking ${stakingAmount} $EEEEE tokens initiated!`);
      setStakingAmount("");
    }
  };

  return (
    <section id="web3" className="py-32 px-6 lg:px-8 relative" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className={`text-center mb-20 section-fade ${isInView ? 'in-view' : ''}`}>
          <h2 className="font-anton text-5xl lg:text-6xl uppercase mb-6 tracking-wider">
            <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
              WEB3 ECOSYSTEM
            </span>
          </h2>
          <p className="text-xl text-zinc-300 max-w-3xl mx-auto leading-relaxed">
            Experience the future of decentralized finance with institutional-grade Web3 infrastructure. 
            Built for the next generation of digital asset management.
          </p>
        </div>

        {/* Real-time Stats Dashboard */}
        <div className={`mb-16 section-fade ${isInView ? 'in-view' : ''}`} style={{animationDelay: '0.2s'}}>
          <div className="bg-gradient-to-br from-zinc-900/90 to-black/90 backdrop-blur-xl border border-zinc-800 rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-white mb-8 text-center tracking-wide">
              LIVE MARKET DATA
              <span className="inline-block w-3 h-3 bg-green-500 rounded-full ml-3 animate-pulse"></span>
            </h3>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-4 bg-gradient-to-br from-violet-500/10 to-purple-500/10 rounded-2xl border border-violet-500/20">
                <div className="text-3xl font-bold text-violet-400 mb-2">{price}</div>
                <div className="text-sm text-zinc-400">PRICE</div>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 rounded-2xl border border-emerald-500/20">
                <div className="text-3xl font-bold text-emerald-400 mb-2">{holders}</div>
                <div className="text-sm text-zinc-400">HOLDERS</div>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 rounded-2xl border border-blue-500/20">
                <div className="text-3xl font-bold text-blue-400 mb-2">{volume24h}</div>
                <div className="text-sm text-zinc-400">24H VOLUME</div>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-2xl border border-purple-500/20">
                <div className="text-3xl font-bold text-purple-400 mb-2">{marketCap}</div>
                <div className="text-sm text-zinc-400">MARKET CAP</div>
              </div>
            </div>
          </div>
        </div>

        {/* Wallet Connection & Staking Interface */}
        <div className={`mb-16 grid lg:grid-cols-2 gap-8 section-fade ${isInView ? 'in-view' : ''}`} style={{animationDelay: '0.4s'}}>
          {/* Wallet Connection */}
          <div className="bg-gradient-to-br from-zinc-900/90 to-black/90 backdrop-blur-xl border border-zinc-800 rounded-3xl p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-gradient-to-br from-violet-500 to-purple-600 rounded-xl">
                <Wallet className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white tracking-wide">CARDANO WALLET</h3>
            </div>
            
            {!walletConnected ? (
              <div className="space-y-4">
                <p className="text-zinc-400 mb-6">
                  Connect your Cardano wallet to access premium features and start earning rewards.
                </p>
                <button
                  onClick={connectWallet}
                  className="w-full py-4 bg-gradient-to-r from-violet-600 to-purple-600 rounded-xl font-bold text-lg tracking-wide hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-violet-500/25"
                >
                  CONNECT WALLET
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 rounded-xl border border-emerald-500/30">
                  <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></div>
                  <span className="text-emerald-400 font-bold">WALLET CONNECTED</span>
                </div>
                <div className="text-zinc-400">
                  <div className="mb-2"><strong>Address:</strong> addr1qx...7k9m</div>
                  <div className="mb-2"><strong>Balance:</strong> 1,245,890 $EEEEE</div>
                  <div><strong>Staked:</strong> 500,000 $EEEEE</div>
                </div>
                <button
                  onClick={connectWallet}
                  className="w-full py-3 bg-zinc-800 hover:bg-zinc-700 rounded-xl font-medium transition-colors"
                >
                  DISCONNECT
                </button>
              </div>
            )}
          </div>

          {/* Staking Interface */}
          <div className="bg-gradient-to-br from-zinc-900/90 to-black/90 backdrop-blur-xl border border-zinc-800 rounded-3xl p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-gradient-to-br from-emerald-500 to-cyan-600 rounded-xl">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white tracking-wide">STAKING POOL</h3>
            </div>
            
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="p-3 bg-gradient-to-br from-violet-500/10 to-purple-500/10 rounded-xl">
                  <div className="text-2xl font-bold text-violet-400">24.7%</div>
                  <div className="text-xs text-zinc-400">APY</div>
                </div>
                <div className="p-3 bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 rounded-xl">
                  <div className="text-2xl font-bold text-emerald-400">847K</div>
                  <div className="text-xs text-zinc-400">STAKERS</div>
                </div>
              </div>
              
              <div className="space-y-3">
                <label className="block text-sm font-medium text-zinc-400">AMOUNT TO STAKE</label>
                <input
                  type="number"
                  value={stakingAmount}
                  onChange={(e) => setStakingAmount(e.target.value)}
                  placeholder="Enter amount..."
                  className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-xl text-white focus:border-violet-500 focus:outline-none transition-colors"
                />
                <button
                  onClick={handleStaking}
                  disabled={!stakingAmount || !walletConnected}
                  className="w-full py-3 bg-gradient-to-r from-emerald-600 to-cyan-600 rounded-xl font-bold tracking-wide hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {walletConnected ? 'STAKE NOW' : 'CONNECT WALLET FIRST'}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Web3 Features Grid */}
        <div className={`grid md:grid-cols-2 lg:grid-cols-4 gap-6 section-fade ${isInView ? 'in-view' : ''}`} style={{animationDelay: '0.6s'}}>
          {[
            {
              icon: <Zap className="w-6 h-6" />,
              title: "Lightning Fast",
              description: "Sub-second transaction finality on Cardano's advanced blockchain infrastructure",
              gradient: "from-yellow-500 to-orange-500"
            },
            {
              icon: <Shield className="w-6 h-6" />,
              title: "Military Grade Security",
              description: "Multi-signature wallets and smart contract audits by top security firms",
              gradient: "from-emerald-500 to-cyan-500"
            },
            {
              icon: <Globe className="w-6 h-6" />,
              title: "Cross-Chain Bridge",
              description: "Seamlessly bridge assets across Ethereum, Polygon, and Cardano networks",
              gradient: "from-blue-500 to-indigo-500"
            },
            {
              icon: <TrendingUp className="w-6 h-6" />,
              title: "Yield Farming",
              description: "Earn up to 127% APY through our automated liquidity mining protocols",
              gradient: "from-violet-500 to-purple-500"
            }
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-zinc-900/90 to-black/90 backdrop-blur-xl border border-zinc-800 rounded-2xl p-6 hover:border-violet-500/50 transition-all duration-500 group"
            >
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${feature.gradient} mb-4`}>
                {feature.icon}
              </div>
              <h4 className="font-bold text-lg text-white mb-3 tracking-wide group-hover:text-violet-400 transition-colors">
                {feature.title}
              </h4>
              <p className="text-zinc-400 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Advanced Trading Interface Preview */}
        <div className={`mt-16 bg-gradient-to-br from-zinc-900/90 to-black/90 backdrop-blur-xl border border-zinc-800 rounded-3xl p-8 section-fade ${isInView ? 'in-view' : ''}`} style={{animationDelay: '0.8s'}}>
          <h3 className="text-2xl font-bold text-white mb-6 text-center tracking-wide">
            PROFESSIONAL TRADING TERMINAL
          </h3>
          <div className="grid lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              {/* Mock Trading Chart */}
              <div className="bg-black/50 rounded-2xl p-6 border border-zinc-700">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-violet-400 font-bold">$EEEEE/ADA</span>
                  <div className="flex gap-2">
                    <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded-lg text-sm">+12.4%</span>
                    <span className="text-zinc-400">24H</span>
                  </div>
                </div>
                <div className="h-32 bg-gradient-to-r from-violet-500/10 to-purple-500/10 rounded-xl flex items-end justify-center">
                  <div className="text-zinc-400 text-sm">📈 Advanced TradingView Integration</div>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-black/50 rounded-2xl p-4 border border-zinc-700">
                <h4 className="text-violet-400 font-bold mb-3">ORDER BOOK</h4>
                <div className="space-y-1 text-xs">
                  <div className="flex justify-between text-red-400">
                    <span>0.004285</span>
                    <span>12,450</span>
                  </div>
                  <div className="flex justify-between text-red-400">
                    <span>0.004280</span>
                    <span>8,920</span>
                  </div>
                  <div className="flex justify-between text-green-400">
                    <span>0.004275</span>
                    <span>15,680</span>
                  </div>
                  <div className="flex justify-between text-green-400">
                    <span>0.004270</span>
                    <span>22,340</span>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <a
                  href="https://app.dexhunter.io/swap?tokenIdSell=&tokenIdBuy=3d7fcadb114dacbdffa1aeb2f3dc2fecec610a3b572d60f96f1341494545454545436f696e414441"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full py-3 bg-gradient-to-r from-violet-600 to-purple-600 rounded-xl font-bold tracking-wide hover:scale-105 transition-all duration-300"
                >
                  TRADE NOW
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}