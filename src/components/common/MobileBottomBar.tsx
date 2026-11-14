import React from 'react';
import { Home, Layers, Send, Play } from 'lucide-react';
import { useApp } from '../../context/ThemeLanguageContext';

export const MobileBottomBar: React.FC = () => {
  const { currentPage, setCurrentPage, t } = useApp();

  const mobileTabs = [
    { label: t.nav.home, id: 'home', icon: Home },
    { label: t.nav.packages, id: 'packages', icon: Layers },
    { label: t.nav.order, id: 'order', icon: Send },
    { label: t.nav.portfolio, id: 'portfolio', icon: Play },
  ];

  return (
    <div className="md:hidden fixed bottom-3 left-3 right-3 z-40 pointer-events-auto">
      <div className="bg-[#3C147A]/95 dark:bg-[#0E1528]/95 backdrop-blur-2xl border border-white/20 dark:border-white/15 rounded-full px-2 py-1.5 grid grid-cols-4 shadow-2xl">
        {mobileTabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = currentPage === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setCurrentPage(tab.id)}
              className={`flex flex-col items-center justify-center gap-0.5 py-1.5 px-1 rounded-full transition-all cursor-pointer ${
                isActive
                  ? 'bg-[#D8FC38] text-[#182C05] font-black shadow-md'
                  : 'text-white/80 hover:text-white'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span className="text-[10px] tracking-tight truncate w-full text-center">{tab.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
