
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Process: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="proceso" className="py-10">
      <div className="text-center space-y-4 mb-16">
        <div className="micro-copy text-[10px] text-neon-lime font-semibold tracking-wider">{t.process.label}</div>
        <h2 className="text-4xl md:text-5xl font-semibold text-white font-jakarta">{t.process.title}</h2>
        <p className="text-slate-400 max-w-2xl mx-auto font-medium">{t.process.subtitle}</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {t.process.steps.map((step, i) => (
          <div key={i} className="relative group">
            {/* Connector Line (Desktop) */}
            {i < t.process.steps.length - 1 && (
              <div className="hidden lg:block absolute top-8 left-1/2 w-full h-px bg-white/5 z-0"></div>
            )}
            
            <div className="relative z-10 bg-opal-darker border border-white/5 rounded-2xl p-6 hover:bg-white/[0.02] hover:border-turquoise/20 transition-all duration-300 h-full flex flex-col items-center text-center group-hover:-translate-y-2">
              <div className="w-16 h-16 rounded-full bg-white/[0.02] border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-turquoise/30 transition-all">
                <step.icon size={24} className="text-slate-400 group-hover:text-turquoise transition-colors" />
              </div>
              
              <div className="absolute top-4 right-4 text-[40px] font-bold text-white/[0.02] font-jakarta select-none group-hover:text-white/[0.05] transition-colors">
                0{i + 1}
              </div>

              <h3 className="text-lg font-semibold text-white font-jakarta mb-3">{step.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed group-hover:text-slate-400 transition-colors">
                {step.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Process;
