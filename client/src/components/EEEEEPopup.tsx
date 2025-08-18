import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { X, ExternalLink, Copy, Star } from "lucide-react";
import { Player } from '@lottiefiles/react-lottie-player';
import eeeeeMainImage from "@assets/WhatsApp_Image_2025-08-17_at_3.41.31_PM-removebg-preview_1755512185519.png";
import eeeeeSmallImage from "@assets/image_1755511815277.png";

interface EEEEEPopupProps {
  children: React.ReactNode;
}

export default function EEEEEPopup({ children }: EEEEEPopupProps) {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const contractAddress = "3d7fcadb114dacbdffa1aeb2f3dc2fecec610a3b572d60f96f1341494545454545436f696e414441";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(contractAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const tradingLinks = [
    {
      name: "DexHunter",
      url: "https://app.dexhunter.io/swap?tokenIdSell=&tokenIdBuy=3d7fcadb114dacbdffa1aeb2f3dc2fecec610a3b572d60f96f1341494545454545436f696e414441",
      description: "Premium DEX with advanced features"
    },
    {
      name: "TapTools",
      url: "https://taptools.io/charts/token/3d7fcadb114dacbdffa1aeb2f3dc2fecec610a3b572d60f96f1341494545454545436f696e414441",
      description: "Real-time charts and analytics"
    },
    {
      name: "Snek.fun",
      url: "https://snek.fun/token/3d7fcadb114dacbdffa1aeb2f3dc2fecec610a3b572d60f96f1341494545454545436f696e414441",
      description: "Community-driven trading platform"
    }
  ];

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-md bg-gradient-to-br from-zinc-900 to-black border-violet-500/30 p-0 overflow-hidden">
        {/* Header with EEEEE mascot */}
        <div className="relative bg-gradient-to-br from-orange-600/20 to-amber-600/20 p-6 text-center">
          <button
            onClick={() => setOpen(false)}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/30 hover:bg-black/50 transition-colors"
          >
            <X className="w-4 h-4 text-white" />
          </button>
          
          <div className="flex items-center justify-center gap-4 mb-4">
            <img 
              src={eeeeeSmallImage} 
              alt="EEEEE" 
              className="w-16 h-16 rounded-full border-2 border-orange-400 shadow-lg"
            />
            <img 
              src={eeeeeMainImage} 
              alt="EEEEE Main" 
              className="w-20 h-20 rounded-full border-2 border-amber-400 shadow-xl"
            />
          </div>
          
          <h2 className="font-anton text-3xl text-white mb-2 tracking-wider">$EEEEE</h2>
          <p className="text-orange-300 text-sm">The Loudest Meme on Cardano</p>
          
          <div className="mt-4 flex justify-center gap-4 text-sm">
            <div className="bg-emerald-500/20 px-3 py-1 rounded-full border border-emerald-500/30">
              <span className="text-emerald-400 font-bold">$2.47</span>
            </div>
            <div className="bg-purple-500/20 px-3 py-1 rounded-full border border-purple-500/30">
              <span className="text-amber-400 font-bold">+24.7%</span>
            </div>
          </div>
        </div>

        {/* Contract Address */}
        <div className="px-6 py-4">
          <div className="bg-zinc-800/50 rounded-xl p-4 border border-zinc-700">
            <div className="flex items-center justify-between mb-2">
              <span className="text-zinc-400 text-sm">Contract Address</span>
              <button
                onClick={copyToClipboard}
                className="flex items-center gap-2 px-3 py-1 bg-orange-600/20 hover:bg-orange-600/30 rounded-lg transition-colors text-xs"
              >
                <Copy className="w-3 h-3" />
                {copied ? "Copied!" : "Copy"}
              </button>
            </div>
            <p className="text-white text-xs font-mono break-all leading-relaxed">
              {contractAddress}
            </p>
          </div>
        </div>

        {/* Trading Links */}
        <div className="px-6 pb-6">
          <h3 className="text-white font-bold mb-4 flex items-center gap-2">
            <Star className="w-4 h-4 text-yellow-400" />
            Start Trading
          </h3>
          <div className="space-y-3">
            {tradingLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 bg-gradient-to-r from-violet-600/10 to-purple-600/10 hover:from-violet-600/20 hover:to-purple-600/20 rounded-xl border border-violet-500/20 hover:border-violet-500/40 transition-all duration-300 group"
              >
                <div>
                  <div className="font-bold text-white text-sm">{link.name}</div>
                  <div className="text-zinc-400 text-xs">{link.description}</div>
                </div>
                <ExternalLink className="w-4 h-4 text-violet-400 group-hover:text-violet-300 transition-colors" />
              </a>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="bg-gradient-to-r from-violet-600/10 to-purple-600/10 px-6 py-4 border-t border-violet-500/20">
          <p className="text-center text-zinc-400 text-xs">
            Always DYOR before investing. Crypto investments are high risk.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}