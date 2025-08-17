import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function HeroSection() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20 relative overflow-hidden">
      {/* Premium background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-zinc-900 to-black"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.15),transparent_70%)]"></div>
      
      <div 
        ref={ref}
        className={`relative z-10 text-center max-w-6xl mx-auto section-fade ${isInView ? 'in-view' : ''}`}
      >
        <div className="mb-8">
          <h1 className="font-anton text-6xl md:text-8xl lg:text-9xl uppercase mb-6 tracking-wider">
            <span className="block bg-gradient-to-r from-white via-violet-200 to-purple-300 bg-clip-text text-transparent">
              Welcome to
            </span>
            <span className="block bg-gradient-to-r from-violet-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent text-7xl md:text-9xl lg:text-[12rem] leading-none">
              $EEEEE
            </span>
          </h1>
        </div>
        
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-light mb-12 text-zinc-200 tracking-wide leading-tight">
          The Most <span className="font-bold bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">Dominant Force</span> on Cardano
        </h2>
        
        <p className="text-lg md:text-xl lg:text-2xl text-zinc-400 mb-16 max-w-4xl mx-auto leading-relaxed font-light">
          Built on institutional-grade infrastructure with enterprise-level partnerships. 
          $EEEEE represents the evolution of decentralized finance on Cardano, backed by 
          sophisticated algorithmic trading systems and unprecedented market liquidity.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
          <a 
            href="https://app.dexhunter.io/swap?tokenIdSell=&tokenIdBuy=3d7fcadb114dacbdffa1aeb2f3dc2fecec610a3b572d60f96f1341494545454545436f696e414441" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group relative px-12 py-5 bg-gradient-to-r from-violet-600 to-purple-600 rounded-xl font-semibold text-lg tracking-wide transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-violet-500/25 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <span className="relative z-10 flex items-center gap-3">
              <span>Access Trading Platform</span>
              <span className="text-xl">→</span>
            </span>
          </a>
          
          <a 
            href="https://discord.gg/mMfa5nkAaT" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group px-12 py-5 bg-transparent border-2 border-zinc-700 hover:border-violet-500 rounded-xl font-semibold text-lg tracking-wide transition-all duration-500 hover:scale-105 hover:bg-violet-500/10"
          >
            <span className="flex items-center gap-3">
              <span>Join Community</span>
              <span className="text-xl group-hover:translate-x-1 transition-transform">→</span>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}