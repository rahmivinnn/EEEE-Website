import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-xl border-b border-zinc-800/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="font-anton text-3xl tracking-wider">
            <span className="text-white">$</span>
            <span className="bg-gradient-to-r from-violet-400 to-purple-300 bg-clip-text text-transparent">EEEEE</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-12">
            <button onClick={() => handleNavClick('#home')} className="text-zinc-300 hover:text-white transition-colors duration-300 font-medium tracking-wide">
              Home
            </button>
            <button onClick={() => handleNavClick('#about')} className="text-zinc-300 hover:text-white transition-colors duration-300 font-medium tracking-wide">
              About
            </button>
            <button onClick={() => handleNavClick('#ecosystem')} className="text-zinc-300 hover:text-white transition-colors duration-300 font-medium tracking-wide">
              Ecosystem
            </button>
            <button onClick={() => handleNavClick('#tokenomics')} className="text-zinc-300 hover:text-white transition-colors duration-300 font-medium tracking-wide">
              Tokenomics
            </button>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-zinc-300 hover:text-white transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-xl border-t border-zinc-800/50">
          <div className="px-6 pt-4 pb-6 space-y-4">
            <button 
              onClick={() => handleNavClick('#home')} 
              className="block text-zinc-300 hover:text-white transition-colors font-medium tracking-wide"
            >
              Home
            </button>
            <button 
              onClick={() => handleNavClick('#about')} 
              className="block text-zinc-300 hover:text-white transition-colors font-medium tracking-wide"
            >
              About
            </button>
            <button 
              onClick={() => handleNavClick('#ecosystem')} 
              className="block text-zinc-300 hover:text-white transition-colors font-medium tracking-wide"
            >
              Ecosystem
            </button>
            <button 
              onClick={() => handleNavClick('#tokenomics')} 
              className="block text-zinc-300 hover:text-white transition-colors font-medium tracking-wide"
            >
              Tokenomics
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}