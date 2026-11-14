import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Layers, Smartphone, AlertTriangle, CheckCircle2, ShieldCheck, ArrowRight, MessageCircle, XCircle, Zap, HelpCircle, Share2, Check } from 'lucide-react';
import { Badge } from '../common/Badge';
import { useApp } from '../../context/ThemeLanguageContext';
import { AGENCY_CONFIG } from '../../data/agencyData';

export const AdInfoPage: React.FC = () => {
  const { t, language, setCurrentPage } = useApp();
  const [copied, setCopied] = useState(false);

  const handleShareAdInfo = () => {
    const shareText = language === 'hi'
      ? `📢 *बूस्ट पोस्ट vs मेटा एड्स मैनेजर - महत्वपूर्ण जानकारी*\n\nक्या आप भी इंस्टाग्राम पर 'Boost Post' दबाकर पैसे बर्बाद कर रहे हैं? जानिए क्यों 90% बिजनेस का बजट जल जाता है और एड्स मैनेजर से 10 गुना ज्यादा ग्राहक कैसे मिलते हैं:\n\n👉 यहाँ पढ़ें: ${window.location.origin}/#ad-info\n\n- ${AGENCY_CONFIG.name}`
      : `📢 *Boost Post vs Meta Ads Manager - Essential Guide*\n\nAre you wasting ad budget by clicking the mobile 'Boost' button? Understand why 90% of businesses waste money and how professional Ads Manager funnels generate 10x more leads:\n\n👉 Read here: ${window.location.origin}/#ad-info\n\n- ${AGENCY_CONFIG.name}`;

    const waUrl = `https://wa.me/?text=${encodeURIComponent(shareText)}`;
    window.open(waUrl, '_blank');
  };

  return (
    <div className="pt-24 sm:pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      
      {/* 1. Header Block */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <Badge variant="purple" className="mb-4">
          {t.adInfo.badge}
        </Badge>

        <h1 className="text-3xl sm:text-5xl font-extrabold text-[#17092F] dark:text-white tracking-tight leading-[1.15] mb-5">
          {t.adInfo.heading} <br />
          <span className="text-[#3C147A] dark:text-[#D8FC38]">
            {t.adInfo.headingHighlight}
          </span>
        </h1>

        <p className="text-base sm:text-lg text-[#685984] dark:text-slate-300 leading-relaxed font-normal mb-8">
          {t.adInfo.subheading}
        </p>

        {/* Share Knowledge Card Button */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={handleShareAdInfo}
            className="btn-lime py-3 px-6 text-xs font-bold uppercase tracking-wider inline-flex items-center gap-2 cursor-pointer shadow-md"
          >
            <Share2 className="w-4 h-4" />
            <span>{language === 'hi' ? 'यह जानकारी क्लाइंट के साथ शेयर करें' : 'Share This Guide With Client'}</span>
          </button>

          <button
            onClick={() => setCurrentPage('packages')}
            className="card-white py-3 px-6 text-xs font-bold inline-flex items-center gap-2 cursor-pointer hover:border-[#3C147A] dark:hover:border-[#D8FC38]"
          >
            <span>{language === 'hi' ? 'हमारे पैकेजेस देखें' : 'View Ad Packages'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* 2. Visual Spend Comparison Simulator (₹3,000 Spend Example) */}
      <div className="mb-20">
        <div className="text-center mb-8">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#7C3AED] dark:text-[#D8FC38] block mb-1">
            REALISTIC SIMULATION
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#17092F] dark:text-white">
            {t.adInfo.simulatorTitle}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          
          {/* Card A: Mobile Boost Post */}
          <div className="card-white p-7 sm:p-9 rounded-[32px] border-2 border-rose-300/60 dark:border-rose-900/40 relative flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-rose-600 dark:text-rose-400 flex items-center gap-1.5">
                  <Smartphone className="w-4 h-4" />
                  {t.adInfo.boostCardTitle}
                </span>
                <span className="text-[10px] font-bold bg-rose-100 dark:bg-rose-950/70 text-rose-700 dark:text-rose-300 px-2.5 py-0.5 rounded-full">
                  {t.adInfo.boostBadge}
                </span>
              </div>

              <div className="mb-6 pb-4 border-b border-rose-200/50 dark:border-rose-900/40">
                <span className="text-xs font-mono text-[#685984] dark:text-slate-400 block mb-1 font-bold">
                  {t.adInfo.boostSpend}
                </span>
                <span className="text-3xl sm:text-4xl font-black font-mono text-rose-600 dark:text-rose-400">
                  ₹3,000 → 0 Leads
                </span>
              </div>

              <ul className="space-y-3 text-xs text-[#17092F] dark:text-slate-200 mb-6">
                <li className="flex items-start gap-2.5 text-rose-700 dark:text-rose-300">
                  <XCircle className="w-4 h-4 shrink-0 mt-0.5" />
                  <span>{t.adInfo.boostResult1}</span>
                </li>
                <li className="flex items-start gap-2.5 text-rose-700 dark:text-rose-300">
                  <XCircle className="w-4 h-4 shrink-0 mt-0.5" />
                  <span>{t.adInfo.boostResult2}</span>
                </li>
                <li className="flex items-start gap-2.5 text-rose-700 dark:text-rose-300 font-bold">
                  <XCircle className="w-4 h-4 shrink-0 mt-0.5" />
                  <span>{t.adInfo.boostResult3}</span>
                </li>
                <li className="flex items-start gap-2.5 text-rose-700 dark:text-rose-300">
                  <XCircle className="w-4 h-4 shrink-0 mt-0.5" />
                  <span>{t.adInfo.boostResult4}</span>
                </li>
              </ul>
            </div>

            <div className="p-3.5 rounded-2xl bg-rose-50 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-900/30 text-xs font-bold text-rose-700 dark:text-rose-300">
              {t.adInfo.boostVerdict}
            </div>
          </div>

          {/* Card B: Meta Ads Manager */}
          <div className="card-purple p-7 sm:p-9 rounded-[32px] border-2 border-[#D8FC38] relative flex flex-col justify-between shadow-2xl">
            <div className="absolute -top-3.5 right-6">
              <span className="badge-lime-pill text-[10px] py-0.5 px-3">
                ★ RECOMMENDED FOR REAL REVENUE
              </span>
            </div>

            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#D8FC38] flex items-center gap-1.5">
                  <Layers className="w-4 h-4" />
                  {t.adInfo.managerCardTitle}
                </span>
                <span className="text-[11px] font-bold bg-white/20 text-white px-2.5 py-0.5 rounded-full">
                  {t.adInfo.managerBadge}
                </span>
              </div>

              <div className="mb-6 pb-4 border-b border-white/15">
                <span className="text-xs font-mono text-purple-200 block mb-1 font-bold">
                  {t.adInfo.managerSpend}
                </span>
                <span className="text-3xl sm:text-4xl font-black font-mono text-[#D8FC38]">
                  ₹3,000 → 15 to 30 WhatsApp Inquiries
                </span>
              </div>

              <ul className="space-y-3 text-xs text-white mb-6 font-medium">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#D8FC38] shrink-0 mt-0.5" />
                  <span>{t.adInfo.managerResult1}</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#D8FC38] shrink-0 mt-0.5" />
                  <span>{t.adInfo.managerResult2}</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#D8FC38] shrink-0 mt-0.5" />
                  <span>{t.adInfo.managerResult3}</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#D8FC38] shrink-0 mt-0.5" />
                  <span>{t.adInfo.managerResult4}</span>
                </li>
              </ul>
            </div>

            <div className="p-3.5 rounded-2xl bg-white/10 border border-white/20 text-xs font-bold text-[#D8FC38]">
              {t.adInfo.managerVerdict}
            </div>
          </div>

        </div>
      </div>

      {/* 3. 5 Fatal Traps of App 'Boost Post' */}
      <div className="mb-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <Badge variant="purple" className="mb-2">
            WARNING FOR BUSINESS OWNERS
          </Badge>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#17092F] dark:text-white">
            {t.adInfo.trapsTitle}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.adInfo.traps.map((trap, idx) => (
            <motion.div
              key={trap.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="card-white p-7 rounded-[28px] border-l-4 border-l-rose-500 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-black text-rose-600 bg-rose-100 dark:bg-rose-950 px-2 py-0.5 rounded">
                    TRAP {trap.num}
                  </span>
                  <AlertTriangle className="w-4 h-4 text-rose-500" />
                </div>
                <h3 className="text-base font-bold text-[#17092F] dark:text-white mb-2 leading-snug">
                  {trap.title}
                </h3>
                <p className="text-xs text-[#685984] dark:text-slate-300 leading-relaxed font-normal">
                  {trap.desc}
                </p>
              </div>
            </motion.div>
          ))}

          {/* Quick Summary Takeaway Card */}
          <div className="card-purple p-7 rounded-[28px] flex flex-col justify-between">
            <div>
              <span className="badge-lime-pill text-[10px] mb-3">
                HONEST TRUTH
              </span>
              <h3 className="text-lg font-bold text-white mb-2">
                {language === 'hi' ? 'सीधी और सच्ची बात:' : 'The Honest Reality:'}
              </h3>
              <p className="text-xs text-purple-100 dark:text-slate-300 leading-relaxed">
                {language === 'hi'
                  ? 'अगर आपको सिर्फ इंस्टाग्राम पर दोस्तों को 200 लाइक्स दिखाने हैं तो बूस्ट पोस्ट ठीक है। लेकिन अगर आपको दुकान पर ग्राहक, व्हाट्सएप पर खरीदार और बिक्री चाहिए, तो एड्स मैनेजर ही एकमात्र वैज्ञानिक तरीका है।'
                  : 'If you merely want 200 casual likes to show friends, Boost Post is fine. But if you need paying customers, WhatsApp orders, and booked clients, Ads Manager is the only scientific route.'}
              </p>
            </div>
            <div className="pt-4 border-t border-white/15 text-[11px] font-mono text-[#D8FC38] font-bold">
              100% Client Transparency Policy
            </div>
          </div>
        </div>
      </div>

      {/* 4. 5 Superpowers of Enterprise Meta Ads Manager */}
      <div className="mb-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <Badge variant="purple" className="mb-2">
            ADVANCED ARCHITECTURE
          </Badge>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#17092F] dark:text-white">
            {t.adInfo.superpowersTitle}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.adInfo.superpowers.map((sp, idx) => (
            <motion.div
              key={sp.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="card-white p-7 rounded-[28px] border-t-4 border-t-[#3C147A] dark:border-t-[#D8FC38] flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-2xl bg-[#EDE5FA] dark:bg-white/10 flex items-center justify-center mb-4 text-[#3C147A] dark:text-[#D8FC38] font-bold">
                  0{idx + 1}
                </div>
                <h3 className="text-base font-bold text-[#17092F] dark:text-white mb-2 leading-snug">
                  {sp.title}
                </h3>
                <p className="text-xs text-[#685984] dark:text-slate-300 leading-relaxed font-normal">
                  {sp.desc}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-[#3C147A]/10 dark:border-white/10 flex items-center justify-between text-[11px] font-mono font-bold text-[#3C147A] dark:text-[#D8FC38]">
                <span>Standard Feature</span>
                <Check className="w-3.5 h-3.5 stroke-[3]" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 5. Bottom Conversion Callout */}
      <div className="card-purple p-8 sm:p-12 rounded-[36px] text-center max-w-4xl mx-auto shadow-2xl">
        <span className="badge-lime-pill mb-3">
          START STRATEGICALLY
        </span>
        <h2 className="text-2xl sm:text-4xl font-extrabold text-white mb-4">
          {language === 'hi' 
            ? 'बूस्ट पर पैसे बर्बाद करना बंद करें, सही रणनीति से शुरू करें' 
            : 'Stop Wasting Money On Boost. Start Advertising Intentionally.'}
        </h2>
        <p className="text-xs sm:text-sm text-purple-100 dark:text-slate-200 max-w-xl mx-auto mb-8 leading-relaxed">
          {language === 'hi'
            ? 'हमारे ₹3,000 या ₹5,000 वाले पारदर्शी पैकेजेस के साथ अपने बिजनेस के लिए पहला पेशेवर विज्ञापन कैंपेन शुरू करें।'
            : 'Launch your first structured ad campaign with our transparent ₹3,000 or ₹5,000 packages.'}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => setCurrentPage('order')}
            className="btn-lime w-full sm:w-auto py-3.5 px-8 text-xs font-black uppercase tracking-wider shadow-lg cursor-pointer flex items-center justify-center gap-2"
          >
            <span>{language === 'hi' ? 'अभी कैंपेन बुक करें' : 'Book Campaign Form'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            href={`https://wa.me/${AGENCY_CONFIG.whatsappNumber.replace('+', '')}?text=${encodeURIComponent(
              language === 'hi'
                ? `नमस्ते ${AGENCY_CONFIG.name}, मैंने आपकी 'बूस्ट पोस्ट vs एड्स मैनेजर' गाइड पढ़ी। मैं अपने बिजनेस के लिए विज्ञापन शुरू करना चाहता हूँ।`
                : `Hi ${AGENCY_CONFIG.name}, I read your 'Boost vs Ads Manager' guide. I want to start strategic advertising for my business.`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto py-3.5 px-7 rounded-full bg-white/15 hover:bg-white/25 text-white border border-white/20 text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 text-emerald-400" />
            <span>{language === 'hi' ? 'व्हाट्सएप पर बात करें' : 'Chat On WhatsApp'}</span>
          </a>
        </div>
      </div>

    </div>
  );
};
