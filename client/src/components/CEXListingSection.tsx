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
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="#F3BA2F">
          <path d="M12 2.25L9.75 4.5L12 6.75L14.25 4.5L12 2.25ZM6.75 6L4.5 8.25L6.75 10.5L9 8.25L6.75 6ZM17.25 6L15 8.25L17.25 10.5L19.5 8.25L17.25 6ZM12 9.75L9.75 12L12 14.25L14.25 12L12 9.75ZM2.25 12L0 14.25L2.25 16.5L4.5 14.25L2.25 12ZM21.75 12L19.5 14.25L21.75 16.5L24 14.25L21.75 12ZM6.75 17.25L4.5 19.5L6.75 21.75L9 19.5L6.75 17.25ZM17.25 17.25L15 19.5L17.25 21.75L19.5 19.5L17.25 17.25ZM12 17.25L9.75 19.5L12 21.75L14.25 19.5L12 17.25Z"/>
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
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="#00D4AA">
          <path d="M12 0L0 6.857v10.286L12 24l12-6.857V6.857L12 0zm0 2.571l9.429 5.143L12 12.857 2.571 7.714 12 2.571zM2.571 9.429L12 14.571v7.714l-9.429-5.143V9.429zm18.858 0v7.714L12 22.286v-7.714l9.429-5.143z"/>
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
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="#00D4AA">
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm5.707-13.707L12 14l-5.707-5.707 1.414-1.414L12 11.172l4.293-4.293 1.414 1.414z"/>
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
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="#F7931A">
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm6 8h-3v3h3v2h-3v3h-2v-3H9v3H7v-3H4v-2h3V8H4V6h3V3h2v3h4V3h2v3h3v2z"/>
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
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="#000000">
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-3-15h6v2H9V7zm0 4h6v2H9v-2zm0 4h6v2H9v-2z"/>
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
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="#0052FF">
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 21.6c-5.302 0-9.6-4.298-9.6-9.6S6.698 2.4 12 2.4s9.6 4.298 9.6 9.6-4.298 9.6-9.6 9.6zm-3.6-9.6c0-1.988 1.612-3.6 3.6-3.6s3.6 1.612 3.6 3.6-1.612 3.6-3.6 3.6-3.6-1.612-3.6-3.6z"/>
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