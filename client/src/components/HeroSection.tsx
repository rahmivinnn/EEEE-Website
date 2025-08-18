import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import EEEEEPopup from "@/components/EEEEEPopup";

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
            <span className="block bg-gradient-to-r from-purple-400 via-violet-400 to-yellow-400 bg-clip-text text-transparent text-7xl md:text-9xl lg:text-[12rem] leading-none text-glow">
              $EEEEE
            </span>
          </h1>
        </div>
        
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-light mb-12 text-zinc-200 tracking-wide leading-tight fade-in-up animated-delay-1">
          The Most <span className="font-bold bg-gradient-to-r from-purple-400 to-yellow-400 bg-clip-text text-transparent slide-in-left animated-delay-2">Dominant Force</span> on Cardano
        </h2>
        
        <p className="text-lg md:text-xl lg:text-2xl text-zinc-400 mb-12 max-w-4xl mx-auto leading-relaxed font-light text-reveal animated-delay-3">
          Built on institutional-grade infrastructure with enterprise-level partnerships. 
          $EEEEE represents the evolution of decentralized finance on Cardano, backed by 
          sophisticated algorithmic trading systems and unprecedented market liquidity.
        </p>
        
        {/* Human-Made Badge */}
        <div className="mb-16 flex justify-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-900/30 to-yellow-900/30 border border-purple-500/30 rounded-full backdrop-blur-sm">
            <svg className="w-4 h-4 text-purple-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12,2C17.52,2 22,6.48 22,12C22,17.52 17.52,22 12,22C6.48,22 2,17.52 2,12C2,6.48 6.48,2 12,2M15.97,9L16.87,10.5C17.11,10.95 16.96,11.5 16.5,11.75L15.25,12.5L16.5,13.25C16.96,13.5 17.11,14.05 16.87,14.5L15.97,16C15.73,16.45 15.18,16.6 14.73,16.36L13.5,15.64L12.97,17C12.84,17.5 12.32,17.76 11.82,17.63L10.18,17.37C9.68,17.24 9.42,16.72 9.55,16.22L10.05,14.9L8.75,14.15C8.3,13.91 8.15,13.36 8.39,12.91L9.29,11.41L8.39,9.91C8.15,9.46 8.3,8.91 8.75,8.67L10.05,7.92L9.55,6.6C9.42,6.1 9.68,5.58 10.18,5.45L11.82,5.19C12.32,5.06 12.84,5.32 12.97,5.82L13.5,7.18L14.73,6.46C15.18,6.22 15.73,6.37 15.97,6.82L16.87,8.32C17.11,8.77 16.96,9.32 16.5,9.57L15.25,10.32L15.97,9Z"/>
            </svg>
            <span className="text-xs font-medium text-zinc-300 tracking-wider uppercase">Crafted by Human Developers</span>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
          <EEEEEPopup>
            <button className="group relative px-12 py-5 bg-gradient-to-r from-purple-600 to-yellow-600 rounded-xl font-semibold text-lg tracking-wide transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 overflow-hidden border-2 border-purple-400/20">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <span className="relative z-10 flex items-center gap-3 text-black font-bold">
                <span>Buy $EEEEE</span>
                <span className="text-xl">→</span>
              </span>
            </button>
          </EEEEEPopup>
          
          <a 
            href="https://discord.gg/mMfa5nkAaT" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group px-12 py-5 bg-transparent border-2 border-zinc-700 hover:border-yellow-500 rounded-xl font-semibold text-lg tracking-wide transition-all duration-500 hover:scale-105 hover:bg-yellow-500/10"
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