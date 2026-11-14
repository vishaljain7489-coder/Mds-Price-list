import React, { useRef, useState, useEffect } from 'react';

interface LogoVideoSplashProps {
  onComplete: () => void;
}

export const LogoVideoSplash: React.FC<LogoVideoSplashProps> = ({ onComplete }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isFading, setIsFading] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    // Attempt autoplay immediately
    if (videoRef.current) {
      videoRef.current.play().then(() => {
        setHasStarted(true);
      }).catch((err) => {
        console.warn("Autoplay needed user interaction or was muted", err);
        setHasStarted(true);
      });
    }

    // Safety fallback: if video stalls or fails to end, automatically transition after 5.5s
    const fallbackTimer = setTimeout(() => {
      handleFinish();
    }, 5500);

    return () => clearTimeout(fallbackTimer);
  }, []);

  const handleFinish = () => {
    if (isFading) return;
    setIsFading(true);
    setTimeout(() => {
      onComplete();
    }, 600); // Wait for fade-out transition
  };

  return (
    <div 
      className={`fixed inset-0 z-50 bg-[#000000] flex flex-col items-center justify-center p-4 transition-all duration-700 ease-out overflow-hidden ${
        isFading ? 'opacity-0 scale-105 pointer-events-none' : 'opacity-100 scale-100'
      }`}
    >
      {/* Subtle Warm Amber/Orange Ambient Glow Behind Video */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] rounded-full bg-gradient-to-tr from-[#E84025]/20 via-orange-500/10 to-transparent blur-[140px] pointer-events-none" />

      {/* Main Video Animation Container */}
      <div className="relative z-20 w-full max-w-2xl flex flex-col items-center justify-center">
        <div className="relative w-full aspect-video sm:aspect-[16/9] max-h-[75vh] flex items-center justify-center overflow-hidden rounded-2xl">
          <video
            ref={videoRef}
            src="/logo-animation.mp4"
            autoPlay
            muted
            playsInline
            preload="auto"
            onEnded={handleFinish}
            className="w-full h-full object-contain drop-shadow-[0_10px_35px_rgba(232,64,37,0.3)]"
          />
        </div>

        {/* Minimalist Brand Tagline beneath animation */}
        <div className="mt-4 text-center">
          <span className="text-[11px] font-mono uppercase tracking-[0.3em] text-[#E84025] font-bold block">
            CLICK & CRAFT
          </span>
          <span className="text-[10px] text-white/40 uppercase tracking-widest block mt-0.5 font-medium">
            Media Advertising & Performance Marketing
          </span>
        </div>
      </div>

      {/* Skip Button (Bottom Right) */}
      <button 
        onClick={handleFinish}
        className="absolute bottom-6 right-6 text-xs font-semibold text-white/50 hover:text-white transition-colors cursor-pointer uppercase tracking-wider px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/10 z-30 flex items-center gap-1.5"
      >
        <span>Skip Intro</span>
        <span>→</span>
      </button>

    </div>
  );
};
