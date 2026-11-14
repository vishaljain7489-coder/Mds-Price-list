import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, Search } from 'lucide-react';
import { Badge } from '../common/Badge';
import { useApp } from '../../context/ThemeLanguageContext';

export const FAQSection: React.FC = () => {
  const { t } = useApp();
  const [openId, setOpenId] = useState<number | null>(1);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleAccordion = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  const filteredFaqs = t.faq.items.filter(
    (item) =>
      item.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.a.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="faq" className="relative py-24 sm:py-32 bg-[#F5F1FD] dark:bg-[#060810] border-y border-[#3C147A]/10 dark:border-white/10 transition-colors duration-300 overflow-hidden">
      
      {/* Background ambient glow in dark mode */}
      <div className="absolute top-1/2 right-10 w-[500px] h-[500px] bg-purple-600/10 dark:bg-blue-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <Badge variant="purple" className="mb-4">
            {t.faq.badge}
          </Badge>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#17092F] dark:text-white tracking-tight leading-tight mb-4">
            {t.faq.heading}
          </h2>

          <p className="text-base text-[#685984] dark:text-slate-300 leading-relaxed font-normal">
            {t.faq.subheading}
          </p>
        </div>

        {/* Live Search Bar in Pill */}
        <div className="relative mb-10 max-w-md mx-auto">
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#7C3AED] dark:text-[#D8FC38]">
            <Search className="w-4 h-4" />
          </div>
          <input
            type="text"
            placeholder={t.faq.searchPlaceholder}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 rounded-full bg-white dark:bg-white/[0.05] border border-[#3C147A]/15 dark:border-white/15 text-[#17092F] dark:text-white placeholder-[#9A8CB5] dark:placeholder-slate-500 text-xs focus:outline-none focus:border-[#3C147A] dark:focus:border-[#D8FC38] shadow-sm transition-colors"
          />
        </div>

        {/* 10 Accordion Items */}
        <div className="space-y-3.5">
          {filteredFaqs.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <div
                key={faq.id}
                className={`card-white rounded-2xl transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'border-[#3C147A]/30 dark:border-blue-400/40 shadow-md'
                    : 'hover:border-[#3C147A]/20 dark:hover:border-white/20'
                }`}
              >
                <button
                  onClick={() => toggleAccordion(faq.id)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="flex items-center gap-3">
                    <span className="text-xs font-mono font-bold text-[#7C3AED] dark:text-[#D8FC38]">
                      {faq.id < 10 ? `0${faq.id}` : faq.id}
                    </span>
                    <span className="text-sm sm:text-base font-semibold text-[#17092F] dark:text-white">
                      {faq.q}
                    </span>
                  </span>

                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                    isOpen ? 'bg-[#3C147A] dark:bg-[#D8FC38] text-white dark:text-[#182C05] rotate-180' : 'bg-[#EDE5FA] dark:bg-white/10 text-[#3C147A] dark:text-white'
                  }`}>
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                    >
                      <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-[#685984] dark:text-slate-300 leading-relaxed border-t border-[#3C147A]/10 dark:border-white/10 font-normal">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
