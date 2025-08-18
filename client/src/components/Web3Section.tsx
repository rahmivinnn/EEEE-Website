import { useState, useEffect } from "react";
// Using real SVG icons instead of AI-generated ones
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useQuery } from "@tanstack/react-query";
import EEEEEPopup from "@/components/EEEEEPopup";

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

  // Get EEEEE token data from real-time API
  const eeeeeToken = Array.isArray(tokenPrices) ? tokenPrices.find((token: any) => token.symbol === 'EEEEE') : null;
  const price = eeeeeToken?.price || "Loading...";
  const volume24h = eeeeeToken?.volume24h || "Loading...";  
  const marketCap = eeeeeToken?.marketCap || "Loading...";
  const holders = eeeeeToken?.holders || "Loading...";
  const change24h = eeeeeToken?.change24h || "0.00";
  const priceAda = eeeeeToken?.priceAda || "Loading...";
  const dataSource = eeeeeToken?.dataSource || "Market Data";
  const adaPrice = eeeeeToken?.adaPrice || 0.91;

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
    <section id="web3" className="py-32 px-6 lg:px-8 relative pt-40" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className={`text-center mb-20 section-fade ${isInView ? 'in-view' : ''}`}>
          <h2 className="font-anton text-5xl lg:text-6xl uppercase mb-6 tracking-wider">
            <span className="bg-gradient-to-r from-purple-400 via-violet-400 to-yellow-400 bg-clip-text text-transparent">
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
            <h3 className="text-2xl font-bold text-white mb-4 text-center tracking-wide text-glow">
              LIVE MARKET DATA
              <span className="inline-block w-3 h-3 bg-green-500 rounded-full ml-3 animate-pulse"></span>
            </h3>
            <p className="text-center text-xs text-zinc-400 mb-4">
              {dataSource} • ADA: ${adaPrice?.toFixed(3)} • Updated: {eeeeeToken?.lastUpdated ? new Date(eeeeeToken.lastUpdated).toLocaleTimeString() : 'Now'}
            </p>
            <div className="text-center text-xs text-green-400 mb-6 flex items-center justify-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              Live Market Data
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-4 bg-gradient-to-br from-purple-500/10 to-yellow-500/10 rounded-2xl border border-purple-500/20">
                <svg className="w-6 h-6 mx-auto mb-2 text-purple-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  <circle cx="12" cy="8" r="2"/>
                  <path d="M12 12c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
                <div className="text-3xl font-bold text-purple-400 mb-2">{price}</div>
                <div className="text-sm text-zinc-400">PRICE</div>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-yellow-500/10 to-purple-500/10 rounded-2xl border border-yellow-500/20">
                <svg className="w-6 h-6 mx-auto mb-2 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zM4 18v-4h3v4h2v-7.5c0-1.1.9-2 2-2h2c1.1 0 2 .9 2 2V18h2v-4h3v4h2v-7.5c0-2.21-1.79-4-4-4H8c-2.21 0-4 1.79-4 4V18h2z"/>
                </svg>
                <div className="text-3xl font-bold text-yellow-400 mb-2">{holders}</div>
                <div className="text-sm text-zinc-400">HOLDERS</div>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-purple-500/10 to-violet-500/10 rounded-2xl border border-purple-500/20">
                <svg className="w-6 h-6 mx-auto mb-2 text-purple-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22,21H2V3H4V19H6V10H10V19H12V6H16V19H18V14H22V21Z"/>
                </svg>
                <div className="text-3xl font-bold text-purple-400 mb-2">{volume24h}</div>
                <div className="text-sm text-zinc-400">24H VOLUME</div>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-yellow-500/10 to-amber-500/10 rounded-2xl border border-yellow-500/20">
                <svg className="w-6 h-6 mx-auto mb-2 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M12,6A6,6 0 0,0 6,12A6,6 0 0,0 12,18A6,6 0 0,0 18,12A6,6 0 0,0 12,6M12,8A4,4 0 0,1 16,12A4,4 0 0,1 12,16A4,4 0 0,1 8,12A4,4 0 0,1 12,8Z"/>
                </svg>
                <div className="text-3xl font-bold text-yellow-400 mb-2">{marketCap}</div>
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
              <div className="p-3 bg-gradient-to-br from-purple-500 to-yellow-600 rounded-xl">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M21,18V19A2,2 0 0,1 19,21H5C3.89,21 3,20.1 3,19V5A2,2 0 0,1 5,3H19A2,2 0 0,1 21,5V6H12A2,2 0 0,0 10,8V16A2,2 0 0,0 12,18M12,16H22V8H12M16,13.5A1.5,1.5 0 0,1 14.5,12A1.5,1.5 0 0,1 16,10.5A1.5,1.5 0 0,1 17.5,12A1.5,1.5 0 0,1 16,13.5Z"/>
                </svg>
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
                  className="w-full py-4 bg-gradient-to-r from-purple-600 to-yellow-600 rounded-xl font-bold text-lg tracking-wide hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/25"
                >
                  CONNECT WALLET
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-yellow-500/20 to-purple-500/20 rounded-xl border border-yellow-500/30">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse"></div>
                  <span className="text-yellow-400 font-bold">WALLET CONNECTED</span>
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
              <div className="p-3 bg-gradient-to-br from-yellow-500 to-purple-600 rounded-xl">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,7C13.4,7 14.8,8.6 14.8,10V11.5C15.4,11.5 16,12.1 16,12.7V16.2C16,16.8 15.4,17.3 14.8,17.3H9.2C8.6,17.3 8,16.8 8,16.2V12.7C8,12.1 8.6,11.5 9.2,11.5V10C9.2,8.6 10.6,7 12,7M12,8.2C11.2,8.2 10.5,8.7 10.5,10V11.5H13.5V10C13.5,8.7 12.8,8.2 12,8.2Z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white tracking-wide">STAKING POOL</h3>
            </div>
            
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="p-3 bg-gradient-to-br from-purple-500/10 to-yellow-500/10 rounded-xl">
                  <div className="text-2xl font-bold text-purple-400">24.7%</div>
                  <div className="text-xs text-zinc-400">APY</div>
                </div>
                <div className="p-3 bg-gradient-to-br from-yellow-500/10 to-purple-500/10 rounded-xl">
                  <div className="text-2xl font-bold text-yellow-400">847K</div>
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
                  className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-xl text-white focus:border-purple-500 focus:outline-none transition-colors"
                />
                <button
                  onClick={handleStaking}
                  disabled={!stakingAmount || !walletConnected}
                  className="w-full py-3 bg-gradient-to-r from-yellow-600 to-purple-600 rounded-xl font-bold tracking-wide hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
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
              icon: <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M7,2V13H10V22L17,10H13L17,2H7Z"/></svg>,
              title: "Lightning Fast",
              description: "Sub-second transaction finality on Cardano's advanced blockchain infrastructure",
              gradient: "from-purple-500 to-yellow-500"
            },
            {
              icon: <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,7C13.4,7 14.8,8.6 14.8,10V11.5C15.4,11.5 16,12.1 16,12.7V16.2C16,16.8 15.4,17.3 14.8,17.3H9.2C8.6,17.3 8,16.8 8,16.2V12.7C8,12.1 8.6,11.5 9.2,11.5V10C9.2,8.6 10.6,7 12,7M12,8.2C11.2,8.2 10.5,8.7 10.5,10V11.5H13.5V10C13.5,8.7 12.8,8.2 12,8.2Z"/></svg>,
              title: "Military Grade Security",
              description: "Multi-signature wallets and smart contract audits by top security firms",
              gradient: "from-yellow-500 to-purple-500"
            },
            {
              icon: <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6M6,4H13V9H18V20H6V4M8,12V14H16V12H8M8,16V18H13V16H8Z"/></svg>,
              title: "Cross-Chain Bridge",
              description: "Seamlessly bridge assets across Ethereum, Polygon, and Cardano networks",
              gradient: "from-purple-500 to-yellow-500"
            },
            {
              icon: <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M16,6L18.29,8.29L13.41,13.17L9.41,9.17L2,16.59L3.41,18L9.41,12L13.41,16L19.71,9.71L22,12V6H16Z"/></svg>,
              title: "Yield Farming",
              description: "Earn up to 127% APY through our automated liquidity mining protocols",
              gradient: "from-purple-500 to-violet-500"
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
                <div className="h-48 bg-gradient-to-r from-violet-500/10 to-purple-500/10 rounded-xl relative overflow-hidden">
                  {/* Mock Chart Lines */}
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 200">
                    <defs>
                      <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" style={{stopColor: '#8B5CF6', stopOpacity: 0.4}} />
                        <stop offset="100%" style={{stopColor: '#8B5CF6', stopOpacity: 0}} />
                      </linearGradient>
                    </defs>
                    {/* Chart line */}
                    <polyline
                      fill="none"
                      stroke="#8B5CF6"
                      strokeWidth="2"
                      points="20,150 60,120 100,140 140,100 180,90 220,70 260,85 300,60 340,45 380,30"
                    />
                    {/* Fill area */}
                    <polygon
                      fill="url(#chartGradient)"
                      points="20,150 60,120 100,140 140,100 180,90 220,70 260,85 300,60 340,45 380,30 380,200 20,200"
                    />
                    {/* Grid lines */}
                    <g stroke="#374151" strokeWidth="0.5" opacity="0.3">
                      <line x1="0" y1="50" x2="400" y2="50" />
                      <line x1="0" y1="100" x2="400" y2="100" />
                      <line x1="0" y1="150" x2="400" y2="150" />
                      <line x1="100" y1="0" x2="100" y2="200" />
                      <line x1="200" y1="0" x2="200" y2="200" />
                      <line x1="300" y1="0" x2="300" y2="200" />
                    </g>
                  </svg>
                  <div className="absolute bottom-4 left-4 text-violet-300 font-medium">
                    $EEEEE: $0.000005 (+12.4%)
                  </div>
                  <div className="absolute top-4 right-4 text-xs text-zinc-400">
                    Live Chart
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-black/50 rounded-2xl p-4 border border-zinc-700">
                <h4 className="text-violet-400 font-bold mb-3">ORDER BOOK</h4>
                <div className="flex justify-between text-xs text-zinc-500 mb-2">
                  <span>Price (ADA)</span>
                  <span>Amount ($EEEEE)</span>
                </div>
                <div className="space-y-1 text-xs">
                  <div className="flex justify-between text-red-400 hover:bg-red-500/10 px-2 py-1 rounded">
                    <span>0.004285</span>
                    <span>12,450,890</span>
                  </div>
                  <div className="flex justify-between text-red-400 hover:bg-red-500/10 px-2 py-1 rounded">
                    <span>0.004280</span>
                    <span>8,920,456</span>
                  </div>
                  <div className="border-t border-zinc-600 my-2"></div>
                  <div className="flex justify-between text-green-400 hover:bg-green-500/10 px-2 py-1 rounded">
                    <span>0.004275</span>
                    <span>15,680,234</span>
                  </div>
                  <div className="flex justify-between text-green-400 hover:bg-green-500/10 px-2 py-1 rounded">
                    <span>0.004270</span>
                    <span>22,340,567</span>
                  </div>
                  <div className="flex justify-between text-green-400 hover:bg-green-500/10 px-2 py-1 rounded">
                    <span>0.004265</span>
                    <span>18,920,123</span>
                  </div>
                  <div className="flex justify-between text-green-400 hover:bg-green-500/10 px-2 py-1 rounded">
                    <span>0.004260</span>
                    <span>25,450,890</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-black/50 rounded-2xl p-4 border border-zinc-700">
                <h4 className="text-yellow-400 font-bold mb-3">RECENT TRADES</h4>
                <div className="flex justify-between text-xs text-zinc-500 mb-2">
                  <span>Price</span>
                  <span>Amount</span>
                  <span>Time</span>
                </div>
                <div className="space-y-1 text-xs">
                  <div className="flex justify-between text-green-400">
                    <span>0.004275</span>
                    <span>1,245K</span>
                    <span>11:04:23</span>
                  </div>
                  <div className="flex justify-between text-red-400">
                    <span>0.004270</span>
                    <span>890K</span>
                    <span>11:04:19</span>
                  </div>
                  <div className="flex justify-between text-green-400">
                    <span>0.004278</span>
                    <span>2,156K</span>
                    <span>11:04:15</span>
                  </div>
                  <div className="flex justify-between text-green-400">
                    <span>0.004282</span>
                    <span>567K</span>
                    <span>11:04:12</span>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <EEEEEPopup>
                  <button className="w-full py-3 bg-gradient-to-r from-violet-600 to-purple-600 rounded-xl font-bold tracking-wide hover:scale-105 transition-all duration-300">
                    TRADE NOW
                  </button>
                </EEEEEPopup>
              </div>
            </div>
          </div>
        </div>

        {/* Trading Features */}
        <div className={`mt-12 grid md:grid-cols-3 gap-6 section-fade ${isInView ? 'in-view' : ''}`} style={{animationDelay: '1.0s'}}>
          <div className="bg-gradient-to-br from-zinc-900/90 to-black/90 backdrop-blur-xl border border-zinc-800 rounded-2xl p-6 text-center">
            <div className="inline-flex p-3 rounded-xl bg-gradient-to-r from-violet-500 to-purple-500 mb-4">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19,3A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3H19M5,5V19H19V5H5Z"/>
              </svg>
            </div>
            <h4 className="text-lg font-bold text-white mb-2">Advanced Orders</h4>
            <p className="text-zinc-400 text-sm">Stop-loss, take-profit, and limit orders with professional tools</p>
          </div>
          
          <div className="bg-gradient-to-br from-zinc-900/90 to-black/90 backdrop-blur-xl border border-zinc-800 rounded-2xl p-6 text-center">
            <div className="inline-flex p-3 rounded-xl bg-gradient-to-r from-yellow-500 to-orange-500 mb-4">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12,2L13.09,8.26L22,9L13.09,9.74L12,16L10.91,9.74L2,9L10.91,8.26L12,2Z"/>
              </svg>
            </div>
            <h4 className="text-lg font-bold text-white mb-2">Lightning Fast</h4>
            <p className="text-zinc-400 text-sm">Sub-second order execution on Cardano's high-performance network</p>
          </div>
          
          <div className="bg-gradient-to-br from-zinc-900/90 to-black/90 backdrop-blur-xl border border-zinc-800 rounded-2xl p-6 text-center">
            <div className="inline-flex p-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 mb-4">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M10,17L6,13L7.41,11.59L10,14.17L16.59,7.58L18,9L10,17Z"/>
              </svg>
            </div>
            <h4 className="text-lg font-bold text-white mb-2">Secure Trading</h4>
            <p className="text-zinc-400 text-sm">Multi-signature security with institutional-grade protection</p>
          </div>
        </div>
      </div>
    </section>
  );
}