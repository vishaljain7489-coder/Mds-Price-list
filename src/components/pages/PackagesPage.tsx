import React from 'react';
import { motion } from 'framer-motion';
import { PricingCarousel } from '../sections/PricingCarousel';
import { ComparisonSection } from '../sections/ComparisonSection';
import { Send, ArrowRight, ArrowLeft } from 'lucide-react';
import { useApp } from '../../context/ThemeLanguageContext';

export const PackagesPage: React.FC = () => {
  const { setCurrentPage, language } = useApp();

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      className="min-h-screen pt-24 sm:pt-28"
    >
      
      {/* Top Breadcrumb Nav */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-2">
        <button
          onClick={() => setCurrentPage('home')}
          className="inline-flex items-center gap-2 text-xs font-bold text-[#3C147A] dark:text-[#D8FC38] hover:underline cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{language === 'hi' ? '← होमपेज (हमारे बारे में) पर वापस जाएं' : '← Back to Home / About Us'}</span>
        </button>
      </div>

      {/* Pricing Packages Carousel / Grid */}
      <PricingCarousel />

      {/* Boost Post vs Ads Manager Educational Comparison */}
      <ComparisonSection />

      {/* Floating Bottom CTA */}
      <div className="py-14 bg-[#EDE5FA] dark:bg-[#0B0F1C] border-t border-[#3C147A]/10 dark:border-white/10 text-center px-4 transition-colors duration-300">
        <h3 className="text-xl sm:text-2xl font-black text-[#17092F] dark:text-white mb-3">
          {language === 'hi' 
            ? 'क्या आप अपना 15 रील्स पैकेज बुक करने के लिए तैयार हैं?' 
            : 'Ready To Lock In Your 15 Reels Package?'}
        </h3>
        <p className="text-xs sm:text-sm text-[#685984] dark:text-slate-300 max-w-xl mx-auto mb-6 leading-relaxed">
          {language === 'hi'
            ? 'हमारे पारदर्शी फॉर्म में अपने बिजनेस की डिटेल्स भरें और सीधे व्हाट्सएप पर अपने कैंपेन और वीडियो हुक्स पर बात करें।'
            : 'Submit your business details in our intake form and discuss your ad creatives directly on WhatsApp.'}
        </p>
        <button
          onClick={() => setCurrentPage('order')}
          className="btn-lime py-3.5 px-8 text-xs font-bold uppercase tracking-wider inline-flex items-center gap-2 cursor-pointer shadow-lg"
        >
          <Send className="w-4 h-4" />
          <span>{language === 'hi' ? 'बुकिंग फॉर्म खोलें' : 'Open Booking Form'}</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

    </motion.div>
  );
};
