import React, { useState } from 'react';
import { FrontPortfolioPage } from './components/pages/FrontPortfolioPage';
import { CustomerPortal } from './components/portal/CustomerPortal';

export const App: React.FC = () => {
  // Navigation view: 'front' (Public Portfolio & About) | 'portal' (Customer Portal)
  const [currentView, setCurrentView] = useState<'front' | 'portal'>('front');

  if (currentView === 'portal') {
    return (
      <CustomerPortal
        onBackToHome={() => setCurrentView('front')}
      />
    );
  }

  return (
    <FrontPortfolioPage
      onOpenPortal={() => setCurrentView('portal')}
    />
  );
};

export default App;
