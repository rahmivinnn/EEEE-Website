import { Twitter, MessageCircle, BarChart3, ArrowRightLeft } from "lucide-react";
import { SiDiscord } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="bg-black/40 backdrop-blur-md border-t border-white/10 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-8">
          <h3 className="font-anton text-3xl gradient-text mb-6">🔗 Official Links</h3>
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <a 
              href="https://x.com/eeeeecoin_ada" 
              target="_blank" 
              rel="noopener noreferrer"
              className="glow-button bg-white/10 hover:bg-white/20 px-6 py-3 rounded-xl font-semibold transition-all flex items-center gap-2"
            >
              <Twitter className="w-5 h-5" />
              X (Twitter)
            </a>
            <a 
              href="https://discord.gg/mMfa5nkAaT" 
              target="_blank" 
              rel="noopener noreferrer"
              className="glow-button bg-white/10 hover:bg-white/20 px-6 py-3 rounded-xl font-semibold transition-all flex items-center gap-2"
            >
              <SiDiscord className="w-5 h-5" />
              Discord
            </a>
            <a 
              href="https://www.taptools.io/charts/token/63f947b8d9535bc4e4ce6919e3dc056547e8d30ada12f29aa5f826b8.8d3429b1cd8f035141c7c020be711747c6b4623b5ca5d5a87c97d78b84a1a94a?charts=" 
              target="_blank" 
              rel="noopener noreferrer"
              className="glow-button bg-white/10 hover:bg-white/20 px-6 py-3 rounded-xl font-semibold transition-all flex items-center gap-2"
            >
              <BarChart3 className="w-5 h-5" />
              TapTools
            </a>
            <a 
              href="https://app.dexhunter.io/swap?tokenIdSell=&tokenIdBuy=3d7fcadb114dacbdffa1aeb2f3dc2fecec610a3b572d60f96f1341494545454545436f696e414441" 
              target="_blank" 
              rel="noopener noreferrer"
              className="glow-button bg-white/10 hover:bg-white/20 px-6 py-3 rounded-xl font-semibold transition-all flex items-center gap-2"
            >
              <ArrowRightLeft className="w-5 h-5" />
              Dexhunter
            </a>
            <a 
              href="https://www.snek.fun/token/3d7fcadb114dacbdffa1aeb2f3dc2fecec610a3b572d60f96f1341494545454545436f696e414441?1752081989900" 
              target="_blank" 
              rel="noopener noreferrer"
              className="glow-button bg-white/10 hover:bg-white/20 px-6 py-3 rounded-xl font-semibold transition-all flex items-center gap-2"
            >
              🐍 Snekfun
            </a>
          </div>
          
          {/* Persistent Buy Button */}
          <div className="mb-8">
            <a 
              href="https://app.dexhunter.io/swap?tokenIdSell=&tokenIdBuy=3d7fcadb114dacbdffa1aeb2f3dc2fecec610a3b572d60f96f1341494545454545436f696e414441" 
              target="_blank" 
              rel="noopener noreferrer"
              className="glow-button bg-gradient-to-r from-neon-purple to-hot-pink px-12 py-4 rounded-xl font-bold text-xl animate-pulse hover:scale-105 transition-transform"
            >
              🚀 Buy $EEEEE Now!
            </a>
          </div>
          
          {/* Policy ID */}
          <div className="bg-white/5 rounded-xl p-4 max-w-2xl mx-auto">
            <p className="text-sm text-gray-400 mb-2">Policy ID:</p>
            <p className="text-xs font-mono text-gray-300 break-all">
              3d7fcadb114dacbdffa1aeb2f3dc2fecec610a3b572d60f96f134149
            </p>
          </div>
        </div>
        
        <div className="text-center pt-8 border-t border-white/10">
          <p className="text-gray-400">
            © 2025 $EEEEE. The loudest meme on Cardano. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
