import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import mascotImage1 from "@assets/WhatsApp_Image_2025-08-17_at_3.41.31_PM__1_-removebg-preview_1755421217465.png";
import mascotImage2 from "@assets/WhatsApp_Image_2025-08-17_at_3.41.31_PM-removebg-preview_1755421229215.png";

export default function MascotSection() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section className="py-32 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-violet-500/10 via-transparent to-purple-500/10"></div>
      
      <div 
        ref={ref}
        className={`relative z-10 max-w-7xl mx-auto text-center section-fade ${isInView ? 'in-view' : ''}`}
      >
        <h2 className="font-anton text-5xl md:text-7xl uppercase mb-8 tracking-wider">
          <span className="text-white">Brand</span>
          <br />
          <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">Identity</span>
        </h2>
        
        <p className="text-xl text-zinc-400 mb-16 max-w-4xl mx-auto leading-relaxed">
          Our visual identity represents precision, power, and institutional excellence. 
          Designed by world-class creative agencies for maximum market impact.
        </p>
        
        {/* Premium mascot showcase */}
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Mascot 1 - Excited EEEEE */}
          <div className="relative">
            <div className="bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 rounded-3xl p-12 backdrop-blur-xl relative overflow-hidden group hover:border-violet-500/50 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 text-center">
                <div className="relative inline-block mb-8">
                  <img 
                    src={mascotImage1} 
                    alt="$EEEEE Excited Mascot" 
                    className="w-40 h-40 mx-auto animate-bounce-slow drop-shadow-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/30 to-yellow-500/30 rounded-full blur-2xl animate-pulse"></div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 tracking-wide">The Hype Beast</h3>
                <p className="text-zinc-400 leading-relaxed">
                  Always screaming "EEEEE!" - represents our unstoppable energy and viral momentum in the crypto space.
                </p>
              </div>
            </div>
          </div>

          {/* Mascot 2 - Premium EEEEE */}
          <div className="relative">
            <div className="bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 rounded-3xl p-12 backdrop-blur-xl relative overflow-hidden group hover:border-purple-500/50 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 text-center">
                <div className="relative inline-block mb-8">
                  <img 
                    src={mascotImage2} 
                    alt="$EEEEE Premium Mascot" 
                    className="w-40 h-40 mx-auto animate-float drop-shadow-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-full blur-2xl animate-pulse"></div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 tracking-wide">The Premium Icon</h3>
                <p className="text-zinc-400 leading-relaxed">
                  Sophisticated design for institutional communications - perfect for corporate presentations and partnerships.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Mascot features */}
        <div className="mt-16 bg-gradient-to-r from-zinc-900/50 to-black/50 border border-zinc-800 rounded-2xl p-8 backdrop-blur-xl max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-white mb-6 text-center tracking-wide">Brand Character</h3>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl mb-3">🔊</div>
              <h4 className="font-bold text-violet-400 mb-2">Always Loud</h4>
              <p className="text-sm text-zinc-400">Never stops making noise in the crypto space</p>
            </div>
            <div>
              <div className="text-3xl mb-3">⚡</div>
              <h4 className="font-bold text-purple-400 mb-2">High Energy</h4>
              <p className="text-sm text-zinc-400">Represents the unstoppable momentum</p>
            </div>
            <div>
              <div className="text-3xl mb-3">🎭</div>
              <h4 className="font-bold text-indigo-400 mb-2">Memorable</h4>
              <p className="text-sm text-zinc-400">Instantly recognizable brand identity</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}