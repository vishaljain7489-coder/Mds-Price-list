import React, { useState } from 'react';
import { 
  Lock, UserPlus, Eye, EyeOff, ShieldCheck, CheckCircle2, 
  Clock, Video, TrendingUp, DollarSign, MessageCircle, 
  Phone, LogOut, ArrowRight, Sparkles, User, AlertCircle,
  Package, Layers, FileText, Info, HelpCircle, Check, Play,
  BarChart3, Store, ArrowLeft, ExternalLink, Headphones, QrCode
} from 'lucide-react';
import { 
  ClientAccount, authenticateClient, registerClient, getClients, 
  isAdminUser, ADMIN_CREDENTIALS 
} from '../../data/clientStore';
import { YoupiCheckoutModal } from '../modals/YoupiCheckoutModal';

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

  // Checkout modal state for buying/upgrading plans
  const [selectedPlanForPayment, setSelectedPlanForPayment] = useState<{ name: string; amount: number } | null>(null);

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
          businessName: "Click and Craft Agency Operations",
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
          notes: "Master Admin Logged in. Use the extra 'Admin Panel ⚡' button to edit website text & client packages.",
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
        businessName: "Click and Craft Agency Operations",
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
        notes: "Master Admin Logged in. Use the extra 'Admin Panel ⚡' button to edit website text & client packages.",
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

  const handlePaymentSuccess = (utrNumber: string, planName: string, amount: number) => {
    if (currentUser) {
      setCurrentUser({
        ...currentUser,
        packageSubscribed: `${planName} (₹${amount})`,
        paymentStatus: 'Paid',
        totalBilled: amount,
        amountPaid: amount,
        amountDue: 0,
        notes: `Payment submitted via YouPI-PG. UTR Ref: ${utrNumber}. Active and optimizing.`
      });
    }
  };

  // ========================================================
  // VIEW 1: AUTHENTICATION (LOGIN & SIGN UP)
  // ========================================================
  if (!currentUser) {
    return (
      <div className="min-h-screen bg-[#FFF6F2] text-[#191C21] font-sans antialiased flex flex-col justify-between p-4 sm:p-8 relative overflow-hidden">
        
        {/* Soft Background Warm Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-orange-200/40 via-amber-100/30 to-transparent blur-[120px] pointer-events-none" />

        {/* Top Navbar */}
        <div className="relative z-10 max-w-5xl mx-auto w-full flex items-center justify-between py-2">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-[#E84025] to-[#FF5B26] flex items-center justify-center font-bold text-white shadow-md">
              <span className="text-lg leading-none font-black">+</span>
            </div>
            <span className="font-heading-modern text-xl font-black text-[#191C21] tracking-tight">
              CLICK <span className="text-[#E84025]">&</span> CRAFT
            </span>
          </div>

          {onBackToHome && (
            <button
              onClick={onBackToHome}
              className="text-xs font-semibold text-gray-600 hover:text-[#E84025] flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-orange-100 shadow-sm transition-all cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Website</span>
            </button>
          )}
        </div>

        {/* Central Auth Container */}
        <div className="relative z-10 max-w-md mx-auto w-full my-6">
          
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-orange-100 shadow-[0_20px_50px_rgba(232,64,37,0.08)]">
            
            {/* Tab Selector: Login vs Sign Up */}
            <div className="flex items-center p-1 bg-[#FFF6F2] rounded-2xl mb-6 border border-orange-200/60">
              <button
                type="button"
                onClick={() => { setAuthMode('login'); setErrorMsg(''); }}
                className={`flex-1 py-2 text-xs font-bold uppercase tracking-wider rounded-xl transition-all cursor-pointer ${
                  authMode === 'login'
                    ? 'bg-[#E84025] text-white shadow-sm'
                    : 'text-gray-600 hover:text-[#E84025]'
                }`}
              >
                Login Portal
              </button>
              <button
                type="button"
                onClick={() => { setAuthMode('signup'); setErrorMsg(''); }}
                className={`flex-1 py-2 text-xs font-bold uppercase tracking-wider rounded-xl transition-all cursor-pointer ${
                  authMode === 'signup'
                    ? 'bg-[#E84025] text-white shadow-sm'
                    : 'text-gray-600 hover:text-[#E84025]'
                }`}
              >
                Sign Up Account
              </button>
            </div>

            {/* Error & Success Alerts */}
            {errorMsg && (
              <div className="mb-4 p-3 rounded-2xl bg-red-50 border border-red-200 text-xs text-red-600 flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{errorMsg}</span>
              </div>
            )}

            {successMsg && (
              <div className="mb-4 p-3 rounded-2xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-700 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>{successMsg}</span>
              </div>
            )}

            {authMode === 'login' ? (
              /* MODE A: LOGIN FORM */
              <form onSubmit={handleLogin} className="space-y-4">
                <div className="text-center mb-4">
                  <h2 className="font-heading-modern text-2xl font-black text-[#191C21]">
                    Welcome to Client Portal
                  </h2>
                  <p className="text-xs text-gray-500 mt-1">
                    Enter your email & password to access deliverables, plans & helpline
                  </p>
                </div>

                {/* Email / ID Input */}
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. vishaljain@gmail.com"
                    value={emailOrId}
                    onChange={(e) => setEmailOrId(e.target.value)}
                    className="w-full bg-[#FFF6F2] border border-orange-200/80 rounded-2xl px-4 py-3 text-sm text-[#191C21] placeholder-gray-400 focus:outline-none focus:border-[#E84025] focus:bg-white transition-all font-medium"
                  />
                </div>

                {/* Password Input */}
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider">
                      Password *
                    </label>
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="text-xs text-[#E84025] hover:underline flex items-center gap-1 font-semibold"
                    >
                      {showPassword ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                      <span>{showPassword ? 'Hide' : 'Show'}</span>
                    </button>
                  </div>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    required
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full bg-[#FFF6F2] border border-orange-200/80 rounded-2xl px-4 py-3 text-sm text-[#191C21] placeholder-gray-400 focus:outline-none focus:border-[#E84025] focus:bg-white transition-all font-medium"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 rounded-full bg-gradient-to-r from-[#E84025] to-[#FF5B26] hover:from-[#d3361d] hover:to-[#eb4c1a] text-white text-xs font-bold uppercase tracking-wider shadow-[0_6px_20px_rgba(232,64,37,0.3)] transition-all cursor-pointer flex items-center justify-center gap-2 mt-4 hover:scale-[1.02]"
                >
                  <Lock className="w-3.5 h-3.5" />
                  <span>{loading ? 'Verifying Account...' : 'Sign In to Portal →'}</span>
                </button>

                {/* Quick 1-Click Test Accounts */}
                <div className="pt-4 border-t border-orange-100">
                  <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-2 text-center">
                    Quick 1-Click Test Accounts
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => handleQuickLogin(ADMIN_CREDENTIALS.email, ADMIN_CREDENTIALS.password, true)}
                      className="p-2.5 rounded-xl bg-amber-50 hover:bg-amber-100 border border-amber-200 text-left transition-all cursor-pointer"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-bold uppercase text-amber-800">Master Admin ⚡</span>
                        <span className="text-[9px] px-1.5 py-0.5 rounded bg-amber-200 text-amber-900 font-bold">Pin Ready</span>
                      </div>
                      <span className="text-xs font-bold text-gray-800 block truncate mt-0.5">{ADMIN_CREDENTIALS.email}</span>
                      <span className="text-[10px] text-gray-500 block">Pass: {ADMIN_CREDENTIALS.password}</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => handleQuickLogin("vishaljain@gmail.com", "7489640013", false)}
                      className="p-2.5 rounded-xl bg-orange-50 hover:bg-orange-100 border border-orange-200 text-left transition-all cursor-pointer"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-bold uppercase text-[#E84025]">Customer Demo</span>
                        <span className="text-[9px] px-1.5 py-0.5 rounded bg-orange-200 text-orange-900 font-bold">Active Plan</span>
                      </div>
                      <span className="text-xs font-bold text-gray-800 block truncate mt-0.5">vishaljain@gmail.com</span>
                      <span className="text-[10px] text-gray-500 block">Pass: 7489640013</span>
                    </button>
                  </div>
                </div>

              </form>
            ) : (
              /* MODE B: SIGN UP FORM */
              <form onSubmit={handleSignup} className="space-y-3.5">
                <div className="text-center mb-3">
                  <h2 className="font-heading-modern text-2xl font-black text-[#191C21]">
                    Create Client Account
                  </h2>
                  <p className="text-xs text-gray-500 mt-1">
                    Register your business to book packages and track deliverables
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-bold text-gray-700 uppercase tracking-wider mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={signupName}
                      onChange={(e) => setSignupName(e.target.value)}
                      className="w-full bg-[#FFF6F2] border border-orange-200/80 rounded-xl px-3.5 py-2.5 text-xs text-[#191C21] placeholder-gray-400 focus:outline-none focus:border-[#E84025] focus:bg-white font-medium"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-gray-700 uppercase tracking-wider mb-1">
                      Store / Café Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Royal Café"
                      value={signupBusiness}
                      onChange={(e) => setSignupBusiness(e.target.value)}
                      className="w-full bg-[#FFF6F2] border border-orange-200/80 rounded-xl px-3.5 py-2.5 text-xs text-[#191C21] placeholder-gray-400 focus:outline-none focus:border-[#E84025] focus:bg-white font-medium"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-bold text-gray-700 uppercase tracking-wider mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="client@store.com"
                      value={signupEmail}
                      onChange={(e) => setSignupEmail(e.target.value)}
                      className="w-full bg-[#FFF6F2] border border-orange-200/80 rounded-xl px-3.5 py-2.5 text-xs text-[#191C21] placeholder-gray-400 focus:outline-none focus:border-[#E84025] focus:bg-white font-medium"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-gray-700 uppercase tracking-wider mb-1">
                      Phone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={signupPhone}
                      onChange={(e) => setSignupPhone(e.target.value)}
                      className="w-full bg-[#FFF6F2] border border-orange-200/80 rounded-xl px-3.5 py-2.5 text-xs text-[#191C21] placeholder-gray-400 focus:outline-none focus:border-[#E84025] focus:bg-white font-medium"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-bold text-gray-700 uppercase tracking-wider mb-1">
                      City *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Jaipur"
                      value={signupCity}
                      onChange={(e) => setSignupCity(e.target.value)}
                      className="w-full bg-[#FFF6F2] border border-orange-200/80 rounded-xl px-3.5 py-2.5 text-xs text-[#191C21] placeholder-gray-400 focus:outline-none focus:border-[#E84025] focus:bg-white font-medium"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-gray-700 uppercase tracking-wider mb-1">
                      Category *
                    </label>
                    <select
                      value={signupCategory}
                      onChange={(e) => setSignupCategory(e.target.value)}
                      className="w-full bg-[#FFF6F2] border border-orange-200/80 rounded-xl px-3.5 py-2.5 text-xs text-[#191C21] focus:outline-none focus:border-[#E84025] focus:bg-white font-medium"
                    >
                      <option value="Café & Dining">Café & Dining</option>
                      <option value="Clothing Store">Clothing Store</option>
                      <option value="Retail Outlet">Retail Outlet</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-gray-700 uppercase tracking-wider mb-1">
                    Create Password *
                  </label>
                  <input
                    type="password"
                    required
                    placeholder="Choose a safe password"
                    value={signupPassword}
                    onChange={(e) => setSignupPassword(e.target.value)}
                    className="w-full bg-[#FFF6F2] border border-orange-200/80 rounded-xl px-3.5 py-2.5 text-xs text-[#191C21] placeholder-gray-400 focus:outline-none focus:border-[#E84025] focus:bg-white font-medium"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 rounded-full bg-gradient-to-r from-[#E84025] to-[#FF5B26] hover:from-[#d3361d] hover:to-[#eb4c1a] text-white text-xs font-bold uppercase tracking-wider shadow-[0_6px_20px_rgba(232,64,37,0.3)] transition-all cursor-pointer flex items-center justify-center gap-2 mt-4 hover:scale-[1.02]"
                >
                  {loading ? 'Registering Account...' : 'Sign Up & Open Dashboard →'}
                </button>
              </form>
            )}

          </div>

          <p className="text-center text-xs text-gray-400 mt-4">
            Secure Encryption · Client & Admin Authentication
          </p>

        </div>

        {/* Footer */}
        <div className="relative z-10 text-center text-xs text-gray-400">
          Click and Craft · Performance Marketing & Media Advertising
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

  // Home Page Packages that customer can see and purchase
  const availablePackages = [
    {
      id: "pkg-starter",
      name: "5 Reels Ad Campaign",
      price: 3000,
      reels: "5 Viral Reels",
      radius: "5km Hyper-Local Meta Ads",
      highlights: ["5 Viral 9:16 Video Reels", "5km Trade Area Ads Setup", "Direct WhatsApp Lead Tracking", "Dedicated Progress Tracker"]
    },
    {
      id: "pkg-growth",
      name: "15 Reels Signature Growth",
      price: 6000,
      reels: "15 Viral Reels",
      radius: "5-10km Hyper-Local Meta Ads",
      isPopular: true,
      highlights: ["15 Cinematic 3-Sec Hook Reels", "5-10km Hyper-Local Meta Ads Manager", "Direct WhatsApp Customer Footfall", "Weekly Video Telemetry & Progress", "Transparent Ad Spend Billing"]
    },
    {
      id: "pkg-combo",
      name: "15 Reels + 15 Posts Combo",
      price: 12000,
      reels: "15 Reels + 15 Posts",
      radius: "Complete Trade Area Domination",
      highlights: ["15 4K Viral Video Reels", "15 Creative Posts & Offer Banners", "High-Spender Custom Retargeting", "Meta Pixel & CAPI Setup", "Dedicated Creative Director"]
    }
  ];

  return (
    <div className="min-h-screen bg-[#FFF6F2] text-[#191C21] font-sans antialiased selection:bg-[#E84025] selection:text-white pb-24">
      
      {/* Background Soft Glow */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-orange-200/30 blur-[150px] pointer-events-none" />

      {/* Top Client Header */}
      <header className="relative z-30 py-3.5 px-4 sm:px-8 bg-white/95 border-b border-orange-100 backdrop-blur-md sticky top-0 shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-[#E84025] to-[#FF5B26] flex items-center justify-center font-bold text-white shadow-md">
              <span className="text-lg leading-none font-black">+</span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-heading-modern text-lg sm:text-xl font-black text-[#191C21]">
                  CLICK <span className="text-[#E84025]">&</span> CRAFT
                </span>
                <span className={`text-[10px] font-bold uppercase px-2.5 py-0.5 rounded-full border ${
                  isAdminSession 
                    ? 'bg-amber-100 text-amber-800 border-amber-300' 
                    : 'bg-orange-100 text-[#E84025] border-orange-200'
                }`}>
                  {isAdminSession ? 'Master Admin' : 'Client Workspace'}
                </span>
              </div>
              <p className="text-[11px] text-gray-500 font-medium">
                ID: {currentUser.id} · {currentUser.businessName}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            
            {/* ⚡ EXTRA ADMIN BUTTON (ONLY REVEALED WHEN vishaljain74899@gmail.com LOGS IN!) */}
            {isAdminSession && onOpenAdmin && (
              <button
                onClick={onOpenAdmin}
                className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-gradient-to-r from-amber-500 to-[#E84025] hover:from-amber-400 hover:to-red-600 text-white text-xs font-bold uppercase tracking-wider shadow-[0_4px_16px_rgba(232,64,37,0.35)] hover:scale-105 transition-all cursor-pointer animate-pulse"
                title="Launch Admin Control Console"
              >
                <ShieldCheck className="w-4 h-4" />
                <span>Admin Panel ⚡</span>
              </button>
            )}

            {onBackToHome && (
              <button
                onClick={onBackToHome}
                className="hidden sm:inline-flex px-3.5 py-1.5 rounded-full bg-orange-50 hover:bg-orange-100 border border-orange-200 text-xs font-bold text-[#E84025] transition-colors cursor-pointer"
              >
                Website View
              </button>
            )}

            <button
              onClick={handleLogout}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gray-100 hover:bg-gray-200 border border-gray-200 text-xs font-bold text-gray-700 transition-colors cursor-pointer"
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
          <div className="bg-gradient-to-r from-amber-50 via-orange-50 to-amber-50 border border-amber-300 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-md">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500 text-white flex items-center justify-center font-bold shadow-md">
                ⚡
              </div>
              <div>
                <h3 className="font-heading-modern text-base font-bold text-amber-950">
                  Master Admin Console Unlocked
                </h3>
                <p className="text-xs text-amber-800">
                  You are signed in as agency owner ({ADMIN_CREDENTIALS.email}). You can modify client deliverables and package rates.
                </p>
              </div>
            </div>

            <button
              onClick={onOpenAdmin}
              className="px-5 py-2.5 rounded-full bg-[#E84025] hover:bg-[#d3361d] text-white text-xs font-bold uppercase tracking-wider shadow-md hover:scale-105 transition-all cursor-pointer whitespace-nowrap"
            >
              Open Master Admin Console →
            </button>
          </div>
        )}

        {/* SECTION 1: CUSTOMER HELPLINE (कस्टमर हेल्पलाइन) */}
        <div className="bg-gradient-to-r from-orange-500 to-[#E84025] text-white rounded-3xl p-5 sm:p-6 shadow-[0_12px_35px_rgba(232,64,37,0.25)] flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full bg-white/20 text-white text-[10px] font-extrabold uppercase tracking-widest backdrop-blur-md">
                Dedicated 24/7 Support
              </span>
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span className="text-xs font-bold text-emerald-200">Helpline Active</span>
            </div>
            <h2 className="font-heading-modern text-2xl sm:text-3xl font-black">
              Click & Craft Customer Helpline
            </h2>
            <p className="text-xs sm:text-sm text-white/90 max-w-xl leading-relaxed">
              अपने एक्टिव प्लान, रील्स स्क्रिप्टिंग, मेटा ऐड्स बजट, या पेमेंट्स से जुड़े किसी भी सवाल के लिए सीधे हमारे हेल्पलाइन नंबर या व्हाट्सएप पर संपर्क करें।
            </p>
            <div className="text-[11px] text-white/80 font-medium pt-1">
              🕒 हेल्पलाइन समय: <strong>सुबह 10:00 बजे से रात 9:00 बजे तक (Mon - Sun)</strong>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            {/* WhatsApp Helpline */}
            <a
              href={`https://wa.me/917489640013?text=Hello%20Click%20and%20Craft%20Team,%20I%20am%20${encodeURIComponent(currentUser.name)}%20(${encodeURIComponent(currentUser.businessName)}).%20I%20need%20help%20with%20my%20campaign.`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-5 py-3 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-bold uppercase tracking-wider shadow-md hover:scale-105 transition-all cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Helpline</span>
            </a>

            {/* Direct Phone Call */}
            <a
              href="tel:+917489640013"
              className="flex items-center gap-2 px-5 py-3 rounded-full bg-white text-[#E84025] hover:bg-orange-50 text-xs font-bold uppercase tracking-wider shadow-md hover:scale-105 transition-all cursor-pointer"
            >
              <Phone className="w-4 h-4" />
              <span>Call +91 74896 40013</span>
            </a>
          </div>
        </div>

        {/* SECTION 2: CLIENT TOP PROFILE OVERVIEW */}
        <div className="bg-white rounded-3xl p-5 sm:p-6 border border-orange-100 shadow-[0_10px_35px_rgba(232,64,37,0.06)] flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-[#E84025] uppercase tracking-wider">
                {currentUser.category}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              <span className="text-xs font-semibold text-emerald-600">Active Campaign</span>
            </div>
            <h1 className="font-heading-modern text-2xl sm:text-3xl font-black text-[#191C21]">
              {currentUser.businessName}
            </h1>
            <p className="text-xs text-gray-500">
              Account Holder: <strong className="text-gray-800">{currentUser.name}</strong> · {currentUser.city} · {currentUser.phone}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="px-4 py-2.5 rounded-2xl bg-orange-50 border border-orange-200 text-right">
              <span className="text-[10px] font-bold text-gray-500 uppercase block">Active Package</span>
              <span className="text-xs sm:text-sm font-bold text-[#E84025]">{currentUser.packageSubscribed}</span>
            </div>
          </div>
        </div>

        {/* SECTION 3: 4 METRIC CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          
          {/* Card 1: Reels Progress */}
          <div className="bg-white rounded-2xl p-4 sm:p-5 border border-orange-100 shadow-sm flex flex-col justify-between">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold text-gray-500 uppercase">Reels Delivered</span>
              <div className="w-8 h-8 rounded-xl bg-orange-100 text-[#E84025] flex items-center justify-center">
                <Video className="w-4 h-4" />
              </div>
            </div>
            <div>
              <div className="flex items-baseline gap-2">
                <span className="font-heading-modern text-3xl font-black text-[#191C21]">
                  {currentUser.reelsDelivered}
                </span>
                <span className="text-xs font-bold text-gray-400">/ {currentUser.reelsTotal} Total</span>
              </div>
              
              {/* Progress Bar */}
              <div className="w-full bg-gray-100 rounded-full h-2 mt-3 overflow-hidden">
                <div 
                  className="bg-gradient-to-r from-[#E84025] to-[#FF5B26] h-full rounded-full transition-all duration-500"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
              <span className="text-[11px] font-bold text-[#E84025] block mt-1.5">{progressPercent}% Completed</span>
            </div>
          </div>

          {/* Card 2: Meta Ad Spend */}
          <div className="bg-white rounded-2xl p-4 sm:p-5 border border-orange-100 shadow-sm flex flex-col justify-between">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold text-gray-500 uppercase">Meta Ad Spend</span>
              <div className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center">
                <TrendingUp className="w-4 h-4" />
              </div>
            </div>
            <div>
              <div className="flex items-baseline gap-2">
                <span className="font-heading-modern text-3xl font-black text-[#191C21]">
                  ₹{currentUser.metaBudgetSpent.toLocaleString('en-IN')}
                </span>
                <span className="text-xs font-bold text-gray-400">/ ₹{currentUser.metaBudgetTotal.toLocaleString('en-IN')}</span>
              </div>
              <span className="text-[11px] text-emerald-600 font-bold block mt-3">
                ✓ 5-10km Radius Geofencing Active
              </span>
            </div>
          </div>

          {/* Card 3: Billing Status */}
          <div className="bg-white rounded-2xl p-4 sm:p-5 border border-orange-100 shadow-sm flex flex-col justify-between">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold text-gray-500 uppercase">Billing Status</span>
              <div className="w-8 h-8 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center">
                <DollarSign className="w-4 h-4" />
              </div>
            </div>
            <div>
              <span className="font-heading-modern text-3xl font-black text-[#191C21] block">
                ₹{currentUser.totalBilled.toLocaleString('en-IN')}
              </span>
              <div className="flex items-center gap-2 mt-3">
                <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700 text-[10px] font-bold uppercase">
                  {currentUser.paymentStatus} ({currentUser.paymentMode})
                </span>
                <span className="text-[11px] text-gray-500 font-medium">Due: ₹{currentUser.amountDue}</span>
              </div>
            </div>
          </div>

          {/* Card 4: Dedicated Creative Manager */}
          <div className="bg-white rounded-2xl p-4 sm:p-5 border border-orange-100 shadow-sm flex flex-col justify-between">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-gray-500 uppercase">Creative Manager</span>
              <div className="w-8 h-8 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center">
                <User className="w-4 h-4" />
              </div>
            </div>
            <div>
              <h4 className="text-sm font-bold text-gray-900">{currentUser.assignedManager.name}</h4>
              <p className="text-[11px] text-gray-500">{currentUser.assignedManager.phone}</p>
              
              <a
                href={`https://wa.me/${currentUser.assignedManager.whatsapp}?text=Hello%20${currentUser.assignedManager.name},%20I%20am%20checking%20my%20campaign%20deliverables.`}
                target="_blank"
                rel="noreferrer"
                className="mt-2.5 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white text-[11px] font-bold transition-all cursor-pointer"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>

        </div>

        {/* SECTION 4: HOME PAGE PLANS & PACKAGES INSIDE PORTAL (कस्टमर को प्लान्स दिखेंगे) */}
        <div className="bg-white rounded-3xl p-5 sm:p-6 border border-orange-100 shadow-[0_10px_35px_rgba(232,64,37,0.06)] space-y-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 pb-3 border-b border-orange-100">
            <div>
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full bg-orange-100 text-[#E84025] text-[10px] font-extrabold uppercase tracking-wider">
                  Official Agency Price Lists
                </span>
                <span className="text-xs text-gray-400">· 0% Fee YouPI-PG Gateway</span>
              </div>
              <h3 className="font-heading-modern text-xl sm:text-2xl font-black text-[#191C21] mt-1">
                Choose or Upgrade Your Growth Package
              </h3>
              <p className="text-xs text-gray-500">
                You can upgrade or renew your ad campaigns directly using UPI (GPay, PhonePe, Paytm, QR Code)
              </p>
            </div>
          </div>

          {/* 3 Packages Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-2">
            {availablePackages.map((pkg) => {
              const isCurrent = currentUser.packageSubscribed.includes(pkg.price.toString());

              return (
                <div
                  key={pkg.id}
                  className={`p-5 rounded-3xl border transition-all flex flex-col justify-between relative ${
                    isCurrent
                      ? 'bg-orange-50/50 border-2 border-[#E84025] shadow-md'
                      : 'bg-white border-gray-100 hover:border-orange-200 shadow-sm hover:shadow-md'
                  }`}
                >
                  {isCurrent && (
                    <span className="absolute -top-3 right-4 px-3 py-0.5 rounded-full bg-[#E84025] text-white text-[10px] font-bold uppercase tracking-wider shadow-sm">
                      ✓ Active Plan
                    </span>
                  )}
                  {!isCurrent && pkg.isPopular && (
                    <span className="absolute -top-3 right-4 px-3 py-0.5 rounded-full bg-amber-500 text-white text-[10px] font-bold uppercase tracking-wider shadow-sm">
                      ⭐ Most Popular
                    </span>
                  )}

                  <div className="space-y-3">
                    <div>
                      <span className="text-[10px] font-bold uppercase text-gray-400 tracking-wider block">
                        {pkg.reels}
                      </span>
                      <h4 className="font-heading-modern text-lg font-black text-[#191C21]">
                        {pkg.name}
                      </h4>
                      <p className="text-[11px] text-gray-500 mt-0.5">{pkg.radius}</p>
                    </div>

                    <div className="pt-1">
                      <span className="font-heading-modern text-3xl font-black text-[#E84025]">
                        ₹{pkg.price.toLocaleString('en-IN')}
                      </span>
                      <span className="text-xs text-gray-400 font-medium"> / campaign</span>
                    </div>

                    <ul className="space-y-2 pt-3 border-t border-gray-100 text-xs text-gray-600">
                      {pkg.highlights.map((h, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <Check className="w-3.5 h-3.5 text-[#E84025] shrink-0" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-5">
                    {isCurrent ? (
                      <button
                        onClick={() => setSelectedPlanForPayment({ name: pkg.name, amount: pkg.price })}
                        className="w-full py-2.5 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-bold uppercase tracking-wider shadow-sm transition-all cursor-pointer flex items-center justify-center gap-1.5"
                      >
                        <QrCode className="w-3.5 h-3.5" />
                        <span>Renew Plan via UPI →</span>
                      </button>
                    ) : (
                      <button
                        onClick={() => setSelectedPlanForPayment({ name: pkg.name, amount: pkg.price })}
                        className="w-full py-2.5 rounded-full bg-[#E84025] hover:bg-[#d3361d] text-white text-xs font-bold uppercase tracking-wider shadow-sm transition-all cursor-pointer flex items-center justify-center gap-1.5"
                      >
                        <QrCode className="w-3.5 h-3.5" />
                        <span>Pay via YouPI-PG (₹{pkg.price}) →</span>
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* SECTION 5: DELIVERED REELS GALLERY */}
        <div className="bg-white rounded-3xl p-5 sm:p-6 border border-orange-100 shadow-sm space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-heading-modern text-xl font-bold text-[#191C21]">
                Delivered Reels & Performance Track
              </h3>
              <p className="text-xs text-gray-500">
                Live creatives currently running in your 5-10km trade area
              </p>
            </div>
            <span className="px-3 py-1 rounded-full bg-orange-50 text-[#E84025] text-xs font-bold border border-orange-200">
              {currentUser.deliveredReelsList.length} Reels Logged
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
            {currentUser.deliveredReelsList.map((reel) => (
              <div key={reel.id} className="rounded-2xl border border-orange-100 overflow-hidden bg-white shadow-sm hover:shadow-md transition-all group">
                <div className="relative aspect-[4/3] bg-gray-100 overflow-hidden">
                  <img
                    src={reel.videoThumbnail}
                    alt={reel.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <span className="absolute top-2 left-2 px-2 py-0.5 rounded-full bg-emerald-500 text-white text-[9px] font-bold uppercase shadow-sm">
                    {reel.status}
                  </span>
                </div>
                <div className="p-3.5 space-y-2">
                  <h5 className="text-xs font-bold text-gray-900 line-clamp-1">{reel.title}</h5>
                  <div className="flex items-center justify-between text-[11px] font-semibold text-gray-600 pt-1 border-t border-gray-100">
                    <span className="text-[#E84025] font-bold">👁 {reel.views} Views</span>
                    <span className="text-emerald-600 font-bold">💬 {reel.leads}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 6: CAMPAIGN NOTES */}
        <div className="bg-orange-50/70 rounded-2xl p-4 sm:p-5 border border-orange-200/80 flex items-start gap-3">
          <Info className="w-5 h-5 text-[#E84025] shrink-0 mt-0.5" />
          <div className="text-xs text-gray-700">
            <strong className="font-bold text-gray-900 block mb-0.5">Campaign Optimization Note:</strong>
            {currentUser.notes}
          </div>
        </div>

      </main>

      {/* YouPI-PG Dynamic UPI Payment Checkout Modal */}
      {selectedPlanForPayment && (
        <YoupiCheckoutModal
          isOpen={Boolean(selectedPlanForPayment)}
          onClose={() => setSelectedPlanForPayment(null)}
          planName={selectedPlanForPayment.name}
          amount={selectedPlanForPayment.amount}
          onPaymentSuccess={handlePaymentSuccess}
        />
      )}

    </div>
  );
};
