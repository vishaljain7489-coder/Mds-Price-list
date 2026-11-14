import React from 'react';
import { Plus } from 'lucide-react';
import { ABOUT_STATEMENT, BRAND } from '../../content';

export const AboutStatementSection: React.FC = () => {
  return (
    <section className="section-white relative bg-white text-[#0A0A0A] pt-24 sm:pt-32 pb-20 px-4 sm:px-8 rounded-t-[36px] sm:rounded-t-[48px] red-hairline-top -mt-10 sm:-mt-14 z-20 shadow-[0_-25px_60px_rgba(0,0,0,0.4)]">
      
      {/* Background Subtle Manga Dots for Texture */}
      <div className="absolute inset-0 manga-dots-dark opacity-10 pointer-events-none rounded-t-[36px] sm:rounded-t-[48px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Top Meta Header: Counter "GALLERY 07/32" & Avatar-Dot Pagination */}
        <div className="flex items-center justify-between pb-8 border-b border-black/10 mb-12">
          <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-widest uppercase text-slate-500">
            <span className="w-2 h-2 rounded-full bg-[#C8102E]" />
            <span>{ABOUT_STATEMENT.counter}</span>
          </div>

          {/* Dot Pagination */}
          <div className="flex items-center gap-1.5">
            {[...Array(6)].map((_, i) => (
              <span 
                key={i} 
                className={`rounded-full transition-all ${
                  i === 2 ? 'w-6 h-2 bg-[#C8102E]' : 'w-2 h-2 bg-black/20'
                }`} 
              />
            ))}
          </div>
        </div>

        {/* Giant Typographic Line: "CRAFTED" / small "by" / "[BRAND NAME]" */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-12">
          
          <div className="lg:col-span-8 text-left">
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#C8102E] font-bold red-dot block mb-3">
              {ABOUT_STATEMENT.badge}
            </span>

            <div className="flex flex-wrap items-baseline gap-3 sm:gap-5 leading-none">
              <span className="font-display text-5xl sm:text-8xl lg:text-9xl font-black uppercase tracking-tight text-[#0A0A0A]">
                {ABOUT_STATEMENT.titleBig}
              </span>
              <span className="font-mono text-xl sm:text-3xl text-[#C8102E] font-bold lowercase italic">
                {ABOUT_STATEMENT.titleSmall}
              </span>
              <span className="font-display text-5xl sm:text-8xl lg:text-9xl font-black uppercase tracking-tight text-[#C8102E]">
                {BRAND.name}
              </span>
            </div>
          </div>

          {/* Right Column: Red-Icon Label + Short Paragraph */}
          <div className="lg:col-span-4 pl-0 lg:pl-6 border-l-0 lg:border-l border-black/15">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-5 h-5 rounded-sm bg-[#C8102E] flex items-center justify-center text-white">
                <Plus className="w-3.5 h-3.5 stroke-[3]" />
              </div>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#0A0A0A]">
                WHO WE ARE & HOW WE DO IT
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
              {ABOUT_STATEMENT.bodyText}
            </p>
          </div>

        </div>

      </div>

    </section>
  );
};
