import React, { useState } from 'react';
import { CustomerPortal } from './components/portal/CustomerPortal';
import { Lock, UserCheck, Shield, Sparkles, ArrowRight, Phone, MessageCircle, CheckCircle2, Zap } from 'lucide-react';

export const App: React.FC = () => {
  // Navigation state between: 'home' (public front), 'portal' (customer portal), 'admin' (admin portal)
  const [currentView, setCurrentView] = useState<'home' | 'portal' | 'admin'>('portal');

  // If viewing Customer Portal directly:
  if (currentView === 'portal') {
    return (
      <CustomerPortal
        onBackToHome={() => setCurrentView('home')}
        onOpenAdmin={() => setCurrentView('admin')}
      />
    );
  }

  // Otherwise, render Public Front with direct entry to Customer Portal
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white selection:bg-[#C8102E] selection:text-white font-sans antialiased relative overflow-hidden flex flex-col justify-between">
      
      {/* Background Reddish Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[650px] h-[650px] rounded-full bg-[#C8102E]/20 blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 bg-crosshair-circles opacity-20 pointer-events-none" />

      {/* 1. Header with Direct Customer Portal Access Button */}
      <header className="relative z-20 py-5 px-6 sm:px-12 border-b border-white/10 backdrop-blur-md bg-black/40 sticky top-0">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#C8102E] flex items-center justify-center font-bold text-white shadow-[0_0_15px_#C8102E]">
              +
            </div>
            <span className="font-display text-2xl tracking-wider uppercase font-bold text-white">
              RONIN MEDIA
            </span>
          </div>

          <div className="flex items-center gap-3 sm:gap-4">
            {/* Primary Customer Portal Button */}
            <button
              onClick={() => setCurrentView('portal')}
              className="px-5 py-2.5 rounded-full bg-[#C8102E] hover:bg-[#a50b24] text-white text-xs font-mono font-bold uppercase tracking-wider flex items-center gap-2 shadow-[0_0_20px_rgba(200,16,46,0.4)] transition-all cursor-pointer hover:scale-105"
            >
              <Lock className="w-3.5 h-3.5" />
              <span>Customer Portal Login</span>
            </button>
          </div>

        </div>
      </header>

      {/* 2. Public Front Overview */}
      <main className="relative z-10 max-w-5xl mx-auto px-6 py-20 text-center flex-1 flex flex-col items-center justify-center">
        
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-[#C8102E]/40 text-[#C8102E] text-xs font-mono uppercase tracking-widest mb-6">
          <Zap className="w-3.5 h-3.5 fill-current" />
          <span>Client Account & Delivery Engine</span>
        </div>

        <h1 className="font-display text-5xl sm:text-8xl font-black uppercase tracking-tight text-white leading-none mb-6">
          CLIENT <span className="text-[#C8102E] drop-shadow-[0_0_35px_rgba(200,16,46,0.6)]">WORKSPACE</span>
        </h1>

        <p className="max-w-2xl text-base sm:text-lg text-[#CCC5C4] leading-relaxed mb-10">
          हमारे क्लाइंट्स को दिया जाने वाला सुरक्षित कस्टमर पोर्टल सक्रिय है। क्लाइंट अपने मेल आईडी और पासवर्ड से लॉगिन करके अपना खरीदा हुआ प्लान और रील्स डिलीवरी स्टेटस चेक कर सकते हैं।
        </p>

        {/* Action Card */}
        <div className="w-full max-w-xl p-8 rounded-3xl bg-[#171919] border border-white/10 shadow-2xl text-left space-y-6">
          <div className="flex items-center justify-between pb-4 border-b border-white/10">
            <span className="text-xs font-mono uppercase tracking-widest text-[#C8102E] font-bold">
              • Access Customer Account
            </span>
            <span className="text-xs font-mono text-emerald-400">Live Encrypted Portal</span>
          </div>

          <p className="text-sm text-[#CCC5C4] leading-relaxed">
            कस्टमर पोर्टल का इंटरफेस देखने और टेस्ट करने के लिए नीचे दिए गए बटन पर क्लिक करें:
          </p>

          <button
            onClick={() => setCurrentView('portal')}
            className="w-full py-4 rounded-xl bg-[#C8102E] hover:bg-[#a50b24] text-white font-mono text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(200,16,46,0.4)] transition-all cursor-pointer hover:scale-[1.02]"
          >
            <span>Open Customer Portal (कस्टमर पोर्टल खोलें) →</span>
          </button>
        </div>

      </main>

      {/* 3. Minimal Footer */}
      <footer className="relative z-10 py-6 px-6 text-center border-t border-white/10 text-xs font-mono text-white/40">
        RONIN MEDIA · Customer Portal & Media Operations
      </footer>

    </div>
  );
};

export default App;
