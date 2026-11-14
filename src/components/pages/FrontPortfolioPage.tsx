import React, { useState } from 'react';
import { 
  ShieldCheck, Sparkles, ArrowRight, CheckCircle2, 
  MapPin, Users, Award, TrendingUp, Lock, Zap, 
  Target, Video, MessageCircle, AlertTriangle, ExternalLink,
  ChevronDown, Phone, UserCheck, Play, Globe, Check, Layers,
  Search, BarChart3, HelpCircle, Star
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
    <div className="min-h-screen bg-white text-[#1C1D21] font-sans antialiased relative overflow-x-hidden selection:bg-[#FF5520] selection:text-white">
      
      {/* ======================================================== */}
      {/* 1. TOP NAVBAR (Clean, white, with orange/red CTA)        */}
      {/* ======================================================== */}
      <header className="sticky top-0 z-40 py-4 px-6 sm:px-12 bg-white/95 border-b border-orange-100/60 backdrop-blur-md transition-all">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Logo with Red/Orange Icon */}
          <a href="#" className="flex items-center gap-2.5 group focus:outline-none cursor-pointer">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#E84025] to-[#FF6B3D] flex items-center justify-center font-bold text-white shadow-[0_4px_14px_rgba(232,64,37,0.35)] group-hover:scale-105 transition-transform">
              <span className="text-xl leading-none font-black">+</span>
            </div>
            <div>
              <span className="font-heading-modern text-2xl font-black text-[#1A1D20] tracking-tight block leading-none">
                RONIN<span className="text-[#E84025]">MEDIA</span>
              </span>
              <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest hidden sm:block">
                Reels · Posts · Meta Ads
              </span>
            </div>
          </a>

          {/* Center Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
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
          <div className="flex items-center gap-3">
            
            {/* 🌐 1-Click Language Switcher */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-orange-50 hover:bg-orange-100 text-xs font-medium text-[#E84025] transition-all cursor-pointer border border-orange-200/60"
              title={lang === 'en' ? 'हिन्दी में देखें' : 'Switch to English'}
            >
              <Globe className="w-3.5 h-3.5" />
              <span className="font-bold">{lang === 'en' ? 'हिन्दी' : 'English'}</span>
            </button>

            {/* Orange Pill Button */}
            <button
              onClick={onOpenPortal}
              className="px-6 py-2.5 rounded-full bg-gradient-to-r from-[#E84025] to-[#FF5B26] hover:from-[#d3361d] hover:to-[#eb4c1a] text-white text-xs font-bold uppercase tracking-wider shadow-[0_6px_20px_rgba(232,64,37,0.3)] transition-all cursor-pointer hover:scale-105 flex items-center gap-2"
            >
              <Lock className="w-3.5 h-3.5" />
              <span>{t.nav.loginSignUp}</span>
            </button>

          </div>

        </div>
      </header>

      {/* ======================================================== */}
      {/* 2. HERO SECTION (Clean White with 3D Illustration Vibe)   */}
      {/* ======================================================== */}
      <section className="relative pt-12 sm:pt-20 pb-20 px-6 sm:px-12 max-w-7xl mx-auto overflow-hidden">
        
        {/* Soft Background Warm Dots */}
        <div className="absolute top-10 left-10 w-3 h-3 rounded-full bg-orange-200 opacity-60" />
        <div className="absolute top-24 left-24 w-2 h-2 rounded-full bg-orange-300 opacity-40" />
        <div className="absolute top-1/2 right-12 w-4 h-4 rounded-full bg-orange-200 opacity-50" />
        <div className="absolute top-20 right-1/3 w-2 h-2 rounded-full bg-orange-400 opacity-40" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Column */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-50 text-[#E84025] text-xs font-bold uppercase tracking-wider border border-orange-200/50">
              <span className="w-2 h-2 rounded-full bg-[#E84025] animate-pulse" />
              <span>{t.hero.badge}</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-heading-modern text-4xl sm:text-6xl lg:text-7xl font-extrabold text-[#191C21] tracking-tight leading-[1.08]">
              {t.hero.headlinePart1}{' '}
              <span className="text-[#E84025] inline-block">
                {t.hero.headlineHighlight}
              </span>{' '}
              {t.hero.headlinePart2}
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-gray-600 font-normal leading-relaxed max-w-xl">
              {t.hero.description}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onOpenPortal}
                className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#E84025] to-[#FF5B26] hover:from-[#d3361d] hover:to-[#eb4c1a] text-white text-sm font-bold shadow-[0_8px_25px_rgba(232,64,37,0.35)] transition-all cursor-pointer hover:scale-105"
              >
                {t.hero.portalBtn}
              </button>

              <button
                onClick={() => scrollTo('services')}
                className="px-6 py-3.5 rounded-full bg-gray-50 hover:bg-gray-100 text-gray-700 text-sm font-bold border border-gray-200 transition-all cursor-pointer flex items-center gap-2"
              >
                <span>{t.hero.exploreBtn}</span>
              </button>
            </div>

            {/* 4 Animated Metric Counters */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-gray-100">
              <div>
                <span className="font-heading-modern text-3xl font-extrabold text-[#E84025] block">
                  <AnimatedCounter target={250} suffix="+" duration={1600} delay={200} />
                </span>
                <span className="text-xs text-gray-500 font-medium block mt-0.5">{t.stats.campaigns.label}</span>
              </div>

              <div>
                <span className="font-heading-modern text-3xl font-extrabold text-[#191C21] block">
                  <AnimatedCounter target={3} suffix=" Years" prefix="2-" duration={1200} delay={300} />
                </span>
                <span className="text-xs text-gray-500 font-medium block mt-0.5">{t.stats.experience.label}</span>
              </div>

              <div>
                <span className="font-heading-modern text-3xl font-extrabold text-[#E84025] block">
                  <AnimatedCounter target={1.2} suffix="M+" decimals={1} duration={1400} delay={400} />
                </span>
                <span className="text-xs text-gray-500 font-medium block mt-0.5">{t.stats.reach.label}</span>
              </div>

              <div>
                <span className="font-heading-modern text-3xl font-extrabold text-amber-500 block">
                  <AnimatedCounter target={4.9} suffix="★" decimals={1} duration={1200} delay={500} />
                </span>
                <span className="text-xs text-gray-500 font-medium block mt-0.5">{t.stats.rating.label}</span>
              </div>
            </div>

          </div>

          {/* Right Hero Column: 3D Illustration Visuals like reference */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            
            {/* Soft Warm Radial Backdrop */}
            <div className="absolute w-80 sm:w-96 h-80 sm:h-96 rounded-full bg-gradient-to-tr from-orange-100 to-amber-50 blur-2xl pointer-events-none -z-10" />

            {/* Main 3D Card Visual */}
            <div className="relative w-full max-w-md bg-white rounded-3xl p-6 shadow-[0_20px_50px_rgba(232,64,37,0.12)] border border-orange-100/80">
              
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-gradient-to-br from-orange-50 to-amber-100/50 mb-5 flex items-center justify-center p-4">
                <img
                  src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=700&q=80"
                  alt="Café & Local Store Strategy"
                  className="w-full h-full object-cover rounded-xl shadow-md"
                />
                
                {/* Floating 3D Badge 1 */}
                <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-full shadow-lg border border-orange-100 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#E84025] animate-ping" />
                  <span className="text-xs font-bold text-gray-800">5-10km Radius</span>
                </div>

                {/* Floating 3D Badge 2 */}
                <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-2xl shadow-xl border border-orange-100 flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-emerald-500 text-white flex items-center justify-center font-bold text-xs">
                    ✓
                  </div>
                  <div>
                    <span className="text-[10px] text-gray-400 uppercase font-bold block">WhatsApp Inquiries</span>
                    <span className="text-xs font-bold text-emerald-600">+142 New Chats</span>
                  </div>
                </div>
              </div>

              {/* Bottom Card Copy */}
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-base font-bold text-[#191C21]">Performance Ad Engine</h4>
                  <p className="text-xs text-gray-500">Reels Production + Meta Ad Sets</p>
                </div>
                <span className="px-3 py-1 rounded-full bg-orange-100 text-[#E84025] text-xs font-bold">
                  Active
                </span>
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ======================================================== */}
      {/* 3. "WE PROVIDE THE BEST SERVICES" (4 Rounded Clean Cards) */}
      {/* ======================================================== */}
      <section id="services" className="py-20 px-6 sm:px-12 max-w-7xl mx-auto text-center">
        
        <div className="max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E84025] block mb-2">
            {t.powers.badge}
          </span>
          <h2 className="font-heading-modern text-3xl sm:text-5xl font-extrabold text-[#191C21]">
            We Provide The Best <span className="text-[#E84025]">Services</span>
          </h2>
          <p className="text-sm text-gray-500 mt-3">
            {t.powers.subheading}
          </p>
        </div>

        {/* 4 Cards Grid like reference image */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Service 1: 3-Sec Viral Reels */}
          <div className="p-7 rounded-3xl bg-white border border-gray-100 shadow-[0_10px_35px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_45px_rgba(232,64,37,0.1)] hover:-translate-y-1.5 transition-all text-left flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center font-bold mb-6 group-hover:scale-110 transition-transform">
                <Video className="w-6 h-6" />
              </div>
              <h3 className="font-heading-modern text-lg font-bold text-[#191C21] mb-2">
                {t.powers.power1.title}
              </h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                {t.powers.power1.desc}
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-[#E84025]">
              <span>65%+ Watch Rate</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Service 2: Creative Posts & Banners */}
          <div className="p-7 rounded-3xl bg-white border border-gray-100 shadow-[0_10px_35px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_45px_rgba(232,64,37,0.1)] hover:-translate-y-1.5 transition-all text-left flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold mb-6 group-hover:scale-110 transition-transform">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="font-heading-modern text-lg font-bold text-[#191C21] mb-2">
                {t.powers.power2.title}
              </h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                {t.powers.power2.desc}
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-[#E84025]">
              <span>High-Converting Offers</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Service 3: 5-10km Meta Ads */}
          <div className="p-7 rounded-3xl bg-white border-2 border-orange-200/80 shadow-[0_15px_40px_rgba(232,64,37,0.12)] hover:-translate-y-1.5 transition-all text-left flex flex-col justify-between group relative">
            <span className="absolute -top-3 right-6 px-3 py-0.5 rounded-full bg-[#E84025] text-white text-[10px] font-bold uppercase">
              Popular
            </span>
            <div>
              <div className="w-12 h-12 rounded-2xl bg-purple-100 text-purple-600 flex items-center justify-center font-bold mb-6 group-hover:scale-110 transition-transform">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="font-heading-modern text-lg font-bold text-[#191C21] mb-2">
                {t.powers.power3.title}
              </h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                {t.powers.power3.desc}
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-[#E84025]">
              <span>Direct WhatsApp Inquiries</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Service 4: Full Digital Marketing Ecosystem */}
          <div className="p-7 rounded-3xl bg-white border border-gray-100 shadow-[0_10px_35px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_45px_rgba(232,64,37,0.1)] hover:-translate-y-1.5 transition-all text-left flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-orange-100 text-[#E84025] flex items-center justify-center font-bold mb-6 group-hover:scale-110 transition-transform">
                <BarChart3 className="w-6 h-6" />
              </div>
              <h3 className="font-heading-modern text-lg font-bold text-[#191C21] mb-2">
                {t.powers.digitalMarketingBonus.title}
              </h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                {t.powers.digitalMarketingBonus.desc}
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-[#E84025]">
              <span>Pixel & Retargeting</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

        </div>

      </section>

      {/* ======================================================== */}
      {/* 4. "SIMPLE SOLUTIONS!" (Peach/Cream Section like ref)    */}
      {/* ======================================================== */}
      <section id="process" className="py-24 px-6 sm:px-12 bg-[#FFF6F2] relative">
        <div className="max-w-7xl mx-auto">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Armchair Visual */}
            <div className="lg:col-span-5 relative flex justify-center">
              <div className="w-full max-w-sm rounded-3xl overflow-hidden shadow-2xl bg-white p-3 border border-orange-200/50">
                <img
                  src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=700&q=80"
                  alt="Clothing Store Growth"
                  className="w-full h-80 object-cover rounded-2xl"
                />
                <div className="p-4 bg-white">
                  <span className="text-[10px] font-bold text-[#E84025] uppercase tracking-wider block">Clothing & Retail Stores</span>
                  <p className="text-sm font-bold text-gray-800 mt-1">70% New Stock Sold Out in 48 Hours</p>
                </div>
              </div>
            </div>

            {/* Right Column: 4 Numbered Steps */}
            <div className="lg:col-span-7 space-y-6 text-left">
              
              <h2 className="font-heading-modern text-3xl sm:text-5xl font-extrabold text-[#191C21]">
                Simple <span className="text-[#E84025]">Solutions!</span>
              </h2>
              
              <p className="text-sm sm:text-base text-gray-600 font-normal leading-relaxed">
                {t.enhancements.subheading}
              </p>

              {/* 4 Numbered Circular Steps */}
              <div className="space-y-4 pt-2">
                {t.enhancements.items.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-3 rounded-2xl bg-white/70 border border-orange-100 hover:bg-white transition-all">
                    <div className="w-8 h-8 rounded-full bg-[#E84025] text-white flex items-center justify-center font-bold text-xs shrink-0 shadow-md">
                      {idx + 1}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-gray-900">{item.title} ({item.forWho})</h4>
                      <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">{item.desc}</p>
                      <span className="text-[11px] font-semibold text-[#E84025] mt-1 block">✓ {item.benefit}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-4 pt-4">
                <button
                  onClick={onOpenPortal}
                  className="px-8 py-3 rounded-full bg-gradient-to-r from-[#E84025] to-[#FF5B26] text-white text-xs font-bold uppercase tracking-wider shadow-lg hover:scale-105 transition-all cursor-pointer"
                >
                  Get Started →
                </button>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ======================================================== */}
      {/* 5. "OUR AGENCY" (Who We Are / The Team at Desk)          */}
      {/* ======================================================== */}
      <section id="agency" className="py-24 px-6 sm:px-12 max-w-7xl mx-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Text */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <span className="text-xs font-bold uppercase tracking-widest text-[#E84025] block">
              {t.motive.badge}
            </span>
            <h2 className="font-heading-modern text-3xl sm:text-5xl font-extrabold text-[#191C21]">
              Our <span className="text-[#E84025]">Agency & Mission</span>
            </h2>

            <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-normal">
              {t.motive.story}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-red-50/70 border border-red-100">
                <span className="text-xs font-bold text-red-600 block mb-1">{t.motive.boostTrapTitle}</span>
                <p className="text-xs text-gray-600 leading-relaxed">{t.motive.boostTrapDesc}</p>
              </div>

              <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-100">
                <span className="text-xs font-bold text-emerald-600 block mb-1">{t.motive.ourSolutionTitle}</span>
                <p className="text-xs text-gray-600 leading-relaxed">{t.motive.ourSolutionDesc}</p>
              </div>
            </div>

            <p className="text-xs font-semibold text-gray-700 pt-2">
              {t.motive.conclusion}
            </p>
          </div>

          {/* Right: Desk & Charts Illustration Visual */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-sm rounded-3xl bg-gradient-to-br from-orange-50 to-amber-50 p-6 border border-orange-200/50 shadow-xl space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-orange-200/50">
                <span className="text-xs font-bold text-gray-700">Campaign Growth Analytics</span>
                <span className="text-xs font-bold text-[#E84025]">+240%</span>
              </div>

              <div className="h-44 rounded-2xl bg-white p-4 shadow-sm flex items-end justify-between gap-3">
                <div className="w-full bg-orange-100 rounded-t-lg h-[40%]" />
                <div className="w-full bg-orange-200 rounded-t-lg h-[60%]" />
                <div className="w-full bg-orange-300 rounded-t-lg h-[75%]" />
                <div className="w-full bg-[#E84025] rounded-t-lg h-[95%]" />
              </div>

              <div className="flex justify-between text-[11px] text-gray-500 font-medium px-2">
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
      {/* 6. "WHAT CLIENTS SAY!" & VERIFIED REELS PORTFOLIO        */}
      {/* ======================================================== */}
      <section id="portfolio" className="py-24 px-6 sm:px-12 bg-[#FFF6F2]">
        <div className="max-w-7xl mx-auto text-center">
          
          <div className="max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#E84025] block mb-2">
              {t.portfolio.badge}
            </span>
            <h2 className="font-heading-modern text-3xl sm:text-5xl font-extrabold text-[#191C21]">
              What <span className="text-[#E84025]">Clients</span> Say & Delivered Reels
            </h2>
            <p className="text-sm text-gray-500 mt-2">
              {t.portfolio.subheading}
            </p>

            {/* Filter Tabs */}
            <div className="flex items-center justify-center gap-2 mt-6">
              <button
                onClick={() => setActiveFilter('all')}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  activeFilter === 'all' ? 'bg-[#E84025] text-white shadow-md' : 'bg-white text-gray-600 border border-gray-200'
                }`}
              >
                {t.portfolio.filterAll}
              </button>
              <button
                onClick={() => setActiveFilter('cafes')}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  activeFilter === 'cafes' ? 'bg-[#E84025] text-white shadow-md' : 'bg-white text-gray-600 border border-gray-200'
                }`}
              >
                {t.portfolio.filterCafes}
              </button>
              <button
                onClick={() => setActiveFilter('clothing')}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  activeFilter === 'clothing' ? 'bg-[#E84025] text-white shadow-md' : 'bg-white text-gray-600 border border-gray-200'
                }`}
              >
                {t.portfolio.filterClothing}
              </button>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            {filteredCases.map((item) => (
              <div 
                key={item.id}
                onClick={() => setSelectedCase(item)}
                className="bg-white rounded-3xl overflow-hidden border border-orange-100 shadow-[0_10px_30px_rgba(232,64,37,0.06)] hover:shadow-[0_20px_45px_rgba(232,64,37,0.15)] transition-all cursor-pointer group flex flex-col justify-between hover:-translate-y-1.5"
              >
                {/* Media Image */}
                <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                  <img
                    src={item.image}
                    alt={item.client}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-2.5 right-2.5 px-2.5 py-1 rounded-full bg-[#E84025] text-white text-[10px] font-bold uppercase shadow-sm">
                    {item.categoryLabel}
                  </div>
                  
                  {/* Play Reel Hover Overlay */}
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-white text-[#E84025] flex items-center justify-center shadow-lg">
                      <Play className="w-5 h-5 fill-current translate-x-0.5" />
                    </div>
                  </div>
                </div>

                {/* Details */}
                <div className="p-5 space-y-3">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>

                  <div>
                    <h4 className="text-base font-bold text-gray-900 group-hover:text-[#E84025] transition-colors leading-snug">
                      {item.client}
                    </h4>
                    <span className="text-xs text-gray-400 block">{item.location}</span>
                  </div>

                  <p className="text-xs text-gray-600 line-clamp-2">
                    "{item.resultDetail}"
                  </p>

                  <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-[#E84025]">
                    <span>{item.resultMetric}</span>
                    <span className="text-[11px] underline">Watch Reel ↗</span>
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ======================================================== */}
      {/* 7. "READY TO GET STARTED?" (Solid Orange Banner)        */}
      {/* ======================================================== */}
      <section className="py-16 px-6 sm:px-12 max-w-7xl mx-auto">
        <div className="rounded-3xl bg-gradient-to-r from-[#E84025] to-[#FF5B26] p-8 sm:p-12 shadow-[0_15px_40px_rgba(232,64,37,0.35)] flex flex-col sm:flex-row items-center justify-between gap-6 text-white text-center sm:text-left">
          <div>
            <h2 className="font-heading-modern text-3xl sm:text-4xl font-extrabold">
              Ready to get started?
            </h2>
            <p className="text-sm text-orange-100 mt-1">
              Join 250+ local stores & cafés growing daily footfall and WhatsApp inquiries.
            </p>
          </div>

          <button
            onClick={onOpenPortal}
            className="px-8 py-3.5 rounded-full bg-white text-[#E84025] hover:bg-orange-50 font-bold text-sm shadow-lg transition-all cursor-pointer hover:scale-105 shrink-0"
          >
            Access Customer Portal →
          </button>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 8. FOOTER (Soft Peach/Cream matching reference)         */}
      {/* ======================================================== */}
      <footer className="pt-16 pb-12 px-6 sm:px-12 bg-[#FFF6F2] border-t border-orange-100 text-xs text-gray-500">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-8 mb-12 text-left">
          
          <div className="col-span-2 space-y-3">
            <span className="font-heading-modern text-2xl font-black text-[#1A1D20] block">
              RONIN<span className="text-[#E84025]">MEDIA</span>
            </span>
            <p className="text-xs text-gray-500 max-w-xs leading-relaxed">
              Performance video creatives, viral reels production, and 5-10km hyper-local Meta advertising.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a href="#" className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center text-[#E84025] hover:scale-110 transition-transform">f</a>
              <a href="#" className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center text-[#E84025] hover:scale-110 transition-transform">in</a>
              <a href="#" className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center text-[#E84025] hover:scale-110 transition-transform">ig</a>
            </div>
          </div>

          <div>
            <span className="font-bold text-gray-800 uppercase block mb-3">Agency</span>
            <ul className="space-y-2">
              <li><button onClick={() => scrollTo('services')} className="hover:text-[#E84025]">Services</button></li>
              <li><button onClick={() => scrollTo('process')} className="hover:text-[#E84025]">Solutions</button></li>
              <li><button onClick={() => scrollTo('agency')} className="hover:text-[#E84025]">About Us</button></li>
            </ul>
          </div>

          <div>
            <span className="font-bold text-gray-800 uppercase block mb-3">Categories</span>
            <ul className="space-y-2">
              <li><button onClick={() => { setActiveFilter('cafes'); scrollTo('portfolio'); }} className="hover:text-[#E84025]">Cafés & Dining</button></li>
              <li><button onClick={() => { setActiveFilter('clothing'); scrollTo('portfolio'); }} className="hover:text-[#E84025]">Clothing Stores</button></li>
              <li><button onClick={() => { setActiveFilter('all'); scrollTo('portfolio'); }} className="hover:text-[#E84025]">All Deliveries</button></li>
            </ul>
          </div>

          <div>
            <span className="font-bold text-gray-800 uppercase block mb-3">Portals</span>
            <ul className="space-y-2">
              <li><button onClick={onOpenPortal} className="text-[#E84025] font-bold hover:underline">Client Portal</button></li>
              <li><button onClick={onOpenAdmin} className="text-gray-400 hover:text-gray-700 flex items-center gap-1"><Lock className="w-3 h-3" /> Admin Console</button></li>
            </ul>
          </div>

        </div>

        <div className="max-w-7xl mx-auto pt-8 border-t border-orange-200/50 flex flex-col sm:flex-row items-center justify-between gap-4">
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
