import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function HeroSection() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-16">
      <div 
        ref={ref}
        className={`text-center max-w-4xl mx-auto section-fade ${isInView ? 'in-view' : ''}`}
      >
        <h1 className="font-anton text-5xl md:text-7xl lg:text-8xl uppercase mb-6 gradient-text animate-float">
          Welcome to $EEEEE
        </h1>
        <h2 className="text-2xl md:text-4xl font-bold mb-8 text-white">
          The Loudest Meme on Cardano. Period.
        </h2>
        <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
          $EEEEE is more than just a coin — it's a meme-powered movement shaking up the Cardano ecosystem with vibes, volume, and virality. Fueled by community, culture, and chaos (in the best way), we're here to make noise that can't be ignored.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a 
            href="https://app.dexhunter.io/swap?tokenIdSell=&tokenIdBuy=3d7fcadb114dacbdffa1aeb2f3dc2fecec610a3b572d60f96f1341494545454545436f696e414441" 
            target="_blank" 
            rel="noopener noreferrer"
            className="glow-button bg-gradient-to-r from-neon-purple to-hot-pink px-8 py-4 rounded-xl font-bold text-lg animate-glow hover:scale-105 transition-transform"
          >
            🚀 Buy $EEEEE
          </a>
          <a 
            href="https://discord.gg/mMfa5nkAaT" 
            target="_blank" 
            rel="noopener noreferrer"
            className="glow-button bg-white/10 border-2 border-neon-purple px-8 py-4 rounded-xl font-bold text-lg hover:bg-neon-purple/20 hover:scale-105 transition-all"
          >
            💬 Join Discord
          </a>
        </div>
      </div>
    </section>
  );
}
