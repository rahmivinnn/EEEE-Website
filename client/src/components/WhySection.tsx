import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function WhySection() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section id="why" className="py-20 px-4">
      <div 
        ref={ref}
        className={`max-w-6xl mx-auto section-fade ${isInView ? 'in-view' : ''}`}
      >
        <h2 className="font-anton text-4xl md:text-6xl uppercase text-center mb-16 gradient-text">
          🔥 Why $EEEEE?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Feature Card 1 */}
          <div className="feature-card rounded-2xl p-8 hover:scale-105 transition-transform duration-300">
            <div className="text-4xl mb-6 text-center">⚡</div>
            <h3 className="font-bold text-2xl mb-4 text-center text-neon-purple">Hype-Backed</h3>
            <p className="text-gray-300 text-center">
              From major meme contests to viral raids, the energy around $EEEEE is unmatched.
            </p>
          </div>
          
          {/* Feature Card 2 */}
          <div className="feature-card rounded-2xl p-8 hover:scale-105 transition-transform duration-300">
            <div className="text-4xl mb-6 text-center">👥</div>
            <h3 className="font-bold text-2xl mb-4 text-center text-hot-pink">Community-Led</h3>
            <p className="text-gray-300 text-center">
              Everything we do is built by the people. We're fueled by fun, strategy, and solid vibes.
            </p>
          </div>
          
          {/* Feature Card 3 */}
          <div className="feature-card rounded-2xl p-8 hover:scale-105 transition-transform duration-300">
            <div className="text-4xl mb-6 text-center">🌐</div>
            <h3 className="font-bold text-2xl mb-4 text-center text-electric-blue">Web3 Native</h3>
            <p className="text-gray-300 text-center">
              Listed on TapTools, with multiple major collabs brewing. We're building something loud — and lasting.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
