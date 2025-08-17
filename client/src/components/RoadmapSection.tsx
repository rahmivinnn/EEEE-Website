import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function RoadmapSection() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section className="py-32 px-6 relative">
      <div 
        ref={ref}
        className={`max-w-7xl mx-auto text-center section-fade ${isInView ? 'in-view' : ''}`}
      >
        <h2 className="font-anton text-5xl md:text-7xl uppercase mb-8 tracking-wider">
          <span className="text-white">Strategic</span>
          <br />
          <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">Roadmap</span>
        </h2>
        
        <p className="text-xl text-zinc-400 mb-16 max-w-3xl mx-auto leading-relaxed">
          Our development trajectory follows institutional timelines with quarterly milestones 
          and enterprise partnership integrations.
        </p>
        
        <div className="bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 rounded-2xl p-12 max-w-2xl mx-auto backdrop-blur-xl">
          <div className="mb-8">
            <svg className="w-16 h-16 mx-auto text-violet-400 mb-6" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
            <h3 className="text-2xl font-bold text-white mb-4 tracking-wide">Exclusive Access Required</h3>
            <p className="text-zinc-400 leading-relaxed mb-8">
              Strategic roadmap details are available exclusively to verified community members 
              and institutional partners through our secure communication channels.
            </p>
          </div>
          
          <a 
            href="https://discord.gg/mMfa5nkAaT" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-violet-600 to-purple-600 rounded-xl font-semibold text-lg tracking-wide transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-violet-500/25"
          >
            <span>Access Strategic Updates</span>
            <span className="text-xl group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}