import React, { useState } from 'react';
import { 
  Lock, Eye, EyeOff, ShieldCheck, CheckCircle2, 
  Clock, Video, TrendingUp, DollarSign, MessageCircle, 
  Phone, LogOut, ArrowRight, Sparkles, User, AlertCircle 
} from 'lucide-react';
import { ClientAccount, authenticateClient, getClients } from '../../data/clientStore';

interface CustomerPortalProps {
  onBackToHome?: () => void;
  onOpenAdmin?: () => void;
}

export const CustomerPortal: React.FC<CustomerPortalProps> = ({ onBackToHome, onOpenAdmin }) => {
  const [currentUser, setCurrentUser] = useState<ClientAccount | null>(null);
  
  // Login form states
  const [emailOrId, setEmailOrId] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');
    if (!emailOrId.trim() || !password.trim()) {
      setErrorMsg('कृपया अपनी ईमेल आईडी या क्लाइंट आईडी और पासवर्ड दर्ज करें।');
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      const user = authenticateClient(emailOrId, password);
      if (user) {
        setCurrentUser(user);
      } else {
        setErrorMsg('गलत ईमेल/क्लाइंट आईडी या पासवर्ड। कृपया पुनः प्रयास करें।');
      }
    }, 400);
  };

  const handleQuickLogin = (demoEmail: string, demoPass: string) => {
    setEmailOrId(demoEmail);
    setPassword(demoPass);
    setErrorMsg('');
    const user = authenticateClient(demoEmail, demoPass);
    if (user) {
      setCurrentUser(user);
    }
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setEmailOrId('');
    setPassword('');
    setErrorMsg('');
  };

  // If user is NOT logged in, show Login Screen
  if (!currentUser) {
    return (
      <div className="min-h-screen bg-[#0A0A0A] text-white flex flex-col justify-between relative overflow-hidden py-10 px-4 sm:px-6">
        
        {/* Background Reddish Ambient Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[550px] h-[550px] rounded-full bg-[#C8102E]/20 blur-[130px] pointer-events-none" />
        <div className="absolute inset-0 bg-crosshair-circles opacity-20 pointer-events-none" />

        {/* Top Minimal Navigation */}
        <div className="relative z-10 max-w-6xl mx-auto w-full flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#C8102E] flex items-center justify-center font-bold text-white shadow-[0_0_15px_#C8102E]">
              +
            </div>
            <span className="font-display text-xl sm:text-2xl tracking-wider uppercase font-bold text-white">
              RONIN MEDIA
            </span>
            <span className="hidden sm:inline-block px-2.5 py-0.5 rounded-full bg-white/10 text-[10px] font-mono uppercase tracking-widest text-[#CCC5C4] border border-white/10">
              Customer Portal
            </span>
          </div>

          <div className="flex items-center gap-3">
            {onBackToHome && (
              <button
                onClick={onBackToHome}
                className="text-xs font-mono text-[#CCC5C4] hover:text-white px-3 py-1.5 rounded-lg border border-white/10 hover:border-white/30 transition-all cursor-pointer"
              >
                ← Back to Website
              </button>
            )}
          </div>
        </div>

        {/* Login Box */}
        <div className="relative z-10 max-w-md mx-auto w-full my-auto py-8">
          
          <div className="bg-[#171919] border border-white/15 rounded-3xl p-6 sm:p-8 shadow-[0_25px_70px_rgba(0,0,0,0.85)] relative overflow-hidden backdrop-blur-xl">
            
            {/* Top Red Hairline Glow */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#C8102E] to-transparent shadow-[0_0_12px_#C8102E]" />

            <div className="text-center mb-8">
              <div className="w-14 h-14 rounded-2xl bg-[#C8102E]/20 text-[#C8102E] border border-[#C8102E]/30 flex items-center justify-center mx-auto mb-4 shadow-[0_0_20px_rgba(200,16,46,0.3)]">
                <Lock className="w-7 h-7" />
              </div>
              <h2 className="font-display text-3xl sm:text-4xl uppercase tracking-wider text-white">
                Client Portal Login
              </h2>
              <p className="text-xs font-mono text-[#CCC5C4] mt-1">
                Enter your registered ID and password to access your active plan
              </p>
            </div>

            {errorMsg && (
              <div className="mb-5 p-3.5 rounded-xl bg-red-950/60 border border-[#C8102E]/50 text-xs font-sans text-red-200 flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-[#C8102E] shrink-0" />
                <span>{errorMsg}</span>
              </div>
            )}

            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-xs font-mono uppercase tracking-widest text-[#CCC5C4] mb-2 font-bold">
                  Email ID or Client ID
                </label>
                <input
                  type="text"
                  placeholder="e.g. rohit@royalheritage.com or CLI-101"
                  value={emailOrId}
                  onChange={(e) => setEmailOrId(e.target.value)}
                  className="w-full bg-[#0A0A0A] border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#C8102E] transition-colors font-mono"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-widest text-[#CCC5C4] mb-2 font-bold">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Enter your secret password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full bg-[#0A0A0A] border border-white/15 rounded-xl px-4 py-3 pr-11 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#C8102E] transition-colors font-mono"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-white/50 hover:text-white"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 rounded-xl bg-[#C8102E] hover:bg-[#a50b24] text-white font-mono text-xs font-bold uppercase tracking-widest shadow-[0_0_25px_rgba(200,16,46,0.5)] transition-all cursor-pointer flex items-center justify-center gap-2 mt-6 hover:scale-[1.02]"
              >
                {loading ? 'Verifying Credentials...' : 'Access My Client Dashboard →'}
              </button>
            </form>

            {/* Quick 1-Click Demo Logins for Testing */}
            <div className="mt-8 pt-6 border-t border-white/10">
              <p className="text-[11px] font-mono uppercase tracking-wider text-white/50 mb-3 text-center">
                Instant 1-Click Demo Client Logins (Test Here):
              </p>
              <div className="space-y-2">
                <button
                  type="button"
                  onClick={() => handleQuickLogin('rohit@royalheritage.com', 'client123')}
                  className="w-full p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-between text-left text-xs transition-colors cursor-pointer group"
                >
                  <div>
                    <span className="font-bold text-white group-hover:text-[#C8102E] transition-colors">
                      Rohit Verma
                    </span>
                    <span className="text-[#CCC5C4] text-[11px] block font-mono">
                      Royal Heritage Café (₹6,000 Plan)
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-[#C8102E] font-bold">1-Click Login →</span>
                </button>

                <button
                  type="button"
                  onClick={() => handleQuickLogin('vikram@apexmotors.in', 'client123')}
                  className="w-full p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-between text-left text-xs transition-colors cursor-pointer group"
                >
                  <div>
                    <span className="font-bold text-white group-hover:text-[#C8102E] transition-colors">
                      Vikram Singhania
                    </span>
                    <span className="text-[#CCC5C4] text-[11px] block font-mono">
                      Apex Motors (₹12,000 Combo Plan)
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-[#C8102E] font-bold">1-Click Login →</span>
                </button>
              </div>
            </div>

          </div>

          <p className="text-center text-xs font-mono text-white/40 mt-6">
            Protected Client Space · 256-Bit Encrypted · Zero Public Exposure
          </p>

        </div>

        {/* Footer */}
        <div className="relative z-10 text-center text-xs font-mono text-white/30">
          RONIN MEDIA · Client Relationship Management Engine
        </div>

      </div>
    );
  }

  // If user IS logged in, show Full Client Dashboard
  const progressPercent = Math.round((currentUser.reelsDelivered / currentUser.reelsTotal) * 100);

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white selection:bg-[#C8102E] selection:text-white font-sans antialiased pb-20">
      
      {/* Background Ambience */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-[#C8102E]/15 blur-[150px] pointer-events-none" />

      {/* Top Client Bar */}
      <header className="relative z-30 py-4 px-4 sm:px-8 bg-[#171919]/90 border-b border-white/10 backdrop-blur-md sticky top-0">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#C8102E] flex items-center justify-center font-bold text-white shadow-[0_0_15px_#C8102E]">
              +
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-display text-xl uppercase font-bold text-white">
                  RONIN MEDIA
                </span>
                <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded-full bg-[#C8102E]/20 text-[#C8102E] border border-[#C8102E]/40 font-bold">
                  Client Portal
                </span>
              </div>
              <p className="text-[11px] font-mono text-[#CCC5C4]">
                ID: {currentUser.id} · {currentUser.businessName}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden sm:flex flex-col text-right">
              <span className="text-xs font-bold text-white">{currentUser.name}</span>
              <span className="text-[10px] font-mono text-emerald-400 flex items-center justify-end gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Verified Active
              </span>
            </div>

            <button
              onClick={handleLogout}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/15 text-xs font-mono text-[#CCC5C4] hover:text-white transition-colors cursor-pointer"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Logout</span>
            </button>
          </div>

        </div>
      </header>

      {/* Main Client Content */}
      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 pt-8 space-y-8">
        
        {/* ======================================================== */}
        {/* SECTION 1: PURCHASED PLAN HERO CARD (MOST IMPORTANT)     */}
        {/* ======================================================== */}
        <div className="relative rounded-3xl bg-gradient-to-br from-[#171919] via-[#1a1215] to-[#171919] border border-[#C8102E]/40 p-6 sm:p-10 shadow-[0_20px_60px_rgba(200,16,46,0.15)] overflow-hidden">
          
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#C8102E]/20 rounded-full blur-[90px] pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-white/10">
            <div>
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <span className="px-3 py-1 rounded-full bg-[#C8102E] text-white text-[11px] font-mono font-bold uppercase tracking-wider shadow-[0_0_12px_#C8102E]">
                  YOUR PURCHASED PLAN
                </span>
                <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-[11px] font-mono font-bold uppercase tracking-wider flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Payment Status: {currentUser.paymentStatus.toUpperCase()}
                </span>
                <span className="text-xs font-mono text-[#CCC5C4]">
                  Activated: {currentUser.createdDate}
                </span>
              </div>

              <h1 className="font-display text-3xl sm:text-5xl uppercase tracking-wide text-white leading-tight">
                {currentUser.packageSubscribed}
              </h1>
              <p className="text-sm font-sans text-[#CCC5C4] mt-2 max-w-2xl">
                {currentUser.category} · {currentUser.city} · Dedicated Account Management
              </p>
            </div>

            <div className="bg-[#0A0A0A]/80 border border-white/15 rounded-2xl p-5 text-left lg:text-right shrink-0">
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#CCC5C4]">Total Billed Amount</span>
              <p className="font-display text-4xl font-bold text-white leading-none my-1">
                ₹{currentUser.totalBilled.toLocaleString('en-IN')}
              </p>
              <span className="text-xs font-mono text-emerald-400 font-bold">
                ✓ 100% Cleared via {currentUser.paymentMode}
              </span>
            </div>
          </div>

          {/* Quick Plan Highlights Bar */}
          <div className="relative z-10 grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6">
            <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#CCC5C4] block">Campaign Status</span>
              <span className="text-sm font-bold text-emerald-400 flex items-center gap-1.5 mt-1">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                {currentUser.serviceStatus}
              </span>
            </div>

            <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#CCC5C4] block">Reels Progress</span>
              <span className="text-sm font-bold text-white mt-1 block">
                {currentUser.reelsDelivered} of {currentUser.reelsTotal} Finished
              </span>
            </div>

            <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#CCC5C4] block">Active Meta Ads</span>
              <span className="text-sm font-bold text-[#C8102E] mt-1 block">
                {currentUser.adsActive} Ad Sets Live
              </span>
            </div>

            <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#CCC5C4] block">Direct Ad Budget</span>
              <span className="text-sm font-bold text-white mt-1 block">
                ₹{currentUser.metaBudgetSpent} / ₹{currentUser.metaBudgetTotal} Spent
              </span>
            </div>
          </div>

        </div>

        {/* ======================================================== */}
        {/* SECTION 2: DELIVERABLES TRACKER (REELS & AD BUDGET)     */}
        {/* ======================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Progress Tracker (8 Cols) */}
          <div className="lg:col-span-8 bg-[#171919] border border-white/15 rounded-3xl p-6 sm:p-8 space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-display text-2xl uppercase tracking-wider text-white">
                  Deliverables Execution Tracker
                </h3>
                <p className="text-xs font-mono text-[#CCC5C4]">
                  Real-time status of your 9:16 vertical reels batch
                </p>
              </div>
              <span className="text-xl font-display font-bold text-[#C8102E]">
                {progressPercent}% COMPLETE
              </span>
            </div>

            {/* Visual Progress Bar */}
            <div>
              <div className="h-4 w-full bg-[#0A0A0A] rounded-full overflow-hidden border border-white/10 p-0.5">
                <div 
                  className="h-full bg-gradient-to-r from-[#C8102E] to-red-500 rounded-full transition-all duration-700 shadow-[0_0_15px_#C8102E]"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
              <div className="flex justify-between items-center text-xs font-mono text-[#CCC5C4] mt-2">
                <span>0 Reels</span>
                <span className="text-white font-bold">{currentUser.reelsDelivered} Delivered</span>
                <span>Goal: {currentUser.reelsTotal} Reels</span>
              </div>
            </div>

            {/* Strategy Notes from Account Manager */}
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-3">
              <Sparkles className="w-5 h-5 text-[#C8102E] shrink-0 mt-0.5" />
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-white font-bold block mb-1">
                  Agency Creative Lead Note:
                </span>
                <p className="text-xs text-[#CCC5C4] leading-relaxed">
                  "{currentUser.notes}"
                </p>
              </div>
            </div>

          </div>

          {/* Account Manager Direct Support (4 Cols) */}
          <div className="lg:col-span-4 bg-[#171919] border border-white/15 rounded-3xl p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#C8102E] font-bold block mb-2">
                Your Assigned Director
              </span>
              <h3 className="font-display text-2xl uppercase tracking-wider text-white">
                {currentUser.assignedManager.name}
              </h3>
              <p className="text-xs text-[#CCC5C4] font-mono mt-1">
                Direct phone & WhatsApp contact for reel approvals and revisions.
              </p>
            </div>

            <div className="space-y-3">
              <a
                href={`https://wa.me/${currentUser.assignedManager.whatsapp}?text=Hello%20${encodeURIComponent(currentUser.assignedManager.name)},%20this%20is%20${encodeURIComponent(currentUser.name)}%20(${encodeURIComponent(currentUser.businessName)}).%20I%20have%20an%20inquiry%20regarding%20my%20plan.`}
                target="_blank"
                rel="noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer shadow-[0_0_20px_rgba(16,185,129,0.3)]"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp ↗</span>
              </a>

              <a
                href={`tel:${currentUser.assignedManager.phone}`}
                className="w-full py-3 px-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-white font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <Phone className="w-4 h-4 text-[#C8102E]" />
                <span>Call Manager</span>
              </a>
            </div>
          </div>

        </div>

        {/* ======================================================== */}
        {/* SECTION 3: DELIVERED REELS BATCH GALLERY                 */}
        {/* ======================================================== */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="font-display text-3xl uppercase tracking-wider text-white">
                Delivered Reels Batch ({currentUser.deliveredReelsList.length})
              </h3>
              <p className="text-xs font-mono text-[#CCC5C4]">
                Completed video hooks currently running live in Meta Ads Manager
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {currentUser.deliveredReelsList.map((reel, idx) => (
              <div 
                key={reel.id}
                className="bg-[#171919] border border-white/15 rounded-2xl overflow-hidden group shadow-lg flex flex-col justify-between"
              >
                {/* Thumbnail */}
                <div className="relative aspect-[9/14] overflow-hidden bg-black">
                  <img
                    src={reel.videoThumbnail}
                    alt={reel.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                  
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-full bg-[#C8102E] text-white text-[10px] font-mono font-bold uppercase">
                      Reel #0{idx + 1}
                    </span>
                  </div>

                  <div className="absolute bottom-3 left-3 right-3">
                    <span className="text-[10px] font-mono text-[#CCC5C4] block">Delivered: {reel.deliveredDate}</span>
                    <h4 className="text-xs font-bold text-white line-clamp-2 mt-0.5 leading-snug">
                      {reel.title}
                    </h4>
                  </div>
                </div>

                {/* Metrics */}
                <div className="p-4 bg-[#111313] border-t border-white/10 space-y-2">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-[#CCC5C4]">Views:</span>
                    <span className="text-white font-bold">{reel.views}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-[#CCC5C4]">Inquiries:</span>
                    <span className="text-emerald-400 font-bold">{reel.leads}</span>
                  </div>
                  <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[10px] font-mono">
                    <span className="text-white/40">Status</span>
                    <span className="text-[#C8102E] font-bold uppercase">{reel.status}</span>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>

      </main>

    </div>
  );
};
