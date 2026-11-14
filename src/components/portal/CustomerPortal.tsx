import React, { useState } from 'react';
import { 
  Lock, UserPlus, Eye, EyeOff, ShieldCheck, CheckCircle2, 
  Clock, Video, TrendingUp, DollarSign, MessageCircle, 
  Phone, LogOut, ArrowRight, Sparkles, User, AlertCircle,
  Package, Layers, FileText, Info, HelpCircle
} from 'lucide-react';
import { 
  ClientAccount, authenticateClient, registerClient, getClients, 
  isAdminUser, ADMIN_CREDENTIALS 
} from '../../data/clientStore';

interface CustomerPortalProps {
  onBackToHome?: () => void;
  onOpenAdmin?: () => void;
}

export const CustomerPortal: React.FC<CustomerPortalProps> = ({ onBackToHome, onOpenAdmin }) => {
  const [currentUser, setCurrentUser] = useState<ClientAccount | null>(null);
  const [isAdminSession, setIsAdminSession] = useState(false);
  
  // Auth Mode: 'login' | 'signup'
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('login');

  // Login form states
  const [emailOrId, setEmailOrId] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  // Sign up form states
  const [signupName, setSignupName] = useState('');
  const [signupBusiness, setSignupBusiness] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPhone, setSignupPhone] = useState('');
  const [signupCity, setSignupCity] = useState('');
  const [signupCategory, setSignupCategory] = useState('Café & Dining');
  const [signupPassword, setSignupPassword] = useState('');

  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  const [loading, setLoading] = useState(false);

  // Active Tab inside Dashboard: 'plan' | 'pricing' | 'overview' | 'account'
  const [activeTab, setActiveTab] = useState<'plan' | 'pricing' | 'overview' | 'account'>('plan');

  // Handle Login
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');
    if (!emailOrId.trim() || !password.trim()) {
      setErrorMsg('कृपया अपनी ईमेल आईडी और पासवर्ड दर्ज करें।');
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);

      // 1. Check if Master Admin Login (vishaljain74899@gmail.com / 7489640013)
      if (isAdminUser(emailOrId, password)) {
        const adminAccount: ClientAccount = {
          id: "ADMIN-01",
          name: "Vishal Jain (Master Admin)",
          businessName: "RONIN MEDIA Agency Operations",
          category: "Performance Marketing & Media",
          phone: "+91 74896 40013",
          email: ADMIN_CREDENTIALS.email,
          city: "Jaipur, Rajasthan",
          packageSubscribed: "Master Admin Access",
          totalBilled: 0,
          amountPaid: 0,
          amountDue: 0,
          paymentStatus: 'Paid',
          paymentMode: 'UPI',
          isVip: true,
          clientTemperament: "Agency Founder & Master Administrator",
          reelsDelivered: 15,
          reelsTotal: 15,
          adsActive: 10,
          adsPending: 0,
          metaBudgetSpent: 6000,
          metaBudgetTotal: 6000,
          serviceStatus: 'Active & Optimizing',
          notes: "Master Admin Logged in. Use the extra 'Open Admin Control Panel' button to edit website text & client packages.",
          createdDate: "Founder",
          passwordHash: ADMIN_CREDENTIALS.password,
          assignedManager: {
            name: "Vishal Jain (Owner)",
            phone: "+91 74896 40013",
            whatsapp: "917489640013"
          },
          deliveredReelsList: []
        };
        setCurrentUser(adminAccount);
        setIsAdminSession(true);
        return;
      }

      // 2. Check Customer Credentials (e.g. vishaljain@gmail.com / 7489640013)
      const user = authenticateClient(emailOrId, password);
      if (user) {
        setCurrentUser(user);
        setIsAdminSession(false);
      } else {
        setErrorMsg('गलत ईमेल आईडी या पासवर्ड। कृपया पुनः प्रयास करें।');
      }
    }, 400);
  };

  // Handle Sign Up
  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');
    if (!signupName.trim() || !signupBusiness.trim() || !signupEmail.trim() || !signupPassword.trim()) {
      setErrorMsg('कृपया सभी आवश्यक विवरण और पासवर्ड भरें।');
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      const newAccount = registerClient({
        name: signupName,
        businessName: signupBusiness,
        email: signupEmail,
        phone: signupPhone,
        city: signupCity,
        category: signupCategory,
        password: signupPassword
      });

      setCurrentUser(newAccount);
      setIsAdminSession(false);
      setSuccessMsg('आपका खाता सफलतापूर्वक बन गया है!');
    }, 400);
  };

  const handleQuickLogin = (demoEmail: string, demoPass: string, isAdm: boolean = false) => {
    setEmailOrId(demoEmail);
    setPassword(demoPass);
    setErrorMsg('');

    if (isAdm || isAdminUser(demoEmail, demoPass)) {
      const adminAccount: ClientAccount = {
        id: "ADMIN-01",
        name: "Vishal Jain (Master Admin)",
        businessName: "RONIN MEDIA Agency Operations",
        category: "Performance Marketing & Media",
        phone: "+91 74896 40013",
        email: ADMIN_CREDENTIALS.email,
        city: "Jaipur, Rajasthan",
        packageSubscribed: "Master Admin Access",
        totalBilled: 0,
        amountPaid: 0,
        amountDue: 0,
        paymentStatus: 'Paid',
        paymentMode: 'UPI',
        isVip: true,
        clientTemperament: "Agency Founder & Master Administrator",
        reelsDelivered: 15,
        reelsTotal: 15,
        adsActive: 10,
        adsPending: 0,
        metaBudgetSpent: 6000,
        metaBudgetTotal: 6000,
        serviceStatus: 'Active & Optimizing',
        notes: "Master Admin Logged in. Use the extra 'Open Admin Control Panel' button to edit website text & client packages.",
        createdDate: "Founder",
        passwordHash: ADMIN_CREDENTIALS.password,
        assignedManager: {
          name: "Vishal Jain (Owner)",
          phone: "+91 74896 40013",
          whatsapp: "917489640013"
        },
        deliveredReelsList: []
      };
      setCurrentUser(adminAccount);
      setIsAdminSession(true);
    } else {
      const user = authenticateClient(demoEmail, demoPass);
      if (user) {
        setCurrentUser(user);
        setIsAdminSession(false);
      }
    }
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setIsAdminSession(false);
    setEmailOrId('');
    setPassword('');
    setErrorMsg('');
    setSuccessMsg('');
  };

  // ========================================================
  // VIEW 1: NOT LOGGED IN (LOGIN OR CREATE ACCOUNT)
  // ========================================================
  if (!currentUser) {
    return (
      <div className="min-h-screen bg-[#0A0A0A] text-white flex flex-col justify-between relative overflow-hidden py-8 px-4 sm:px-6">
        
        {/* Background Ambience */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-[#C8102E]/20 blur-[140px] pointer-events-none" />
        <div className="absolute inset-0 bg-crosshair-circles opacity-20 pointer-events-none" />

        {/* Top Header */}
        <div className="relative z-10 max-w-6xl mx-auto w-full flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#C8102E] flex items-center justify-center font-bold text-white shadow-[0_0_15px_#C8102E]">
              +
            </div>
            <span className="font-display text-2xl tracking-wider uppercase font-bold text-white">
              RONIN MEDIA
            </span>
            <span className="hidden sm:inline-block px-2.5 py-0.5 rounded-full bg-white/10 text-[10px] font-mono uppercase tracking-widest text-[#CCC5C4]">
              Unified Portal Login
            </span>
          </div>

          <div className="flex items-center gap-3">
            {onBackToHome && (
              <button
                onClick={onBackToHome}
                className="text-xs font-mono text-[#CCC5C4] hover:text-white px-4 py-2 rounded-xl border border-white/10 hover:border-white/30 transition-all cursor-pointer bg-white/5"
              >
                ← Back to Home
              </button>
            )}
          </div>
        </div>

        {/* Auth Box */}
        <div className="relative z-10 max-w-lg mx-auto w-full my-auto py-8">
          
          <div className="bg-[#171919] border border-white/15 rounded-3xl p-6 sm:p-8 shadow-[0_25px_70px_rgba(0,0,0,0.85)] relative overflow-hidden backdrop-blur-xl">
            
            {/* Top Red Hairline Glow */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#C8102E] to-transparent shadow-[0_0_12px_#C8102E]" />

            {/* Auth Mode Toggle Tabs (Login vs Sign Up) */}
            <div className="flex items-center p-1 rounded-2xl bg-black/60 border border-white/10 mb-8">
              <button
                type="button"
                onClick={() => { setAuthMode('login'); setErrorMsg(''); }}
                className={`flex-1 py-2.5 rounded-xl text-xs font-mono uppercase tracking-wider font-bold transition-all cursor-pointer ${
                  authMode === 'login'
                    ? 'bg-[#C8102E] text-white shadow-[0_0_15px_#C8102E]'
                    : 'text-[#CCC5C4] hover:text-white'
                }`}
              >
                1. Sign In / Login
              </button>

              <button
                type="button"
                onClick={() => { setAuthMode('signup'); setErrorMsg(''); }}
                className={`flex-1 py-2.5 rounded-xl text-xs font-mono uppercase tracking-wider font-bold transition-all cursor-pointer ${
                  authMode === 'signup'
                    ? 'bg-[#C8102E] text-white shadow-[0_0_15px_#C8102E]'
                    : 'text-[#CCC5C4] hover:text-white'
                }`}
              >
                2. Create Account
              </button>
            </div>

            {errorMsg && (
              <div className="mb-5 p-3.5 rounded-xl bg-red-950/60 border border-[#C8102E]/50 text-xs font-sans text-red-200 flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-[#C8102E] shrink-0" />
                <span>{errorMsg}</span>
              </div>
            )}

            {/* MODE A: LOGIN FORM */}
            {authMode === 'login' ? (
              <form onSubmit={handleLogin} className="space-y-4">
                <div className="text-center mb-6">
                  <h2 className="font-display text-3xl uppercase tracking-wider text-white">
                    Sign In to Portal
                  </h2>
                  <p className="text-xs font-mono text-[#CCC5C4] mt-1">
                    Enter your email & password to access your dashboard
                  </p>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-widest text-[#CCC5C4] mb-2 font-bold">
                    Email ID
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="Enter email (e.g. vishaljain@gmail.com)"
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
                      required
                      placeholder="Enter password"
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
                  {loading ? 'Verifying Credentials...' : 'Sign In & Access Dashboard →'}
                </button>

                {/* Instant 1-Click Requested Accounts */}
                <div className="mt-8 pt-6 border-t border-white/10">
                  <p className="text-[11px] font-mono uppercase tracking-wider text-white/50 mb-3 text-center">
                    Instant 1-Click Access (User Requested):
                  </p>
                  <div className="space-y-2.5">
                    
                    {/* Customer Demo Account */}
                    <button
                      type="button"
                      onClick={() => handleQuickLogin('vishaljain@gmail.com', '7489640013', false)}
                      className="w-full p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-between text-left text-xs transition-colors cursor-pointer group"
                    >
                      <div>
                        <div className="flex items-center gap-1.5">
                          <User className="w-3.5 h-3.5 text-cyan-400" />
                          <span className="font-bold text-white group-hover:text-[#C8102E] transition-colors">
                            Customer Demo (vishaljain@gmail.com)
                          </span>
                        </div>
                        <span className="text-[#CCC5C4] text-[11px] block font-mono mt-0.5">
                          Pass: 7489640013 · Active ₹6,000 Plan & 8/15 Reels
                        </span>
                      </div>
                      <span className="text-[10px] font-mono text-cyan-400 font-bold bg-cyan-950/60 px-2 py-1 rounded">1-Click →</span>
                    </button>

                    {/* Master Admin Account */}
                    <button
                      type="button"
                      onClick={() => handleQuickLogin('vishaljain74899@gmail.com', '7489640013', true)}
                      className="w-full p-3 rounded-xl bg-gradient-to-r from-amber-950/40 via-red-950/30 to-amber-950/40 hover:bg-white/10 border border-amber-500/40 flex items-center justify-between text-left text-xs transition-colors cursor-pointer group"
                    >
                      <div>
                        <div className="flex items-center gap-1.5">
                          <span className="text-amber-400">👑</span>
                          <span className="font-bold text-amber-300 group-hover:text-amber-200 transition-colors">
                            Master Admin (vishaljain74899@gmail.com)
                          </span>
                        </div>
                        <span className="text-amber-200/70 text-[11px] block font-mono mt-0.5">
                          Pass: 7489640013 · Unlocks Extra Admin Panel Control Button
                        </span>
                      </div>
                      <span className="text-[10px] font-mono text-amber-300 font-bold bg-amber-900/60 px-2 py-1 rounded">Admin →</span>
                    </button>

                  </div>
                </div>

              </form>
            ) : (
              /* MODE B: SIGN UP FORM */
              <form onSubmit={handleSignup} className="space-y-4">
                <div className="text-center mb-6">
                  <h2 className="font-display text-3xl uppercase tracking-wider text-white">
                    Create Client Account
                  </h2>
                  <p className="text-xs font-mono text-[#CCC5C4] mt-1">
                    Register your business to book packages and track campaign deliverables
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-widest text-[#CCC5C4] mb-1 font-bold">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={signupName}
                      onChange={(e) => setSignupName(e.target.value)}
                      className="w-full bg-[#0A0A0A] border border-white/15 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#C8102E] font-mono"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-widest text-[#CCC5C4] mb-1 font-bold">
                      Store / Café Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Royal Café / Trendz Store"
                      value={signupBusiness}
                      onChange={(e) => setSignupBusiness(e.target.value)}
                      className="w-full bg-[#0A0A0A] border border-white/15 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#C8102E] font-mono"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-widest text-[#CCC5C4] mb-1 font-bold">
                      Business Email ID *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. contact@mybusiness.com"
                      value={signupEmail}
                      onChange={(e) => setSignupEmail(e.target.value)}
                      className="w-full bg-[#0A0A0A] border border-white/15 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#C8102E] font-mono"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-widest text-[#CCC5C4] mb-1 font-bold">
                      WhatsApp Phone *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 00000"
                      value={signupPhone}
                      onChange={(e) => setSignupPhone(e.target.value)}
                      className="w-full bg-[#0A0A0A] border border-white/15 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#C8102E] font-mono"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-widest text-[#CCC5C4] mb-1 font-bold">
                      City & Market Area
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Jaipur, C-Scheme"
                      value={signupCity}
                      onChange={(e) => setSignupCity(e.target.value)}
                      className="w-full bg-[#0A0A0A] border border-white/15 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#C8102E] font-mono"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-widest text-[#CCC5C4] mb-1 font-bold">
                      Category
                    </label>
                    <select
                      value={signupCategory}
                      onChange={(e) => setSignupCategory(e.target.value)}
                      className="w-full bg-[#0A0A0A] border border-white/15 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#C8102E] font-mono"
                    >
                      <option value="Café & Dining">Café & Dining</option>
                      <option value="Clothing & Apparel">Clothing & Apparel</option>
                      <option value="Bakery & Desserts">Bakery & Desserts</option>
                      <option value="Fashion & Boutiques">Fashion & Boutiques</option>
                      <option value="Other Retail Store">Other Retail Store</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-widest text-[#CCC5C4] mb-1 font-bold">
                    Create Password *
                  </label>
                  <input
                    type="password"
                    required
                    placeholder="Choose a safe password"
                    value={signupPassword}
                    onChange={(e) => setSignupPassword(e.target.value)}
                    className="w-full bg-[#0A0A0A] border border-white/15 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#C8102E] font-mono"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 rounded-xl bg-[#C8102E] hover:bg-[#a50b24] text-white font-mono text-xs font-bold uppercase tracking-widest shadow-[0_0_25px_rgba(200,16,46,0.5)] transition-all cursor-pointer flex items-center justify-center gap-2 mt-6 hover:scale-[1.02]"
                >
                  {loading ? 'Registering Account...' : 'Sign Up & Open Dashboard →'}
                </button>
              </form>
            )}

          </div>

          <p className="text-center text-xs font-mono text-white/40 mt-6">
            Secure Encryption · Client & Admin Authentication
          </p>

        </div>

        {/* Footer */}
        <div className="relative z-10 text-center text-xs font-mono text-white/30">
          RONIN MEDIA · Performance Marketing Client Portal
        </div>

      </div>
    );
  }

  // ========================================================
  // VIEW 2: LOGGED-IN WORKSPACE & EXTRA ADMIN BUTTON
  // ========================================================
  const hasActivePlan = currentUser.totalBilled > 0 && currentUser.reelsTotal > 0;
  const progressPercent = hasActivePlan 
    ? Math.round((currentUser.reelsDelivered / currentUser.reelsTotal) * 100) 
    : 0;

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white selection:bg-[#C8102E] selection:text-white font-sans antialiased pb-28">
      
      {/* Background Glow */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-[#C8102E]/15 blur-[160px] pointer-events-none" />

      {/* Top Client Header */}
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
                <span className={`text-[10px] font-mono uppercase px-2.5 py-0.5 rounded-full border font-bold ${
                  isAdminSession 
                    ? 'bg-amber-500/20 text-amber-300 border-amber-500/40' 
                    : 'bg-[#C8102E]/20 text-[#C8102E] border-[#C8102E]/40'
                }`}>
                  {isAdminSession ? 'Master Admin' : 'Client Workspace'}
                </span>
              </div>
              <p className="text-[11px] font-mono text-[#CCC5C4]">
                ID: {currentUser.id} · {currentUser.businessName}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            
            {/* ⚡ EXTRA ADMIN BUTTON (ONLY REVEALED WHEN vishaljain74899@gmail.com LOGS IN!) */}
            {isAdminSession && onOpenAdmin && (
              <button
                onClick={onOpenAdmin}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-[#C8102E] hover:from-amber-400 hover:to-red-600 text-white font-mono text-xs font-bold uppercase tracking-wider shadow-[0_0_20px_rgba(200,16,46,0.6)] hover:scale-105 transition-all cursor-pointer animate-pulse"
                title="Launch Admin Control Console"
              >
                <ShieldCheck className="w-4 h-4" />
                <span>Admin Panel ⚡</span>
              </button>
            )}

            {onBackToHome && (
              <button
                onClick={onBackToHome}
                className="hidden sm:inline-flex px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-[#CCC5C4] hover:text-white transition-colors cursor-pointer"
              >
                Website View
              </button>
            )}

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

      {/* MAIN WORKSPACE BODY */}
      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 pt-6 space-y-6">
        
        {/* 👑 EXCLUSIVE MASTER ADMIN BANNER */}
        {isAdminSession && onOpenAdmin && (
          <div className="bg-gradient-to-r from-amber-950/80 via-[#1f1115] to-amber-950/80 border border-amber-500/40 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-[0_10px_35px_rgba(245,158,11,0.15)]">
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-amber-500 text-black flex items-center justify-center font-bold text-lg shrink-0 shadow-lg">
                👑
              </div>
              <div>
                <p className="text-sm font-bold text-white flex items-center gap-2">
                  <span>Master Administrator Mode Unlocked!</span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-400 text-black font-bold uppercase">
                    Admin Active
                  </span>
                </p>
                <p className="text-xs text-amber-200/80 font-mono mt-0.5">
                  Signed in as <strong>{ADMIN_CREDENTIALS.email}</strong> · You have full control to edit website copy, package pricing & all client delivery counts.
                </p>
              </div>
            </div>

            <button
              onClick={onOpenAdmin}
              className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-[#C8102E] hover:from-amber-400 hover:to-red-600 text-white font-mono text-xs font-bold uppercase tracking-wider shadow-lg hover:scale-105 transition-all cursor-pointer shrink-0"
            >
              Open Admin Console ⚡ →
            </button>
          </div>
        )}

        {/* FUNNEL NAVIGATION TABS */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 p-1.5 rounded-2xl bg-[#171919] border border-white/10">
          <button
            onClick={() => setActiveTab('plan')}
            className={`flex-1 sm:flex-none px-5 py-2.5 rounded-xl text-xs font-mono uppercase tracking-wider font-bold transition-all cursor-pointer flex items-center justify-center gap-2 ${
              activeTab === 'plan'
                ? 'bg-[#C8102E] text-white shadow-[0_0_15px_#C8102E]'
                : 'text-[#CCC5C4] hover:text-white hover:bg-white/5'
            }`}
          >
            <Package className="w-4 h-4" />
            <span>My Purchased Plan</span>
          </button>

          <button
            onClick={() => setActiveTab('pricing')}
            className={`flex-1 sm:flex-none px-5 py-2.5 rounded-xl text-xs font-mono uppercase tracking-wider font-bold transition-all cursor-pointer flex items-center justify-center gap-2 ${
              activeTab === 'pricing'
                ? 'bg-[#C8102E] text-white shadow-[0_0_15px_#C8102E]'
                : 'text-[#CCC5C4] hover:text-white hover:bg-white/5'
            }`}
          >
            <DollarSign className="w-4 h-4" />
            <span>Packages & Pricing</span>
          </button>

          <button
            onClick={() => setActiveTab('overview')}
            className={`flex-1 sm:flex-none px-5 py-2.5 rounded-xl text-xs font-mono uppercase tracking-wider font-bold transition-all cursor-pointer flex items-center justify-center gap-2 ${
              activeTab === 'overview'
                ? 'bg-[#C8102E] text-white shadow-[0_0_15px_#C8102E]'
                : 'text-[#CCC5C4] hover:text-white hover:bg-white/5'
            }`}
          >
            <Layers className="w-4 h-4" />
            <span>Agency Blueprint</span>
          </button>

          <button
            onClick={() => setActiveTab('account')}
            className={`flex-1 sm:flex-none px-5 py-2.5 rounded-xl text-xs font-mono uppercase tracking-wider font-bold transition-all cursor-pointer flex items-center justify-center gap-2 ${
              activeTab === 'account'
                ? 'bg-[#C8102E] text-white shadow-[0_0_15px_#C8102E]'
                : 'text-[#CCC5C4] hover:text-white hover:bg-white/5'
            }`}
          >
            <User className="w-4 h-4" />
            <span>Account Details</span>
          </button>
        </div>

        {/* TAB 1: MY PURCHASED PLAN & DELIVERABLES */}
        {activeTab === 'plan' && (
          <div className="space-y-8 animate-in fade-in duration-300">
            {hasActivePlan ? (
              <>
                <div className="relative rounded-3xl bg-gradient-to-br from-[#171919] via-[#1a1215] to-[#171919] border border-[#C8102E]/40 p-6 sm:p-10 shadow-[0_20px_60px_rgba(200,16,46,0.15)] overflow-hidden">
                  <div className="absolute top-0 right-0 w-80 h-80 bg-[#C8102E]/20 rounded-full blur-[90px] pointer-events-none" />

                  <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-white/10">
                    <div>
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        <span className="px-3 py-1 rounded-full bg-[#C8102E] text-white text-[11px] font-mono font-bold uppercase tracking-wider shadow-[0_0_12px_#C8102E]">
                          ACTIVE PURCHASED PLAN
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
                        Registered Business: <span className="text-white font-bold">{currentUser.businessName}</span> ({currentUser.category}) · {currentUser.city}
                      </p>
                    </div>

                    <div className="bg-[#0A0A0A]/80 border border-white/15 rounded-2xl p-5 text-left lg:text-right shrink-0">
                      <span className="text-[11px] font-mono uppercase tracking-widest text-[#CCC5C4]">Total Plan Investment</span>
                      <p className="font-display text-4xl font-bold text-white leading-none my-1">
                        ₹{currentUser.totalBilled.toLocaleString('en-IN')}
                      </p>
                      <span className="text-xs font-mono text-emerald-400 font-bold">
                        ✓ 100% Cleared via {currentUser.paymentMode}
                      </span>
                    </div>
                  </div>

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
                      <span className="text-[10px] font-mono uppercase tracking-widest text-[#CCC5C4] block">Meta Ad Spend</span>
                      <span className="text-sm font-bold text-white mt-1 block">
                        ₹{currentUser.metaBudgetSpent} / ₹{currentUser.metaBudgetTotal} Spent
                      </span>
                    </div>
                  </div>
                </div>

                {/* Progress Bar & Support */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                  <div className="lg:col-span-8 bg-[#171919] border border-white/15 rounded-3xl p-6 sm:p-8 space-y-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-display text-2xl uppercase tracking-wider text-white">
                          Reels Batch Delivery Progress
                        </h3>
                        <p className="text-xs font-mono text-[#CCC5C4]">
                          Live tracking of finished 9:16 vertical hook creatives
                        </p>
                      </div>
                      <span className="text-xl font-display font-bold text-[#C8102E]">
                        {progressPercent}% DELIVERED
                      </span>
                    </div>

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
                        <span>Target: {currentUser.reelsTotal} Reels</span>
                      </div>
                    </div>

                    <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-3">
                      <Sparkles className="w-5 h-5 text-[#C8102E] shrink-0 mt-0.5" />
                      <div>
                        <span className="text-xs font-mono uppercase tracking-widest text-white font-bold block mb-1">
                          Agency Lead Note:
                        </span>
                        <p className="text-xs text-[#CCC5C4] leading-relaxed">
                          "{currentUser.notes}"
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-4 bg-[#171919] border border-white/15 rounded-3xl p-6 sm:p-8 flex flex-col justify-between space-y-6">
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-widest text-[#C8102E] font-bold block mb-2">
                        Assigned Creative Director
                      </span>
                      <h3 className="font-display text-2xl uppercase tracking-wider text-white">
                        {currentUser.assignedManager.name}
                      </h3>
                      <p className="text-xs text-[#CCC5C4] font-mono mt-1">
                        Direct point of contact for script revisions and ad telemetry.
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
                        <span>Call Director</span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Delivered Reels Batch */}
                {currentUser.deliveredReelsList.length > 0 && (
                  <div>
                    <h3 className="font-display text-3xl uppercase tracking-wider text-white mb-2">
                      Delivered Reels Batch ({currentUser.deliveredReelsList.length})
                    </h3>
                    <p className="text-xs font-mono text-[#CCC5C4] mb-6">
                      Finished video hooks currently active inside your Meta Ads Manager
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                      {currentUser.deliveredReelsList.map((reel, idx) => (
                        <div 
                          key={reel.id}
                          className="bg-[#171919] border border-white/15 rounded-2xl overflow-hidden group shadow-lg flex flex-col justify-between"
                        >
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
                )}
              </>
            ) : (
              /* If client has NO active plan yet */
              <div className="p-8 sm:p-14 rounded-3xl bg-[#171919] border border-white/15 text-center max-w-3xl mx-auto space-y-6">
                <div className="w-16 h-16 rounded-2xl bg-[#C8102E]/20 text-[#C8102E] flex items-center justify-center mx-auto mb-2">
                  <Package className="w-8 h-8" />
                </div>
                <h2 className="font-display text-3xl sm:text-5xl uppercase tracking-wider text-white">
                  No Active Plan Assigned Yet
                </h2>
                <p className="text-sm font-sans text-[#CCC5C4] leading-relaxed max-w-lg mx-auto">
                  नमस्ते <span className="text-white font-bold">{currentUser.name}</span>! आपकी दुकान <span className="text-white font-bold">"{currentUser.businessName}"</span> के लिए कोई भी पैकेज शुरू करने के लिए नीचे दिए गए पैकेज टैब में जाएं या सीधे हमसे संपर्क करें।
                </p>
                <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
                  <button
                    onClick={() => setActiveTab('pricing')}
                    className="px-8 py-3.5 rounded-full bg-[#C8102E] hover:bg-[#a50b24] text-white text-xs font-mono font-bold uppercase tracking-widest shadow-[0_0_20px_rgba(200,16,46,0.4)] cursor-pointer"
                  >
                    View Packages & Activate →
                  </button>
                  <a
                    href={`https://wa.me/919876543210?text=Hello%20RONIN%20MEDIA,%20I%20registered%20as%20${encodeURIComponent(currentUser.name)}%20(${encodeURIComponent(currentUser.businessName)}).%20I%20want%20to%20activate%20a%20package.`}
                    target="_blank"
                    rel="noreferrer"
                    className="px-8 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-mono font-bold uppercase tracking-widest flex items-center gap-2 cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>WhatsApp Director</span>
                  </a>
                </div>
              </div>
            )}
          </div>
        )}

        {/* TAB 2: PACKAGES & PRICING */}
        {activeTab === 'pricing' && (
          <div className="space-y-8 animate-in fade-in duration-300">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#C8102E] font-bold block mb-1">
                • AGENCY PERFORMANCE PACKAGES
              </span>
              <h2 className="font-display text-4xl uppercase tracking-wide text-white">
                Transparent Packages & Pricing
              </h2>
              <p className="text-xs font-mono text-[#CCC5C4]">
                100% transparent fee split · Zero hidden markup on your Meta ad card
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Plan 1 */}
              <div className="p-8 rounded-3xl bg-[#171919] border border-white/15 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#CCC5C4] block">Starter Testing</span>
                  <h3 className="font-display text-3xl uppercase text-white mt-1">STARTER ADS</h3>
                  <p className="font-display text-4xl font-bold text-white my-3">
                    ₹3,000 <span className="text-xs font-mono font-normal text-[#CCC5C4]">/ 30 Days</span>
                  </p>
                  <p className="text-xs text-[#CCC5C4] font-sans mb-6">
                    ₹1,500 Agency Management + ₹1,500 Meta Ad Spend directly in 5-10km radius.
                  </p>

                  <ul className="space-y-2.5 text-xs font-mono text-white/80 border-t border-white/10 pt-4">
                    <li className="flex items-center gap-2">✓ 5-10km Trade Area Radius</li>
                    <li className="flex items-center gap-2">✓ Direct WhatsApp Leads</li>
                    <li className="flex items-center gap-2">✓ 100% Client Card Ownership</li>
                  </ul>
                </div>

                <a
                  href={`https://wa.me/919876543210?text=I%20want%20to%20activate%20Starter%20Ads%20Package%20(₹3,000)%20for%20my%20business%20${encodeURIComponent(currentUser.businessName)}.`}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-8 w-full py-3 rounded-xl bg-white/5 hover:bg-white/15 border border-white/20 text-white font-mono text-xs font-bold uppercase tracking-wider text-center block transition-all"
                >
                  Activate Starter →
                </a>
              </div>

              {/* Plan 2: Signature */}
              <div className="p-8 rounded-3xl bg-gradient-to-br from-[#1c1417] to-[#171919] border-2 border-[#C8102E] flex flex-col justify-between relative shadow-[0_15px_40px_rgba(200,16,46,0.25)]">
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#C8102E] text-white text-[10px] font-mono font-bold uppercase tracking-widest shadow-[0_0_15px_#C8102E]">
                  MOST POPULAR
                </div>

                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#C8102E] block">Signature Growth</span>
                  <h3 className="font-display text-3xl uppercase text-white mt-1">15 REELS AD CAMPAIGN</h3>
                  <p className="font-display text-4xl font-bold text-white my-3">
                    ₹6,000 <span className="text-xs font-mono font-normal text-[#CCC5C4]">/ 15 Reels Batch</span>
                  </p>
                  <p className="text-xs text-[#CCC5C4] font-sans mb-6">
                    15 individual Meta ad sets. ₹3,000 Management + ₹3,000 direct Meta ad budget (~₹200/reel).
                  </p>

                  <ul className="space-y-2.5 text-xs font-mono text-white/90 border-t border-white/10 pt-4">
                    <li className="flex items-center gap-2">✓ 15 Custom Ad Sets Scaled</li>
                    <li className="flex items-center gap-2">✓ ~₹200/Reel Ad Budget Distributed</li>
                    <li className="flex items-center gap-2">✓ High-Converting WhatsApp Routing</li>
                    <li className="flex items-center gap-2">✓ 24h Live Optimization Telemetry</li>
                  </ul>
                </div>

                <a
                  href={`https://wa.me/919876543210?text=I%20want%20to%20activate%2015%20Reels%20Ad%20Campaign%20(₹6,000)%20for%20my%20business%20${encodeURIComponent(currentUser.businessName)}.`}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-8 w-full py-3.5 rounded-xl bg-[#C8102E] hover:bg-[#a50b24] text-white font-mono text-xs font-bold uppercase tracking-wider text-center block transition-all shadow-[0_0_20px_rgba(200,16,46,0.4)]"
                >
                  Activate 15 Reels Plan →
                </a>
              </div>

              {/* Plan 3 */}
              <div className="p-8 rounded-3xl bg-[#171919] border border-white/15 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#CCC5C4] block">Full Scale Combo</span>
                  <h3 className="font-display text-3xl uppercase text-white mt-1">FULL POWER COMBO</h3>
                  <p className="font-display text-4xl font-bold text-white my-3">
                    ₹12,000 <span className="text-xs font-mono font-normal text-[#CCC5C4]">/ Complete Batch</span>
                  </p>
                  <p className="text-xs text-[#CCC5C4] font-sans mb-6">
                    15 Reels Video Production + 15 Meta Ad Sets + ₹3,000 Direct Ad Card Budget.
                  </p>

                  <ul className="space-y-2.5 text-xs font-mono text-white/80 border-t border-white/10 pt-4">
                    <li className="flex items-center gap-2">✓ Full 15 9:16 Video Production</li>
                    <li className="flex items-center gap-2">✓ 3-Sec Viral Hook Scripting</li>
                    <li className="flex items-center gap-2">✓ 15 Meta Ads Manager Sets</li>
                    <li className="flex items-center gap-2">✓ Dedicated Creative Director</li>
                  </ul>
                </div>

                <a
                  href={`https://wa.me/919876543210?text=I%20want%20to%20activate%20Full%20Power%20Combo%20(₹12,000)%20for%20my%20business%20${encodeURIComponent(currentUser.businessName)}.`}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-8 w-full py-3 rounded-xl bg-white/5 hover:bg-white/15 border border-white/20 text-white font-mono text-xs font-bold uppercase tracking-wider text-center block transition-all"
                >
                  Activate Full Combo →
                </a>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: AGENCY BLUEPRINT */}
        {activeTab === 'overview' && (
          <div className="space-y-6 animate-in fade-in duration-300">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#C8102E] font-bold block mb-1">
                • EXECUTION ARCHITECTURE
              </span>
              <h2 className="font-display text-4xl uppercase tracking-wide text-white">
                How We Execute Your Campaign
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-6 rounded-2xl bg-[#171919] border border-white/15 space-y-3">
                <span className="font-mono text-3xl font-bold text-[#C8102E]">01</span>
                <h4 className="font-display text-xl uppercase text-white">5-10km Radius Audit</h4>
                <p className="text-xs text-[#CCC5C4] leading-relaxed">
                  We analyze local competitors, footfall radius, customer demographics, and high-ticket service hooks.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#171919] border border-white/15 space-y-3">
                <span className="font-mono text-3xl font-bold text-[#C8102E]">02</span>
                <h4 className="font-display text-xl uppercase text-white">3-Sec Hook Scripting</h4>
                <p className="text-xs text-[#CCC5C4] leading-relaxed">
                  We craft psychological pattern interrupts that force scrollers to stop within the first 3 seconds.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#171919] border border-white/15 space-y-3">
                <span className="font-mono text-3xl font-bold text-[#C8102E]">03</span>
                <h4 className="font-display text-xl uppercase text-white">Video Editing & ASMR</h4>
                <p className="text-xs text-[#CCC5C4] leading-relaxed">
                  Kinetic subtitles, macro food/product closeups, and high-contrast retention color grading.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#171919] border border-white/15 space-y-3">
                <span className="font-mono text-3xl font-bold text-[#C8102E]">04</span>
                <h4 className="font-display text-xl uppercase text-white">WhatsApp Conversion Routing</h4>
                <p className="text-xs text-[#CCC5C4] leading-relaxed">
                  Ad sets are launched in Meta Ads Manager. Verified local prospects tap and land straight in your WhatsApp inbox.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: ACCOUNT DETAILS */}
        {activeTab === 'account' && (
          <div className="max-w-2xl bg-[#171919] border border-white/15 rounded-3xl p-8 space-y-6 animate-in fade-in duration-300">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#C8102E] font-bold block mb-1">
                • CLIENT IDENTIFICATION
              </span>
              <h2 className="font-display text-3xl uppercase tracking-wide text-white">
                Account Information
              </h2>
            </div>

            <div className="space-y-4 text-xs font-mono border-t border-white/10 pt-6">
              <div className="flex justify-between py-2 border-b border-white/5">
                <span className="text-[#CCC5C4]">Client System ID:</span>
                <span className="text-white font-bold">{currentUser.id}</span>
              </div>

              <div className="flex justify-between py-2 border-b border-white/5">
                <span className="text-[#CCC5C4]">Registered Name:</span>
                <span className="text-white font-bold">{currentUser.name}</span>
              </div>

              <div className="flex justify-between py-2 border-b border-white/5">
                <span className="text-[#CCC5C4]">Business / Shop:</span>
                <span className="text-white font-bold">{currentUser.businessName}</span>
              </div>

              <div className="flex justify-between py-2 border-b border-white/5">
                <span className="text-[#CCC5C4]">Email Address:</span>
                <span className="text-white font-bold">{currentUser.email}</span>
              </div>

              <div className="flex justify-between py-2 border-b border-white/5">
                <span className="text-[#CCC5C4]">WhatsApp Phone:</span>
                <span className="text-white font-bold">{currentUser.phone}</span>
              </div>

              <div className="flex justify-between py-2 border-b border-white/5">
                <span className="text-[#CCC5C4]">City / Market Area:</span>
                <span className="text-white font-bold">{currentUser.city}</span>
              </div>

              <div className="flex justify-between py-2 border-b border-white/5">
                <span className="text-[#CCC5C4]">Category:</span>
                <span className="text-white font-bold">{currentUser.category}</span>
              </div>

              <div className="flex justify-between py-2 border-b border-white/5">
                <span className="text-[#CCC5C4]">Assigned Manager:</span>
                <span className="text-white font-bold">{currentUser.assignedManager.name}</span>
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={handleLogout}
                className="w-full py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-xs font-mono uppercase tracking-wider text-red-400 font-bold transition-colors cursor-pointer"
              >
                Log Out of Account
              </button>
            </div>
          </div>
        )}

      </main>

    </div>
  );
};
