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
    <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="font-anton text-2xl gradient-text">$EEEEE</div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <button onClick={() => handleNavClick('#home')} className="hover:text-neon-purple transition-colors">
              Home
            </button>
            <button onClick={() => handleNavClick('#about')} className="hover:text-neon-purple transition-colors">
              About
            </button>
            <button onClick={() => handleNavClick('#why')} className="hover:text-neon-purple transition-colors">
              Why $EEEEE
            </button>
            <button onClick={() => handleNavClick('#tokenomics')} className="hover:text-neon-purple transition-colors">
              Tokenomics
            </button>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-md">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <button 
              onClick={() => handleNavClick('#home')} 
              className="block px-3 py-2 hover:text-neon-purple transition-colors w-full text-left"
            >
              Home
            </button>
            <button 
              onClick={() => handleNavClick('#about')} 
              className="block px-3 py-2 hover:text-neon-purple transition-colors w-full text-left"
            >
              About
            </button>
            <button 
              onClick={() => handleNavClick('#why')} 
              className="block px-3 py-2 hover:text-neon-purple transition-colors w-full text-left"
            >
              Why $EEEEE
            </button>
            <button 
              onClick={() => handleNavClick('#tokenomics')} 
              className="block px-3 py-2 hover:text-neon-purple transition-colors w-full text-left"
            >
              Tokenomics
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
