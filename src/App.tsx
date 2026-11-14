import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';
import { Preloader } from './components/common/Preloader';
import { CustomCursor } from './components/common/CustomCursor';
import { CineNavbar } from './components/common/CineNavbar';
import { CineHeroSection } from './components/sections/CineHeroSection';
import { StatsPortfolioPanel } from './components/sections/StatsPortfolioPanel';
import { AboutStatementSection } from './components/sections/AboutStatementSection';
import { WhatWeDoBookingSection } from './components/sections/WhatWeDoBookingSection';
import { ExtraSections } from './components/sections/ExtraSections';
import { FinalCtaFooter } from './components/sections/FinalCtaFooter';
import { ClientPortalModal } from './components/modals/ClientPortalModal';
import { SearchModal } from './components/modals/SearchModal';
import { X, Play, Volume2, ShieldCheck, Sparkles } from 'lucide-react';
import { BRAND } from './content';

export const App: React.FC = () => {
  const [preloaderDone, setPreloaderDone] = useState(false);
  const [isPortalOpen, setIsPortalOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [activeVideoUrl, setActiveVideoUrl] = useState<string | null>(null);

  // Initialize Lenis Smooth Scrolling
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  // Section Observer to highlight active link in Navbar
  useEffect(() => {
    const sectionIds = ['hero', 'portfolio', 'packages', 'collabs', 'compare', 'contact'];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (const id of sectionIds) {
        const element = document.getElementById(id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBookPackage = (packageName?: string) => {
    scrollToContact();
    // Pre-fill or focus the input
    setTimeout(() => {
      const select = document.getElementById('service-select') as HTMLSelectElement | null;
      if (select && packageName) {
        select.value = packageName;
      }
      const nameInput = document.getElementById('client-name') as HTMLInputElement | null;
      if (nameInput) {
        nameInput.focus();
      }
    }, 400);
  };

  return (
    <div className="relative min-h-screen bg-[#0A0A0A] text-white selection:bg-[#C8102E] selection:text-white font-sans antialiased overflow-x-hidden">
      
      {/* 1. Custom Desktop Trailing Cursor */}
      <CustomCursor />

      {/* 2. Intro Preloader Animation (~2.2s) */}
      {!preloaderDone && (
        <Preloader onComplete={() => setPreloaderDone(true)} />
      )}

      {/* 3. Fixed Cine Header Navbar */}
      <CineNavbar
        activeSection={activeSection}
        onOpenPortal={() => setIsPortalOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
      />

      {/* 4. Main Page Structure */}
      <main>
        {/* Section 1: Hero (Dark) */}
        <CineHeroSection onBookClick={scrollToContact} />

        {/* Section 2: Stats & 3 Fanned Portfolio Cards (Dark) */}
        <StatsPortfolioPanel />

        {/* Section 3: About Statement (White overlay, rounded-t-[48px], red hairline) */}
        <AboutStatementSection />

        {/* Section 4: What We Do & Phone Booking Card (White) */}
        <WhatWeDoBookingSection onBookNow={scrollToContact} />

        {/* Section 5: Filterable Portfolio Grid, Packages, Combos, Collabs, Compare Table, Testimonials, FAQ, Contact Form */}
        <ExtraSections
          onSelectVideo={(url) => setActiveVideoUrl(url)}
          onBookPackage={handleBookPackage}
        />

        {/* Section 6: Now Booking Final CTA & Footer with Heart-Hands Mascot Rising */}
        <FinalCtaFooter
          onOpenPortal={() => setIsPortalOpen(true)}
          onBookNow={scrollToContact}
        />
      </main>

      {/* 5. Client Portal Login & Dashboard Modal */}
      <ClientPortalModal
        isOpen={isPortalOpen}
        onClose={() => setIsPortalOpen(false)}
      />

      {/* 6. Directory / Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onOpenPortal={() => setIsPortalOpen(true)}
      />

      {/* 7. Interactive 9:16 Reel Player Modal */}
      {activeVideoUrl && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div 
            onClick={() => setActiveVideoUrl(null)}
            className="fixed inset-0 bg-black/90 backdrop-blur-md" 
          />
          <div className="relative w-full max-w-sm sm:max-w-md aspect-[9/16] max-h-[88vh] bg-black rounded-3xl overflow-hidden border border-white/20 shadow-2xl z-10 flex flex-col justify-between">
            <button
              onClick={() => setActiveVideoUrl(null)}
              className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center border border-white/20 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Video element or preview frame */}
            <div className="relative w-full h-full flex items-center justify-center bg-[#171919]">
              <video
                src={activeVideoUrl}
                autoPlay
                controls
                playsInline
                className="w-full h-full object-cover"
                onError={(e) => {
                  // Fallback poster if sample video stream is unplayable
                  const target = e.currentTarget;
                  target.style.display = 'none';
                  const fallback = document.getElementById('reel-fallback');
                  if (fallback) fallback.style.display = 'flex';
                }}
              />
              <div 
                id="reel-fallback" 
                style={{ display: 'none' }} 
                className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 bg-cover bg-center"
              >
                <div className="w-16 h-16 rounded-full bg-[#C8102E] text-white flex items-center justify-center mb-4 shadow-[0_0_25px_#C8102E]">
                  <Play className="w-7 h-7 fill-white translate-x-0.5" />
                </div>
                <p className="font-display text-2xl uppercase tracking-wider text-white">
                  Sample Reel Campaign
                </p>
                <p className="text-xs font-mono text-[#CCC5C4] mt-2">
                  Delivered in 4K 60fps · Cinematic color grading · Custom hook audio
                </p>
              </div>
            </div>

            {/* Reel Badge */}
            <div className="absolute bottom-4 left-4 right-4 z-20 p-3 rounded-2xl bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#C8102E] animate-pulse" />
                <span className="font-mono text-[11px] uppercase tracking-wider text-white font-bold">
                  {BRAND.name} Verified Creative
                </span>
              </div>
              <span className="font-mono text-[10px] text-[#CCC5C4]">4K 60FPS</span>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default App;
