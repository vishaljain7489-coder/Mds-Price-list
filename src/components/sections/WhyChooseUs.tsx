import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Layers, Activity, FileSpreadsheet, MessageCircle } from 'lucide-react';
import { Badge } from '../common/Badge';
import { useApp } from '../../context/ThemeLanguageContext';

export const WhyChooseUs: React.FC = () => {
  const { t } = useApp();

  const icons = [
    <Target className="w-5 h-5 text-[#3C147A] dark:text-[#60A5FA]" />,
    <Eye className="w-5 h-5 text-[#7C3AED] dark:text-[#D8FC38]" />,
    <Layers className="w-5 h-5 text-[#3C147A] dark:text-[#34D399]" />,
    <Activity className="w-5 h-5 text-[#7C3AED] dark:text-[#60A5FA]" />,
    <FileSpreadsheet className="w-5 h-5 text-[#3C147A] dark:text-[#D8FC38]" />,
    <MessageCircle className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
  ];

  return (
    <section className="relative py-24 sm:py-32 bg-[#F5F1FD] dark:bg-[#060810] border-y border-[#3C147A]/10 dark:border-white/10 transition-colors duration-300 overflow-hidden">
      
      {/* Background glow in dark mode */}
      <div className="absolute top-1/2 left-1/3 w-[500px] h-[500px] bg-purple-600/10 dark:bg-blue-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="purple" className="mb-4">
            {t.whyUs.badge}
          </Badge>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#17092F] dark:text-white tracking-tight leading-tight mb-5">
            {t.whyUs.heading} <br />
            <span className="text-[#3C147A] dark:text-[#D8FC38]">
              {t.whyUs.headingHighlight}
            </span>
          </h2>

          <p className="text-base sm:text-lg text-[#685984] dark:text-slate-300 leading-relaxed font-normal">
            {t.whyUs.supporting}
          </p>
        </div>

        {/* 6 Advantages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.whyUs.items.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="card-white p-8 sm:p-9 flex flex-col justify-between transition-all duration-300"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#EDE5FA] dark:bg-white/10 flex items-center justify-center mb-6">
                  {icons[idx % icons.length]}
                </div>

                <h3 className="text-xl font-bold text-[#17092F] dark:text-white mb-3">
                  {item.title}
                </h3>

                <p className="text-sm text-[#685984] dark:text-slate-300 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>

              <div className="pt-6 border-t border-[#3C147A]/10 dark:border-white/10 mt-6 flex items-center justify-between text-xs font-mono text-[#685984] dark:text-slate-400">
                <span>{t.whyUs.standardTag}</span>
                <span className="w-2 h-2 rounded-full bg-[#3C147A] dark:bg-[#D8FC38]" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
