
import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const FAQ: React.FC = () => {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="max-w-4xl mx-auto space-y-16 py-10">
      <div className="text-center space-y-4">
        <div className="micro-copy text-[10px] text-slate-600 font-semibold">{t.faq.label}</div>
        <h2 className="text-4xl font-semibold text-white font-jakarta">{t.faq.title}</h2>
      </div>

      <div className="space-y-4">
        {t.faq.items.map((faq, i) => (
          <div key={i} className="rounded-2xl border border-white/5 bg-opal-darker overflow-hidden transition-all duration-300">
            <button 
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full p-6 flex justify-between items-center text-left hover:bg-white/[0.02] transition-all"
            >
              <span className="font-semibold text-base md:text-lg text-white font-jakarta pr-4">{faq.q}</span>
              <div className={`transition-transform duration-300 flex-shrink-0 ${openIndex === i ? 'rotate-180 text-neon-lime' : 'text-slate-500'}`}>
                {openIndex === i ? <Minus size={18} /> : <Plus size={18} />}
              </div>
            </button>
            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === i ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'}`}>
              <div className="px-6 pb-6 text-slate-400 leading-relaxed text-sm font-inter font-medium">
                {faq.a}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
