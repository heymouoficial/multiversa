
import React from 'react';
import { ArrowRight, Terminal, Search, Fingerprint, Database, Zap, Star } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="min-h-[85vh] flex flex-col items-center justify-center text-center space-y-12 py-16 relative">
      <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-neon-lime/20 bg-neon-lime/5 backdrop-blur-xl micro-copy text-[10px] font-semibold text-neon-lime shadow-[0_0_20px_rgba(192,255,0,0.1)] hover:bg-neon-lime/10 transition-colors cursor-default">
        <Star size={10} className="fill-neon-lime animate-pulse" />
        <span className="tracking-widest">{t.hero.badge}</span>
      </div>

      <div className="space-y-6 max-w-5xl">
        <h1 className="text-5xl md:text-[72px] font-semibold tracking-tighter leading-[1] text-white font-jakarta">
          {t.hero.title} <br />
          <span className="text-gradient">{t.hero.titleGradient}</span>
        </h1>
        <p className="text-base md:text-xl text-slate-500 font-medium max-w-2xl mx-auto leading-relaxed font-inter">
          {t.hero.subtitle}
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-5 pt-4">
        <button className="px-10 py-5 bg-neon-lime text-black rounded-2xl micro-copy font-semibold text-[11px] hover:shadow-[0_0_50px_rgba(192,255,0,0.3)] hover:-translate-y-1 transition-all duration-300">
          {t.hero.ctaPrimary}
        </button>
        <a 
          href="#calculatu"
          className="px-10 py-5 bg-white/5 border border-white/10 text-white rounded-2xl micro-copy font-semibold text-[11px] hover:bg-white/10 transition-all flex items-center gap-2 group"
        >
          {t.hero.ctaSecondary}
          <ArrowRight size={16} className="text-turquoise group-hover:translate-x-1 transition-transform" />
        </a>
      </div>

      {/* Dissected Visuals: Software Anatomy with Animations */}
      <div className="relative w-full max-w-5xl mt-24 flex justify-center items-center pointer-events-none opacity-60">
        
        {/* Nux Left - Floating */}
        <div className="absolute left-0 w-64 app-window -rotate-6 transform -translate-y-16 scale-90 border-white/5 animate-float-delayed">
           <div className="scan-line" style={{ animationDuration: '5s' }}></div>
           <div className="window-header">
              <div className="window-dot bg-turquoise/40 animate-pulse"></div>
              <div className="text-[7px] micro-copy text-slate-700">Nux Engine / Lead Qualification</div>
           </div>
           <div className="p-6 space-y-4">
              <div className="flex gap-3">
                 <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent to-white/10 animate-shimmer"></div>
                 </div>
                 <div className="flex-1 space-y-2">
                    <div className="h-1.5 w-3/4 bg-white/10 rounded" />
                    <div className="h-1 w-1/2 bg-white/5 rounded" />
                 </div>
              </div>
              <div className="h-px w-full bg-white/5" />
              <div className="h-10 w-full border border-turquoise/20 rounded-lg bg-turquoise/[0.03] flex items-center px-3 relative overflow-hidden">
                <div className="h-1 w-1/2 bg-turquoise/20 rounded relative z-10" />
                <div className="absolute inset-0 bg-turquoise/5 translate-x-[-100%] animate-[shimmer_2s_infinite]"></div>
              </div>
           </div>
        </div>
        
        {/* Center Core - Static but scanning */}
        <div className="w-96 app-window z-10 border-white/10 scale-110 shadow-[0_40px_80px_rgba(0,0,0,0.9)] animate-float">
           <div className="scan-line"></div>
           <div className="window-header">
              <Terminal size={12} className="text-neon-lime mr-2 animate-pulse" />
              <div className="text-[8px] micro-copy text-slate-600">Multiversa Core OS / Master Control</div>
           </div>
           <div className="p-10 space-y-8">
              <div className="grid grid-cols-2 gap-6">
                 <div className="p-4 rounded-xl border border-white/5 bg-white/[0.01]">
                    <Database size={14} className="text-slate-800 mb-3" />
                    <div className="h-1.5 w-16 bg-white/10 rounded" />
                 </div>
                 <div className="p-4 rounded-xl border border-white/5 bg-white/[0.01]">
                    <Search size={14} className="text-slate-800 mb-3" />
                    <div className="h-1.5 w-16 bg-white/10 rounded" />
                 </div>
              </div>
              <div className="space-y-4">
                 <div className="h-1.5 w-full bg-white/5 rounded overflow-hidden">
                    <div className="h-full bg-white/20 w-1/3 animate-[shimmer_3s_infinite]"></div>
                 </div>
                 <div className="h-1.5 w-full bg-white/5 rounded" />
                 <div className="h-1.5 w-3/4 bg-white/5 rounded" />
              </div>
           </div>
        </div>

        {/* Lumina Right - Floating */}
        <div className="absolute right-0 w-64 app-window rotate-6 transform translate-y-16 scale-95 border-white/5 animate-float-delayed" style={{ animationDelay: '1.5s' }}>
           <div className="window-header">
              <Fingerprint size={12} className="text-slate-800 mr-2"/>
              <div className="text-[7px] micro-copy text-slate-700">Lumina Core / Pattern Detection</div>
           </div>
           <div className="p-6 space-y-6">
              <div className="flex items-center gap-3">
                 <div className="w-5 h-5 rounded-full bg-neon-lime/10 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-neon-lime animate-pulse" />
                 </div>
                 <div className="h-1.5 w-24 bg-white/10 rounded" />
              </div>
              <div className="h-20 border border-white/10 rounded-xl bg-white/[0.01] flex items-center justify-center p-4">
                 <div className="flex items-end gap-1.5 h-full">
                    {[0.4, 0.8, 0.5, 0.9, 0.6, 0.4].map((h, i) => (
                       <div key={i} className="w-1.5 bg-neon-lime/10 rounded-full transition-all duration-1000 ease-in-out" style={{ height: `${h * 100}%`, animation: `pulse-slow ${Math.random() * 2 + 2}s infinite` }} />
                    ))}
                 </div>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
