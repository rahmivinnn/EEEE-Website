import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import LottieButton from './LottieButton';

export default function LottieSection() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section className="py-32 px-6 relative overflow-hidden bg-gradient-to-b from-black via-zinc-900 to-black">
      {/* Background animated pattern */}
      <div className="absolute inset-0 opacity-5 bg-gradient-to-br from-orange-500/10 via-amber-500/5 to-teal-500/10 animate-pulse"></div>
      
      <div 
        ref={ref}
        className={`relative z-10 max-w-7xl mx-auto text-center section-fade ${isInView ? 'in-view' : ''}`}
      >
        <h2 className="font-anton text-5xl md:text-7xl uppercase mb-8 tracking-wider">
          <span className="text-white">Interactive</span>
          <br />
          <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">Experience</span>
        </h2>
        
        <p className="text-xl text-zinc-400 mb-16 max-w-4xl mx-auto leading-relaxed">
          Immerse yourself in the EEEEE ecosystem with stunning interactive animations 
          and responsive design elements that react to your every move.
        </p>
        
        {/* Interactive Lottie showcase */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {/* Coin Animation */}
          <div className="relative group">
            <div className="bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 rounded-3xl p-8 backdrop-blur-xl relative overflow-hidden hover:border-orange-500/50 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-amber-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 text-center">
                <div className="w-24 h-24 mx-auto mb-6 flex items-center justify-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-amber-500 rounded-full animate-spin border-4 border-orange-300/30">
                    <div className="w-full h-full bg-gradient-to-br from-amber-400 to-orange-600 rounded-full animate-pulse"></div>
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
            <div className="bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 rounded-3xl p-8 backdrop-blur-xl relative overflow-hidden hover:border-teal-500/50 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-green-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 text-center">
                <div className="w-24 h-24 mx-auto mb-6 flex items-center justify-center">
                  <div className="relative w-16 h-16">
                    <div className="absolute inset-0 bg-gradient-to-t from-teal-500 to-green-500 rounded-lg animate-bounce"></div>
                    <div className="absolute top-2 left-2 right-2 bottom-2 bg-gradient-to-t from-green-400 to-teal-400 rounded opacity-80 animate-pulse"></div>
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
            <div className="bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 rounded-3xl p-8 backdrop-blur-xl relative overflow-hidden hover:border-blue-500/50 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 text-center">
                <div className="w-24 h-24 mx-auto mb-6 flex items-center justify-center">
                  <div className="relative w-16 h-16">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full animate-ping"></div>
                    <div className="absolute inset-2 bg-gradient-to-br from-cyan-400 to-blue-400 rounded-full animate-pulse"></div>
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