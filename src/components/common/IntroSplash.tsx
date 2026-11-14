import React, { useEffect, useState } from 'react';
import { Award, Zap } from 'lucide-react';

interface IntroSplashProps {
  onComplete: () => void;
}

export const IntroSplash: React.FC<IntroSplashProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(15);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setProgress(55), 250);
    const timer2 = setTimeout(() => setProgress(88), 650);
    const timer3 = setTimeout(() => setProgress(100), 1050);
    const timer4 = setTimeout(() => setFading(true), 1300);
    const timer5 = setTimeout(() => onComplete(), 1650);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
      clearTimeout(timer5);
    };
  }, [onComplete]);

  return (
    <div 
      className={`fixed inset-0 z-50 bg-[#0A0A0A] text-white flex flex-col items-center justify-center p-6 transition-all duration-700 ease-out overflow-hidden ${
        fading ? 'opacity-0 -translate-y-8 pointer-events-none' : 'opacity-100 translate-y-0'
      }`}
    >
      {/* Background Red Ambient Glow */}
      <div className="absolute w-[500px] h-[500px] rounded-full bg-[#C8102E]/25 blur-[120px] pointer-events-none animate-pulse" />
      <div className="absolute inset-0 bg-crosshair-circles opacity-30 pointer-events-none" />

      <div className="relative z-10 max-w-md w-full text-center flex flex-col items-center">
        
        {/* Animated Red Plus Icon */}
        <div className="w-16 h-16 rounded-2xl bg-[#C8102E] text-white flex items-center justify-center text-3xl font-black mb-6 shadow-[0_0_35px_#C8102E] animate-bounce duration-1000">
          +
        </div>

        {/* Brand Reveal */}
        <span className="text-[11px] font-mono uppercase tracking-[0.3em] text-[#C8102E] font-bold block mb-2">
          PERFORMANCE ADVERTISING & MEDIA
        </span>
        <h1 className="font-display text-5xl sm:text-7xl uppercase font-black tracking-tight text-white leading-none mb-3">
          RONIN MEDIA
        </h1>
        <p className="text-xs font-mono text-[#CCC5C4] uppercase tracking-wider mb-8">
          2 PARTNERS · 2-3 YEARS AD OPERATIONS
        </p>

        {/* High-Tech Progress Bar */}
        <div className="w-full max-w-xs bg-white/10 rounded-full h-1.5 overflow-hidden p-0.5 border border-white/10 mb-4">
          <div 
            className="h-full bg-[#C8102E] rounded-full shadow-[0_0_15px_#C8102E] transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="flex items-center justify-between w-full max-w-xs text-[10px] font-mono text-white/50 uppercase tracking-widest">
          <span>INITIALIZING</span>
          <span className="text-[#C8102E] font-bold">{progress}%</span>
        </div>

      </div>

      {/* Skip click button */}
      <button 
        onClick={onComplete}
        className="absolute bottom-8 text-[11px] font-mono text-white/30 hover:text-white transition-colors cursor-pointer uppercase tracking-widest"
      >
        Skip Intro →
      </button>

    </div>
  );
};
