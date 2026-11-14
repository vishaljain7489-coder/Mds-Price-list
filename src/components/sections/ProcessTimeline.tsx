import React from 'react';
import { motion } from 'framer-motion';
import { Search, Compass, Rocket, LineChart } from 'lucide-react';
import { Badge } from '../common/Badge';
import { useApp } from '../../context/ThemeLanguageContext';

export const ProcessTimeline: React.FC = () => {
  const { language } = useApp();

  const stepsData = {
    en: {
      badge: "SYSTEMATIC EXECUTION",
      heading: "Our Simple",
      headingHighlight: "4-Step Advertising Process.",
      sub: "From initial business discovery to data-backed scaling. Clean, predictable, and fully transparent at every milestone.",
      steps: [
        {
          num: "01",
          phase: "DISCOVERY & AUDIT",
          title: "Offer & Audience Architecture",
          desc: "We analyze your margin profile, previous ad account history, competitors, and pinpoint high-converting local customer demographics.",
          icon: <Search className="w-5 h-5 text-[#3C147A] dark:text-[#60A5FA]" />
        },
        {
          num: "02",
          phase: "CREATIVE & HOOKS",
          title: "Viral Scripting & Production",
          desc: "We map out 3-second pattern interrupts, high-retention video structures, and direct-response ad copy built specifically for 9:16 mobile feeds.",
          icon: <Compass className="w-5 h-5 text-[#7C3AED] dark:text-[#D8FC38]" />
        },
        {
          num: "03",
          phase: "TECHNICAL LAUNCH",
          title: "Campaign Setup & Pixel Tracking",
          desc: "We configure Conversions API, custom Lead Forms, WhatsApp direct routing, and launch structured A/B tests inside Meta Ads Manager.",
          icon: <Rocket className="w-5 h-5 text-[#3C147A] dark:text-[#34D399]" />
        },
        {
          num: "04",
          phase: "TELEMETRY & SCALE",
          title: "Optimization & Weekly Reporting",
          desc: "We prune losing creatives daily, double down on winning hooks, and send transparent weekly KPI summaries directly to your WhatsApp group.",
          icon: <LineChart className="w-5 h-5 text-[#7C3AED] dark:text-[#60A5FA]" />
        }
      ]
    },
    hi: {
      badge: "सटीक कार्यप्रणाली",
      heading: "हमारा सरल व पारदर्शी",
      headingHighlight: "4-चरणीय विज्ञापन प्रोसेस।",
      sub: "बिजनेस की पहली समझ से लेकर डेटा आधारित स्केलिंग तक। हर कदम पर पूरी स्पष्टता और पारदर्शी परिणाम।",
      steps: [
        {
          num: "01",
          phase: "पहला कदम: विश्लेषण",
          title: "ऑफर और ऑडियंस रणनीति",
          desc: "हम आपके मुनाफे के मार्जिन, पुराने विज्ञापनों और प्रतिस्पर्धियों का विश्लेषण करके आपके शहर की सही ग्राहक ऑडियंस तैयार करते हैं।",
          icon: <Search className="w-5 h-5 text-[#3C147A] dark:text-[#60A5FA]" />
        },
        {
          num: "02",
          phase: "दूसरा कदम: क्रिएटिव",
          title: "वायरल हुक और स्क्रिप्टिंग",
          desc: "हम 3-सेकंड के स्क्रॉल-स्टॉपर हुक, हाई-अटेंशन रील स्ट्रक्चर और 9:16 मोबाइल फॉर्मेट के लिए सटीक विज्ञापन तैयार करते हैं।",
          icon: <Compass className="w-5 h-5 text-[#7C3AED] dark:text-[#D8FC38]" />
        },
        {
          num: "03",
          phase: "तीसरा कदम: तकनीकी लॉन्च",
          title: "एड्स मैनेजर सेटअप और ट्रैकिंग",
          desc: "हम पिक्सल, डायरेक्ट व्हाट्सएप रूटिंग, प्री-क्वालिफाइड लीड फॉर्म्स सेट करके विज्ञापनों को लाइव लॉन्च करते हैं।",
          icon: <Rocket className="w-5 h-5 text-[#3C147A] dark:text-[#34D399]" />
        },
        {
          num: "04",
          phase: "चौथा कदम: मॉनिटरिंग",
          title: "दैनिक सुधार और व्हाट्सएप रिपोर्ट",
          desc: "हम कमजोर वीडियोज को तुरंत रोकते हैं, बेस्ट परफॉर्मिंग वीडियोज को स्केल करते हैं और हर हफ्ते व्हाट्सएप पर पूरी रिपोर्ट देते हैं।",
          icon: <LineChart className="w-5 h-5 text-[#7C3AED] dark:text-[#60A5FA]" />
        }
      ]
    }
  };

  const current = language === 'hi' ? stepsData.hi : stepsData.en;

  return (
    <section id="process" className="relative py-24 sm:py-32 bg-[#F5F1FD] dark:bg-[#060810] border-y border-[#3C147A]/10 dark:border-white/10 transition-colors duration-300 overflow-hidden">
      
      {/* Background glow in dark mode */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-purple-600/10 dark:bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

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

        {/* 4 Connected Timeline Cards */}
        <div className="relative">
          
          {/* Connecting line for desktop */}
          <div className="hidden lg:block absolute top-1/2 left-8 right-8 h-[2px] bg-gradient-to-r from-[#3C147A]/20 via-[#D8FC38] to-[#3C147A]/20 dark:from-blue-500/20 dark:via-[#D8FC38] dark:to-blue-500/20 -translate-y-8 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {current.steps.map((step, idx) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="card-white p-7 sm:p-8 flex flex-col justify-between transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-[#EDE5FA] dark:bg-white/10 flex items-center justify-center">
                      {step.icon}
                    </div>
                    <span className="text-2xl font-mono font-black text-[#3C147A]/25 dark:text-white/20">
                      {step.num}
                    </span>
                  </div>

                  <span className="text-[11px] font-mono font-bold tracking-wider text-[#7C3AED] dark:text-[#D8FC38] uppercase block mb-1.5">
                    {step.phase}
                  </span>

                  <h3 className="text-lg font-bold text-[#17092F] dark:text-white mb-2 leading-snug">
                    {step.title}
                  </h3>

                  <p className="text-xs text-[#685984] dark:text-slate-300 leading-relaxed font-normal">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#3C147A]/10 dark:border-white/10 flex items-center justify-between text-xs font-mono font-bold text-[#3C147A] dark:text-[#D8FC38]">
                  <span>Step {step.num} of 04</span>
                  <span className="w-2 h-2 rounded-full bg-[#3C147A] dark:bg-[#D8FC38]" />
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
