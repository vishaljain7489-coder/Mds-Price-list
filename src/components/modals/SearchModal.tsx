import React, { useState, useEffect } from 'react';
import { Search, X, ArrowRight, Sparkles, TrendingUp, ShieldCheck } from 'lucide-react';
import { BRAND, PACKAGES, PORTFOLIO_ITEMS } from '../../content';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenPortal: () => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose, onOpenPortal }) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const navigateTo = (selector: string) => {
    onClose();
    setTimeout(() => {
      const el = document.querySelector(selector);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const quickLinks = [
    { label: "15 Reels Performance Batch (₹6,000)", target: "#packages", tag: "Hot Package" },
    { label: "Viral Reel + Meta Ads Combo (₹12,000)", target: "#packages", tag: "Best Value" },
    { label: "Food & Café Campaigns", target: "#portfolio", tag: "Portfolio" },
    { label: "Automotive Luxury Campaigns", target: "#portfolio", tag: "Portfolio" },
    { label: "Top City Pages Collabs", target: "#collabs", tag: "Reach" },
    { label: "Direct Hiring vs Our Agency", target: "#compare", tag: "Savings" },
  ];

  const filteredLinks = quickLinks.filter(item => 
    item.label.toLowerCase().includes(query.toLowerCase()) || 
    item.tag.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 sm:pt-28 p-4">
      {/* Backdrop */}
      <div 
        onClick={onClose}
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity" 
      />

      {/* Search Modal Box */}
      <div className="relative w-full max-w-2xl bg-[#171919] border border-white/15 rounded-3xl p-6 sm:p-8 shadow-[0_20px_70px_rgba(0,0,0,0.85)] z-10 text-white animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header & Close */}
        <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#C8102E] animate-pulse" />
            <span className="font-mono text-xs uppercase tracking-widest text-[#CCC5C4]">
              {BRAND.name} Quick Directory
            </span>
          </div>
          <button 
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-white/70 hover:text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Input */}
        <div className="relative mb-6">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#C8102E]" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search packages, viral reels, automotive, café, pricing..."
            className="w-full bg-[#0A0A0A] border border-white/15 rounded-2xl py-3.5 pl-12 pr-4 text-sm font-mono text-white placeholder-white/40 focus:outline-none focus:border-[#C8102E] transition-colors"
          />
        </div>

        {/* Client Portal Quick Hook */}
        <div className="mb-6 p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#C8102E]/20 text-[#C8102E] flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-bold text-white">Existing Client Account?</p>
              <p className="text-xs text-[#CCC5C4] font-mono">Access your live reel delivery and Meta ad stats</p>
            </div>
          </div>
          <button
            onClick={() => {
              onClose();
              onOpenPortal();
            }}
            className="px-4 py-2 rounded-xl bg-[#C8102E] hover:bg-[#a50b24] text-white text-xs font-mono font-bold uppercase tracking-wider transition-all cursor-pointer"
          >
            Log In
          </button>
        </div>

        {/* Results / Quick Navigation Links */}
        <div>
          <p className="text-xs font-mono uppercase tracking-widest text-white/50 mb-3 flex items-center gap-1.5">
            <TrendingUp className="w-3.5 h-3.5 text-[#C8102E]" />
            Direct Section Shortcuts
          </p>
          <div className="space-y-2 max-h-60 overflow-y-auto pr-1">
            {filteredLinks.length > 0 ? (
              filteredLinks.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => navigateTo(item.target)}
                  className="w-full text-left p-3 rounded-xl bg-white/5 hover:bg-[#0A0A0A] hover:border hover:border-white/20 border border-transparent flex items-center justify-between group transition-all cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono text-white/40 group-hover:text-[#C8102E] transition-colors">
                      0{idx + 1}
                    </span>
                    <span className="text-sm font-medium text-white group-hover:text-white transition-colors">
                      {item.label}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded-full bg-white/10 text-[#CCC5C4]">
                      {item.tag}
                    </span>
                    <ArrowRight className="w-4 h-4 text-white/40 group-hover:text-white group-hover:translate-x-1 transition-all" />
                  </div>
                </button>
              ))
            ) : (
              <p className="text-xs text-white/40 font-mono py-4 text-center">
                No matching results found. Try "Reels", "Café", "Packages", or "Compare".
              </p>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};
