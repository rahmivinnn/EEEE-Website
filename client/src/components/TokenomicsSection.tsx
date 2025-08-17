import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function TokenomicsSection() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section id="tokenomics" className="py-20 px-4">
      <div 
        ref={ref}
        className={`max-w-6xl mx-auto section-fade ${isInView ? 'in-view' : ''}`}
      >
        <h2 className="font-anton text-4xl md:text-6xl uppercase text-center mb-16 gradient-text">
          📊 Tokenomics
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="feature-card rounded-2xl p-8 text-center hover:scale-105 transition-transform">
            <h3 className="font-bold text-2xl mb-4 text-neon-purple">Total Supply</h3>
            <p className="text-3xl font-bold text-white">1,000,000,000</p>
          </div>
          
          <div className="feature-card rounded-2xl p-8 text-center hover:scale-105 transition-transform">
            <h3 className="font-bold text-2xl mb-4 text-hot-pink">Dev Allocation</h3>
            <p className="text-3xl font-bold text-white mb-2">78.95M</p>
            <p className="text-sm text-gray-400">Fully vested. Transparent schedule available.</p>
          </div>
          
          <div className="feature-card rounded-2xl p-8 text-center hover:scale-105 transition-transform">
            <h3 className="font-bold text-2xl mb-4 text-electric-blue">LP Status</h3>
            <p className="text-lg font-bold text-white">Burned & Renounced</p>
            <p className="text-sm text-gray-400">True to meme culture</p>
          </div>
        </div>
      </div>
    </section>
  );
}
