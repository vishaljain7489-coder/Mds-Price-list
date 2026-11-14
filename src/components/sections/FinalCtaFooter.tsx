import React from 'react';
import { ArrowUp, Plus, Shield } from 'lucide-react';
import { BRAND, FOOTER } from '../../content';
import { AnimeMascot } from '../mascot/AnimeMascot';

interface FinalCtaFooterProps {
  onOpenPortal: () => void;
  onBookNow: () => void;
}

export const FinalCtaFooter: React.FC<FinalCtaFooterProps> = ({ onOpenPortal, onBookNow }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="section-white relative bg-white text-[#0A0A0A] pt-24 sm:pt-36 pb-12 px-4 sm:px-8 overflow-hidden border-t-2 border-black">
      
      {/* Background Thin Circle Lines */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-black/10 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full border border-black/5 pointer-events-none" />
      <div className="absolute inset-0 manga-dots-dark opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 text-center">
        
        {/* Small Label "NOW BOOKING" */}
        <span className="text-xs font-mono uppercase tracking-widest text-[#C8102E] font-bold red-dot inline-block mb-3">
          {FOOTER.badge}
        </span>

        {/* Huge Brand Title Centered with Small Texts Left and Right (SLOTS: 4 / 2026) */}
        <div className="relative flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-12 my-6">
          <span className="hidden sm:block font-mono text-xs uppercase tracking-widest text-slate-500 font-bold">
            {FOOTER.leftSub}
          </span>

          <h2 className="font-display text-6xl sm:text-9xl lg:text-[13vw] font-black uppercase tracking-tight text-[#0A0A0A] leading-none select-none">
            {FOOTER.bigTitle}
          </h2>

          <span className="hidden sm:block font-mono text-xs uppercase tracking-widest text-[#C8102E] font-bold">
            {FOOTER.rightSub}
          </span>
        </div>

        {/* Mascot Rising From the Bottom Edge with Heart-Hands Pose (🫶) */}
        <div className="relative mx-auto w-64 sm:w-80 -mb-4 z-20 pointer-events-none">
          <AnimeMascot pose="heart" />
        </div>

        {/* CTA Button Underneath */}
        <div className="relative z-30 mb-16">
          <button
            onClick={onBookNow}
            className="px-10 py-4 rounded-full bg-[#C8102E] hover:bg-[#a50b24] text-white font-mono text-xs sm:text-sm font-bold uppercase tracking-widest shadow-[0_0_30px_rgba(200,16,46,0.45)] cursor-pointer hover:scale-105 transition-all"
          >
            Launch Your Campaign Now ↗
          </button>
        </div>

        {/* Footer Meta Row: Links, Socials, Copyright */}
        <div className="pt-8 border-t border-black/10 flex flex-col md:flex-row items-center justify-between gap-6 text-xs font-mono text-slate-600">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded-sm bg-[#C8102E] flex items-center justify-center text-white">
              <Plus className="w-3.5 h-3.5 stroke-[3]" />
            </div>
            <span className="font-bold text-black font-sans uppercase">
              {BRAND.name}
            </span>
            <span>• {FOOTER.rights}</span>
          </div>

          <div className="flex flex-wrap items-center gap-6">
            <button
              onClick={onOpenPortal}
              className="text-[#C8102E] font-bold hover:underline cursor-pointer flex items-center gap-1"
            >
              <Shield className="w-3.5 h-3.5" />
              <span>Client Portal Login</span>
            </button>

            <a href={BRAND.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-black">
              Instagram
            </a>
            <a href={BRAND.youtube} target="_blank" rel="noopener noreferrer" className="hover:text-black">
              YouTube
            </a>
            <a href={`https://wa.me/${BRAND.whatsappNumber.replace('+', '')}`} target="_blank" rel="noopener noreferrer" className="hover:text-black">
              WhatsApp
            </a>

            <button
              onClick={scrollToTop}
              className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center hover:bg-[#C8102E] transition-colors cursor-pointer"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>

    </footer>
  );
};
