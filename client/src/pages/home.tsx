import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import WhySection from "@/components/WhySection";
import MascotSection from "@/components/MascotSection";
import TokenomicsSection from "@/components/TokenomicsSection";
import RoadmapSection from "@/components/RoadmapSection";
import CollaborationsSection from "@/components/CollaborationsSection";
import Footer from "@/components/Footer";
import WelcomePopup from "@/components/WelcomePopup";

export default function Home() {
  return (
    <div className="min-h-screen text-white relative w-full">
      {/* Metaverse background layers */}
      <div className="fixed inset-0 w-full h-full -z-20 overflow-hidden">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-zinc-900 to-black"></div>
        
        {/* Metaverse overlays */}
        <div className="absolute inset-0 metaverse-bg"></div>
        
        {/* Floating orbs */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-violet-600/20 to-purple-600/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-40 right-20 w-80 h-80 bg-gradient-to-br from-blue-600/15 to-indigo-600/15 rounded-full blur-3xl animate-float" style={{animationDelay: '5s'}}></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-gradient-to-br from-purple-600/10 to-pink-600/10 rounded-full blur-3xl animate-float" style={{animationDelay: '10s'}}></div>
        
        {/* Grid overlay */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `
            linear-gradient(rgba(139, 92, 246, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139, 92, 246, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
      </div>
      
      {/* Content wrapper */}
      <div className="relative z-10 w-full">
        <WelcomePopup />
        <Navigation />
        <HeroSection />
        <AboutSection />
        <WhySection />
        <MascotSection />
        <TokenomicsSection />
        <RoadmapSection />
        <CollaborationsSection />
        <Footer />
      </div>
    </div>
  );
}
