
import React from 'react';
import { Check, Zap, Rocket, Building2, Server, Globe, Database, Search, BarChart3, LayoutTemplate, Network } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Pricing: React.FC = () => {
    const { t } = useLanguage();

    const plans = t.pricing.plans.map((plan, i) => ({
        ...plan,
        price: i === 0 ? "$199" : i === 1 ? "$399" : "Custom",
        oldPrice: i === 0 ? "$399" : i === 1 ? "$699" : null,
        highlight: i === 1
    }));

    const getSkeleton = (idx: number) => {
        // PLAN 1: NanoOS (Landing Page Wireframe)
        if (idx === 0) return (
            <div className="mt-8 rounded-xl border border-white/10 bg-[#0a0a0a] overflow-hidden relative group-hover:border-turquoise/30 transition-colors">
                {/* Header Mockup */}
                <div className="h-8 border-b border-white/10 bg-white/5 flex items-center px-3 gap-2">
                    <div className="flex gap-1.5">
                        <div className="w-2 h-2 rounded-full bg-red-500/50"></div>
                        <div className="w-2 h-2 rounded-full bg-yellow-500/50"></div>
                    </div>
                    <div className="h-2 w-20 bg-white/10 rounded-full ml-auto"></div>
                </div>
                {/* Body Wireframe */}
                <div className="p-4 space-y-3">
                    <div className="flex flex-col items-center space-y-2 mb-4">
                        <div className="h-2 w-16 bg-turquoise/40 rounded-full mb-1"></div>
                        <div className="h-3 w-3/4 bg-white/20 rounded"></div>
                        <div className="h-3 w-1/2 bg-white/20 rounded"></div>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                        <div className="h-16 rounded border border-white/10 bg-white/5 flex flex-col justify-end p-2">
                            <div className="h-1.5 w-8 bg-white/20 rounded mb-1"></div>
                            <div className="h-1 w-12 bg-white/10 rounded"></div>
                        </div>
                        <div className="h-16 rounded border border-white/10 bg-white/5 flex flex-col justify-end p-2">
                            <div className="h-1.5 w-8 bg-white/20 rounded mb-1"></div>
                            <div className="h-1 w-12 bg-white/10 rounded"></div>
                        </div>
                    </div>
                    {/* CTA Mockup */}
                    <div className="h-8 w-full bg-turquoise/10 rounded border border-turquoise/20 mt-2 flex items-center justify-center">
                        <div className="h-2 w-24 bg-turquoise/40 rounded"></div>
                    </div>
                </div>
                {/* Icon Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-[2px]">
                    <LayoutTemplate size={32} className="text-turquoise" />
                </div>
            </div>
        );

        // PLAN 2: SmartOS (Dashboard Wireframe)
        if (idx === 1) return (
            <div className="mt-8 rounded-xl border border-neon-lime/20 bg-[#0a0a0a] overflow-hidden relative shadow-[0_0_30px_rgba(192,255,0,0.05)] group-hover:border-neon-lime/40 transition-colors">
                <div className="flex h-48">
                    {/* Sidebar */}
                    <div className="w-12 border-r border-white/10 bg-white/5 flex flex-col items-center py-3 gap-3">
                        <div className="w-6 h-6 rounded bg-neon-lime/20"></div>
                        <div className="w-4 h-4 rounded bg-white/10"></div>
                        <div className="w-4 h-4 rounded bg-white/10"></div>
                        <div className="w-4 h-4 rounded bg-white/10"></div>
                    </div>
                    {/* Main Content */}
                    <div className="flex-1 p-3 space-y-3">
                        <div className="flex justify-between">
                            <div className="h-3 w-24 bg-white/20 rounded"></div>
                            <div className="h-3 w-8 bg-neon-lime/40 rounded"></div>
                        </div>
                        {/* Charts */}
                        <div className="flex items-end gap-1.5 h-20 border-b border-white/10 pb-1">
                            <div className="w-full bg-white/10 h-[40%] rounded-t-sm"></div>
                            <div className="w-full bg-white/10 h-[70%] rounded-t-sm"></div>
                            <div className="w-full bg-neon-lime/60 h-[50%] rounded-t-sm animate-pulse"></div>
                            <div className="w-full bg-white/10 h-[80%] rounded-t-sm"></div>
                            <div className="w-full bg-white/10 h-[60%] rounded-t-sm"></div>
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                            <div className="h-8 bg-white/5 rounded border border-white/10"></div>
                            <div className="h-8 bg-white/5 rounded border border-white/10"></div>
                        </div>
                    </div>
                </div>
                {/* Icon Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-[2px]">
                    <BarChart3 size={32} className="text-neon-lime" />
                </div>
            </div>
        );

        // PLAN 3: Enterprise (Network/Node Wireframe)
        return (
            <div className="mt-8 rounded-xl border border-white/10 bg-[#0a0a0a] overflow-hidden relative group-hover:border-white/30 transition-colors">
                <div className="h-48 p-4 relative">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent"></div>
                    {/* Nodes */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-white/30 bg-white/10 z-10 flex items-center justify-center">
                        <div className="w-4 h-4 bg-white/40 rounded-full animate-pulse"></div>
                    </div>

                    {/* Satellites */}
                    <div className="absolute top-8 left-12 w-6 h-6 rounded-full border border-white/10 bg-white/5"></div>
                    <div className="absolute bottom-10 right-16 w-8 h-8 rounded-full border border-white/10 bg-white/5"></div>
                    <div className="absolute top-12 right-10 w-5 h-5 rounded-full border border-white/10 bg-white/5"></div>

                    {/* Connecting Lines (Simulated with divs) */}
                    <div className="absolute top-[35%] left-[25%] w-[30%] h-px bg-white/10 rotate-12"></div>
                    <div className="absolute top-[45%] right-[25%] w-[30%] h-px bg-white/10 -rotate-12"></div>
                    <div className="absolute bottom-[40%] left-[40%] w-px h-[20%] bg-white/10"></div>

                    <div className="absolute bottom-3 left-3 right-3 h-8 bg-white/5 border border-white/10 rounded flex items-center px-3 font-mono text-[8px] text-slate-500">
                        {'>'} SYSTEM_OPTIMIZED
                    </div>
                </div>
                {/* Icon Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-[2px]">
                    <Network size={32} className="text-white" />
                </div>
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
                    <div key={i} className={`group relative flex flex-col rounded-[2.5rem] p-8 md:p-10 transition-all duration-500 ${plan.highlight ? 'bg-gradient-to-b from-turquoise/5 to-opal-black border border-turquoise/30 shadow-[0_0_40px_rgba(0,0,0,0.5)] z-10 hover:shadow-[0_0_50px_rgba(0,217,255,0.1)]' : 'bg-opal-darker border border-white/5 opacity-90 hover:opacity-100 hover:border-white/10'}`}>
                        {'badge' in plan && (
                            <div className="absolute top-6 right-6 px-3 py-1 bg-white/5 rounded-full text-[8px] micro-copy font-bold text-slate-500 border border-white/5">{plan.badge}</div>
                        )}

                        <div className="space-y-2 mb-6">
                            <div className="flex items-center gap-2">
                                {plan.highlight && <Zap size={14} className="text-neon-lime animate-pulse" />}
                                <h3 className="text-xl font-semibold text-white font-jakarta group-hover:text-turquoise transition-colors">{plan.name}</h3>
                            </div>
                            <p className="text-[10px] micro-copy text-slate-500 font-bold uppercase tracking-wider">{plan.subtitle}</p>
                        </div>

                        <div className="mb-8">
                            <div className="flex items-baseline gap-2">
                                <span className="text-3xl md:text-4xl font-semibold text-white font-jakarta">{plan.price}</span>
                                {plan.oldPrice && (
                                    <span className="text-sm text-slate-600 line-through font-mono">{plan.oldPrice}</span>
                                )}
                                <span className="text-[10px] micro-copy text-slate-500 ml-1">{plan.period}</span>
                            </div>
                        </div>

                        {getSkeleton(i)}

                        <ul className="space-y-4 my-8 flex-grow border-t border-white/5 pt-6">
                            {plan.features.map((feature, idx) => (
                                <li key={idx} className="flex items-start gap-3 text-xs text-slate-400 font-medium leading-relaxed group-hover:text-slate-300 transition-colors">
                                    <Check size={14} className={plan.highlight ? 'text-neon-lime flex-shrink-0' : 'text-turquoise flex-shrink-0'} />
                                    {feature}
                                </li>
                            ))}
                        </ul>

                        <button className={`w-full py-4 rounded-xl micro-copy font-semibold text-[10px] transition-all duration-300 ${plan.highlight ? 'bg-white text-black hover:bg-neon-lime hover:shadow-[0_0_20px_rgba(192,255,0,0.4)]' : 'bg-white/5 text-white border border-white/10 hover:bg-white/10'}`}>
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

                <div className="p-6 rounded-2xl bg-neon-lime/5 border border-neon-lime/10 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="flex items-center gap-4">
                        <div className="p-2 rounded-full bg-neon-lime/10 text-neon-lime">
                            <Rocket size={18} />
                        </div>
                        <div className="text-left">
                            <p className="text-xs font-bold text-white micro-copy mb-1">{t.pricing.offer.title}</p>
                            <p className="text-xs text-slate-400">{t.pricing.offer.desc}</p>
                        </div>
                    </div>
                    <button className="px-4 py-2 bg-neon-lime/10 text-neon-lime text-[10px] font-bold rounded-lg border border-neon-lime/20 hover:bg-neon-lime/20 transition-all whitespace-nowrap">
                        {t.pricing.offer.cta}
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Pricing;
