
import React from 'react';
import { ArrowUpRight, Calculator, Mic, RefreshCw, Check, Cpu } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const CalculaTu: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="calculatu" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative rounded-[4rem] overflow-hidden bg-[#000000] border border-white/5 p-8 md:p-16 lg:p-24 group shadow-[0_0_120px_rgba(0,0,0,1)]">
          {/* Subtle dynamic glow */}
          <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-turquoise/5 via-transparent to-neon-lime/5 opacity-30 pointer-events-none" />
          
          <div className="relative z-10 grid lg:grid-cols-12 gap-16 items-center">
            {/* Left Narrative */}
            <div className="lg:col-span-7 space-y-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-neon-lime/20 bg-neon-lime/5 text-neon-lime text-[11px] micro-copy font-bold shadow-[0_0_20px_rgba(192,255,0,0.1)]">
                <Cpu size={12} className="animate-pulse" />
                {t.calculatu.badge}
              </div>
              
              <div className="space-y-8">
                <h2 className="text-5xl md:text-[80px] font-semibold text-white leading-[0.95] tracking-tight font-jakarta">
                  {t.calculatu.title} <br />
                  <span className="text-gradient">{t.calculatu.titleGradient}</span>
                </h2>
                <p className="text-xl text-slate-400 font-medium max-w-lg leading-relaxed font-inter">
                  {t.calculatu.desc}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 pt-6">
                <a 
                  href="https://calcula-tu-vercel.app" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-12 py-6 bg-neon-lime text-black rounded-[2rem] font-bold text-xs micro-copy flex items-center justify-center gap-3 hover:shadow-[0_0_60px_rgba(192,255,0,0.5)] hover:-translate-y-1 transition-all duration-300"
                >
                  {t.calculatu.ctaPrimary}
                  <ArrowUpRight size={18} />
                </a>
                <button className="px-12 py-6 bg-white/[0.03] border border-white/10 text-white rounded-[2rem] font-bold text-xs micro-copy flex items-center justify-center gap-3 hover:bg-white/10 transition-all group/btn">
                  {t.calculatu.ctaSecondary}
                  <Mic size={18} className="text-turquoise group-hover/btn:scale-110 transition-transform" />
                </button>
              </div>
            </div>

            {/* Right Interactive Card (The App) */}
            <div className="lg:col-span-5 relative">
              <div className="app-window !bg-[#050505] border-white/10 shadow-[0_60px_150px_rgba(0,0,0,1)] scale-105 transform hover:scale-110 transition-transform duration-700">
                <div className="scan-line"></div>
                {/* Custom App Header */}
                <div className="window-header justify-between p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-neon-lime/10 flex items-center justify-center text-neon-lime border border-neon-lime/20">
                      <Calculator size={24} />
                    </div>
                    <div>
                      <div className="text-[13px] font-bold text-white tracking-wide">{t.calculatu.appHeader}</div>
                      <div className="text-[9px] micro-copy text-slate-500 font-bold">{t.calculatu.appSub}</div>
                    </div>
                  </div>
                  <div className="px-4 py-2 rounded-2xl bg-white/[0.02] border border-white/5 flex items-center gap-4 group/tasa cursor-pointer hover:bg-white/5 transition-colors">
                    <div className="text-right">
                      <div className="text-[8px] micro-copy text-slate-600 font-bold tracking-tighter">LIVE DATA</div>
                      <div className="text-[12px] font-bold text-neon-lime animate-pulse">$ 276.58</div>
                    </div>
                    <RefreshCw size={12} className="text-slate-600 group-hover/tasa:rotate-180 transition-transform duration-700" />
                  </div>
                </div>

                <div className="p-8 space-y-10">
                  {/* Mode Selector */}
                  <div className="flex gap-2 p-1.5 bg-white/[0.02] rounded-2xl border border-white/5">
                    <button className="flex-1 py-3 rounded-xl bg-neon-lime text-black text-[11px] micro-copy font-bold flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(192,255,0,0.2)]">
                      {t.calculatu.inputManual}
                    </button>
                    <button className="flex-1 py-3 rounded-xl text-slate-600 text-[11px] micro-copy font-bold flex items-center justify-center gap-2 hover:text-turquoise transition-colors">
                      <Mic size={14} />
                      {t.calculatu.inputVoice}
                    </button>
                  </div>

                  {/* Item List */}
                  <div className="space-y-6">
                    {t.calculatu.list.map((item, i) => (
                      <div key={i} className="flex justify-between items-center group/item cursor-pointer border-b border-white/[0.02] pb-2 hover:border-white/10 transition-colors">
                        <span className="text-sm font-mono text-slate-500 group-hover:text-white transition-colors">{item.name}</span>
                        <span className="text-sm font-bold text-neon-lime tracking-tight">{item.price}</span>
                      </div>
                    ))}
                  </div>

                  {/* Total Display */}
                  <div className="p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 space-y-3 relative overflow-hidden group/total">
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-turquoise/5 to-transparent opacity-30 group-hover/total:opacity-50 transition-opacity" />
                    <div className="flex justify-between items-center text-[11px] micro-copy text-slate-500 font-bold relative z-10">
                      <span>{t.calculatu.totalLabel}</span>
                      <span className="text-slate-400 font-mono tracking-tighter">$9.00</span>
                    </div>
                    <div className="flex items-baseline gap-3 relative z-10">
                      <span className="text-5xl font-bold text-white tracking-tighter">2.489,22</span>
                      <span className="text-sm font-bold text-neon-lime micro-copy">Bs</span>
                    </div>
                  </div>

                  {/* Bottom Button */}
                  <button className="w-full py-5 rounded-2xl bg-white text-black font-bold text-[12px] micro-copy flex items-center justify-center gap-3 hover:bg-neon-lime hover:scale-[1.02] transition-all duration-300">
                    {t.calculatu.executeBtn}
                  </button>
                </div>
              </div>

              {/* Floaties */}
              <div className="absolute -left-12 -bottom-6 w-20 h-20 rounded-3xl bg-[#080808] border border-white/10 shadow-3xl flex items-center justify-center text-turquoise animate-bounce opacity-90 backdrop-blur-3xl" style={{ animationDuration: '6s' }}>
                <Check size={32} strokeWidth={3} />
              </div>
            </div>
          </div>

          {/* Bottom Banner Tagline */}
          <div className="mt-20 pt-10 border-t border-white/5 text-center">
            <h3 className="text-2xl md:text-3xl font-semibold text-white/50 font-jakarta tracking-tight">
              {t.calculatu.banner}
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CalculaTu;
