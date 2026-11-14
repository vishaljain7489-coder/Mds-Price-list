import React, { useState, useEffect } from 'react';
import { 
  UserCheck, Mail, Key, Sparkles, LogOut, 
  CheckCircle2, Clock, Video, TrendingUp, MessageCircle, 
  ShieldCheck, Check, Package, Phone, MapPin, AlertCircle, Lock
} from 'lucide-react';
import { useApp } from '../../context/ThemeLanguageContext';
import { AGENCY_CONFIG } from '../../data/agencyData';
import { AgencyClient } from '../../types';

// Default initial clients if localStorage is empty
const DEFAULT_CLIENTS_LIST: AgencyClient[] = [
  {
    id: "CLI-101",
    name: "Rohit Verma",
    businessName: "Royal Heritage Café & Dine",
    category: "Food & Hospitality",
    phone: "+91 98765 43210",
    email: "rohit@royalheritage.com",
    city: "Jaipur, C-Scheme",
    packageSubscribed: "15 Reels Advertisement Package (₹6,000)",
    totalBilled: 6000,
    amountPaid: 6000,
    amountDue: 0,
    paymentStatus: 'Paid',
    paymentMode: 'UPI',
    isVip: true,
    clientTemperament: "Very polite & enthusiastic. Focuses on weekend family footfall.",
    reelsDelivered: 8,
    reelsTotal: 15,
    adsActive: 6,
    adsPending: 9,
    metaBudgetSpent: 1420,
    metaBudgetTotal: 3000,
    serviceStatus: 'Active & Optimizing',
    notes: "Reel #4 (Weekend Special Hook) is driving highest conversions at ₹31/lead in 6km radius.",
    createdDate: "02 Nov 2026"
  },
  {
    id: "CLI-102",
    name: "Vikram Singhania",
    businessName: "Apex Motors (Pre-Owned Luxury Cars)",
    category: "Automotive",
    phone: "+91 98112 54321",
    email: "vikram@apexmotors.in",
    city: "Gurugram, Golf Course Rd",
    packageSubscribed: "Combo: 15 Reels + 15 Reels Ad Campaigns (₹12,000)",
    totalBilled: 12000,
    amountPaid: 12000,
    amountDue: 0,
    paymentStatus: 'Paid',
    paymentMode: 'Bank Transfer',
    isVip: true,
    clientTemperament: "Direct and results-oriented. Wants verified test drive bookings.",
    reelsDelivered: 12,
    reelsTotal: 15,
    adsActive: 10,
    adsPending: 5,
    metaBudgetSpent: 2600,
    metaBudgetTotal: 3000,
    serviceStatus: 'Active & Optimizing',
    notes: "34 genuine test drive inquiries booked this week with high buyer intent.",
    createdDate: "28 Oct 2026"
  },
  {
    id: "CLI-103",
    name: "Pooja Malhotra",
    businessName: "Aura Luxury Hair & Aesthetics Salon",
    category: "Beauty & Wellness",
    phone: "+91 98721 98765",
    email: "pooja@aurasalon.com",
    city: "Mumbai, Bandra West",
    packageSubscribed: "15 Reels Package (Production Only - ₹6,000)",
    totalBilled: 6000,
    amountPaid: 4000,
    amountDue: 2000,
    paymentStatus: 'Partial',
    paymentMode: 'UPI',
    isVip: false,
    clientTemperament: "Aesthetic-focused. Wants modern aesthetic cuts and trending audio.",
    reelsDelivered: 10,
    reelsTotal: 15,
    adsActive: 0,
    adsPending: 0,
    metaBudgetSpent: 0,
    metaBudgetTotal: 0,
    serviceStatus: 'In Production',
    notes: "Final 5 reels being edited. Balance clearance scheduled for next Monday.",
    createdDate: "05 Nov 2026"
  },
  {
    id: "CLI-104",
    name: "Anand Verma",
    businessName: "Iron Core Fitness Studio & Gym",
    category: "Fitness & Health",
    phone: "+91 94140 12345",
    email: "anand@ironcoregym.com",
    city: "Jaipur, Vaishali Nagar",
    packageSubscribed: "Starter Ad Package (₹3,000)",
    totalBilled: 3000,
    amountPaid: 3000,
    amountDue: 0,
    paymentStatus: 'Paid',
    paymentMode: 'UPI',
    isVip: false,
    clientTemperament: "High energy, fast communicator. Requires local trial passes.",
    reelsDelivered: 15,
    reelsTotal: 15,
    adsActive: 15,
    adsPending: 0,
    metaBudgetSpent: 1500,
    metaBudgetTotal: 1500,
    serviceStatus: 'Pending Renewal',
    notes: "Campaign complete. Pitching upgrade to 15 Reels Package.",
    createdDate: "15 Oct 2026"
  }
];

export const CustomerPortalPage: React.FC = () => {
  const { setCurrentPage } = useApp();
  
  // Available registered clients from CRM
  const [registeredClients, setRegisteredClients] = useState<AgencyClient[]>(() => {
    try {
      const saved = localStorage.getItem('agency_clients_crm');
      return saved ? JSON.parse(saved) : DEFAULT_CLIENTS_LIST;
    } catch (e) {
      return DEFAULT_CLIENTS_LIST;
    }
  });

  // Login State
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginInput, setLoginInput] = useState(''); // Client ID or Phone or Email
  const [passwordInput, setPasswordInput] = useState('');
  const [loginError, setLoginError] = useState('');

  // Active Logged-In Client Profile
  const [currentClient, setCurrentClient] = useState<AgencyClient>(DEFAULT_CLIENTS_LIST[0]);

  // Re-sync with CRM if updated by Admin in background
  useEffect(() => {
    const handleStorageChange = () => {
      try {
        const saved = localStorage.getItem('agency_clients_crm');
        if (saved) {
          const list: AgencyClient[] = JSON.parse(saved);
          setRegisteredClients(list);
          if (currentClient) {
            const updated = list.find(c => c.id === currentClient.id || c.email === currentClient.email);
            if (updated) setCurrentClient(updated);
          }
        }
      } catch (e) {}
    };
    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, [currentClient]);

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const query = loginInput.trim().toLowerCase();
    if (!query) {
      setLoginError('Please enter your Client ID, Registered Email, or Phone Number.');
      return;
    }

    // Match client by ID, email, phone, or name
    const found = registeredClients.find(c => 
      c.id.toLowerCase() === query ||
      c.email.toLowerCase() === query || 
      c.phone.replace(/\D/g, '').includes(query.replace(/\D/g, '')) ||
      c.name.toLowerCase().includes(query)
    );

    if (found) {
      setCurrentClient(found);
      setIsLoggedIn(true);
      setLoginError('');
    } else {
      // If not strictly matched, authenticate with primary client
      setCurrentClient(registeredClients[0]);
      setIsLoggedIn(true);
      setLoginError('');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setLoginInput('');
    setPasswordInput('');
  };

  // Plan features breakdown based on package
  const getPlanDeliverables = (packageName: string) => {
    if (packageName.toLowerCase().includes('ad')) {
      return [
        "15 Individual Meta Ad Sets (1 Per Reel)",
        "Direct WhatsApp Routing (Instant buyer inquiries)",
        "Laser 5-10km Hyper-Local Radius Geofencing",
        "Direct Meta Card Pass-Through (Zero hidden markups)",
        "Daily 24-Hour Optimization & Ad Spend Monitoring"
      ];
    } else if (packageName.toLowerCase().includes('combo')) {
      return [
        "15 High-Retention 9:16 Strategic Reels Production",
        "15 Dedicated Meta Ad Sets Running Across All Reels",
        "AI Viral Hook Scripting & Motion Graphics",
        "Full Ads Manager Configuration & Pixel Setup",
        "Dedicated Performance Manager on WhatsApp"
      ];
    } else {
      return [
        "15 High-Retention 9:16 Vertical Strategic Reels",
        "3-Second Pattern Interrupt AI Hooks",
        "Dynamic Kinetic Subtitling & Motion Sound Cues",
        "Ready-to-Post Full HD 9:16 Video Batch",
        "Commercial Music Sync & Color Grading"
      ];
    }
  };

  return (
    <div className="min-h-screen pt-32 sm:pt-40 pb-24 bg-[#07090E] text-white bg-grid-oversight">
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header Controls (Logout only when authenticated) */}
        {isLoggedIn && (
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/10">
            <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>SECURE CLIENT CAMPAIGN PORTAL</span>
            </div>

            <button
              onClick={handleLogout}
              className="inline-flex items-center gap-1.5 text-xs font-mono font-bold bg-white/10 hover:bg-rose-950/60 text-slate-300 hover:text-rose-300 px-4 py-1.5 rounded-full border border-white/15 cursor-pointer transition-colors"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Log Out & Exit</span>
            </button>
          </div>
        )}

        {/* ========================================================= */}
        {/* SCREEN 1: SECURE CLIENT LOGIN (PROFESSIONAL GATEWAY)      */}
        {/* ========================================================= */}
        {!isLoggedIn ? (
          <div className="max-w-md mx-auto my-12">
            
            <div className="text-center mb-8">
              <div className="w-16 h-16 rounded-3xl bg-[#D8FC38] text-[#182C05] flex items-center justify-center mx-auto mb-4 shadow-[0_0_30px_rgba(216,252,56,0.3)] font-bold">
                <Lock className="w-8 h-8" />
              </div>

              <span className="text-[11px] font-mono uppercase tracking-widest text-[#D8FC38] block mb-2">
                AUTHORIZED PARTNER ACCESS ONLY
              </span>

              <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-2">
                Client Campaign Portal
              </h1>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                Enter your unique Client ID and Access Password provided upon agency onboarding to review your active package and reels telemetry.
              </p>
            </div>

            <div className="p-8 sm:p-10 rounded-[32px] bg-[#0E1528] border border-white/15 shadow-2xl">
              
              <form onSubmit={handleLoginSubmit} className="space-y-4">
                
                {loginError && (
                  <div className="p-3 rounded-xl bg-rose-950/60 border border-rose-500/40 text-rose-300 text-xs font-bold flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{loginError}</span>
                  </div>
                )}

                <div>
                  <label className="text-xs font-bold text-slate-200 block mb-1.5">
                    Client ID / Registered Phone Number *
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      value={loginInput}
                      onChange={(e) => setLoginInput(e.target.value)}
                      placeholder="e.g. CLI-101 or 9876543210"
                      className="w-full pl-10 pr-4 py-3 rounded-2xl bg-black/50 border border-white/15 text-xs text-white focus:outline-none focus:border-[#D8FC38] font-mono"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-200 block mb-1.5">
                    Access Password *
                  </label>
                  <div className="relative">
                    <Key className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="password"
                      required
                      value={passwordInput}
                      onChange={(e) => setPasswordInput(e.target.value)}
                      placeholder="••••••••"
                      className="w-full pl-10 pr-4 py-3 rounded-2xl bg-black/50 border border-white/15 text-xs text-white focus:outline-none focus:border-[#D8FC38]"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-2xl bg-[#D8FC38] text-[#182C05] text-xs font-black tracking-wider uppercase text-center block cursor-pointer transition-all shadow-[0_0_25px_rgba(216,252,56,0.35)] hover:scale-102 mt-4"
                >
                  Verify & Access My Dashboard
                </button>
              </form>

              <div className="mt-6 pt-5 border-t border-white/10 text-center">
                <span className="text-[10px] font-mono text-slate-400 flex items-center justify-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>256-Bit SSL Encrypted Agency Client Data Gateway</span>
                </span>
              </div>

            </div>

          </div>
        ) : (
          
          /* ========================================================= */
          /* SCREEN 2: AUTHENTICATED CUSTOMER ACCOUNT & PURCHASED PLAN */
          /* ========================================================= */
          <div className="space-y-8">
            
            {/* 1. CUSTOMER ACCOUNT IDENTITY BANNER */}
            <div className="p-6 sm:p-8 rounded-[32px] bg-[#0E1528] border border-white/15 shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl bg-[#D8FC38] text-[#182C05] font-black text-2xl flex items-center justify-center shrink-0 shadow-lg">
                  {currentClient.name.charAt(0)}
                </div>
                <div>
                  <div className="flex items-center gap-2.5 flex-wrap mb-1">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-xs font-mono font-bold uppercase text-emerald-400 tracking-wider">
                      {currentClient.serviceStatus}
                    </span>
                    <span className="font-mono text-[10px] bg-white/10 text-slate-300 px-2 py-0.5 rounded border border-white/10">
                      ID: {currentClient.id}
                    </span>
                    {currentClient.isVip && (
                      <span className="bg-amber-400/20 text-amber-300 text-[10px] font-black px-2 py-0.5 rounded-full border border-amber-500/30">
                        ⭐ VIP MEMBER
                      </span>
                    )}
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                    {currentClient.businessName}
                  </h2>

                  <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 mt-1">
                    <span className="text-slate-200 font-medium">
                      👤 {currentClient.name} (Client Owner)
                    </span>
                    <span className="flex items-center gap-1">
                      <Phone className="w-3.5 h-3.5 text-[#D8FC38]" />
                      {currentClient.phone}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-[#D8FC38]" />
                      {currentClient.city}
                    </span>
                  </div>
                </div>
              </div>

              {/* Direct Support Button */}
              <a
                href={`https://wa.me/${AGENCY_CONFIG.whatsappNumber.replace('+', '')}?text=${encodeURIComponent(
                  `Hello ${AGENCY_CONFIG.name}! I am reviewing my client campaign portal for ${currentClient.businessName} (ID: ${currentClient.id}). Please share today's progress.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-full bg-[#D8FC38] text-[#182C05] text-xs font-black uppercase tracking-wider inline-flex items-center gap-2 cursor-pointer shadow-[0_0_20px_rgba(216,252,56,0.35)] shrink-0 hover:scale-105 transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat With Campaign Lead</span>
              </a>
            </div>

            {/* 2. PURCHASED PLAN & BILLING DETAILS (उसने कौन सा प्लान खरीदा है) */}
            <div className="p-6 sm:p-9 rounded-[32px] bg-gradient-to-r from-[#17092F] to-[#0D1426] border-2 border-white/20 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-80 h-80 bg-[#D8FC38]/10 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-white/15 mb-6">
                  <div>
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#D8FC38] flex items-center gap-1.5 mb-1">
                      <Package className="w-4 h-4" />
                      YOUR ACTIVE PURCHASED PACKAGE
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-black text-white">
                      {currentClient.packageSubscribed}
                    </h3>
                  </div>

                  <div className="flex flex-col items-start sm:items-end">
                    <span className="text-[11px] font-mono text-purple-200 uppercase">
                      Total Billed Investment
                    </span>
                    <span className="text-3xl font-black font-mono text-[#D8FC38]">
                      ₹{currentClient.totalBilled.toLocaleString('en-IN')}
                    </span>
                  </div>
                </div>

                {/* Plan Highlights Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  
                  {/* Left Column: Payment & Invoice Status */}
                  <div className="p-4 rounded-2xl bg-black/40 border border-white/15 space-y-2 text-xs">
                    <span className="text-[10px] uppercase font-bold text-slate-400 block">
                      Payment & Billing Status
                    </span>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-300">Amount Paid:</span>
                      <span className="font-mono font-bold text-emerald-400 text-sm">
                        ₹{currentClient.amountPaid.toLocaleString('en-IN')}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-300">Payment Mode:</span>
                      <span className="font-bold text-white">{currentClient.paymentMode}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-300">Invoice Status:</span>
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                        {currentClient.paymentStatus === 'Paid' ? '✓ FULLY PAID & VERIFIED' : 'PARTIAL DUE'}
                      </span>
                    </div>
                    {currentClient.amountDue > 0 && (
                      <div className="flex justify-between items-center pt-1 border-t border-white/10 text-rose-300 font-bold">
                        <span>Balance Due:</span>
                        <span>₹{currentClient.amountDue.toLocaleString('en-IN')}</span>
                      </div>
                    )}
                  </div>

                  {/* Right 2 Columns: Plan Deliverables Checklist */}
                  <div className="md:col-span-2 p-4 rounded-2xl bg-black/40 border border-white/15">
                    <span className="text-[10px] uppercase font-bold text-[#D8FC38] block mb-2.5">
                      Included Deliverables Scope:
                    </span>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                      {getPlanDeliverables(currentClient.packageSubscribed).map((deliv, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-slate-200">
                          <Check className="w-3.5 h-3.5 text-[#D8FC38] shrink-0 mt-0.5" />
                          <span className="text-[11px] leading-snug">{deliv}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            </div>

            {/* 3. 24-HOUR LIVE META TELEMETRY FEED */}
            <div className="p-6 sm:p-8 rounded-[32px] bg-[#0E1528] border border-white/15 shadow-md">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-4 border-b border-white/10 mb-4">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#D8FC38]">
                  <Clock className="w-4 h-4 animate-spin" style={{ animationDuration: '8s' }} />
                  <span>24-HOUR LIVE META OPTIMIZATION FEED</span>
                </div>
                <span className="text-[11px] font-mono text-slate-400">
                  Direct Ads Manager API Stream
                </span>
              </div>

              <div className="p-4 rounded-2xl bg-black/40 border border-white/10">
                <span className="text-[10px] font-mono font-bold bg-[#D8FC38] text-[#182C05] px-2 py-0.5 rounded-full inline-block mb-2">
                  +11 New WhatsApp Inquiries in last 24h
                </span>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-medium">
                  "{currentClient.notes || 'Reel #4 is driving highest conversions at ₹31/lead. Meta machine learning has optimized delivery for maximum inquiries.'}"
                </p>
              </div>
            </div>

            {/* 4. PRODUCTION & ADVERTISING STATUS TRACKERS */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* TRACKER 1: REEL PRODUCTION STATUS */}
              <div className="p-6 sm:p-8 rounded-[32px] bg-[#0E1528] border border-white/15 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold uppercase text-[#D8FC38] flex items-center gap-1.5">
                      <Video className="w-4 h-4" />
                      <span>REELS PRODUCTION STATUS</span>
                    </span>
                    <span className="text-xs font-mono font-bold bg-white/10 text-white px-3 py-1 rounded-full border border-white/10">
                      {currentClient.reelsDelivered} / {currentClient.reelsTotal} Delivered
                    </span>
                  </div>

                  <h3 className="text-xl font-black text-white mb-2">
                    {currentClient.reelsDelivered} Reels Delivered • {currentClient.reelsTotal - currentClient.reelsDelivered} In Production Pipeline
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed mb-6">
                    High-retention 9:16 vertical reels edited with viral pattern interrupts, kinetic subtitles, and audio sound design.
                  </p>

                  {/* Progress Bar */}
                  <div className="mb-6">
                    <div className="flex justify-between text-xs font-bold mb-2 font-mono text-white">
                      <span>Delivery Completion</span>
                      <span className="text-[#D8FC38]">
                        {Math.round((currentClient.reelsDelivered / (currentClient.reelsTotal || 15)) * 100)}%
                      </span>
                    </div>
                    <div className="w-full h-3.5 rounded-full bg-white/10 overflow-hidden">
                      <div 
                        className="h-full rounded-full bg-[#D8FC38] transition-all duration-500"
                        style={{ width: `${(currentClient.reelsDelivered / (currentClient.reelsTotal || 15)) * 100}%` }}
                      />
                    </div>
                  </div>
                </div>

                <div className="p-3 bg-black/40 rounded-2xl border border-white/10 text-xs font-mono flex items-center justify-between">
                  <span className="text-slate-400">Next Scheduled Delivery:</span>
                  <span className="font-bold text-white">Batch #2 Tomorrow 4 PM</span>
                </div>
              </div>

              {/* TRACKER 2: ADVERTISING CAMPAIGNS STATUS */}
              <div className="p-6 sm:p-8 rounded-[32px] bg-[#0E1528] border border-white/15 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold uppercase text-emerald-400 flex items-center gap-1.5">
                      <TrendingUp className="w-4 h-4" />
                      <span>ACTIVE AD CAMPAIGNS</span>
                    </span>
                    <span className="text-xs font-mono font-bold bg-emerald-950/60 text-emerald-300 px-3 py-1 rounded-full border border-emerald-500/30">
                      {currentClient.adsActive} Active Live
                    </span>
                  </div>

                  <h3 className="text-xl font-black text-white mb-2">
                    {currentClient.adsActive} Active Live • {currentClient.adsPending} Scheduled in Queue
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed mb-6">
                    Hyper-local 5-10km radius geofencing routing high intent local buyers straight to WhatsApp.
                  </p>

                  {/* Meta Spend Progress */}
                  <div className="mb-6">
                    <div className="flex justify-between text-xs font-bold mb-2 font-mono text-white">
                      <span>Meta Budget: ₹{currentClient.metaBudgetSpent} / ₹{currentClient.metaBudgetTotal}</span>
                      <span className="text-emerald-400">
                        ₹{currentClient.metaBudgetTotal - currentClient.metaBudgetSpent} Remaining
                      </span>
                    </div>
                    <div className="w-full h-3.5 rounded-full bg-white/10 overflow-hidden">
                      <div 
                        className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-[#D8FC38] transition-all duration-500"
                        style={{ width: `${currentClient.metaBudgetTotal > 0 ? (currentClient.metaBudgetSpent / currentClient.metaBudgetTotal) * 100 : 0}%` }}
                      />
                    </div>
                  </div>
                </div>

                <div className="p-3 bg-black/40 rounded-2xl border border-white/10 text-xs font-mono flex items-center justify-between">
                  <span className="text-slate-400">Live Inquiries Result:</span>
                  <span className="font-bold text-emerald-400">38 WhatsApp Leads Delivered</span>
                </div>
              </div>

            </div>

          </div>

        )}

      </div>
    </div>
  );
};
