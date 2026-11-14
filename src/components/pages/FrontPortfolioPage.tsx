import React, { useState } from 'react';
import { 
  ShieldCheck, Sparkles, ArrowRight, CheckCircle2, 
  MapPin, Users, Award, TrendingUp, Lock, Zap, 
  Target, Video, MessageCircle, AlertTriangle, ExternalLink,
  ChevronDown, Phone, UserCheck, Play, Globe, Check, Layers
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
  // Default to English as requested
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
    <div className="min-h-screen bg-[#0A0A0A] text-white selection:bg-[#C8102E] selection:text-white font-sans antialiased relative overflow-x-hidden">
      
      {/* Background Reddish Ambient Glows */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-[#C8102E]/15 blur-[170px] pointer-events-none" />
      <div className="fixed bottom-0 right-0 w-[600px] h-[600px] rounded-full bg-[#C8102E]/10 blur-[150px] pointer-events-none" />
      <div className="fixed inset-0 bg-crosshair-circles opacity-20 pointer-events-none" />

      {/* ======================================================== */}
      {/* 1. FIXED HEADER WITH HINDI / ENGLISH LANGUAGE TOGGLE     */}
      {/* ======================================================== */}
      <header className="fixed top-0 left-0 right-0 z-40 py-4 px-4 sm:px-8 bg-[#0A0A0A]/90 border-b border-white/10 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group focus:outline-none cursor-pointer">
            <div className="w-8 h-8 rounded-lg bg-[#C8102E] flex items-center justify-center font-bold text-white shadow-[0_0_15px_#C8102E] group-hover:rotate-90 transition-transform duration-300">
              +
            </div>
            <div>
              <span className="font-display text-2xl uppercase font-bold text-white tracking-wider block leading-none">
                RONIN MEDIA
              </span>
              <span className="text-[10px] font-mono text-[#CCC5C4] uppercase tracking-widest hidden sm:block">
                Reels · Posts · Meta Ads
              </span>
            </div>
          </a>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-6 text-xs font-mono uppercase tracking-wider text-[#CCC5C4]">
            <button onClick={() => scrollTo('powers')} className="hover:text-white transition-colors cursor-pointer">
              {t.nav.powers}
            </button>
            <button onClick={() => scrollTo('motive')} className="hover:text-white transition-colors cursor-pointer">
              {t.nav.about}
            </button>
            <button onClick={() => scrollTo('enhancements')} className="hover:text-white transition-colors cursor-pointer">
              {t.nav.enhancements}
            </button>
            <button onClick={() => scrollTo('portfolio')} className="hover:text-white transition-colors cursor-pointer">
              {t.nav.portfolio}
            </button>
          </nav>

          {/* Right Header Actions: Language Switch + Login/Sign Up */}
          <div className="flex items-center gap-3">
            
            {/* 🌐 1-Click Language Switch Button */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/15 text-xs font-mono font-bold text-white transition-all cursor-pointer shadow-sm hover:border-[#C8102E]/60"
              title={lang === 'en' ? 'हिन्दी में बदलें' : 'Switch to English'}
            >
              <Globe className="w-3.5 h-3.5 text-[#C8102E]" />
              <span>{lang === 'en' ? 'हिन्दी' : 'English'}</span>
            </button>

            {/* Login & Sign Up CTA */}
            <button
              onClick={onOpenPortal}
              className="px-5 py-2.5 rounded-full bg-[#C8102E] hover:bg-[#a50b24] text-white text-xs font-mono font-bold uppercase tracking-wider flex items-center gap-2 shadow-[0_0_20px_rgba(200,16,46,0.45)] transition-all cursor-pointer hover:scale-105"
            >
              <Lock className="w-3.5 h-3.5" />
              <span>{t.nav.loginSignUp}</span>
            </button>

          </div>

        </div>
      </header>

      {/* ======================================================== */}
      {/* 2. HERO SECTION WITH COUNT-UP NUMBERS                    */}
      {/* ======================================================== */}
      <section className="relative z-10 pt-32 sm:pt-40 pb-20 px-4 sm:px-8 text-center max-w-6xl mx-auto flex flex-col items-center">
        
        {/* Core Package Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-[#C8102E]/40 text-[#C8102E] text-xs font-mono uppercase tracking-widest mb-6 backdrop-blur-md shadow-[0_0_15px_rgba(200,16,46,0.2)]">
          <Zap className="w-4 h-4 fill-current" />
          <span>{t.hero.badge}</span>
        </div>

        {/* Big Headline */}
        <h1 className="font-display text-5xl sm:text-7xl lg:text-9xl font-black uppercase tracking-tight text-white leading-[0.92] mb-6">
          {t.hero.headlinePart1} <br />
          <span className="text-[#C8102E] drop-shadow-[0_0_45px_rgba(200,16,46,0.6)]">
            {t.hero.headlineHighlight}
          </span> <br />
          {t.hero.headlinePart2}
        </h1>

        <p className="max-w-3xl text-base sm:text-xl text-[#CCC5C4] font-normal leading-relaxed mb-12">
          {t.hero.description}
        </p>

        {/* 4 Animated Counter Metric Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-4xl mb-12">
          
          {/* Metric 1: 250+ Campaigns (Visibly counts 0 to 250+) */}
          <div className="p-5 rounded-2xl bg-[#171919] border border-white/10 text-left shadow-lg group hover:border-[#C8102E]/50 transition-all hover:-translate-y-1">
            <span className="font-display text-3xl sm:text-4xl font-black text-[#C8102E] block">
              <AnimatedCounter target={250} suffix="+" duration={1800} delay={1800} />
            </span>
            <span className="text-xs font-bold text-white block mt-1">{t.stats.campaigns.label}</span>
            <span className="text-[11px] font-mono text-[#CCC5C4] mt-1 block leading-tight">{t.stats.campaigns.desc}</span>
          </div>

          {/* Metric 2: 2-3 Years Experience */}
          <div className="p-5 rounded-2xl bg-[#171919] border border-white/10 text-left shadow-lg group hover:border-[#C8102E]/50 transition-all hover:-translate-y-1">
            <span className="font-display text-3xl sm:text-4xl font-black text-white block">
              <AnimatedCounter target={3} suffix=" Years" prefix="2-" duration={1400} delay={1900} />
            </span>
            <span className="text-xs font-bold text-white block mt-1">{t.stats.experience.label}</span>
            <span className="text-[11px] font-mono text-[#CCC5C4] mt-1 block leading-tight">{t.stats.experience.desc}</span>
          </div>

          {/* Metric 3: 1.2M+ Reach */}
          <div className="p-5 rounded-2xl bg-[#171919] border border-white/10 text-left shadow-lg group hover:border-[#C8102E]/50 transition-all hover:-translate-y-1">
            <span className="font-display text-3xl sm:text-4xl font-black text-[#C8102E] block">
              <AnimatedCounter target={1.2} suffix="M+" decimals={1} duration={1600} delay={2000} />
            </span>
            <span className="text-xs font-bold text-white block mt-1">{t.stats.reach.label}</span>
            <span className="text-[11px] font-mono text-[#CCC5C4] mt-1 block leading-tight">{t.stats.reach.desc}</span>
          </div>

          {/* Metric 4: 4.9★ Rating */}
          <div className="p-5 rounded-2xl bg-[#171919] border border-white/10 text-left shadow-lg group hover:border-[#C8102E]/50 transition-all hover:-translate-y-1">
            <span className="font-display text-3xl sm:text-4xl font-black text-amber-400 block">
              <AnimatedCounter target={4.9} suffix="★" decimals={1} duration={1500} delay={2100} />
            </span>
            <span className="text-xs font-bold text-white block mt-1">{t.stats.rating.label}</span>
            <span className="text-[11px] font-mono text-[#CCC5C4] mt-1 block leading-tight">{t.stats.rating.desc}</span>
          </div>

        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={() => scrollTo('portfolio')}
            className="px-8 py-4 rounded-full bg-white text-[#0A0A0A] hover:bg-slate-200 text-xs font-mono font-bold uppercase tracking-widest transition-all cursor-pointer shadow-xl hover:scale-105"
          >
            {t.hero.exploreBtn}
          </button>
          
          <button
            onClick={onOpenPortal}
            className="px-8 py-4 rounded-full bg-[#171919] hover:bg-black border border-[#C8102E]/60 text-white text-xs font-mono font-bold uppercase tracking-widest transition-all cursor-pointer shadow-lg hover:scale-105 flex items-center gap-2"
          >
            <Lock className="w-3.5 h-3.5 text-[#C8102E]" />
            <span>{t.hero.portalBtn}</span>
          </button>
        </div>

      </section>

      {/* ======================================================== */}
      {/* 3. OUR 3-IN-1 CORE POWERS (REELS + POSTS + META ADS)     */}
      {/* ======================================================== */}
      <section id="powers" className="relative z-10 py-24 px-4 sm:px-8 border-t border-white/10 bg-[#0d0e0f]">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-[#C8102E] font-bold block mb-2">
              {t.powers.badge}
            </span>
            <h2 className="font-display text-4xl sm:text-6xl uppercase tracking-tight text-white leading-none">
              {t.powers.heading}
            </h2>
            <p className="text-sm font-sans text-[#CCC5C4] mt-3">
              {t.powers.subheading}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            
            {/* Power 1: Viral 9:16 Reels */}
            <div className="p-8 rounded-3xl bg-[#171919] border border-white/15 hover:border-[#C8102E]/60 transition-all shadow-xl hover:-translate-y-1 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono uppercase px-3 py-1 rounded-full bg-[#C8102E]/20 text-[#C8102E] border border-[#C8102E]/30 font-bold block w-fit mb-4">
                  {t.powers.power1.tag}
                </span>
                <h3 className="font-display text-2xl uppercase text-white mb-3">
                  {t.powers.power1.title}
                </h3>
                <p className="text-xs text-[#CCC5C4] leading-relaxed mb-6">
                  {t.powers.power1.desc}
                </p>

                <ul className="space-y-2 text-xs font-mono text-white/80 border-t border-white/10 pt-4">
                  {t.powers.power1.bullets.map((b, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C8102E]" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Power 2: Creative Posts & Banners */}
            <div className="p-8 rounded-3xl bg-[#171919] border border-white/15 hover:border-[#C8102E]/60 transition-all shadow-xl hover:-translate-y-1 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono uppercase px-3 py-1 rounded-full bg-white/10 text-white border border-white/20 font-bold block w-fit mb-4">
                  {t.powers.power2.tag}
                </span>
                <h3 className="font-display text-2xl uppercase text-white mb-3">
                  {t.powers.power2.title}
                </h3>
                <p className="text-xs text-[#CCC5C4] leading-relaxed mb-6">
                  {t.powers.power2.desc}
                </p>

                <ul className="space-y-2 text-xs font-mono text-white/80 border-t border-white/10 pt-4">
                  {t.powers.power2.bullets.map((b, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-white" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Power 3: 5-10km Meta Ads */}
            <div className="p-8 rounded-3xl bg-gradient-to-br from-[#1c1417] to-[#171919] border-2 border-[#C8102E] shadow-[0_15px_40px_rgba(200,16,46,0.25)] flex flex-col justify-between hover:-translate-y-1 transition-all">
              <div>
                <span className="text-[10px] font-mono uppercase px-3 py-1 rounded-full bg-[#C8102E] text-white font-bold block w-fit mb-4">
                  {t.powers.power3.tag}
                </span>
                <h3 className="font-display text-2xl uppercase text-white mb-3">
                  {t.powers.power3.title}
                </h3>
                <p className="text-xs text-[#CCC5C4] leading-relaxed mb-6">
                  {t.powers.power3.desc}
                </p>

                <ul className="space-y-2 text-xs font-mono text-white/90 border-t border-white/10 pt-4">
                  {t.powers.power3.bullets.map((b, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C8102E]" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>

          {/* Full Digital Marketing Ecosystem Banner */}
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#C8102E]/20 text-[#C8102E] flex items-center justify-center shrink-0">
                <Layers className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white uppercase font-mono">
                  {t.powers.digitalMarketingBonus.title}
                </h4>
                <p className="text-xs text-[#CCC5C4] mt-0.5">
                  {t.powers.digitalMarketingBonus.desc}
                </p>
              </div>
            </div>

            <button
              onClick={onOpenPortal}
              className="px-5 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-mono text-white font-bold transition-all shrink-0 cursor-pointer"
            >
              Get Custom Package →
            </button>
          </div>

        </div>
      </section>

      {/* ======================================================== */}
      {/* 4. OUR MOTIVE & THE ANTI-BOOST MANIFESTO                 */}
      {/* ======================================================== */}
      <section id="motive" className="relative z-10 py-24 px-4 sm:px-8 border-t border-white/10 bg-[#0A0A0A]">
        <div className="max-w-6xl mx-auto">
          
          <div className="p-8 sm:p-14 rounded-3xl bg-gradient-to-br from-[#171919] via-[#1a1215] to-[#171919] border border-[#C8102E]/40 relative overflow-hidden shadow-2xl">
            
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#C8102E]/15 rounded-full blur-[110px] pointer-events-none" />

            <div className="relative z-10 max-w-3xl">
              <span className="text-xs font-mono uppercase tracking-widest text-[#C8102E] font-bold block mb-3">
                {t.motive.badge}
              </span>
              <h2 className="font-display text-3xl sm:text-5xl uppercase tracking-tight text-white mb-6 leading-tight">
                {t.motive.heading}
              </h2>

              <p className="text-base sm:text-lg text-white/90 leading-relaxed font-sans mb-6">
                {t.motive.story}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                <div className="p-5 rounded-2xl bg-black/60 border border-red-500/30">
                  <span className="text-xs font-mono uppercase text-red-400 font-bold block mb-1">
                    {t.motive.boostTrapTitle}
                  </span>
                  <p className="text-xs text-[#CCC5C4] leading-relaxed">
                    {t.motive.boostTrapDesc}
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-black/60 border border-emerald-500/30">
                  <span className="text-xs font-mono uppercase text-emerald-400 font-bold block mb-1">
                    {t.motive.ourSolutionTitle}
                  </span>
                  <p className="text-xs text-[#CCC5C4] leading-relaxed">
                    {t.motive.ourSolutionDesc}
                  </p>
                </div>
              </div>

              <p className="text-sm text-[#CCC5C4] font-mono">
                {t.motive.conclusion}
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ======================================================== */}
      {/* 5. WHAT WE ENHANCE FOR YOUR SHOP OR CAFÉ                 */}
      {/* ======================================================== */}
      <section id="enhancements" className="relative z-10 py-24 px-4 sm:px-8 border-t border-white/10 bg-[#0d0e0f]">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-[#C8102E] font-bold block mb-2">
              {t.enhancements.badge}
            </span>
            <h2 className="font-display text-4xl sm:text-6xl uppercase tracking-tight text-white leading-tight">
              {t.enhancements.heading}
            </h2>
            <p className="text-sm font-sans text-[#CCC5C4] mt-3">
              {t.enhancements.subheading}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {t.enhancements.items.map((enh, idx) => (
              <div 
                key={idx}
                className="p-8 rounded-3xl bg-[#171919] border border-white/15 hover:border-[#C8102E]/60 transition-all flex flex-col justify-between group shadow-xl hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-3xl font-bold text-[#C8102E]">{enh.num}</span>
                    <span className="text-[10px] font-mono uppercase px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/70">
                      {enh.forWho}
                    </span>
                  </div>
                  <h3 className="font-display text-2xl uppercase tracking-wide text-white mb-2">
                    {enh.title}
                  </h3>
                  <p className="text-sm text-[#CCC5C4] font-sans leading-relaxed mb-6">
                    {enh.desc}
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex items-center gap-2.5">
                  <Sparkles className="w-4 h-4 text-[#C8102E] shrink-0" />
                  <span className="text-xs font-mono text-white/90 font-medium">
                    {enh.benefit}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ======================================================== */}
      {/* 6. VERIFIED PORTFOLIO (CAFÉS & CLOTHING STORES ONLY)     */}
      {/* ======================================================== */}
      <section id="portfolio" className="relative z-10 py-24 px-4 sm:px-8 border-t border-white/10 bg-[#0A0A0A]">
        <div className="max-w-6xl mx-auto">
          
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4 mb-12">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#C8102E] font-bold block mb-2">
                {t.portfolio.badge}
              </span>
              <h2 className="font-display text-4xl sm:text-6xl uppercase tracking-tight text-white leading-none">
                {t.portfolio.heading}
              </h2>
              <p className="text-xs font-mono text-[#CCC5C4] mt-2">
                {t.portfolio.subheading}
              </p>
            </div>

            {/* Filter Tabs: All | Cafés | Clothing Stores */}
            <div className="flex items-center gap-2 p-1.5 rounded-xl bg-[#171919] border border-white/10">
              <button
                onClick={() => setActiveFilter('all')}
                className={`px-4 py-2 rounded-lg text-xs font-mono uppercase font-bold transition-all cursor-pointer ${
                  activeFilter === 'all' ? 'bg-[#C8102E] text-white shadow-[0_0_12px_#C8102E]' : 'text-[#CCC5C4] hover:text-white'
                }`}
              >
                {t.portfolio.filterAll}
              </button>

              <button
                onClick={() => setActiveFilter('cafes')}
                className={`px-4 py-2 rounded-lg text-xs font-mono uppercase font-bold transition-all cursor-pointer ${
                  activeFilter === 'cafes' ? 'bg-[#C8102E] text-white shadow-[0_0_12px_#C8102E]' : 'text-[#CCC5C4] hover:text-white'
                }`}
              >
                {t.portfolio.filterCafes}
              </button>

              <button
                onClick={() => setActiveFilter('clothing')}
                className={`px-4 py-2 rounded-lg text-xs font-mono uppercase font-bold transition-all cursor-pointer ${
                  activeFilter === 'clothing' ? 'bg-[#C8102E] text-white shadow-[0_0_12px_#C8102E]' : 'text-[#CCC5C4] hover:text-white'
                }`}
              >
                {t.portfolio.filterClothing}
              </button>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredCases.map((item) => (
              <div 
                key={item.id}
                onClick={() => setSelectedCase(item)}
                className="rounded-3xl overflow-hidden bg-[#171919] border border-white/15 hover:border-[#C8102E] transition-all shadow-xl group flex flex-col justify-between hover:-translate-y-1.5 duration-300 cursor-pointer"
              >
                {/* Media Banner with Play Button */}
                <div className="relative aspect-[16/10] overflow-hidden bg-black">
                  <img
                    src={item.image}
                    alt={item.client}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#171919] via-transparent to-black/40" />

                  {/* Play Reel Overlay Pill */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-[#C8102E]/90 text-white flex items-center justify-center shadow-[0_0_25px_#C8102E] group-hover:scale-110 transition-transform">
                    <Play className="w-6 h-6 fill-white translate-x-0.5" />
                  </div>

                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="text-[10px] font-mono uppercase px-3 py-1 rounded-full bg-[#C8102E] text-white font-bold tracking-wider">
                      {item.categoryLabel}
                    </span>
                    <span className="text-[10px] font-mono text-white/90 bg-black/60 px-3 py-1 rounded-full backdrop-blur-md">
                      {item.location}
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="font-display text-3xl uppercase text-white leading-tight">
                      {item.client}
                    </h3>
                    <p className="text-xs font-mono text-[#CCC5C4] mt-1">
                      Hook: "{item.hook}"
                    </p>
                  </div>
                </div>

                {/* Metrics Details */}
                <div className="p-6 space-y-4">
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#CCC5C4] block">Verified Result Delivered</span>
                    <p className="font-display text-2xl font-bold text-white mt-0.5">
                      {item.resultMetric}
                    </p>
                    <p className="text-xs text-emerald-400 font-mono mt-1">
                      {item.resultDetail}
                    </p>
                  </div>

                  <div className="flex items-center justify-between text-xs font-mono text-[#CCC5C4] pt-2 border-t border-white/10">
                    <span>Campaign Scope:</span>
                    <span className="text-white font-bold">{item.deliverables}</span>
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ======================================================== */}
      {/* 7. PORTAL CALL TO ACTION                                 */}
      {/* ======================================================== */}
      <section className="relative z-10 py-24 px-4 sm:px-8 border-t border-white/10 bg-[#0d0e0f]">
        <div className="max-w-4xl mx-auto text-center p-8 sm:p-14 rounded-3xl bg-gradient-to-br from-[#171919] to-black border border-[#C8102E]/50 shadow-2xl relative overflow-hidden">
          
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-80 bg-[#C8102E]/25 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10">
            <span className="text-xs font-mono uppercase tracking-widest text-[#C8102E] font-bold block mb-3">
              {t.cta.badge}
            </span>
            <h2 className="font-display text-4xl sm:text-6xl uppercase tracking-tight text-white mb-4">
              {t.cta.heading}
            </h2>
            <p className="text-sm font-sans text-[#CCC5C4] max-w-xl mx-auto mb-8">
              {t.cta.desc}
            </p>

            <button
              onClick={onOpenPortal}
              className="px-10 py-4 rounded-full bg-[#C8102E] hover:bg-[#a50b24] text-white text-xs sm:text-sm font-mono font-bold uppercase tracking-widest shadow-[0_0_30px_rgba(200,16,46,0.5)] transition-all cursor-pointer hover:scale-105 inline-flex items-center gap-2.5"
            >
              <Lock className="w-4 h-4" />
              <span>{t.cta.button}</span>
            </button>
          </div>

        </div>
      </section>

      {/* ======================================================== */}
      {/* 8. FOOTER WITH DISCREET ADMIN PORTAL LINK                */}
      {/* ======================================================== */}
      <footer className="relative z-10 py-8 px-4 sm:px-8 border-t border-white/10 text-xs font-mono text-white/40">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <span>RONIN MEDIA · {t.footer.rights}</span>
          
          <div className="flex items-center gap-6">
            <button onClick={onOpenPortal} className="text-[#C8102E] hover:underline cursor-pointer">
              {t.nav.loginSignUp}
            </button>
            <button 
              onClick={onOpenAdmin} 
              className="text-white/30 hover:text-white flex items-center gap-1 cursor-pointer transition-colors"
            >
              <Lock className="w-3 h-3 text-[#C8102E]" />
              <span>{t.nav.adminLogin}</span>
            </button>
          </div>
        </div>
      </footer>

      {/* Interactive Reel Preview Modal */}
      <ReelModal
        isOpen={Boolean(selectedCase)}
        onClose={() => setSelectedCase(null)}
        caseItem={selectedCase}
      />

    </div>
  );
};
