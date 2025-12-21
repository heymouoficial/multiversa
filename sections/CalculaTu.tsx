
import React from 'react';
import { ArrowRight, Calculator, Mic, RefreshCw, Check, Star, Download } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const CalculaTu: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="calculatu" className="py-24 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Wrapper styling to make it feel like an embedded banner/card */}
        <div className="relative rounded-[3rem] overflow-hidden bg-[#0a0a0a] border border-white/5 shadow-2xl group">
          
          {/* Subtle Branding Glow */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-calculatu-brand/10 blur-[150px] rounded-full pointer-events-none" />
          
          <div className="relative z-10 grid lg:grid-cols-12 gap-12 p-8 md:p-16 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-8">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-calculatu-brand/10 border border-calculatu-brand/20 text-calculatu-brand text-[10px] micro-copy font-bold uppercase tracking-wider">
                <Star size={10} className="fill-calculatu-brand" />
                {t.calculatu.badge}
              </div>
              
              <div className="space-y-4">
                <h2 className="text-5xl md:text-6xl font-semibold text-white leading-[1.1] font-jakarta tracking-tight">
                  {t.calculatu.title} <br />
                  <span className="text-calculatu-brand">{t.calculatu.titleGradient}</span>
                </h2>
                <p className="text-lg text-slate-400 font-medium max-w-md leading-relaxed">
                  {t.calculatu.desc}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <a 
                  href="https://calcula-tu-vercel.app" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-calculatu-brand text-black rounded-xl font-bold text-sm flex items-center justify-center gap-2 hover:bg-calculatu-brand/90 hover:-translate-y-0.5 transition-all shadow-[0_0_30px_rgba(0,220,130,0.3)]"
                >
                  <Download size={18} />
                  {t.calculatu.ctaPrimary}
                </a>
                <button className="px-8 py-4 bg-white/5 border border-white/10 text-white rounded-xl font-bold text-sm flex items-center justify-center gap-2 hover:bg-white/10 transition-all group/btn">
                  {t.calculatu.ctaSecondary}
                  <ArrowRight size={18} className="text-calculatu-brand group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Right Interactive Mockup (The App) */}
            <div className="lg:col-span-6 relative flex justify-center lg:justify-end">
               {/* Card Container for the App */}
               <div className="relative w-full max-w-sm rounded-[2rem] bg-[#111] border border-white/10 shadow-2xl overflow-hidden p-6 space-y-6">
                  
                  {/* Internal Controls */}
                  <div className="flex gap-2">
                    <button className="flex-1 py-2.5 rounded-lg bg-calculatu-brand text-black text-xs font-bold flex items-center justify-center gap-2">
                        <Calculator size={14} />
                        {t.calculatu.inputManual}
                    </button>
                    <button className="flex-1 py-2.5 rounded-lg bg-[#222] text-slate-400 text-xs font-bold flex items-center justify-center gap-2 hover:text-white transition-colors">
                        <Mic size={14} />
                        {t.calculatu.inputVoice}
                    </button>
                  </div>

                  {/* List */}
                  <div className="space-y-4 py-2">
                    {t.calculatu.list.map((item, i) => (
                        <div key={i} className="flex justify-between items-center py-2 border-b border-white/5">
                            <span className="text-sm font-medium text-slate-300">{item.name}</span>
                            <span className="text-sm font-bold text-calculatu-brand">{item.price}</span>
                        </div>
                    ))}
                  </div>

                  {/* Total Card */}
                  <div className="rounded-xl bg-[#1a1a1a] p-5 space-y-1 relative overflow-hidden">
                     <div className="absolute top-0 right-0 p-4 opacity-10">
                        <RefreshCw size={40} className="text-white" />
                     </div>
                     <p className="text-[10px] micro-copy text-slate-500 font-bold uppercase">{t.calculatu.totalLabel}</p>
                     <div className="flex items-baseline gap-2">
                        <span className="text-3xl font-bold text-white tracking-tight">1.880,74</span>
                        <span className="text-sm font-bold text-calculatu-brand">Bs</span>
                     </div>
                     <div className="text-[10px] text-slate-500 font-mono text-right">$6.80</div>
                  </div>

                  {/* Action Button */}
                  <button className="w-full py-4 rounded-xl bg-white text-black font-bold text-xs flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform">
                      {t.calculatu.executeBtn}
                      <ArrowRight size={14} />
                  </button>
               </div>
               
               {/* Decorative floating elements */}
               <div className="hidden md:flex absolute top-1/2 -right-6 -translate-y-1/2 flex-col gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#111] border border-white/10 flex items-center justify-center shadow-lg">
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-[#111] border border-white/10 flex items-center justify-center shadow-lg">
                      <div className="w-1 h-4 bg-white/20 rounded-full"></div>
                  </div>
               </div>

            </div>
          </div>

          {/* Bottom Banner Strip */}
          <div className="w-full py-6 bg-calculatu-brand/5 border-t border-white/5 flex items-center justify-center">
             <h3 className="text-sm md:text-base font-semibold text-slate-400 font-jakarta">
                {t.calculatu.banner}
             </h3>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default CalculaTu;
