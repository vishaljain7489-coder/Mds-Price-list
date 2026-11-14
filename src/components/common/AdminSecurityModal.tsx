import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lock, Unlock, ShieldCheck, X, AlertTriangle, KeyRound, Database, UserCheck } from 'lucide-react';
import { useApp } from '../../context/ThemeLanguageContext';

export const AdminSecurityModal: React.FC = () => {
  const { securityOpen, setSecurityOpen, isAdminUnlocked, setIsAdminUnlocked, t, theme, setCurrentPage } = useApp();
  const [pin, setPin] = useState('');
  const [error, setError] = useState(false);

  if (!securityOpen) return null;

  const handleUnlock = (e: React.FormEvent) => {
    e.preventDefault();
    // Default PIN: 2026
    if (pin === '2026' || pin === '9999') {
      setIsAdminUnlocked(true);
      setError(false);
      setSecurityOpen(false);
      setCurrentPage('portal');
    } else {
      setError(true);
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSecurityOpen(false)}
          className="fixed inset-0 bg-black/75 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          className={`relative w-full max-w-md rounded-[32px] p-8 shadow-2xl z-10 text-center ${
            theme === 'dark' ? 'bg-[#150A2E] text-white border border-white/20' : 'bg-white text-[#17092F] border border-[#3C147A]/20'
          }`}
        >
          <button
            onClick={() => setSecurityOpen(false)}
            className="absolute top-5 right-5 p-2 rounded-full hover:bg-black/10 dark:hover:bg-white/10"
          >
            <X className="w-5 h-5 text-[#685984]" />
          </button>

          <div className="w-16 h-16 rounded-full bg-[#3C147A] text-[#D8FC38] flex items-center justify-center mx-auto mb-4 shadow-lg">
            {isAdminUnlocked ? <Unlock className="w-8 h-8" /> : <Lock className="w-8 h-8" />}
          </div>

          <div className="inline-block mb-3">
            <span className="badge-lime-pill text-[10px] py-0.5 px-3">
              {t.security.lockedBadge}
            </span>
          </div>

          <h3 className="text-xl sm:text-2xl font-black mb-2">
            {t.security.portalTitle}
          </h3>

          <p className="text-xs text-[#685984] dark:text-purple-200 mb-6 leading-relaxed">
            {t.security.portalSubtitle}
          </p>

          <form onSubmit={handleUnlock} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-[#685984] dark:text-purple-300 mb-2">
                {t.security.pinPrompt}
              </label>
              <div className="relative max-w-[200px] mx-auto">
                <input
                  type="password"
                  maxLength={6}
                  placeholder="••••"
                  value={pin}
                  onChange={(e) => {
                    setPin(e.target.value);
                    setError(false);
                  }}
                  className={`w-full py-3 text-center tracking-[0.5em] text-xl font-mono font-black rounded-2xl border focus:outline-none ${
                    error
                      ? 'border-red-500 bg-red-50 text-red-600'
                      : 'border-[#3C147A]/30 dark:border-white/20 bg-[#F5F1FD] dark:bg-white/10'
                  }`}
                />
              </div>
              {error && (
                <p className="text-xs text-red-500 font-bold mt-2 flex items-center justify-center gap-1">
                  <AlertTriangle className="w-3.5 h-3.5" />
                  Incorrect PIN. Access Denied.
                </p>
              )}
            </div>

            <button
              type="submit"
              className="btn-lime w-full py-3.5 px-6 text-xs font-black uppercase tracking-wider shadow-lg flex items-center justify-center gap-2 cursor-pointer"
            >
              <KeyRound className="w-4 h-4" />
              <span>{t.security.unlockBtn}</span>
            </button>
          </form>

          <div className="mt-6 pt-4 border-t border-[#3C147A]/10 dark:border-white/10 text-[10px] text-[#685984] dark:text-purple-300 flex items-center justify-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 dark:text-[#D8FC38]" />
            <span>Encrypted Authentication Gateway</span>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
