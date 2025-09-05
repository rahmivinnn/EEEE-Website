import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function AboutSection() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section id="about" className="pt-40 pb-32 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-900/50 to-transparent"></div>
      
      <div 
        ref={ref}
        className={`relative z-10 max-w-7xl mx-auto section-fade ${isInView ? 'in-view' : ''}`}
      >
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-montserrat text-5xl md:text-7xl uppercase mb-8 tracking-wider font-black">
              <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
                Next-Gen
              </span>
              <br />
              <span className="text-white">Protocol</span>
            </h2>
            
            <div className="space-y-6 text-zinc-300 text-lg leading-relaxed">
              <p>
                $EEEEE operates as a sophisticated financial instrument within the Cardano ecosystem, 
                leveraging advanced smart contract architecture and institutional-grade security protocols.
              </p>
              <p>
                Our platform integrates cutting-edge DeFi mechanisms with enterprise-level partnerships, 
                creating unprecedented value propositions for both retail and institutional participants.
              </p>
              <p>
                Through strategic algorithmic positioning and deep liquidity partnerships, 
                $EEEEE has established itself as the premier digital asset for serious investors.
              </p>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 rounded-2xl p-8 backdrop-blur-xl">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-zinc-800/50 rounded-xl">
                  <div className="text-3xl font-bold text-violet-400 mb-2">24/7</div>
                  <div className="text-sm text-zinc-400 uppercase tracking-wider">Market Operations</div>
                </div>
                <div className="text-center p-6 bg-zinc-800/50 rounded-xl">
                  <div className="text-3xl font-bold text-purple-400 mb-2">99.9%</div>
                  <div className="text-sm text-zinc-400 uppercase tracking-wider">System Uptime</div>
                </div>
                <div className="text-center p-6 bg-zinc-800/50 rounded-xl">
                  <div className="text-3xl font-bold text-indigo-400 mb-2">$1B+</div>
                  <div className="text-sm text-zinc-400 uppercase tracking-wider">Total Volume</div>
                </div>
                <div className="text-center p-6 bg-zinc-800/50 rounded-xl">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">500K+</div>
                  <div className="text-sm text-zinc-400 uppercase tracking-wider">Active Holders</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}