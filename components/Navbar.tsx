import React from 'react';

interface NavbarProps {
  scrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ scrolled }) => {
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-opal-dark/80 backdrop-blur-xl border-b border-white/5 py-4' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="w-2 h-2 rounded-full bg-neon-lime shadow-[0_0_8px_#c0ff00]" />
          <span className="font-bold text-sm tracking-widest micro-copy text-white">MULTIVERSA AGENCY</span>
        </div>
        
        <div className="hidden lg:flex items-center gap-10">
          {['LOBBY', 'REALIDAD', 'ACTIVOS', 'PLANES', 'METODO'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className="text-[10px] micro-copy font-bold text-slate-500 hover:text-white transition-all tracking-[0.2em]"
            >
              {item}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <div className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center bg-white/5 hover:border-turquoise/30 transition-all cursor-pointer">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-slate-400 group-hover:text-turquoise"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;