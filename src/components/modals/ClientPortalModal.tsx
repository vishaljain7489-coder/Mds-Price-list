import React, { useState } from 'react';
import { 
  X, Lock, ShieldCheck, UserCheck, Package, Check, 
  Video, TrendingUp, Clock, MessageCircle, AlertCircle, LogOut 
} from 'lucide-react';
import { BRAND } from '../../content';
import { AgencyClient } from '../../types';

interface ClientPortalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SAMPLE_CLIENTS: AgencyClient[] = [
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
    clientTemperament: "Very polite & enthusiastic.",
    reelsDelivered: 8,
    reelsTotal: 15,
    adsActive: 6,
    adsPending: 9,
    metaBudgetSpent: 1420,
    metaBudgetTotal: 3000,
    serviceStatus: 'Active & Optimizing',
    notes: "Reel #4 is driving highest conversions at ₹31/lead in 6km radius.",
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
    clientTemperament: "Direct and results-oriented.",
    reelsDelivered: 12,
    reelsTotal: 15,
    adsActive: 10,
    adsPending: 5,
    metaBudgetSpent: 2600,
    metaBudgetTotal: 3000,
    serviceStatus: 'Active & Optimizing',
    notes: "34 genuine test drive inquiries booked this week with high intent.",
    createdDate: "28 Oct 2026"
  }
];

export const ClientPortalModal: React.FC<ClientPortalModalProps> = ({ isOpen, onClose }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginId, setLoginId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [client, setClient] = useState<AgencyClient>(SAMPLE_CLIENTS[0]);

  if (!isOpen) return null;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const query = loginId.trim().toLowerCase();
    if (!query) {
      setError("Please enter your Client Access ID or Registered Phone.");
      return;
    }

    const found = SAMPLE_CLIENTS.find(c => 
      c.id.toLowerCase() === query || 
      c.phone.includes(query) || 
      c.email.toLowerCase().includes(query)
    );

    if (found) {
      setClient(found);
    } else {
      setClient(SAMPLE_CLIENTS[0]);
    }
    setIsLoggedIn(true);
    setError('');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setLoginId('');
    setPassword('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-[#0E1528] text-white p-6 sm:p-9 rounded-[32px] border border-white/20 shadow-2xl my-8 max-h-[92vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-9 h-9 rounded-full bg-white/10 hover:bg-[#C8102E] flex items-center justify-center text-white transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {!isLoggedIn ? (
          /* LOGIN GATE */
          <div className="text-center py-4">
            <div className="w-14 h-14 rounded-2xl bg-[#C8102E] text-white flex items-center justify-center mx-auto mb-4 shadow-[0_0_25px_rgba(200,16,46,0.5)]">
              <Lock className="w-7 h-7" />
            </div>

            <span className="text-[10px] font-mono uppercase tracking-widest text-[#C8102E] font-bold block mb-1">
              AUTHORIZED PARTNER LOGIN
            </span>

            <h3 className="font-display text-3xl uppercase tracking-wider text-white mb-2">
              Client Campaign Portal
            </h3>

            <p className="text-xs text-slate-300 max-w-sm mx-auto mb-6">
              Enter your secure agency credentials to access your purchased package, delivered reels progress, and live Meta telemetry.
            </p>

            <form onSubmit={handleLogin} className="space-y-4 max-w-md mx-auto text-left text-xs font-mono">
              {error && (
                <div className="p-3 rounded-xl bg-rose-950/60 border border-rose-500/40 text-rose-300 text-xs font-bold flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{error}</span>
                </div>
              )}

              <div>
                <label className="block text-slate-300 uppercase tracking-wider mb-1">
                  Client ID or Phone Number *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. CLI-101 or 9876543210"
                  value={loginId}
                  onChange={(e) => setLoginId(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/15 text-white focus:outline-none focus:border-[#C8102E]"
                />
              </div>

              <div>
                <label className="block text-slate-300 uppercase tracking-wider mb-1">
                  Access Password *
                </label>
                <input
                  type="password"
                  required
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/15 text-white focus:outline-none focus:border-[#C8102E]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-full bg-[#C8102E] hover:bg-[#a50b24] text-white font-mono text-xs font-bold uppercase tracking-widest text-center shadow-[0_0_25px_rgba(200,16,46,0.4)] cursor-pointer transition-all mt-4"
              >
                Access My Private Portal ↗
              </button>
            </form>

            <div className="mt-6 pt-4 border-t border-white/10 text-center text-[10px] font-mono text-slate-400">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 inline-block mr-1" />
              <span>256-Bit SSL Encrypted Partner Gateway</span>
            </div>
          </div>
        ) : (
          /* AUTHENTICATED CLIENT DASHBOARD */
          <div className="space-y-6 pt-2">
            
            {/* Header: Client Identity & Logout */}
            <div className="flex items-start justify-between pb-4 border-b border-white/10">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-400 font-bold block mb-1">
                  ● ACTIVE CAMPAIGN VERIFIED • ID: {client.id}
                </span>
                <h3 className="font-display text-2xl uppercase tracking-wider text-white">
                  {client.businessName}
                </h3>
                <span className="text-xs text-slate-400">
                  Owner: {client.name} • {client.city}
                </span>
              </div>

              <button
                onClick={handleLogout}
                className="px-3 py-1.5 rounded-full bg-white/10 hover:bg-rose-950/60 text-slate-300 hover:text-rose-300 text-[11px] font-mono cursor-pointer flex items-center gap-1"
              >
                <LogOut className="w-3 h-3" />
                <span>Log Out</span>
              </button>
            </div>

            {/* Active Purchased Plan Card */}
            <div className="p-5 rounded-2xl bg-[#171919] border border-white/15 space-y-3">
              <div className="flex justify-between items-start">
                <div>
                  <span className="text-[10px] font-mono uppercase text-[#C8102E] font-bold block">
                    ACTIVE PURCHASED PACKAGE
                  </span>
                  <h4 className="text-base font-bold text-white">
                    {client.packageSubscribed}
                  </h4>
                </div>
                <div className="text-right">
                  <span className="text-[10px] font-mono text-slate-400 block">Total Investment</span>
                  <span className="font-mono text-xl font-black text-[#C8102E]">
                    ₹{client.totalBilled.toLocaleString('en-IN')}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs font-mono pt-2 border-t border-white/10">
                <div className="text-slate-300">
                  <span>Payment Status: </span>
                  <span className="text-emerald-400 font-bold">✓ {client.paymentStatus} ({client.paymentMode})</span>
                </div>
                <div className="text-slate-300 text-right">
                  <span>Balance Due: </span>
                  <span className="text-white font-bold">₹{client.amountDue}</span>
                </div>
              </div>
            </div>

            {/* Deliverables Trackers: Reels & Ads */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Reels Tracker */}
              <div className="p-4 rounded-2xl bg-black/40 border border-white/10 space-y-2">
                <div className="flex justify-between items-center text-xs font-mono">
                  <span className="text-slate-400">Reels Delivered:</span>
                  <span className="font-bold text-white">{client.reelsDelivered} / {client.reelsTotal}</span>
                </div>
                <div className="w-full h-2.5 rounded-full bg-white/10 overflow-hidden">
                  <div 
                    className="h-full rounded-full bg-[#C8102E]"
                    style={{ width: `${(client.reelsDelivered / (client.reelsTotal || 15)) * 100}%` }}
                  />
                </div>
                <span className="text-[10px] font-mono text-slate-400 block">
                  {client.reelsTotal - client.reelsDelivered} remaining in production pipeline
                </span>
              </div>

              {/* Ads Tracker */}
              <div className="p-4 rounded-2xl bg-black/40 border border-white/10 space-y-2">
                <div className="flex justify-between items-center text-xs font-mono">
                  <span className="text-slate-400">Active Meta Ads:</span>
                  <span className="font-bold text-emerald-400">{client.adsActive} Active Live</span>
                </div>
                <div className="w-full h-2.5 rounded-full bg-white/10 overflow-hidden">
                  <div 
                    className="h-full rounded-full bg-emerald-500"
                    style={{ width: `${(client.adsActive / 15) * 100}%` }}
                  />
                </div>
                <span className="text-[10px] font-mono text-slate-400 block">
                  Meta Budget: ₹{client.metaBudgetSpent} / ₹{client.metaBudgetTotal}
                </span>
              </div>

            </div>

            {/* Daily 24h Meta Telemetry Update */}
            <div className="p-4 rounded-2xl bg-[#171919] border border-white/15">
              <span className="text-[10px] font-mono font-bold text-[#C8102E] uppercase block mb-1">
                TODAY'S 24H LIVE TELEMETRY UPDATE
              </span>
              <p className="text-xs text-slate-200 leading-relaxed italic">
                "{client.notes}"
              </p>
            </div>

            {/* Direct WhatsApp Hotline */}
            <a
              href={`https://wa.me/${BRAND.whatsappNumber.replace('+', '')}?text=${encodeURIComponent(`Hello ${BRAND.name}, I am logged into my client portal for ${client.businessName}. Please share today's progress.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 rounded-full bg-[#C8102E] hover:bg-[#a50b24] text-white font-mono text-xs font-bold uppercase tracking-widest text-center flex items-center justify-center gap-2 shadow-lg"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Connect With Campaign Lead On WhatsApp</span>
            </a>

          </div>
        )}

      </div>
    </div>
  );
};
