import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X } from 'lucide-react';
import { AGENCY_CONFIG } from '../../data/agencyData';

export const StickyWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 1500);

    const tooltipTimer = setTimeout(() => {
      setShowTooltip(false);
    }, 9000);

    return () => {
      clearTimeout(timer);
      clearTimeout(tooltipTimer);
    };
  }, []);

  const waUrl = `https://wa.me/${AGENCY_CONFIG.whatsappNumber.replace('+', '')}?text=${encodeURIComponent('Hi ' + AGENCY_CONFIG.name + ', I would like to enquire about your Meta Ads management services.')}`;

  if (!visible) return null;

  return (
    <div className="hidden md:flex fixed bottom-6 right-6 z-50 items-end flex-col gap-2">
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 10 }}
            className="relative glass-card-glow text-white px-4 py-2.5 rounded-2xl shadow-2xl max-w-xs flex items-center gap-3 text-xs"
          >
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <div>
              <p className="font-semibold text-white">Need an Instant Strategy?</p>
              <p className="text-slate-400 text-[11px]">Chat directly on WhatsApp with our team</p>
            </div>
            <button
              onClick={() => setShowTooltip(false)}
              className="text-slate-400 hover:text-white p-1"
              aria-label="Close tooltip"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="w-13 h-13 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white flex items-center justify-center shadow-[0_0_30px_rgba(37,211,102,0.4)] border border-white/20 transition-all duration-300 group p-3.5"
      >
        <MessageCircle className="w-6 h-6 fill-white text-[#25D366] group-hover:rotate-12 transition-transform duration-300" />
      </motion.a>
    </div>
  );
};
