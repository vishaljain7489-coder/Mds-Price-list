import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote, Shield } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../../data/agencyData';
import { Badge } from '../common/Badge';

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS_DATA.length) % TESTIMONIALS_DATA.length);
  };

  return (
    <section className="relative py-28 sm:py-36 bg-[#030508] border-y border-white/[0.06] overflow-hidden">
      
      {/* Background glow */}
      <div className="absolute top-1/2 left-10 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="cyan" className="mb-4">
            CLIENT EXPERIENCES
          </Badge>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
            What Our <br />
            <span className="bg-gradient-to-r from-white via-slate-200 to-cyan-400 bg-clip-text text-transparent">
              Clients Say.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-400 leading-relaxed font-normal">
            Real feedback from local business owners, gym founders, and clinic directors who partnered with our team.
          </p>
        </div>

        {/* Testimonials Carousel Container */}
        <div className="max-w-4xl mx-auto relative">
          
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="glass-card-glow rounded-[36px] p-8 sm:p-12 shadow-2xl relative"
            >
              <Quote className="w-12 h-12 text-cyan-400/20 absolute top-8 right-8 pointer-events-none" />

              {/* Rating stars */}
              <div className="flex items-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-cyan-400 text-cyan-400" />
                ))}
                <span className="text-xs font-mono text-cyan-300 ml-2 font-bold">5.0 / 5.0</span>
              </div>

              {/* Quote text */}
              <p className="text-lg sm:text-2xl font-light text-white leading-relaxed mb-8">
                "{TESTIMONIALS_DATA[currentIndex].quote}"
              </p>

              {/* Author Row */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-white/10">
                <div className="flex items-center gap-4">
                  <img
                    src={TESTIMONIALS_DATA[currentIndex].avatar}
                    alt={TESTIMONIALS_DATA[currentIndex].name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-cyan-400/40"
                  />
                  <div>
                    <h4 className="text-base font-bold text-white">
                      {TESTIMONIALS_DATA[currentIndex].name}
                    </h4>
                    <p className="text-xs text-slate-400">
                      {TESTIMONIALS_DATA[currentIndex].role}, {TESTIMONIALS_DATA[currentIndex].business}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-mono glass-pill text-cyan-300">
                    {TESTIMONIALS_DATA[currentIndex].metric}
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Carousel Navigation Controls */}
          <div className="flex items-center justify-between mt-8">
            <div className="flex items-center gap-2">
              {TESTIMONIALS_DATA.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    currentIndex === idx ? 'w-8 bg-cyan-400' : 'w-2 bg-white/20'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={handlePrev}
                className="p-3 rounded-full glass-pill text-white hover:text-cyan-400 transition-colors"
                aria-label="Previous Testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="p-3 rounded-full glass-pill text-white hover:text-cyan-400 transition-colors"
                aria-label="Next Testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="mt-8 text-center text-xs font-mono text-slate-500 flex items-center justify-center gap-1.5">
            <Shield className="w-3.5 h-3.5 text-blue-400" />
            <span>Development Notice: Illustrative placeholder testimonials during staging preview.</span>
          </div>

        </div>

      </div>
    </section>
  );
};
