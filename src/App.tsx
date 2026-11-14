import React, { useState } from 'react';
import { Sparkles, ArrowRight, ShieldCheck, PhoneCall, Zap, Play } from 'lucide-react';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white selection:bg-[#C8102E] selection:text-white font-sans antialiased relative overflow-hidden flex flex-col justify-between">
      
      {/* Background Reddish Ambient Glow & Crosshair Grid */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-[#C8102E]/20 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-[#C8102E]/10 blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 bg-crosshair-circles opacity-20 pointer-events-none" />

      {/* 1. Sleek Reddish Minimal Header */}
      <header className="relative z-20 py-6 px-6 sm:px-12 border-b border-white/10 backdrop-blur-md bg-black/40">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#C8102E] flex items-center justify-center font-bold text-white shadow-[0_0_15px_#C8102E]">
              +
            </div>
            <span className="font-display text-2xl tracking-wider uppercase font-bold text-white">
              RONIN MEDIA
            </span>
          </div>

          <div className="flex items-center gap-4">
            <span className="hidden sm:inline-flex items-center gap-2 text-xs font-mono text-[#CCC5C4] uppercase tracking-widest">
              <span className="w-2 h-2 rounded-full bg-[#C8102E] animate-pulse" />
              Clean Slate Mode
            </span>
          </div>
        </div>
      </header>

      {/* 2. Main Fresh Canvas */}
      <main className="relative z-10 max-w-5xl mx-auto px-6 py-24 sm:py-32 text-center flex-1 flex flex-col items-center justify-center">
        
        {/* Top Tag */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-[#C8102E]/40 text-[#C8102E] text-xs font-mono uppercase tracking-widest mb-6 backdrop-blur-md">
          <Zap className="w-3.5 h-3.5 fill-current" />
          <span>Fresh Start · Reddish Theme Ready</span>
        </div>

        {/* Big Clean Headline */}
        <h1 className="font-display text-5xl sm:text-8xl lg:text-9xl font-black uppercase tracking-tight text-white leading-none mb-6">
          REDESIGN <span className="text-[#C8102E] drop-shadow-[0_0_35px_rgba(200,16,46,0.6)]">CANVAS</span>
        </h1>

        <p className="max-w-2xl text-base sm:text-xl text-[#CCC5C4] font-normal leading-relaxed mb-10">
          पुराना सारा मटेरियल हटा दिया गया है। रेडिश थीम (`#C8102E` Crimson Red + Deep Ink Black) पूरी तरह एक्टिव है। अब बताइए सबसे पहला सेक्शन क्या और कैसा बनाना है?
        </p>

        {/* Visual Clean Placeholder Box */}
        <div className="w-full max-w-2xl p-8 rounded-3xl bg-[#171919] border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.8)] text-left space-y-4">
          <div className="flex items-center justify-between pb-4 border-b border-white/10">
            <span className="text-xs font-mono uppercase tracking-widest text-[#C8102E] font-bold">
              • Ready for Your Instructions
            </span>
            <span className="text-xs font-mono text-white/40">Step 01 / Fresh Blueprint</span>
          </div>
          <p className="text-sm text-white/80 leading-relaxed font-sans">
            आप जैसा बताएंगे — हीरो सेक्शन, हमारे बारे में (About Us), कौन-कौन से क्लाइंट्स के साथ काम किया, कौन-कौन से पैकेजेस, और कस्टमर लॉगिन — सब कुछ स्टेप-बाय-स्टेप बिल्कुल आपकी पसंद के अनुसार तैयार करेंगे।
          </p>
        </div>

      </main>

      {/* 3. Minimal Clean Footer */}
      <footer className="relative z-10 py-6 px-6 text-center border-t border-white/10 text-xs font-mono text-white/40">
        RONIN MEDIA · Premium Reddish Performance Edition
      </footer>

    </div>
  );
};

export default App;
