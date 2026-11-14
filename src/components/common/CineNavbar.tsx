import React, { useState, useEffect } from 'react';
import { Plus, Search, User, X } from 'lucide-react';
import { BRAND, NAVBAR } from '../../content';

interface CineNavbarProps {
  onOpenPortal: () => void;
  onOpenSearch: () => void;
  activeSection: string;
}

export const CineNavbar: React.FC<CineNavbarProps> = ({ 
  onOpenPortal, 
  onOpenSearch,
  activeSection 
}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isOverWhite, setIsOverWhite] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if current scroll position overlaps a white section (.section-white)
      const whiteSections = document.querySelectorAll('.section-white');
      let foundWhite = false;
      const navCenter = 40;

      whiteSections.forEach((sec) => {
        const rect = sec.getBoundingClientRect();
        if (rect.top <= navCenter && rect.bottom >= navCenter) {
          foundWhite = true;
        }
      });

      setIsOverWhite(foundWhite);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    setMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-40 transition-colors duration-300 py-4 sm:py-5 px-4 sm:px-8 pointer-events-none ${
          isOverWhite ? 'text-[#0A0A0A]' : 'text-white'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between pointer-events-auto">
          
          {/* Left: Wordmark with Red Plus/Cross Icon */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('#hero');
            }}
            className="flex items-center gap-2 group cursor-pointer focus:outline-none"
          >
            <div className="w-5 h-5 rounded-sm bg-[#C8102E] flex items-center justify-center text-white shadow-[0_0_12px_#C8102E] group-hover:rotate-90 transition-transform duration-300">
              <Plus className="w-3.5 h-3.5 stroke-[3]" />
            </div>
            <span className="font-display text-xl sm:text-2xl tracking-wider uppercase font-bold leading-none">
              {BRAND.name}
            </span>
          </a>

          {/* Center: Desktop Links with Intercalated Small Dots & Active Red Dot */}
          <nav 
            className={`hidden md:flex items-center gap-1.5 px-6 py-2.5 rounded-full border transition-all backdrop-blur-xl ${
              isOverWhite 
                ? 'bg-white/80 border-black/10 shadow-md text-[#0A0A0A]' 
                : 'bg-[#171919]/75 border-white/10 shadow-2xl text-white'
            }`}
          >
            {NAVBAR.links.map((link, idx) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <React.Fragment key={link.href}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className={`relative px-3 py-1 text-xs font-mono uppercase tracking-wider transition-all cursor-pointer ${
                      isActive 
                        ? (isOverWhite ? 'text-[#C8102E] font-black' : 'text-white font-black') 
                        : (isOverWhite ? 'text-black/60 hover:text-black' : 'text-white/60 hover:text-white')
                    }`}
                  >
                    <span>{link.label}</span>
                    {isActive && (
                      <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#C8102E] shadow-[0_0_6px_#C8102E]" />
                    )}
                  </button>

                  {idx < NAVBAR.links.length - 1 && (
                    <span className="w-1 h-1 rounded-full bg-slate-400/40" />
                  )}
                </React.Fragment>
              );
            })}
          </nav>

          {/* Right Controls: Circular Search Icon, User Icon, Solid Black 2-Lines Button */}
          <div className="flex items-center gap-2.5">
            
            {/* Circular Outline Search Icon */}
            <button
              onClick={onOpenSearch}
              className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all cursor-pointer ${
                isOverWhite
                  ? 'border-black/20 hover:border-[#C8102E] text-black hover:bg-black/5'
                  : 'border-white/20 hover:border-[#C8102E] text-white hover:bg-white/10'
              }`}
              title="Search Case Studies & Niches"
              aria-label="Search"
            >
              <Search className="w-4 h-4" />
            </button>

            {/* Circular Outline User Icon (Client Portal Gateway) */}
            <button
              onClick={onOpenPortal}
              className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all cursor-pointer ${
                isOverWhite
                  ? 'border-black/20 hover:border-[#C8102E] text-black hover:bg-black/5'
                  : 'border-white/20 hover:border-[#C8102E] text-white hover:bg-white/10'
              }`}
              title="Client Portal Login (Access Purchased Plan & Telemetry)"
              aria-label="Client Portal"
            >
              <User className="w-4 h-4" />
            </button>

            {/* Solid Black Circular Menu Button with Two Horizontal Lines */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="w-10 h-10 rounded-full bg-[#0A0A0A] text-white border border-white/20 flex flex-col items-center justify-center gap-1 cursor-pointer hover:border-[#C8102E] transition-all shadow-md"
              aria-label="Menu"
            >
              <span className="w-4 h-[2px] bg-white rounded-full" />
              <span className="w-4 h-[2px] bg-white rounded-full" />
            </button>

          </div>

        </div>
      </header>

      {/* FULL-SCREEN OVERLAY MENU (FROM CIRCULAR BUTTON) */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-[#0A0A0A] text-white flex flex-col justify-between p-6 sm:p-12 overflow-y-auto">
          
          {/* Top Bar inside Overlay */}
          <div className="flex items-center justify-between pb-6 border-b border-white/10">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-sm bg-[#C8102E] flex items-center justify-center text-white">
                <Plus className="w-4 h-4 stroke-[3]" />
              </div>
              <span className="font-display text-2xl tracking-wider uppercase">{BRAND.name}</span>
            </div>

            <button
              onClick={() => setMenuOpen(false)}
              className="w-11 h-11 rounded-full bg-white/10 hover:bg-[#C8102E] text-white flex items-center justify-center transition-colors cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Links List */}
          <div className="my-auto py-12 flex flex-col gap-5 text-left">
            <span className="text-xs font-mono uppercase tracking-widest text-[#C8102E] block">
              // NAVIGATION DIRECTORY
            </span>
            {NAVBAR.links.map((link, idx) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="font-display text-4xl sm:text-7xl font-black uppercase text-left hover:text-[#C8102E] transition-colors flex items-baseline gap-4 group cursor-pointer"
              >
                <span className="text-sm sm:text-xl font-mono text-slate-500 group-hover:text-[#C8102E]">
                  0{idx + 1}
                </span>
                <span>{link.label}</span>
              </button>
            ))}

            <div className="pt-6 mt-4 border-t border-white/10 flex flex-wrap gap-4">
              <button
                onClick={() => {
                  setMenuOpen(false);
                  onOpenPortal();
                }}
                className="px-6 py-3 rounded-full bg-[#C8102E] text-white text-xs font-bold font-mono uppercase tracking-wider cursor-pointer"
              >
                Client Portal Login ↗
              </button>

              <a
                href={`https://wa.me/${BRAND.whatsappNumber.replace('+', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-bold font-mono uppercase tracking-wider"
              >
                Direct WhatsApp ↗
              </a>
            </div>
          </div>

          {/* Bottom Info inside Overlay */}
          <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs font-mono text-slate-400 gap-2">
            <span>{BRAND.address}</span>
            <span className="text-white">{BRAND.whatsappDisplay}</span>
          </div>

        </div>
      )}
    </>
  );
};
