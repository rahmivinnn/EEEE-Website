import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function CollaborationsSection() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section className="py-32 px-6 bg-gradient-to-b from-zinc-950 to-black">
      <div 
        ref={ref}
        className={`max-w-7xl mx-auto section-fade ${isInView ? 'in-view' : ''}`}
      >
        <div className="text-center mb-20">
          <h2 className="font-anton text-5xl md:text-7xl uppercase mb-8 tracking-wider">
            <span className="text-white">Strategic</span>
            <br />
            <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">Partnerships</span>
          </h2>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto leading-relaxed">
            Confidential negotiations with tier-1 blockchain protocols and institutional market makers
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 rounded-2xl p-10 backdrop-blur-xl">
            <h3 className="text-3xl font-bold text-white mb-6 tracking-wide">Enterprise Integrations</h3>
            <p className="text-lg text-zinc-400 leading-relaxed mb-8">
              We are in advanced discussions with multiple Fortune 500 companies and leading DeFi protocols 
              for strategic partnerships that will fundamentally transform the Cardano ecosystem.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-3 h-3 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full"></div>
                <span className="text-zinc-300">Institutional custody solutions</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full"></div>
                <span className="text-zinc-300">Cross-chain liquidity bridges</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-3 h-3 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full"></div>
                <span className="text-zinc-300">Enterprise trading infrastructure</span>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 rounded-2xl p-10 backdrop-blur-xl">
            <h3 className="text-3xl font-bold text-white mb-6 tracking-wide">Market Dynamics</h3>
            <p className="text-lg text-zinc-400 leading-relaxed mb-8">
              Our strategic positioning creates unprecedented opportunities for massive market expansion, 
              with partnerships that will establish $EEEEE as the dominant force in decentralized finance.
            </p>
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent mb-2">
                $10B+
              </div>
              <p className="text-sm text-zinc-500 uppercase tracking-wider">Partnership Pipeline Value</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}