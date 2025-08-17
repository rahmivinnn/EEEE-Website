import { Twitter, MessageCircle, BarChart3, ArrowRightLeft } from "lucide-react";
import { SiDiscord } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-zinc-800 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h3 className="font-anton text-4xl mb-12 tracking-wider">
            <span className="text-white">$</span>
            <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">EEEEE</span>
          </h3>
          
          {/* Premium platform links */}
          <div className="grid md:grid-cols-5 gap-6 mb-16">
            <a 
              href="https://x.com/eeeeecoin_ada" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 hover:border-violet-500/50 px-6 py-8 rounded-xl transition-all duration-500 flex flex-col items-center gap-4"
            >
              <Twitter className="w-8 h-8 text-zinc-400 group-hover:text-violet-400 transition-colors" />
              <span className="font-semibold text-zinc-300 group-hover:text-white transition-colors tracking-wide">Twitter</span>
            </a>
            
            <a 
              href="https://discord.gg/mMfa5nkAaT" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 hover:border-purple-500/50 px-6 py-8 rounded-xl transition-all duration-500 flex flex-col items-center gap-4"
            >
              <SiDiscord className="w-8 h-8 text-zinc-400 group-hover:text-purple-400 transition-colors" />
              <span className="font-semibold text-zinc-300 group-hover:text-white transition-colors tracking-wide">Discord</span>
            </a>
            
            <a 
              href="https://www.taptools.io/charts/token/63f947b8d9535bc4e4ce6919e3dc056547e8d30ada12f29aa5f826b8.8d3429b1cd8f035141c7c020be711747c6b4623b5ca5d5a87c97d78b84a1a94a?charts=" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 hover:border-indigo-500/50 px-6 py-8 rounded-xl transition-all duration-500 flex flex-col items-center gap-4"
            >
              <BarChart3 className="w-8 h-8 text-zinc-400 group-hover:text-indigo-400 transition-colors" />
              <span className="font-semibold text-zinc-300 group-hover:text-white transition-colors tracking-wide">Analytics</span>
            </a>
            
            <a 
              href="https://app.dexhunter.io/swap?tokenIdSell=&tokenIdBuy=3d7fcadb114dacbdffa1aeb2f3dc2fecec610a3b572d60f96f1341494545454545436f696e414441" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 hover:border-cyan-500/50 px-6 py-8 rounded-xl transition-all duration-500 flex flex-col items-center gap-4"
            >
              <ArrowRightLeft className="w-8 h-8 text-zinc-400 group-hover:text-cyan-400 transition-colors" />
              <span className="font-semibold text-zinc-300 group-hover:text-white transition-colors tracking-wide">Trading</span>
            </a>
            
            <a 
              href="https://www.snek.fun/token/3d7fcadb114dacbdffa1aeb2f3dc2fecec610a3b572d60f96f1341494545454545436f696e414441?1752081989900" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 hover:border-emerald-500/50 px-6 py-8 rounded-xl transition-all duration-500 flex flex-col items-center gap-4"
            >
              <span className="text-2xl group-hover:scale-110 transition-transform">🐍</span>
              <span className="font-semibold text-zinc-300 group-hover:text-white transition-colors tracking-wide">Snek.fun</span>
            </a>
          </div>
          
          {/* Premium trading CTA */}
          <div className="mb-16">
            <a 
              href="https://app.dexhunter.io/swap?tokenIdSell=&tokenIdBuy=3d7fcadb114dacbdffa1aeb2f3dc2fecec610a3b572d60f96f1341494545454545436f696e414441" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-4 px-16 py-6 bg-gradient-to-r from-violet-600 to-purple-600 rounded-xl font-bold text-xl tracking-wide transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-violet-500/25"
            >
              <span>Access Institutional Trading</span>
              <span className="text-2xl group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>
          
          {/* Policy ID in premium style */}
          <div className="bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 rounded-xl p-8 max-w-3xl mx-auto">
            <h4 className="text-lg font-semibold text-zinc-300 mb-4 uppercase tracking-wider">Contract Address</h4>
            <div className="bg-zinc-950 rounded-lg p-4 border border-zinc-700">
              <p className="text-sm font-mono text-zinc-400 break-all leading-relaxed">
                3d7fcadb114dacbdffa1aeb2f3dc2fecec610a3b572d60f96f134149
              </p>
            </div>
            <p className="text-xs text-zinc-500 mt-3 uppercase tracking-wider">Verified Smart Contract • Cardano Mainnet</p>
          </div>
        </div>
        
        <div className="text-center pt-12 border-t border-zinc-800">
          <p className="text-zinc-500 tracking-wide">
            © 2025 $EEEEE Protocol. Institutional-grade digital asset infrastructure.
          </p>
        </div>
      </div>
    </footer>
  );
}