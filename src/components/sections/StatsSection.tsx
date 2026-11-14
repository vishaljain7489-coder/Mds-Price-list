import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Shield, CheckCircle2 } from 'lucide-react';
import { useApp } from '../../context/ThemeLanguageContext';

interface CounterProps {
  displayStr: string;
}

const AnimatedCounter: React.FC<CounterProps> = ({ displayStr }) => {
  const numericPart = parseInt(displayStr.replace(/\D/g, ''), 10) || 0;
  const prefix = displayStr.startsWith('₹') ? '₹' : '';
  const suffix = displayStr.includes('L+') ? 'L+' : displayStr.includes('+') ? '+' : displayStr.includes('%') ? '%' : '';

  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;
    if (numericPart === 0) {
      setCount(0);
      return;
    }
    
    let start = 0;
    const duration = 1500;
    const stepTime = 25;
    const totalSteps = duration / stepTime;
    const increment = numericPart / totalSteps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= numericPart) {
        setCount(numericPart);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, numericPart]);

  return (
    <span ref={ref} className="font-mono font-black tracking-tight text-[#3C147A] dark:text-[#D8FC38]">
      {prefix}{count}{suffix}
    </span>
  );
};

export const StatsSection: React.FC = () => {
  const { t } = useApp();

  return (
    <section className="relative py-20 bg-[#EDE5FA] dark:bg-[#0B0F1C] border-y border-[#3C147A]/10 dark:border-white/10 transition-colors duration-300 overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Notice & Editorial Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-12">
          <div>
            <span className="badge-lime-pill mb-2">
              {t.stats.badge}
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold text-[#17092F] dark:text-white">
              {t.stats.heading}
            </h3>
          </div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white dark:bg-[#141B2D] text-xs text-[#3C147A] dark:text-[#D8FC38] font-bold shadow-sm border border-[#3C147A]/10 dark:border-white/15">
            <Shield className="w-4 h-4 text-[#7C3AED] dark:text-[#60A5FA]" />
            <span>{t.stats.verifiedBadge}</span>
          </div>
        </div>

        {/* 4 Animated Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.stats.items.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.1 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="p-7 rounded-[28px] card-white transition-all duration-300"
            >
              <div className="text-3xl sm:text-4xl lg:text-5xl font-black mb-2">
                <AnimatedCounter displayStr={stat.value} />
              </div>

              <div className="text-sm font-bold text-[#17092F] dark:text-white mb-1.5">
                {stat.label}
              </div>

              <p className="text-xs text-[#685984] dark:text-slate-400 font-medium leading-relaxed">
                {stat.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 flex items-center justify-center gap-2 text-xs font-bold text-[#685984] dark:text-slate-400 text-center">
          <CheckCircle2 className="w-4 h-4 text-[#7C3AED] dark:text-[#D8FC38]" />
          <span>{t.stats.footNote}</span>
        </div>

      </div>
    </section>
  );
};
