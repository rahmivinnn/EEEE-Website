import { useState } from 'react';

interface LottieButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  href?: string;
  lottieUrl?: string;
  variant?: 'primary' | 'secondary' | 'accent';
}

export default function LottieButton({ 
  children, 
  onClick, 
  className = '', 
  href, 
  lottieUrl = "https://lottie.host/embed/d4e5f6g7-8h9i-0j1k-2l3m-4n5o6p7q8r9s/6dE7f1kO9q.json",
  variant = 'primary'
}: LottieButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  const baseClasses = "relative group px-6 py-3 rounded-xl font-bold text-base tracking-wide transition-all duration-500 hover:scale-105 overflow-hidden border-2";
  
  const variantClasses = {
    primary: "bg-gradient-to-r from-orange-500 to-amber-500 hover:shadow-2xl hover:shadow-orange-500/30 border-orange-400/20 text-black",
    secondary: "bg-gradient-to-r from-teal-600 to-green-600 hover:shadow-2xl hover:shadow-teal-500/30 border-teal-500/30 text-white", 
    accent: "bg-gradient-to-r from-blue-600 to-cyan-600 hover:shadow-2xl hover:shadow-blue-500/30 border-blue-500/30 text-white"
  };

  const Component = href ? 'a' : 'button';
  const props = href ? { href, target: "_blank", rel: "noopener noreferrer" } : { onClick };

  return (
    <Component
      {...props}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animated background effect */}
      <div className={`absolute inset-0 opacity-20 transition-all duration-300 ${isHovered ? 'scale-110' : 'scale-100'}`}>
        <div className="w-full h-full bg-gradient-to-br from-current/20 to-current/10 rounded-xl animate-pulse"></div>
      </div>
      
      {/* Button content */}
      <span className="relative z-10 flex items-center justify-center gap-2 font-extrabold">
        {children}
      </span>
    </Component>
  );
}