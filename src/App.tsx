import React, { useState } from 'react';
import { FrontPortfolioPage } from './components/pages/FrontPortfolioPage';
import { CustomerPortal } from './components/portal/CustomerPortal';
import { AdminPortal } from './components/portal/AdminPortal';
import { LightBeamSplash } from './components/common/LightBeamSplash';

// ErrorBoundary to completely prevent any white/black screen crashes
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
        <div className="min-h-screen bg-[#FFF6F2] text-[#191C21] flex flex-col items-center justify-center p-6 text-center">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#E84025] to-[#FF5B26] text-white flex items-center justify-center font-bold text-xl mb-4 shadow-md">
            +
          </div>
          <h2 className="font-heading-modern text-2xl font-black uppercase mb-2">Restoring Click & Craft Workspace...</h2>
          <p className="text-xs text-gray-500 mb-6">
            Refreshing stored data to default clean state.
          </p>
          <button
            onClick={() => {
              localStorage.clear();
              window.location.reload();
            }}
            className="px-6 py-2.5 rounded-full bg-[#E84025] text-white text-xs font-bold uppercase tracking-wider cursor-pointer shadow-md hover:bg-[#d3361d]"
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
  // Light Beam Entrance Intro animation (runs once on page visit / refresh ~1.8s)
  const [showIntro, setShowIntro] = useState(true);

  // Current View: 'front' (Public Portfolio) | 'portal' (Customer Portal) | 'admin' (Admin Console)
  const [currentView, setCurrentView] = useState<'front' | 'portal' | 'admin'>('front');

  return (
    <ErrorBoundary>
      <div className="bg-white min-h-screen text-[#191C21] w-full max-w-full overflow-x-hidden">
        
        {/* 1. Cinematic Light Beam -> Logo Absorption Intro Animation */}
        {showIntro && (
          <LightBeamSplash onComplete={() => setShowIntro(false)} />
        )}

        {/* 2. Dynamic View Rendering */}
        {currentView === 'portal' && (
          <CustomerPortal
            onBackToHome={() => setCurrentView('front')}
            onOpenAdmin={() => setCurrentView('admin')}
          />
        )}

        {currentView === 'admin' && (
          <AdminPortal
            onBackToHome={() => setCurrentView('front')}
          />
        )}

        {currentView === 'front' && (
          <FrontPortfolioPage
            onOpenPortal={() => setCurrentView('portal')}
            onOpenAdmin={() => setCurrentView('admin')}
          />
        )}

      </div>
    </ErrorBoundary>
  );
};

export default App;
