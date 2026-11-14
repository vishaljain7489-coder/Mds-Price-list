import React, { useState } from 'react';
import { 
  ShieldCheck, Sparkles, ArrowRight, CheckCircle2, 
  MapPin, Users, Award, TrendingUp, Lock, Zap, 
  Target, Video, MessageCircle, AlertTriangle, ExternalLink,
  ChevronDown, Phone, UserCheck, Play
} from 'lucide-react';
import { getAgencyProfile } from '../../data/agencyProfile';

interface FrontPortfolioPageProps {
  onOpenPortal: () => void;
}

export const FrontPortfolioPage: React.FC<FrontPortfolioPageProps> = ({ onOpenPortal }) => {
  const profile = getAgencyProfile();
  const [activeTab, setActiveTab] = useState<'all' | 'food' | 'auto' | 'salon'>('all');

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const filteredCases = profile.portfolioCases.filter(item => {
    if (activeTab === 'all') return true;
    if (activeTab === 'food') return item.category.toLowerCase().includes('food');
    if (activeTab === 'auto') return item.category.toLowerCase().includes('auto');
    if (activeTab === 'salon') return item.category.toLowerCase().includes('beauty') || item.category.toLowerCase().includes('salon');
    return true;
  });

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white selection:bg-[#C8102E] selection:text-white font-sans antialiased relative overflow-x-hidden">
      
      {/* Background Reddish Ambient Glows */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-[#C8102E]/15 blur-[160px] pointer-events-none" />
      <div className="fixed bottom-0 right-0 w-[600px] h-[600px] rounded-full bg-[#C8102E]/10 blur-[150px] pointer-events-none" />
      <div className="fixed inset-0 bg-crosshair-circles opacity-20 pointer-events-none" />

      {/* ======================================================== */}
      {/* 1. FIXED HEADER                                          */}
      {/* ======================================================== */}
      <header className="fixed top-0 left-0 right-0 z-50 py-4 px-4 sm:px-8 bg-[#0A0A0A]/90 border-b border-white/10 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Left: Brand Wordmark */}
          <a href="#" className="flex items-center gap-3 group focus:outline-none cursor-pointer">
            <div className="w-8 h-8 rounded-lg bg-[#C8102E] flex items-center justify-center font-bold text-white shadow-[0_0_15px_#C8102E] group-hover:rotate-90 transition-transform duration-300">
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
          </a>

          {/* Center Links */}
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

          {/* Right: EXACT REQUEST: "Login / Sign Up" Button */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenPortal}
              className="px-5 py-2.5 rounded-full bg-[#C8102E] hover:bg-[#a50b24] text-white text-xs font-mono font-bold uppercase tracking-wider flex items-center gap-2 shadow-[0_0_20px_rgba(200,16,46,0.45)] transition-all cursor-pointer hover:scale-105"
            >
              <Lock className="w-3.5 h-3.5" />
              <span>Login & Sign Up</span>
            </button>
          </div>

        </div>
      </header>

      {/* ======================================================== */}
      {/* 2. HERO SECTION                                          */}
      {/* ======================================================== */}
      <section className="relative z-10 pt-32 sm:pt-40 pb-20 px-4 sm:px-8 text-center max-w-6xl mx-auto flex flex-col items-center">
        
        {/* Founders & Experience Pill Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-[#C8102E]/40 text-[#C8102E] text-xs font-mono uppercase tracking-widest mb-6 backdrop-blur-md shadow-[0_0_15px_rgba(200,16,46,0.2)] animate-pulse">
          <Award className="w-4 h-4 fill-current" />
          <span>2 PARTNERS · 2-3 YEARS MEDIA ADVERTISING & PERFORMANCE MARKETING</span>
        </div>

        {/* Big Impact Main Title */}
        <h1 className="font-display text-5xl sm:text-7xl lg:text-9xl font-black uppercase tracking-tight text-white leading-[0.92] mb-6">
          WE TURN OFFLINE <br />
          <span className="text-[#C8102E] drop-shadow-[0_0_45px_rgba(200,16,46,0.6)]">
            LOCAL FOOTFALL
          </span> <br />
          INTO DAILY REVENUE.
        </h1>

        <p className="max-w-3xl text-base sm:text-xl text-[#CCC5C4] font-normal leading-relaxed mb-10">
          हम दो पार्टनर्स हैं, जिनके पास <span className="text-white font-bold">2 से 3 साल का मीडिया एडवर्टाइजमेंट और परफॉर्मेंस मार्केटिंग</span> का गहरा प्रैक्टिकल अनुभव है। हम लोकल स्टोर्स, कार शोरूम, रेस्टोरेंट्स और ब्रांड्स के लिए 3-सेकंड वायरल हुक्स और मेटा ऐड्स मैनेजर से सीधे वॉक-इन ग्राहक और व्हाट्सएप इन्क्वायरी लाते हैं।
        </p>

        {/* 4 Interactive Stat Cards (Flexed side-by-side with hover effects) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-4xl mb-12">
          {profile.stats.map((stat, idx) => (
            <div 
              key={idx} 
              className="p-5 rounded-2xl bg-[#171919] border border-white/10 hover:border-[#C8102E]/50 transition-all text-left group shadow-lg hover:-translate-y-1"
            >
              <span className="font-display text-3xl sm:text-4xl font-black text-[#C8102E] block group-hover:scale-105 transition-transform">
                {stat.value}
              </span>
              <span className="text-xs font-bold text-white block mt-1">{stat.label}</span>
              <span className="text-[11px] font-mono text-[#CCC5C4] mt-1 block leading-tight">{stat.desc}</span>
            </div>
          ))}
        </div>

        {/* Call to Actions */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={() => scrollTo('portfolio')}
            className="px-8 py-4 rounded-full bg-white text-[#0A0A0A] hover:bg-slate-200 text-xs font-mono font-bold uppercase tracking-widest transition-all cursor-pointer shadow-xl hover:scale-105 flex items-center gap-2"
          >
            <span>Explore Our Work & Portfolio ↓</span>
          </button>
          
          <button
            onClick={onOpenPortal}
            className="px-8 py-4 rounded-full bg-[#171919] hover:bg-black border border-[#C8102E]/60 text-white text-xs font-mono font-bold uppercase tracking-widest transition-all cursor-pointer shadow-lg hover:scale-105 flex items-center gap-2"
          >
            <Lock className="w-3.5 h-3.5 text-[#C8102E]" />
            <span>Login & Sign Up Portal →</span>
          </button>
        </div>

      </section>

      {/* ======================================================== */}
      {/* 3. ABOUT US: 2 PARTNERS & 2-3 YEARS EXPERIENCE           */}
      {/* ======================================================== */}
      <section id="about" className="relative z-10 py-24 px-4 sm:px-8 border-t border-white/10 bg-[#0d0e0f]">
        <div className="max-w-6xl mx-auto">
          
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4 mb-16">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#C8102E] font-bold block mb-2">
                • WHO WE ARE & OUR JOURNEY
              </span>
              <h2 className="font-display text-4xl sm:text-6xl uppercase tracking-tight text-white leading-none">
                TWO PARTNERS. 2-3 YEARS OF AD OPERATIONS.
              </h2>
            </div>
            <span className="text-xs font-mono text-[#CCC5C4] max-w-xs">
              Direct In-House Media Buying · Zero Freelancer Outsourcing
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Partner 1 Card (Slides/Flex from left) */}
            <div className="p-8 sm:p-10 rounded-3xl bg-[#171919] border border-white/15 relative overflow-hidden group hover:border-[#C8102E]/60 transition-all shadow-xl hover:-translate-y-1">
              <div className="w-14 h-14 rounded-2xl bg-[#C8102E]/20 text-[#C8102E] border border-[#C8102E]/30 flex items-center justify-center font-display text-3xl font-bold mb-6">
                01
              </div>
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#C8102E] font-bold block mb-1">
                Co-Founder & Creative Director
              </span>
              <h3 className="font-display text-2xl sm:text-3xl uppercase text-white mb-3">
                Viral 9:16 Scripting & Pattern Interrupts
              </h3>
              <p className="text-sm text-[#CCC5C4] leading-relaxed font-sans mb-6">
                हमारा पार्टनरशिप मॉडल पूरी तरह स्पेशलाइज्ड है। पहले पार्टनर 2+ सालों से 9:16 वर्टिकल रील्स, हाई-कंट्रास्ट मैक्रो क्लोजअप्स, ASMR साउंड डिजाइन और 3-सेकंड साइकोलॉजिकल हुक्स पर काम कर रहे हैं। इनका काम यूजर की उंगली रोककर वीडियो पर 65%+ का वॉच-टाइम देना है।
              </p>
              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-white/60">
                <span>Speciality: Video Cinematography</span>
                <span className="text-[#C8102E] font-bold">65%+ Hold Rate</span>
              </div>
            </div>

            {/* Partner 2 Card (Slides/Flex from right) */}
            <div className="p-8 sm:p-10 rounded-3xl bg-[#171919] border border-white/15 relative overflow-hidden group hover:border-[#C8102E]/60 transition-all shadow-xl hover:-translate-y-1">
              <div className="w-14 h-14 rounded-2xl bg-[#C8102E]/20 text-[#C8102E] border border-[#C8102E]/30 flex items-center justify-center font-display text-3xl font-bold mb-6">
                02
              </div>
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#C8102E] font-bold block mb-1">
                Co-Founder & Head of Media Buying
              </span>
              <h3 className="font-display text-2xl sm:text-3xl uppercase text-white mb-3">
                Hyper-Local Meta Ads & WhatsApp Funnels
              </h3>
              <p className="text-sm text-[#CCC5C4] leading-relaxed font-sans mb-6">
                दूसरे पार्टनर पिछले 3 सालों से Meta Ads Manager में enterprise-level कैंपेन आर्किटेक्चर, 5-10km जियो-फेंसिंग और CBO फनल्स का संचालन कर रहे हैं। इनका काम विज्ञापन के एक-एक पैसे को ऑप्टिमाइज़ करके सीधे आपकी दुकान या शोरूम पर ग्राहकों की व्हाट्सएप लीड्स लाना है।
              </p>
              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-white/60">
                <span>Speciality: 5-10km Geofencing</span>
                <span className="text-emerald-400 font-bold">100% WhatsApp Leads</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ======================================================== */}
      {/* 4. OUR MOTIVE: WHY WE DO THIS (ANTI-BOOST MANIFESTO)     */}
      {/* ======================================================== */}
      <section id="motive" className="relative z-10 py-24 px-4 sm:px-8 border-t border-white/10 bg-[#0A0A0A]">
        <div className="max-w-6xl mx-auto">
          
          <div className="p-8 sm:p-14 rounded-3xl bg-gradient-to-br from-[#171919] via-[#1a1215] to-[#171919] border border-[#C8102E]/40 relative overflow-hidden shadow-2xl">
            
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#C8102E]/15 rounded-full blur-[110px] pointer-events-none" />

            <div className="relative z-10 max-w-3xl">
              <span className="text-xs font-mono uppercase tracking-widest text-[#C8102E] font-bold block mb-3">
                • OUR PHILOSOPHY & WHY WE STARTED
              </span>
              <h2 className="font-display text-3xl sm:text-5xl uppercase tracking-tight text-white mb-6 leading-tight">
                STOPPING THE "BOOST POST" TRAP THAT WASTES MONEY.
              </h2>

              <p className="text-base sm:text-lg text-white/90 leading-relaxed font-sans mb-6">
                पिछले 2-3 सालों में हमने देखा कि लोकल दुकानदार, रेस्टोरेंट्स, शोरूम और सैलून वाले इंस्टाग्राम पर नीला <strong>"Boost Post"</strong> बटन दबाकर हजारों रुपये फूंक देते हैं। इसका नतीजा क्या निकलता है? 
                फेक लाइक्स, बॉट कमेंट्स, और दुकान पर शून्य ग्राहक।
              </p>

              {/* Side-by-Side Comparison Boxes */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                <div className="p-5 rounded-2xl bg-black/60 border border-red-500/30">
                  <span className="text-xs font-mono uppercase text-red-400 font-bold block mb-1">
                    ❌ Instagram "Boost Post" Reality:
                  </span>
                  <p className="text-xs text-[#CCC5C4] leading-relaxed">
                    यह सिर्फ उन स्क्रोलर्स को विज्ञापन दिखाता है जो सिर्फ डबल-टैप करते हैं लेकिन आपके इलाके में कभी कदम नहीं रखते।
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-black/60 border border-emerald-500/30">
                  <span className="text-xs font-mono uppercase text-emerald-400 font-bold block mb-1">
                    ✓ Our Performance Solution:
                  </span>
                  <p className="text-xs text-[#CCC5C4] leading-relaxed">
                    हम Meta Ads Manager के ज़रिए सिर्फ 5-10km दायरे में रहने वाले उन परिवारों को टारगेट करते हैं जो असल में खरीदारी करते हैं।
                  </p>
                </div>
              </div>

              <p className="text-sm text-[#CCC5C4] font-mono">
                हमारा उद्देश्य स्पष्ट है: आपके हर एक रुपये का हिसाब और आपकी दुकान पर वास्तविक कस्टमर फुटफॉल।
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
              • VALUE UPGRADES FOR YOUR BUSINESS
            </span>
            <h2 className="font-display text-4xl sm:text-6xl uppercase tracking-tight text-white leading-tight">
              WHAT WE BRING TO YOUR BRAND & SHOP
            </h2>
            <p className="text-sm font-sans text-[#CCC5C4] mt-3">
              जब आप हमारे साथ पार्टनरशिप करते हैं, तो हम आपकी दुकान या ब्रांड के लिए यह 4 मुख्य चीजें पूरी तरह तैयार करके देते हैं:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {profile.enhancements.map((enh, idx) => (
              <div 
                key={idx}
                className="p-8 rounded-3xl bg-[#171919] border border-white/15 hover:border-[#C8102E]/60 transition-all flex flex-col justify-between group shadow-xl hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-3xl font-bold text-[#C8102E]">{enh.num}</span>
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
          
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4 mb-12">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#C8102E] font-bold block mb-2">
                • VERIFIED LOCAL DELIVERIES
              </span>
              <h2 className="font-display text-4xl sm:text-6xl uppercase tracking-tight text-white leading-none">
                OUR WORK & CLIENT PORTFOLIO
              </h2>
            </div>

            {/* Filter Tabs */}
            <div className="flex items-center gap-2 p-1 rounded-xl bg-[#171919] border border-white/10">
              <button
                onClick={() => setActiveTab('all')}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono uppercase ${activeTab === 'all' ? 'bg-[#C8102E] text-white font-bold' : 'text-[#CCC5C4] hover:text-white'}`}
              >
                All
              </button>
              <button
                onClick={() => setActiveTab('auto')}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono uppercase ${activeTab === 'auto' ? 'bg-[#C8102E] text-white font-bold' : 'text-[#CCC5C4] hover:text-white'}`}
              >
                Automotive
              </button>
              <button
                onClick={() => setActiveTab('food')}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono uppercase ${activeTab === 'food' ? 'bg-[#C8102E] text-white font-bold' : 'text-[#CCC5C4] hover:text-white'}`}
              >
                Cafés
              </button>
              <button
                onClick={() => setActiveTab('salon')}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono uppercase ${activeTab === 'salon' ? 'bg-[#C8102E] text-white font-bold' : 'text-[#CCC5C4] hover:text-white'}`}
              >
                Salons
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredCases.map((item) => (
              <div 
                key={item.id}
                className="rounded-3xl overflow-hidden bg-[#171919] border border-white/15 hover:border-[#C8102E] transition-all shadow-xl group flex flex-col justify-between hover:-translate-y-1 duration-300"
              >
                {/* Image Banner */}
                <div className="relative aspect-[16/10] overflow-hidden bg-black">
                  <img
                    src={item.image}
                    alt={item.client}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80"
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
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#CCC5C4] block">Verified Result Delivered</span>
                    <p className="font-display text-2xl font-bold text-white mt-0.5">
                      {item.resultMetric}
                    </p>
                    <p className="text-xs text-emerald-400 font-mono mt-1">
                      {item.resultDetail}
                    </p>
                  </div>

                  <div className="flex items-center justify-between text-xs font-mono text-[#CCC5C4] pt-2 border-t border-white/10">
                    <span>Campaign Deliverables:</span>
                    <span className="text-white font-bold">{item.deliverables}</span>
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ======================================================== */}
      {/* 7. PORTAL GATEWAY CALL TO ACTION                         */}
      {/* ======================================================== */}
      <section className="relative z-10 py-24 px-4 sm:px-8 border-t border-white/10 bg-[#0d0e0f]">
        <div className="max-w-4xl mx-auto text-center p-8 sm:p-14 rounded-3xl bg-gradient-to-br from-[#171919] to-black border border-[#C8102E]/50 shadow-2xl relative overflow-hidden">
          
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-80 bg-[#C8102E]/25 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10">
            <span className="text-xs font-mono uppercase tracking-widest text-[#C8102E] font-bold block mb-3">
              • READY TO WORK WITH US?
            </span>
            <h2 className="font-display text-4xl sm:text-6xl uppercase tracking-tight text-white mb-4">
              ACCESS CLIENT PORTAL
            </h2>
            <p className="text-sm font-sans text-[#CCC5C4] max-w-xl mx-auto mb-8">
              हम पब्लिक पेज पर कोई कीमतें सार्वजनिक नहीं करते। हमारे एक्सक्लूसिव पैकेजेस देखने, अपना खरीदा हुआ प्लान ट्रैक करने और नई ऑनबोर्डिंग शुरू करने के लिए लॉगिन करें या नया खाता बनाएं।
            </p>

            <button
              onClick={onOpenPortal}
              className="px-10 py-4 rounded-full bg-[#C8102E] hover:bg-[#a50b24] text-white text-xs sm:text-sm font-mono font-bold uppercase tracking-widest shadow-[0_0_30px_rgba(200,16,46,0.5)] transition-all cursor-pointer hover:scale-105 inline-flex items-center gap-2.5"
            >
              <Lock className="w-4 h-4" />
              <span>Login & Sign Up Portal Now →</span>
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
            Login & Sign Up Portal
          </button>
        </div>
      </footer>

    </div>
  );
};
