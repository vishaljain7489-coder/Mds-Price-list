import React from 'react';
import { Sparkles, MessageCircle, ArrowUp, Mail, Shield } from 'lucide-react';
import { InstagramIcon, FacebookIcon } from './Icons';
import { AGENCY_CONFIG } from '../../data/agencyData';
import { useApp } from '../../context/ThemeLanguageContext';

export const Footer: React.FC = () => {
  const { t, setCurrentPage } = useApp();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: t.nav.home, id: 'home' },
    { label: t.nav.packages, id: 'packages' },
    { label: t.nav.order, id: 'order' },
    { label: t.nav.portfolio, id: 'portfolio' },
    { label: t.nav.process, id: 'process' },
    { label: t.nav.about, id: 'about' },
    { label: t.nav.faq, id: 'faq' },
  ];

  return (
    <footer className="relative bg-[#14062B] dark:bg-[#04060C] text-white border-t border-white/10 pt-16 pb-12 transition-colors duration-300 overflow-hidden">
      
      {/* Background ambient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-purple-600/15 dark:bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          
          {/* Col 1 & 2: Agency Bio */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-[#D8FC38] flex items-center justify-center shadow-sm">
                <Sparkles className="w-4 h-4 text-[#182C05]" />
              </div>
              <span className="font-extrabold text-lg tracking-tight text-white">
                {AGENCY_CONFIG.name}
              </span>
            </div>
            
            <p className="text-sm text-purple-200 dark:text-slate-400 max-w-sm leading-relaxed font-normal">
              {t.footer.bio}
            </p>

            <div className="flex items-center gap-2.5 pt-2">
              <a
                href={AGENCY_CONFIG.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#D8FC38] hover:text-[#182C05] flex items-center justify-center text-white transition-all"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={AGENCY_CONFIG.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#D8FC38] hover:text-[#182C05] flex items-center justify-center text-white transition-all"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a
                href={`https://wa.me/${AGENCY_CONFIG.whatsappNumber.replace('+', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#D8FC38] hover:text-[#182C05] flex items-center justify-center text-white transition-all"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${AGENCY_CONFIG.email}`}
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#D8FC38] hover:text-[#182C05] flex items-center justify-center text-white transition-all"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 3: Navigation */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#D8FC38] mb-4">
              {t.homeCards.badge}
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => setCurrentPage(link.id)}
                    className="text-xs text-purple-200 dark:text-slate-400 hover:text-white transition-colors cursor-pointer text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Portals */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#D8FC38] mb-4">
              Access Portals
            </h4>
            <ul className="space-y-2.5 text-xs text-purple-200 dark:text-slate-400">
              <li>
                <button onClick={() => setCurrentPage('portfolio')} className="hover:text-[#D8FC38] transition-colors cursor-pointer text-left flex items-center gap-1.5 font-bold text-white">
                  <span>🎬 Reels Showcase</span>
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentPage('customer')} className="hover:text-[#D8FC38] transition-colors cursor-pointer text-left flex items-center gap-1.5 font-bold text-white">
                  <span>👤 Client Portal Login</span>
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentPage('admin')} className="hover:text-[#D8FC38] transition-colors cursor-pointer text-left flex items-center gap-1.5 text-slate-400 hover:text-white">
                  <span>🔒 Admin Gate</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Col 5: Legal & Office */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#D8FC38] mb-4">
              Agency Direct
            </h4>
            <p className="text-xs text-purple-200 dark:text-slate-400 leading-relaxed mb-3">
              {AGENCY_CONFIG.address}
            </p>
            <p className="text-xs text-purple-200 dark:text-slate-400 mb-4">
              WhatsApp: <span className="text-white font-mono font-bold">{AGENCY_CONFIG.whatsappDisplay}</span>
            </p>
            <div className="flex flex-col gap-2 pt-1">
              <button
                onClick={() => setCurrentPage('faq')}
                className="inline-flex items-center gap-1.5 text-xs text-purple-200 dark:text-slate-400 hover:text-white transition-colors cursor-pointer text-left"
              >
                <Shield className="w-3.5 h-3.5 text-[#D8FC38]" />
                <span>{t.nav.faq}</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Top scroll */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-purple-300 dark:text-slate-500 font-normal">
          <p className="text-center sm:text-left">
            © {new Date().getFullYear()} {AGENCY_CONFIG.name}. {t.footer.rights}
          </p>

          <div className="flex items-center gap-4">
            <span className="font-mono text-[11px] text-[#D8FC38]">
              {t.footer.builtWith}
            </span>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 hover:bg-[#D8FC38] hover:text-[#182C05] text-white text-xs font-bold transition-all cursor-pointer"
            >
              <span>{t.footer.topBtn}</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
