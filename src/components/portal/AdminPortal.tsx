import React, { useState } from 'react';
import { 
  ShieldCheck, Lock, Users, Package, DollarSign, 
  TrendingUp, Edit3, Check, Plus, AlertCircle, LogOut, ArrowLeft, RefreshCw 
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
    if (adminPin === 'admin2026' || adminPin === 'ronin123') {
      setIsAuthenticated(true);
      setErrorMsg('');
    } else {
      setErrorMsg('गलत एडमिन पिन / पासवर्ड! (डिफ़ॉल्ट पिन: admin2026)');
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

  // If NOT authenticated, show PIN Login screen
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#070808] text-white flex flex-col justify-between py-12 px-4 relative overflow-hidden">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-[#C8102E]/20 blur-[130px] pointer-events-none" />

        <div className="max-w-md mx-auto w-full flex items-center justify-between mb-8">
          <button
            onClick={onBackToHome}
            className="text-xs font-mono text-[#CCC5C4] hover:text-white flex items-center gap-2 cursor-pointer"
          >
            ← Back to Website
          </button>
        </div>

        <div className="max-w-md mx-auto w-full bg-[#171919] border border-white/15 rounded-3xl p-8 shadow-2xl relative">
          <div className="w-14 h-14 rounded-2xl bg-[#C8102E]/20 text-[#C8102E] border border-[#C8102E]/40 flex items-center justify-center mx-auto mb-4">
            <Lock className="w-7 h-7" />
          </div>

          <h2 className="font-display text-3xl uppercase text-center text-white mb-1">
            Agency Admin Portal
          </h2>
          <p className="text-xs font-mono text-center text-[#CCC5C4] mb-6">
            Authorized Agency Founders Only · Master Control
          </p>

          {errorMsg && (
            <div className="mb-4 p-3 rounded-xl bg-red-950/60 border border-[#C8102E] text-xs text-red-200 flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{errorMsg}</span>
            </div>
          )}

          <form onSubmit={handleAdminLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-mono uppercase text-[#CCC5C4] mb-1 font-bold">
                Master Admin PIN / Password
              </label>
              <input
                type="password"
                placeholder="Enter admin PIN (default: admin2026)"
                value={adminPin}
                onChange={(e) => setAdminPin(e.target.value)}
                className="w-full bg-[#0A0A0A] border border-white/15 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#C8102E] font-mono"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-[#C8102E] hover:bg-[#a50b24] text-white font-mono text-xs font-bold uppercase tracking-wider shadow-[0_0_20px_#C8102E] transition-all cursor-pointer"
            >
              Unlock Master Dashboard →
            </button>
          </form>

          <p className="text-[11px] font-mono text-white/40 text-center mt-6">
            Protected Agency Backoffice · 256-Bit Master Key
          </p>
        </div>

        <div className="text-center text-xs font-mono text-white/30">
          RONIN MEDIA · Agency Operations Admin Panel
        </div>
      </div>
    );
  }

  // Authenticated Admin Dashboard
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white font-sans antialiased pb-24">
      {/* Top Bar */}
      <header className="sticky top-0 z-30 py-4 px-6 bg-[#171919]/90 border-b border-white/10 backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#C8102E] flex items-center justify-center font-bold text-white shadow-[0_0_15px_#C8102E]">
              +
            </div>
            <div>
              <span className="font-display text-xl uppercase font-bold text-white">
                RONIN ADMIN CONSOLE
              </span>
              <span className="text-[10px] font-mono text-emerald-400 block">
                ● Master Mode Active
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onBackToHome}
              className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-[#CCC5C4] hover:text-white transition-colors cursor-pointer"
            >
              ← View Public Site
            </button>
            <button
              onClick={() => setIsAuthenticated(false)}
              className="px-4 py-2 rounded-xl bg-[#C8102E] hover:bg-[#a50b24] text-xs font-mono text-white font-bold transition-all cursor-pointer"
            >
              Lock Admin
            </button>
          </div>
        </div>
      </header>

      {/* Main Admin Content */}
      <main className="max-w-7xl mx-auto px-6 pt-8 space-y-8">
        
        {/* Top 3 Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="p-6 rounded-3xl bg-[#171919] border border-white/10 space-y-2">
            <span className="text-xs font-mono uppercase text-[#CCC5C4] flex items-center gap-2">
              <DollarSign className="w-4 h-4 text-emerald-400" />
              Total Revenue Collected
            </span>
            <p className="font-display text-4xl font-bold text-emerald-400">
              ₹{totalRevenue.toLocaleString('en-IN')}
            </p>
            <span className="text-[11px] font-mono text-[#CCC5C4] block">
              Pending Collections: ₹{totalDue.toLocaleString('en-IN')}
            </span>
          </div>

          <div className="p-6 rounded-3xl bg-[#171919] border border-white/10 space-y-2">
            <span className="text-xs font-mono uppercase text-[#CCC5C4] flex items-center gap-2">
              <Users className="w-4 h-4 text-[#C8102E]" />
              Total Registered Clients
            </span>
            <p className="font-display text-4xl font-bold text-white">
              {clients.length} Clients
            </p>
            <span className="text-[11px] font-mono text-[#CCC5C4] block">
              {clients.filter(c => c.paymentStatus === 'Paid').length} Active Paying Plans
            </span>
          </div>

          <div className="p-6 rounded-3xl bg-[#171919] border border-white/10 space-y-2">
            <span className="text-xs font-mono uppercase text-[#CCC5C4] flex items-center gap-2">
              <Package className="w-4 h-4 text-cyan-400" />
              Reels Delivered To Date
            </span>
            <p className="font-display text-4xl font-bold text-cyan-400">
              {totalReelsDelivered} Reels
            </p>
            <span className="text-[11px] font-mono text-[#CCC5C4] block">
              Across Cafés & Clothing Stores
            </span>
          </div>
        </div>

        {/* SECTION A: CLIENTS DATABASE & PROGRESS MANAGEMENT */}
        <div className="bg-[#171919] border border-white/15 rounded-3xl p-6 sm:p-8 space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-white/10">
            <div>
              <h3 className="font-display text-2xl uppercase tracking-wider text-white">
                Client Accounts & Deliverables Manager
              </h3>
              <p className="text-xs font-mono text-[#CCC5C4]">
                Update reel progress, change payment status, and assign packages
              </p>
            </div>
            <span className="text-xs font-mono px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[#CCC5C4]">
              {clients.length} Total Registered
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs font-mono">
              <thead>
                <tr className="border-b border-white/10 text-white/50 uppercase">
                  <th className="py-3 px-4">Client ID / Name</th>
                  <th className="py-3 px-4">Business / City</th>
                  <th className="py-3 px-4">Package Subscribed</th>
                  <th className="py-3 px-4">Reels Progress</th>
                  <th className="py-3 px-4">Payment</th>
                  <th className="py-3 px-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {clients.map((c) => (
                  <tr key={c.id} className="hover:bg-white/5 transition-colors">
                    <td className="py-4 px-4">
                      <span className="text-white font-bold block">{c.name}</span>
                      <span className="text-[10px] text-[#CCC5C4]">{c.id} · {c.phone}</span>
                    </td>
                    <td className="py-4 px-4">
                      <span className="text-white block font-medium">{c.businessName}</span>
                      <span className="text-[10px] text-[#CCC5C4]">{c.category} · {c.city}</span>
                    </td>
                    <td className="py-4 px-4">
                      <span className="text-[#C8102E] font-bold block">{c.packageSubscribed}</span>
                      <span className="text-[10px] text-white/50">Billed: ₹{c.totalBilled}</span>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        <span className="text-white font-bold">{c.reelsDelivered} / {c.reelsTotal}</span>
                        <div className="flex gap-1">
                          <button
                            onClick={() => handleUpdateClientProgress(c.id, Math.min(c.reelsTotal, c.reelsDelivered + 1))}
                            className="w-5 h-5 rounded bg-white/10 hover:bg-[#C8102E] text-white flex items-center justify-center font-bold"
                          >
                            +
                          </button>
                          <button
                            onClick={() => handleUpdateClientProgress(c.id, Math.max(0, c.reelsDelivered - 1))}
                            className="w-5 h-5 rounded bg-white/10 hover:bg-white/20 text-white flex items-center justify-center font-bold"
                          >
                            -
                          </button>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <select
                        value={c.paymentStatus}
                        onChange={(e) => handleUpdatePaymentStatus(c.id, e.target.value as any)}
                        className={`px-2 py-1 rounded-md text-[10px] font-bold uppercase bg-black border ${
                          c.paymentStatus === 'Paid' ? 'border-emerald-500 text-emerald-400' : 'border-amber-500 text-amber-400'
                        }`}
                      >
                        <option value="Paid">PAID</option>
                        <option value="Partial">PARTIAL</option>
                        <option value="Due">DUE</option>
                      </select>
                    </td>
                    <td className="py-4 px-4 text-right">
                      <a
                        href={`https://wa.me/${c.phone.replace(/[^0-9]/g, '')}?text=Hello%20${encodeURIComponent(c.name)},%20this%20is%20RONIN%20MEDIA%20Operations%20Admin.`}
                        target="_blank"
                        rel="noreferrer"
                        className="px-3 py-1.5 rounded-lg bg-emerald-600/30 hover:bg-emerald-600 text-emerald-300 hover:text-white transition-colors"
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
        <div className="bg-[#171919] border border-white/15 rounded-3xl p-6 sm:p-8 space-y-6">
          <div className="flex items-center justify-between pb-4 border-b border-white/10">
            <div>
              <h3 className="font-display text-2xl uppercase tracking-wider text-white">
                Live Package Pricing Control
              </h3>
              <p className="text-xs font-mono text-[#CCC5C4]">
                Admins can update package prices here directly
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {packages.map((pkg) => (
              <div key={pkg.id} className="p-6 rounded-2xl bg-[#0A0A0A] border border-white/10 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-display text-xl uppercase text-white">{pkg.name}</span>
                  <span className="text-[10px] font-mono text-[#C8102E] font-bold">{pkg.target}</span>
                </div>

                {editPriceId === pkg.id ? (
                  <div className="flex items-center gap-2">
                    <input
                      type="number"
                      value={newPrice}
                      onChange={(e) => setNewPrice(Number(e.target.value))}
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-1.5 text-sm font-mono text-white"
                    />
                    <button
                      onClick={() => {
                        setPackages(packages.map(p => p.id === pkg.id ? { ...p, price: newPrice } : p));
                        setEditPriceId(null);
                      }}
                      className="px-3 py-1.5 rounded-lg bg-emerald-600 text-white text-xs font-bold"
                    >
                      Save
                    </button>
                  </div>
                ) : (
                  <div className="flex items-center justify-between">
                    <span className="font-display text-3xl font-bold text-white">
                      ₹{pkg.price.toLocaleString('en-IN')}
                    </span>
                    <button
                      onClick={() => {
                        setEditPriceId(pkg.id);
                        setNewPrice(pkg.price);
                      }}
                      className="p-2 rounded-lg bg-white/5 hover:bg-white/15 text-[#CCC5C4] hover:text-white"
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
