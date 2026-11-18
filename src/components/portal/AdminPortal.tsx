import React, { useState } from 'react';
import { 
  ShieldCheck, Lock, Users, Package, DollarSign, 
  TrendingUp, Edit3, Check, Plus, AlertCircle, LogOut, ArrowLeft, RefreshCw,
  Video, CheckCircle2, MessageCircle, QrCode, Smartphone, Copy, ExternalLink,
  Settings, Key, Globe, Eye, EyeOff, Radio, Play, XCircle
} from 'lucide-react';
import { ClientAccount, getClients, saveClients } from '../../data/clientStore';
import { 
  YoupiTransaction, YoupiSettings, getYoupiSettings, saveYoupiSettings,
  getYoupiTransactions, saveYoupiTransactions, recordNewTransaction
} from '../../data/youpiStore';

interface AdminPortalProps {
  onBackToHome: () => void;
}

export const AdminPortal: React.FC<AdminPortalProps> = ({ onBackToHome }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [adminPin, setAdminPin] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  // Top Admin Tab: 'clients' | 'youpi' | 'pricing'
  const [adminTab, setAdminTab] = useState<'clients' | 'youpi' | 'pricing'>('clients');

  // YouPI-PG Hub Sub-navigation: 'operations' | 'settings' | 'developer'
  const [youpiSubNav, setYoupiSubNav] = useState<'operations' | 'settings' | 'developer'>('operations');
  const [txnFilter, setTxnFilter] = useState<'ALL' | 'PENDING_REVIEW' | 'VERIFIED' | 'REJECTED'>('ALL');

  const [clients, setClients] = useState<ClientAccount[]>(getClients());
  const [selectedClient, setSelectedClient] = useState<ClientAccount | null>(null);

  // YouPI Settings & Transactions State
  const [youpiSettings, setYoupiSettings] = useState<YoupiSettings>(getYoupiSettings());
  const [youpiTxns, setYoupiTxns] = useState<YoupiTransaction[]>(getYoupiTransactions());
  const [upiEditId, setUpiEditId] = useState(youpiSettings.upiId);
  const [merchantEditName, setMerchantEditName] = useState(youpiSettings.merchantName);
  const [settingsSavedMsg, setSettingsSavedMsg] = useState('');
  const [copiedKey, setCopiedKey] = useState(false);

  // Packages state
  const [packages, setPackages] = useState([
    { id: 'starter', name: 'Starter Ads', price: 3000, target: '5 Reels' },
    { id: 'growth', name: '15 Reels Ad Campaign', price: 6000, target: '15 Reels' },
    { id: 'combo', name: 'Full Power Combo', price: 12000, target: '15 Reels + 15 Ads' },
  ]);

  const [editPriceId, setEditPriceId] = useState<string | null>(null);
  const [newPrice, setNewPrice] = useState<number>(6000);

  const handleAdminLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (adminPin === '7489640013' || adminPin === 'admin2026' || adminPin === 'ronin123') {
      setIsAuthenticated(true);
      setErrorMsg('');
    } else {
      setErrorMsg('गलत एडमिन पिन / पासवर्ड! (डिफ़ॉल्ट पिन: 7489640013)');
    }
  };

  const handleUpdateClientProgress = (clientId: string, deliveredCount: number) => {
    const updated = clients.map(c => {
      if (c.id === clientId) {
        return {
          ...c,
          reelsDelivered: deliveredCount,
          serviceStatus: deliveredCount >= c.reelsTotal ? 'Delivered' as const : 'Active & Optimizing' as const
        };
      }
      return c;
    });

    setClients(updated);
    saveClients(updated);
    if (selectedClient && selectedClient.id === clientId) {
      setSelectedClient({ ...selectedClient, reelsDelivered: deliveredCount });
    }
  };

  const handleUpdatePaymentStatus = (clientId: string, status: 'Paid' | 'Partial' | 'Due') => {
    const updated = clients.map(c => {
      if (c.id === clientId) {
        return {
          ...c,
          paymentStatus: status,
          amountPaid: status === 'Paid' ? c.totalBilled : (status === 'Due' ? 0 : c.totalBilled / 2),
          amountDue: status === 'Paid' ? 0 : (status === 'Due' ? c.totalBilled : c.totalBilled / 2)
        };
      }
      return c;
    });

    setClients(updated);
    saveClients(updated);
    if (selectedClient && selectedClient.id === clientId) {
      setSelectedClient({ ...selectedClient, paymentStatus: status });
    }
  };

  // YouPI: Verify & Approve UTR Transaction
  const handleApproveYoupiTxn = (txnId: string) => {
    const updatedTxns = youpiTxns.map(t => {
      if (t.id === txnId) {
        return { ...t, status: 'VERIFIED' as const, notes: 'Verified & Approved by Master Admin.' };
      }
      return t;
    });
    setYoupiTxns(updatedTxns);
    saveYoupiTransactions(updatedTxns);

    // Also link and mark the client as Paid in client store
    const targetTxn = youpiTxns.find(t => t.id === txnId);
    if (targetTxn && targetTxn.customerEmail) {
      const updatedClients = clients.map(c => {
        if (c.email.toLowerCase() === targetTxn.customerEmail.toLowerCase()) {
          return {
            ...c,
            paymentStatus: 'Paid' as const,
            amountPaid: targetTxn.amount,
            amountDue: 0,
            notes: `YouPI UTR (${targetTxn.utr}) verified. Plan active.`
          };
        }
        return c;
      });
      setClients(updatedClients);
      saveClients(updatedClients);
    }
  };

  // YouPI: Reject Transaction
  const handleRejectYoupiTxn = (txnId: string) => {
    const reason = window.prompt("Enter rejection reason (e.g. UTR not matched in bank):", "UTR not received in bank account");
    if (!reason) return;

    const updatedTxns = youpiTxns.map(t => {
      if (t.id === txnId) {
        return { ...t, status: 'REJECTED' as const, notes: `Rejected: ${reason}` };
      }
      return t;
    });
    setYoupiTxns(updatedTxns);
    saveYoupiTransactions(updatedTxns);
  };

  // YouPI: Save Store Settings
  const handleSaveYoupiSettings = (e: React.FormEvent) => {
    e.preventDefault();
    const updated = {
      ...youpiSettings,
      upiId: upiEditId.trim(),
      merchantName: merchantEditName.trim()
    };
    setYoupiSettings(updated);
    saveYoupiSettings(updated);
    setSettingsSavedMsg('YouPI Gateway settings saved successfully!');
    setTimeout(() => setSettingsSavedMsg(''), 3000);
  };

  // YouPI: Simulate Test Transaction
  const handleSimulateTestPayment = (amount: number, plan: string) => {
    const randomUtr = `4319${Math.floor(10000000 + Math.random() * 90000000)}`;
    const newTxn = recordNewTransaction({
      planName: plan,
      amount,
      utr: randomUtr,
      customerName: "Demo Store Client",
      businessName: "Simulated Local Café",
      customerEmail: "democlient@store.com",
      method: "PHONEPE"
    });
    setYoupiTxns(getYoupiTransactions());
    alert(`Test Payment Simulated!\nUTR: ${randomUtr}\nAmount: ₹${amount}\nCheck Daily Operations ledger below.`);
  };

  const totalRevenue = clients.reduce((sum, c) => sum + (c.amountPaid || 0), 0);
  const totalDue = clients.reduce((sum, c) => sum + (c.amountDue || 0), 0);
  const totalReelsDelivered = clients.reduce((sum, c) => sum + (c.reelsDelivered || 0), 0);

  // YouPI metrics
  const verifiedTxns = youpiTxns.filter(t => t.status === 'VERIFIED');
  const pendingTxns = youpiTxns.filter(t => t.status === 'PENDING_REVIEW');
  const youpiTotalVolume = verifiedTxns.reduce((sum, t) => sum + t.amount, 0);

  const filteredYoupiTxns = youpiTxns.filter(t => {
    if (txnFilter === 'ALL') return true;
    return t.status === txnFilter;
  });

  // Dynamic QR for Admin Preview
  const adminPreviewQr = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent(`upi://pay?pa=${youpiSettings.upiId}&pn=${youpiSettings.merchantName}&cu=INR`)}`;

  // If NOT authenticated, show PIN Login screen in Orange-White Theme
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#FFF6F2] text-[#191C21] font-sans antialiased flex flex-col justify-between py-12 px-4 relative overflow-hidden">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-orange-200/40 blur-[130px] pointer-events-none" />

        <div className="max-w-md mx-auto w-full flex items-center justify-between mb-8">
          <button
            onClick={onBackToHome}
            className="text-xs font-semibold text-gray-600 hover:text-[#E84025] flex items-center gap-2 cursor-pointer px-3.5 py-1.5 rounded-full bg-white border border-orange-100 shadow-sm transition-all"
          >
            ← Back to Website
          </button>
        </div>

        <div className="max-w-md mx-auto w-full bg-white border border-orange-100 rounded-3xl p-8 shadow-[0_20px_50px_rgba(232,64,37,0.08)] relative">
          <div className="w-14 h-14 rounded-2xl bg-orange-100 text-[#E84025] border border-orange-200 flex items-center justify-center mx-auto mb-4 shadow-sm">
            <Lock className="w-7 h-7" />
          </div>

          <h2 className="font-heading-modern text-2xl font-black text-center text-[#191C21] mb-1">
            Agency Admin Console
          </h2>
          <p className="text-xs text-center text-gray-500 mb-6">
            Authorized Founders Only · Client Portals & YouPI-PG Gateway Control
          </p>

          {errorMsg && (
            <div className="mb-4 p-3 rounded-2xl bg-red-50 border border-red-200 text-xs text-red-600 flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{errorMsg}</span>
            </div>
          )}

          <form onSubmit={handleAdminLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                Master Admin PIN / Password
              </label>
              <input
                type="password"
                placeholder="Enter PIN (e.g. 7489640013)"
                value={adminPin}
                onChange={(e) => setAdminPin(e.target.value)}
                className="w-full bg-[#FFF6F2] border border-orange-200/80 rounded-2xl px-4 py-3 text-sm text-[#191C21] focus:outline-none focus:border-[#E84025] focus:bg-white font-medium"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-full bg-gradient-to-r from-[#E84025] to-[#FF5B26] hover:from-[#d3361d] hover:to-[#eb4c1a] text-white text-xs font-bold uppercase tracking-wider shadow-[0_6px_20px_rgba(232,64,37,0.3)] transition-all cursor-pointer hover:scale-[1.02]"
            >
              Unlock Master Dashboard →
            </button>
          </form>

          <p className="text-[11px] text-gray-400 text-center mt-6">
            Protected Agency Backoffice · 256-Bit Master Authentication
          </p>
        </div>

        <div className="text-center text-xs text-gray-400">
          Click and Craft · Agency Operations Admin Panel
        </div>
      </div>
    );
  }

  // ========================================================
  // AUTHENTICATED ADMIN CONSOLE
  // ========================================================
  return (
    <div className="min-h-screen bg-[#FFF6F2] text-[#191C21] font-sans antialiased pb-24">
      
      {/* Top Header */}
      <header className="sticky top-0 z-30 py-3 px-4 sm:px-8 bg-white/95 border-b border-orange-100 backdrop-blur-md shadow-sm">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-[#E84025] to-[#FF5B26] flex items-center justify-center font-bold text-white shadow-md">
              <span className="text-lg leading-none font-black">+</span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-heading-modern text-lg sm:text-xl font-black text-[#191C21]">
                  CLICK <span className="text-[#E84025]">&</span> CRAFT ADMIN
                </span>
                <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-bold uppercase border border-emerald-200">
                  ● Master Control
                </span>
              </div>
              <p className="text-[11px] text-gray-400 font-medium">
                Active Gateway UPI: <strong className="text-gray-700">{youpiSettings.upiId}</strong>
              </p>
            </div>
          </div>

          {/* Right Header Navigation & Actions */}
          <div className="flex items-center gap-2">
            
            {/* Tab Switcher */}
            <div className="flex items-center p-1 bg-gray-100 rounded-full text-xs font-bold border border-gray-200">
              <button
                onClick={() => setAdminTab('clients')}
                className={`px-3 py-1.5 rounded-full transition-all cursor-pointer ${
                  adminTab === 'clients'
                    ? 'bg-white text-[#E84025] shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                👥 Client Accounts
              </button>

              <button
                onClick={() => setAdminTab('youpi')}
                className={`px-3 py-1.5 rounded-full transition-all cursor-pointer flex items-center gap-1.5 ${
                  adminTab === 'youpi'
                    ? 'bg-[#E84025] text-white shadow-sm'
                    : 'text-gray-600 hover:text-[#E84025]'
                }`}
              >
                <span>⚡ YouPI-PG Gateway</span>
                {pendingTxns.length > 0 && (
                  <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
                )}
              </button>

              <button
                onClick={() => setAdminTab('pricing')}
                className={`px-3 py-1.5 rounded-full transition-all cursor-pointer ${
                  adminTab === 'pricing'
                    ? 'bg-white text-[#E84025] shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                💰 Packages
              </button>
            </div>

            <button
              onClick={onBackToHome}
              className="hidden sm:inline-flex px-3.5 py-1.5 rounded-full bg-orange-50 hover:bg-orange-100 border border-orange-200 text-xs font-bold text-[#E84025] transition-colors cursor-pointer"
            >
              Public Site
            </button>

            <button
              onClick={() => setIsAuthenticated(false)}
              className="px-3.5 py-1.5 rounded-full bg-gray-100 hover:bg-gray-200 border border-gray-200 text-xs font-bold text-gray-700 transition-all cursor-pointer"
            >
              Lock
            </button>
          </div>

        </div>
      </header>

      {/* Main Admin Content Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 pt-6 space-y-6">

        {/* ========================================================================= */}
        {/* VIEW A: YOUPI-PG GATEWAY & MERCHANT HUB (FULL SUITE LIKE YOUPI REPO)     */}
        {/* ========================================================================= */}
        {adminTab === 'youpi' && (
          <div className="space-y-6">
            
            {/* YouPI Hub Secondary Sub-navigation */}
            <div className="bg-white rounded-2xl p-2 border border-orange-100 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setYoupiSubNav('operations')}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
                    youpiSubNav === 'operations'
                      ? 'bg-[#E84025] text-white shadow-sm'
                      : 'bg-gray-50 text-gray-600 hover:bg-orange-50 hover:text-[#E84025]'
                  }`}
                >
                  <span>🏪</span>
                  <span>Daily Merchant Operations</span>
                  {pendingTxns.length > 0 && (
                    <span className="px-1.5 py-0.2 rounded-full bg-amber-400 text-black text-[10px] font-black">
                      {pendingTxns.length}
                    </span>
                  )}
                </button>

                <button
                  onClick={() => setYoupiSubNav('settings')}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
                    youpiSubNav === 'settings'
                      ? 'bg-[#E84025] text-white shadow-sm'
                      : 'bg-gray-50 text-gray-600 hover:bg-orange-50 hover:text-[#E84025]'
                  }`}
                >
                  <span>⚙️</span>
                  <span>Store & UPI Settings</span>
                </button>

                <button
                  onClick={() => setYoupiSubNav('developer')}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
                    youpiSubNav === 'developer'
                      ? 'bg-[#E84025] text-white shadow-sm'
                      : 'bg-gray-50 text-gray-600 hover:bg-orange-50 hover:text-[#E84025]'
                  }`}
                >
                  <span>🛠️</span>
                  <span>Developer & Webhooks</span>
                </button>
              </div>

              {/* Fast Test Simulation */}
              <div className="flex items-center gap-2">
                <span className="text-[11px] text-gray-400 font-bold uppercase hidden md:inline">Quick Test:</span>
                <button
                  onClick={() => handleSimulateTestPayment(3000, "5 Reels Ad Campaign")}
                  className="px-3 py-1.5 rounded-lg bg-orange-50 hover:bg-orange-100 text-[#E84025] text-[11px] font-bold border border-orange-200 transition-all cursor-pointer"
                >
                  + Simulate ₹3,000 UTR
                </button>
                <button
                  onClick={() => handleSimulateTestPayment(6000, "15 Reels Signature Growth")}
                  className="px-3 py-1.5 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-700 text-[11px] font-bold border border-emerald-200 transition-all cursor-pointer"
                >
                  + Simulate ₹6,000 UTR
                </button>
              </div>
            </div>

            {/* SUBTAB 1: DAILY MERCHANT OPERATIONS (KPIs + UTR LEDGER) */}
            {youpiSubNav === 'operations' && (
              <div className="space-y-6">
                
                {/* 4 YouPI KPI Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  
                  <div className="p-5 rounded-3xl bg-white border border-orange-100 shadow-sm space-y-1">
                    <span className="text-[11px] font-bold text-gray-500 uppercase tracking-wider block">
                      Total Volume Verified
                    </span>
                    <p className="font-heading-modern text-3xl font-black text-emerald-600">
                      ₹{youpiTotalVolume.toLocaleString('en-IN')}
                    </p>
                    <span className="text-[10px] text-gray-400 block">
                      100% Direct Bank Settlement (0% Platform Fee)
                    </span>
                  </div>

                  <div className="p-5 rounded-3xl bg-white border border-orange-100 shadow-sm space-y-1">
                    <span className="text-[11px] font-bold text-gray-500 uppercase tracking-wider block">
                      Successful Payments
                    </span>
                    <p className="font-heading-modern text-3xl font-black text-[#191C21]">
                      {verifiedTxns.length}
                    </p>
                    <span className="text-[10px] text-emerald-600 font-bold block">
                      ✓ Auto-Activated in Portals
                    </span>
                  </div>

                  <div className="p-5 rounded-3xl bg-white border border-orange-100 shadow-sm space-y-1">
                    <span className="text-[11px] font-bold text-gray-500 uppercase tracking-wider block">
                      Waiting In Queue (UTR)
                    </span>
                    <p className="font-heading-modern text-3xl font-black text-amber-500">
                      {pendingTxns.length}
                    </p>
                    <span className="text-[10px] text-amber-600 font-bold block">
                      Pending Admin Bank Match
                    </span>
                  </div>

                  <div className="p-5 rounded-3xl bg-white border border-orange-100 shadow-sm space-y-1">
                    <span className="text-[11px] font-bold text-gray-500 uppercase tracking-wider block">
                      Active Receiving UPI
                    </span>
                    <p className="font-mono text-sm font-bold text-[#E84025] truncate">
                      {youpiSettings.upiId}
                    </p>
                    <span className="text-[10px] text-gray-400 block">
                      {youpiSettings.merchantName}
                    </span>
                  </div>

                </div>

                {/* Live Transactions & UTR Reconciliation Ledger */}
                <div className="bg-white border border-orange-100 rounded-3xl p-5 sm:p-6 shadow-sm space-y-4">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-3 border-b border-orange-100">
                    <div>
                      <h3 className="font-heading-modern text-xl font-black text-[#191C21]">
                        Live UPI Transactions & UTR Reconciliation Ledger
                      </h3>
                      <p className="text-xs text-gray-500">
                        Compare customer-submitted 12-digit UTR with your bank app (HDFC/ICICI/SBI) and approve in 1 click
                      </p>
                    </div>

                    {/* Filter Tabs */}
                    <div className="flex items-center gap-1.5 p-1 bg-gray-100 rounded-xl text-xs font-bold">
                      <button
                        onClick={() => setTxnFilter('ALL')}
                        className={`px-3 py-1 rounded-lg transition-all cursor-pointer ${
                          txnFilter === 'ALL' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500 hover:text-gray-900'
                        }`}
                      >
                        All ({youpiTxns.length})
                      </button>
                      <button
                        onClick={() => setTxnFilter('PENDING_REVIEW')}
                        className={`px-3 py-1 rounded-lg transition-all cursor-pointer ${
                          txnFilter === 'PENDING_REVIEW' ? 'bg-amber-500 text-white shadow-sm' : 'text-gray-500 hover:text-gray-900'
                        }`}
                      >
                        Pending ({pendingTxns.length})
                      </button>
                      <button
                        onClick={() => setTxnFilter('VERIFIED')}
                        className={`px-3 py-1 rounded-lg transition-all cursor-pointer ${
                          txnFilter === 'VERIFIED' ? 'bg-emerald-600 text-white shadow-sm' : 'text-gray-500 hover:text-gray-900'
                        }`}
                      >
                        Verified ({verifiedTxns.length})
                      </button>
                    </div>
                  </div>

                  {filteredYoupiTxns.length === 0 ? (
                    <div className="text-center py-10 text-gray-400 text-xs">
                      No transactions found for the selected filter.
                    </div>
                  ) : (
                    <div className="overflow-x-auto">
                      <table className="w-full text-left text-xs">
                        <thead>
                          <tr className="border-b border-orange-100 text-gray-400 uppercase font-bold text-[11px]">
                            <th className="py-3 px-3">TXN ID / Date</th>
                            <th className="py-3 px-3">Client / Store</th>
                            <th className="py-3 px-3">Subscribed Plan</th>
                            <th className="py-3 px-3">Amount</th>
                            <th className="py-3 px-3">12-Digit UTR Ref</th>
                            <th className="py-3 px-3">Gateway Status</th>
                            <th className="py-3 px-3 text-right">Actions</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-orange-50">
                          {filteredYoupiTxns.map((txn) => (
                            <tr key={txn.id} className="hover:bg-orange-50/40 transition-colors">
                              <td className="py-3.5 px-3">
                                <span className="font-mono font-bold text-gray-900 block">{txn.id}</span>
                                <span className="text-[10px] text-gray-400">{txn.timestamp}</span>
                              </td>

                              <td className="py-3.5 px-3">
                                <span className="text-gray-900 font-bold block">{txn.customerName}</span>
                                <span className="text-[10px] text-gray-500">{txn.businessName}</span>
                              </td>

                              <td className="py-3.5 px-3">
                                <span className="text-gray-800 font-semibold block">{txn.planName}</span>
                                <span className="text-[10px] text-gray-400">Method: {txn.method}</span>
                              </td>

                              <td className="py-3.5 px-3">
                                <span className="font-heading-modern text-base font-black text-[#E84025]">
                                  ₹{txn.amount.toLocaleString('en-IN')}
                                </span>
                              </td>

                              <td className="py-3.5 px-3">
                                <div className="flex items-center gap-1.5">
                                  <span className="font-mono text-xs font-bold text-gray-900 bg-gray-100 px-2 py-0.5 rounded border border-gray-200">
                                    {txn.utr}
                                  </span>
                                  <button
                                    onClick={() => {
                                      navigator.clipboard.writeText(txn.utr);
                                      alert(`Copied UTR: ${txn.utr}`);
                                    }}
                                    className="p-1 text-gray-400 hover:text-gray-700"
                                    title="Copy UTR"
                                  >
                                    <Copy className="w-3.5 h-3.5" />
                                  </button>
                                </div>
                              </td>

                              <td className="py-3.5 px-3">
                                <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase border ${
                                  txn.status === 'VERIFIED'
                                    ? 'bg-emerald-50 border-emerald-200 text-emerald-700'
                                    : txn.status === 'PENDING_REVIEW'
                                    ? 'bg-amber-50 border-amber-200 text-amber-700 animate-pulse'
                                    : 'bg-red-50 border-red-200 text-red-700'
                                }`}>
                                  {txn.status === 'PENDING_REVIEW' ? 'Pending Review' : txn.status}
                                </span>
                              </td>

                              <td className="py-3.5 px-3 text-right">
                                {txn.status === 'PENDING_REVIEW' ? (
                                  <div className="flex items-center justify-end gap-1.5">
                                    <button
                                      onClick={() => handleApproveYoupiTxn(txn.id)}
                                      className="px-3 py-1 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white text-[11px] font-bold shadow-sm transition-all cursor-pointer flex items-center gap-1"
                                      title="Approve UTR and activate client package"
                                    >
                                      <Check className="w-3 h-3" />
                                      <span>Verify & Approve</span>
                                    </button>
                                    <button
                                      onClick={() => handleRejectYoupiTxn(txn.id)}
                                      className="px-2.5 py-1 rounded-full bg-red-100 hover:bg-red-200 text-red-700 text-[11px] font-bold transition-all cursor-pointer"
                                      title="Reject invalid transaction"
                                    >
                                      Reject
                                    </button>
                                  </div>
                                ) : (
                                  <span className="text-[11px] text-gray-400 font-medium">Reconciled</span>
                                )}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}

                </div>

              </div>
            )}

            {/* SUBTAB 2: STORE SETTINGS & RECEIVING UPI CONFIGURATION */}
            {youpiSubNav === 'settings' && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                
                {/* Left: Settings Form */}
                <div className="lg:col-span-8 bg-white border border-orange-100 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
                  <div>
                    <h3 className="font-heading-modern text-xl font-black text-[#191C21]">
                      YouPI-PG Store & Receiving UPI Configuration
                    </h3>
                    <p className="text-xs text-gray-500 mt-0.5">
                      Change the UPI ID where all customer payments from Click & Craft will be deposited
                    </p>
                  </div>

                  {settingsSavedMsg && (
                    <div className="p-3 rounded-2xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-700 font-bold flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 shrink-0" />
                      <span>{settingsSavedMsg}</span>
                    </div>
                  )}

                  <form onSubmit={handleSaveYoupiSettings} className="space-y-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                        Active Receiving UPI ID * (GPay, PhonePe, Paytm, or Bank UPI)
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. 7489640013@okaxis / vishaljain@upi"
                        value={upiEditId}
                        onChange={(e) => setUpiEditId(e.target.value)}
                        className="w-full bg-[#FFF6F2] border border-orange-200 rounded-2xl px-4 py-3 text-sm font-mono font-bold text-gray-900 focus:outline-none focus:border-[#E84025] focus:bg-white"
                      />
                      <p className="text-[11px] text-gray-400 mt-1">
                        All dynamic QR codes and mobile app intents will automatically route payments directly to this UPI ID.
                      </p>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                        Merchant Display Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={merchantEditName}
                        onChange={(e) => setMerchantEditName(e.target.value)}
                        className="w-full bg-[#FFF6F2] border border-orange-200 rounded-2xl px-4 py-3 text-sm font-bold text-gray-900 focus:outline-none focus:border-[#E84025] focus:bg-white"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                          Daily Volume Limit (₹)
                        </label>
                        <input
                          type="number"
                          value={youpiSettings.dailyLimit}
                          readOnly
                          className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-4 py-3 text-sm font-mono text-gray-500 cursor-not-allowed"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                          Gateway Fee
                        </label>
                        <input
                          type="text"
                          value="0.00% (Zero Fee Direct UPI)"
                          readOnly
                          className="w-full bg-emerald-50 border border-emerald-200 rounded-2xl px-4 py-3 text-sm font-bold text-emerald-800 cursor-not-allowed"
                        />
                      </div>
                    </div>

                    <div className="pt-3">
                      <button
                        type="submit"
                        className="px-6 py-3 rounded-full bg-[#E84025] hover:bg-[#d3361d] text-white text-xs font-bold uppercase tracking-wider shadow-md hover:scale-105 transition-all cursor-pointer"
                      >
                        Save & Apply UPI Settings →
                      </button>
                    </div>
                  </form>
                </div>

                {/* Right: Live QR Preview */}
                <div className="lg:col-span-4 bg-white border border-orange-100 rounded-3xl p-6 shadow-sm text-center space-y-4">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#E84025] block">
                    Live Active QR Preview
                  </span>
                  
                  <div className="p-3 bg-white border-2 border-orange-200 rounded-2xl shadow-md inline-block">
                    <img
                      src={adminPreviewQr}
                      alt="Active Receiving QR"
                      className="w-48 h-48 object-contain"
                    />
                  </div>

                  <div>
                    <h4 className="font-heading-modern text-base font-black text-gray-900">{youpiSettings.merchantName}</h4>
                    <span className="font-mono text-xs text-[#E84025] font-bold block mt-0.5">{youpiSettings.upiId}</span>
                  </div>

                  <p className="text-[11px] text-gray-400">
                    Scan this QR with any phone to test your bank receiving endpoint
                  </p>
                </div>

              </div>
            )}

            {/* SUBTAB 3: DEVELOPER & WEBHOOKS HUB */}
            {youpiSubNav === 'developer' && (
              <div className="bg-white border border-orange-100 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
                <div>
                  <h3 className="font-heading-modern text-xl font-black text-[#191C21]">
                    Developer & Infrastructure Hub
                  </h3>
                  <p className="text-xs text-gray-500">
                    Production API credentials, webhook signing secrets, and observer connections
                  </p>
                </div>

                <div className="space-y-4">
                  
                  {/* Merchant ID */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                      Merchant ID
                    </label>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        readOnly
                        value={youpiSettings.merchantId}
                        className="flex-1 bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-xs font-mono font-bold text-gray-800"
                      />
                      <button
                        onClick={() => {
                          navigator.clipboard.writeText(youpiSettings.merchantId);
                          alert("Copied Merchant ID");
                        }}
                        className="px-4 py-2 rounded-xl bg-orange-50 hover:bg-orange-100 text-[#E84025] text-xs font-bold border border-orange-200 cursor-pointer"
                      >
                        Copy
                      </button>
                    </div>
                  </div>

                  {/* API Secret Key */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                      Merchant API Secret Key
                    </label>
                    <div className="flex gap-2">
                      <input
                        type="password"
                        readOnly
                        value={youpiSettings.apiKey}
                        className="flex-1 bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-xs font-mono font-bold text-gray-800"
                      />
                      <button
                        onClick={() => {
                          navigator.clipboard.writeText(youpiSettings.apiKey);
                          alert("Copied API Secret Key");
                        }}
                        className="px-4 py-2 rounded-xl bg-orange-50 hover:bg-orange-100 text-[#E84025] text-xs font-bold border border-orange-200 cursor-pointer"
                      >
                        Copy
                      </button>
                    </div>
                  </div>

                  {/* Webhook Secret */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                      Signed Webhook Secret
                    </label>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        readOnly
                        value={youpiSettings.webhookSecret}
                        className="flex-1 bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-xs font-mono font-bold text-gray-800"
                      />
                      <button
                        onClick={() => {
                          navigator.clipboard.writeText(youpiSettings.webhookSecret);
                          alert("Copied Webhook Secret");
                        }}
                        className="px-4 py-2 rounded-xl bg-orange-50 hover:bg-orange-100 text-[#E84025] text-xs font-bold border border-orange-200 cursor-pointer"
                      >
                        Copy
                      </button>
                    </div>
                  </div>

                </div>

                <div className="p-4 rounded-2xl bg-[#FFF6F2] border border-orange-200 space-y-2">
                  <span className="text-xs font-bold text-[#E84025] uppercase tracking-wider block">
                    ⚡ Zero-Configuration Embed Script
                  </span>
                  <p className="text-xs text-gray-600">
                    Use this script to embed YouPI-PG checkout anywhere across your landing pages:
                  </p>
                  <pre className="p-3 rounded-xl bg-gray-900 text-emerald-400 text-[11px] font-mono overflow-x-auto">
                    {`<script src="https://clickandcraft.agency/youpi-checkout.js" data-merchant-id="${youpiSettings.merchantId}" data-name="${youpiSettings.merchantName}"></script>`}
                  </pre>
                </div>

              </div>
            )}

          </div>
        )}

        {/* ========================================================================= */}
        {/* VIEW B: CLIENT ACCOUNTS & DELIVERABLES MANAGER                           */}
        {/* ========================================================================= */}
        {adminTab === 'clients' && (
          <div className="space-y-6">
            
            {/* Top 3 Metric Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
              <div className="p-5 sm:p-6 rounded-3xl bg-white border border-orange-100 shadow-sm space-y-1.5">
                <span className="text-xs font-bold uppercase tracking-wider text-gray-500 flex items-center gap-2">
                  <DollarSign className="w-4 h-4 text-emerald-600" />
                  Total Revenue Collected
                </span>
                <p className="font-heading-modern text-3xl sm:text-4xl font-black text-emerald-600">
                  ₹{totalRevenue.toLocaleString('en-IN')}
                </p>
                <span className="text-[11px] font-semibold text-gray-400 block">
                  Pending Collections: ₹{totalDue.toLocaleString('en-IN')}
                </span>
              </div>

              <div className="p-5 sm:p-6 rounded-3xl bg-white border border-orange-100 shadow-sm space-y-1.5">
                <span className="text-xs font-bold uppercase tracking-wider text-gray-500 flex items-center gap-2">
                  <Users className="w-4 h-4 text-[#E84025]" />
                  Total Registered Clients
                </span>
                <p className="font-heading-modern text-3xl sm:text-4xl font-black text-[#191C21]">
                  {clients.length} Clients
                </p>
                <span className="text-[11px] font-semibold text-gray-400 block">
                  {clients.filter(c => c.paymentStatus === 'Paid').length} Active Paying Plans
                </span>
              </div>

              <div className="p-5 sm:p-6 rounded-3xl bg-white border border-orange-100 shadow-sm space-y-1.5">
                <span className="text-xs font-bold uppercase tracking-wider text-gray-500 flex items-center gap-2">
                  <Package className="w-4 h-4 text-orange-500" />
                  Reels Delivered To Date
                </span>
                <p className="font-heading-modern text-3xl sm:text-4xl font-black text-[#E84025]">
                  {totalReelsDelivered} Reels
                </p>
                <span className="text-[11px] font-semibold text-gray-400 block">
                  Across Cafés & Clothing Stores
                </span>
              </div>
            </div>

            {/* Clients Database & Deliverables Table */}
            <div className="bg-white border border-orange-100 rounded-3xl p-5 sm:p-6 shadow-sm space-y-4">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-3 border-b border-orange-100">
                <div>
                  <h3 className="font-heading-modern text-xl font-black text-[#191C21]">
                    Client Accounts & Deliverables Manager
                  </h3>
                  <p className="text-xs text-gray-500">
                    Update reel progress, change payment status, and assign packages
                  </p>
                </div>
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-orange-50 text-[#E84025] border border-orange-200">
                  {clients.length} Total Accounts
                </span>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead>
                    <tr className="border-b border-orange-100 text-gray-400 uppercase font-bold text-[11px]">
                      <th className="py-3 px-3">Client / Contact</th>
                      <th className="py-3 px-3">Business / City</th>
                      <th className="py-3 px-3">Package Subscribed</th>
                      <th className="py-3 px-3">Reels Progress</th>
                      <th className="py-3 px-3">Payment</th>
                      <th className="py-3 px-3 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-orange-50">
                    {clients.map((c) => (
                      <tr key={c.id} className="hover:bg-orange-50/40 transition-colors">
                        <td className="py-3.5 px-3">
                          <span className="text-gray-900 font-bold block">{c.name}</span>
                          <span className="text-[10px] text-gray-400">{c.id} · {c.phone}</span>
                        </td>
                        <td className="py-3.5 px-3">
                          <span className="text-gray-800 block font-semibold">{c.businessName}</span>
                          <span className="text-[10px] text-gray-400">{c.category} · {c.city}</span>
                        </td>
                        <td className="py-3.5 px-3">
                          <span className="text-[#E84025] font-bold block">{c.packageSubscribed}</span>
                          <span className="text-[10px] text-gray-400">Billed: ₹{c.totalBilled}</span>
                          {c.notes && (
                            <span className="text-[10px] text-emerald-600 font-medium block truncate max-w-[180px]" title={c.notes}>
                              ℹ️ {c.notes}
                            </span>
                          )}
                        </td>
                        <td className="py-3.5 px-3">
                          <div className="flex items-center gap-2">
                            <span className="text-gray-900 font-bold">{c.reelsDelivered} / {c.reelsTotal}</span>
                            <div className="flex gap-1">
                              <button
                                onClick={() => handleUpdateClientProgress(c.id, Math.min(c.reelsTotal, c.reelsDelivered + 1))}
                                className="w-5 h-5 rounded bg-orange-100 hover:bg-[#E84025] text-[#E84025] hover:text-white flex items-center justify-center font-bold transition-all cursor-pointer"
                                title="Add delivered reel"
                              >
                                +
                              </button>
                              <button
                                onClick={() => handleUpdateClientProgress(c.id, Math.max(0, c.reelsDelivered - 1))}
                                className="w-5 h-5 rounded bg-gray-100 hover:bg-gray-200 text-gray-700 flex items-center justify-center font-bold transition-all cursor-pointer"
                                title="Decrease reel"
                              >
                                -
                              </button>
                            </div>
                          </div>
                        </td>
                        <td className="py-3.5 px-3">
                          <select
                            value={c.paymentStatus}
                            onChange={(e) => handleUpdatePaymentStatus(c.id, e.target.value as any)}
                            className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase border cursor-pointer ${
                              c.paymentStatus === 'Paid' 
                                ? 'bg-emerald-50 border-emerald-200 text-emerald-700' 
                                : 'bg-amber-50 border-amber-200 text-amber-700'
                            }`}
                          >
                            <option value="Paid">PAID</option>
                            <option value="Partial">PARTIAL</option>
                            <option value="Due">DUE</option>
                          </select>
                        </td>
                        <td className="py-3.5 px-3 text-right">
                          <a
                            href={`https://wa.me/${c.phone.replace(/[^0-9]/g, '')}?text=Hello%20${encodeURIComponent(c.name)},%20this%20is%20Click%20and%20Craft%20Operations.`}
                            target="_blank"
                            rel="noreferrer"
                            className="px-3 py-1.5 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white text-[11px] font-bold transition-colors inline-block"
                          >
                            WhatsApp
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        )}

        {/* ========================================================================= */}
        {/* VIEW C: LIVE PACKAGE PRICING CONTROL                                     */}
        {/* ========================================================================= */}
        {adminTab === 'pricing' && (
          <div className="bg-white border border-orange-100 rounded-3xl p-5 sm:p-6 shadow-sm space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-orange-100">
              <div>
                <h3 className="font-heading-modern text-xl font-black text-[#191C21]">
                  Live Package Pricing Control
                </h3>
                <p className="text-xs text-gray-500">
                  Admins can update package prices directly
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {packages.map((pkg) => (
                <div key={pkg.id} className="p-4 sm:p-5 rounded-2xl bg-[#FFF6F2] border border-orange-200/80 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-heading-modern text-base font-bold text-[#191C21]">{pkg.name}</span>
                    <span className="text-[10px] font-bold text-[#E84025] px-2 py-0.5 rounded-full bg-orange-100">{pkg.target}</span>
                  </div>

                  {editPriceId === pkg.id ? (
                    <div className="flex items-center gap-2">
                      <input
                        type="number"
                        value={newPrice}
                        onChange={(e) => setNewPrice(Number(e.target.value))}
                        className="w-full bg-white border border-orange-300 rounded-xl px-3 py-1.5 text-sm font-bold text-[#191C21]"
                      />
                      <button
                        onClick={() => {
                          setPackages(packages.map(p => p.id === pkg.id ? { ...p, price: newPrice } : p));
                          setEditPriceId(null);
                        }}
                        className="px-3 py-1.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-bold transition-all cursor-pointer"
                      >
                        Save
                      </button>
                    </div>
                  ) : (
                    <div className="flex items-center justify-between">
                      <span className="font-heading-modern text-2xl font-black text-[#E84025]">
                        ₹{pkg.price.toLocaleString('en-IN')}
                      </span>
                      <button
                        onClick={() => {
                          setEditPriceId(pkg.id);
                          setNewPrice(pkg.price);
                        }}
                        className="p-1.5 rounded-xl bg-white hover:bg-orange-100 text-gray-600 hover:text-[#E84025] border border-orange-200 transition-all cursor-pointer"
                        title="Edit price"
                      >
                        <Edit3 className="w-4 h-4" />
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

      </main>
    </div>
  );
};
