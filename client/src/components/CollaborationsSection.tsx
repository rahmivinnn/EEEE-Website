import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function CollaborationsSection() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section className="py-20 px-4">
      <div 
        ref={ref}
        className={`max-w-6xl mx-auto text-center section-fade ${isInView ? 'in-view' : ''}`}
      >
        <h2 className="font-anton text-4xl md:text-6xl uppercase mb-12 gradient-text">
          🤝 Upcoming Collaborations
        </h2>
        <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
          A major collab is around the corner — potentially involving meme heavyweights. Let's just say if $SNEK's looking for energy, $EEEEE brings the whole damn jungle.
        </p>
      </div>
    </section>
  );
}
