import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function MascotSection() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section className="py-20 px-4">
      <div 
        ref={ref}
        className={`max-w-6xl mx-auto text-center section-fade ${isInView ? 'in-view' : ''}`}
      >
        <h2 className="font-anton text-4xl md:text-6xl uppercase mb-12 gradient-text">
          🎭 Mascot Design
        </h2>
        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
          Our coin mascot is the loudest in the room, literally. Always yelling, always moving, always memeing — it represents the wild, unstoppable spirit of $EEEEE.
        </p>
        {/* Placeholder for mascot image */}
        <div className="bg-gradient-to-br from-neon-purple/20 to-hot-pink/20 rounded-2xl p-12 border-2 border-dashed border-neon-purple/50 max-w-md mx-auto hover:scale-105 transition-transform">
          <div className="text-6xl mb-4 animate-bounce-slow">🎭</div>
          <p className="text-gray-400">Mascot Animation Coming Soon</p>
        </div>
      </div>
    </section>
  );
}
