import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Video, Megaphone, CheckCircle2 } from 'lucide-react';
import { Badge } from '../common/Badge';
import { useApp } from '../../context/ThemeLanguageContext';

export const HeroSection: React.FC = () => {
  const { t, setCurrentPage, language } = useApp();

  return (
    <section id="overview" className="relative pt-32 sm:pt-40 pb-16 overflow-hidden bg-[#F8F9FC] dark:bg-[#07090E] bg-grid-oversight transition-colors duration-300">
      
      {/* Decorative Organic Ambient Glow */}
      <div className="absolute top-10 right-0 w-[600px] h-[600px] bg-[#E9DCFB] dark:bg-blue-600/15 rounded-full blur-[140px] pointer-events-none -z-0 transition-colors" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#EDE5FA] dark:bg-purple-600/15 rounded-full blur-[120px] pointer-events-none -z-0 transition-colors" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center">
        
        {/* Top Announcement Strip */}
        <div className="flex items-center justify-center mb-6">
          <Badge variant="lime">
            {t.hero.badge}
          </Badge>
        </div>

        {/* Main Hero Card Container: Deep Royal Purple in Day Mode, Forma AI Frosted Obsidian in Night Mode */}
        <div className="card-purple p-8 sm:p-14 lg:p-16 relative overflow-hidden mb-10 shadow-[0_25px_60px_-15px_rgba(45,14,96,0.25)] dark:shadow-[0_0_50px_rgba(59,130,246,0.25)]">
          
          {/* Subtle curved background glow circles */}
          <div className="absolute -right-20 -bottom-20 w-[450px] h-[450px] rounded-full border-[40px] border-white/[0.04] dark:border-blue-400/[0.08] pointer-events-none" />
          <div className="absolute -left-20 top-0 w-[300px] h-[300px] rounded-full border-[25px] border-white/[0.03] dark:border-purple-400/[0.06] pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center max-w-3xl mx-auto">
            
            {/* Key Advantage Pill */}
            <div className="mb-4">
              <span className="badge-lime-pill">
                {t.hero.keyAdvantage}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15] mb-6">
              {t.hero.headlinePrefix} <br />
              <span className="text-[#D8FC38] drop-shadow-[0_2px_15px_rgba(216,252,56,0.4)]">
                {t.hero.headlineHighlight}
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-sm sm:text-lg text-purple-100 dark:text-slate-300 max-w-2xl leading-relaxed mb-8 font-normal">
              {t.hero.supporting}
            </p>

            {/* CTA Buttons: Neon Lime Pill + Transparent Glass Pill */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 w-full sm:w-auto mb-10">
              <button
                onClick={() => setCurrentPage('packages')}
                className="btn-lime px-8 py-4 text-center text-xs sm:text-sm font-black uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-xl hover:scale-105"
              >
                <span>{t.hero.exploreBtn}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => setCurrentPage('order')}
                className="bg-white/15 hover:bg-white/25 text-white border border-white/25 px-7 py-4 rounded-full text-center text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-2 cursor-pointer backdrop-blur-md hover:scale-105"
              >
                <Sparkles className="w-4 h-4 text-[#D8FC38]" />
                <span>{language === 'hi' ? '15 रील्स कैंपेन बुक करें' : 'Book 15 Reels Campaign'}</span>
              </button>
            </div>

            {/* 3 Core Trust Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full max-w-xl pt-6 border-t border-white/15">
              {t.hero.pills.map((pill, idx) => (
                <div key={idx} className="card-violet-pill py-3 px-3 text-center">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-[#D8FC38] block font-mono">
                    {pill.top}
                  </span>
                  <span className="text-xs font-semibold text-white">
                    {pill.bottom}
                  </span>
                </div>
              ))}
            </div>

          </div>

        </div>

        {/* Quick Spotlight of 2 Live Core Available Packages */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
          
          {/* Spotlight 1: 15 Reels Package */}
          <div
            onClick={() => setCurrentPage('packages')}
            className="card-white p-4 sm:p-5 rounded-2xl flex items-center justify-between cursor-pointer hover:border-[#3C147A]/30 dark:hover:border-[#D8FC38]/40 transition-all text-left group"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#EDE5FA] dark:bg-white/10 flex items-center justify-center text-[#3C147A] dark:text-[#D8FC38] shrink-0">
                <Video className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-mono font-bold uppercase text-[#7C3AED] dark:text-[#D8FC38] block">
                  RECOMMENDED REEL PACK
                </span>
                <span className="text-sm font-bold text-[#17092F] dark:text-white group-hover:text-[#3C147A] dark:group-hover:text-[#D8FC38] transition-colors">
                  15 Strategic Reels (₹6,000)
                </span>
              </div>
            </div>
            <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 group-hover:text-[#3C147A] dark:group-hover:text-[#D8FC38] transition-transform" />
          </div>

          {/* Spotlight 2: 15 Reels Ad Campaigns */}
          <div
            onClick={() => setCurrentPage('packages')}
            className="card-white p-4 sm:p-5 rounded-2xl flex items-center justify-between cursor-pointer hover:border-[#3C147A]/30 dark:hover:border-blue-400/40 transition-all text-left group"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#EDE5FA] dark:bg-white/10 flex items-center justify-center text-[#3C147A] dark:text-[#D8FC38] shrink-0">
                <Megaphone className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-mono font-bold uppercase text-[#7C3AED] dark:text-[#D8FC38] block">
                  RECOMMENDED AD PACK
                </span>
                <span className="text-sm font-bold text-[#17092F] dark:text-white group-hover:text-[#3C147A] dark:group-hover:text-[#D8FC38] transition-colors">
                  15 Reels Ad Campaigns (₹6,000)
                </span>
              </div>
            </div>
            <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 group-hover:text-[#3C147A] dark:group-hover:text-[#D8FC38] transition-transform" />
          </div>

        </div>

      </div>
    </section>
  );
};
