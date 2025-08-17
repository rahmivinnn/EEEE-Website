import { useState, useEffect } from "react";
import { X, Volume2, VolumeX } from "lucide-react";
import mascotImage from "@assets/WhatsApp_Image_2025-08-17_at_3.41.31_PM__1_-removebg-preview_1755421217465.png";

export default function WelcomePopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);

  useEffect(() => {
    // Show popup after 2 seconds
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  const toggleSound = () => {
    setSoundEnabled(!soundEnabled);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed top-0 left-0 w-screen h-screen z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-sm animate-in fade-in duration-500">
      <div className="relative bg-gradient-to-br from-zinc-900 via-violet-900/30 to-black border-2 border-violet-500/50 rounded-3xl p-6 w-full max-w-md mx-4 animate-in zoom-in-95 duration-700 shadow-2xl shadow-violet-500/25">
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-zinc-400 hover:text-white transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Mascot */}
        <div className="text-center mb-6">
          <div className="relative inline-block w-28 h-28 mx-auto">
            <img 
              src={mascotImage} 
              alt="$EEEEE Mascot" 
              className="w-full h-full object-contain animate-bounce-slow drop-shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-violet-500/20 to-purple-500/20 rounded-full blur-xl animate-pulse"></div>
          </div>
        </div>

        {/* Welcome message */}
        <div className="text-center mb-6">
          <h2 className="font-anton text-2xl uppercase mb-3 bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
            Welcome to $EEEEE!
          </h2>
          <p className="text-zinc-300 leading-relaxed text-sm">
            Ready to experience the most <span className="font-bold text-violet-400">dominant force</span> on Cardano? 
            Let's make some noise together!
          </p>
        </div>

        {/* Interactive buttons */}
        <div className="space-y-3">
          <button
            onClick={handleClose}
            className="w-full group relative px-6 py-3 bg-gradient-to-r from-violet-600 to-purple-600 rounded-xl font-bold text-base tracking-wide transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-violet-500/25 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <span className="relative z-10 flex items-center justify-center gap-2">
              <span>LET'S GO!</span>
            </span>
          </button>

          <div className="flex gap-3">
            <a
              href="https://app.dexhunter.io/swap?tokenIdSell=&tokenIdBuy=3d7fcadb114dacbdffa1aeb2f3dc2fecec610a3b572d60f96f1341494545454545436f696e414441"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleClose}
              className="flex-1 px-4 py-2.5 bg-gradient-to-r from-emerald-600 to-cyan-600 rounded-lg font-semibold text-center hover:scale-105 transition-transform text-sm"
            >
              Buy Now
            </a>
            <a
              href="https://discord.gg/mMfa5nkAaT"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleClose}
              className="flex-1 px-4 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg font-semibold text-center hover:scale-105 transition-transform text-sm"
            >
              Join Discord
            </a>
          </div>

          {/* Sound toggle */}
          <button
            onClick={toggleSound}
            className="w-full px-4 py-2 bg-zinc-800/50 hover:bg-zinc-700/50 rounded-lg font-medium transition-colors flex items-center justify-center gap-2 text-sm"
          >
            {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
            <span>{soundEnabled ? "Sound On" : "Sound Off"}</span>
          </button>
        </div>

        {/* Floating particles effect */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-3xl">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1.5 h-1.5 bg-violet-400 rounded-full animate-float opacity-60"
              style={{
                left: `${20 + i * 20}%`,
                top: `${25 + i * 15}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${3 + i * 0.5}s`
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}