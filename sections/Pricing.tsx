
import React from 'react';
import { Check, Zap, Rocket, Building2, Server, Globe, Database, Search } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Pricing: React.FC = () => {
  const { t } = useLanguage();
  
  // Need to reconstruct plan objects with translations and dynamic skeletons
  const plans = t.pricing.plans.map((plan, i) => ({
    ...plan,
    price: i === 0 ? "$199" : i === 1 ? "$399" : "Custom",
    oldPrice: i === 0 ? "$399" : i === 1 ? "$699" : null,
    highlight: i === 1
  }));

  const getSkeleton = (idx: number) => {
    if (idx === 0) return (
        <div className="liquid-glass p-4 rounded-xl mt-6 opacity-40 group-hover:opacity-60 transition-opacity duration-500">
            <div className="h-3 w-1/2 bg-white/10 rounded mb-4" />
            <div className="space-y-2">
            <div className="h-1 w-full bg-white/5 rounded overflow-hidden">
                <div className="h-full w-1/3 bg-white/10 animate-[shimmer_2s_infinite]"></div>
            </div>
            <div className="h-1 w-full bg-white/5 rounded" />
            <div className="h-1 w-2/3 bg-white/5 rounded" />
            </div>
            <div className="mt-4 flex justify-between">
            <div className="w-8 h-8 rounded-full bg-turquoise/20 animate-pulse" />
            <div className="w-20 h-8 border border-white/10 rounded" />
            </div>
        </div>
    );
    if (idx === 1) return (
        <div className="app-window mt-6 border-neon-lime/20 shadow-[0_0_30px_rgba(192,255,0,0.05)]">
            <div className="scan-line"></div>
            <div className="p-4 space-y-3">
            <div className="flex justify-between items-center">
                <div className="h-2 w-16 bg-neon-lime/20 rounded animate-pulse" />
                <div className="h-2 w-8 bg-white/10 rounded" />
            </div>
            <div className="grid grid-cols-3 gap-2">
                <div className="h-8 bg-white/5 rounded border border-white/5 overflow-hidden">
                    <div className="h-full w-full bg-white/5 animate-[shimmer_1.5s_infinite]"></div>
                </div>
                <div className="h-8 bg-white/5 rounded border border-white/5" />
                <div className="h-8 bg-white/5 rounded border border-white/5" />
            </div>
            <div className="h-12 bg-white/[0.02] border border-white/5 rounded mt-2 flex items-center justify-center">
                <div className="w-full h-px bg-white/5 mx-4 relative overflow-hidden">
                    <div className="absolute inset-0 bg-neon-lime/50 w-1/2 animate-[shimmer_2s_infinite]"></div>
                </div>
            </div>
            </div>
        </div>
    );
    return (
        <div className="p-4 rounded-xl mt-6 border border-white/5 bg-opal-black relative overflow-hidden">
            <div className="grid grid-cols-4 gap-2 mb-4">
                {[...Array(8)].map((_, i) => (
                    <div key={i} className="h-6 bg-white/[0.03] rounded border border-white/[0.05]"></div>
                ))}
            </div>
            <div className="flex justify-between items-center border-t border-white/5 pt-4">
                <div className="flex gap-2">
                    <div className="w-2 h-2 rounded-full bg-slate-700 animate-pulse"></div>
                    <div className="w-2 h-2 rounded-full bg-slate-700 animate-pulse" style={{ animationDelay: '0.2s'}}></div>
                    <div className="w-2 h-2 rounded-full bg-slate-700 animate-pulse" style={{ animationDelay: '0.4s'}}></div>
                </div>
                <Building2 size={16} className="text-slate-700" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-opal-black via-transparent to-transparent"></div>
        </div>
    );
  };

  const getIcon = (idx: number) => {
      const icons = [Server, Search, Globe, Database];
      return icons[idx];
  };

  return (
    <section id="niveles" className="space-y-16">
      <div className="text-center space-y-4">
        <div className="micro-copy text-[10px] text-slate-500 font-semibold">{t.pricing.label}</div>
        <h2 className="text-4xl md:text-5xl font-semibold text-white">{t.pricing.title}</h2>
        <p className="text-slate-400 font-medium">{t.pricing.subtitle}</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {plans.map((plan, i) => (
          <div key={i} className={`group relative flex flex-col rounded-[2.5rem] p-12 transition-all duration-500 ${plan.highlight ? 'bg-gradient-to-b from-turquoise/10 to-opal-black border border-turquoise/30 scale-105 z-10 hover:shadow-[0_0_50px_rgba(0,217,255,0.05)]' : 'bg-opal-darker border border-white/5 opacity-90 hover:opacity-100 hover:border-white/10'}`}>
            {'badge' in plan && (
              <div className="absolute top-6 right-6 px-3 py-1 bg-white/5 rounded-full text-[8px] micro-copy font-bold text-slate-500 border border-white/5">{plan.badge}</div>
            )}
            
            <div className="space-y-2 mb-8">
               <div className="flex items-center gap-2">
                 {plan.highlight && <Zap size={14} className="text-neon-lime animate-pulse" />}
                 <h3 className="text-2xl font-semibold text-white font-jakarta group-hover:text-turquoise transition-colors">{plan.name}</h3>
               </div>
               <p className="text-[10px] micro-copy text-slate-500 font-bold uppercase tracking-wider">{plan.subtitle}</p>
            </div>

            <div className="mb-8">
               <div className="flex items-baseline gap-2">
                 <span className="text-4xl font-semibold text-white font-jakarta">{plan.price}</span>
                 {plan.oldPrice && (
                    <span className="text-sm text-slate-600 line-through font-mono">{plan.oldPrice}</span>
                 )}
                 <span className="text-[10px] micro-copy text-slate-500 ml-1">{plan.period}</span>
               </div>
            </div>

            <ul className="space-y-4 mb-10 flex-grow">
               {plan.features.map((feature, idx) => (
                 <li key={idx} className="flex items-start gap-3 text-xs text-slate-400 font-medium leading-relaxed group-hover:text-slate-300 transition-colors">
                   <Check size={14} className={plan.highlight ? 'text-neon-lime' : 'text-turquoise'} />
                   {feature}
                 </li>
               ))}
            </ul>

            {getSkeleton(i)}

            <button className={`w-full py-4 rounded-xl micro-copy font-semibold text-[10px] mt-8 transition-all duration-300 ${plan.highlight ? 'bg-white text-black hover:bg-neon-lime hover:shadow-[0_0_20px_rgba(192,255,0,0.4)]' : 'bg-white/5 text-white border border-white/10 hover:bg-white/10'}`}>
               {plan.cta}
            </button>
          </div>
        ))}
      </div>

      {/* Add-ons & Development Section */}
      <div className="max-w-4xl mx-auto space-y-8">
          <div className="flex items-center gap-4">
              <div className="h-px flex-1 bg-white/5"></div>
              <span className="text-[10px] micro-copy text-slate-600 font-bold">{t.pricing.addons.label}</span>
              <div className="h-px flex-1 bg-white/5"></div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {t.pricing.addons.items.map((addon, i) => {
                  const Icon = getIcon(i);
                  return (
                    <div key={i} className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 hover:bg-white/[0.04] transition-all group cursor-pointer">
                        <div className="mb-3 w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-slate-500 group-hover:text-neon-lime transition-colors">
                            <Icon size={16} />
                        </div>
                        <div className="space-y-1">
                            <h4 className="text-xs font-semibold text-white font-jakarta">{addon.title}</h4>
                            <div className="flex items-center gap-2">
                                <span className="text-[10px] font-mono text-turquoise">{addon.price}</span>
                                {addon.real && <span className="text-[9px] text-slate-600 line-through">{addon.real}</span>}
                            </div>
                        </div>
                    </div>
                  );
              })}
          </div>

          <div className="p-6 rounded-2xl bg-neon-lime/5 border border-neon-lime/10 flex items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                  <div className="p-2 rounded-full bg-neon-lime/10 text-neon-lime">
                      <Rocket size={18} />
                  </div>
                  <div className="text-left">
                      <p className="text-xs font-bold text-white micro-copy mb-1">{t.pricing.offer.title}</p>
                      <p className="text-xs text-slate-400">{t.pricing.offer.desc}</p>
                  </div>
              </div>
              <button className="px-4 py-2 bg-neon-lime/10 text-neon-lime text-[10px] font-bold rounded-lg border border-neon-lime/20 hover:bg-neon-lime/20 transition-all">
                  {t.pricing.offer.cta}
              </button>
          </div>
      </div>
    </section>
  );
};

export default Pricing;
