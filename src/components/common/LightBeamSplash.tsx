import React, { useEffect, useState } from 'react';

interface LightBeamSplashProps {
  onComplete: () => void;
}

export const LightBeamSplash: React.FC<LightBeamSplashProps> = ({ onComplete }) => {
  // Phase 0: Dark wait
  // Phase 1: Laser beam cuts down from top
  // Phase 2: Beam strikes logo & explodes with energy shockwave
  // Phase 3: Logo absorbs light & text ignites
  // Phase 4: Dissolves into portal
  const [phase, setPhase] = useState<0 | 1 | 2 | 3 | 4>(0);

  useEffect(() => {
    // Sequence timing
    const t0 = setTimeout(() => setPhase(1), 50);    // Light beam shoots down
    const t1 = setTimeout(() => setPhase(2), 650);   // Beam hits logo & shockwave
    const t2 = setTimeout(() => setPhase(3), 1100);  // Text ignites & full aura
    const t3 = setTimeout(() => setPhase(4), 1600);  // Fade out curtain
    const t4 = setTimeout(() => onComplete(), 1950); // Finish

    return () => {
      clearTimeout(t0);
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, [onComplete]);

  return (
    <div 
      className={`fixed inset-0 z-50 bg-[#070808] text-white flex flex-col items-center justify-center p-6 transition-all duration-700 ease-out overflow-hidden ${
        phase === 4 ? 'opacity-0 scale-105 pointer-events-none' : 'opacity-100 scale-100'
      }`}
    >
      {/* Background Subtle Cyber Crosshairs */}
      <div className="absolute inset-0 bg-crosshair-circles opacity-25 pointer-events-none" />

      {/* ======================================================== */}
      {/* 1. LASER BEAM SHOOTING DOWN FROM TOP OF SCREEN           */}
      {/* ======================================================== */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none z-20 flex flex-col items-center transition-all duration-700 ease-in"
        style={{
          height: phase >= 1 ? (phase >= 2 ? '50vh' : '50vh') : '0vh',
          opacity: phase === 1 ? 1 : (phase >= 2 ? (phase === 2 ? 0.9 : 0) : 0),
          transition: 'all 0.6s cubic-bezier(0.22, 1, 0.36, 1)'
        }}
      >
        {/* Core Laser Stream */}
        <div className="w-[3px] sm:w-[4px] h-full bg-gradient-to-b from-white via-[#C8102E] to-white shadow-[0_0_20px_#C8102E,0_0_40px_#FFFFFF]" />
        
        {/* Laser Head Flare */}
        <div className="w-8 h-8 -mt-4 rounded-full bg-white blur-[2px] shadow-[0_0_35px_#C8102E,0_0_60px_#FFFFFF] animate-pulse" />
      </div>

      {/* ======================================================== */}
      {/* 2. LOGO EMBLEM THAT ABSORBS THE LIGHT BEAM               */}
      {/* ======================================================== */}
      <div className="relative z-30 flex flex-col items-center text-center">
        
        {/* Shockwave Energy Rings expanding upon impact */}
        {phase >= 2 && (
          <>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full border-2 border-[#C8102E] animate-ping opacity-60 pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full border border-white/40 animate-ping opacity-30 pointer-events-none delay-100" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#C8102E]/25 blur-[120px] pointer-events-none" />
          </>
        )}

        {/* Central Logo Box */}
        <div 
          className={`w-20 h-20 rounded-2xl flex items-center justify-center font-bold text-4xl mb-6 relative transition-all duration-500 ${
            phase >= 2 
              ? 'bg-[#C8102E] text-white shadow-[0_0_60px_#C8102E,0_0_100px_rgba(200,16,46,0.8)] scale-110' 
              : 'bg-[#171919] text-white/40 border border-white/10 scale-95'
          }`}
        >
          <span className="relative z-10 transition-transform duration-300 select-none">
            +
          </span>

          {/* Internal Glow when light enters */}
          {phase >= 2 && (
            <div className="absolute inset-0 rounded-2xl bg-white/40 blur-[8px] animate-pulse" />
          )}
        </div>

        {/* Brand Text Reveal after absorption */}
        <div 
          className={`transition-all duration-500 flex flex-col items-center ${
            phase >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <span className="text-[11px] font-mono uppercase tracking-[0.35em] text-[#C8102E] font-bold block mb-2 drop-shadow-[0_0_10px_#C8102E]">
            REELS · POSTS · META ADVERTISING
          </span>

          <h1 className="font-display text-5xl sm:text-7xl uppercase font-black tracking-tight text-white leading-none mb-3 drop-shadow-[0_0_25px_rgba(255,255,255,0.4)]">
            RONIN MEDIA
          </h1>

          <p className="text-xs font-mono text-[#CCC5C4] uppercase tracking-widest max-w-xs">
            TRANSFORMING OFFLINE FOOTFALL INTO REVENUE
          </p>
        </div>

      </div>

      {/* Skip Button */}
      <button 
        onClick={onComplete}
        className="absolute bottom-8 text-[11px] font-mono text-white/30 hover:text-white transition-colors cursor-pointer uppercase tracking-widest z-30"
      >
        Skip Intro →
      </button>

    </div>
  );
};
