import React from 'react';
import LightRays from './LightRays';

const AuraBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 bg-opal-black">
      {/* LightRays Effect - Más visible en móvil */}
      <div className="absolute inset-0 z-[1] opacity-80 md:opacity-60">
        <LightRays
          raysOrigin="top-center"
          raysColor="#00ffff"
          raysSpeed={1.5}
          lightSpread={0.8}
          rayLength={1.2}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
        />
      </div>

      {/* Orbs más visibles en móvil */}
      <div className="aura-orb absolute -top-[20%] -left-[10%] w-[800px] md:w-[1200px] h-[800px] md:h-[1200px] bg-turquoise/[0.08] md:bg-turquoise/[0.03] blur-[150px] md:blur-[220px]" />

      <div className="aura-orb absolute -bottom-[10%] -right-[5%] w-[600px] md:w-[1000px] h-[600px] md:h-[1000px] bg-neon-lime/[0.06] md:bg-neon-lime/[0.02] blur-[120px] md:blur-[200px]" style={{ animationDelay: '-8s' }} />

      {/* Overlay menos agresivo en móvil */}
      <div className="absolute inset-0 bg-gradient-to-b from-opal-black/10 md:from-opal-black/20 via-opal-black/80 md:via-opal-black to-opal-black" />

      {/* Ultra Fine Grain Texture */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </div>
  );
};

export default AuraBackground;