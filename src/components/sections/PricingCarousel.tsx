import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Info, Video, Sparkles, Megaphone, Users, Star, Clock, Send, ArrowRight } from 'lucide-react';
import { Badge } from '../common/Badge';
import { useApp } from '../../context/ThemeLanguageContext';

export const PricingCarousel: React.FC = () => {
  const { t, setCurrentPage, language, agencyPricing } = useApp();
  const [customNeedText, setCustomNeedText] = useState('');
  const [selectedQuickTag, setSelectedQuickTag] = useState<string | null>(null);

  const handleSendProblem = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `*FREE BUSINESS CONSULTATION INQUIRY*%0A--------------------------------%0A*My Need / Problem:* ${encodeURIComponent(customNeedText || selectedQuickTag || 'General Inquiry')}%0A*Selected Tag:* ${encodeURIComponent(selectedQuickTag || 'None')}%0A--------------------------------%0A_Sent from Agency Website Problem Solver_`;
    window.open(`https://wa.me/919999999999?text=${message}`, '_blank');
  };

  const handleQuickTagClick = (tag: string) => {
    setSelectedQuickTag(tag);
    if (!customNeedText) {
      setCustomNeedText(`We need help with: ${tag}. `);
    }
  };

  const notifyOnWhatsApp = (packageName: string) => {
    const message = encodeURIComponent(`Hello! Please notify me when the "${packageName}" launches. I am interested for my business.`);
    window.open(`https://wa.me/919999999999?text=${message}`, '_blank');
  };

  return (
    <section id="pricing" className="relative py-20 sm:py-28 bg-[#F8F9FC] dark:bg-[#07090E] bg-grid-oversight transition-colors duration-300 overflow-hidden">
      
      {/* Forma AI Dark Mode Radiant Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-blue-600/15 dark:block hidden rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <Badge variant="purple" className="mb-4">
            {t.packages.titleBadge}
          </Badge>
          
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#17092F] dark:text-white tracking-tight leading-tight mb-4">
            {t.packages.heading}
          </h2>
          
          <p className="text-base sm:text-lg text-[#685984] dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
            {language === 'hi'
              ? 'वर्तमान में उपलब्ध हमारे दो सबसे प्रमुख और अनुशंसित पैकेजेस। अपनी जरूरत के अनुसार चुनें या दोनों को साथ जोड़ें।'
              : 'Our two primary and highly-recommended live packages available today. Choose ads, reels, or bundle both for maximum results.'}
          </p>
        </div>

        {/* 2 MAIN CURRENTLY AVAILABLE PACKAGES (EQUAL PROMINENCE & HIGHLIGHTED BADGES) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch max-w-5xl mx-auto mb-20">
          
          {/* PACKAGE 1: 15 REELS PACKAGE (₹6,000) - WITH "RECOMMENDED FOR REEL PACKAGE" BADGE */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
            className="card-purple p-8 sm:p-10 flex flex-col justify-between transition-all duration-300 relative shadow-[0_25px_60px_-15px_rgba(45,14,96,0.35)] dark:shadow-[0_0_45px_rgba(216,252,56,0.25)] border-2 border-[#D8FC38]/60 dark:border-[#D8FC38]/50 rounded-[32px]"
          >
            {/* RECOMMENDED BADGE */}
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 w-max max-w-[95%]">
              <span className="badge-lime-pill shadow-lg font-black text-xs sm:text-sm tracking-wide flex items-center gap-1.5 py-1 px-4">
                <Star className="w-3.5 h-3.5 fill-current" />
                {t.packages.reels.topBadge || '★ RECOMMENDED FOR REEL PACKAGE'}
              </span>
            </div>

            <div>
              <div className="flex items-center justify-between mb-4 mt-2">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#D8FC38] flex items-center gap-1.5">
                  <Video className="w-4 h-4" />
                  {t.packages.reels.tag}
                </span>
                <span className="text-[11px] font-bold bg-white/20 text-white px-3 py-0.5 rounded-full">
                  {t.packages.reels.duration}
                </span>
              </div>

              <div className="mb-5">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl sm:text-5xl font-black font-mono text-white">
                    ₹{agencyPricing.reelsPackagePrice.toLocaleString('en-IN')}
                  </span>
                  <span className="text-sm font-semibold text-purple-200 dark:text-slate-300">
                    {t.packages.reels.period}
                  </span>
                </div>
                <h3 className="text-lg font-extrabold text-white mt-1">
                  {t.packages.reels.name}
                </h3>
                <p className="text-xs text-purple-100 dark:text-slate-200 mt-2 leading-relaxed">
                  {t.packages.reels.desc}
                </p>
              </div>

              {/* Highlight Box */}
              <div className="bg-black/30 dark:bg-black/50 p-4 rounded-2xl border border-white/20 mb-6 space-y-1 text-xs">
                <div className="text-[#D8FC38] font-bold text-sm">
                  {t.packages.reels.highlightBox}
                </div>
                <div className="text-purple-200 dark:text-slate-300 text-[11px]">
                  ~₹{Math.round(agencyPricing.reelsPackagePrice / 15)} / Fully Produced Strategic Reel (Scripts + Shoot Guidance + Retention Editing)
                </div>
              </div>

              {/* Features List */}
              <div className="space-y-3 mb-8">
                {t.packages.reels.features.map((feature, fIdx) => (
                  <div key={fIdx} className="flex items-start gap-2.5 text-xs text-white">
                    <div className="w-4 h-4 rounded-full bg-[#D8FC38] text-[#182C05] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-2.5 h-2.5 stroke-[3]" />
                    </div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={() => setCurrentPage('order')}
              className="btn-lime w-full py-4 px-6 text-xs sm:text-sm font-black tracking-wider uppercase text-center block cursor-pointer transition-all shadow-xl hover:scale-105"
            >
              {t.packages.reels.cta}
            </button>
          </motion.div>

          {/* PACKAGE 2: PERFORMANCE LEAD GEN (₹5,000) - WITH "RECOMMENDED FOR ADVERTISEMENT PACKAGE" BADGE */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
            className="card-purple p-8 sm:p-10 flex flex-col justify-between transition-all duration-300 relative shadow-[0_25px_60px_-15px_rgba(45,14,96,0.35)] dark:shadow-[0_0_45px_rgba(59,130,246,0.3)] border-2 border-[#D8FC38]/60 dark:border-blue-400/50 rounded-[32px]"
          >
            {/* RECOMMENDED BADGE */}
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 w-max max-w-[95%]">
              <span className="badge-lime-pill shadow-lg font-black text-xs sm:text-sm tracking-wide flex items-center gap-1.5 py-1 px-4">
                <Megaphone className="w-3.5 h-3.5" />
                {t.packages.performance.popularBadge}
              </span>
            </div>

            <div>
              <div className="flex items-center justify-between mb-4 mt-2">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#D8FC38] flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4" />
                  {t.packages.performance.tag}
                </span>
                <span className="text-[11px] font-bold bg-white/20 text-white px-3 py-0.5 rounded-full">
                  {t.packages.performance.duration}
                </span>
              </div>

              <div className="mb-5">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl sm:text-5xl font-black font-mono text-white">
                    ₹{agencyPricing.adsPackagePrice.toLocaleString('en-IN')}
                  </span>
                  <span className="text-sm font-semibold text-purple-200 dark:text-slate-300">
                    {t.packages.performance.period}
                  </span>
                </div>
                <h3 className="text-lg font-extrabold text-white mt-1">
                  {t.packages.performance.name}
                </h3>
                <p className="text-xs text-purple-100 dark:text-slate-200 mt-2 leading-relaxed">
                  {t.packages.performance.desc}
                </p>
              </div>

              {/* Exact Transparent Split Badge */}
              <div className="bg-black/30 dark:bg-black/50 p-4 rounded-2xl border border-white/20 mb-6 space-y-1.5 text-xs font-mono">
                <div className="flex justify-between text-white font-bold">
                  <span>Ad Setup & Campaigns:</span>
                  <span className="text-[#D8FC38]">₹{agencyPricing.adsServiceFee.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between text-purple-200 dark:text-slate-300 font-medium">
                  <span>15 Reels Creative Testing:</span>
                  <span className="text-white">Included</span>
                </div>
                <div className="flex justify-between text-purple-200 dark:text-slate-300 font-medium">
                  <span>Direct Meta Ad Spend:</span>
                  <span className="text-[#D8FC38] font-bold">₹{agencyPricing.adsMetaSpend.toLocaleString('en-IN')} (~₹{Math.round(agencyPricing.adsMetaSpend / 15)}/Reel)</span>
                </div>
              </div>

              {/* Business Specific Highlights */}
              <div className="mb-6 p-3 rounded-2xl bg-white/10 dark:bg-white/[0.05] border border-white/15 text-xs">
                <span className="text-[10px] font-bold text-[#D8FC38] uppercase block mb-1">
                  {t.packages.performance.tailoredTitle}
                </span>
                <p className="text-[11px] text-purple-100 dark:text-slate-200 leading-relaxed whitespace-pre-line">
                  {t.packages.performance.tailoredDesc}
                </p>
              </div>

              {/* Features List */}
              <div className="space-y-2.5 mb-8">
                {t.packages.performance.features.map((feature, fIdx) => (
                  <div key={fIdx} className="flex items-start gap-2.5 text-xs text-white">
                    <div className="w-4 h-4 rounded-full bg-[#D8FC38] text-[#182C05] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-2.5 h-2.5 stroke-[3]" />
                    </div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={() => setCurrentPage('order')}
              className="btn-lime w-full py-4 px-6 text-xs sm:text-sm font-black tracking-wider uppercase text-center block cursor-pointer transition-all shadow-xl hover:scale-105"
            >
              {t.packages.performance.cta}
            </button>
          </motion.div>

        </div>

        {/* REASSURANCE DISCLAIMER */}
        <div className="max-w-3xl mx-auto p-4 rounded-2xl bg-white dark:bg-[#0E1528] border border-[#3C147A]/10 dark:border-white/10 flex items-start gap-3 text-xs text-[#685984] dark:text-slate-300 leading-relaxed shadow-sm mb-20">
          <Info className="w-4 h-4 text-[#7C3AED] dark:text-[#D8FC38] shrink-0 mt-0.5" />
          <p>
            <strong className="text-[#17092F] dark:text-white">{t.packages.disclaimerTitle}</strong> {t.packages.disclaimerText}
          </p>
        </div>

        {/* COMING SOON SECTION: MORE EXCITING PACKAGES IN PIPELINE */}
        <div className="mb-20">
          
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="bg-amber-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 text-xs font-bold uppercase px-3.5 py-1 rounded-full tracking-wider border border-amber-300/60 inline-flex items-center gap-1.5 mb-3">
              <Clock className="w-3.5 h-3.5" />
              {language === 'hi' ? 'कमिंग सून • नए पैकेजेस जल्द आ रहे हैं' : 'COMING SOON • MORE PACKAGES IN PIPELINE'}
            </span>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-[#17092F] dark:text-white tracking-tight">
              {language === 'hi' ? '30-दिन के कॉम्बो व नए डिमांडेबल पैकेजेस' : 'Upcoming Retainers & Demand-Driven Packages'}
            </h3>
            <p className="text-xs sm:text-sm text-[#685984] dark:text-slate-300 mt-2">
              {language === 'hi'
                ? 'हम आपके बिजनेस के लिए स्पेशल 30-डे कॉम्बो, शहर के टॉप 3 वायरल पेजेस कोलैबोरेशन और ऑन-कैमरा मॉडल्स पैकेजेस तैयार कर रहे हैं।'
                : 'Stay tuned for all-in-one growth combos, verified influencer tie-ups, and on-camera model packs designed for high scale.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* COMING SOON CARD 1: 30-DAY ALL-IN-ONE GROWTH COMBO */}
            <div className="card-white p-6 rounded-3xl border border-dashed border-[#3C147A]/30 dark:border-white/20 flex flex-col justify-between relative overflow-hidden bg-white/70 dark:bg-white/[0.03]">
              <div className="absolute top-4 right-4">
                <span className="text-[10px] font-mono font-bold bg-amber-500/10 text-amber-600 dark:text-amber-400 px-2.5 py-0.5 rounded-full border border-amber-500/20">
                  COMING SOON
                </span>
              </div>
              
              <div>
                <span className="text-xs font-mono font-bold uppercase text-[#7C3AED] dark:text-[#D8FC38] block mb-2">
                  {language === 'hi' ? '⚡ ऑल-इन-वन बंडल' : '⚡ ALL-IN-ONE BUNDLE'}
                </span>
                <h4 className="text-base font-bold text-[#17092F] dark:text-white mb-2">
                  {language === 'hi' ? '30-दिन का कम्प्लीट कॉम्बो पैकेज' : '30-Day Growth Combo Package'}
                </h4>
                <p className="text-xs text-[#685984] dark:text-slate-300 leading-relaxed mb-4">
                  {language === 'hi'
                    ? '15 रील्स प्रोडक्शन + ₹5,000 एड मैनेजमेंट + व्हाट्सएप ऑटोमेशन का सिंगल ऑल-इन-वन पैक।'
                    : '15 High-impact reels production paired seamlessly with full ad management & instant lead nurture.'}
                </p>
                <div className="text-[11px] font-mono text-[#3C147A] dark:text-[#D8FC38] font-bold">
                  {language === 'hi' ? '✓ भारी बचत और एक ही जगह सब समाधान' : '✓ Maximum Value Combo Retainer'}
                </div>
              </div>

              <button
                onClick={() => notifyOnWhatsApp("30-Day Growth Combo Package")}
                className="mt-6 w-full py-2.5 px-4 rounded-xl bg-slate-100 dark:bg-white/10 hover:bg-[#3C147A] hover:text-white dark:hover:bg-blue-600 text-[#17092F] dark:text-white text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>{language === 'hi' ? 'लॉन्च पर मुझे बताएं' : 'Notify Me On WhatsApp'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* COMING SOON CARD 2: CITY TOP 3 VIRAL PAGES COLLAB */}
            <div className="card-white p-6 rounded-3xl border border-dashed border-[#3C147A]/30 dark:border-white/20 flex flex-col justify-between relative overflow-hidden bg-white/70 dark:bg-white/[0.03]">
              <div className="absolute top-4 right-4">
                <span className="text-[10px] font-mono font-bold bg-amber-500/10 text-amber-600 dark:text-amber-400 px-2.5 py-0.5 rounded-full border border-amber-500/20">
                  COMING SOON
                </span>
              </div>
              
              <div>
                <span className="text-xs font-mono font-bold uppercase text-amber-600 dark:text-amber-400 flex items-center gap-1 mb-2">
                  <Star className="w-3 h-3 fill-current" />
                  {language === 'hi' ? 'पॉपुलर इंस्टाग्राम पेजेस' : 'VIRAL REACH TIE-UPS'}
                </span>
                <h4 className="text-base font-bold text-[#17092F] dark:text-white mb-2">
                  {language === 'hi' ? 'शहर के टॉप 3 वायरल पेजेस कोलैब' : 'City Top 3 Viral Pages Collab'}
                </h4>
                <p className="text-xs text-[#685984] dark:text-slate-300 leading-relaxed mb-4">
                  {language === 'hi'
                    ? 'शहर के सबसे बड़े 3 इंस्टाग्राम पेजेस के साथ डायरेक्ट पार्टनरशिप — जॉइंट पोस्ट, स्टोरी स्वाइप-अप और लोकल क्रेडिबिलिटी।'
                    : 'Direct collab posts & story blasts on the top 3 verified city theme pages (100K-500K+ hyper-local audience).'}
                </p>
                <div className="text-[11px] font-mono text-amber-600 dark:text-amber-400 font-bold">
                  {language === 'hi' ? '✓ बिना किसी एडमिन से मोलभाव किए' : '✓ Zero Hassle Direct Admin Tie-up'}
                </div>
              </div>

              <button
                onClick={() => notifyOnWhatsApp("City Top 3 Viral Pages Collab Package")}
                className="mt-6 w-full py-2.5 px-4 rounded-xl bg-slate-100 dark:bg-white/10 hover:bg-[#3C147A] hover:text-white dark:hover:bg-blue-600 text-[#17092F] dark:text-white text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>{language === 'hi' ? 'लॉन्च पर मुझे बताएं' : 'Notify Me On WhatsApp'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* COMING SOON CARD 3: 10 ON-CAMERA MODELS SHOOT */}
            <div className="card-white p-6 rounded-3xl border border-dashed border-[#3C147A]/30 dark:border-white/20 flex flex-col justify-between relative overflow-hidden bg-white/70 dark:bg-white/[0.03]">
              <div className="absolute top-4 right-4">
                <span className="text-[10px] font-mono font-bold bg-amber-500/10 text-amber-600 dark:text-amber-400 px-2.5 py-0.5 rounded-full border border-amber-500/20">
                  COMING SOON
                </span>
              </div>
              
              <div>
                <span className="text-xs font-mono font-bold uppercase text-indigo-600 dark:text-indigo-400 flex items-center gap-1 mb-2">
                  <Users className="w-3 h-3" />
                  {language === 'hi' ? 'ऑन-स्क्रीन टैलेंट' : 'ON-CAMERA TALENT'}
                </span>
                <h4 className="text-base font-bold text-[#17092F] dark:text-white mb-2">
                  {language === 'hi' ? '10 वेरिफाइड मॉडल्स पैकेज (लड़का व लड़की)' : '10 On-Camera Models Shoot'}
                </h4>
                <p className="text-xs text-[#685984] dark:text-slate-300 leading-relaxed mb-4">
                  {language === 'hi'
                    ? 'कैमरे के सामने बोलने में झिझक खत्म। 10 प्रोफेशनल मेल और फीमेल मॉडल्स जो आपके बिजनेस के लिए एक्टिंग और वॉकथ्रू करेंगे।'
                    : '10 verified male & female actors for café tastings, store walk-ins, clothing try-ons, and product reviews.'}
                </p>
                <div className="text-[11px] font-mono text-indigo-600 dark:text-indigo-400 font-bold">
                  {language === 'hi' ? '✓ कैमरा डर से 100% आजादी' : '✓ Full Ad Rights & Professional Delivery'}
                </div>
              </div>

              <button
                onClick={() => notifyOnWhatsApp("10 On-Camera Models Shoot Package")}
                className="mt-6 w-full py-2.5 px-4 rounded-xl bg-slate-100 dark:bg-white/10 hover:bg-[#3C147A] hover:text-white dark:hover:bg-blue-600 text-[#17092F] dark:text-white text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>{language === 'hi' ? 'लॉन्च पर मुझे बताएं' : 'Notify Me On WhatsApp'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

        </div>

        {/* INTERACTIVE CUSTOMER PROBLEM-SOLVING / FREE VALUE MESSAGE BOX */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto rounded-3xl p-6 sm:p-10 bg-gradient-to-r from-[#EDE5FA] via-white to-[#EDE5FA] dark:from-[#0E1528] dark:via-[#131B33] dark:to-[#0E1528] border-2 border-[#3C147A]/20 dark:border-blue-400/30 shadow-xl"
        >
          <div className="text-center max-w-2xl mx-auto mb-6">
            <span className="bg-[#3C147A] text-white dark:bg-blue-600 text-[11px] font-black uppercase px-3.5 py-1 rounded-full tracking-wider inline-block mb-3">
              {t.packages.problemBox?.badge || 'FREE PERSONALIZED CONSULTATION'}
            </span>
            <h3 className="text-xl sm:text-3xl font-extrabold text-[#17092F] dark:text-white tracking-tight mb-2">
              {t.packages.problemBox?.title}
            </h3>
            <p className="text-xs sm:text-sm text-[#685984] dark:text-slate-300 leading-relaxed">
              {t.packages.problemBox?.subtitle}
            </p>
          </div>

          {/* Quick Tags */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-4">
            {t.packages.problemBox?.quickTags.map((tag, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => handleQuickTagClick(tag)}
                className={`text-xs px-3 py-1.5 rounded-xl border transition-all cursor-pointer font-medium ${
                  selectedQuickTag === tag
                    ? 'bg-[#3C147A] text-white border-[#3C147A] dark:bg-[#D8FC38] dark:text-[#182C05] dark:border-[#D8FC38] font-bold'
                    : 'bg-white dark:bg-white/[0.05] text-[#17092F] dark:text-slate-300 border-[#3C147A]/15 dark:border-white/10 hover:border-[#3C147A]/40'
                }`}
              >
                + {tag}
              </button>
            ))}
          </div>

          {/* Form Box */}
          <form onSubmit={handleSendProblem} className="space-y-4">
            <div className="relative">
              <textarea
                value={customNeedText}
                onChange={(e) => setCustomNeedText(e.target.value)}
                placeholder={t.packages.problemBox?.placeholder}
                rows={3}
                className="w-full px-4 py-3 rounded-2xl bg-white dark:bg-black/40 border border-[#3C147A]/20 dark:border-white/15 text-[#17092F] dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-[#3C147A] dark:focus:ring-blue-400 resize-none transition-all"
              />
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
              <span className="text-[11px] text-[#685984] dark:text-slate-400 text-center sm:text-left">
                ✓ 100% Free Consultation • No Spam • Direct Founder WhatsApp
              </span>

              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs sm:text-sm tracking-wide shadow-lg shadow-[#25D366]/25 hover:shadow-xl transition-all cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>{t.packages.problemBox?.btnText || 'Send On WhatsApp'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>
        </motion.div>

      </div>
    </section>
  );
};
