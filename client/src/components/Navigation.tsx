import { useState } from "react";
// Using real SVG icons instead of AI-generated ones

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
    <nav className="fixed top-0 w-full z-[100] bg-black/80 backdrop-blur-xl border-b border-zinc-800/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          <div className="font-montserrat text-3xl tracking-wider font-black">
            <span className="text-white">$</span>
            <span className="bg-gradient-to-r from-violet-400 to-purple-300 bg-clip-text text-transparent">EEEEE</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <button onClick={() => handleNavClick('#home')} className="text-zinc-300 hover:text-white transition-colors duration-300 font-medium tracking-wide">
              Home
            </button>
            <button onClick={() => handleNavClick('#about')} className="text-zinc-300 hover:text-white transition-colors duration-300 font-medium tracking-wide">
              About
            </button>
            <button onClick={() => handleNavClick('#web3')} className="text-zinc-300 hover:text-white transition-colors duration-300 font-medium tracking-wide">
              Web3
            </button>
            <button onClick={() => handleNavClick('#defi')} className="text-zinc-300 hover:text-white transition-colors duration-300 font-medium tracking-wide">
              DeFi
            </button>
            <button onClick={() => handleNavClick('#nft')} className="text-zinc-300 hover:text-white transition-colors duration-300 font-medium tracking-wide">
              NFTs
            </button>
            <button onClick={() => handleNavClick('#tokenomics')} className="text-zinc-300 hover:text-white transition-colors duration-300 font-medium tracking-wide">
              Tokenomics
            </button>
            <button onClick={() => handleNavClick('#cex-listing')} className="text-zinc-300 hover:text-white transition-colors duration-300 font-medium tracking-wide">
              CEX Listing
            </button>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-zinc-300 hover:text-white transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? 
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"/></svg> : 
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z"/></svg>
            }
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
              onClick={() => handleNavClick('#web3')} 
              className="block text-zinc-300 hover:text-white transition-colors font-medium tracking-wide"
            >
              Web3
            </button>
            <button 
              onClick={() => handleNavClick('#defi')} 
              className="block text-zinc-300 hover:text-white transition-colors font-medium tracking-wide"
            >
              DeFi
            </button>
            <button 
              onClick={() => handleNavClick('#nft')} 
              className="block text-zinc-300 hover:text-white transition-colors font-medium tracking-wide"
            >
              NFTs
            </button>
            <button 
              onClick={() => handleNavClick('#tokenomics')} 
              className="block text-zinc-300 hover:text-white transition-colors font-medium tracking-wide"
            >
              Tokenomics
            </button>
            <button 
              onClick={() => handleNavClick('#cex-listing')} 
              className="block text-zinc-300 hover:text-white transition-colors font-medium tracking-wide"
            >
              CEX Listing
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}