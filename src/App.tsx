import React, { useState } from 'react';
import { FrontPortfolioPage } from './components/pages/FrontPortfolioPage';
import { CustomerPortal } from './components/portal/CustomerPortal';
import { IntroSplash } from './components/common/IntroSplash';

// Simple ErrorBoundary Component to prevent any black screen bugs
class ErrorBoundary extends React.Component<{ children: React.ReactNode }, { hasError: boolean }> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("ErrorBoundary caught an error", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#0A0A0A] text-white flex flex-col items-center justify-center p-6 text-center">
          <div className="w-12 h-12 rounded-xl bg-[#C8102E] text-white flex items-center justify-center font-bold text-xl mb-4">
            !
          </div>
          <h2 className="font-display text-3xl uppercase mb-2">Restoring Website Workspace...</h2>
          <p className="text-xs font-mono text-[#CCC5C4] mb-6">
            Refreshing stored data to default clean state.
          </p>
          <button
            onClick={() => {
              localStorage.clear();
              window.location.reload();
            }}
            className="px-6 py-2.5 rounded-full bg-[#C8102E] text-white text-xs font-mono uppercase font-bold cursor-pointer"
          >
            Clear Cache & Reload →
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export const App: React.FC = () => {
  // Intro Splash state (plays on initial visit / refresh for ~1.6s)
  const [showIntro, setShowIntro] = useState(true);

  // Navigation view: 'front' (Public Portfolio & About) | 'portal' (Customer Portal)
  const [currentView, setCurrentView] = useState<'front' | 'portal'>('front');

  return (
    <ErrorBoundary>
      <div className="bg-[#0A0A0A] min-h-screen text-white">
        
        {/* First-Visit Intro Entrance Animation */}
        {showIntro && (
          <IntroSplash onComplete={() => setShowIntro(false)} />
        )}

        {/* Dynamic View */}
        {currentView === 'portal' ? (
          <CustomerPortal
            onBackToHome={() => setCurrentView('front')}
          />
        ) : (
          <FrontPortfolioPage
            onOpenPortal={() => setCurrentView('portal')}
          />
        )}

      </div>
    </ErrorBoundary>
  );
};

export default App;
