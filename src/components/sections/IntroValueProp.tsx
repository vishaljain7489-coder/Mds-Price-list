import React from 'react';
import { motion } from 'framer-motion';
import { Target, Sparkles, TrendingUp, ArrowRight } from 'lucide-react';
import { Badge } from '../common/Badge';
import { useApp } from '../../context/ThemeLanguageContext';

export const IntroValueProp: React.FC = () => {
  const { t } = useApp();

  const cards = [
    {
      number: "01",
      icon: <Target className="w-6 h-6 text-[#3C147A] dark:text-[#60A5FA]" />,
      highlight: t.intro.c1Highlight,
      title: t.intro.c1Title,
      description: t.intro.c1Desc
    },
    {
      number: "02",
      icon: <Sparkles className="w-6 h-6 text-[#7C3AED] dark:text-[#D8FC38]" />,
      highlight: t.intro.c2Highlight,
      title: t.intro.c2Title,
      description: t.intro.c2Desc
    },
    {
      number: "03",
      icon: <TrendingUp className="w-6 h-6 text-[#3C147A] dark:text-[#34D399]" />,
      highlight: t.intro.c3Highlight,
      title: t.intro.c3Title,
      description: t.intro.c3Desc
    }
  ];

  return (
    <section className="relative py-24 sm:py-32 bg-[#F5F1FD] dark:bg-[#060810] transition-colors duration-300 overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <Badge variant="purple" className="mb-4">
            {t.intro.badge}
          </Badge>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#17092F] dark:text-white tracking-tight leading-[1.15] mb-5">
            {t.intro.heading} <br />
            <span className="text-[#3C147A] dark:text-[#D8FC38]">
              {t.intro.headingHighlight}
            </span>
          </h2>

          <p className="text-base sm:text-lg text-[#685984] dark:text-slate-300 leading-relaxed font-normal">
            {t.intro.supporting}
          </p>
        </div>

        {/* 3 Elevated Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, idx) => (
            <motion.div
              key={card.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="card-white p-8 sm:p-9 flex flex-col justify-between transition-all duration-300"
            >
              <div>
                {/* Top Number & Icon */}
                <div className="flex items-center justify-between mb-8">
                  <div className="w-12 h-12 rounded-2xl bg-[#EDE5FA] dark:bg-white/10 flex items-center justify-center">
                    {card.icon}
                  </div>
                  <span className="text-2xl font-mono font-black text-[#3C147A]/25 dark:text-white/20">
                    {card.number}
                  </span>
                </div>

                <div className="inline-block mb-3">
                  <span className="badge-lime-pill">
                    {card.highlight}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-[#17092F] dark:text-white mb-3">
                  {card.title}
                </h3>

                <p className="text-sm text-[#685984] dark:text-slate-300 leading-relaxed font-normal">
                  {card.description}
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-[#3C147A]/10 dark:border-white/10 flex items-center justify-between text-xs font-bold text-[#3C147A] dark:text-[#D8FC38]">
                <span>{t.intro.footerLink}</span>
                <ArrowRight className="w-4 h-4 text-[#3C147A] dark:text-[#D8FC38]" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
