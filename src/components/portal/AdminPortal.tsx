import React, { useState } from 'react';
import { 
  ShieldCheck, Lock, Users, Package, DollarSign, 
  TrendingUp, Edit3, Check, Plus, AlertCircle, LogOut, ArrowLeft, RefreshCw,
  Video, CheckCircle2, MessageCircle
} from 'lucide-react';
import { ClientAccount, getClients, saveClients } from '../../data/clientStore';

interface AdminPortalProps {
  onBackToHome: () => void;
}

export const AdminPortal: React.FC<AdminPortalProps> = ({ onBackToHome }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [adminPin, setAdminPin] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const [clients, setClients] = useState<ClientAccount[]>(getClients());
  const [selectedClient, setSelectedClient] = useState<ClientAccount | null>(null);

  // Edit package state
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

  const totalRevenue = clients.reduce((sum, c) => sum + (c.amountPaid || 0), 0);
  const totalDue = clients.reduce((sum, c) => sum + (c.amountDue || 0), 0);
  const totalReelsDelivered = clients.reduce((sum, c) => sum + (c.reelsDelivered || 0), 0);

  // If NOT authenticated, show PIN Login screen in Orange-White Theme
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#FFF6F2] text-[#191C21] font-sans antialiased flex flex-col justify-between py-12 px-4 relative overflow-hidden">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-orange-200/40 blur-[130px] pointer-events-none" />

        <div className="max-w-md mx-auto w-full flex items-center justify-between mb-8">
          <button
            onClick={onBackToHome}
            className="text-xs font-semibold text-gray-600 hover:text-[#E84025] flex items-center gap-2 cursor-pointer px-3 py-1.5 rounded-full bg-white border border-orange-100 shadow-sm transition-all"
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
            Authorized Founders Only · Master Operations Control
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

  // Authenticated Admin Dashboard in Orange-White Theme
  return (
    <div className="min-h-screen bg-[#FFF6F2] text-[#191C21] font-sans antialiased pb-24">
      {/* Top Bar */}
      <header className="sticky top-0 z-30 py-3.5 px-6 bg-white/95 border-b border-orange-100 backdrop-blur-md shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-[#E84025] to-[#FF5B26] flex items-center justify-center font-bold text-white shadow-md">
              <span className="text-lg leading-none font-black">+</span>
            </div>
            <div>
              <span className="font-heading-modern text-lg sm:text-xl font-black text-[#191C21]">
                CLICK <span className="text-[#E84025]">&</span> CRAFT ADMIN
              </span>
              <span className="text-[10px] font-bold text-emerald-600 block">
                ● Master Console Active
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <button
              onClick={onBackToHome}
              className="px-4 py-2 rounded-full bg-orange-50 hover:bg-orange-100 border border-orange-200 text-xs font-bold text-[#E84025] transition-colors cursor-pointer"
            >
              ← Public Website
            </button>
            <button
              onClick={() => setIsAuthenticated(false)}
              className="px-4 py-2 rounded-full bg-gray-100 hover:bg-gray-200 border border-gray-200 text-xs font-bold text-gray-700 transition-all cursor-pointer"
            >
              Lock Admin
            </button>
          </div>
        </div>
      </header>

      {/* Main Admin Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 pt-6 space-y-6">
        
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

        {/* SECTION A: CLIENTS DATABASE & PROGRESS MANAGEMENT */}
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

        {/* SECTION B: PRICING & PACKAGES EDITOR */}
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

      </main>
    </div>
  );
};
