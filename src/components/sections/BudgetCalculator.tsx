import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { Badge } from '../common/Badge';
import { AGENCY_CONFIG } from '../../data/agencyData';

export const BudgetCalculator: React.FC = () => {
  const [managementFee, setManagementFee] = useState<number>(2500);
  const [adBudget, setAdBudget] = useState<number>(2500);

  const applyPreset = (plan: '3000' | '5000') => {
    if (plan === '3000') {
      setManagementFee(1500);
      setAdBudget(1500);
    } else {
      setManagementFee(2500);
      setAdBudget(2500);
    }
  };

  const totalInvestment = managementFee + adBudget;
  const estimatedDailyBudget = Math.round(adBudget / 30);
  const estimatedMonthlyClicks = Math.round(adBudget / 8.5);
  const estimatedLeads = Math.round(adBudget / 55);

  return (
    <section id="calculator" className="relative py-28 sm:py-36 bg-[#EDE5FA] border-y border-[#3C147A]/10 overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="purple" className="mb-4">
            SPLIT-COST TRANSPARENCY
          </Badge>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#17092F] tracking-tight leading-tight mb-5">
            Know Exactly <br />
            <span className="text-[#3C147A]">
              Where Your Money Goes.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-[#685984] leading-relaxed font-normal">
            Never wonder what percentage of your budget went to agency markups. We keep management fees and Meta advertising spend completely isolated.
          </p>
        </div>

        {/* Interactive Split-Cost Calculator Card */}
        <div className="max-w-4xl mx-auto card-white rounded-[36px] p-7 sm:p-12 shadow-[0_20px_50px_rgba(60,20,122,0.1)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Sliders & Inputs */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Quick Preset Buttons */}
              <div className="flex items-center gap-2 pb-2">
                <span className="text-xs font-bold text-[#685984]">Quick Packages:</span>
                <button
                  type="button"
                  onClick={() => applyPreset('3000')}
                  className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${
                    totalInvestment === 3000 ? 'bg-[#3C147A] text-white shadow-sm' : 'bg-[#EDE5FA] text-[#3C147A] hover:bg-[#D8B4FE]'
                  }`}
                >
                  ₹3,000 Starter
                </button>
                <button
                  type="button"
                  onClick={() => applyPreset('5000')}
                  className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${
                    totalInvestment === 5000 ? 'bg-[#3C147A] text-white shadow-sm' : 'bg-[#EDE5FA] text-[#3C147A] hover:bg-[#D8B4FE]'
                  }`}
                >
                  ₹5,000 Performance Leads
                </button>
              </div>

              {/* Cost 1: Agency Management Fee */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <label className="text-sm font-bold text-[#17092F] flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#3C147A]" />
                    1. Agency Management Fee
                  </label>
                  <div className="flex items-center gap-1 font-mono font-black text-[#3C147A] text-lg bg-[#F5F1FD] px-3.5 py-1 rounded-full border border-[#3C147A]/15">
                    <span>₹</span>
                    <input
                      type="number"
                      step={500}
                      min={2000}
                      max={30000}
                      value={managementFee}
                      onChange={(e) => setManagementFee(Number(e.target.value) || 0)}
                      className="bg-transparent text-[#3C147A] focus:outline-none w-20 text-right font-black"
                    />
                  </div>
                </div>
                <input
                  type="range"
                  min={2000}
                  max={25000}
                  step={500}
                  value={managementFee}
                  onChange={(e) => setManagementFee(Number(e.target.value))}
                  className="w-full h-2.5 bg-[#EDE5FA] rounded-lg appearance-none cursor-pointer accent-[#3C147A]"
                />
                <p className="text-[11px] font-medium text-[#685984] mt-1.5">
                  Paid to {AGENCY_CONFIG.name} for campaign strategy, testing, and optimization.
                </p>
              </div>

              {/* Cost 2: Meta Advertising Budget */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <label className="text-sm font-bold text-[#17092F] flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#7C3AED]" />
                    2. Meta Advertising Budget
                  </label>
                  <div className="flex items-center gap-1 font-mono font-black text-[#7C3AED] text-lg bg-[#F5F1FD] px-3.5 py-1 rounded-full border border-[#3C147A]/15">
                    <span>₹</span>
                    <input
                      type="number"
                      step={1000}
                      min={3000}
                      max={200000}
                      value={adBudget}
                      onChange={(e) => setAdBudget(Number(e.target.value) || 0)}
                      className="bg-transparent text-[#7C3AED] focus:outline-none w-24 text-right font-black"
                    />
                  </div>
                </div>
                <input
                  type="range"
                  min={3000}
                  max={60000}
                  step={1000}
                  value={adBudget}
                  onChange={(e) => setAdBudget(Number(e.target.value))}
                  className="w-full h-2.5 bg-[#EDE5FA] rounded-lg appearance-none cursor-pointer accent-[#7C3AED]"
                />
                <p className="text-[11px] font-medium text-[#685984] mt-1.5">
                  Paid directly to Meta Platforms, Inc. (~₹{estimatedDailyBudget.toLocaleString('en-IN')}/day).
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#F5F1FD] border border-[#3C147A]/10 flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-[#3C147A] shrink-0 mt-0.5" />
                <p className="text-xs text-[#685984] leading-relaxed">
                  "Your advertising budget is paid directly to Meta through your own advertising account. Our management fee is charged separately."
                </p>
              </div>

            </div>

            {/* Right Column: Live Card in Royal Purple */}
            <div className="lg:col-span-5 card-purple rounded-[28px] p-7 flex flex-col justify-between shadow-xl">
              <div>
                <div className="flex items-center justify-between text-xs font-mono uppercase text-purple-200 mb-4">
                  <span>Investment Breakdown</span>
                  <Sparkles className="w-4 h-4 text-[#D8FC38]" />
                </div>

                <div className="space-y-2.5 pb-5 border-b border-white/10 mb-5 text-xs font-mono">
                  <div className="flex justify-between text-purple-200">
                    <span>Agency Management:</span>
                    <span className="text-white font-bold">₹{managementFee.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="flex justify-between text-purple-200">
                    <span>Meta Direct Spend:</span>
                    <span className="text-[#D8FC38] font-bold">₹{adBudget.toLocaleString('en-IN')}</span>
                  </div>
                </div>

                <div className="mb-6">
                  <span className="text-xs text-purple-200 font-mono uppercase tracking-wider block mb-1">
                    Total Estimated Investment
                  </span>
                  <div className="text-3xl sm:text-4xl font-black font-mono text-white">
                    ₹{totalInvestment.toLocaleString('en-IN')}
                    <span className="text-xs font-normal text-purple-200 ml-1">/ month</span>
                  </div>
                </div>

                {/* Estimated Projections */}
                <div className="grid grid-cols-2 gap-2 p-3 rounded-2xl bg-black/25 mb-6 text-center border border-white/10">
                  <div>
                    <span className="text-[10px] text-purple-200 font-mono block">Est. Reach Clicks</span>
                    <span className="text-sm font-bold font-mono text-white">~{estimatedMonthlyClicks.toLocaleString('en-IN')}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-purple-200 font-mono block">Est. Inquiries</span>
                    <span className="text-sm font-bold font-mono text-[#D8FC38]">~{estimatedLeads} leads</span>
                  </div>
                </div>
              </div>

              {/* Neon Lime Pill Button */}
              <a
                href={`https://wa.me/${AGENCY_CONFIG.whatsappNumber.replace('+', '')}?text=${encodeURIComponent(
                  `Hi ${AGENCY_CONFIG.name}, based on your budget calculator, my planned total investment is ₹${totalInvestment.toLocaleString('en-IN')} (₹${managementFee.toLocaleString('en-IN')} fee + ₹${adBudget.toLocaleString('en-IN')} ad spend). Let's discuss our campaign.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-lime w-full py-3.5 px-4 text-xs font-bold tracking-wider uppercase text-center block"
              >
                Discuss This Budget
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
