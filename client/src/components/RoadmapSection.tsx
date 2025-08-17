import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function RoadmapSection() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section className="py-20 px-4">
      <div 
        ref={ref}
        className={`max-w-6xl mx-auto text-center section-fade ${isInView ? 'in-view' : ''}`}
      >
        <h2 className="font-anton text-4xl md:text-6xl uppercase mb-12 gradient-text">
          🌐 Roadmap
        </h2>
        <p className="text-xl text-gray-300 mb-8">Announced on Discord</p>
        <a 
          href="https://discord.gg/mMfa5nkAaT" 
          target="_blank" 
          rel="noopener noreferrer"
          className="glow-button bg-gradient-to-r from-electric-blue to-neon-purple px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-transform"
        >
          📋 View Roadmap on Discord
        </a>
      </div>
    </section>
  );
}
