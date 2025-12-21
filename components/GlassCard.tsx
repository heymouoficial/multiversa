
import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  glow?: 'turquoise' | 'lime' | 'purple' | 'none';
}

const GlassCard: React.FC<GlassCardProps> = ({ children, className = "", glow = 'none' }) => {
  const glowClasses = {
    turquoise: 'hover:shadow-[0_0_30px_rgba(0,217,255,0.15)] hover:border-turquoise/30',
    lime: 'hover:shadow-[0_0_30px_rgba(192,255,0,0.15)] hover:border-neon-lime/30',
    purple: 'hover:shadow-[0_0_30px_rgba(139,92,246,0.15)] hover:border-deep-purple/30',
    none: ''
  };

  return (
    <div className={`glass-morphism rounded-[24px] p-8 transition-all duration-500 overflow-hidden relative group ${glowClasses[glow]} ${className}`}>
      {/* Decorative inner light effect */}
      <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-white/5 blur-[80px] pointer-events-none group-hover:bg-white/10 transition-colors" />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default GlassCard;
