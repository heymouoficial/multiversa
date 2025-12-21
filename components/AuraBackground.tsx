import React from 'react';
import LightRays from './LightRays';

const AuraBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 bg-opal-black">
      {/* LightRays Effect */}
      <div className="absolute inset-0 z-[1] opacity-60">
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

      {/* Subdued Orbs for high contrast against absolute black */}
      <div className="aura-orb absolute -top-[20%] -left-[10%] w-[1200px] h-[1200px] bg-turquoise/[0.03] blur-[220px]" />

      <div className="aura-orb absolute -bottom-[10%] -right-[5%] w-[1000px] h-[1000px] bg-neon-lime/[0.02] blur-[200px]" style={{ animationDelay: '-8s' }} />

      {/* Dynamic Deep Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-opal-black/20 via-opal-black to-opal-black" />

      {/* Ultra Fine Grain Texture */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </div>
  );
};

export default AuraBackground;