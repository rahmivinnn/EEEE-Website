import { useState } from "react";
import { ExternalLink, TrendingUp, Star, Shield, Globe } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function CEXListingSection() {
  const { ref, isInView } = useScrollAnimation();
  const [hoveredExchange, setHoveredExchange] = useState<number | null>(null);

  const exchanges = [
    {
      name: "Binance",
      logo: (
        <svg className="w-8 h-8" viewBox="0 0 40 40" fill="none">
          <rect width="40" height="40" rx="8" fill="#F0B90B"/>
          <g transform="translate(8, 8)">
            <path d="M12 4L16 8L12 12L8 8L12 4Z" fill="white"/>
            <path d="M4 12L8 16L4 20L0 16L4 12Z" fill="white"/>
            <path d="M20 12L24 16L20 20L16 16L20 12Z" fill="white"/>
            <path d="M12 20L16 24L12 28L8 24L12 20Z" fill="white"/>
            <rect x="8" y="12" width="8" height="8" fill="white"/>
          </g>
        </svg>
      ),
      status: "Coming Soon",
      volume: "$2.4B",
      description: "World's largest crypto exchange",
      color: "from-yellow-500 to-amber-500",
      url: "https://www.binance.com"
    },
    {
      name: "KuCoin",
      logo: (
        <svg className="w-8 h-8" viewBox="0 0 40 40" fill="none">
          <rect width="40" height="40" rx="8" fill="#00D4AA"/>
          <g transform="translate(8, 8)">
            <path d="M12 0L24 12L12 24L0 12L12 0Z" fill="white"/>
            <path d="M12 4L20 12L12 20L4 12L12 4Z" fill="#00D4AA"/>
            <circle cx="12" cy="12" r="3" fill="white"/>
          </g>
        </svg>
      ),
      status: "Coming Soon",
      volume: "$890M",
      description: "Global crypto exchange platform",
      color: "from-emerald-500 to-teal-500",
      url: "https://www.kucoin.com"
    },
    {
      name: "Gate.io",
      logo: (
        <svg className="w-8 h-8" viewBox="0 0 40 40" fill="none">
          <rect width="40" height="40" rx="8" fill="#4A90E2"/>
          <g transform="translate(8, 8)">
            <rect x="0" y="4" width="24" height="4" fill="white"/>
            <rect x="0" y="12" width="20" height="4" fill="white"/>
            <rect x="0" y="20" width="16" height="4" fill="white"/>
            <circle cx="20" cy="6" r="2" fill="white"/>
          </g>
        </svg>
      ),
      status: "Coming Soon",
      volume: "$456M",
      description: "Leading digital asset exchange",
      color: "from-blue-500 to-cyan-500",
      url: "https://www.gate.io"
    },
    {
      name: "Bybit",
      logo: (
        <svg className="w-8 h-8" viewBox="0 0 40 40" fill="none">
          <rect width="40" height="40" rx="8" fill="#000000"/>
          <g transform="translate(8, 8)">
            <circle cx="12" cy="12" r="11" fill="#F7931A"/>
            <path d="M8 8L16 8L20 12L16 16L8 16L4 12L8 8Z" fill="#000000"/>
            <circle cx="12" cy="12" r="4" fill="#F7931A"/>
          </g>
        </svg>
      ),
      status: "Coming Soon",
      volume: "$1.2B",
      description: "Professional trading platform",
      color: "from-purple-500 to-violet-500",
      url: "https://www.bybit.com"
    },
    {
      name: "OKX",
      logo: (
        <svg className="w-8 h-8" viewBox="0 0 40 40" fill="none">
          <rect width="40" height="40" rx="8" fill="#000000"/>
          <g transform="translate(4, 4)">
            <rect x="0" y="0" width="10" height="10" fill="white"/>
            <rect x="22" y="0" width="10" height="10" fill="white"/>
            <rect x="11" y="11" width="10" height="10" fill="white"/>
            <rect x="0" y="22" width="10" height="10" fill="white"/>
            <rect x="22" y="22" width="10" height="10" fill="white"/>
          </g>
        </svg>
      ),
      status: "Coming Soon",
      volume: "$678M",
      description: "Global crypto ecosystem",
      color: "from-indigo-500 to-purple-500",
      url: "https://www.okx.com"
    },
    {
      name: "Coinbase",
      logo: (
        <svg className="w-8 h-8" viewBox="0 0 40 40" fill="none">
          <rect width="40" height="40" rx="8" fill="#0052FF"/>
          <g transform="translate(8, 8)">
            <circle cx="12" cy="12" r="12" fill="white"/>
            <circle cx="12" cy="12" r="9" fill="#0052FF"/>
            <rect x="9" y="10" width="6" height="4" rx="2" fill="white"/>
          </g>
        </svg>
      ),
      status: "Coming Soon",
      volume: "$1.8B",
      description: "Most trusted crypto platform",
      color: "from-blue-600 to-indigo-600",
      url: "https://www.coinbase.com"
    }
  ];

  return (
    <section id="cex-listing" ref={ref} className="py-32 px-6 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-950 via-black to-zinc-950"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-purple-600/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-yellow-600/10 to-transparent rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${
          isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-purple-600/20 to-yellow-600/20 rounded-full border border-purple-500/30 mb-8">
            <Globe className="w-5 h-5 text-purple-400" />
            <span className="text-purple-300 font-semibold tracking-wide">GLOBAL EXCHANGE LISTINGS</span>
          </div>
          
          <h2 className="text-6xl md:text-7xl font-black mb-8 tracking-tight">
            <span className="bg-gradient-to-r from-white via-purple-200 to-yellow-200 bg-clip-text text-transparent">
              CEX LISTINGS
            </span>
          </h2>
          
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto leading-relaxed">
            $EEEEE is preparing for major centralized exchange listings. Get ready for unprecedented liquidity and global accessibility.
          </p>
        </div>

        {/* Exchange Grid */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 transition-all duration-1000 delay-300 ${
          isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {exchanges.map((exchange, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-zinc-900/90 to-black/90 backdrop-blur-xl border border-zinc-800 hover:border-purple-500/50 rounded-2xl p-8 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20"
              onMouseEnter={() => setHoveredExchange(index)}
              onMouseLeave={() => setHoveredExchange(null)}
            >
              {/* Glow effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${exchange.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`}></div>
              
              {/* Content */}
              <div className="relative z-10">
                {/* Logo and name */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-3 bg-gradient-to-r ${exchange.color} rounded-xl text-white`}>
                    {exchange.logo}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{exchange.name}</h3>
                    <p className="text-zinc-400 text-sm">{exchange.description}</p>
                  </div>
                </div>

                {/* Stats */}
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-zinc-400">24h Volume</span>
                    <span className="text-white font-bold">{exchange.volume}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-zinc-400">Status</span>
                    <span className="px-3 py-1 bg-yellow-500/20 text-yellow-400 rounded-full text-sm font-semibold">
                      {exchange.status}
                    </span>
                  </div>
                </div>

                {/* Action button */}
                <a
                  href={exchange.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r ${exchange.color} rounded-xl text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg`}
                >
                  <span>Visit Exchange</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={`text-center transition-all duration-1000 delay-500 ${
          isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="bg-gradient-to-br from-zinc-900/90 to-black/90 backdrop-blur-xl border border-zinc-800 rounded-3xl p-12 max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-4 mb-6">
              <Star className="w-8 h-8 text-yellow-400" />
              <h3 className="text-3xl font-bold text-white">Major Listings Coming Soon</h3>
              <Star className="w-8 h-8 text-yellow-400" />
            </div>
            
            <p className="text-xl text-zinc-400 mb-8 leading-relaxed">
              $EEEEE is in advanced discussions with top-tier exchanges. Stay tuned for official announcements that will bring unprecedented liquidity and global reach to our ecosystem.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center gap-2 px-4 py-2 bg-purple-600/20 rounded-full border border-purple-500/30">
                <Shield className="w-4 h-4 text-purple-400" />
                <span className="text-purple-300 text-sm font-semibold">Institutional Grade</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-yellow-600/20 rounded-full border border-yellow-500/30">
                <TrendingUp className="w-4 h-4 text-yellow-400" />
                <span className="text-yellow-300 text-sm font-semibold">High Liquidity</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-emerald-600/20 rounded-full border border-emerald-500/30">
                <Globe className="w-4 h-4 text-emerald-400" />
                <span className="text-emerald-300 text-sm font-semibold">Global Access</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}