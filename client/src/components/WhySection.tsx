import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function WhySection() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section id="ecosystem" className="py-32 px-6 bg-gradient-to-b from-zinc-950 to-black">
      <div 
        ref={ref}
        className={`max-w-7xl mx-auto section-fade ${isInView ? 'in-view' : ''}`}
      >
        <div className="text-center mb-20">
          <h2 className="font-anton text-5xl md:text-7xl uppercase mb-8 tracking-wider">
            <span className="text-white">Enterprise</span>
            <br />
            <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">Ecosystem</span>
          </h2>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto leading-relaxed">
            Built for institutions, designed for the future of decentralized finance
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Premium Feature Card 1 */}
          <div className="group relative bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 rounded-2xl p-8 hover:border-violet-500/50 transition-all duration-500 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 bg-gradient-to-br from-violet-500 to-purple-600 rounded-2xl flex items-center justify-center mb-8">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                </svg>
              </div>
              <h3 className="font-bold text-2xl mb-4 text-white tracking-wide">Institutional Backing</h3>
              <p className="text-zinc-400 leading-relaxed mb-6">
                Strategic partnerships with tier-1 financial institutions and market makers, providing unparalleled stability and growth potential.
              </p>
              <div className="text-sm text-violet-400 font-semibold uppercase tracking-wider">Enterprise Grade</div>
            </div>
          </div>
          
          {/* Premium Feature Card 2 */}
          <div className="group relative bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-500 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-8">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="font-bold text-2xl mb-4 text-white tracking-wide">Advanced Security</h3>
              <p className="text-zinc-400 leading-relaxed mb-6">
                Military-grade encryption and multi-signature security protocols, audited by leading blockchain security firms worldwide.
              </p>
              <div className="text-sm text-purple-400 font-semibold uppercase tracking-wider">Bank Level</div>
            </div>
          </div>
          
          {/* Premium Feature Card 3 */}
          <div className="group relative bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 rounded-2xl p-8 hover:border-indigo-500/50 transition-all duration-500 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-cyan-600 rounded-2xl flex items-center justify-center mb-8">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="font-bold text-2xl mb-4 text-white tracking-wide">Lightning Scalability</h3>
              <p className="text-zinc-400 leading-relaxed mb-6">
                Next-generation layer-2 solutions enabling infinite scalability with sub-second transaction finality and minimal fees.
              </p>
              <div className="text-sm text-indigo-400 font-semibold uppercase tracking-wider">Future Ready</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}