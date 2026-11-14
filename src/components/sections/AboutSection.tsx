import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, RefreshCw, CheckCircle2, ArrowRight } from 'lucide-react';
import { AGENCY_CONFIG } from '../../data/agencyData';
import { Badge } from '../common/Badge';
import { useApp } from '../../context/ThemeLanguageContext';

export const AboutSection: React.FC = () => {
  const { language, setCurrentPage } = useApp();
  const [isFlipped, setIsFlipped] = useState(false);

  const content = {
    en: {
      badge: "MISSION & LEADERSHIP",
      heading: "Behind Every Campaign",
      headingHighlight: "Is A Clear Strategy.",
      sub: "We bridge the gap between creative visual storytelling and mathematical advertising unit economics.",
      founderRole: "FOUNDER & MEDIA BUYER",
      founderTitle: "Founder & Lead Strategist",
      founderName: `[Editable Founder Name] • ${AGENCY_CONFIG.name}`,
      founderDesc: "Specializing in direct response Reels copywriting, Meta Ads Manager bidding, and customer acquisition.",
      flipPrompt: "Hover / Tap to flip & read philosophy",
      principlesBadge: "AGENCY PRINCIPLES",
      philosophyTitle: "Performance Marketing Philosophy",
      quote: `"I started this agency because too many local business owners were burning cash blindly clicking 'Boost Post'. Our conviction is simple: give clients total account ownership, test real video angles, and hold every rupee accountable to verifiable enquiries."`,
      point1: "Disciplined Cost-Per-Lead Controls",
      point2: "Data Driven Hook Variation Tests",
      point3: "Zero Fabricated Metrics Policy",
      missionTitle: "Our Agency Mission",
      missionP1: "We empower local enterprises, gyms, clinics, salons, real estate professionals, and emerging brands with high-standard advertising systems previously accessible only to giant corporations.",
      missionP2: "By focusing strictly on Meta Platforms (Facebook, Instagram, WhatsApp, Messenger), our deep domain expertise allows us to extract maximum efficiency from Meta's machine learning algorithms.",
      card1Title: "You Own The Data",
      card1Desc: "Pixels, custom audiences, and ad history remain permanently in your Business Manager.",
      card2Title: "Unit Economics First",
      card2Desc: "We calculate lead-to-customer conversion rates to ensure ads contribute net profitable revenue."
    },
    hi: {
      badge: "मिशन और विज़न",
      heading: "हर सफल विज्ञापन के पीछे",
      headingHighlight: "एक सटीक रणनीति होती है।",
      sub: "हम केवल वीडियो नहीं बनाते, बल्कि हर विज्ञापन को गणितीय मुनाफे और असली बिजनेस रिटर्न से जोड़ते हैं।",
      founderRole: "फाउंडर व मीडिया बायर",
      founderTitle: "फाउंडर व लीड स्ट्रैटेजिस्ट",
      founderName: `[संस्थापक का नाम] • ${AGENCY_CONFIG.name}`,
      founderDesc: "मेटा एड्स मैनेजर, डायरेक्ट रिस्पॉन्स रील्स हुक्स और कस्टमर कन्वर्जन फनल में विशेषज्ञ।",
      flipPrompt: "क्लिक या होवर करके हमारी सोच पढ़ें",
      principlesBadge: "एजेंसी सिद्धांत",
      philosophyTitle: "परफॉरमेंस मार्केटिंग सोच",
      quote: `"मैंने यह एजेंसी इसलिए शुरू की क्योंकि बहुत सारे लोकल बिजनेसमैन 'बूस्ट पोस्ट' पर आंख बंद करके पैसे जला रहे थे। हमारी सोच साफ है: क्लाइंट को पूरा एड अकाउंट ओनरशिप दो, असली वीडियो हुक्स टेस्ट करो और हर एक रुपये का पारदर्शी हिसाब दो।"`,
      point1: "सटीक प्रति-लीड लागत नियंत्रण",
      point2: "डेटा-आधारित हुक और वीडियो टेस्टिंग",
      point3: "शून्य फर्जी मैट्रिक्स पॉलिसी",
      missionTitle: "हमारा एजेंसी मिशन",
      missionP1: "हम लोकल दुकानों, ऑटोमोबाइल डीलरशिप, जिम, क्लीनिक और रेस्टोरेंट्स को वो विज्ञापन ताकत देते हैं जो पहले सिर्फ बड़ी मल्टीनेशनल कंपनियों के पास होती थी।",
      missionP2: "फेसबुक, इंस्टाग्राम और व्हाट्सएप के अंदर मेटा के आर्टिफिशियल इंटेलिजेंस का सही इस्तेमाल करके हम आपके बिजनेस को लगातार ग्राहक देते हैं।",
      card1Title: "100% आपका डेटा",
      card1Desc: "पिक्सल, कस्टम ऑडियंस और पूरा एड रिकॉर्ड हमेशा आपके अपने बिजनेस मैनेजर में सुरक्षित रहता है।",
      card2Title: "शुद्ध मुनाफा पहले",
      card2Desc: "हम सिर्फ व्यूज नहीं नापते, बल्कि देखते हैं कि कितने रुपये लगाकर कितने की असली बिक्री हुई।"
    }
  };

  const current = language === 'hi' ? content.hi : content.en;

  return (
    <section id="about" className="relative py-24 sm:py-32 bg-[#F5F1FD] dark:bg-[#060810] border-y border-[#3C147A]/10 dark:border-white/10 transition-colors duration-300 overflow-hidden">
      
      {/* Background glow in dark mode */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-purple-600/10 dark:bg-blue-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <Badge variant="purple" className="mb-4">
            {current.badge}
          </Badge>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#17092F] dark:text-white tracking-tight leading-tight mb-5">
            {current.heading} <br />
            <span className="text-[#3C147A] dark:text-[#D8FC38]">
              {current.headingHighlight}
            </span>
          </h2>

          <p className="text-base sm:text-lg text-[#685984] dark:text-slate-300 leading-relaxed font-normal">
            {current.sub}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Interactive 3D Card Flip */}
          <div className="lg:col-span-5 flex justify-center">
            <div
              className="w-full max-w-sm h-[440px] perspective-1000 cursor-pointer select-none"
              onClick={() => setIsFlipped(!isFlipped)}
              onMouseEnter={() => setIsFlipped(true)}
              onMouseLeave={() => setIsFlipped(false)}
            >
              <motion.div
                className="w-full h-full relative transform-style-3d transition-transform duration-700"
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                transition={{ duration: 0.6 }}
              >
                {/* FRONT OF CARD */}
                <div className="card-white absolute inset-0 backface-hidden rounded-[32px] p-8 flex flex-col justify-between shadow-2xl overflow-hidden">
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span className="badge-lime-pill text-[10px]">
                        {current.founderRole}
                      </span>
                      <RefreshCw className="w-4 h-4 text-[#7C3AED] dark:text-slate-400" />
                    </div>

                    {/* Founder Avatar Placeholder */}
                    <div className="w-24 h-24 rounded-full bg-[#EDE5FA] dark:bg-white/10 p-1 mb-6 flex items-center justify-center overflow-hidden mx-auto shadow-inner">
                      <div className="w-full h-full rounded-full bg-[#3C147A] dark:bg-[#0E1528] flex items-center justify-center text-[#D8FC38]">
                        <User className="w-10 h-10" />
                      </div>
                    </div>

                    <div className="text-center">
                      <h3 className="text-2xl font-bold text-[#17092F] dark:text-white mb-1">
                        {current.founderTitle}
                      </h3>
                      <p className="text-xs font-mono text-[#685984] dark:text-slate-400 mb-3">
                        {current.founderName}
                      </p>
                      <p className="text-xs text-[#685984] dark:text-slate-300 font-normal leading-relaxed">
                        {current.founderDesc}
                      </p>
                    </div>
                  </div>

                  <div className="text-center pt-4 border-t border-[#3C147A]/10 dark:border-white/10 text-[11px] font-mono text-[#3C147A] dark:text-[#D8FC38] font-bold flex items-center justify-center gap-1.5">
                    <span>{current.flipPrompt}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* BACK OF CARD */}
                <div className="card-purple absolute inset-0 backface-hidden rotate-y-180 rounded-[32px] p-8 flex flex-col justify-between shadow-2xl overflow-hidden">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="badge-lime-pill text-[10px]">
                        {current.principlesBadge}
                      </span>
                      <RefreshCw className="w-4 h-4 text-[#D8FC38]" />
                    </div>

                    <h4 className="text-lg font-bold text-white mb-3">
                      {current.philosophyTitle}
                    </h4>

                    <p className="text-xs text-purple-100 dark:text-slate-200 leading-relaxed mb-4">
                      {current.quote}
                    </p>

                    <div className="space-y-2 text-xs font-mono text-purple-200 dark:text-slate-300">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#D8FC38]" />
                        <span>{current.point1}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#D8FC38]" />
                        <span>{current.point2}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#D8FC38]" />
                        <span>{current.point3}</span>
                      </div>
                    </div>
                  </div>

                  <div className="text-center pt-3 border-t border-white/10 text-[11px] font-mono text-[#D8FC38]">
                    {current.founderTitle}
                  </div>
                </div>

              </motion.div>
            </div>
          </div>

          {/* Right Column: Agency Mission & Working Philosophy */}
          <div className="lg:col-span-7 space-y-6">
            <div className="card-white p-8 sm:p-9 rounded-[32px]">
              <h3 className="text-2xl font-bold text-[#17092F] dark:text-white mb-4">
                {current.missionTitle}
              </h3>
              <p className="text-sm sm:text-base text-[#685984] dark:text-slate-300 leading-relaxed mb-4 font-normal">
                {current.missionP1}
              </p>
              <p className="text-sm text-[#685984] dark:text-slate-300 leading-relaxed font-normal">
                {current.missionP2}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-6 rounded-2xl bg-white dark:bg-white/[0.04] border border-[#3C147A]/10 dark:border-white/10 shadow-sm">
                <span className="text-xs font-mono text-[#3C147A] dark:text-[#D8FC38] uppercase block mb-1 font-bold">100% Control</span>
                <h4 className="text-base font-bold text-[#17092F] dark:text-white mb-2">{current.card1Title}</h4>
                <p className="text-xs text-[#685984] dark:text-slate-400 leading-relaxed">
                  {current.card1Desc}
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white dark:bg-white/[0.04] border border-[#3C147A]/10 dark:border-white/10 shadow-sm">
                <span className="text-xs font-mono text-[#7C3AED] dark:text-[#60A5FA] uppercase block mb-1 font-bold">Zero Fluff</span>
                <h4 className="text-base font-bold text-[#17092F] dark:text-white mb-2">{current.card2Title}</h4>
                <p className="text-xs text-[#685984] dark:text-slate-400 leading-relaxed">
                  {current.card2Desc}
                </p>
              </div>
            </div>

            {/* Direct Client Advisory Banner */}
            <div className="p-6 rounded-3xl bg-[#EDE5FA] dark:bg-white/[0.05] border border-[#3C147A]/15 dark:border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <span className="badge-lime-pill text-[10px] mb-1">
                  {language === 'hi' ? 'महत्वपूर्ण अंतर' : 'CLIENT ADVISORY'}
                </span>
                <h4 className="text-sm font-bold text-[#17092F] dark:text-white">
                  {language === 'hi' 
                    ? 'बूस्ट पोस्ट और मेटा एड्स मैनेजर में कितना फर्क आता है?' 
                    : 'Understand The Real Difference: Boost Post vs Ads Manager'}
                </h4>
                <p className="text-xs text-[#685984] dark:text-slate-300 mt-0.5">
                  {language === 'hi' 
                    ? 'जानिए क्यों 90% बिजनेस का बजट बूस्ट में जल जाता है और असली रिजल्ट्स कैसे मिलते हैं।' 
                    : 'Discover why 90% of business budget burns on casual clicks and how to fix it.'}
                </p>
              </div>

              <button
                onClick={() => setCurrentPage('ad-info')}
                className="btn-purple py-2.5 px-5 text-xs font-bold uppercase tracking-wider inline-flex items-center gap-1.5 shrink-0 cursor-pointer"
              >
                <span>{language === 'hi' ? 'गाइड पढ़ें' : 'Read Guide'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
