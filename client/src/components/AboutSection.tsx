import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function AboutSection() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section id="about" className="py-20 px-4">
      <div 
        ref={ref}
        className={`max-w-6xl mx-auto section-fade ${isInView ? 'in-view' : ''}`}
      >
        <h2 className="font-anton text-4xl md:text-6xl uppercase text-center mb-12 gradient-text">
          🚀 About $EEEEE
        </h2>
        <p className="text-xl md:text-2xl text-center text-gray-300 max-w-4xl mx-auto leading-relaxed">
          Born from the chaos of crypto and powered by an army of degens, $EEEEE is a meme token that doesn't just ride waves — we create them. Whether it's insane volume, bullish news, or collabs that shake timelines, $EEEEE stays loud.
        </p>
      </div>
    </section>
  );
}
