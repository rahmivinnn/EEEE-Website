import { useScrollAnimation } from "@/hooks/useScrollAnimation";

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
        
        {/* Premium brand showcase */}
        <div className="relative max-w-2xl mx-auto">
          <div className="bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 rounded-3xl p-16 backdrop-blur-xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 to-purple-500/10"></div>
            <div className="relative z-10">
              {/* Sophisticated logo placeholder */}
              <div className="w-32 h-32 mx-auto mb-8 bg-gradient-to-br from-violet-500 to-purple-600 rounded-2xl flex items-center justify-center">
                <span className="text-white font-anton text-4xl tracking-wider">$E</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 tracking-wide">Premium Brand Assets</h3>
              <p className="text-zinc-400 leading-relaxed">
                Professional brand guidelines and visual assets designed for institutional presentations and corporate communications.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}