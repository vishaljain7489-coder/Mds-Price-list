import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Check, AlertCircle } from 'lucide-react';
import { Badge } from '../common/Badge';

export const AITerminalSection: React.FC = () => {
  const terminalLines = [
    "Initializing campaign strategy...",
    "Analyzing target audience demographics & competitor angles...",
    "Reviewing creative video concepts & 3-second hook scripts...",
    "Structuring Meta Ads Manager ad sets (CBO + Lookalikes)...",
    "Configuring Conversions API (CAPI) & Instant Form webhook...",
    "Telemetry verified: Ready for launch and daily optimization."
  ];

  const [currentLineIndex, setCurrentLineIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLineIndex((prev) => (prev + 1) % (terminalLines.length + 1));
    }, 1800);
    return () => clearInterval(interval);
  }, [terminalLines.length]);

  const floatingBadges = [
    { label: "Ad Copy Ideas", color: "text-cyan-400 border-cyan-400/30" },
    { label: "Creative Research", color: "text-blue-400 border-blue-400/30" },
    { label: "Audience Insights", color: "text-white border-white/20" },
    { label: "Campaign Analysis", color: "text-cyan-400 border-cyan-400/30" },
    { label: "Performance Reporting", color: "text-blue-400 border-blue-400/30" }
  ];

  return (
    <section className="relative py-28 sm:py-36 bg-[#030508] overflow-hidden">
      
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="blue" className="mb-4">
            INTELLIGENT AD INFRASTRUCTURE
          </Badge>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
            Smarter Workflows. <br />
            <span className="bg-gradient-to-r from-white via-slate-200 to-cyan-400 bg-clip-text text-transparent">
              Better Advertising Decisions.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-400 leading-relaxed font-normal">
            We combine high-level marketing psychology with modern analytics tooling to spot campaign fatigue before it drains your budget.
          </p>
        </div>

        {/* Floating tech pill badges */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10 max-w-2xl mx-auto">
          {floatingBadges.map((badge, idx) => (
            <motion.span
              key={idx}
              whileHover={{ scale: 1.05 }}
              className={`px-4 py-1.5 rounded-full text-xs font-mono glass-pill shadow-md flex items-center gap-2 ${badge.color}`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-current animate-ping" />
              {badge.label}
            </motion.span>
          ))}
        </div>

        {/* Terminal Visual Simulator Frosted Glass */}
        <div className="max-w-3xl mx-auto glass-card-glow rounded-[32px] overflow-hidden shadow-2xl">
          
          {/* Terminal Window Header */}
          <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between bg-black/40">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-red-400/80 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/80 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-400/80 inline-block" />
              <span className="text-xs font-mono text-slate-400 ml-2 flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                agency-engine@optimization-pipeline: ~
              </span>
            </div>
            <span className="text-[10px] font-mono text-cyan-300 bg-cyan-500/10 px-2.5 py-0.5 rounded-full border border-cyan-500/20">
              LIVE TELEMETRY
            </span>
          </div>

          {/* Terminal Body */}
          <div className="p-6 sm:p-8 font-mono text-xs sm:text-sm space-y-3 min-h-[260px] bg-black/30">
            {terminalLines.slice(0, currentLineIndex + 1).map((line, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2 }}
                className="flex items-start gap-2.5"
              >
                <span className="text-blue-400 select-none">&gt;</span>
                <span className={idx === currentLineIndex ? "text-cyan-300 font-bold" : "text-slate-400"}>
                  {line}
                </span>
                {idx === currentLineIndex && (
                  <span className="inline-block w-2 h-4 bg-cyan-400 animate-pulse align-middle" />
                )}
              </motion.div>
            ))}

            {currentLineIndex >= terminalLines.length && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="pt-4 flex items-center gap-2 text-cyan-300 text-xs"
              >
                <Check className="w-4 h-4" />
                <span>Campaign health score: 98.4% • Zero ad fatigue detected</span>
              </motion.div>
            )}
          </div>

          {/* Disclaimer */}
          <div className="px-6 py-3 border-t border-white/5 flex items-center gap-2 text-[11px] font-mono text-slate-500 bg-black/50">
            <AlertCircle className="w-3.5 h-3.5 text-blue-400 shrink-0" />
            <span>Interactive visual demonstration of our structured agency campaign launch protocol.</span>
          </div>
        </div>

      </div>
    </section>
  );
};
