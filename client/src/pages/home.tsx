import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import WhySection from "@/components/WhySection";
import MascotSection from "@/components/MascotSection";
import TokenomicsSection from "@/components/TokenomicsSection";
import RoadmapSection from "@/components/RoadmapSection";
import CollaborationsSection from "@/components/CollaborationsSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen text-white overflow-x-hidden">
      {/* Fixed background */}
      <div className="fixed inset-0 bg-gradient-to-br from-black via-deep-purple to-indigo-900 -z-10" />
      <div className="fixed inset-0 noise-overlay -z-10" />
      
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
  );
}
