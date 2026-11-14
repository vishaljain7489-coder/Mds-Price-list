import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, MessageCircle, RotateCcw, Zap } from 'lucide-react';
import { QUIZ_QUESTIONS, AGENCY_CONFIG } from '../../data/agencyData';
import { Badge } from '../common/Badge';

export const GrowthQuiz: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [isCompleted, setIsCompleted] = useState(false);

  const totalQuestions = QUIZ_QUESTIONS.length;
  const currentQuestion = QUIZ_QUESTIONS[currentStep];

  const handleSelectOption = (label: string) => {
    const updated = { ...answers, [currentQuestion.id]: label };
    setAnswers(updated);

    if (currentStep < totalQuestions - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsCompleted(true);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleReset = () => {
    setCurrentStep(0);
    setAnswers({});
    setIsCompleted(false);
  };

  const getRecommendation = () => {
    const businessType = answers[1] || "Local Business";
    const goal = answers[2] || "More enquiries";
    const exp = answers[3] || "Boosted posts";
    const budget = answers[4] || "₹5,000–₹10,000";

    let plan = "GROWTH PLAN (₹5,999/mo)";
    let headline = `Hyper-Local Meta Ads & Instant Lead Generation for ${businessType}`;
    let explanation = `Based on your goal of generating "${goal}" with a monthly ad budget of ${budget}, we recommend transitioning away from simple boosts directly into Meta Ads Manager Lead Forms & WhatsApp Routing.`;

    if (budget.includes("25,000") || businessType === "Real Estate" || businessType === "E-commerce") {
      plan = "PREMIUM PLAN (₹9,999/mo)";
      headline = `Full-Funnel Creative Testing & Multi-Campaign Architecture`;
      explanation = `Your ambitious growth target and budget bracket require multi-angle 9:16 video reels testing combined with continuous retargeting of warm page engagers.`;
    } else if (budget.includes("Below ₹5,000")) {
      plan = "STARTER PLAN (₹2,999/mo)";
      headline = `Cost-Efficient Foundation & Hyper-Targeted Local Radius`;
      explanation = `With a disciplined testing budget, our Starter plan locks in precise 5km radius audience controls to ensure maximum conversion efficiency without wasted impressions.`;
    }

    return { plan, headline, explanation, businessType, goal, exp, budget };
  };

  const rec = getRecommendation();

  const waMessage = encodeURIComponent(
    `*STRATEGY QUIZ RESULTS - ${AGENCY_CONFIG.name}*\n\n` +
    `• Business Type: ${rec.businessType}\n` +
    `• Main Goal: ${rec.goal}\n` +
    `• Previous Meta Ad Experience: ${rec.exp}\n` +
    `• Planned Ad Budget: ${rec.budget}\n` +
    `• Recommended Plan: ${rec.plan}\n\n` +
    `Hi ${AGENCY_CONFIG.name}, I just completed your interactive quiz and would like to claim my free custom ad strategy based on these details!`
  );

  return (
    <section id="quiz" className="relative py-28 sm:py-36 bg-[#030508] border-y border-white/[0.06] overflow-hidden">
      
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[550px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <Badge variant="cyan" className="mb-4">
            30-SECOND STRATEGY AUDIT
          </Badge>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            What Does Your Business <br />
            <span className="bg-gradient-to-r from-white via-slate-200 to-cyan-400 bg-clip-text text-transparent">
              Need Right Now?
            </span>
          </h2>

          <p className="text-sm sm:text-base text-slate-400">
            Answer 4 quick questions to receive a tailored performance roadmap and WhatsApp consultation strategy.
          </p>
        </div>

        {/* Quiz Container Frosted Glass Card */}
        <div className="glass-card-glow rounded-[36px] p-7 sm:p-12 shadow-2xl relative">
          
          {!isCompleted ? (
            <div>
              {/* Progress Bar & Counter */}
              <div className="mb-8">
                <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-2">
                  <span>Question 0{currentStep + 1} of 0{totalQuestions}</span>
                  <span className="text-cyan-300 font-bold">{Math.round(((currentStep + 1) / totalQuestions) * 100)}% Complete</span>
                </div>
                <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-blue-500 to-cyan-400"
                    initial={{ width: 0 }}
                    animate={{ width: `${((currentStep + 1) / totalQuestions) * 100}%` }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </div>

              {/* Question Headline */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStep}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.25 }}
                >
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-6">
                    {currentQuestion.question}
                  </h3>

                  {/* Options List */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                    {currentQuestion.options.map((opt, oIdx) => {
                      const isSelected = answers[currentQuestion.id] === opt.label;
                      return (
                        <motion.button
                          key={oIdx}
                          whileHover={{ scale: 1.01 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => handleSelectOption(opt.label)}
                          className={`p-4 rounded-2xl text-left transition-all duration-200 flex flex-col justify-between ${
                            isSelected
                              ? 'glass-card border-cyan-400/60 shadow-[0_0_20px_rgba(6,182,212,0.25)] text-white'
                              : 'glass-card hover:border-white/20 text-white'
                          }`}
                        >
                          <div className="flex items-center justify-between w-full mb-1">
                            <span className="font-semibold text-sm sm:text-base text-white">
                              {opt.label}
                            </span>
                            <div className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 ${
                              isSelected ? 'border-cyan-400 bg-cyan-400' : 'border-white/20'
                            }`}>
                              {isSelected && <div className="w-1.5 h-1.5 rounded-full bg-black" />}
                            </div>
                          </div>
                          {opt.description && (
                            <span className="text-xs text-slate-400 font-light">
                              {opt.description}
                            </span>
                          )}
                        </motion.button>
                      );
                    })}
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Footer navigation */}
              <div className="flex items-center justify-between pt-4 border-t border-white/10 text-xs">
                <button
                  onClick={handleBack}
                  disabled={currentStep === 0}
                  className={`inline-flex items-center gap-1.5 font-semibold transition-colors ${
                    currentStep === 0 ? 'opacity-30 cursor-not-allowed text-slate-500' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Previous</span>
                </button>

                <span className="text-slate-500 font-mono text-[11px]">
                  Select an option to proceed automatically
                </span>
              </div>
            </div>
          ) : (
            /* Result Reveal Card */
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="py-4"
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5" />
                  RECOMMENDED STRATEGY BLUEPRINT
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
                {rec.headline}
              </h3>

              <div className="text-sm font-mono text-cyan-300 font-bold mb-4">
                Recommended Tier: {rec.plan}
              </div>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6 glass-card p-5 rounded-2xl">
                {rec.explanation}
              </p>

              {/* Summary Chips */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-8 text-xs font-mono">
                <div className="p-3 glass-pill rounded-xl">
                  <span className="text-slate-400 block text-[10px]">Business</span>
                  <span className="text-white font-semibold truncate block">{rec.businessType}</span>
                </div>
                <div className="p-3 glass-pill rounded-xl">
                  <span className="text-slate-400 block text-[10px]">Objective</span>
                  <span className="text-white font-semibold truncate block">{rec.goal}</span>
                </div>
                <div className="p-3 glass-pill rounded-xl">
                  <span className="text-slate-400 block text-[10px]">Meta Experience</span>
                  <span className="text-white font-semibold truncate block">{rec.exp}</span>
                </div>
                <div className="p-3 glass-pill rounded-xl">
                  <span className="text-slate-400 block text-[10px]">Budget</span>
                  <span className="text-cyan-300 font-semibold truncate block">{rec.budget}</span>
                </div>
              </div>

              {/* Action Buttons: White pill CTA */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <a
                  href={`https://wa.me/${AGENCY_CONFIG.whatsappNumber.replace('+', '')}?text=${waMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-4 px-6 rounded-full bg-white hover:bg-slate-100 text-black font-semibold text-sm tracking-wide shadow-[0_4px_25px_rgba(255,255,255,0.25)] transition-all flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-5 h-5 text-emerald-600" />
                  <span>Send to WhatsApp for Free Strategy</span>
                </a>

                <button
                  onClick={handleReset}
                  className="inline-flex items-center justify-center gap-2 py-4 px-5 rounded-full glass-pill text-slate-400 hover:text-white text-xs font-semibold transition-colors"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>Retake Quiz</span>
                </button>
              </div>
            </motion.div>
          )}

        </div>

      </div>
    </section>
  );
};
