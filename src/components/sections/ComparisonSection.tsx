import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, X, Smartphone, Layers, AlertCircle, CheckCircle2 } from 'lucide-react';
import { Badge } from '../common/Badge';
import { useApp } from '../../context/ThemeLanguageContext';

export const ComparisonSection: React.FC = () => {
  const { language } = useApp();
  const [activeTab, setActiveTab] = useState<'adsManager' | 'boostPost'>('adsManager');

  const content = {
    en: {
      badge: "STRATEGY VS CONVENIENCE",
      heading: "Boosting A Post Is Easy.",
      headingHighlight: "Building A Strategy Is Different.",
      sub: "Boost Post is built into the mobile app for quick reach, but enterprise Meta Ads Manager provides the granular telemetry, conversion funnels, and testing tools required for scalable customer acquisition.",
      tabAds: "META ADS MANAGER (STRATEGIC)",
      tabBoost: "BOOST POST (MOBILE)",
      adsBadge: "Recommended For Business Growth",
      adsTitle: "Meta Ads Manager",
      adsSub: "Strategic enterprise advertising with deep testing & conversion funnels.",
      boostBadge: "Convenient Quick Tool",
      boostTitle: "Boost Post Inside App",
      boostSub: "Basic engagement tool for casual profile visits and vanity likes.",
      clarificationTitle: "Fair Advertising Clarification:",
      clarificationText: "Boosting a post is genuine Meta advertising and delivers rapid likes and comments. However, Ads Manager is specifically designed for businesses requiring disciplined unit economics, lead verification, and continuous optimization.",
      managerPraise: "Meta Ads Manager lets us build multi-tiered funnels, exclude previous customers to stop wasting budget, and train the algorithm to hunt for qualified buyers.",
      features: [
        {
          name: "Targeting Control",
          manager: "Pinpoint Custom Audiences, Lookalikes & Geo Radius",
          boost: "Basic Broad Age & City Targeting"
        },
        {
          name: "Creative Testing",
          manager: "Systematic Multi-Hook & Angle Split Testing",
          boost: "Runs 1 Single Existing Post Only"
        },
        {
          name: "Funnel Objectives",
          manager: "Lead Forms, WhatsApp Direct & Conversions",
          boost: "Vanity Likes, Comments & Profile Views"
        },
        {
          name: "Budget Optimization",
          manager: "Machine Learning (CBO) Allocates To Top Ads",
          boost: "Static Spend Regardless Of Creative Fatigue"
        },
        {
          name: "Audience Retargeting",
          manager: "Retargets Video Viewers & Cart Abandoners",
          boost: "Zero Retargeting Capabilities"
        }
      ]
    },
    hi: {
      badge: "रणनीति बनाम सामान्य बूस्ट",
      heading: "पोस्ट बूस्ट करना आसान है।",
      headingHighlight: "असली रणनीति बनाना अलग बात है।",
      sub: "इंस्टाग्राम या फेसबुक ऐप में 'बूस्ट पोस्ट' करना आसान है, लेकिन मेटा एड्स मैनेजर वो गहराई, ट्रैकिंग और कन्वर्जन फनल देता है जो असली ग्राहक और ऑर्डर्स लाने के लिए जरूरी हैं।",
      tabAds: "मेटा एड्स मैनेजर (रणनीतिक)",
      tabBoost: "बूस्ट पोस्ट (मोबाइल ऐप)",
      adsBadge: "बिजनेस ग्रोथ के लिए अनुशंसित",
      adsTitle: "मेटा एड्स मैनेजर",
      adsSub: "गहन टेस्टिंग और कन्वर्जन फनल के साथ रणनीतिक विज्ञापन।",
      boostBadge: "त्वरित मोबाइल सुविधा",
      boostTitle: "ऐप के अंदर बूस्ट पोस्ट",
      boostSub: "सिर्फ प्रोफाइल विजिट और दिखावटी लाइक्स के लिए बुनियादी टूल।",
      clarificationTitle: "स्पष्टीकरण:",
      clarificationText: "पोस्ट बूस्ट करना भी मेटा का विज्ञापन है जिससे तुरंत लाइक्स और कमेंट्स मिलते हैं। लेकिन अगर आपको अपने बिजनेस के लिए पक्के ग्राहक, कॉल और ऑर्डर्स चाहिए तो एड्स मैनेजर ही सबसे सही विकल्प है।",
      managerPraise: "मेटा एड्स मैनेजर हमें फनल बनाने, पुराने ग्राहकों को हटाकर नया बजट बचाने और एल्गोरिदम को असली खरीदार ढूंढने के लिए ट्रेन करने की ताकत देता है।",
      features: [
        {
          name: "टारगेटिंग कंट्रोल",
          manager: "सटीक कस्टम ऑडियंस, लुकअलाइक और लोकल रेडियस",
          boost: "केवल सामान्य उम्र और शहर टारगेटिंग"
        },
        {
          name: "क्रिएटिव टेस्टिंग",
          manager: "मल्टीपल वीडियो हुक्स और एंगल्स की सटीक टेस्टिंग",
          boost: "सिर्फ 1 ही मौजूदा पोस्ट पर पैसे लगा सकते हैं"
        },
        {
          name: "कैंपेन ऑब्जेक्टिव",
          manager: "वेरिफाइड लीड फॉर्म्स और सीधी व्हाट्सएप इंक्वायरी",
          boost: "दिखावटी लाइक्स, कमेंट्स और प्रोफाइल व्यूज"
        },
        {
          name: "बजट ऑप्टिमाइजेशन",
          manager: "AI बेस्ट वीडियो पर अपने आप ज्यादा पैसा लगाता है",
          boost: "खराब वीडियो पर भी बराबर पैसे कटते रहते हैं"
        },
        {
          name: "री-टारगेटिंग",
          manager: "वीडियो देखने वालों को दोबारा विज्ञापन दिखाकर बेचना",
          boost: "री-टारगेटिंग का कोई विकल्प नहीं"
        }
      ]
    }
  };

  const activeContent = language === 'hi' ? content.hi : content.en;

  return (
    <section className="relative py-24 sm:py-32 bg-[#EDE5FA]/60 dark:bg-[#070913] border-y border-[#3C147A]/10 dark:border-white/10 transition-colors duration-300 overflow-hidden">
      
      {/* Background radial glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[650px] h-[650px] bg-purple-600/10 dark:bg-blue-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <Badge variant="purple" className="mb-4">
            {activeContent.badge}
          </Badge>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#17092F] dark:text-white tracking-tight leading-tight mb-5">
            {activeContent.heading} <br />
            <span className="text-[#3C147A] dark:text-[#D8FC38]">
              {activeContent.headingHighlight}
            </span>
          </h2>

          <p className="text-base sm:text-lg text-[#685984] dark:text-slate-300 leading-relaxed font-normal">
            {activeContent.sub}
          </p>
        </div>

        {/* Tab Switcher in Pill */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1.5 rounded-full bg-white dark:bg-[#0E1528] border border-[#3C147A]/15 dark:border-white/15 shadow-xl">
            <button
              onClick={() => setActiveTab('adsManager')}
              className={`flex items-center gap-2 px-5 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold tracking-wide transition-all cursor-pointer ${
                activeTab === 'adsManager'
                  ? 'bg-[#3C147A] dark:bg-[#D8FC38] text-white dark:text-[#182C05] shadow-lg'
                  : 'text-[#685984] dark:text-slate-400 hover:text-[#17092F] dark:hover:text-white'
              }`}
            >
              <Layers className="w-4 h-4" />
              <span>{activeContent.tabAds}</span>
            </button>

            <button
              onClick={() => setActiveTab('boostPost')}
              className={`flex items-center gap-2 px-5 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold tracking-wide transition-all cursor-pointer ${
                activeTab === 'boostPost'
                  ? 'bg-[#3C147A] dark:bg-[#D8FC38] text-white dark:text-[#182C05] shadow-lg'
                  : 'text-[#685984] dark:text-slate-400 hover:text-[#17092F] dark:hover:text-white'
              }`}
            >
              <Smartphone className="w-4 h-4" />
              <span>{activeContent.tabBoost}</span>
            </button>
          </div>
        </div>

        {/* Dynamic Comparison Panel */}
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            {activeTab === 'adsManager' ? (
              <motion.div
                key="adsManager"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="card-white rounded-[36px] p-7 sm:p-11 shadow-xl"
              >
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-[#3C147A]/10 dark:border-white/10 mb-8">
                  <div>
                    <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#EDE5FA] dark:bg-white/10 text-[#3C147A] dark:text-[#D8FC38] text-xs font-mono mb-2 border border-[#3C147A]/15 dark:border-white/15 font-bold">
                      <Layers className="w-3.5 h-3.5" />
                      <span>{activeContent.adsBadge}</span>
                    </div>
                    <h3 className="text-2xl font-black text-[#17092F] dark:text-white">{activeContent.adsTitle}</h3>
                    <p className="text-sm text-[#685984] dark:text-slate-300 mt-1">{activeContent.adsSub}</p>
                  </div>
                </div>

                {/* Criteria Table */}
                <div className="space-y-3.5 mb-8">
                  {activeContent.features.map((feat, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-2xl bg-[#F5F1FD] dark:bg-white/[0.04] border border-[#3C147A]/10 dark:border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full bg-[#D8FC38] text-[#182C05] flex items-center justify-center shrink-0 font-bold">
                          <Check className="w-3.5 h-3.5 stroke-[3]" />
                        </div>
                        <span className="text-sm font-bold text-[#17092F] dark:text-white">{feat.name}</span>
                      </div>
                      <span className="text-xs sm:text-sm font-mono text-[#3C147A] dark:text-[#D8FC38] pl-8 sm:pl-0 font-bold">
                        {feat.manager}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="p-4 rounded-2xl bg-[#EDE5FA] dark:bg-white/[0.05] border border-[#3C147A]/15 dark:border-white/10 text-xs text-[#17092F] dark:text-slate-200 flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#7C3AED] dark:text-[#D8FC38] shrink-0 mt-0.5" />
                  <span>{activeContent.managerPraise}</span>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="boostPost"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="card-white rounded-[36px] p-7 sm:p-11 shadow-xl"
              >
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-[#3C147A]/10 dark:border-white/10 mb-8">
                  <div>
                    <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-amber-500/10 text-amber-700 dark:text-amber-300 text-xs font-mono mb-2 border border-amber-500/20 font-bold">
                      <Smartphone className="w-3.5 h-3.5" />
                      <span>{activeContent.boostBadge}</span>
                    </div>
                    <h3 className="text-2xl font-black text-[#17092F] dark:text-white">{activeContent.boostTitle}</h3>
                    <p className="text-sm text-[#685984] dark:text-slate-300 mt-1">{activeContent.boostSub}</p>
                  </div>
                </div>

                {/* Criteria Table */}
                <div className="space-y-3.5 mb-8">
                  {activeContent.features.map((feat, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-2xl bg-[#F5F1FD] dark:bg-white/[0.04] border border-[#3C147A]/10 dark:border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full bg-rose-100 dark:bg-rose-950 text-rose-600 dark:text-rose-300 flex items-center justify-center shrink-0">
                          <X className="w-3.5 h-3.5 stroke-[3]" />
                        </div>
                        <span className="text-sm font-semibold text-[#685984] dark:text-slate-300">{feat.name}</span>
                      </div>
                      <span className="text-xs sm:text-sm font-mono text-[#685984] dark:text-slate-400 pl-8 sm:pl-0">
                        {feat.boost}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/40 text-xs text-amber-900 dark:text-amber-200 flex items-start gap-2.5">
                  <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>{activeContent.clarificationTitle}</strong> {activeContent.clarificationText}
                  </span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};
