import React from 'react';
import { Sparkles, Shield, User, ArrowRight } from 'lucide-react';
import { useApp } from '../../context/ThemeLanguageContext';
import { AGENCY_CONFIG } from '../../data/agencyData';

export const Navbar: React.FC = () => {
  const { currentPage, setCurrentPage } = useApp();

  const handleNavClick = (id: string) => {
    setCurrentPage(id);
    window.location.hash = id;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pt-4 px-4 sm:px-8 pointer-events-none">
      <div className="max-w-7xl mx-auto flex items-center justify-between pointer-events-auto bg-[#0A0D18]/90 backdrop-blur-2xl px-5 sm:px-7 py-3 rounded-full border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
        
        {/* Left: Premium Agency Brand Logo */}
        <button
          onClick={() => handleNavClick('home')}
          className="group flex items-center gap-3 focus:outline-none cursor-pointer"
        >
          <div className="w-8 h-8 rounded-full bg-[#D8FC38] text-[#182C05] flex items-center justify-center font-black text-sm shadow-[0_0_20px_rgba(216,252,56,0.35)] group-hover:scale-105 transition-transform">
            <Sparkles className="w-4 h-4 fill-current" />
          </div>
          <div className="flex flex-col text-left">
            <span className="font-extrabold text-sm sm:text-base tracking-wider text-white uppercase font-mono">
              {AGENCY_CONFIG.name}
            </span>
            <span className="text-[9px] font-mono tracking-widest text-[#D8FC38] uppercase">
              Performance Creative & Meta Ads
            </span>
          </div>
        </button>

        {/* Center: Clean Core Navigation Links */}
        <nav className="hidden md:flex items-center gap-2 text-xs font-bold text-slate-300">
          <button
            onClick={() => handleNavClick('home')}
            className={`px-4 py-2 rounded-full transition-all cursor-pointer ${
              currentPage === 'home'
                ? 'bg-white/10 text-[#D8FC38] border border-white/15'
                : 'hover:text-white hover:bg-white/5'
            }`}
          >
            Agency Overview
          </button>

          <button
            onClick={() => handleNavClick('portfolio')}
            className={`px-4 py-2 rounded-full transition-all cursor-pointer ${
              currentPage === 'portfolio'
                ? 'bg-white/10 text-[#D8FC38] border border-white/15'
                : 'hover:text-white hover:bg-white/5'
            }`}
          >
            Reels Portfolio Showcase
          </button>
        </nav>

        {/* Right: Client Portal & Secure Admin Gate */}
        <div className="flex items-center gap-2.5">
          
          {/* Main Action: Client Portal Login */}
          <button
            onClick={() => handleNavClick('customer')}
            className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs font-bold font-mono tracking-wider transition-all flex items-center gap-2 cursor-pointer shadow-lg ${
              currentPage === 'customer'
                ? 'bg-[#D8FC38] text-[#182C05] shadow-[0_0_25px_rgba(216,252,56,0.5)]'
                : 'bg-white/10 hover:bg-[#D8FC38] text-white hover:text-[#182C05] border border-white/15 hover:border-[#D8FC38]'
            }`}
          >
            <User className="w-3.5 h-3.5" />
            <span>CLIENT PORTAL</span>
          </button>

          {/* Secure Admin Gate Button */}
          <button
            onClick={() => handleNavClick('admin')}
            className={`p-2.5 rounded-full text-xs font-mono transition-all cursor-pointer border ${
              currentPage === 'admin'
                ? 'bg-purple-900/60 text-[#D8FC38] border-purple-500'
                : 'bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white border-white/10'
            }`}
            title="Admin Agency OS (PIN: 2026)"
          >
            <Shield className="w-3.5 h-3.5" />
          </button>

        </div>

      </div>
    </header>
  );
};
