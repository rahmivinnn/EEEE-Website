import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import LottieButton from './LottieButton';

export default function LottieSection() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section className="py-32 px-6 relative overflow-hidden bg-gradient-to-b from-black via-zinc-900 to-black">
      {/* Background animated pattern */}
      <div className="absolute inset-0 opacity-5 bg-gradient-to-br from-purple-500/10 via-violet-500/5 to-yellow-500/10 animate-pulse"></div>
      
      <div 
        ref={ref}
        className={`relative z-10 max-w-7xl mx-auto text-center section-fade ${isInView ? 'in-view' : ''}`}
      >
        <h2 className="font-anton text-5xl md:text-7xl uppercase mb-8 tracking-wider">
          <span className="text-white">Interactive</span>
          <br />
          <span className="bg-gradient-to-r from-purple-400 to-yellow-400 bg-clip-text text-transparent">Experience</span>
        </h2>
        
        <p className="text-xl text-zinc-400 mb-16 max-w-4xl mx-auto leading-relaxed">
          Immerse yourself in the EEEEE ecosystem with stunning interactive animations 
          and responsive design elements that react to your every move.
        </p>
        
        {/* Interactive Lottie showcase */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {/* Coin Animation */}
          <div className="relative group">
            <div className="bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 rounded-3xl p-8 backdrop-blur-xl relative overflow-hidden hover:border-purple-500/50 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-yellow-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 text-center">
                <div className="w-24 h-24 mx-auto mb-6 flex items-center justify-center">
                  <div className="p-4 bg-gradient-to-br from-purple-500 to-yellow-500 rounded-2xl">
                    <svg className="w-12 h-12 text-white animate-spin" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M12,6A6,6 0 0,0 6,12A6,6 0 0,0 12,18A6,6 0 0,0 18,12A6,6 0 0,0 12,6M12,8A4,4 0 0,1 16,12A4,4 0 0,1 12,16A4,4 0 0,1 8,12A4,4 0 0,1 12,8Z"/>
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 tracking-wide">Coin Dynamics</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  Watch $EEEEE coins spin and dance with realistic physics animations
                </p>
              </div>
            </div>
          </div>

          {/* Trading Animation */}
          <div className="relative group">
            <div className="bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 rounded-3xl p-8 backdrop-blur-xl relative overflow-hidden hover:border-yellow-500/50 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 text-center">
                <div className="w-24 h-24 mx-auto mb-6 flex items-center justify-center">
                  <div className="p-4 bg-gradient-to-br from-yellow-500 to-purple-500 rounded-2xl">
                    <svg className="w-12 h-12 text-white animate-bounce" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M16,6L18.29,8.29L13.41,13.17L9.41,9.17L2,16.59L3.41,18L9.41,12L13.41,16L19.71,9.71L22,12V6H16Z"/>
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 tracking-wide">Live Trading</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  Real-time chart animations showing EEEEE's market performance
                </p>
              </div>
            </div>
          </div>

          {/* Community Animation */}
          <div className="relative group">
            <div className="bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 rounded-3xl p-8 backdrop-blur-xl relative overflow-hidden hover:border-purple-500/50 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-yellow-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 text-center">
                <div className="w-24 h-24 mx-auto mb-6 flex items-center justify-center">
                  <div className="p-4 bg-gradient-to-br from-purple-500 to-yellow-500 rounded-2xl">
                    <svg className="w-12 h-12 text-white animate-pulse" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zM4 18v-4h3v4h2v-7.5c0-1.1.9-2 2-2h2c1.1 0 2 .9 2 2V18h2v-4h3v4h2v-7.5c0-2.21-1.79-4-4-4H8c-2.21 0-4 1.79-4 4V18h2z"/>
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 tracking-wide">Community Pulse</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  Feel the energy of thousands of EEEEE community members
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center max-w-2xl mx-auto">
          <LottieButton
            variant="primary"
            href="https://app.dexhunter.io/swap?tokenIdSell=&tokenIdBuy=3d7fcadb114dacbdffa1aeb2f3dc2fecec610a3b572d60f96f1341494545454545436f696e414441"
            lottieUrl="https://lottie.host/embed/trade-button-animation/2kL3m7nU5x.json"
            className="flex-1"
          >
            Start Trading
          </LottieButton>
          
          <LottieButton
            variant="secondary"
            href="https://discord.gg/mMfa5nkAaT"
            lottieUrl="https://lottie.host/embed/community-button-animation/3lM4n8oV6y.json"
            className="flex-1"
          >
            Join Community
          </LottieButton>
        </div>
      </div>
    </section>
  );
}