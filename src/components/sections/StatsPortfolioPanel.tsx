import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Star, Shield, Sparkles } from 'lucide-react';
import { STATS, HERO_PORTFOLIO_CARDS } from '../../content';

export const StatsPortfolioPanel: React.FC = () => {
  const [activeCardIndex, setActiveCardIndex] = useState(1);
  const [isHovered, setIsHovered] = useState(false);

  const handleNext = () => {
    setActiveCardIndex((prev) => (prev + 1) % HERO_PORTFOLIO_CARDS.length);
  };

  const handlePrev = () => {
    setActiveCardIndex((prev) => (prev - 1 + HERO_PORTFOLIO_CARDS.length) % HERO_PORTFOLIO_CARDS.length);
  };

  return (
    <section className="relative bg-[#0A0A0A] text-white py-20 sm:py-28 px-4 sm:px-8 border-t border-white/10 overflow-hidden">
      
      {/* Background subtle crosshairs */}
      <div className="absolute inset-0 bg-crosshair-circles opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* ROW 1: THREE ROUND CHIPS WITH COUNT NUMBERS */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mb-16">
          {STATS.chips.map((chip, idx) => (
            <div 
              key={idx}
              className={`px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-mono text-xs sm:text-sm font-bold uppercase tracking-wider flex items-center gap-3 shadow-xl transition-transform hover:scale-105 cursor-pointer ${chip.color}`}
            >
              <span className="w-2 h-2 rounded-full bg-current opacity-80" />
              <span>{chip.value}</span>
              <span className="opacity-80 font-normal">{chip.label}</span>
            </div>
          ))}
        </div>

        {/* ROW 2: PARTNER BADGE (LEFT) + CLIENT QUOTE WITH RED VERTICAL LINE (RIGHT) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center mb-16 pb-12 border-b border-white/10">
          
          {/* Left: Index "02" + 5 Stars + Partner Label */}
          <div className="md:col-span-5 flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-[#171919] border border-white/15 flex items-center justify-center font-mono text-sm font-bold text-[#CCC5C4] shrink-0">
              02
            </div>

            <div>
              <div className="flex items-center gap-1 text-[#C8102E] mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>

              <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 block mb-1">
                {STATS.partnerLabel}
              </span>

              <div className="flex items-center gap-2">
                <span className="font-display text-xl tracking-wider uppercase text-white font-bold">
                  {STATS.partnerName}
                </span>
                <span className="text-[10px] bg-[#C8102E]/20 text-[#C8102E] font-mono px-2 py-0.5 rounded border border-[#C8102E]/40 font-bold">
                  VERIFIED
                </span>
              </div>
            </div>
          </div>

          {/* Right: Quote with Thin Red Vertical Line */}
          <div className="md:col-span-7 pl-6 border-l-2 border-[#C8102E] relative">
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed italic mb-2">
              "{STATS.partnerQuote}"
            </p>
            <div className="flex items-center justify-between text-xs font-mono text-[#CCC5C4]">
              <span>{STATS.partnerAuthor}</span>
              {/* Slider Dots */}
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#C8102E]" />
                <span className="w-1.5 h-1.5 rounded-full bg-white/30" />
                <span className="w-1.5 h-1.5 rounded-full bg-white/30" />
              </div>
            </div>
          </div>

        </div>

        {/* ROW 3: THREE PORTFOLIO CARDS FANNED & OVERLAPPING WITH TILT (SPREAD ON HOVER) */}
        <div className="text-center mb-8">
          <span className="text-xs font-mono uppercase tracking-widest text-[#C8102E] block mb-1">
            // FEATURED CLIENT WORK
          </span>
          <h3 className="font-display text-2xl sm:text-4xl uppercase tracking-wider text-white">
            High-Retention Production Showcase
          </h3>
        </div>

        <div 
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="relative h-[440px] sm:h-[480px] max-w-4xl mx-auto flex items-center justify-center mb-10 select-none"
        >
          {HERO_PORTFOLIO_CARDS.map((card, idx) => {
            // Fanned positioning calculations
            let offset = (idx - 1) * (isHovered ? 260 : 120);
            let rotate = isHovered ? (idx - 1) * 7 : (idx === 0 ? -8 : idx === 2 ? 8 : 0);
            let zIndex = idx === activeCardIndex ? 30 : idx === 1 ? 20 : 10;
            let scale = idx === activeCardIndex ? 1.05 : 0.95;

            return (
              <div
                key={card.id}
                onClick={() => setActiveCardIndex(idx)}
                style={{
                  transform: `translateX(${offset}px) rotate(${rotate}deg) scale(${scale})`,
                  zIndex: zIndex,
                }}
                className="absolute w-64 sm:w-72 h-[380px] sm:h-[430px] rounded-[28px] overflow-hidden bg-[#171919] border border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.8)] transition-all duration-500 ease-out cursor-pointer flex flex-col justify-between p-5 group"
              >
                {/* Background Image */}
                <img 
                  src={card.image} 
                  alt={card.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                {/* Card Top: Niche Badge + Views */}
                <div className="relative z-10 flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold bg-[#C8102E] text-white px-2.5 py-1 rounded-full uppercase">
                    {card.niche}
                  </span>
                  <span className="text-[10px] font-mono font-bold bg-black/60 backdrop-blur-md text-[#CCC5C4] px-2.5 py-1 rounded-full border border-white/10">
                    {card.views}
                  </span>
                </div>

                {/* Card Bottom: Client & Metrics */}
                <div className="relative z-10 text-left space-y-1">
                  <span className="text-[11px] font-mono text-[#C8102E] font-bold block">
                    {card.client}
                  </span>
                  <h4 className="text-sm font-bold text-white leading-snug">
                    {card.title}
                  </h4>
                  <div className="pt-2 border-t border-white/20 flex items-center justify-between text-[10px] font-mono text-slate-300">
                    <span>{card.metrics}</span>
                    <span className="text-[#C8102E] font-bold">● {card.badge}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* BOTTOM CORNERS: ROUND RED "PREV" AND WHITE "NEXT" BUTTONS */}
        <div className="flex items-center justify-between max-w-sm mx-auto pt-4">
          <button
            onClick={handlePrev}
            className="w-12 h-12 rounded-full bg-[#C8102E] hover:bg-[#a50b24] text-white flex items-center justify-center shadow-lg transition-transform hover:scale-110 cursor-pointer"
            aria-label="Previous portfolio card"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>

          <span className="text-xs font-mono text-slate-400">
            SWIPE OR HOVER TO EXPAND
          </span>

          <button
            onClick={handleNext}
            className="w-12 h-12 rounded-full bg-white hover:bg-slate-200 text-[#0A0A0A] flex items-center justify-center shadow-lg transition-transform hover:scale-110 cursor-pointer"
            aria-label="Next portfolio card"
          >
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

      </div>

    </section>
  );
};
