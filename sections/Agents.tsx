
import React from 'react';
import { Target, Search, Fingerprint, LucideIcon, Shield, Sparkles } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  role: string;
  description: string;
  labels: string[];
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title, role, description, labels }) => (
  <div className="p-8 rounded-[2rem] glass-card border-white/5 space-y-6 hover:border-turquoise/30 transition-all duration-500 group flex flex-col h-full hover:bg-white/[0.02]">
    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-turquoise group-hover:scale-110 group-hover:bg-turquoise/10 transition-all duration-500">
      <Icon size={22} strokeWidth={2} />
    </div>
    <div className="space-y-3 flex-grow">
      <div className="flex items-center gap-2">
        <h4 className="text-xl font-semibold text-white font-jakarta">{title}</h4>
        <span className="text-[9px] micro-copy bg-turquoise/10 text-turquoise px-1.5 py-0.5 rounded opacity-70 group-hover:opacity-100 transition-opacity">AGENT</span>
      </div>
      <p className="text-[10px] micro-copy text-neon-lime font-semibold tracking-wider">{role}</p>
      <p className="text-sm text-slate-500 font-medium leading-relaxed group-hover:text-slate-400 transition-colors">{description}</p>
    </div>
    <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5 group-hover:border-white/10 transition-colors">
      {labels.map((label, i) => (
        <span key={i} className="px-3 py-1 bg-white/5 rounded-md text-[9px] micro-copy text-slate-400 font-semibold group-hover:bg-white/10 transition-colors">{label}</span>
      ))}
    </div>
  </div>
);

const Agents: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="fuerza" className="space-y-24">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-12">
          <div className="space-y-4">
            <div className="micro-copy text-[10px] text-neon-lime font-semibold animate-pulse">{t.agents.label}</div>
            <h3 className="text-4xl font-semibold text-white">{t.agents.title}</h3>
            <p className="text-slate-400 font-medium leading-relaxed text-lg">
              {t.agents.desc}
            </p>
          </div>
          
          <div className="app-window w-full hover:shadow-[0_40px_100px_rgba(0,217,255,0.05)] transition-shadow duration-700">
            <div className="scan-line"></div>
            <div className="window-header">
              <Fingerprint size={12} className="text-neon-lime mr-2 animate-pulse" />
              <div className="text-[8px] micro-copy text-slate-500">Security Protocol / Multiversa DNA</div>
            </div>
            <div className="p-6 space-y-4">
              <div className="flex items-center gap-4 p-3 rounded-lg bg-neon-lime/5 border border-neon-lime/10 relative overflow-hidden">
                <div className="absolute inset-0 bg-neon-lime/5 translate-x-[-100%] animate-[shimmer_3s_infinite]"></div>
                <Shield size={16} className="text-neon-lime relative z-10" />
                <div className="text-xs font-semibold text-white relative z-10"> MCP + RAG Layer: Active</div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                 <div className="p-3 border border-white/5 rounded bg-white/[0.02]">
                    <div className="h-1 w-12 bg-white/10 rounded mb-2"></div>
                    <div className="h-1 w-20 bg-white/5 rounded overflow-hidden">
                       <div className="h-full bg-white/20 animate-shimmer"></div>
                    </div>
                 </div>
                 <div className="p-3 border border-white/5 rounded bg-white/[0.02]">
                    <div className="h-1 w-12 bg-white/10 rounded mb-2"></div>
                    <div className="h-1 w-20 bg-white/5 rounded overflow-hidden">
                       <div className="h-full bg-white/20 animate-shimmer" style={{ animationDelay: '0.5s' }}></div>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-8">
          <FeatureCard 
            icon={Target} 
            title="Nux" 
            role={t.agents.nux.role}
            description={t.agents.nux.desc}
            labels={t.agents.nux.labels}
          />
          <FeatureCard 
            icon={Sparkles} 
            title="Lumina" 
            role={t.agents.lumina.role}
            description={t.agents.lumina.desc}
            labels={t.agents.lumina.labels}
          />
        </div>
      </div>
    </section>
  );
};

export default Agents;
