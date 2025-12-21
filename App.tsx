
import React, { useState, useEffect } from 'react';
import { Home, Zap, Shield, Sparkles, Layout, Calculator, HelpCircle, MessageSquare, ChevronRight, Activity, Terminal, X, Bot } from 'lucide-react';
import { LanguageProvider, useLanguage } from './contexts/LanguageContext';
import AuraBackground from './components/AuraBackground';
import Hero from './sections/Hero';
import Process from './sections/Process';
import Agents from './sections/Agents';
import CalculaTu from './sections/CalculaTu';
import Pricing from './sections/Pricing';
import FAQ from './sections/FAQ';
import NuxChat from './components/NuxChat';

const ChatTrigger = ({ toggleChat, isChatOpen }: { toggleChat: () => void, isChatOpen: boolean }) => {
    return (
        <button
            onClick={toggleChat}
            className={`fixed z-[160] 
                        bottom-24 right-4 
                        md:bottom-8 md:right-8
                        w-14 h-14 rounded-2xl flex items-center justify-center 
                        backdrop-blur-xl border transition-all duration-500 hover:scale-105
                        shadow-[0_10px_40px_rgba(0,0,0,0.5)]
                        ${isChatOpen 
                            ? 'bg-white text-black border-white shadow-[0_0_30px_rgba(255,255,255,0.3)] rotate-90' 
                            : 'bg-opal-black/80 border-turquoise/30 text-turquoise shadow-[0_0_20px_rgba(0,217,255,0.15)] hover:shadow-[0_0_40px_rgba(0,217,255,0.3)] hover:bg-turquoise/10 hover:border-turquoise'
                        }`}
        >
            <div className="relative">
                {isChatOpen ? <X size={24} /> : <Bot size={28} strokeWidth={1.5} />}
                {!isChatOpen && (
                    <span className="absolute -top-1 -right-1 flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-lime opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-neon-lime"></span>
                    </span>
                )}
            </div>
        </button>
    );
};

const Dock = () => {
  const { t } = useLanguage();
  const [activeSection, setActiveSection] = useState('hero');

  const dockItems = [
    { id: 'hero', icon: Home, label: t.nav.items[0].label },
    { id: 'proceso', icon: Layout, label: t.nav.items[1].label },
    { id: 'servicios', icon: Shield, label: t.nav.items[2].label },
    { id: 'fuerza', icon: Zap, label: t.nav.items[3].label },
    { id: 'niveles', icon: Activity, label: t.nav.items[4].label },
    { id: 'calculatu', icon: Calculator, label: t.nav.items[5].label },
    { id: 'faq', icon: HelpCircle, label: t.nav.items[6].label },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sectionIds = dockItems.map(item => item.id);
      const current = sectionIds.find(id => {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top >= -400 && rect.top <= 400;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [dockItems]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="dock-container group">
        {dockItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className={`dock-item ${activeSection === item.id ? 'active' : 'hover:text-white hover:bg-white/5'}`}
          >
            <item.icon size={18} />
            <span className="dock-label">{item.label}</span>
          </button>
        ))}
    </div>
  );
};

const Header = () => {
    const { language, toggleLanguage } = useLanguage();
    
    return (
      <header className="fixed top-4 md:top-6 left-0 right-0 z-50 w-[92%] md:w-full max-w-5xl mx-auto px-6 py-3 flex justify-between items-center bg-opal-black/70 backdrop-blur-xl border border-white/10 rounded-full shadow-[0_20px_40px_rgba(0,0,0,0.4)] transition-all">
         <div className="flex items-center gap-3 group cursor-default">
            <div className="relative w-8 h-8 flex items-center justify-center">
               <div className="absolute inset-0 bg-neon-lime opacity-20 blur-lg rounded-full animate-pulse-slow"></div>
               <svg viewBox="0 0 24 24" className="w-6 h-6 text-white relative z-10" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" strokeLinecap="round" strokeLinejoin="round"/>
               </svg>
            </div>
            <div className="flex flex-col">
               <h1 className="text-xs font-bold tracking-[0.2em] micro-copy text-white leading-none mb-0.5">MULTIVERSA</h1>
               <div className="text-[8px] micro-copy text-slate-500 font-semibold tracking-widest leading-none">AGENCY OS</div>
            </div>
         </div>

         <div className="flex items-center gap-3">
            <div className="hidden md:flex items-center gap-2 px-3 py-1 rounded-full border border-white/5 bg-white/[0.02]">
                <div className="w-1.5 h-1.5 rounded-full bg-turquoise animate-pulse"></div>
                <span className="text-[9px] micro-copy font-medium text-slate-500">v1.0.4-beta</span>
            </div>
            
            <button 
                onClick={toggleLanguage}
                className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/5 bg-white/[0.05] hover:bg-white/10 transition-all cursor-pointer group"
            >
                <span className={`text-sm grayscale group-hover:grayscale-0 transition-all ${language === 'en' ? 'opacity-100' : 'opacity-40'}`}>🇺🇸</span>
                <div className="w-px h-3 bg-white/10"></div>
                <span className={`text-sm grayscale group-hover:grayscale-0 transition-all ${language === 'es' ? 'opacity-100' : 'opacity-40'}`}>🇻🇪</span>
            </button>
         </div>
      </header>
    );
};

const MainContent = () => {
    const { t } = useLanguage();
    
    return (
        <main className="relative z-10 px-6 md:px-12 max-w-7xl mx-auto space-y-48 pt-32">
            <div id="hero"><Hero /></div>
            
            <div id="proceso"><Process /></div>

            {/* Servicios - Diseccionado */}
            <section id="servicios" className="space-y-24">
              <div className="text-center space-y-4">
                <div className="micro-copy text-[10px] text-slate-500 font-semibold">{t.services.label}</div>
                <h2 className="text-4xl md:text-5xl font-semibold text-white">{t.services.title}</h2>
                <p className="text-slate-400 max-w-xl mx-auto font-medium">{t.services.subtitle}</p>
              </div>

              <div className="grid md:grid-cols-2 gap-16 items-center">
                <div className="space-y-8">
                  <div className="space-y-4">
                    <div className="micro-copy text-[10px] text-turquoise font-semibold">{t.services.automationLabel}</div>
                    <h3 className="text-3xl font-semibold text-white">{t.services.automationTitle}</h3>
                    <p className="text-slate-400 font-medium leading-relaxed">{t.services.automationDesc}</p>
                  </div>
                  <div className="flex gap-4">
                    <button className="px-5 py-2 rounded-lg bg-white/5 border border-white/10 text-[10px] font-semibold micro-copy text-white hover:bg-white/10 transition-all">{t.services.buttons[0]}</button>
                    <button className="px-5 py-2 rounded-lg bg-white/5 border border-white/10 text-[10px] font-semibold micro-copy text-white hover:bg-white/10 transition-all">{t.services.buttons[1]}</button>
                  </div>
                </div>

                <div className="app-window w-full aspect-video hover:border-turquoise/20 transition-colors duration-500">
                  <div className="scan-line"></div>
                  <div className="window-header">
                    <div className="window-dot bg-red-500/50"></div>
                    <div className="window-dot bg-yellow-500/50"></div>
                    <div className="window-dot bg-green-500/50"></div>
                    <div className="ml-4 text-[9px] micro-copy text-slate-500">Workflow Automation - v1.2</div>
                  </div>
                  <div className="p-6 space-y-4">
                    <div className="flex justify-between items-center pb-2 border-b border-white/5">
                       <div className="text-[10px] font-semibold text-slate-400">TASKS</div>
                       <div className="text-[10px] text-turquoise">Running</div>
                    </div>
                    {[1,2,3].map(i => (
                      <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors cursor-pointer group/item">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded bg-white/5 flex items-center justify-center group-hover/item:text-turquoise transition-colors"><Activity size={14} className="text-slate-500"/></div>
                          <div className="space-y-1">
                            <div className="h-2 w-24 bg-white/10 rounded overflow-hidden">
                               <div className="h-full bg-white/20 w-1/2 animate-[shimmer_2s_infinite]"></div>
                            </div>
                            <div className="h-1.5 w-12 bg-white/5 rounded"></div>
                          </div>
                        </div>
                        <ChevronRight size={14} className="text-slate-700" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            <div id="fuerza"><Agents /></div>
            
            <div id="niveles"><Pricing /></div>
            
            <div id="calculatu"><CalculaTu /></div>

            <div id="faq"><FAQ /></div>

            <section className="text-center py-24 relative overflow-hidden rounded-[3rem] bg-gradient-to-br from-opal-darker to-opal-black border border-white/5 group">
                <div className="aura-orb absolute top-0 left-0 w-64 h-64 bg-turquoise/5 group-hover:bg-turquoise/10 transition-colors duration-700" />
                <div className="relative z-10 space-y-10">
                  <h2 className="text-4xl md:text-6xl font-semibold text-white leading-tight font-jakarta italic">
                    {t.ctaSection.title} <br />
                    <span className="text-gradient">{t.ctaSection.titleGradient}</span>
                  </h2>
                  <p className="text-slate-400 font-medium">{t.ctaSection.subtitle}</p>
                  <button className="px-10 py-5 bg-neon-lime text-opal-black rounded-xl micro-copy font-semibold text-xs hover:shadow-[0_0_50px_rgba(192,255,0,0.3)] hover:-translate-y-1 transition-all duration-300">
                    {t.ctaSection.button}
                  </button>
                </div>
            </section>
        </main>
    );
}

const Footer = () => {
    const { t } = useLanguage();
    return (
      <footer className="relative z-10 py-16 px-12 border-t border-white/5 bg-opal-black/50">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
          <div className="space-y-4">
             <div className="flex items-center gap-2 micro-copy text-[10px] font-semibold text-white">
                <div className="w-2 h-2 rounded-full bg-neon-lime" />
                MULTIVERSA AGENCY
             </div>
             <p className="text-xs text-slate-500 max-w-xs leading-relaxed">{t.footer.desc}</p>
             <p className="text-xs text-turquoise font-mono">{t.footer.tagline}</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
             <div className="space-y-4">
               <h4 className="text-[10px] micro-copy text-white font-semibold">LINKS</h4>
               <ul className="space-y-2 text-xs text-slate-500 font-medium">
                 {t.footer.links.map(l => <li key={l}>{l}</li>)}
               </ul>
             </div>
             <div className="space-y-4">
               <h4 className="text-[10px] micro-copy text-white font-semibold">SOCIALS</h4>
               <ul className="space-y-2 text-xs text-slate-500 font-medium">
                 {t.footer.socials.map(s => <li key={s}>{s}</li>)}
               </ul>
             </div>
          </div>
        </div>
      </footer>
    );
};

const App: React.FC = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <LanguageProvider>
        <div className="relative min-h-screen selection:bg-neon-lime selection:text-black font-inter bg-opal-black overflow-hidden pb-32">
          <AuraBackground />
          <Header />
          <Dock />
          <ChatTrigger toggleChat={() => setIsChatOpen(!isChatOpen)} isChatOpen={isChatOpen} />
          <NuxChat isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
          <MainContent />
          <Footer />
        </div>
    </LanguageProvider>
  );
};

export default App;
