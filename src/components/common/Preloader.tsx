import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { PRELOADER } from '../../content';
import { AnimeMascot } from '../mascot/AnimeMascot';

interface PreloaderProps {
  onComplete: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const wordRef = useRef<HTMLHeadingElement>(null);
  const mascotRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          gsap.to(containerRef.current, {
            yPercent: -100,
            duration: 0.8,
            ease: "power4.inOut",
            onComplete: onComplete
          });
        }
      });

      // 1. Giant Word Starts Wide & Grey -> Tight & Pure White
      tl.fromTo(wordRef.current,
        {
          letterSpacing: "0.85em",
          color: "#CCC5C4",
          opacity: 0.25,
          scale: 0.95,
        },
        {
          letterSpacing: "-0.02em",
          color: "#FFFFFF",
          opacity: 1,
          scale: 1,
          duration: 1.1,
          ease: "expo.out"
        }
      );

      // 2. Mascot Fades and Scales In
      tl.fromTo(mascotRef.current,
        {
          opacity: 0,
          scale: 0.7,
          y: 40
        },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.75,
          ease: "back.out(1.5)"
        },
        "-=0.4"
      );

      // 3. Sub-label tech reveal
      tl.fromTo(labelRef.current,
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.45, ease: "power2.out" },
        "-=0.3"
      );

      // Brief hold to hit ~2.2s total
      tl.to({}, { duration: 0.35 });

    }, containerRef);

    return () => ctx.revert();
  }, [onComplete]);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0A0A0A] text-white overflow-hidden select-none"
    >
      {/* Background Crosshair & Concentric Grid */}
      <div className="absolute inset-0 bg-crosshair-circles opacity-40 pointer-events-none" />
      <div className="absolute w-[450px] h-[450px] rounded-full bg-[#C8102E]/20 blur-[100px] pointer-events-none" />

      {/* Center Group: Word + Mascot Overlap */}
      <div className="relative flex flex-col items-center justify-center text-center px-4">
        
        {/* Giant Hero Word */}
        <h1 
          ref={wordRef}
          className="hero-fluid-title font-black uppercase text-center select-none font-display leading-none z-10"
        >
          {PRELOADER.giantWord}
        </h1>

        {/* Mascot Fades & Scales Over */}
        <div 
          ref={mascotRef}
          className="w-48 sm:w-64 max-w-[70vw] -mt-16 sm:-mt-24 z-20 pointer-events-none"
        >
          <AnimeMascot pose="main" />
        </div>

        {/* Tech Sub-label */}
        <div 
          ref={labelRef}
          className="mt-6 flex items-center gap-2 text-xs font-mono tracking-widest text-[#CCC5C4] uppercase"
        >
          <span className="w-2 h-2 rounded-full bg-[#C8102E] animate-ping" />
          <span>{PRELOADER.subLabel}</span>
        </div>

      </div>

      {/* Red hairline edge */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#C8102E] shadow-[0_0_15px_#C8102E]" />
    </div>
  );
};
