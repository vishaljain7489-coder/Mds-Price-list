import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Send, CheckCircle2, Sparkles, Video } from 'lucide-react';
import confetti from 'canvas-confetti';
import { AGENCY_CONFIG } from '../../data/agencyData';
import { Badge } from '../common/Badge';
import { useApp } from '../../context/ThemeLanguageContext';

export const ConsultationForm: React.FC = () => {
  const { t, language, agencyPricing } = useApp();

  // Plan selection
  const [selectedAdPlan, setSelectedAdPlan] = useState<'6000' | '3000' | 'none'>('6000');
  const [includeReelPackage, setIncludeReelPackage] = useState<boolean>(false);
  const [starterOption, setStarterOption] = useState<'15reels' | '3videos'>('15reels');
  
  // Business category
  const [businessCategory, setBusinessCategory] = useState<'retail' | 'food' | 'car' | 'gym' | 'salon' | 'realty' | 'other'>('retail');

  // Contact inputs
  const [formData, setFormData] = useState({
    fullName: '',
    businessName: '',
    whatsappNumber: '',
    city: '',
    instagramHandle: '',
    customNote: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Dynamic cost calculation powered by Admin Pricing Controller
  const adPlanPrice = selectedAdPlan === '6000' ? agencyPricing.adsPackagePrice : selectedAdPlan === '3000' ? agencyPricing.starterPrice : 0;
  const reelPrice = includeReelPackage ? agencyPricing.reelsPackagePrice : 0;
  const totalInvestment = adPlanPrice + reelPrice;

  // Breakdown figures (Transparent split: Service + Direct Meta Spend across 15 reels)
  const agencyServiceFee = (selectedAdPlan === '6000' ? agencyPricing.adsServiceFee : selectedAdPlan === '3000' ? agencyPricing.starterServiceFee : 0) + (includeReelPackage ? agencyPricing.reelsPackagePrice : 0);
  const metaDirectSpend = selectedAdPlan === '6000' ? agencyPricing.adsMetaSpend : selectedAdPlan === '3000' ? agencyPricing.starterMetaSpend : 0;
  const testingSpend = 0;

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) errs.fullName = language === 'hi' ? 'कृपया अपना नाम दर्ज करें' : 'Name is required';
    if (!formData.businessName.trim()) errs.businessName = language === 'hi' ? 'बिजनेस का नाम दर्ज करें' : 'Business name is required';
    if (!formData.whatsappNumber.trim()) {
      errs.whatsappNumber = language === 'hi' ? 'व्हाट्सएप नंबर दर्ज करें' : 'WhatsApp number is required';
    } else if (formData.whatsappNumber.replace(/\D/g, '').length < 10) {
      errs.whatsappNumber = language === 'hi' ? 'मान्य 10 अंकों का नंबर दर्ज करें' : 'Enter valid 10-digit number';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#D8FC38', '#3C147A', '#60A5FA', '#FFFFFF']
      });

      // Construct WhatsApp message
      const categoryLabel = t.order.categoryOutcomes[businessCategory]?.label || businessCategory;
      const planName = selectedAdPlan === '3000' 
        ? `₹3,000 Starter Ad Plan (${starterOption === '15reels' ? 'Option A: 15 Reels' : 'Option B: 3 High-Impact Videos'})`
        : `₹6,000 Recommended Advertisement Package (15 Reels Ad Campaigns - ~₹200/Reel Ad Spend)`;
      
      const reelText = includeReelPackage ? ' + Separate 15 Reels Package (₹6,000)' : '';

      const waMessage = 
        `*NEW CAMPAIGN BOOKING - ${AGENCY_CONFIG.name}*\n\n` +
        `👤 *Name:* ${formData.fullName}\n` +
        `🏢 *Business:* ${formData.businessName}\n` +
        `📱 *WhatsApp:* ${formData.whatsappNumber}\n` +
        `📍 *Target City:* ${formData.city || 'Pan India / Local'}\n\n` +
        `🎯 *Category:* ${categoryLabel}\n` +
        `📦 *Selected Plan:* ${planName}${reelText}\n` +
        `💰 *Estimated Investment:* ₹${totalInvestment.toLocaleString('en-IN')}\n` +
        `• Agency Service: ₹${agencyServiceFee.toLocaleString('en-IN')}\n` +
        `• Direct Meta Spend: ₹${metaDirectSpend.toLocaleString('en-IN')}\n` +
        (testingSpend > 0 ? `• Testing Spend: ₹${testingSpend.toLocaleString('en-IN')}\n` : '') +
        `\n_Let's discuss onboarding and launch!_`;

      const waUrl = `https://wa.me/${AGENCY_CONFIG.whatsappNumber.replace('+', '')}?text=${encodeURIComponent(waMessage)}`;
      window.open(waUrl, '_blank');
    }, 600);
  };

  return (
    <section id="order-form" className="relative py-24 sm:py-32 bg-[#F5F1FD] dark:bg-[#060810] transition-colors duration-300 overflow-hidden">
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <Badge variant="purple" className="mb-4">
            {t.order.badge}
          </Badge>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#17092F] dark:text-white tracking-tight leading-tight mb-4">
            {t.order.heading}
          </h2>

          <p className="text-base text-[#685984] dark:text-slate-300 leading-relaxed">
            {t.order.subheading}
          </p>
        </div>

        {/* Main Form Container */}
        <div className="card-white rounded-[36px] p-6 sm:p-12 shadow-[0_20px_50px_rgba(60,20,122,0.12)]">
          
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 text-center flex flex-col items-center max-w-md mx-auto"
              >
                <div className="w-16 h-16 rounded-full bg-[#D8FC38] text-[#182C05] flex items-center justify-center mb-6 shadow-xl font-bold">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-[#17092F] dark:text-white mb-3">
                  {t.order.successTitle}
                </h3>

                <p className="text-sm text-[#685984] dark:text-slate-300 mb-8 leading-relaxed">
                  {t.order.successDesc}
                </p>

                <div className="flex flex-col sm:flex-row items-center gap-3 w-full">
                  <a
                    href={`https://wa.me/${AGENCY_CONFIG.whatsappNumber.replace('+', '')}?text=${encodeURIComponent(
                      language === 'hi'
                        ? `नमस्ते ${AGENCY_CONFIG.name}, मैं ${formData.fullName} (${formData.businessName}) से। मैंने वेबसाइट पर फॉर्म सबमिट किया है।`
                        : `Hi ${AGENCY_CONFIG.name}, this is ${formData.fullName} from ${formData.businessName}. I have submitted the intake form.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-lime w-full py-4 px-6 text-center text-sm font-bold flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>{t.order.openWaBtn}</span>
                  </a>

                  <button
                    onClick={() => setSubmitted(false)}
                    className="w-full sm:w-auto py-3 px-5 rounded-full bg-[#EDE5FA] dark:bg-white/10 text-[#3C147A] dark:text-white hover:bg-[#D8B4FE] text-xs font-bold transition-colors cursor-pointer"
                  >
                    {t.order.modifyBtn}
                  </button>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-10">
                
                {/* STEP 1: CHOOSE ADVERTISEMENT PACKAGE */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="w-6 h-6 rounded-full bg-[#3C147A] dark:bg-[#D8FC38] text-white dark:text-[#182C05] text-xs font-bold flex items-center justify-center">
                      1
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-[#17092F] dark:text-white">
                      {t.order.step1Title}
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    
                    {/* ₹3,000 Plan Tile */}
                    <div
                      onClick={() => setSelectedAdPlan('3000')}
                      className={`p-5 rounded-2xl cursor-pointer border-2 transition-all ${
                        selectedAdPlan === '3000'
                          ? 'border-[#3C147A] dark:border-[#D8FC38] bg-[#EDE5FA]/70 dark:bg-white/10 shadow-md'
                          : 'border-[#3C147A]/15 dark:border-white/10 bg-[#F5F1FD] dark:bg-white/[0.03] hover:border-[#3C147A]/40'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-mono font-bold uppercase text-[#7C3AED] dark:text-[#D8FC38]">
                          {t.packages.starter.tag}
                        </span>
                        <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                          selectedAdPlan === '3000' ? 'border-[#3C147A] dark:border-[#D8FC38] bg-[#3C147A] dark:bg-[#D8FC38]' : 'border-[#3C147A]/30 dark:border-white/30'
                        }`}>
                          {selectedAdPlan === '3000' && <div className="w-2 h-2 rounded-full bg-white dark:bg-[#182C05]" />}
                        </div>
                      </div>

                      <div className="flex items-baseline gap-1 mb-2">
                        <span className="text-3xl font-black font-mono text-[#17092F] dark:text-white">
                          ₹{agencyPricing.starterPrice.toLocaleString('en-IN')}
                        </span>
                        <span className="text-xs text-[#685984] dark:text-slate-400 font-medium">/ 30 Days</span>
                      </div>

                      <p className="text-xs text-[#685984] dark:text-slate-300 mb-3">
                        {t.packages.starter.desc}
                      </p>

                      {/* Distribution Choices */}
                      {selectedAdPlan === '3000' && (
                        <div className="mt-3 pt-3 border-t border-[#3C147A]/15 dark:border-white/10 space-y-2">
                          <span className="text-[11px] font-bold text-[#3C147A] dark:text-[#D8FC38] block">
                            {t.order.starterOptTitle}
                          </span>
                          <label className="flex items-center gap-2 text-xs text-[#17092F] dark:text-slate-200 cursor-pointer">
                            <input
                              type="radio"
                              name="starterOpt"
                              checked={starterOption === '15reels'}
                              onChange={() => setStarterOption('15reels')}
                              className="accent-[#3C147A] dark:accent-[#D8FC38]"
                            />
                            <span>{t.order.starterOptA}</span>
                          </label>
                          <label className="flex items-center gap-2 text-xs text-[#17092F] dark:text-slate-200 cursor-pointer">
                            <input
                              type="radio"
                              name="starterOpt"
                              checked={starterOption === '3videos'}
                              onChange={() => setStarterOption('3videos')}
                              className="accent-[#3C147A] dark:accent-[#D8FC38]"
                            />
                            <span>{t.order.starterOptB}</span>
                          </label>
                        </div>
                      )}
                    </div>

                    {/* ₹6,000 Recommended Advertisement Plan Tile */}
                    <div
                      onClick={() => setSelectedAdPlan('6000')}
                      className={`p-5 rounded-2xl cursor-pointer border-2 transition-all relative ${
                        selectedAdPlan === '6000'
                          ? 'border-[#3C147A] dark:border-[#D8FC38] bg-[#EDE5FA]/70 dark:bg-white/10 shadow-md'
                          : 'border-[#3C147A]/15 dark:border-white/10 bg-[#F5F1FD] dark:bg-white/[0.03] hover:border-[#3C147A]/40'
                      }`}
                    >
                      <div className="absolute -top-3 right-4">
                        <span className="badge-lime-pill text-[10px] py-0.5 px-2">
                          {t.packages.performance.popularBadge}
                        </span>
                      </div>

                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-mono font-bold uppercase text-[#7C3AED] dark:text-[#D8FC38]">
                          {t.packages.performance.tag}
                        </span>
                        <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                          selectedAdPlan === '6000' ? 'border-[#3C147A] dark:border-[#D8FC38] bg-[#3C147A] dark:bg-[#D8FC38]' : 'border-[#3C147A]/30 dark:border-white/30'
                        }`}>
                          {selectedAdPlan === '6000' && <div className="w-2 h-2 rounded-full bg-white dark:bg-[#182C05]" />}
                        </div>
                      </div>

                      <div className="flex items-baseline gap-1 mb-2">
                        <span className="text-3xl font-black font-mono text-[#17092F] dark:text-white">
                          ₹{agencyPricing.adsPackagePrice.toLocaleString('en-IN')}
                        </span>
                        <span className="text-xs text-[#685984] dark:text-slate-400 font-bold bg-[#D8FC38]/20 text-[#182C05] dark:text-[#D8FC38] px-2 py-0.5 rounded-md">
                          / 15 Reels Campaign
                        </span>
                      </div>

                      <p className="text-xs text-[#685984] dark:text-slate-300">
                        {t.packages.performance.desc}
                      </p>

                      <div className="mt-3 text-[11px] font-bold text-emerald-800 dark:text-emerald-300 bg-emerald-100 dark:bg-emerald-950/60 p-2 rounded-xl">
                        ✓ 15 Reels Ad Campaigns (~₹{Math.round(agencyPricing.adsMetaSpend / 15)}/Reel Ad Budget) • Direct WhatsApp Leads
                      </div>
                    </div>

                  </div>
                </div>

                {/* STEP 2: DEDICATED REEL PACKAGE (SEPARATE) */}
                <div className="p-5 rounded-2xl bg-[#EDE5FA]/50 dark:bg-white/[0.04] border border-[#3C147A]/20 dark:border-white/10">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-2xl bg-[#3C147A] dark:bg-white/10 text-white flex items-center justify-center shrink-0">
                        <Video className="w-5 h-5 text-[#D8FC38]" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-mono font-bold uppercase text-[#7C3AED] dark:text-[#D8FC38]">
                            {t.order.step2Badge}
                          </span>
                          <span className="text-[10px] font-mono bg-[#3C147A] dark:bg-[#D8FC38] text-white dark:text-[#182C05] px-2 py-0.2 rounded-full font-bold">
                            +₹{agencyPricing.reelsPackagePrice.toLocaleString('en-IN')}
                          </span>
                        </div>
                        <h4 className="text-sm sm:text-base font-bold text-[#17092F] dark:text-white mt-0.5">
                          {t.order.step2Title}
                        </h4>
                        <p className="text-xs text-[#685984] dark:text-slate-300 mt-1 leading-relaxed">
                          {t.order.step2Desc}
                        </p>
                      </div>
                    </div>

                    <label className="cursor-pointer flex items-center gap-2 shrink-0">
                      <input
                        type="checkbox"
                        checked={includeReelPackage}
                        onChange={(e) => setIncludeReelPackage(e.target.checked)}
                        className="w-5 h-5 accent-[#3C147A] dark:accent-[#D8FC38] rounded cursor-pointer"
                      />
                      <span className="text-xs font-bold text-[#3C147A] dark:text-[#D8FC38]">
                        {includeReelPackage ? t.order.includedText : t.order.addText}
                      </span>
                    </label>
                  </div>
                </div>

                {/* STEP 3: BUSINESS TYPE & TARGET OUTCOME */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="w-6 h-6 rounded-full bg-[#3C147A] dark:bg-[#D8FC38] text-white dark:text-[#182C05] text-xs font-bold flex items-center justify-center">
                      2
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-[#17092F] dark:text-white">
                      {t.order.step3Title}
                    </h3>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 mb-4">
                    {Object.entries(t.order.categoryOutcomes).map(([key, val]) => (
                      <button
                        type="button"
                        key={key}
                        onClick={() => setBusinessCategory(key as any)}
                        className={`p-3 rounded-2xl text-left border-2 transition-all cursor-pointer ${
                          businessCategory === key
                            ? 'border-[#3C147A] dark:border-[#D8FC38] bg-[#3C147A] dark:bg-[#D8FC38] text-white dark:text-[#182C05] font-bold shadow-sm'
                            : 'border-[#3C147A]/15 dark:border-white/10 bg-[#F5F1FD] dark:bg-white/[0.04] text-[#17092F] dark:text-white hover:border-[#3C147A]/40'
                        }`}
                      >
                        <span className="text-xs block leading-tight">{val.label}</span>
                      </button>
                    ))}
                  </div>

                  {/* Dynamic Category Outcome Notice */}
                  <div className="p-3.5 rounded-2xl bg-[#EDE5FA] dark:bg-white/[0.04] border border-[#3C147A]/15 dark:border-white/10 text-xs text-[#17092F] dark:text-slate-200 flex items-start gap-2.5">
                    <Sparkles className="w-4 h-4 text-[#7C3AED] dark:text-[#D8FC38] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#3C147A] dark:text-[#D8FC38]">{t.order.goalPrefix}</strong>
                      {t.order.categoryOutcomes[businessCategory]?.outcome}
                    </div>
                  </div>
                </div>

                {/* STEP 4: CLIENT CONTACT DETAILS */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="w-6 h-6 rounded-full bg-[#3C147A] dark:bg-[#D8FC38] text-white dark:text-[#182C05] text-xs font-bold flex items-center justify-center">
                      3
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-[#17092F] dark:text-white">
                      {t.order.step4Title}
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    
                    {/* Full Name */}
                    <div>
                      <label className="block text-xs font-bold text-[#685984] dark:text-slate-400 mb-1.5">
                        {t.order.fullNameLabel}
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Rohit Sharma"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className={`w-full px-4 py-3 rounded-2xl bg-[#F5F1FD] dark:bg-white/[0.05] text-[#17092F] dark:text-white border text-sm focus:outline-none transition-colors ${
                          errors.fullName ? 'border-red-500' : 'border-[#3C147A]/20 dark:border-white/15 focus:border-[#3C147A] dark:focus:border-[#D8FC38]'
                        }`}
                      />
                      {errors.fullName && <p className="text-[11px] text-red-500 mt-1">{errors.fullName}</p>}
                    </div>

                    {/* Business Name */}
                    <div>
                      <label className="block text-xs font-bold text-[#685984] dark:text-slate-400 mb-1.5">
                        {t.order.businessNameLabel}
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Apex Dealership / Bistro"
                        value={formData.businessName}
                        onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                        className={`w-full px-4 py-3 rounded-2xl bg-[#F5F1FD] dark:bg-white/[0.05] text-[#17092F] dark:text-white border text-sm focus:outline-none transition-colors ${
                          errors.businessName ? 'border-red-500' : 'border-[#3C147A]/20 dark:border-white/15 focus:border-[#3C147A] dark:focus:border-[#D8FC38]'
                        }`}
                      />
                      {errors.businessName && <p className="text-[11px] text-red-500 mt-1">{errors.businessName}</p>}
                    </div>

                    {/* WhatsApp Number */}
                    <div>
                      <label className="block text-xs font-bold text-[#685984] dark:text-slate-400 mb-1.5">
                        {t.order.whatsappLabel}
                      </label>
                      <input
                        type="tel"
                        placeholder="e.g. 9876543210"
                        value={formData.whatsappNumber}
                        onChange={(e) => setFormData({ ...formData, whatsappNumber: e.target.value })}
                        className={`w-full px-4 py-3 rounded-2xl bg-[#F5F1FD] dark:bg-white/[0.05] text-[#17092F] dark:text-white border text-sm focus:outline-none transition-colors ${
                          errors.whatsappNumber ? 'border-red-500' : 'border-[#3C147A]/20 dark:border-white/15 focus:border-[#3C147A] dark:focus:border-[#D8FC38]'
                        }`}
                      />
                      {errors.whatsappNumber && <p className="text-[11px] text-red-500 mt-1">{errors.whatsappNumber}</p>}
                    </div>

                    {/* City / Area */}
                    <div>
                      <label className="block text-xs font-bold text-[#685984] dark:text-slate-400 mb-1.5">
                        {t.order.cityLabel}
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Gurugram / Mumbai / Delhi NCR"
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        className="w-full px-4 py-3 rounded-2xl bg-[#F5F1FD] dark:bg-white/[0.05] text-[#17092F] dark:text-white border border-[#3C147A]/20 dark:border-white/15 focus:border-[#3C147A] dark:focus:border-[#D8FC38] text-sm focus:outline-none transition-colors"
                      />
                    </div>

                  </div>
                </div>

                {/* LIVE DYNAMIC TOTAL & SPLIT BREAKDOWN */}
                <div className="card-purple p-6 sm:p-7 rounded-[28px] shadow-lg">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/15">
                    <div>
                      <span className="text-xs font-mono uppercase tracking-wider text-[#D8FC38] font-bold block mb-1">
                        {t.order.totalEstimated}
                      </span>
                      <div className="text-3xl sm:text-4xl font-black font-mono text-white">
                        ₹{totalInvestment.toLocaleString('en-IN')}
                        <span className="text-xs text-purple-200 dark:text-slate-300 font-normal ml-1">{t.order.daysCount}</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 text-xs font-mono">
                      <span className="bg-white/10 px-3 py-1 rounded-full text-white">
                        {t.order.serviceFeeLabel}₹{agencyServiceFee.toLocaleString('en-IN')}
                      </span>
                      <span className="bg-white/10 px-3 py-1 rounded-full text-[#D8FC38]">
                        {t.order.metaSpendLabel}₹{metaDirectSpend.toLocaleString('en-IN')}
                      </span>
                      {testingSpend > 0 && (
                        <span className="bg-white/10 px-3 py-1 rounded-full text-white">
                          {t.order.testingSpendLabel}₹{testingSpend.toLocaleString('en-IN')}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-xs text-purple-100 dark:text-slate-300 font-medium">
                      {t.order.reassuranceText}
                    </p>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-lime w-full sm:w-auto py-3.5 px-8 text-xs font-black uppercase tracking-wider shadow-xl flex items-center justify-center gap-2 shrink-0 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <span>{t.order.preparingText}</span>
                      ) : (
                        <>
                          <span>{t.order.submitBtnText}</span>
                          <Send className="w-4 h-4 ml-1" />
                        </>
                      )}
                    </button>
                  </div>
                </div>

              </form>
            )}
          </AnimatePresence>

        </div>

      </div>
    </section>
  );
};
