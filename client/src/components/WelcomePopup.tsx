import { useState, useEffect } from "react";
// Using real SVG icons instead of AI-generated ones
import mascotImage from "@assets/WhatsApp_Image_2025-08-17_at_3.41.31_PM-removebg-preview_1755512185519.png";

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
    <div className="fixed top-0 left-0 w-screen h-screen z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-sm animate-in fade-in duration-500 pt-24">
      <div className="relative bg-gradient-to-br from-zinc-900 via-purple-900/40 to-black border-2 border-yellow-500/50 rounded-3xl p-6 w-full max-w-md mx-4 animate-in zoom-in-95 duration-700 shadow-2xl shadow-purple-500/25 mt-16">
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-zinc-400 hover:text-white transition-colors"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"/>
          </svg>
        </button>

        {/* Mascot with Lottie animation background */}
        <div className="text-center mb-6">
          <div className="relative inline-block w-28 h-28 mx-auto">
            {/* Animated background glow effect */}
            <div className="absolute inset-0 w-32 h-32 -top-2 -left-2">
              <div className="w-full h-full bg-gradient-to-br from-purple-500/20 to-yellow-500/20 rounded-full blur-xl animate-pulse"></div>
            </div>
            <img 
              src={mascotImage} 
              alt="$EEEEE Mascot" 
              className="w-full h-full object-contain animate-bounce-slow drop-shadow-2xl relative z-10"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-yellow-500/20 rounded-full blur-xl animate-pulse"></div>
          </div>
        </div>

        {/* Welcome message */}
        <div className="text-center mb-6">
          <h2 className="font-montserrat text-2xl uppercase mb-3 bg-gradient-to-r from-purple-400 to-yellow-400 bg-clip-text text-transparent font-bold">
            Welcome to $EEEEE!
          </h2>
          <p className="text-zinc-300 leading-relaxed text-sm">
            Ready to experience the most <span className="font-bold text-yellow-400">dominant force</span> on Cardano? 
            Let's make some noise together!
          </p>
        </div>

        {/* Interactive buttons with natural styling */}
        <div className="space-y-3">
          <button
            onClick={handleClose}
            className="w-full group relative px-6 py-3 bg-gradient-to-r from-purple-500 to-yellow-500 rounded-xl font-bold text-base tracking-wide transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/30 overflow-hidden border-2 border-purple-400/20"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <span className="relative z-10 flex items-center justify-center gap-2 text-black font-extrabold">
              <span>LET'S GO!</span>
            </span>
          </button>

          <div className="flex gap-3">
            <a
              href="https://app.dexhunter.io/swap?tokenIdSell=&tokenIdBuy=3d7fcadb114dacbdffa1aeb2f3dc2fecec610a3b572d60f96f1341494545454545436f696e414441"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleClose}
              className="flex-1 px-4 py-2.5 bg-gradient-to-r from-purple-600 to-violet-600 rounded-lg font-semibold text-center hover:scale-105 transition-transform text-sm border border-purple-500/30"
            >
              Buy Now
            </a>
            <a
              href="https://discord.gg/mMfa5nkAaT"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleClose}
              className="flex-1 px-4 py-2.5 bg-gradient-to-r from-yellow-600 to-amber-600 rounded-lg font-semibold text-center hover:scale-105 transition-transform text-sm border border-yellow-500/30"
            >
              Join Discord
            </a>
          </div>

          {/* Sound toggle */}
          <button
            onClick={toggleSound}
            className="w-full px-4 py-2 bg-zinc-800/50 hover:bg-zinc-700/50 rounded-lg font-medium transition-colors flex items-center justify-center gap-2 text-sm border border-zinc-600/30"
          >
            {soundEnabled ? 
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M14,3.23V5.29C16.89,6.15 19,8.83 19,12C19,15.17 16.89,17.85 14,18.71V20.77C18,19.86 21,16.28 21,12C21,7.72 18,4.14 14,3.23M16.5,12C16.5,10.23 15.5,8.71 14,7.97V16C15.5,15.29 16.5,13.76 16.5,12M3,9V15H7L12,20V4L7,9H3Z"/></svg> : 
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12,4L9.91,6.09L12,8.18M4.27,3L3,4.27L7.73,9H3V15H7L12,20V13.27L16.25,17.53C15.58,18.04 14.83,18.46 14,18.7V20.77C15.38,20.45 16.63,19.82 17.68,18.96L19.73,21L21,19.73L12,10.73M19,12C19,12.94 18.8,13.82 18.46,14.64L19.97,16.15C20.62,14.91 21,13.5 21,12C21,7.72 18,4.14 14,3.23V5.29C16.89,6.15 19,8.83 19,12M16.5,12C16.5,10.23 15.5,8.71 14,7.97V10.18L16.45,12.63C16.5,12.43 16.5,12.21 16.5,12Z"/></svg>
            }
            <span>{soundEnabled ? "Sound On" : "Sound Off"}</span>
          </button>
        </div>

        {/* Floating particles effect */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-3xl">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1.5 h-1.5 bg-yellow-400 rounded-full animate-float opacity-60"
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