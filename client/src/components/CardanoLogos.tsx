import React from 'react';

// Cardano Main Logo - Official Design
export const CardanoLogo = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Official Cardano Logo - Molecular/Hypocycloid Structure */}
    <g fill="#0033AD">
      {/* Outer ring of dots */}
      <circle cx="50" cy="15" r="2.5"/>
      <circle cx="65" cy="20" r="2.5"/>
      <circle cx="75" cy="35" r="2.5"/>
      <circle cx="80" cy="50" r="2.5"/>
      <circle cx="75" cy="65" r="2.5"/>
      <circle cx="65" cy="80" r="2.5"/>
      <circle cx="50" cy="85" r="2.5"/>
      <circle cx="35" cy="80" r="2.5"/>
      <circle cx="25" cy="65" r="2.5"/>
      <circle cx="20" cy="50" r="2.5"/>
      <circle cx="25" cy="35" r="2.5"/>
      <circle cx="35" cy="20" r="2.5"/>
      
      {/* Middle ring of dots */}
      <circle cx="50" cy="25" r="2"/>
      <circle cx="60" cy="30" r="2"/>
      <circle cx="70" cy="40" r="2"/>
      <circle cx="70" cy="50" r="2"/>
      <circle cx="70" cy="60" r="2"/>
      <circle cx="60" cy="70" r="2"/>
      <circle cx="50" cy="75" r="2"/>
      <circle cx="40" cy="70" r="2"/>
      <circle cx="30" cy="60" r="2"/>
      <circle cx="30" cy="50" r="2"/>
      <circle cx="30" cy="40" r="2"/>
      <circle cx="40" cy="30" r="2"/>
      
      {/* Inner ring of dots */}
      <circle cx="50" cy="35" r="1.5"/>
      <circle cx="57" cy="40" r="1.5"/>
      <circle cx="60" cy="50" r="1.5"/>
      <circle cx="57" cy="60" r="1.5"/>
      <circle cx="50" cy="65" r="1.5"/>
      <circle cx="43" cy="60" r="1.5"/>
      <circle cx="40" cy="50" r="1.5"/>
      <circle cx="43" cy="40" r="1.5"/>
      
      {/* Center dot */}
      <circle cx="50" cy="50" r="3"/>
    </g>
  </svg>
);

// Lace Wallet Logo - Blue Design (Force Blue Color)
export const LaceLogo = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Blue Lace Logo Background */}
    <rect width="100" height="100" rx="20" fill="#3b82f6"/>

    {/* Lace Symbol - Geometric Pattern */}
    <g fill="white">
      {/* Main geometric shape */}
      <path d="M25 35 L50 20 L75 35 L75 50 L50 65 L25 50 Z" fillOpacity="0.9"/>

      {/* Inner pattern */}
      <path d="M35 40 L50 30 L65 40 L65 50 L50 60 L35 50 Z" fill="#3b82f6"/>

      {/* Center accent */}
      <circle cx="50" cy="45" r="8" fill="white"/>
      <circle cx="50" cy="45" r="4" fill="#3b82f6"/>
    </g>

    {/* Lace text indicator */}
    <text x="50" y="85" textAnchor="middle" fill="white" fontSize="12" fontFamily="Arial, sans-serif" fontWeight="600">LACE</text>
  </svg>
);

// Nami Wallet Logo
export const NamiLogo = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="32" height="32" rx="8" fill="#1E40AF"/>
    <path d="M6 16C6 10.477 10.477 6 16 6C21.523 6 26 10.477 26 16C26 21.523 21.523 26 16 26C10.477 26 6 21.523 6 16Z" fill="white"/>
    <path d="M16 10C18.761 10 21 12.239 21 15C21 17.761 18.761 20 16 20C13.239 20 11 17.761 11 15C11 12.239 13.239 10 16 10Z" fill="#1E40AF"/>
    <circle cx="16" cy="15" r="3" fill="white"/>
  </svg>
);

// Eternl Wallet Logo
export const EternlLogo = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="32" height="32" rx="8" fill="#7C3AED"/>
    <path d="M16 4L28 16L16 28L4 16L16 4Z" fill="white"/>
    <path d="M16 8L24 16L16 24L8 16L16 8Z" fill="#7C3AED"/>
    <path d="M16 12L20 16L16 20L12 16L16 12Z" fill="white"/>
  </svg>
);

// Flint Wallet Logo
export const FlintLogo = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="32" height="32" rx="8" fill="#F59E0B"/>
    <path d="M16 6L22 12H18V20H14V12H10L16 6Z" fill="white"/>
    <path d="M12 22H20V26H12V22Z" fill="white"/>
  </svg>
);

// Yoroi Wallet Logo
export const YoroiLogo = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="32" height="32" rx="8" fill="#10B981"/>
    <path d="M8 8H24V12H20V20H16V16H12V20H8V8Z" fill="white"/>
    <path d="M12 24H20V28H12V24Z" fill="white"/>
  </svg>
);

// GeroWallet Logo
export const GeroLogo = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="32" height="32" rx="8" fill="#DC2626"/>
    <path d="M16 6C21.523 6 26 10.477 26 16C26 21.523 21.523 26 16 26C10.477 26 6 21.523 6 16C6 10.477 10.477 6 16 6Z" fill="white"/>
    <path d="M16 10C18.761 10 21 12.239 21 15C21 17.761 18.761 20 16 20C13.239 20 11 17.761 11 15C11 12.239 13.239 10 16 10Z" fill="#DC2626"/>
    <path d="M13 15H19M16 12V18" stroke="white" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

// Blue Cardano Wallet Icon - Based on the provided design
export const BlueCardanoWalletIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Wallet base - dark blue/black */}
    <rect x="10" y="25" width="80" height="60" rx="8" fill="#1a1a2e"/>
    <rect x="12" y="27" width="76" height="56" rx="6" fill="#16213e"/>

    {/* Wallet front panel */}
    <rect x="15" y="30" width="70" height="50" rx="4" fill="#0f172a"/>

    {/* Blue accent elements */}
    <rect x="75" y="35" width="8" height="15" rx="4" fill="#3b82f6"/>
    <circle cx="79" cy="42.5" r="2" fill="white"/>

    {/* Cardano dots pattern in center */}
    <g fill="white">
      {/* Outer ring of dots */}
      <circle cx="50" cy="35" r="1.5"/>
      <circle cx="58" cy="38" r="1.5"/>
      <circle cx="62" cy="45" r="1.5"/>
      <circle cx="58" cy="52" r="1.5"/>
      <circle cx="50" cy="55" r="1.5"/>
      <circle cx="42" cy="52" r="1.5"/>
      <circle cx="38" cy="45" r="1.5"/>
      <circle cx="42" cy="38" r="1.5"/>

      {/* Inner ring of dots */}
      <circle cx="50" cy="40" r="1"/>
      <circle cx="55" cy="42" r="1"/>
      <circle cx="55" cy="48" r="1"/>
      <circle cx="50" cy="50" r="1"/>
      <circle cx="45" cy="48" r="1"/>
      <circle cx="45" cy="42" r="1"/>

      {/* Center dot */}
      <circle cx="50" cy="45" r="1.5"/>
    </g>

    {/* Blue coins/tokens visible from wallet */}
    <circle cx="25" cy="15" r="8" fill="#3b82f6"/>
    <circle cx="45" cy="12" r="8" fill="#3b82f6"/>
    <circle cx="65" cy="15" r="8" fill="#3b82f6"/>

    {/* Cardano symbols on coins */}
    <g fill="white">
      <circle cx="25" cy="15" r="1"/>
      <circle cx="45" cy="12" r="1"/>
      <circle cx="65" cy="15" r="1"/>
    </g>
  </svg>
);

// Generic Cardano Wallet Icon
export const CardanoWalletIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="5" width="18" height="14" rx="2" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="2"/>
    <path d="M3 10H21" stroke="currentColor" strokeWidth="2"/>
    <circle cx="7" cy="15" r="1" fill="currentColor"/>
  </svg>
);