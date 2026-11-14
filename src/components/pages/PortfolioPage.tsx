import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { CreativeShowcase } from '../sections/CreativeShowcase';
import { CreativeItem } from '../../types';
import { Badge } from '../common/Badge';
import { useApp } from '../../context/ThemeLanguageContext';
import { AGENCY_CONFIG } from '../../data/agencyData';
import { 
  Share2, Copy, Check, MessageCircle, Star, Users, Layers, 
  Sparkles, CheckCircle2, ArrowRight, ShieldCheck, Video, 
  Target, Rocket, HeartHandshake, Building2, Store, Car, Utensils
} from 'lucide-react';

interface PortfolioPageProps {
  onSelectCreative: (item: CreativeItem) => void;
}

export const PortfolioPage: React.FC<PortfolioPageProps> = ({ onSelectCreative }) => {
  const { t, language, setCurrentPage } = useApp();
  const [copied, setCopied] = useState(false);

  // Load custom reviews added via admin panel
  const [customReviews, setCustomReviews] = useState<any[]>([]);

  useEffect(() => {
    try {
      const saved = localStorage.getItem('agency_custom_reviews');
      if (saved) {
        setCustomReviews(JSON.parse(saved));
      }
    } catch (e) {}
  }, []);

  const handleSharePortfolio = () => {
    const shareText = language === 'hi'
      ? `👋 *नमस्ते! यह रहा हमारा ऑफिशियल डिजिटल मार्केटिंग पोर्टफोलियो:*\n\nहमारे सभी पैकेजेस, टॉप-रेटेड रील्स के रिजल्ट्स, क्लाइंट रिव्यूज और काम करने का तरीका यहाँ देखें:\n\n👉 ${window.location.origin}/#portfolio\n\n- *${AGENCY_CONFIG.name}*`
      : `👋 *Hello! Here is our official Digital Marketing Portfolio & Pitch Hub:*\n\nExplore our transparent packages, top-rated ad reels, verified client reviews, team and systems here:\n\n👉 ${window.location.origin}/#portfolio\n\n- *${AGENCY_CONFIG.name}*`;

    const waUrl = `https://wa.me/?text=${encodeURIComponent(shareText)}`;
    window.open(waUrl, '_blank');
  };

  const handleCopyLink = () => {
    const url = `${window.location.origin}/#portfolio`;
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  // Default verified reviews
  const defaultReviews = [
    {
      id: "rev-1",
      name: "Rohit Bansal",
      business: language === 'hi' ? "रॉयल क्लॉथिंग & मेन्सवियर (रिटेल स्टोर)" : "Royal Clothing & Menswear (Retail Store)",
      category: "Retail",
      rating: 5,
      deliverable: language === 'hi' ? "लोकल 5km फुटफॉल व वॉक-इन्स कैंपेन" : "Local 5km Footfall & Store Walk-ins",
      result: language === 'hi' ? "3 हफ्तों में 60+ नए वॉक-इन्स" : "60+ Store Walk-ins in 3 Weeks",
      quote: language === 'hi'
        ? "पहले हम खुद से बूस्ट पोस्ट करते थे और केवल लाइक्स आते थे। इनकी टीम ने 5km रेडियस में एड्स मैनेजर से कैंपेन चलाया जिससे सीधे लोकल ग्राहक दुकान पर आने लगे।"
        : "Earlier we boosted posts ourselves and got only vanity likes. Their team ran structured Ads Manager radius campaigns, bringing genuine walk-in buyers to our store."
    },
    {
      id: "rev-2",
      name: "Sandeep Verma",
      business: language === 'hi' ? "एपेक्स ऑटो हब (प्री-ओन्ड कार डीलरशिप)" : "Apex Auto Hub (Pre-Owned Car Dealership)",
      category: "Automobile",
      rating: 5,
      deliverable: language === 'hi' ? "वेरिफाइड टेस्ट ड्राइव व व्हाट्सएप इंक्वायरी" : "Pre-Qualified Test Drive Inquiries",
      result: language === 'hi' ? "28 वेरिफाइड खरीदारों के फोन नंबर" : "28 Verified Buyer WhatsApp Leads",
      quote: language === 'hi'
        ? "कार बेचने में सबसे बड़ी समस्या फर्जी नंबरों की होती है। इनके इंस्टेंट फॉर्म्स में जरूरी सवाल पूछने की वजह से सिर्फ वही लोग व्हाट्सएप पर आए जिनका असली बजट था।"
        : "In car sales, fake numbers are the biggest waste of time. Their pre-qualifying questionnaire filtered out spam so we only spoke with serious, ready buyers."
    },
    {
      id: "rev-3",
      name: "Chef Aman Oberoi",
      business: language === 'hi' ? "द बेसिल लीफ बिस्ट्रो & कैफे" : "The Basil Leaf Bistro & Cafe",
      category: "Restaurant",
      rating: 5,
      deliverable: language === 'hi' ? "वीकेंड टेबल बुकिंग्स व डायरेक्ट ऑर्डर्स" : "Weekend Table Footfall & Dining Bookings",
      result: language === 'hi' ? "वीकेंड पर 100% टेबल ऑक्यूपेंसी" : "100% Weekend Table Occupancy",
      quote: language === 'hi'
        ? "सिर्फ ₹3,000 के प्लान से हमने शुरुआत की। इनके वीडियो हुक ने आसपास के कॉलेज और ऑफिस क्राउड को ऐसा खींचा कि शनिवार-रविवार पूरी सीटें बुक रहने लगीं।"
        : "We started with the ₹3,000 starter plan. Their video hook resonated so well with nearby foodies that our weekend tables were completely booked out."
    }
  ];

  const allReviews = [...customReviews, ...defaultReviews];

  // Core team members
  const teamMembers = [
    {
      name: "[Founder & Media Buyer]",
      role: language === 'hi' ? "फाउंडर व लीड मीडिया बायर" : "Founder & Lead Media Buyer",
      specialty: language === 'hi' ? "मेटा एड्स मैनेजर, CBO बिडिंग व फनल आर्किटेक्चर" : "Meta Ads Manager, CBO Bidding & Conversion Funnels",
      avatarColor: "from-[#3C147A] to-[#60A5FA]"
    },
    {
      name: "[Creative Lead]",
      role: language === 'hi' ? "क्रिएटिव डायरेक्टर व हुक राइटर" : "Creative Director & Viral Hook Specialist",
      specialty: language === 'hi' ? "3-सेकंड पैटर्न-इंटरप्ट, 9:16 रील्स व काइनेटिक टेक्स्ट" : "3-Sec Pattern Interrupts, 9:16 Reels & Direct Response",
      avatarColor: "from-[#7C3AED] to-[#D8FC38]"
    },
    {
      name: "[Campaign Operations Lead]",
      role: language === 'hi' ? "कैंपेन ऑपरेशन्स व ट्रैकिंग हेड" : "Campaign Operations & Tracking Lead",
      specialty: language === 'hi' ? "पिक्सल CAPI, व्हाट्सएप ऑटोमेशन व साप्ताहिक रिपोर्टिंग" : "Pixel CAPI, WhatsApp Lead Routing & KPI Analytics",
      avatarColor: "from-[#2563EB] to-[#10B981]"
    }
  ];

  return (
    <div className="pt-24 sm:pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-24">
      
      {/* 1. Official Pitch Presentation Header */}
      <div className="text-center max-w-3xl mx-auto">
        <Badge variant="purple" className="mb-4">
          {t.portfolioPitch.badge}
        </Badge>

        <h1 className="text-3xl sm:text-5xl font-extrabold text-[#17092F] dark:text-white tracking-tight leading-[1.15] mb-5">
          {t.portfolioPitch.heading}
        </h1>

        <p className="text-base sm:text-lg text-[#685984] dark:text-slate-300 leading-relaxed font-normal mb-8">
          {t.portfolioPitch.subheading}
        </p>

        {/* Quick Share Dock */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={handleSharePortfolio}
            className="btn-lime py-3.5 px-7 text-xs font-bold uppercase tracking-wider inline-flex items-center gap-2 cursor-pointer shadow-lg"
          >
            <Share2 className="w-4 h-4" />
            <span>{t.portfolioPitch.shareBtn}</span>
          </button>

          <button
            onClick={handleCopyLink}
            className="card-white py-3.5 px-6 text-xs font-bold inline-flex items-center gap-2 cursor-pointer transition-all hover:border-[#3C147A] dark:hover:border-[#D8FC38]"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4 text-[#7C3AED] dark:text-[#D8FC38]" />}
            <span>{copied ? t.portfolioPitch.copiedText : t.portfolioPitch.copyLinkBtn}</span>
          </button>

          <button
            onClick={() => setCurrentPage('order')}
            className="btn-purple py-3.5 px-6 text-xs font-bold uppercase tracking-wider inline-flex items-center gap-2 cursor-pointer"
          >
            <span>{language === 'hi' ? 'सीधे फॉर्म भरें' : 'Book Form'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* 2. Top-Rated Reels & Video Showcase Section */}
      <div>
        <CreativeShowcase onSelectCreative={onSelectCreative} />
      </div>

      {/* 3. What We Do & Our Services (हमारा काम क्या है) */}
      <div className="pt-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="badge-lime-pill text-xs mb-2">
            {language === 'hi' ? 'हमारा काम क्या है' : 'WHAT WE DO'}
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#17092F] dark:text-white">
            {language === 'hi' ? 'हमारी मुख्य सेवाएं व क्षमताएं' : 'Our Core Marketing Capabilities'}
          </h2>
          <p className="text-xs sm:text-sm text-[#685984] dark:text-slate-400 mt-2">
            {language === 'hi' ? 'लोकल बिजनेस को फोन कॉल्स, वॉक-इन्स और बिक्री दिलाने के लिए तैयार किए गए सॉल्यूशंस' : 'Engineered specifically for local retail, restaurants, and dealerships to acquire verified customers'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="card-white p-6 rounded-3xl flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#EDE5FA] dark:bg-white/10 flex items-center justify-center mb-5 text-[#3C147A] dark:text-[#D8FC38]">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-[#17092F] dark:text-white mb-2">
                {language === 'hi' ? 'मेटा परफॉरमेंस एड्स' : 'Meta Performance Ads'}
              </h3>
              <p className="text-xs text-[#685984] dark:text-slate-300 leading-relaxed">
                {language === 'hi' ? 'फेसबुक और इंस्टाग्राम पर केवल खरीदारों को टारगेट करने वाले विज्ञापन, जो सीधी लीड्स लाते हैं।' : 'Precision campaigns designed for direct WhatsApp leads, phone inquiries, and store visits.'}
              </p>
            </div>
            <div className="pt-4 border-t border-[#3C147A]/10 dark:border-white/10 mt-6 text-[11px] font-mono font-bold text-[#3C147A] dark:text-[#D8FC38]">
              Ads Manager Architecture
            </div>
          </div>

          <div className="card-white p-6 rounded-3xl flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#EDE5FA] dark:bg-white/10 flex items-center justify-center mb-5 text-[#7C3AED] dark:text-[#60A5FA]">
                <Video className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-[#17092F] dark:text-white mb-2">
                {language === 'hi' ? '9:16 वायरल रील्स प्रोडक्शन' : '9:16 Viral Reels Shoot'}
              </h3>
              <p className="text-xs text-[#685984] dark:text-slate-300 leading-relaxed">
                {language === 'hi' ? '3-सेकंड पैटर्न-इंटरप्ट, AI हुक्स, सबटाइटल्स और मोबाइल फीड के लिए आकर्षक एडिटिंग।' : '15 high-retention strategic reels with viral hook copywriting, kinetic subtitles, and color grading.'}
              </p>
            </div>
            <div className="pt-4 border-t border-[#3C147A]/10 dark:border-white/10 mt-6 text-[11px] font-mono font-bold text-[#3C147A] dark:text-[#D8FC38]">
              High CTR Formats
            </div>
          </div>

          <div className="card-white p-6 rounded-3xl flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#EDE5FA] dark:bg-white/10 flex items-center justify-center mb-5 text-[#3C147A] dark:text-[#34D399]">
                <Store className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-[#17092F] dark:text-white mb-2">
                {language === 'hi' ? 'हाइपर-लोकल 5km रेडियस' : 'Hyper-Local Geofencing'}
              </h3>
              <p className="text-xs text-[#685984] dark:text-slate-300 leading-relaxed">
                {language === 'hi' ? 'आपकी दुकान, रेस्टोरेंट या कार शोरूम के 5 से 10 किमी के भीतर रहने वाले असली स्थानीय ग्राहकों को टारगेट करना।' : 'Pinpointing ads strictly within 5-10km radius of your physical location to eliminate wasted spend.'}
              </p>
            </div>
            <div className="pt-4 border-t border-[#3C147A]/10 dark:border-white/10 mt-6 text-[11px] font-mono font-bold text-[#3C147A] dark:text-[#D8FC38]">
              Zero Ad Budget Waste
            </div>
          </div>

          <div className="card-white p-6 rounded-3xl flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#EDE5FA] dark:bg-white/10 flex items-center justify-center mb-5 text-[#7C3AED] dark:text-[#D8FC38]">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-[#17092F] dark:text-white mb-2">
                {language === 'hi' ? 'प्री-क्वालिफाइड लीड फॉर्म्स' : 'Lead Qualification'}
              </h3>
              <p className="text-xs text-[#685984] dark:text-slate-300 leading-relaxed">
                {language === 'hi' ? 'कस्टम सवाल पूछकर फर्जी इंक्वायरी और गलत नंबरों को हटाना ताकि आपका समय सिर्फ असली ग्राहकों पर लगे।' : 'Filtering out non-serious inquiries and wrong numbers with mandatory budget and intent questions.'}
              </p>
            </div>
            <div className="pt-4 border-t border-[#3C147A]/10 dark:border-white/10 mt-6 text-[11px] font-mono font-bold text-[#3C147A] dark:text-[#D8FC38]">
              Verified WhatsApp Numbers
            </div>
          </div>
        </div>
      </div>

      {/* 4. How We Work & Our Systems (हम काम कैसे करते हैं) */}
      <div className="card-purple p-8 sm:p-14 rounded-[36px] shadow-2xl">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="badge-lime-pill mb-2">
            {language === 'hi' ? 'हम काम कैसे करते हैं' : 'OUR SYSTEMATIC PROCESS'}
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
            {language === 'hi' ? 'हमारा 4-चरणीय पारदर्शी सिस्टम' : 'Our 4-Step Advertising System'}
          </h2>
          <p className="text-xs sm:text-sm text-purple-100 dark:text-slate-300 mt-2">
            {language === 'hi' ? 'शुरुआत से लेकर लाइव लीड्स तक पूरी तरह पारदर्शी' : 'From first discovery call to live daily inquiries on your phone'}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          <div className="p-5 rounded-2xl bg-white/10 border border-white/15">
            <span className="text-2xl font-black font-mono text-[#D8FC38] block mb-2">01</span>
            <h4 className="text-base font-bold text-white mb-1">
              {language === 'hi' ? 'बिजनेस व ऑडियंस ऑडिट' : 'Discovery & Audit'}
            </h4>
            <p className="text-xs text-purple-100 dark:text-slate-300 leading-relaxed">
              {language === 'hi' ? 'हम आपके मुनाफे का मार्जिन और आपके शहर में सही खरीदारों की लोकेशन तय करते हैं।' : 'We analyze your margins, competitors, and map out your target local radius.'}
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white/10 border border-white/15">
            <span className="text-2xl font-black font-mono text-[#D8FC38] block mb-2">02</span>
            <h4 className="text-base font-bold text-white mb-1">
              {language === 'hi' ? 'वायरल हुक्स व रील्स' : 'Hooks & Scripting'}
            </h4>
            <p className="text-xs text-purple-100 dark:text-slate-300 leading-relaxed">
              {language === 'hi' ? '3-सेकंड के स्क्रॉल-स्टॉपर हुक्स और आकर्षक वीडियो स्क्रिप्ट तैयार करते हैं।' : 'Crafting 3-second pattern interrupts that make local customers stop scrolling.'}
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white/10 border border-white/15">
            <span className="text-2xl font-black font-mono text-[#D8FC38] block mb-2">03</span>
            <h4 className="text-base font-bold text-white mb-1">
              {language === 'hi' ? 'एड्स मैनेजर लॉन्च' : 'Ads Manager Launch'}
            </h4>
            <p className="text-xs text-purple-100 dark:text-slate-300 leading-relaxed">
              {language === 'hi' ? 'पिक्सल, लीड फॉर्म और सीधी व्हाट्सएप रूटिंग के साथ विज्ञापन लाइव करते हैं।' : 'Configuring Pixel, lead forms, and direct WhatsApp routing for instant alerts.'}
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white/10 border border-white/15">
            <span className="text-2xl font-black font-mono text-[#D8FC38] block mb-2">04</span>
            <h4 className="text-base font-bold text-white mb-1">
              {language === 'hi' ? 'साप्ताहिक व्हाट्सएप रिपोर्ट' : 'Daily Tuning & KPI'}
            </h4>
            <p className="text-xs text-purple-100 dark:text-slate-300 leading-relaxed">
              {language === 'hi' ? 'कमजोर वीडियोज को रोकना और हर हफ्ते व्हाट्सएप पर खर्च व लीड्स की साफ रिपोर्ट देना।' : 'Pruning fatigue daily and sending weekly spent-rupees vs leads summaries on WhatsApp.'}
            </p>
          </div>
        </div>
      </div>

      {/* 5. Client Reviews & Testimonials (कस्टमर व क्लाइंट रिव्यूज) */}
      <div>
        <div className="text-center max-w-2xl mx-auto mb-14">
          <Badge variant="purple" className="mb-2">
            {t.portfolioPitch.reviewsSectionTitle}
          </Badge>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#17092F] dark:text-white">
            {language === 'hi' ? 'क्लाइंट्स का हमारे काम पर अनुभव' : 'Verified Client Feedback & Outcomes'}
          </h2>
          <p className="text-xs sm:text-sm text-[#685984] dark:text-slate-400 mt-2">
            {t.portfolioPitch.reviewsSectionSub}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {allReviews.map((rev, idx) => (
            <motion.div
              key={rev.id || idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="card-white p-7 sm:p-8 rounded-[32px] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(rev.rating || 5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="badge-lime-pill text-[10px] py-0.5 px-2">
                    {rev.category || "Verified Client"}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-[#17092F] dark:text-slate-200 leading-relaxed mb-6 font-normal italic">
                  "{rev.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-[#3C147A]/10 dark:border-white/10">
                <div className="text-sm font-bold text-[#17092F] dark:text-white">
                  {rev.name}
                </div>
                <div className="text-xs text-[#685984] dark:text-slate-400 font-medium mb-2">
                  {rev.business}
                </div>
                <div className="inline-flex items-center gap-1.5 text-[11px] font-mono font-bold text-emerald-700 dark:text-[#D8FC38] bg-emerald-100 dark:bg-emerald-950/50 px-2.5 py-0.5 rounded-full">
                  <CheckCircle2 className="w-3 h-3" />
                  <span>{rev.result}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 6. Who We Are & Our Team (हम कौन हैं, हमारी टीम) */}
      <div className="pt-4">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <Badge variant="purple" className="mb-2">
            {t.portfolioPitch.teamSectionTitle}
          </Badge>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#17092F] dark:text-white">
            {language === 'hi' ? 'हम कौन-कौन हैं और हमारी टीम' : 'Who We Are & Leadership Team'}
          </h2>
          <p className="text-xs sm:text-sm text-[#685984] dark:text-slate-400 mt-2">
            {t.portfolioPitch.teamSectionSub}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, idx) => (
            <div key={idx} className="card-white p-7 rounded-[32px] text-center flex flex-col justify-between">
              <div>
                <div className={`w-20 h-20 rounded-full mx-auto mb-5 bg-gradient-to-tr ${member.avatarColor} p-1 shadow-lg`}>
                  <div className="w-full h-full rounded-full bg-[#14062B] dark:bg-[#0E1528] flex items-center justify-center text-white font-black text-lg">
                    {idx === 0 ? "01" : idx === 1 ? "02" : "03"}
                  </div>
                </div>

                <h3 className="text-lg font-bold text-[#17092F] dark:text-white mb-1">
                  {member.name}
                </h3>
                <span className="text-xs font-mono font-bold text-[#7C3AED] dark:text-[#D8FC38] uppercase block mb-3">
                  {member.role}
                </span>
                <p className="text-xs text-[#685984] dark:text-slate-300 leading-relaxed font-normal">
                  {member.specialty}
                </p>
              </div>

              <div className="pt-4 border-t border-[#3C147A]/10 dark:border-white/10 mt-6 text-[11px] font-mono text-[#685984] dark:text-slate-400 font-bold">
                100% Dedicated Oversight
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 7. Client Portal Access Banner */}
      <div className="card-white p-8 sm:p-12 rounded-[36px] border-2 border-white/15 text-center bg-gradient-to-r from-[#17092F] to-[#0D1426] text-white shadow-2xl">
        <div className="w-14 h-14 rounded-2xl bg-[#D8FC38] text-[#182C05] flex items-center justify-center mx-auto mb-4 font-bold shadow-lg">
          <ShieldCheck className="w-7 h-7" />
        </div>
        <span className="text-xs font-mono font-bold uppercase text-[#D8FC38] tracking-widest block mb-2">
          CLIENT CAMPAIGN ACCESS
        </span>
        <h3 className="text-2xl sm:text-3xl font-black mb-3">
          Existing Agency Client?
        </h3>
        <p className="text-xs sm:text-sm text-slate-300 max-w-lg mx-auto mb-6 leading-relaxed">
          Log in to your private client portal using your Client Access ID and Password to review your purchased plan, delivered reels, and live Meta ad telemetry.
        </p>
        <button
          onClick={() => setCurrentPage('customer')}
          className="px-8 py-3.5 rounded-full bg-[#D8FC38] text-[#182C05] text-xs font-black uppercase tracking-wider inline-flex items-center gap-2 cursor-pointer shadow-[0_0_25px_rgba(216,252,56,0.4)] hover:scale-105 transition-all"
        >
          <span>Open Client Portal</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {/* 8. Bottom WhatsApp CTA for Visiting Client */}
      <div className="text-center max-w-2xl mx-auto pt-6">
        <h3 className="text-xl sm:text-2xl font-black text-[#17092F] dark:text-white mb-3">
          {language === 'hi' ? 'क्या आप अपने बिजनेस के लिए विज्ञापन शुरू करना चाहते हैं?' : 'Ready To Launch Your Targeted Ad Campaign?'}
        </h3>
        <p className="text-xs sm:text-sm text-[#685984] dark:text-slate-300 mb-6">
          {language === 'hi' ? 'सीधे हमारे व्हाट्सएप पर बात करें और अपने बिजनेस के लिए बेस्ट स्ट्रेटेजी डिस्कस करें।' : 'Speak directly with our media buyers on WhatsApp to discuss your local business campaign.'}
        </p>

        <a
          href={`https://wa.me/${AGENCY_CONFIG.whatsappNumber.replace('+', '')}?text=${encodeURIComponent(
            language === 'hi'
              ? `नमस्ते ${AGENCY_CONFIG.name}, मैंने आपका डिजिटल मार्केटिंग पोर्टफोलियो देखा। मैं अपने बिजनेस के लिए विज्ञापन शुरू करना चाहता हूँ।`
              : `Hi ${AGENCY_CONFIG.name}, I reviewed your digital marketing portfolio. I want to discuss running Meta Ads for my business.`
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-lime py-4 px-9 text-xs font-black uppercase tracking-wider inline-flex items-center gap-2 shadow-xl"
        >
          <MessageCircle className="w-4 h-4" />
          <span>{language === 'hi' ? 'व्हाट्सएप पर सीधी बात करें' : 'Start WhatsApp Conversation'}</span>
        </a>
      </div>

    </div>
  );
};
