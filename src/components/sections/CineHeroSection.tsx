import React, { useRef } from 'react';
import { HERO, BRAND } from '../../content';
import { AnimeMascot } from '../mascot/AnimeMascot';

interface CineHeroSectionProps {
  onBookClick: () => void;
}

export const CineHeroSection: React.FC<CineHeroSectionProps> = ({ onBookClick }) => {
  const heroRef = useRef<HTMLDivElement>(null);

  return (
    <section 
      id="hero"
      ref={heroRef}
      className="relative min-h-screen bg-[#0A0A0A] text-white pt-28 sm:pt-36 pb-20 px-4 sm:px-8 flex flex-col justify-between overflow-hidden"
    >
      {/* Background Crosshair Lines & Concentric Target Circles */}
      <div className="absolute inset-0 bg-crosshair-circles opacity-35 pointer-events-none" />
      
      {/* Large Vibrant Crimson Circle Behind Mascot */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[540px] h-[340px] sm:h-[540px] rounded-full bg-[#C8102E]/25 blur-[90px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] sm:w-[460px] h-[280px] sm:h-[460px] rounded-full border border-[#C8102E]/30 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[180px] sm:w-[320px] h-[180px] sm:h-[320px] rounded-full border border-white/10 pointer-events-none" />

      {/* TOP HEADER ROW OF HERO */}
      <div className="relative z-20 flex items-center justify-between text-xs font-mono max-w-7xl mx-auto w-full mb-6">
        {/* Top-Left: Small Outline Pill Tags */}
        <div className="flex flex-wrap items-center gap-2">
          {HERO.pillTags.map((tag, idx) => (
            <span 
              key={idx}
              className="px-3 py-1 rounded-full border border-white/20 text-[10px] tracking-wider uppercase text-slate-300 bg-white/5 backdrop-blur-sm"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Top-Right: Tiny Label "Now booking slots" with Pulsing Red Dot */}
        <div className="flex items-center gap-2 text-[11px] uppercase tracking-widest text-[#CCC5C4]">
          <span className="w-2 h-2 rounded-full bg-[#C8102E] animate-pulse" />
          <span>{HERO.statusLabel}</span>
        </div>
      </div>

      {/* CENTER COMPOSITION: ROW OF 4 WORDS + GIANT HEADLINE + OVERLAPPING FLOATING MASCOT */}
      <div className="relative z-10 flex flex-col items-center justify-center my-auto text-center w-full max-w-7xl mx-auto">
        
        {/* Row of 4 Key Words Above Headline (Reels · Meta Ads · YouTube · Influencers) */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 mb-2 text-xs sm:text-sm font-mono tracking-widest uppercase text-[#CCC5C4]">
          {HERO.keyWords.map((kw, i) => (
            <React.Fragment key={i}>
              <span className="hover:text-[#C8102E] transition-colors">{kw}</span>
              {i < HERO.keyWords.length - 1 && <span className="text-[#C8102E] font-bold">•</span>}
            </React.Fragment>
          ))}
        </div>

        {/* Relative Group: Giant Headline (BEHIND) + Anime Mascot (OVERLAPPING IN FRONT) */}
        <div className="relative w-full flex items-center justify-center select-none">
          
          {/* Giant Headline: "GO VIRAL" (Sits BEHIND the mascot) */}
          <h1 
            className="hero-fluid-title font-black uppercase text-center text-white/95 tracking-tight font-display z-0 select-none pointer-events-none"
          >
            {HERO.giantHeadline}
          </h1>

          {/* Vertical Bracketed Tag Right of Headline [2026] */}
          <div className="hidden xl:block absolute right-4 top-1/2 -translate-y-1/2 font-mono text-sm tracking-widest text-slate-400 rotate-90 origin-right">
            {HERO.bracketTag}
          </div>

          {/* Floating Original Anime Mascot (Z-INDEX 10 OVERLAPS HEADLINE LETTERS) */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[45%] w-64 sm:w-[420px] lg:w-[490px] max-w-[85vw] z-10 pointer-events-none animate-mascot-float">
            <AnimeMascot pose="main" />
          </div>

        </div>

      </div>

      {/* TILTED INFINITE RED TAPE BAND WITH REPEATING ICON PATTERN */}
      <div className="relative z-20 w-full overflow-hidden my-6 -rotate-1 sm:-rotate-2 scale-105 shadow-[0_10px_35px_rgba(200,16,46,0.35)]">
        <div className="bg-[#C8102E] text-white py-2 sm:py-2.5 font-display text-sm sm:text-base font-bold tracking-wider uppercase border-y border-white/20">
          <div className="animate-infinite-tape flex items-center gap-6 whitespace-nowrap">
            {HERO.marqueeTape.concat(HERO.marqueeTape).map((item, idx) => (
              <div key={idx} className="flex items-center gap-4">
                <span>✦</span>
                <span>{item}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-white" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* BOTTOM CONTROLS ROW */}
      <div className="relative z-20 max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center justify-between gap-6 pt-4">
        
        {/* Bottom-Left: Red-Dot Label + Short 3-Line Intro */}
        <div className="text-left max-w-xs sm:max-w-sm">
          <span className="text-[10px] font-mono uppercase tracking-widest text-[#CCC5C4] red-dot block mb-1">
            PERFORMANCE CREATIVE & PAID MEDIA
          </span>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
            {HERO.heroLead}
          </p>
        </div>

        {/* Bottom-Center: Outline Pill Button "Book Now ↗" with Magnetic Hover Effect */}
        <div className="my-auto">
          <button
            onClick={onBookClick}
            className="group relative px-8 sm:px-10 py-3.5 sm:py-4 rounded-full border border-white/40 hover:border-[#C8102E] bg-white/5 hover:bg-[#C8102E] text-white font-mono text-xs sm:text-sm uppercase tracking-widest transition-all duration-300 shadow-xl cursor-pointer hover:scale-105 flex items-center gap-2"
          >
            <span>{HERO.ctaText}</span>
          </button>
        </div>

        {/* Bottom-Right: Circular Sticker Badge with Rotating Text (Continuously Spinning) */}
        <div className="relative w-24 h-24 flex items-center justify-center shrink-0">
          <div className="absolute inset-0 animate-spin-slow">
            <svg viewBox="0 0 100 100" className="w-full h-full fill-[#CCC5C4] text-[9px] font-mono tracking-widest uppercase">
              <path
                id="circlePathHero"
                d="M 50, 50 m -38, 0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0"
                fill="none"
              />
              <text>
                <textPath href="#circlePathHero" startOffset="0%">
                  {HERO.rotatingBadgeText}
                </textPath>
              </text>
            </svg>
          </div>
          {/* Badge Center Eye / Spark Icon */}
          <div className="w-10 h-10 rounded-full bg-[#171919] border border-[#C8102E] flex items-center justify-center shadow-[0_0_15px_rgba(200,16,46,0.5)]">
            <span className="text-[#C8102E] font-bold text-xs">✦</span>
          </div>
        </div>

      </div>

    </section>
  );
};
