import React from 'react';

interface EEEEECoinIconProps {
  size?: number;
  variant?: 'genesis' | 'warrior' | 'builder' | 'default';
  className?: string;
}

export default function EEEEECoinIcon({ 
  size = 64, 
  variant = 'default', 
  className = '' 
}: EEEEECoinIconProps) {
  const getVariantColors = () => {
    switch (variant) {
      case 'genesis':
        return {
          primary: '#8B5CF6', // Purple
          secondary: '#FFD700', // Gold
          accent: '#FFFFFF',
          letter: 'G'
        };
      case 'warrior':
        return {
          primary: '#DC2626', // Red
          secondary: '#FFD700', // Gold
          accent: '#FFFFFF',
          letter: 'W'
        };
      case 'builder':
        return {
          primary: '#2563EB', // Blue
          secondary: '#FFD700', // Gold
          accent: '#FFFFFF',
          letter: 'B'
        };
      default:
        return {
          primary: '#8B5CF6', // Purple
          secondary: '#FFD700', // Gold
          accent: '#FFFFFF',
          letter: 'E'
        };
    }
  };

  const colors = getVariantColors();

  return (
    <div className={`relative ${className}`} style={{ width: size, height: size }}>
      <svg 
        width={size} 
        height={size} 
        viewBox="0 0 100 100" 
        fill="none"
        className="drop-shadow-2xl"
      >
        {/* Outer glow effect */}
        <defs>
          <filter id={`glow-${variant}`} x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feOffset dx="0" dy="0" result="offsetBlur"/>
            <feMerge>
              <feMergeNode in="offsetBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
          <filter id={`shadow-${variant}`} x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="2" stdDeviation="1" floodColor={colors.primary} floodOpacity="0.3"/>
          </filter>
          <linearGradient id={`coinGradient-${variant}`} x1="20%" y1="20%" x2="80%" y2="80%">
            <stop offset="0%" stopColor={colors.secondary} stopOpacity="1" />
            <stop offset="30%" stopColor="#FFF8DC" stopOpacity="0.9" />
            <stop offset="70%" stopColor={colors.secondary} stopOpacity="0.9" />
            <stop offset="100%" stopColor="#B8860B" stopOpacity="0.8" />
          </linearGradient>
          <linearGradient id={`innerGradient-${variant}`} x1="30%" y1="30%" x2="70%" y2="70%">
            <stop offset="0%" stopColor={colors.primary} stopOpacity="1" />
            <stop offset="40%" stopColor="#6366F1" stopOpacity="0.95" />
            <stop offset="100%" stopColor={colors.primary} stopOpacity="0.85" />
          </linearGradient>
          <radialGradient id={`centerGlow-${variant}`} cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.3)" stopOpacity="1" />
            <stop offset="70%" stopColor="rgba(255,255,255,0.1)" stopOpacity="1" />
            <stop offset="100%" stopColor="rgba(255,255,255,0)" stopOpacity="0" />
          </radialGradient>
        </defs>
        
        {/* Outer ring with premium gold gradient */}
        <circle
          cx="50"
          cy="50"
          r="46"
          fill={`url(#coinGradient-${variant})`}
          stroke={colors.primary}
          strokeWidth="1.5"
          filter={`url(#glow-${variant}) url(#shadow-${variant})`}
        />

        {/* Inner circle with brand color */}
        <circle
          cx="50"
          cy="50"
          r="38"
          fill={`url(#innerGradient-${variant})`}
          stroke={colors.secondary}
          strokeWidth="1"
        />

        {/* Inner border ring for depth */}
        <circle
          cx="50"
          cy="50"
          r="36"
          fill="none"
          stroke="rgba(255,255,255,0.2)"
          strokeWidth="0.5"
        />

        {/* EEEEE text - well proportioned */}
        <text
          x="50"
          y="40"
          textAnchor="middle"
          fill={colors.secondary}
          fontSize="11"
          fontWeight="bold"
          fontFamily="Arial, sans-serif"
          letterSpacing="0.8"
        >
          EEEEE
        </text>

        {/* Subtitle - positioned with proper spacing */}
        <text
          x="50"
          y="52"
          textAnchor="middle"
          fill={colors.accent}
          fontSize="7"
          fontWeight="600"
          fontFamily="Arial, sans-serif"
          letterSpacing="0.5"
        >
          {variant === 'genesis' ? 'GENESIS' :
           variant === 'warrior' ? 'WARRIOR' :
           variant === 'builder' ? 'BUILDER' : 'COIN'}
        </text>

        {/* Bottom accent circle - proportionally sized */}
        <circle
          cx="50"
          cy="67"
          r="9"
          fill={colors.secondary}
          stroke={colors.primary}
          strokeWidth="1"
        />

        {/* Letter in accent circle */}
        <text
          x="50"
          y="72"
          textAnchor="middle"
          fill={colors.primary}
          fontSize="9"
          fontWeight="bold"
          fontFamily="Arial, sans-serif"
        >
          {colors.letter}
        </text>

        {/* Shine effect - repositioned for better balance */}
        <ellipse
          cx="40"
          cy="35"
          rx="7"
          ry="12"
          fill="rgba(255,255,255,0.3)"
          transform="rotate(-20 40 35)"
        />

        {/* Secondary smaller shine */}
        <ellipse
          cx="60"
          cy="45"
          rx="3"
          ry="6"
          fill="rgba(255,255,255,0.15)"
          transform="rotate(15 60 45)"
        />

        {/* Center glow overlay */}
        <circle
          cx="50"
          cy="50"
          r="35"
          fill={`url(#centerGlow-${variant})`}
        />

        {/* Additional subtle highlight ring */}
        <circle
          cx="50"
          cy="50"
          r="35"
          fill="none"
          stroke="rgba(255,255,255,0.15)"
          strokeWidth="0.3"
        />
      </svg>
    </div>
  );
}

// Export individual variants for convenience
export const EEEEEGenesisIcon = (props: Omit<EEEEECoinIconProps, 'variant'>) => 
  <EEEEECoinIcon {...props} variant="genesis" />;

export const EEEEEWarriorIcon = (props: Omit<EEEEECoinIconProps, 'variant'>) => 
  <EEEEECoinIcon {...props} variant="warrior" />;

export const EEEEEBuilderIcon = (props: Omit<EEEEECoinIconProps, 'variant'>) => 
  <EEEEECoinIcon {...props} variant="builder" />;
