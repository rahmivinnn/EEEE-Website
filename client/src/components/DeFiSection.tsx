import { useState } from "react";
import { Coins, TrendingUp, Lock, Zap, ArrowUpRight, ArrowDownLeft, DollarSign } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useQuery } from "@tanstack/react-query";

export default function DeFiSection() {
  const { ref, isInView } = useScrollAnimation();
  const [activePool, setActivePool] = useState(0);
  const [swapAmount, setSwapAmount] = useState("");
  const [fromToken, setFromToken] = useState("ADA");
  const [toToken, setToToken] = useState("EEEEE");

  // Fetch real liquidity pools from database
  const { data: liquidityPoolsData } = useQuery({
    queryKey: ['/api/liquidity-pools'],
  });

  const liquidityPools = liquidityPoolsData && Array.isArray(liquidityPoolsData) ? liquidityPoolsData.map((pool: any) => ({
    pair: `${pool.tokenA}/${pool.tokenB}`,
    tvl: pool.tvl,
    apr: pool.apr,
    volume24h: pool.volume24h,
    fees24h: pool.fees,
    gradient: pool.tokenA === 'EEEEE' && pool.tokenB === 'ADA' ? "from-violet-500 to-purple-500" :
              pool.tokenA === 'EEEEE' && pool.tokenB === 'USDC' ? "from-emerald-500 to-cyan-500" :
              "from-blue-500 to-indigo-500"
  })) : [
    {
      pair: "Loading...",
      tvl: "$0",
      apr: "0%",
      volume24h: "$0",
      fees24h: "$0",
      gradient: "from-violet-500 to-purple-500"
    }
  ];

  const handleSwap = () => {
    if (swapAmount) {
      alert(`Swapping ${swapAmount} ${fromToken} for ${toToken}`);
      setSwapAmount("");
    }
  };

  const switchTokens = () => {
    setFromToken(toToken);
    setToToken(fromToken);
  };

  return (
    <section id="defi" className="py-32 px-6 lg:px-8 relative" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className={`text-center mb-20 section-fade ${isInView ? 'in-view' : ''}`}>
          <h2 className="font-anton text-5xl lg:text-6xl uppercase mb-6 tracking-wider">
            <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
              DEFI PROTOCOL
            </span>
          </h2>
          <p className="text-xl text-zinc-300 max-w-3xl mx-auto leading-relaxed">
            Next-generation decentralized finance infrastructure. Automated market making, 
            yield optimization, and institutional-grade liquidity solutions.
          </p>
        </div>

        {/* DEX Interface */}
        <div className={`mb-16 section-fade ${isInView ? 'in-view' : ''}`} style={{animationDelay: '0.2s'}}>
          <div className="bg-gradient-to-br from-zinc-900/90 to-black/90 backdrop-blur-xl border border-zinc-800 rounded-3xl p-8 max-w-md mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-gradient-to-br from-emerald-500 to-cyan-600 rounded-xl">
                <ArrowUpRight className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white tracking-wide">INSTANT SWAP</h3>
            </div>

            <div className="space-y-4">
              {/* From Token */}
              <div className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-zinc-400">FROM</span>
                  <span className="text-sm text-zinc-400">Balance: 1,245.67</span>
                </div>
                <div className="flex justify-between items-center">
                  <input
                    type="number"
                    value={swapAmount}
                    onChange={(e) => setSwapAmount(e.target.value)}
                    placeholder="0.00"
                    className="bg-transparent text-2xl font-bold text-white outline-none flex-1"
                  />
                  <div className="flex items-center gap-2 px-3 py-2 bg-zinc-700 rounded-lg">
                    <span className="font-bold text-white">{fromToken}</span>
                  </div>
                </div>
              </div>

              {/* Swap Button */}
              <div className="flex justify-center">
                <button
                  onClick={switchTokens}
                  className="p-3 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full hover:scale-110 transition-transform"
                >
                  <ArrowDownLeft className="w-5 h-5 text-white" />
                </button>
              </div>

              {/* To Token */}
              <div className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-zinc-400">TO</span>
                  <span className="text-sm text-zinc-400">Balance: 589,432</span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="text-2xl font-bold text-emerald-400">
                    {swapAmount ? (parseFloat(swapAmount) * 2847.3).toFixed(2) : '0.00'}
                  </div>
                  <div className="flex items-center gap-2 px-3 py-2 bg-zinc-700 rounded-lg">
                    <span className="font-bold text-white">{toToken}</span>
                  </div>
                </div>
              </div>

              {/* Swap Details */}
              <div className="space-y-2 text-sm text-zinc-400">
                <div className="flex justify-between">
                  <span>Rate</span>
                  <span>1 {fromToken} = 2,847.3 {toToken}</span>
                </div>
                <div className="flex justify-between">
                  <span>Price Impact</span>
                  <span className="text-emerald-400">{'<'}0.01%</span>
                </div>
                <div className="flex justify-between">
                  <span>Fee</span>
                  <span>0.25%</span>
                </div>
              </div>

              <button
                onClick={handleSwap}
                disabled={!swapAmount}
                className="w-full py-4 bg-gradient-to-r from-emerald-600 to-cyan-600 rounded-xl font-bold text-lg tracking-wide hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                SWAP
              </button>
            </div>
          </div>
        </div>

        {/* Liquidity Pools */}
        <div className={`mb-16 section-fade ${isInView ? 'in-view' : ''}`} style={{animationDelay: '0.4s'}}>
          <h3 className="text-3xl font-bold text-white mb-8 text-center tracking-wide">
            LIQUIDITY POOLS
          </h3>
          
          <div className="grid lg:grid-cols-3 gap-6 mb-8">
            {liquidityPools.map((pool, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br from-zinc-900/90 to-black/90 backdrop-blur-xl border rounded-2xl p-6 cursor-pointer transition-all duration-500 ${
                  activePool === index 
                    ? 'border-violet-500 shadow-2xl shadow-violet-500/25' 
                    : 'border-zinc-800 hover:border-zinc-600'
                }`}
                onClick={() => setActivePool(index)}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-2 rounded-lg bg-gradient-to-r ${pool.gradient}`}>
                    <Coins className="w-5 h-5 text-white" />
                  </div>
                  <h4 className="font-bold text-lg text-white">{pool.pair}</h4>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-2xl font-bold text-violet-400">{pool.apr}</div>
                    <div className="text-xs text-zinc-400">APR</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-emerald-400">{pool.tvl}</div>
                    <div className="text-xs text-zinc-400">TVL</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-blue-400">{pool.volume24h}</div>
                    <div className="text-xs text-zinc-400">24H Volume</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-cyan-400">{pool.fees24h}</div>
                    <div className="text-xs text-zinc-400">24H Fees</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pool Details */}
          <div className="bg-gradient-to-br from-zinc-900/90 to-black/90 backdrop-blur-xl border border-zinc-800 rounded-3xl p-8">
            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                <h4 className="text-2xl font-bold text-white mb-6">
                  {liquidityPools[activePool].pair} Pool Details
                </h4>
                <div className="space-y-4">
                  <div className="flex justify-between py-2 border-b border-zinc-700">
                    <span className="text-zinc-400">Total Value Locked</span>
                    <span className="font-bold text-white">{liquidityPools[activePool].tvl}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-zinc-700">
                    <span className="text-zinc-400">Annual Percentage Rate</span>
                    <span className="font-bold text-emerald-400">{liquidityPools[activePool].apr}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-zinc-700">
                    <span className="text-zinc-400">24H Trading Volume</span>
                    <span className="font-bold text-white">{liquidityPools[activePool].volume24h}</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="text-zinc-400">24H Fees Earned</span>
                    <span className="font-bold text-cyan-400">{liquidityPools[activePool].fees24h}</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="text-2xl font-bold text-white mb-6">Add Liquidity</h4>
                <div className="space-y-4">
                  <div className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-zinc-400">Token A</span>
                      <span className="text-sm text-zinc-400">Balance: 1,245</span>
                    </div>
                    <input
                      type="number"
                      placeholder="0.00"
                      className="w-full bg-transparent text-xl font-bold text-white outline-none"
                    />
                  </div>
                  
                  <div className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-zinc-400">Token B</span>
                      <span className="text-sm text-zinc-400">Balance: 589,432</span>
                    </div>
                    <input
                      type="number"
                      placeholder="0.00"
                      className="w-full bg-transparent text-xl font-bold text-white outline-none"
                    />
                  </div>
                  
                  <button className="w-full py-4 bg-gradient-to-r from-violet-600 to-purple-600 rounded-xl font-bold text-lg tracking-wide hover:scale-105 transition-all duration-300">
                    ADD LIQUIDITY
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Yield Farming */}
        <div className={`section-fade ${isInView ? 'in-view' : ''}`} style={{animationDelay: '0.6s'}}>
          <h3 className="text-3xl font-bold text-white mb-8 text-center tracking-wide">
            YIELD FARMING
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                pool: "EEEEE-ADA LP",
                apr: "247.8%",
                earned: "1,247.89",
                staked: "15,000",
                icon: <TrendingUp className="w-6 h-6" />,
                gradient: "from-violet-500 to-purple-500"
              },
              {
                pool: "EEEEE Single Stake",
                apr: "189.3%",
                earned: "892.45",
                staked: "50,000",
                icon: <Lock className="w-6 h-6" />,
                gradient: "from-emerald-500 to-cyan-500"
              },
              {
                pool: "EEEEE-USDC LP",
                apr: "156.7%",
                earned: "567.23",
                staked: "8,500",
                icon: <DollarSign className="w-6 h-6" />,
                gradient: "from-blue-500 to-indigo-500"
              }
            ].map((farm, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-zinc-900/90 to-black/90 backdrop-blur-xl border border-zinc-800 rounded-2xl p-6 hover:border-violet-500/50 transition-all duration-500"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${farm.gradient}`}>
                    {farm.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-white">{farm.pool}</h4>
                    <div className="text-2xl font-bold text-violet-400">{farm.apr} APR</div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-zinc-400">Earned</span>
                    <span className="font-bold text-emerald-400">{farm.earned} EEEEE</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-400">Staked</span>
                    <span className="font-bold text-white">{farm.staked} LP</span>
                  </div>
                  
                  <div className="flex gap-2 pt-2">
                    <button className="flex-1 py-2 bg-gradient-to-r from-emerald-600 to-cyan-600 rounded-lg font-semibold text-sm hover:scale-105 transition-transform">
                      HARVEST
                    </button>
                    <button className="flex-1 py-2 bg-gradient-to-r from-violet-600 to-purple-600 rounded-lg font-semibold text-sm hover:scale-105 transition-transform">
                      STAKE
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}