import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function TokenomicsSection() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section id="tokenomics" className="pt-40 pb-32 px-6 bg-gradient-to-b from-black to-zinc-950">
      <div 
        ref={ref}
        className={`max-w-7xl mx-auto section-fade ${isInView ? 'in-view' : ''}`}
      >
        <div className="text-center mb-20">
          <h2 className="font-anton text-5xl md:text-7xl uppercase mb-8 tracking-wider">
            <span className="text-white">Token</span>
            <br />
            <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">Economics</span>
          </h2>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto leading-relaxed">
            Designed for institutional-grade value accrual and sustainable growth
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Premium Tokenomics Card 1 */}
          <div className="bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 rounded-2xl p-8 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-violet-500 to-purple-500"></div>
            <div className="text-center">
              <div className="mb-6">
                <h3 className="font-bold text-xl text-zinc-300 mb-2 uppercase tracking-wider">Total Supply</h3>
                <div className="text-4xl font-bold bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
                  1,000,000,000
                </div>
              </div>
              <p className="text-sm text-zinc-500 leading-relaxed">
                Fixed supply with deflationary mechanisms built into the protocol architecture
              </p>
            </div>
          </div>
          
          {/* Premium Tokenomics Card 2 */}
          <div className="bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 rounded-2xl p-8 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-indigo-500"></div>
            <div className="text-center">
              <div className="mb-6">
                <h3 className="font-bold text-xl text-zinc-300 mb-2 uppercase tracking-wider">Dev Allocation</h3>
                <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
                  78.95M
                </div>
              </div>
              <p className="text-sm text-zinc-500 leading-relaxed">
                Institutional vesting schedule with full transparency and accountability protocols
              </p>
            </div>
          </div>
          
          {/* Premium Tokenomics Card 3 */}
          <div className="bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 rounded-2xl p-8 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-cyan-500"></div>
            <div className="text-center">
              <div className="mb-6">
                <h3 className="font-bold text-xl text-zinc-300 mb-2 uppercase tracking-wider">Liquidity Status</h3>
                <div className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
                  Permanently Locked
                </div>
              </div>
              <p className="text-sm text-zinc-500 leading-relaxed">
                Enterprise-grade liquidity management with institutional custody standards
              </p>
            </div>
          </div>
        </div>
        
        {/* Additional premium info */}
        <div className="mt-16 bg-gradient-to-r from-zinc-900/50 to-black/50 border border-zinc-800 rounded-2xl p-8 backdrop-blur-xl">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4 tracking-wide">Institutional Framework</h3>
              <p className="text-zinc-400 leading-relaxed">
                Our tokenomics model follows institutional best practices with comprehensive 
                auditing, regulatory compliance, and sophisticated treasury management protocols.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent mb-2">
                AAA Rating
              </div>
              <p className="text-sm text-zinc-500 uppercase tracking-wider">Risk Assessment</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}