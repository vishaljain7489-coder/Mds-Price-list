import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, ArrowRight, Sparkles, Zap, Tag } from 'lucide-react';
import { useApp } from '../../context/ThemeLanguageContext';

export const SearchBarModal: React.FC = () => {
  const { searchOpen, setSearchOpen, setCurrentPage, t, theme } = useApp();
  const [searchTerm, setSearchTerm] = useState('');

  if (!searchOpen) return null;

  const handleHookClick = (page: string) => {
    setSearchOpen(false);
    setCurrentPage(page);
  };

  const filteredHooks = t.search.hooks.filter((hook) =>
    hook.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSearchOpen(false)}
          className="fixed inset-0 bg-black/60 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -20 }}
          className={`relative w-full max-w-2xl rounded-[32px] p-6 sm:p-8 shadow-2xl z-10 ${
            theme === 'dark' ? 'bg-[#150A2E] text-white border border-white/15' : 'bg-white text-[#17092F] border border-[#3C147A]/15'
          }`}
        >
          {/* Close button */}
          <button
            onClick={() => setSearchOpen(false)}
            className="absolute top-6 right-6 p-2 rounded-full hover:bg-black/10 dark:hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5 text-[#685984]" />
          </button>

          {/* Search Input Bar */}
          <div className="relative mb-6 pr-10">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-[#3C147A] dark:text-[#D8FC38]">
              <Search className="w-5 h-5" />
            </div>
            <input
              type="text"
              autoFocus
              placeholder={t.nav.searchPlaceholder}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={`w-full pl-12 pr-4 py-3.5 rounded-full text-sm font-semibold focus:outline-none transition-all ${
                theme === 'dark'
                  ? 'bg-white/10 text-white placeholder-white/40 border border-white/15 focus:border-[#D8FC38]'
                  : 'bg-[#F5F1FD] text-[#17092F] placeholder-[#685984] border border-[#3C147A]/20 focus:border-[#3C147A]'
              }`}
            />
          </div>

          {/* Trending Hooks Section (Prompt specifically requested hooks right below search) */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Zap className="w-4 h-4 text-[#D8FC38] fill-[#D8FC38]" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#685984] dark:text-purple-200">
                {t.search.trendingHooksTitle}
              </span>
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
              {filteredHooks.map((hook, idx) => (
                <button
                  key={idx}
                  onClick={() => handleHookClick(hook.page)}
                  className={`px-3.5 py-2 rounded-full text-xs font-bold transition-all flex items-center gap-2 group cursor-pointer ${
                    theme === 'dark'
                      ? 'bg-white/10 hover:bg-[#D8FC38] text-white hover:text-[#182C05]'
                      : 'bg-[#EDE5FA] hover:bg-[#3C147A] text-[#3C147A] hover:text-white'
                  }`}
                >
                  <Tag className="w-3 h-3 opacity-60 group-hover:opacity-100" />
                  <span>{hook.label}</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </button>
              ))}
            </div>

            {filteredHooks.length === 0 && (
              <p className="text-xs text-[#685984] py-4 text-center">
                {t.search.noResults}
              </p>
            )}
          </div>

          <div className="pt-4 border-t border-[#3C147A]/10 dark:border-white/10 flex items-center justify-between text-[11px] text-[#685984] dark:text-purple-300">
            <span>Instant routing to packages, campaigns & WhatsApp booking</span>
            <span className="font-mono">ESC to close</span>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
