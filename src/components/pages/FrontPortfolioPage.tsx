import React, { useState } from 'react';
import { 
  ShieldCheck, Sparkles, ArrowRight, CheckCircle2, 
  MapPin, Users, Award, TrendingUp, Lock, Zap, 
  Target, Video, MessageCircle, Play, Globe, Check,
  BarChart3, Star
} from 'lucide-react';
import { TRANSLATIONS, Language } from '../../data/translations';
import { AnimatedCounter } from '../common/AnimatedCounter';
import { ReelModal } from '../common/ReelModal';

interface FrontPortfolioPageProps {
  onOpenPortal: () => void;
  onOpenAdmin: () => void;
}

export const FrontPortfolioPage: React.FC<FrontPortfolioPageProps> = ({ 
  onOpenPortal,
  onOpenAdmin
}) => {
  const [lang, setLang] = useState<Language>('en');
  const t = TRANSLATIONS[lang];

  // Active Portfolio Filter: 'all' | 'cafes' | 'clothing'
  const [activeFilter, setActiveFilter] = useState<'all' | 'cafes' | 'clothing'>('all');

  // Selected reel for video modal preview
  const [selectedCase, setSelectedCase] = useState<any | null>(null);

  const toggleLanguage = () => {
    setLang(prev => (prev === 'hi' ? 'en' : 'hi'));
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const filteredCases = t.portfolio.cases.filter(item => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'cafes') return item.category === 'Cafes';
    if (activeFilter === 'clothing') return item.category === 'Clothing';
    return true;
  });

  return (
    <div className="min-h-screen bg-white text-[#191C21] font-sans antialiased relative overflow-x-hidden w-full max-w-full selection:bg-[#E84025] selection:text-white">
      
      {/* ======================================================== */}
      {/* 1. TOP NAVBAR (Compact, Clean BrandBuzz Style)           */}
      {/* ======================================================== */}
      <header className="sticky top-0 z-40 py-3 px-4 sm:px-8 bg-white/95 border-b border-orange-100/60 backdrop-blur-md transition-all">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Logo without any clutter subtitle */}
          <a href="#" className="flex items-center gap-2.5 group focus:outline-none cursor-pointer">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-[#E84025] to-[#FF6B3D] flex items-center justify-center font-bold text-white shadow-[0_4px_12px_rgba(232,64,37,0.3)] group-hover:scale-105 transition-transform">
              <span className="text-lg leading-none font-black">+</span>
            </div>
            <span className="font-heading-modern text-xl sm:text-2xl font-black text-[#1A1D20] tracking-tight leading-none">
              RONIN<span className="text-[#E84025]">MEDIA</span>
            </span>
          </a>

          {/* Center Links */}
          <nav className="hidden md:flex items-center gap-7 text-xs sm:text-sm font-semibold text-gray-600">
            <button onClick={() => scrollTo('services')} className="hover:text-[#E84025] transition-colors cursor-pointer">
              {t.nav.powers}
            </button>
            <button onClick={() => scrollTo('process')} className="hover:text-[#E84025] transition-colors cursor-pointer">
              {t.nav.enhancements}
            </button>
            <button onClick={() => scrollTo('agency')} className="hover:text-[#E84025] transition-colors cursor-pointer">
              {t.nav.about}
            </button>
            <button onClick={() => scrollTo('portfolio')} className="hover:text-[#E84025] transition-colors cursor-pointer">
              {t.nav.portfolio}
            </button>
          </nav>

          {/* Right Header: Language Switch + Pill CTA */}
          <div className="flex items-center gap-2.5">
            
            {/* 🌐 1-Click Language Switcher */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-orange-50 hover:bg-orange-100 text-xs font-semibold text-[#E84025] transition-all cursor-pointer border border-orange-200/60"
              title={lang === 'en' ? 'हिन्दी में देखें' : 'Switch to English'}
            >
              <Globe className="w-3.5 h-3.5" />
              <span className="font-bold">{lang === 'en' ? 'हिन्दी' : 'English'}</span>
            </button>

            {/* Login & Sign Up Button */}
            <button
              onClick={onOpenPortal}
              className="px-4 sm:px-6 py-2 sm:py-2.5 rounded-full bg-gradient-to-r from-[#E84025] to-[#FF5B26] hover:from-[#d3361d] hover:to-[#eb4c1a] text-white text-xs font-bold uppercase tracking-wider shadow-[0_4px_16px_rgba(232,64,37,0.3)] transition-all cursor-pointer hover:scale-105 flex items-center gap-1.5"
            >
              <Lock className="w-3 h-3" />
              <span>{t.nav.loginSignUp}</span>
            </button>

          </div>

        </div>
      </header>

      {/* ======================================================== */}
      {/* 2. HERO SECTION (Compact, No Overflow, Removed Tag)      */}
      {/* ======================================================== */}
      <section className="relative pt-6 sm:pt-10 pb-10 sm:pb-12 px-4 sm:px-8 max-w-7xl mx-auto overflow-hidden">
        
        {/* Soft Background Accent */}
        <div className="absolute top-6 left-6 w-2.5 h-2.5 rounded-full bg-orange-200 opacity-60" />
        <div className="absolute top-1/2 right-6 w-3 h-3 rounded-full bg-orange-200 opacity-50" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Hero Column */}
          <div className="lg:col-span-7 space-y-4 text-left min-w-0">
            
            {/* Main Headline */}
            <h1 className="font-heading-modern text-3xl sm:text-5xl lg:text-6xl font-black text-[#191C21] tracking-tight leading-[1.1]">
              {t.hero.headlinePart1}{' '}
              <span className="text-[#E84025] inline-block">
                {t.hero.headlineHighlight}
              </span>{' '}
              {t.hero.headlinePart2}
            </h1>

            {/* Description */}
            <p className="text-sm sm:text-base text-gray-600 font-normal leading-relaxed max-w-xl">
              {t.hero.description}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <button
                onClick={onOpenPortal}
                className="px-6 sm:px-8 py-3 rounded-full bg-gradient-to-r from-[#E84025] to-[#FF5B26] hover:from-[#d3361d] hover:to-[#eb4c1a] text-white text-xs sm:text-sm font-bold shadow-[0_6px_20px_rgba(232,64,37,0.3)] transition-all cursor-pointer hover:scale-105"
              >
                {t.hero.portalBtn}
              </button>

              <button
                onClick={() => scrollTo('services')}
                className="px-5 py-3 rounded-full bg-gray-50 hover:bg-gray-100 text-gray-700 text-xs sm:text-sm font-semibold border border-gray-200 transition-all cursor-pointer flex items-center gap-2"
              >
                <span>{t.hero.exploreBtn}</span>
              </button>
            </div>

            {/* 4 Animated Metric Counters */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-gray-100">
              <div className="p-2 rounded-xl bg-orange-50/50">
                <span className="font-heading-modern text-2xl sm:text-3xl font-extrabold text-[#E84025] block leading-none">
                  <AnimatedCounter target={250} suffix="+" duration={1600} delay={200} />
                </span>
                <span className="text-[11px] text-gray-500 font-medium block mt-1 leading-tight">{t.stats.campaigns.label}</span>
              </div>

              <div className="p-2 rounded-xl bg-gray-50">
                <span className="font-heading-modern text-2xl sm:text-3xl font-extrabold text-[#191C21] block leading-none">
                  <AnimatedCounter target={3} suffix=" Yrs" prefix="2-" duration={1200} delay={300} />
                </span>
                <span className="text-[11px] text-gray-500 font-medium block mt-1 leading-tight">{t.stats.experience.label}</span>
              </div>

              <div className="p-2 rounded-xl bg-orange-50/50">
                <span className="font-heading-modern text-2xl sm:text-3xl font-extrabold text-[#E84025] block leading-none">
                  <AnimatedCounter target={1.2} suffix="M+" decimals={1} duration={1400} delay={400} />
                </span>
                <span className="text-[11px] text-gray-500 font-medium block mt-1 leading-tight">{t.stats.reach.label}</span>
              </div>

              <div className="p-2 rounded-xl bg-amber-50/50">
                <span className="font-heading-modern text-2xl sm:text-3xl font-extrabold text-amber-500 block leading-none">
                  <AnimatedCounter target={4.9} suffix="★" decimals={1} duration={1200} delay={500} />
                </span>
                <span className="text-[11px] text-gray-500 font-medium block mt-1 leading-tight">{t.stats.rating.label}</span>
              </div>
            </div>

          </div>

          {/* Right Hero Column: 3D Illustration Card */}
          <div className="lg:col-span-5 relative flex justify-center items-center min-w-0">
            <div className="relative w-full max-w-sm sm:max-w-md bg-white rounded-3xl p-4 sm:p-5 shadow-[0_15px_40px_rgba(232,64,37,0.1)] border border-orange-100/80">
              
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-gradient-to-br from-orange-50 to-amber-100/50 mb-4 flex items-center justify-center">
                <img
                  src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=700&q=80"
                  alt="Café & Local Store Strategy"
                  className="w-full h-full object-cover rounded-xl"
                  loading="eager"
                />
                
                {/* Floating Badge 1 */}
                <div className="absolute top-2.5 left-2.5 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full shadow-md border border-orange-100 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#E84025] animate-ping" />
                  <span className="text-[11px] font-bold text-gray-800">5-10km Radius</span>
                </div>

                {/* Floating Badge 2 */}
                <div className="absolute bottom-2.5 right-2.5 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-xl shadow-lg border border-orange-100 flex items-center gap-2">
                  <div className="w-5 h-5 rounded-md bg-emerald-500 text-white flex items-center justify-center font-bold text-[10px]">
                    ✓
                  </div>
                  <div>
                    <span className="text-[9px] text-gray-400 uppercase font-bold block leading-none">WhatsApp</span>
                    <span className="text-[11px] font-bold text-emerald-600 leading-none">+142 Inquiries</span>
                  </div>
                </div>
              </div>

              {/* Bottom Card Copy */}
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-sm sm:text-base font-bold text-[#191C21]">Performance Ad Engine</h4>
                  <p className="text-[11px] text-gray-500">Reels Production + Meta Ad Sets</p>
                </div>
                <span className="px-2.5 py-0.5 rounded-full bg-orange-100 text-[#E84025] text-xs font-bold">
                  Active
                </span>
              </div>

            </div>
          </div>

        </div>

      </section>

      {/* ======================================================== */}
      {/* 3. "WE PROVIDE THE BEST SERVICES" (Tight, Compact Cards)  */}
      {/* ======================================================== */}
      <section id="services" className="py-10 sm:py-12 px-4 sm:px-8 max-w-7xl mx-auto text-center overflow-hidden">
        
        <div className="max-w-2xl mx-auto mb-8">
          <span className="text-[11px] font-bold uppercase tracking-widest text-[#E84025] block mb-1">
            {t.powers.badge}
          </span>
          <h2 className="font-heading-modern text-2xl sm:text-4xl font-extrabold text-[#191C21]">
            We Provide The Best <span className="text-[#E84025]">Services</span>
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 mt-2">
            {t.powers.subheading}
          </p>
        </div>

        {/* 4 Clean Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          
          {/* Service 1 */}
          <div className="p-5 sm:p-6 rounded-2xl bg-white border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_10px_30px_rgba(232,64,37,0.08)] transition-all text-left flex flex-col justify-between group">
            <div>
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center font-bold mb-4 group-hover:scale-105 transition-transform">
                <Video className="w-5 h-5" />
              </div>
              <h3 className="font-heading-modern text-base font-bold text-[#191C21] mb-1.5">
                {t.powers.power1.title}
              </h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                {t.powers.power1.desc}
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-[#E84025]">
              <span>65%+ Retention</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Service 2 */}
          <div className="p-5 sm:p-6 rounded-2xl bg-white border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_10px_30px_rgba(232,64,37,0.08)] transition-all text-left flex flex-col justify-between group">
            <div>
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold mb-4 group-hover:scale-105 transition-transform">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="font-heading-modern text-base font-bold text-[#191C21] mb-1.5">
                {t.powers.power2.title}
              </h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                {t.powers.power2.desc}
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-[#E84025]">
              <span>Offer Posts & Banners</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Service 3 */}
          <div className="p-5 sm:p-6 rounded-2xl bg-white border-2 border-orange-200/90 shadow-[0_8px_25px_rgba(232,64,37,0.08)] transition-all text-left flex flex-col justify-between group relative">
            <span className="absolute -top-2.5 right-4 px-2.5 py-0.5 rounded-full bg-[#E84025] text-white text-[9px] font-bold uppercase">
              Core Power
            </span>
            <div>
              <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center font-bold mb-4 group-hover:scale-105 transition-transform">
                <Target className="w-5 h-5" />
              </div>
              <h3 className="font-heading-modern text-base font-bold text-[#191C21] mb-1.5">
                {t.powers.power3.title}
              </h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                {t.powers.power3.desc}
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-[#E84025]">
              <span>WhatsApp Inquiries</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Service 4 */}
          <div className="p-5 sm:p-6 rounded-2xl bg-white border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_10px_30px_rgba(232,64,37,0.08)] transition-all text-left flex flex-col justify-between group">
            <div>
              <div className="w-10 h-10 rounded-xl bg-orange-100 text-[#E84025] flex items-center justify-center font-bold mb-4 group-hover:scale-105 transition-transform">
                <BarChart3 className="w-5 h-5" />
              </div>
              <h3 className="font-heading-modern text-base font-bold text-[#191C21] mb-1.5">
                {t.powers.digitalMarketingBonus.title}
              </h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                {t.powers.digitalMarketingBonus.desc}
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-[#E84025]">
              <span>Retargeting & Pixel</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

        </div>

      </section>

      {/* ======================================================== */}
      {/* 4. "SIMPLE SOLUTIONS!" (Compact 4-Step Process)         */}
      {/* ======================================================== */}
      <section id="process" className="py-10 sm:py-12 px-4 sm:px-8 bg-[#FFF6F2] relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Visual */}
            <div className="lg:col-span-5 relative flex justify-center min-w-0">
              <div className="w-full max-w-sm rounded-2xl overflow-hidden shadow-lg bg-white p-2.5 border border-orange-200/50">
                <img
                  src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=700&q=80"
                  alt="Clothing Store Growth"
                  className="w-full h-64 object-cover rounded-xl"
                  loading="lazy"
                />
                <div className="p-3 bg-white">
                  <span className="text-[10px] font-bold text-[#E84025] uppercase tracking-wider block">Clothing & Retail Stores</span>
                  <p className="text-xs sm:text-sm font-bold text-gray-800 mt-0.5">70% New Stock Sold Out in 48 Hours</p>
                </div>
              </div>
            </div>

            {/* Right Column: 4 Numbered Steps */}
            <div className="lg:col-span-7 space-y-4 text-left min-w-0">
              
              <h2 className="font-heading-modern text-2xl sm:text-4xl font-extrabold text-[#191C21]">
                Simple <span className="text-[#E84025]">Solutions!</span>
              </h2>
              
              <p className="text-xs sm:text-sm text-gray-600 font-normal leading-relaxed">
                {t.enhancements.subheading}
              </p>

              {/* 4 Numbered Circular Steps */}
              <div className="space-y-2.5 pt-1">
                {t.enhancements.items.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-2.5 rounded-xl bg-white/80 border border-orange-100 hover:bg-white transition-all">
                    <div className="w-6 h-6 rounded-full bg-[#E84025] text-white flex items-center justify-center font-bold text-[11px] shrink-0 shadow-sm">
                      {idx + 1}
                    </div>
                    <div className="min-w-0">
                      <h4 className="text-xs sm:text-sm font-bold text-gray-900 leading-snug">{item.title} ({item.forWho})</h4>
                      <p className="text-[11px] text-gray-500 mt-0.5 leading-relaxed">{item.desc}</p>
                      <span className="text-[10px] font-semibold text-[#E84025] mt-0.5 block">✓ {item.benefit}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <button
                  onClick={onOpenPortal}
                  className="px-6 py-2.5 rounded-full bg-gradient-to-r from-[#E84025] to-[#FF5B26] text-white text-xs font-bold uppercase tracking-wider shadow-md hover:scale-105 transition-all cursor-pointer"
                >
                  Get Started →
                </button>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ======================================================== */}
      {/* 5. "OUR AGENCY" (Compact & Clean like Reference)         */}
      {/* ======================================================== */}
      <section id="agency" className="py-10 sm:py-12 px-4 sm:px-8 max-w-7xl mx-auto overflow-hidden">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left: Text */}
          <div className="lg:col-span-7 space-y-4 text-left min-w-0">
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#E84025] block">
              {t.motive.badge}
            </span>
            <h2 className="font-heading-modern text-2xl sm:text-4xl font-extrabold text-[#191C21]">
              Our <span className="text-[#E84025]">Agency</span>
            </h2>

            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
              {t.motive.story}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <div className="p-3 rounded-xl bg-red-50/70 border border-red-100">
                <span className="text-xs font-bold text-red-600 block mb-0.5">{t.motive.boostTrapTitle}</span>
                <p className="text-[11px] text-gray-600 leading-relaxed">{t.motive.boostTrapDesc}</p>
              </div>

              <div className="p-3 rounded-xl bg-emerald-50/70 border border-emerald-100">
                <span className="text-xs font-bold text-emerald-600 block mb-0.5">{t.motive.ourSolutionTitle}</span>
                <p className="text-[11px] text-gray-600 leading-relaxed">{t.motive.ourSolutionDesc}</p>
              </div>
            </div>

            <p className="text-xs font-semibold text-gray-800 pt-1">
              {t.motive.conclusion}
            </p>
          </div>

          {/* Right: Desk & Charts Illustration Visual */}
          <div className="lg:col-span-5 flex justify-center min-w-0">
            <div className="w-full max-w-sm rounded-2xl bg-gradient-to-br from-orange-50 to-amber-50 p-4 sm:p-5 border border-orange-200/50 shadow-lg space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-orange-200/50">
                <span className="text-xs font-bold text-gray-700">Campaign Growth Analytics</span>
                <span className="text-xs font-bold text-[#E84025]">+240%</span>
              </div>

              <div className="h-32 rounded-xl bg-white p-3 shadow-sm flex items-end justify-between gap-3">
                <div className="w-full bg-orange-100 rounded-t-md h-[40%]" />
                <div className="w-full bg-orange-200 rounded-t-md h-[60%]" />
                <div className="w-full bg-orange-300 rounded-t-md h-[75%]" />
                <div className="w-full bg-[#E84025] rounded-t-md h-[95%]" />
              </div>

              <div className="flex justify-between text-[10px] text-gray-500 font-medium px-1">
                <span>Week 1</span>
                <span>Week 2</span>
                <span>Week 3</span>
                <span className="font-bold text-[#E84025]">Week 4</span>
              </div>
            </div>
          </div>

        </div>

      </section>

      {/* ======================================================== */}
      {/* 6. "WHAT CLIENTS SAY!" (Compact 5-Star Reviews & Reels) */}
      {/* ======================================================== */}
      <section id="portfolio" className="py-10 sm:py-12 px-4 sm:px-8 bg-[#FFF6F2] overflow-hidden">
        <div className="max-w-7xl mx-auto text-center">
          
          <div className="max-w-2xl mx-auto mb-6">
            <h2 className="font-heading-modern text-2xl sm:text-4xl font-extrabold text-[#191C21]">
              What <span className="text-[#E84025]">Clients</span> Say!
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 mt-1">
              {t.portfolio.subheading}
            </p>

            {/* Filter Tabs */}
            <div className="flex items-center justify-center gap-2 mt-4">
              <button
                onClick={() => setActiveFilter('all')}
                className={`px-3 py-1 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  activeFilter === 'all' ? 'bg-[#E84025] text-white shadow-sm' : 'bg-white text-gray-600 border border-gray-200'
                }`}
              >
                {t.portfolio.filterAll}
              </button>
              <button
                onClick={() => setActiveFilter('cafes')}
                className={`px-3 py-1 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  activeFilter === 'cafes' ? 'bg-[#E84025] text-white shadow-sm' : 'bg-white text-gray-600 border border-gray-200'
                }`}
              >
                {t.portfolio.filterCafes}
              </button>
              <button
                onClick={() => setActiveFilter('clothing')}
                className={`px-3 py-1 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  activeFilter === 'clothing' ? 'bg-[#E84025] text-white shadow-sm' : 'bg-white text-gray-600 border border-gray-200'
                }`}
              >
                {t.portfolio.filterClothing}
              </button>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left">
            {filteredCases.map((item) => (
              <div 
                key={item.id}
                onClick={() => setSelectedCase(item)}
                className="bg-white rounded-2xl overflow-hidden border border-orange-100 shadow-[0_4px_16px_rgba(232,64,37,0.05)] hover:shadow-[0_10px_30px_rgba(232,64,37,0.12)] transition-all cursor-pointer group flex flex-col justify-between hover:-translate-y-1"
              >
                {/* Media Image */}
                <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                  <img
                    src={item.image}
                    alt={item.client}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-2 right-2 px-2 py-0.5 rounded-full bg-[#E84025] text-white text-[9px] font-bold uppercase shadow-sm">
                    {item.categoryLabel}
                  </div>
                  
                  {/* Play Reel Hover Overlay */}
                  <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-white text-[#E84025] flex items-center justify-center shadow-md">
                      <Play className="w-4 h-4 fill-current translate-x-0.5" />
                    </div>
                  </div>
                </div>

                {/* Details */}
                <div className="p-4 space-y-2">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-current" />
                    ))}
                  </div>

                  <div>
                    <h4 className="text-sm font-bold text-gray-900 group-hover:text-[#E84025] transition-colors leading-snug">
                      {item.client}
                    </h4>
                    <span className="text-[11px] text-gray-400 block">{item.location}</span>
                  </div>

                  <p className="text-[11px] text-gray-600 line-clamp-2">
                    "{item.resultDetail}"
                  </p>

                  <div className="pt-2 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-[#E84025]">
                    <span>{item.resultMetric}</span>
                    <span className="text-[10px] underline">Watch Reel ↗</span>
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ======================================================== */}
      {/* 7. "READY TO GET STARTED?" (Compact Orange CTA Banner)  */}
      {/* ======================================================== */}
      <section className="py-8 sm:py-10 px-4 sm:px-8 max-w-7xl mx-auto overflow-hidden">
        <div className="rounded-2xl bg-gradient-to-r from-[#E84025] to-[#FF5B26] p-6 sm:p-8 shadow-[0_10px_30px_rgba(232,64,37,0.25)] flex flex-col sm:flex-row items-center justify-between gap-4 text-white text-center sm:text-left">
          <div>
            <h2 className="font-heading-modern text-2xl sm:text-3xl font-extrabold">
              Ready to get started?
            </h2>
            <p className="text-xs sm:text-sm text-white/90 mt-1 max-w-md">
              Scale your store footfall and café tables with high-converting reels & hyper-local Meta ads.
            </p>
          </div>

          <button
            onClick={onOpenPortal}
            className="px-6 py-3 rounded-full bg-white text-[#E84025] text-xs font-bold uppercase tracking-wider shadow-md hover:bg-orange-50 transition-all cursor-pointer hover:scale-105 shrink-0"
          >
            Access Customer Portal →
          </button>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 8. FOOTER (Clean, Compact, No Admin Leaks)              */}
      {/* ======================================================== */}
      <footer className="pt-8 pb-6 px-4 sm:px-8 bg-[#FFF6F2] border-t border-orange-100 text-xs text-gray-500 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 mb-6 text-left">
          
          <div className="col-span-2 space-y-2">
            <span className="font-heading-modern text-xl font-black text-[#1A1D20] block">
              RONIN<span className="text-[#E84025]">MEDIA</span>
            </span>
            <p className="text-xs text-gray-500 max-w-xs leading-relaxed">
              Performance video creatives and 5-10km hyper-local Meta advertising.
            </p>
          </div>

          <div>
            <span className="font-bold text-gray-800 uppercase block mb-2 text-xs">Navigation</span>
            <ul className="space-y-1.5 text-xs">
              <li><button onClick={() => scrollTo('services')} className="hover:text-[#E84025]">Services</button></li>
              <li><button onClick={() => scrollTo('process')} className="hover:text-[#E84025]">Solutions</button></li>
              <li><button onClick={() => scrollTo('agency')} className="hover:text-[#E84025]">About Us</button></li>
            </ul>
          </div>

          <div>
            <span className="font-bold text-gray-800 uppercase block mb-2 text-xs">Portal Access</span>
            <ul className="space-y-1.5 text-xs">
              <li><button onClick={onOpenPortal} className="text-[#E84025] font-bold hover:underline">Client Login</button></li>
              <li><button onClick={() => { setActiveFilter('all'); scrollTo('portfolio'); }} className="hover:text-[#E84025]">Portfolio</button></li>
            </ul>
          </div>

        </div>

        <div className="max-w-7xl mx-auto pt-4 border-t border-orange-200/50 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <span>© 2026 RONIN MEDIA. All rights reserved.</span>
          <button onClick={toggleLanguage} className="text-[#E84025] font-bold hover:underline">
            {lang === 'en' ? '🌐 Switch to हिन्दी' : '🌐 Switch to English'}
          </button>
        </div>
      </footer>

      {/* Reel Preview Modal */}
      <ReelModal
        isOpen={Boolean(selectedCase)}
        onClose={() => setSelectedCase(null)}
        caseItem={selectedCase}
      />

    </div>
  );
};