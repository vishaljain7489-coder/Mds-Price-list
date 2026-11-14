import React from 'react';
import { MARQUEE_ITEMS } from '../../data/agencyData';
import { Sparkles } from 'lucide-react';

export const TrustMarquee: React.FC = () => {
  // Repeated items array ensures seamless infinite loop without any jerk or gap
  const repeatedItems = [
    ...MARQUEE_ITEMS,
    ...MARQUEE_ITEMS,
    ...MARQUEE_ITEMS,
    ...MARQUEE_ITEMS
  ];

  return (
    <div className="relative py-4 bg-[#3C147A] dark:bg-[#0B1020] text-white overflow-hidden border-y border-white/10 shadow-inner z-20">
      <div className="animate-marquee-infinite flex items-center">
        {repeatedItems.map((item, idx) => (
          <div
            key={idx}
            className="flex items-center gap-4 mx-6 text-xs sm:text-sm font-mono font-bold tracking-widest text-purple-100 dark:text-slate-300 uppercase select-none hover:text-[#D8FC38] transition-colors shrink-0"
          >
            <span>{item}</span>
            <Sparkles className="w-3.5 h-3.5 text-[#D8FC38]" />
          </div>
        ))}
      </div>
    </div>
  );
};
