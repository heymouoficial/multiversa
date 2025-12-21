
import React from 'react';
import { ArrowRight, Terminal, Search, Fingerprint, Database, Zap, Star, Activity, ShieldCheck, Cpu } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="min-h-[85vh] flex flex-col items-center justify-center text-center space-y-12 py-16 relative">
      <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-neon-lime/20 bg-neon-lime/5 backdrop-blur-xl micro-copy text-[10px] font-semibold text-neon-lime shadow-[0_0_20px_rgba(192,255,0,0.1)] hover:bg-neon-lime/10 transition-colors cursor-default">
        <Star size={10} className="fill-neon-lime animate-pulse" />
        <span className="tracking-widest">{t.hero.badge}</span>
      </div>

      <div className="space-y-6 max-w-5xl z-20 relative">
        <h1 className="text-5xl md:text-[72px] font-semibold tracking-tighter leading-[1] text-white font-jakarta">
          {t.hero.title} <br />
          <span className="text-gradient drop-shadow-[0_0_35px_rgba(192,255,0,0.15)]">{t.hero.titleGradient}</span>
        </h1>
        <p className="text-base md:text-xl text-slate-400 font-medium max-w-2xl mx-auto leading-relaxed font-inter">
          {t.hero.subtitle}
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-5 pt-4 z-20 relative">
        <button className="px-10 py-5 bg-neon-lime text-black rounded-2xl micro-copy font-semibold text-[11px] hover:shadow-[0_0_50px_rgba(192,255,0,0.3)] hover:-translate-y-1 transition-all duration-300">
          {t.hero.ctaPrimary}
        </button>
        <a 
          href="#calculatu"
          className="px-10 py-5 bg-white/5 border border-white/10 text-white rounded-2xl micro-copy font-semibold text-[11px] hover:bg-white/10 transition-all flex items-center gap-2 group backdrop-blur-md"
        >
          {t.hero.ctaSecondary}
          <ArrowRight size={16} className="text-turquoise group-hover:translate-x-1 transition-transform" />
        </a>
      </div>

      {/* Dissected Visuals: Software Anatomy with Animations */}
      {/* Removed global opacity-60, now using pointer-events-none to sit behind interaction layer if needed, but visually popping */}
      <div className="relative w-full max-w-6xl mt-24 flex justify-center items-center pointer-events-none perspective-1000">
        
        {/* NUX LEFT - Lead Qualification (Turquoise Theme) */}
        <div className="absolute left-4 lg:left-0 w-72 app-window -rotate-6 transform -translate-y-12 scale-90 border-turquoise/20 bg-opal-black/90 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,217,255,0.1)] animate-float-delayed z-10">
           <div className="scan-line bg-gradient-to-r from-transparent via-turquoise to-transparent opacity-70" style={{ animationDuration: '4s' }}></div>
           <div className="window-header bg-turquoise/[0.03] border-b border-turquoise/10 justify-between">
              <div className="flex items-center gap-2">
                <div className="window-dot bg-turquoise shadow-[0_0_8px_#00d9ff]"></div>
                <div className="text-[9px] micro-copy text-turquoise font-bold tracking-wider">NUX.AI</div>
              </div>
              <div className="text-[8px] micro-copy text-slate-500">LEAD_FILTER_ACTIVE</div>
           </div>
           <div className="p-6 space-y-5">
              <div className="flex gap-4">
                 <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-turquoise/20 to-turquoise/5 border border-turquoise/20 flex items-center justify-center relative overflow-hidden">
                    <ShieldCheck size={20} className="text-turquoise relative z-10" />
                    <div className="absolute inset-0 bg-turquoise/20 animate-pulse"></div>
                 </div>
                 <div className="flex-1 space-y-2 py-1">
                    <div className="h-2 w-full bg-white/10 rounded overflow-hidden">
                        <div className="h-full bg-turquoise w-3/4 shadow-[0_0_10px_#00d9ff]"></div>
                    </div>
                    <div className="h-1.5 w-1/2 bg-white/5 rounded" />
                 </div>
              </div>
              
              <div className="space-y-2">
                 <div className="flex justify-between text-[8px] micro-copy text-slate-400">
                    <span>PROCESSING</span>
                    <span className="text-turquoise">84%</span>
                 </div>
                 <div className="h-10 w-full border border-turquoise/20 rounded-lg bg-[#080808] flex items-center px-1 relative overflow-hidden">
                    <div className="h-1.5 w-[84%] bg-turquoise rounded-full relative z-10 shadow-[0_0_15px_#00d9ff]" />
                    <div className="absolute inset-0 bg-turquoise/5 translate-x-[-100%] animate-[shimmer_2s_infinite]"></div>
                 </div>
              </div>
           </div>
        </div>
        
        {/* CORE CENTER - Master Control (Neutral/White Theme) */}
        <div className="w-[28rem] md:w-[32rem] app-window z-30 border-white/15 bg-[#050505] shadow-[0_50px_120px_rgba(0,0,0,1),0_0_40px_rgba(255,255,255,0.05)] scale-100 md:scale-110 animate-float">
           <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-50"></div>
           <div className="window-header bg-white/[0.02] border-b border-white/5 p-3">
              <div className="flex items-center gap-3">
                  <Terminal size={14} className="text-white" />
                  <div className="text-[9px] micro-copy text-slate-400">MULTIVERSA_CORE_OS <span className="text-slate-600">///</span> MASTER</div>
              </div>
              <div className="flex gap-1.5 ml-auto">
                  <div className="w-2 h-2 rounded-full bg-white/20"></div>
                  <div className="w-2 h-2 rounded-full bg-white/20"></div>
              </div>
           </div>
           
           <div className="p-8 md:p-10 space-y-8 relative">
              <div className="absolute top-0 right-0 p-8 opacity-20">
                  <Cpu size={120} strokeWidth={0.5} className="text-white" />
              </div>

              <div className="grid grid-cols-2 gap-4 relative z-10">
                 <div className="p-5 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm hover:bg-white/[0.05] transition-colors group">
                    <Database size={18} className="text-white mb-4 group-hover:scale-110 transition-transform" />
                    <div className="h-1.5 w-12 bg-white/20 rounded mb-2" />
                    <div className="h-1 w-8 bg-white/10 rounded" />
                 </div>
                 <div className="p-5 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm hover:bg-white/[0.05] transition-colors group">
                    <Search size={18} className="text-white mb-4 group-hover:scale-110 transition-transform" />
                    <div className="h-1.5 w-12 bg-white/20 rounded mb-2" />
                    <div className="h-1 w-8 bg-white/10 rounded" />
                 </div>
              </div>
              
              <div className="space-y-3 relative z-10">
                 <div className="flex justify-between items-end">
                     <div className="h-2 w-24 bg-white/10 rounded"></div>
                     <div className="h-px w-full mx-4 bg-white/10"></div>
                     <div className="text-[9px] font-mono text-neon-lime">ONLINE</div>
                 </div>
                 <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden border border-white/5">
                    <div className="h-full bg-white/40 w-1/2 animate-[shimmer_3s_infinite]"></div>
                 </div>
              </div>
           </div>
        </div>

        {/* LUMINA RIGHT - Pattern Detection (Neon Lime Theme) */}
        <div className="absolute right-4 lg:right-0 w-72 app-window rotate-6 transform translate-y-12 scale-90 border-neon-lime/20 bg-opal-black/90 backdrop-blur-xl shadow-[0_20px_60px_rgba(192,255,0,0.1)] animate-float-delayed z-10" style={{ animationDelay: '1.5s' }}>
           <div className="scan-line bg-gradient-to-r from-transparent via-neon-lime to-transparent opacity-70" style={{ animationDuration: '3s' }}></div>
           <div className="window-header bg-neon-lime/[0.03] border-b border-neon-lime/10 justify-between">
              <div className="flex items-center gap-2">
                 <Fingerprint size={12} className="text-neon-lime"/>
                 <div className="text-[9px] micro-copy text-neon-lime font-bold tracking-wider">LUMINA_CORE</div>
              </div>
              <div className="w-1.5 h-1.5 rounded-full bg-neon-lime animate-pulse"></div>
           </div>
           
           <div className="p-6 space-y-6">
              <div className="flex items-center gap-4">
                 <div className="w-8 h-8 rounded-full bg-neon-lime/10 border border-neon-lime/20 flex items-center justify-center">
                    <Activity size={14} className="text-neon-lime" />
                 </div>
                 <div className="space-y-1.5 flex-1">
                    <div className="h-1.5 w-full bg-white/10 rounded overflow-hidden">
                        <div className="h-full bg-neon-lime/60 w-2/3"></div>
                    </div>
                    <div className="h-1 w-1/3 bg-white/5 rounded" />
                 </div>
              </div>
              
              <div className="h-24 border border-neon-lime/10 rounded-xl bg-[#080808] flex items-center justify-center p-5 relative overflow-hidden group">
                 {/* Grid Background */}
                 <div className="absolute inset-0 bg-[linear-gradient(rgba(192,255,0,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(192,255,0,0.05)_1px,transparent_1px)] bg-[size:10px_10px]"></div>
                 
                 <div className="flex items-end gap-1.5 h-full w-full justify-between relative z-10">
                    {[0.3, 0.6, 0.4, 0.8, 0.5, 0.9, 0.7, 0.4].map((h, i) => (
                       <div 
                         key={i} 
                         className="flex-1 bg-gradient-to-t from-neon-lime/10 to-neon-lime rounded-t-sm transition-all duration-700 ease-in-out shadow-[0_0_10px_rgba(192,255,0,0.2)]" 
                         style={{ 
                           height: `${h * 100}%`, 
                           opacity: 0.8,
                           animation: `pulse-slow ${Math.random() * 2 + 1.5}s infinite alternate` 
                         }} 
                       />
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
