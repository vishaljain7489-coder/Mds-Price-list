import React, { useState } from 'react';
import { 
  ShieldCheck, Sparkles, ArrowRight, CheckCircle2, 
  MapPin, Users, Award, TrendingUp, Lock, Zap, 
  Target, Video, MessageCircle, AlertTriangle, ExternalLink 
} from 'lucide-react';
import { getAgencyProfile, AgencyProfile } from '../../data/agencyProfile';

interface FrontPortfolioPageProps {
  onOpenPortal: () => void;
}

export const FrontPortfolioPage: React.FC<FrontPortfolioPageProps> = ({ onOpenPortal }) => {
  const profile = getAgencyProfile();
  const [selectedCase, setSelectedCase] = useState<string | null>(null);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white selection:bg-[#C8102E] selection:text-white font-sans antialiased relative overflow-hidden">
      
      {/* Background Reddish Atmosphere */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-[#C8102E]/15 blur-[160px] pointer-events-none" />
      <div className="fixed bottom-0 right-0 w-[600px] h-[600px] rounded-full bg-[#C8102E]/10 blur-[150px] pointer-events-none" />
      <div className="absolute inset-0 bg-crosshair-circles opacity-25 pointer-events-none" />

      {/* ======================================================== */}
      {/* 1. FIXED TOP NAVBAR                                      */}
      {/* ======================================================== */}
      <header className="sticky top-0 z-40 py-4 px-4 sm:px-8 bg-[#0A0A0A]/90 border-b border-white/10 backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#C8102E] flex items-center justify-center font-bold text-white shadow-[0_0_15px_#C8102E]">
              +
            </div>
            <div>
              <span className="font-display text-2xl uppercase font-bold text-white tracking-wider block leading-none">
                {profile.brandName}
              </span>
              <span className="text-[10px] font-mono text-[#CCC5C4] uppercase tracking-widest hidden sm:block">
                Media & Performance Agency
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 text-xs font-mono uppercase tracking-wider text-[#CCC5C4]">
            <button onClick={() => scrollTo('about')} className="hover:text-white transition-colors cursor-pointer">
              About Us
            </button>
            <button onClick={() => scrollTo('motive')} className="hover:text-white transition-colors cursor-pointer">
              Our Motive
            </button>
            <button onClick={() => scrollTo('enhancements')} className="hover:text-white transition-colors cursor-pointer">
              What We Enhance
            </button>
            <button onClick={() => scrollTo('portfolio')} className="hover:text-white transition-colors cursor-pointer">
              Portfolio
            </button>
          </nav>

          {/* Customer Portal Login / Sign In CTA */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenPortal}
              className="px-5 py-2.5 rounded-full bg-[#C8102E] hover:bg-[#a50b24] text-white text-xs font-mono font-bold uppercase tracking-wider flex items-center gap-2 shadow-[0_0_20px_rgba(200,16,46,0.45)] transition-all cursor-pointer hover:scale-105"
            >
              <Lock className="w-3.5 h-3.5" />
              <span>Login / Create Account</span>
            </button>
          </div>

        </div>
      </header>

      {/* ======================================================== */}
      {/* 2. HERO SECTION                                          */}
      {/* ======================================================== */}
      <section className="relative z-10 pt-20 sm:pt-28 pb-16 px-4 sm:px-8 text-center max-w-6xl mx-auto">
        
        {/* Experience Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-[#C8102E]/40 text-[#C8102E] text-xs font-mono uppercase tracking-widest mb-6 backdrop-blur-md">
          <Award className="w-4 h-4 fill-current" />
          <span>{profile.badge}</span>
        </div>

        {/* Big Impact Headline */}
        <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl font-black uppercase tracking-tight text-white leading-[0.95] mb-6">
          WE TURN OFFLINE <br />
          <span className="text-[#C8102E] drop-shadow-[0_0_40px_rgba(200,16,46,0.55)]">
            LOCAL FOOTFALL
          </span> <br />
          INTO PREDICTABLE REVENUE.
        </h1>

        <p className="max-w-3xl mx-auto text-base sm:text-xl text-[#CCC5C4] font-normal leading-relaxed mb-10">
          हम दो पार्टनर्स हैं, जिनके पास <span className="text-white font-bold">2-3 साल का मीडिया एडवर्टाइजमेंट और परफॉर्मेंस मार्केटिंग</span> का गहरा अनुभव है। हम लोकल स्टोर्स, शोरूम, कैफ़े और ब्रांड्स के लिए 3-सेकंड वायरल हुक्स और मेटा ऐड्स मैनेजर से सीधे व्हाट्सएप वॉक-इन ग्राहक लाते हैं।
        </p>

        {/* 4 Stats Chips */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-12">
          {profile.stats.map((stat, idx) => (
            <div key={idx} className="p-4 rounded-2xl bg-[#171919] border border-white/10 shadow-lg text-left">
              <span className="font-display text-3xl font-black text-[#C8102E] block">{stat.value}</span>
              <span className="text-xs font-bold text-white block mt-0.5">{stat.label}</span>
              <span className="text-[11px] font-mono text-[#CCC5C4] mt-1 block leading-tight">{stat.desc}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={() => scrollTo('portfolio')}
            className="px-8 py-3.5 rounded-full bg-white text-[#0A0A0A] hover:bg-slate-200 text-xs font-mono font-bold uppercase tracking-widest transition-all cursor-pointer shadow-xl hover:scale-105"
          >
            Explore Our Portfolio ↓
          </button>
          <button
            onClick={onOpenPortal}
            className="px-8 py-3.5 rounded-full bg-[#171919] hover:bg-black border border-[#C8102E]/60 text-white text-xs font-mono font-bold uppercase tracking-widest transition-all cursor-pointer shadow-lg hover:scale-105 flex items-center gap-2"
          >
            <Lock className="w-3.5 h-3.5 text-[#C8102E]" />
            <span>Client Login / Register →</span>
          </button>
        </div>

      </section>

      {/* ======================================================== */}
      {/* 3. ABOUT US & 2 FOUNDERS SECTION                         */}
      {/* ======================================================== */}
      <section id="about" className="relative z-10 py-20 px-4 sm:px-8 border-t border-white/10 bg-[#0d0e0f]">
        <div className="max-w-6xl mx-auto">
          
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4 mb-12">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#C8102E] font-bold block mb-2">
                • THE CO-FOUNDERS & PARTNERS
              </span>
              <h2 className="font-display text-4xl sm:text-6xl uppercase tracking-tight text-white leading-none">
                WHO WE ARE & OUR BACKGROUND
              </h2>
            </div>
            <span className="text-xs font-mono text-[#CCC5C4] max-w-xs">
              2 Dedicated Founders · 2-3 Years of Real Ad Spend Management
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            
            {/* Founder 1 Card */}
            <div className="p-8 rounded-3xl bg-[#171919] border border-white/15 relative overflow-hidden group hover:border-[#C8102E]/60 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-[#C8102E]/20 text-[#C8102E] flex items-center justify-center font-display text-2xl font-bold mb-6">
                01
              </div>
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#C8102E] font-bold block mb-1">
                Co-Founder & Creative Director
              </span>
              <h3 className="font-display text-2xl sm:text-3xl uppercase text-white mb-3">
                Viral 9:16 Video & Hook Cinematography
              </h3>
              <p className="text-sm text-[#CCC5C4] leading-relaxed font-sans mb-6">
                2+ वर्षों से लोकल बिजनेस के लिए 3-सेकंड पैटर्न इंटरप्ट हुक, सिनेमैटिक कैमरा एंगल्स, ASMR ऑडियो डिजाइन और काइनेटिक सबटाइटलिंग में विशेषज्ञता। हमारा काम सिर्फ सुंदर वीडियो बनाना नहीं, बल्कि स्क्रॉल करते हुए यूजर की उंगली रोकना है।
              </p>
              <div className="pt-4 border-t border-white/10 text-xs font-mono text-white/60">
                Speciality: Local Offline Angles · Fast Hook Scripting · 65%+ Retention Hold
              </div>
            </div>

            {/* Founder 2 Card */}
            <div className="p-8 rounded-3xl bg-[#171919] border border-white/15 relative overflow-hidden group hover:border-[#C8102E]/60 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-[#C8102E]/20 text-[#C8102E] flex items-center justify-center font-display text-2xl font-bold mb-6">
                02
              </div>
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#C8102E] font-bold block mb-1">
                Co-Founder & Head of Media Buying
              </span>
              <h3 className="font-display text-2xl sm:text-3xl uppercase text-white mb-3">
                Hyper-Local Meta Ads & WhatsApp Funnels
              </h3>
              <p className="text-sm text-[#CCC5C4] leading-relaxed font-sans mb-6">
                3 वर्षों से Meta Ads Manager में enterprise-level कैंपेन आर्किटेक्चर, 5-10km जियो-फेंसिंग, CBO बजट डिस्ट्रीब्यूशन और CAPI पिक्सेल ट्रैकिंग का संचालन। हम बेकार लाइक्स के बजाय सीधे सेल्स व्हाट्सएप चैट पर कन्वर्जन ड्राइव करते हैं।
              </p>
              <div className="pt-4 border-t border-white/10 text-xs font-mono text-white/60">
                Speciality: 5-10km Radius Geofencing · Direct WhatsApp Inquiries · Zero Wasted Ad Card Spend
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ======================================================== */}
      {/* 4. OUR MOTIVE & WHY WE DO THIS                           */}
      {/* ======================================================== */}
      <section id="motive" className="relative z-10 py-20 px-4 sm:px-8 border-t border-white/10 bg-[#0A0A0A]">
        <div className="max-w-6xl mx-auto">
          
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#171919] via-[#1a1215] to-[#171919] border border-[#C8102E]/40 relative overflow-hidden shadow-2xl">
            
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#C8102E]/15 rounded-full blur-[100px] pointer-events-none" />

            <div className="relative z-10 max-w-3xl">
              <span className="text-xs font-mono uppercase tracking-widest text-[#C8102E] font-bold block mb-3">
                • OUR PHILOSOPHY & MANIFESTO
              </span>
              <h2 className="font-display text-3xl sm:text-5xl uppercase tracking-tight text-white mb-6">
                {profile.motive.heading}
              </h2>

              <p className="text-base sm:text-lg text-white/90 leading-relaxed font-sans mb-6">
                {profile.motive.story}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                <div className="p-5 rounded-2xl bg-black/60 border border-red-500/30">
                  <span className="text-xs font-mono uppercase text-red-400 font-bold block mb-1">
                    ❌ The "Boost Post" Trap
                  </span>
                  <p className="text-xs text-[#CCC5C4] leading-relaxed">
                    इंस्टाग्राम का नीला बूस्ट बटन सिर्फ टाइमपास करने वाले उन लोगों को ऐड्स दिखाता है जो सिर्फ डबल-टैप करते हैं, लेकिन आपकी दुकान पर कभी नहीं आते।
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-black/60 border border-emerald-500/30">
                  <span className="text-xs font-mono uppercase text-emerald-400 font-bold block mb-1">
                    ✓ Our Performance Solution
                  </span>
                  <p className="text-xs text-[#CCC5C4] leading-relaxed">
                    हम 5-10km रेडियस के अंदर रहने वाले उन असल ग्राहकों को टारगेट करते हैं जो आपकी सर्विस लेने में सक्षम हैं और सीधे व्हाट्सएप पर चैट शुरू करते हैं।
                  </p>
                </div>
              </div>

              <p className="text-sm text-[#CCC5C4] font-mono">
                हमारा उद्देश्य स्पष्ट है: आपके विज्ञापन के एक-एक पैसे का हिसाब और आपकी दुकान पर असली ग्राहकों की लाइन।
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ======================================================== */}
      {/* 5. WHAT WE ENHANCE FOR YOUR SHOP / BRAND                 */}
      {/* ======================================================== */}
      <section id="enhancements" className="relative z-10 py-24 px-4 sm:px-8 border-t border-white/10 bg-[#0d0e0f]">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-[#C8102E] font-bold block mb-2">
              • VALUE ENHANCEMENTS FOR YOUR BUSINESS
            </span>
            <h2 className="font-display text-4xl sm:text-6xl uppercase tracking-tight text-white">
              WHAT WE BRING TO YOUR BRAND & SHOP
            </h2>
            <p className="text-sm font-sans text-[#CCC5C4] mt-3">
              जब हम आपकी दुकान या ब्रांड के साथ काम करते हैं, तो हम यह 4 चीजें पूरी तरह अपग्रेड करके देते हैं:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {profile.enhancements.map((enh, idx) => (
              <div 
                key={idx}
                className="p-8 rounded-3xl bg-[#171919] border border-white/15 hover:border-[#C8102E]/60 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-2xl font-bold text-[#C8102E]">{enh.num}</span>
                    <span className="text-[10px] font-mono uppercase px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/70">
                      {enh.forWho}
                    </span>
                  </div>
                  <h3 className="font-display text-2xl uppercase tracking-wide text-white mb-2">
                    {enh.title}
                  </h3>
                  <p className="text-sm text-[#CCC5C4] font-sans leading-relaxed mb-6">
                    {enh.description}
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex items-center gap-2.5">
                  <Sparkles className="w-4 h-4 text-[#C8102E] shrink-0" />
                  <span className="text-xs font-mono text-white/90 font-medium">
                    {enh.benefit}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ======================================================== */}
      {/* 6. VERIFIED PORTFOLIO SHOWCASE                           */}
      {/* ======================================================== */}
      <section id="portfolio" className="relative z-10 py-24 px-4 sm:px-8 border-t border-white/10 bg-[#0A0A0A]">
        <div className="max-w-6xl mx-auto">
          
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4 mb-14">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#C8102E] font-bold block mb-2">
                • TRACK RECORD & DELIVERIES
              </span>
              <h2 className="font-display text-4xl sm:text-6xl uppercase tracking-tight text-white leading-none">
                OUR VERIFIED PORTFOLIO
              </h2>
            </div>
            <p className="text-xs font-mono text-[#CCC5C4] max-w-sm">
              Real businesses, real local radius campaigns, and documented footfall results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {profile.portfolioCases.map((item) => (
              <div 
                key={item.id}
                className="rounded-3xl overflow-hidden bg-[#171919] border border-white/15 hover:border-[#C8102E] transition-all shadow-xl group flex flex-col justify-between"
              >
                {/* Image Banner */}
                <div className="relative aspect-[16/10] overflow-hidden bg-black">
                  <img
                    src={item.image}
                    alt={item.client}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-75"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#171919] via-transparent to-black/40" />

                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="text-[10px] font-mono uppercase px-3 py-1 rounded-full bg-[#C8102E] text-white font-bold tracking-wider">
                      {item.category}
                    </span>
                    <span className="text-[10px] font-mono text-white/90 bg-black/60 px-3 py-1 rounded-full backdrop-blur-md">
                      {item.location}
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="font-display text-3xl uppercase text-white leading-tight">
                      {item.client}
                    </h3>
                    <p className="text-xs font-mono text-[#CCC5C4] mt-1">
                      Hook: "{item.hook}"
                    </p>
                  </div>
                </div>

                {/* Content Box */}
                <div className="p-6 space-y-4">
                  
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#CCC5C4] block">Verified Result</span>
                    <p className="font-display text-2xl font-bold text-white mt-0.5">
                      {item.resultMetric}
                    </p>
                    <p className="text-xs text-emerald-400 font-mono mt-1">
                      {item.resultDetail}
                    </p>
                  </div>

                  <div className="flex items-center justify-between text-xs font-mono text-[#CCC5C4] pt-2 border-t border-white/10">
                    <span>Deliverables:</span>
                    <span className="text-white font-bold">{item.deliverables}</span>
                  </div>

                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ======================================================== */}
      {/* 7. PORTAL CALL TO ACTION GATEWAY                         */}
      {/* ======================================================== */}
      <section className="relative z-10 py-20 px-4 sm:px-8 border-t border-white/10 bg-[#0d0e0f]">
        <div className="max-w-4xl mx-auto text-center p-8 sm:p-14 rounded-3xl bg-gradient-to-br from-[#171919] to-black border border-[#C8102E]/50 shadow-2xl relative overflow-hidden">
          
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-80 bg-[#C8102E]/25 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10">
            <span className="text-xs font-mono uppercase tracking-widest text-[#C8102E] font-bold block mb-3">
              • READY TO WORK WITH US?
            </span>
            <h2 className="font-display text-4xl sm:text-6xl uppercase tracking-tight text-white mb-4">
              ACCESS CUSTOMER PORTAL
            </h2>
            <p className="text-sm font-sans text-[#CCC5C4] max-w-xl mx-auto mb-8">
              हम फ्रंट पेज पर कोई कीमतें सार्वजनिक नहीं करते। हमारे एक्सक्लूसिव पैकेजेस देखने और अपने बिज़नेस के लिए ऑनबोर्डिंग शुरू करने के लिए लॉगिन करें या नया अकाउंट बनाएं।
            </p>

            <button
              onClick={onOpenPortal}
              className="px-10 py-4 rounded-full bg-[#C8102E] hover:bg-[#a50b24] text-white text-xs sm:text-sm font-mono font-bold uppercase tracking-widest shadow-[0_0_30px_rgba(200,16,46,0.5)] transition-all cursor-pointer hover:scale-105 inline-flex items-center gap-2.5"
            >
              <Lock className="w-4 h-4" />
              <span>Customer Login & Register Now →</span>
            </button>
          </div>

        </div>
      </section>

      {/* ======================================================== */}
      {/* 8. FOOTER                                                */}
      {/* ======================================================== */}
      <footer className="relative z-10 py-8 px-4 sm:px-8 border-t border-white/10 text-center text-xs font-mono text-white/40">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <span>{profile.brandName} · 2 Partners · 2-3 Years Media Advertising</span>
          <button onClick={onOpenPortal} className="text-[#C8102E] hover:underline cursor-pointer">
            Client Portal Login / Sign Up
          </button>
        </div>
      </footer>

    </div>
  );
};
