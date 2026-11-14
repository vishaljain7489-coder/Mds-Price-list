import React from 'react';
import { ArrowLeft, ArrowRight, Plus, MapPin, Calendar, Clock, Check, Sparkles } from 'lucide-react';
import { WHAT_WE_DO, BRAND } from '../../content';
import { AnimeMascot } from '../mascot/AnimeMascot';

interface WhatWeDoBookingSectionProps {
  onBookNow: () => void;
}

export const WhatWeDoBookingSection: React.FC<WhatWeDoBookingSectionProps> = ({ onBookNow }) => {
  return (
    <section className="section-white relative bg-white text-[#0A0A0A] py-24 sm:py-32 px-4 sm:px-8 overflow-hidden border-t border-black/10">
      
      {/* Background Poster Texture */}
      <div className="absolute inset-0 manga-dots-dark opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* TOP META ROW: 01-04 INDEX NUMBERS + AVATAR STACK + MINI ARROWS + ROTATING NUMBER STICKER */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-8 border-b border-black/10 mb-16">
          
          {/* Index Numbers Across Top: 01, 02, 03, 04 */}
          <div className="flex items-center gap-6 sm:gap-10 text-xs font-mono font-bold">
            {WHAT_WE_DO.steps.map((step, i) => (
              <div key={step.num} className="flex items-center gap-2 group cursor-pointer">
                <span className={`text-sm ${i === 0 ? 'text-[#C8102E]' : 'text-slate-400 group-hover:text-black'}`}>
                  {step.num}
                </span>
                <span className="hidden md:inline uppercase text-[10px] text-slate-500 group-hover:text-black">
                  {step.title}
                </span>
              </div>
            ))}
          </div>

          {/* Right Group: Avatar Stack + Arrows + Rotating Sticker */}
          <div className="flex items-center gap-4">
            {/* Small Avatar Stack */}
            <div className="flex items-center -space-x-2">
              <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80" alt="Avatar" className="w-7 h-7 rounded-full border-2 border-white object-cover" />
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80" alt="Avatar" className="w-7 h-7 rounded-full border-2 border-white object-cover" />
              <div className="w-7 h-7 rounded-full bg-[#C8102E] text-white text-[9px] font-mono font-bold flex items-center justify-center border-2 border-white">
                +15
              </div>
            </div>

            {/* Two Thin Arrows (Black and Red) */}
            <div className="flex items-center gap-1">
              <button className="w-8 h-8 rounded-full border border-black/20 flex items-center justify-center text-black hover:bg-black hover:text-white transition-colors cursor-pointer">
                <ArrowLeft className="w-3.5 h-3.5" />
              </button>
              <button className="w-8 h-8 rounded-full bg-[#C8102E] text-white flex items-center justify-center hover:bg-[#a50b24] transition-colors cursor-pointer">
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Rotating Circular Sticker with Number on Right */}
            <div className="relative w-14 h-14 flex items-center justify-center shrink-0">
              <div className="absolute inset-0 animate-spin-slow">
                <svg viewBox="0 0 100 100" className="w-full h-full fill-black text-[9px] font-mono tracking-widest uppercase">
                  <path id="stickerCirclePath" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" fill="none" />
                  <text><textPath href="#stickerCirclePath">• SLOTS 2026 • BOOK •</textPath></text>
                </svg>
              </div>
              <span className="font-mono text-xs font-black text-[#C8102E]">#03</span>
            </div>

          </div>

        </div>

        {/* CENTER CONDENSED BOLD MULTI-LINE HEADING */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <span className="text-[11px] font-mono uppercase tracking-widest text-[#C8102E] font-bold red-dot block mb-3">
            {WHAT_WE_DO.badge}
          </span>
          <h2 className="font-display text-4xl sm:text-7xl font-black uppercase tracking-tight text-[#0A0A0A] leading-[0.95]">
            {WHAT_WE_DO.heading}
          </h2>
        </div>

        {/* 3-COLUMN COMPOSITION: LEFT TEXT + CENTER DARK PHONE BOOKING CARD + RIGHT TEXT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16 relative">
          
          {/* Left Column: REELS PROCESS */}
          <div className="lg:col-span-3 text-left space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-sm bg-[#C8102E] flex items-center justify-center text-white">
                <Plus className="w-3.5 h-3.5 stroke-[3]" />
              </div>
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#0A0A0A]">
                {WHAT_WE_DO.columns.reels.label}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
              {WHAT_WE_DO.columns.reels.text}
            </p>

            <div className="pt-3 border-t border-black/10 flex items-center gap-2 text-[11px] font-mono text-slate-500">
              <span>● 3-Second Pattern Interrupts</span>
            </div>
          </div>

          {/* Center Column: DARK PHONE-STYLE BOOKING CARD (ROUNDED 28PX) */}
          <div className="lg:col-span-6 flex justify-center relative">
            
            {/* The Mascot Peeks Out From Behind Card's Bottom-Right Corner */}
            <div className="absolute -bottom-10 -right-6 sm:-right-10 w-44 sm:w-52 pointer-events-none z-0 rotate-12">
              <AnimeMascot pose="main" />
            </div>

            {/* Main Dark Phone Card */}
            <div className="relative z-10 w-full max-w-md bg-[#171919] text-white p-7 sm:p-9 rounded-[28px] border-2 border-black shadow-[0_25px_60px_rgba(0,0,0,0.5)] flex flex-col justify-between">
              
              {/* Phone Speaker Notch Graphic */}
              <div className="w-20 h-1.5 bg-white/20 rounded-full mx-auto mb-6" />

              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-mono font-bold bg-[#C8102E] text-white px-2.5 py-1 rounded-full uppercase tracking-wider">
                    {WHAT_WE_DO.bookingCard.badge}
                  </span>
                  <span className="text-2xl font-black font-mono text-[#C8102E]">
                    {WHAT_WE_DO.bookingCard.price}
                  </span>
                </div>

                <h3 className="font-display text-2xl sm:text-3xl font-black uppercase tracking-wider text-white mb-1">
                  {WHAT_WE_DO.bookingCard.planName}
                </h3>
                <p className="text-xs font-mono text-slate-400 mb-6">
                  {WHAT_WE_DO.bookingCard.platform}
                </p>

                {/* Small Map / Graphic Tile Tile */}
                <div className="p-3.5 rounded-2xl bg-black/60 border border-white/10 mb-6 space-y-2 text-xs font-mono">
                  <div className="flex items-center gap-2 text-slate-300">
                    <MapPin className="w-3.5 h-3.5 text-[#C8102E]" />
                    <span>{WHAT_WE_DO.bookingCard.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-300">
                    <Calendar className="w-3.5 h-3.5 text-[#C8102E]" />
                    <span>{WHAT_WE_DO.bookingCard.startDate}</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-300">
                    <Clock className="w-3.5 h-3.5 text-[#C8102E]" />
                    <span>{WHAT_WE_DO.bookingCard.slotTime}</span>
                  </div>
                </div>
              </div>

              {/* Red "Book Now" Button */}
              <button
                onClick={onBookNow}
                className="w-full py-4 rounded-full bg-[#C8102E] hover:bg-[#a50b24] text-white font-mono text-xs sm:text-sm font-bold uppercase tracking-widest text-center shadow-[0_0_25px_rgba(200,16,46,0.5)] transition-all cursor-pointer hover:scale-102"
              >
                Book Now ↗
              </button>

            </div>

          </div>

          {/* Right Column: ADS PROCESS */}
          <div className="lg:col-span-3 text-left space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-sm bg-[#C8102E] flex items-center justify-center text-white">
                <Plus className="w-3.5 h-3.5 stroke-[3]" />
              </div>
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#0A0A0A]">
                {WHAT_WE_DO.columns.ads.label}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
              {WHAT_WE_DO.columns.ads.text}
            </p>

            <div className="pt-3 border-t border-black/10 flex items-center gap-2 text-[11px] font-mono text-slate-500">
              <span>● 100% Direct Card Spend</span>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
};
