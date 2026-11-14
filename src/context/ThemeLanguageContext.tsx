import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language, TRANSLATIONS } from '../translations/content';
import { AgencyPricing } from '../types';

export const DEFAULT_AGENCY_PRICING: AgencyPricing = {
  reelsPackagePrice: 6000,
  adsPackagePrice: 6000,
  adsServiceFee: 3000,
  adsMetaSpend: 3000,
  starterPrice: 3000,
  starterServiceFee: 1500,
  starterMetaSpend: 1500,
};

interface AppContextType {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
  language: Language;
  setLanguage: (lang: Language) => void;
  currentPage: string;
  setCurrentPage: (page: string) => void;
  searchOpen: boolean;
  setSearchOpen: (open: boolean) => void;
  securityOpen: boolean;
  setSecurityOpen: (open: boolean) => void;
  isAdminUnlocked: boolean;
  setIsAdminUnlocked: (unlocked: boolean) => void;
  agencyPricing: AgencyPricing;
  updateAgencyPricing: (newPricing: AgencyPricing) => void;
  resetAgencyPricing: () => void;
  t: typeof TRANSLATIONS['en'];
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    const saved = typeof window !== 'undefined' ? localStorage.getItem('theme_preference') : null;
    return (saved === 'dark' || saved === 'light') ? saved : 'light';
  });

  const [language, setLanguageState] = useState<Language>(() => {
    const saved = typeof window !== 'undefined' ? localStorage.getItem('lang_preference') : null;
    return (saved === 'hi' || saved === 'en') ? (saved as Language) : 'en';
  });

  const [currentPage, setCurrentPage] = useState<string>('home');
  const [searchOpen, setSearchOpen] = useState<boolean>(false);
  const [securityOpen, setSecurityOpen] = useState<boolean>(false);
  const [isAdminUnlocked, setIsAdminUnlocked] = useState<boolean>(false);

  // Dynamic Agency Pricing initialized from localStorage
  const [agencyPricing, setAgencyPricing] = useState<AgencyPricing>(() => {
    try {
      const saved = localStorage.getItem('agency_custom_pricing');
      if (saved) {
        return { ...DEFAULT_AGENCY_PRICING, ...JSON.parse(saved) };
      }
    } catch (e) {}
    return DEFAULT_AGENCY_PRICING;
  });

  const updateAgencyPricing = (newPricing: AgencyPricing) => {
    setAgencyPricing(newPricing);
    try {
      localStorage.setItem('agency_custom_pricing', JSON.stringify(newPricing));
      window.dispatchEvent(new Event('storage'));
    } catch (e) {}
  };

  const resetAgencyPricing = () => {
    setAgencyPricing(DEFAULT_AGENCY_PRICING);
    try {
      localStorage.removeItem('agency_custom_pricing');
      window.dispatchEvent(new Event('storage'));
    } catch (e) {}
  };

  // Listen to storage events across tabs or components
  useEffect(() => {
    const handleStorage = () => {
      try {
        const saved = localStorage.getItem('agency_custom_pricing');
        if (saved) {
          setAgencyPricing({ ...DEFAULT_AGENCY_PRICING, ...JSON.parse(saved) });
        } else {
          setAgencyPricing(DEFAULT_AGENCY_PRICING);
        }
      } catch (e) {}
    };
    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
  }, []);

  useEffect(() => {
    // Immediate and robust sync to both html and body
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      document.body.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.body.classList.remove('dark');
    }
    try {
      localStorage.setItem('theme_preference', theme);
    } catch (e) {
      // ignore
    }
  }, [theme]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem('lang_preference', lang);
    } catch (e) {
      // ignore
    }
  };

  // Whenever page changes, scroll instantly to top with zero weird jumping
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [currentPage]);

  // Sync hash with current page if user changes URL
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      if (['home', 'packages', 'order', 'portfolio', 'process', 'about', 'faq', 'portal', 'admin', 'customer', 'client', 'ad-info'].includes(hash)) {
        if (hash === 'admin') {
          setCurrentPage('portal');
        } else if (hash === 'client') {
          setCurrentPage('customer');
        } else {
          setCurrentPage(hash);
        }
      }
    };
    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateToPage = (page: string) => {
    setCurrentPage(page);
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const t = TRANSLATIONS[language] || TRANSLATIONS['en'];

  return (
    <AppContext.Provider
      value={{
        theme,
        toggleTheme,
        language,
        setLanguage,
        currentPage,
        setCurrentPage: navigateToPage,
        searchOpen,
        setSearchOpen,
        securityOpen,
        setSecurityOpen,
        isAdminUnlocked,
        setIsAdminUnlocked,
        agencyPricing,
        updateAgencyPricing,
        resetAgencyPricing,
        t,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
