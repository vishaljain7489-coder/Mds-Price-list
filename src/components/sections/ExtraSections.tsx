import React, { useState } from 'react';
import { 
  Play, Check, Star, Plus, Minus, ArrowRight, 
  MessageCircle, ShieldCheck, ChevronDown, Sparkles 
} from 'lucide-react';
import { 
  PORTFOLIO_ITEMS, PACKAGES, COMBO_PACKAGES, 
  COLLAB_PAGES, COMPARISON_ROWS, TESTIMONIALS, 
  FAQS, BRAND 
} from '../../content';

interface ExtraSectionsProps {
  onSelectVideo?: (url: string) => void;
  onBookPackage?: (packageName: string) => void;
}

export const ExtraSections: React.FC<ExtraSectionsProps> = ({ 
  onSelectVideo,
  onBookPackage 
}) => {
  // A. Portfolio Filter State
  const [activeFilter, setActiveFilter] = useState<'All' | 'Reels' | 'Ads' | 'Brand Campaigns'>('All');

  // G. Testimonial State
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  // H. FAQ Accordion State
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // I. Contact Form State
  const [form, setForm] = useState({
    name: '',
    business: '',
    whatsapp: '',
    service: '15 Reels Performance Batch (₹6,000)',
    budget: '₹6,000 - ₹12,000',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.whatsapp) return;
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      // Construct WhatsApp message deep link
      const text = `*NEW BOOKING INQUIRY - ${BRAND.name}*%0A--------------------------------%0A*Name:* ${encodeURIComponent(form.name)}%0A*Business:* ${encodeURIComponent(form.business)}%0A*WhatsApp:* ${encodeURIComponent(form.whatsapp)}%0A*Selected Plan:* ${encodeURIComponent(form.service)}%0A*Budget:* ${encodeURIComponent(form.budget)}%0A*Message:* ${encodeURIComponent(form.message)}%0A--------------------------------`;
      window.open(`https://wa.me/${BRAND.whatsappNumber.replace('+', '')}?text=${text}`, '_blank');
    }, 600);
  };

  const filteredPortfolio = PORTFOLIO_ITEMS.filter((item) => {
    if (activeFilter === 'All') return true;
    return item.category === activeFilter;
  });

  return (
    <div className="space-y-0 text-white">
      
      {/* ======================================================== */}
      {/* 6A. FILTERABLE PORTFOLIO GRID (DARK)                     */}
      {/* ======================================================== */}
      <section id="portfolio" className="relative bg-[#0A0A0A] py-24 sm:py-32 px-4 sm:px-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#C8102E] red-dot block mb-2">
                PORTFOLIO ARCHIVE
              </span>
              <h2 className="font-display text-4xl sm:text-7xl uppercase tracking-tight text-white">
                Proven Video Campaigns.
              </h2>
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap items-center gap-2">
              {(['All', 'Reels', 'Ads', 'Brand Campaigns'] as const).map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all cursor-pointer ${
                    activeFilter === filter
                      ? 'bg-[#C8102E] text-white shadow-[0_0_15px_rgba(200,16,46,0.5)]'
                      : 'bg-white/10 text-slate-300 hover:text-white hover:bg-white/15'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          {/* Grid of Portfolio Items */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPortfolio.map((item) => (
              <div
                key={item.id}
                onClick={() => onSelectVideo && item.videoUrl && onSelectVideo(item.videoUrl)}
                className="group relative rounded-[28px] overflow-hidden bg-[#171919] border border-white/15 cursor-pointer shadow-xl hover:border-[#C8102E] transition-all aspect-[4/5] flex flex-col justify-between p-6"
              >
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                <div className="relative z-10 flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold bg-[#C8102E] text-white px-2.5 py-1 rounded-full uppercase">
                    {item.tag}
                  </span>
                  <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-[#C8102E] transition-colors">
                    <Play className="w-4 h-4 fill-current ml-0.5" />
                  </div>
                </div>

                <div className="relative z-10 space-y-1">
                  <span className="text-[11px] font-mono text-[#C8102E] font-bold block">
                    {item.leads}
                  </span>
                  <h3 className="text-base font-bold text-white leading-snug">
                    {item.title}
                  </h3>
                  <div className="pt-2 border-t border-white/20 flex items-center justify-between text-[11px] font-mono text-slate-300">
                    <span>{item.views} Views</span>
                    <span className="text-[#C8102E] font-bold">{item.cpl}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ======================================================== */}
      {/* 6B. PACKAGES & PRICING (WHITE SECTION)                   */}
      {/* ======================================================== */}
      <section id="packages" className="section-white relative bg-white text-[#0A0A0A] py-24 sm:py-32 px-4 sm:px-8 border-t border-black/10">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-[#C8102E] font-bold red-dot block mb-2">
              TRANSPARENT VALUE
            </span>
            <h2 className="font-display text-4xl sm:text-7xl uppercase tracking-tight text-[#0A0A0A]">
              Simple, Predictable Packages.
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              100% transparent pricing with zero hidden agency cuts.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-20">
            {PACKAGES.map((pkg) => (
              <div
                key={pkg.id}
                className={`p-8 sm:p-10 rounded-[32px] flex flex-col justify-between transition-all relative ${
                  pkg.popular
                    ? 'bg-[#171919] text-white shadow-[0_20px_50px_rgba(200,16,46,0.3)] border-2 border-[#C8102E]'
                    : 'bg-[#F4F4F6] text-[#0A0A0A] border border-black/10 hover:border-black/30'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="bg-[#C8102E] text-white text-[10px] font-mono font-bold uppercase tracking-widest px-4 py-1 rounded-full shadow-lg">
                      ★ MOST POPULAR CHOICE
                    </span>
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-xs font-mono font-bold uppercase ${pkg.popular ? 'text-[#C8102E]' : 'text-slate-500'}`}>
                      {pkg.name}
                    </span>
                  </div>

                  <div className="flex items-baseline gap-1 mb-2">
                    <span className="font-display text-5xl sm:text-6xl font-black">
                      {pkg.price}
                    </span>
                    <span className={`text-xs font-mono ${pkg.popular ? 'text-slate-400' : 'text-slate-500'}`}>
                      {pkg.period}
                    </span>
                  </div>

                  <p className={`text-xs mb-8 ${pkg.popular ? 'text-slate-300' : 'text-slate-600'}`}>
                    {pkg.tagline}
                  </p>

                  <div className="space-y-3 mb-8">
                    {pkg.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs">
                        <div className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                          pkg.popular ? 'bg-[#C8102E] text-white' : 'bg-black text-white'
                        }`}>
                          <Check className="w-2.5 h-2.5 stroke-[3]" />
                        </div>
                        <span className={pkg.popular ? 'text-slate-200' : 'text-slate-700'}>
                          {feat}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => onBookPackage && onBookPackage(pkg.name)}
                  className={`w-full py-4 rounded-full text-xs font-mono uppercase tracking-widest text-center cursor-pointer transition-all ${
                    pkg.popular
                      ? 'bg-[#C8102E] hover:bg-[#a50b24] text-white shadow-lg hover:scale-102'
                      : 'bg-black hover:bg-slate-800 text-white'
                  }`}
                >
                  {pkg.cta} ↗
                </button>
              </div>
            ))}
          </div>

          {/* 6C. COMBO PACKAGES WITH "SAVE X%" RED RIBBON */}
          <div className="pt-8 border-t border-black/10">
            <div className="text-center mb-10">
              <span className="text-xs font-mono uppercase tracking-widest text-[#C8102E] font-bold block mb-1">
                COMBINED SYNERGY BUNDLES
              </span>
              <h3 className="font-display text-3xl sm:text-5xl uppercase tracking-tight text-[#0A0A0A]">
                Reels Production + Meta Ads Combos
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {COMBO_PACKAGES.map((combo) => (
                <div
                  key={combo.id}
                  className="p-8 rounded-[32px] bg-[#171919] text-white border border-white/15 relative overflow-hidden flex flex-col justify-between"
                >
                  {/* Red Save Ribbon */}
                  <div className="absolute top-0 right-0 bg-[#C8102E] text-white text-[10px] font-mono font-bold uppercase tracking-widest px-4 py-1.5 rounded-bl-2xl">
                    {combo.badge}
                  </div>

                  <div>
                    <h4 className="font-display text-2xl uppercase tracking-wider text-white mb-2">
                      {combo.name}
                    </h4>

                    <div className="flex items-baseline gap-2 mb-3">
                      <span className="font-display text-4xl font-black text-[#C8102E]">
                        {combo.price}
                      </span>
                      <span className="font-mono text-sm text-slate-500 line-through">
                        {combo.originalPrice}
                      </span>
                      <span className="font-mono text-xs text-slate-400">
                        {combo.period}
                      </span>
                    </div>

                    <p className="text-xs text-slate-300 mb-6">
                      {combo.desc}
                    </p>

                    <div className="space-y-2 mb-8 text-xs font-mono text-slate-300">
                      {combo.deliverables.map((d, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <span className="text-[#C8102E]">✦</span>
                          <span>{d}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={() => onBookPackage && onBookPackage(combo.name)}
                    className="w-full py-3.5 rounded-full bg-white hover:bg-slate-200 text-black font-mono text-xs font-bold uppercase tracking-widest cursor-pointer"
                  >
                    Claim Combo Savings ↗
                  </button>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ======================================================== */}
      {/* 6D. TOP PROFESSIONAL PAGES COLLAB (DARK)                 */}
      {/* ======================================================== */}
      <section id="collabs" className="relative bg-[#0A0A0A] py-24 sm:py-32 px-4 sm:px-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#C8102E] red-dot block mb-2">
                VERIFIED LOCAL REACH
              </span>
              <h2 className="font-display text-4xl sm:text-7xl uppercase tracking-tight text-white">
                Top City Pages Collabs.
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 max-w-md">
              Don't waste time chasing page admins. We hold direct commercial partnerships with the top viral local pages at pre-negotiated discount rates.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {COLLAB_PAGES.map((collab, idx) => (
              <div 
                key={idx}
                className="p-6 rounded-[28px] bg-[#171919] border border-white/15 flex flex-col justify-between hover:border-[#C8102E] transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono text-slate-400 uppercase">
                      {collab.niche}
                    </span>
                    <span className="text-[10px] font-mono font-bold bg-[#C8102E]/20 text-[#C8102E] px-2 py-0.5 rounded">
                      {collab.savings}
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-white mb-1">
                    {collab.name}
                  </h4>
                  <span className="font-display text-2xl text-white font-black block mb-4">
                    {collab.followers} Followers
                  </span>

                  <div className="p-3 rounded-xl bg-black/50 border border-white/10 space-y-1 text-xs font-mono mb-4">
                    <div className="flex justify-between text-slate-400">
                      <span>Direct Admin Price:</span>
                      <span className="line-through">{collab.typicalPrice}</span>
                    </div>
                    <div className="flex justify-between text-white font-bold">
                      <span>Agency Direct Rate:</span>
                      <span className="text-[#C8102E]">{collab.agencyPrice}</span>
                    </div>
                  </div>
                </div>

                <a
                  href={`https://wa.me/${BRAND.whatsappNumber.replace('+', '')}?text=${encodeURIComponent(`Hi ${BRAND.name}, I want to book a collaboration with ${collab.name}.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 rounded-full bg-white/10 hover:bg-[#C8102E] text-white text-[11px] font-mono font-bold uppercase tracking-wider text-center block transition-colors"
                >
                  Book Collab Post ↗
                </a>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ======================================================== */}
      {/* 6E. "DIRECT VS THROUGH US" COMPARISON TABLE (WHITE)      */}
      {/* ======================================================== */}
      <section id="compare" className="section-white relative bg-white text-[#0A0A0A] py-24 sm:py-32 px-4 sm:px-8 border-t border-black/10">
        <div className="max-w-5xl mx-auto">
          
          <div className="text-center mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-[#C8102E] font-bold red-dot block mb-2">
              FINANCIAL COMPARISON
            </span>
            <h2 className="font-display text-4xl sm:text-7xl uppercase tracking-tight text-[#0A0A0A]">
              Direct Vs Through Us.
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              See the exact price difference when purchasing directly vs leveraging our agency buying power.
            </p>
          </div>

          {/* Desktop Table View */}
          <div className="hidden sm:block overflow-hidden rounded-[28px] border-2 border-black bg-white shadow-xl">
            <table className="w-full text-left text-xs font-mono">
              <thead className="bg-[#0A0A0A] text-white uppercase text-[11px] tracking-wider">
                <tr>
                  <th className="py-4 px-6">Deliverable / Service</th>
                  <th className="py-4 px-6 text-slate-400">Direct / Traditional</th>
                  <th className="py-4 px-6 text-[#C8102E]">Through Our Agency</th>
                  <th className="py-4 px-6 text-right text-emerald-400">You Save</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-black/10">
                {COMPARISON_ROWS.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50 transition-colors">
                    <td className="py-4 px-6 font-bold text-black font-sans text-sm">
                      {row.service}
                      <span className="block text-[11px] font-mono text-slate-500 font-normal mt-0.5">
                        {row.note}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-slate-500 line-through">
                      {row.directPrice}
                    </td>
                    <td className="py-4 px-6 font-bold text-[#C8102E] text-sm">
                      {row.throughUs}
                    </td>
                    <td className="py-4 px-6 text-right">
                      <span className="inline-block px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 font-black text-xs">
                        Save {row.savings}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Stacked Cards View */}
          <div className="sm:hidden space-y-4">
            {COMPARISON_ROWS.map((row, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-slate-50 border border-black/10 space-y-2 text-xs font-mono">
                <span className="font-bold text-black font-sans text-sm block">
                  {row.service}
                </span>
                <p className="text-[11px] text-slate-500 font-normal">
                  {row.note}
                </p>
                <div className="flex justify-between pt-2 border-t border-black/10 text-slate-500">
                  <span>Direct Price:</span>
                  <span className="line-through">{row.directPrice}</span>
                </div>
                <div className="flex justify-between font-bold text-black">
                  <span>Through Agency:</span>
                  <span className="text-[#C8102E] text-sm">{row.throughUs}</span>
                </div>
                <div className="pt-2 text-right">
                  <span className="inline-block px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 font-black text-xs">
                    You Save {row.savings}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ======================================================== */}
      {/* 6F. TESTIMONIALS SLIDER (DARK)                           */}
      {/* ======================================================== */}
      <section className="relative bg-[#0A0A0A] py-24 sm:py-32 px-4 sm:px-8 border-t border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          
          <span className="text-xs font-mono uppercase tracking-widest text-[#C8102E] red-dot block mb-3">
            VERIFIED STORE REVIEWS
          </span>
          <h2 className="font-display text-4xl sm:text-6xl uppercase tracking-tight text-white mb-12">
            What Clients Say.
          </h2>

          <div className="p-8 sm:p-12 rounded-[32px] bg-[#171919] border border-white/15 relative">
            <div className="flex items-center justify-center gap-1 text-[#C8102E] mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current" />
              ))}
            </div>

            <p className="font-sans text-base sm:text-xl text-slate-100 italic leading-relaxed mb-6 font-normal">
              "{TESTIMONIALS[activeTestimonial].quote}"
            </p>

            <span className="font-bold text-white text-base block">
              {TESTIMONIALS[activeTestimonial].name}
            </span>
            <span className="text-xs font-mono text-[#C8102E] block">
              {TESTIMONIALS[activeTestimonial].business} • {TESTIMONIALS[activeTestimonial].location}
            </span>

            {/* Slider Dots */}
            <div className="flex items-center justify-center gap-2 mt-8">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveTestimonial(i)}
                  className={`w-3 h-3 rounded-full transition-all cursor-pointer ${
                    activeTestimonial === i ? 'bg-[#C8102E] scale-125' : 'bg-white/20'
                  }`}
                  aria-label={`Slide ${i + 1}`}
                />
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ======================================================== */}
      {/* 6G. FAQ ACCORDION (WHITE)                                */}
      {/* ======================================================== */}
      <section className="section-white relative bg-white text-[#0A0A0A] py-24 sm:py-32 px-4 sm:px-8 border-t border-black/10">
        <div className="max-w-3xl mx-auto">
          
          <div className="text-center mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-[#C8102E] font-bold red-dot block mb-2">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="font-display text-4xl sm:text-6xl uppercase tracking-tight text-[#0A0A0A]">
              Everything You Need To Know.
            </h2>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div 
                  key={idx}
                  className="rounded-2xl border border-black/10 overflow-hidden bg-slate-50 transition-colors"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <span className="font-bold text-sm sm:text-base text-black font-sans">
                      {faq.q}
                    </span>
                    <span className="w-8 h-8 rounded-full bg-white border border-black/10 flex items-center justify-center shrink-0">
                      {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 text-xs sm:text-sm text-slate-700 leading-relaxed font-normal border-t border-black/5 pt-4">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ======================================================== */}
      {/* 6H. CONTACT INTAKE FORM (DARK)                           */}
      {/* ======================================================== */}
      <section id="contact" className="relative bg-[#0A0A0A] py-24 sm:py-32 px-4 sm:px-8 border-t border-white/10">
        <div className="max-w-2xl mx-auto">
          
          <div className="text-center mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-[#C8102E] red-dot block mb-2">
              DIRECT ONBOARDING
            </span>
            <h2 className="font-display text-4xl sm:text-7xl uppercase tracking-tight text-white mb-2">
              Book Your Slot.
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              Submit your business details and jump on a creative strategy call with our media team.
            </p>
          </div>

          <div className="p-8 sm:p-10 rounded-[32px] bg-[#171919] border border-white/15 shadow-2xl">
            {isSuccess ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#C8102E] text-white flex items-center justify-center mx-auto shadow-lg">
                  <Check className="w-8 h-8 stroke-[3]" />
                </div>
                <h3 className="font-display text-3xl uppercase text-white">
                  Inquiry Dispatched!
                </h3>
                <p className="text-xs text-slate-300 max-w-sm mx-auto">
                  Opening WhatsApp to connect directly with our campaign director...
                </p>
                <button
                  onClick={() => setIsSuccess(false)}
                  className="px-6 py-2 rounded-full bg-white/10 text-xs font-mono text-white"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleContactSubmit} className="space-y-4 text-xs font-mono">
                <div>
                  <label className="block text-slate-300 uppercase tracking-wider mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Vikram Singhania"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/15 text-white focus:outline-none focus:border-[#C8102E]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-slate-300 uppercase tracking-wider mb-1">
                      Business / Store Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Apex Luxury Motors"
                      value={form.business}
                      onChange={(e) => setForm({ ...form, business: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/15 text-white focus:outline-none focus:border-[#C8102E]"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-300 uppercase tracking-wider mb-1">
                      WhatsApp Phone *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="+91 98765 43210"
                      value={form.whatsapp}
                      onChange={(e) => setForm({ ...form, whatsapp: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/15 text-white focus:outline-none focus:border-[#C8102E]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-slate-300 uppercase tracking-wider mb-1">
                      Interested Plan
                    </label>
                    <select
                      value={form.service}
                      onChange={(e) => setForm({ ...form, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/15 text-white focus:outline-none focus:border-[#C8102E]"
                    >
                      <option value="15 Reels Performance Batch (₹6,000)">15 Reels Ad Package (₹6,000)</option>
                      <option value="15 Reels Video Production (₹6,000)">15 Reels Video Production (₹6,000)</option>
                      <option value="Full Power Viral Combo (₹10,500)">Full Power Combo (₹10,500)</option>
                      <option value="City Top 3 Pages Collab">City Top 3 Pages Collab</option>
                      <option value="Starter Ads (₹3,000)">Starter Ads (₹3,000)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-slate-300 uppercase tracking-wider mb-1">
                      Monthly Ad Budget
                    </label>
                    <select
                      value={form.budget}
                      onChange={(e) => setForm({ ...form, budget: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/15 text-white focus:outline-none focus:border-[#C8102E]"
                    >
                      <option value="₹6,000 - ₹12,000">₹6,000 - ₹12,000</option>
                      <option value="₹12,000 - ₹25,000">₹12,000 - ₹25,000</option>
                      <option value="₹25,000 - ₹50,000+">₹25,000 - ₹50,000+</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-slate-300 uppercase tracking-wider mb-1">
                    Your Goal / Location
                  </label>
                  <textarea
                    rows={3}
                    placeholder="We want local store walk-ins within 6km radius..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/15 text-white focus:outline-none focus:border-[#C8102E]"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-full bg-[#C8102E] hover:bg-[#a50b24] text-white font-mono text-xs font-bold uppercase tracking-widest text-center shadow-[0_0_25px_rgba(200,16,46,0.5)] transition-all cursor-pointer hover:scale-102 mt-4"
                >
                  {isSubmitting ? 'Booking Slot...' : 'Submit & Connect on WhatsApp ↗'}
                </button>
              </form>
            )}
          </div>

        </div>
      </section>

    </div>
  );
};
