import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';
import { CASE_STUDIES } from '../../data/agencyData';
import { Badge } from '../common/Badge';

export const CaseStudiesSection: React.FC = () => {
  return (
    <section className="relative py-28 sm:py-36 bg-[#030508] overflow-hidden">
      
      {/* Background glow */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <Badge variant="cyan" className="mb-4">
              PERFORMANCE TELEMETRY
            </Badge>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Real Work. <br />
              <span className="bg-gradient-to-r from-white via-slate-200 to-cyan-400 bg-clip-text text-transparent">
                Transparent Reporting.
              </span>
            </h2>
          </div>

          <div className="p-4 rounded-2xl glass-card text-xs font-mono text-slate-400 max-w-sm">
            <div className="flex items-center gap-2 text-white font-semibold mb-1">
              <ShieldCheck className="w-4 h-4 text-cyan-400" />
              <span>Sample Demonstrative Case Studies</span>
            </div>
            <span>Clearly labeled illustrative frameworks until client nda-cleared assets are published.</span>
          </div>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {CASE_STUDIES.map((study, idx) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="rounded-[32px] glass-card p-7 sm:p-8 flex flex-col justify-between transition-all duration-300"
            >
              <div>
                {/* Top Badges */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-[10px] font-mono uppercase bg-cyan-500/10 text-cyan-300 px-2.5 py-0.5 rounded-full border border-cyan-500/30">
                    {study.industry}
                  </span>
                  <span className="text-[9px] font-mono uppercase bg-white/5 text-slate-400 px-2 py-0.5 rounded-full">
                    {study.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2">
                  {study.client}
                </h3>

                <p className="text-xs text-slate-400 mb-6 font-mono">
                  Objective: {study.objective}
                </p>

                {/* Key Metrics Grid */}
                <div className="grid grid-cols-2 gap-3 p-4 rounded-2xl glass-pill mb-6">
                  <div>
                    <span className="text-[10px] text-slate-400 font-mono block">Conversions / Leads</span>
                    <span className="text-base sm:text-lg font-bold font-mono text-cyan-300">{study.leadsOrConversions}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 font-mono block">Cost Per Result</span>
                    <span className="text-base sm:text-lg font-bold font-mono text-white">{study.costPerResult}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 font-mono block">Ad Budget Spent</span>
                    <span className="text-xs font-mono text-slate-300">{study.adBudget}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 font-mono block">Target ROAS / Metric</span>
                    <span className="text-xs font-mono text-slate-300">{study.roas}</span>
                  </div>
                </div>

                {/* Strategic Insight */}
                <div className="text-xs text-slate-400 leading-relaxed mb-6 font-light">
                  <strong className="text-white block font-semibold mb-1">Campaign Strategic Insight:</strong>
                  {study.insight}
                </div>
              </div>

              {/* Tags */}
              <div className="pt-4 border-t border-white/5 flex flex-wrap gap-1.5">
                {study.tags.map((t, tIdx) => (
                  <span key={tIdx} className="text-[10px] font-mono text-slate-400 glass-pill px-2.5 py-0.5 rounded-full">
                    #{t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
