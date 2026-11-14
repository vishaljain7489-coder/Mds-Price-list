import React from 'react';
import { ArrowRight, MessageCircle, Rocket } from 'lucide-react';
import { AGENCY_CONFIG } from '../../data/agencyData';
import { Badge } from '../common/Badge';
import { useApp } from '../../context/ThemeLanguageContext';

export const FinalCTA: React.FC = () => {
  const { t, setCurrentPage } = useApp();

  return (
    <section className="relative py-28 sm:py-36 bg-[#F5F1FD] dark:bg-[#060810] transition-colors duration-300 overflow-hidden">
      
      {/* Intense animated gradient glow backdrop */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[450px] bg-gradient-to-r from-purple-600/15 via-blue-500/15 to-purple-600/15 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        <Badge variant="purple" className="mb-6">
          {t.finalCta.badge}
        </Badge>

        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#17092F] dark:text-white tracking-tight leading-[1.1] mb-6 max-w-3xl mx-auto">
          {t.finalCta.headline}
        </h2>

        <p className="text-base sm:text-lg text-[#685984] dark:text-slate-300 max-w-2xl mx-auto leading-relaxed mb-10 font-normal">
          {t.finalCta.supporting}
        </p>

        {/* CTA Buttons: Primary Button + WhatsApp Pill */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
          <button
            onClick={() => setCurrentPage('packages')}
            className="btn-lime w-full sm:w-auto inline-flex items-center justify-center gap-2 py-4 px-8 text-sm font-bold tracking-wide shadow-lg cursor-pointer"
          >
            <Rocket className="w-4 h-4 text-[#182C05]" />
            <span>{t.finalCta.startBtn}</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            href={`https://wa.me/${AGENCY_CONFIG.whatsappNumber.replace('+', '')}?text=${encodeURIComponent(
              `Hi ${AGENCY_CONFIG.name}, I want to start our Meta Ads campaign. Let's discuss onboarding!`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3.5 px-7 rounded-full bg-white dark:bg-[#121A30] text-[#17092F] dark:text-white border border-[#3C147A]/15 dark:border-white/15 font-bold text-sm shadow-md hover:scale-105 transition-all"
          >
            <MessageCircle className="w-4 h-4 text-emerald-500" />
            <span>{t.finalCta.waBtn}</span>
          </a>
        </div>

        {/* Reassurance pills */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-[#685984] dark:text-slate-400 font-bold">
          {t.finalCta.points.map((pt, idx) => (
            <span key={idx}>{pt}</span>
          ))}
        </div>

      </div>
    </section>
  );
};
