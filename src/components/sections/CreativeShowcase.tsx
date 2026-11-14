import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, Volume2, VolumeX, Eye, Sparkles } from 'lucide-react';
import { CREATIVE_SHOWCASE_ITEMS } from '../../data/agencyData';
import { CreativeItem } from '../../types';
import { Badge } from '../common/Badge';
import { useApp } from '../../context/ThemeLanguageContext';

interface CreativeShowcaseProps {
  onSelectCreative: (item: CreativeItem) => void;
}

const PhoneReelMockup: React.FC<{ item: CreativeItem; onOpen: () => void }> = ({ item, onOpen }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
    }
  };

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
      setIsPlaying(false);
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col items-center group"
    >
      {/* REALISTIC SMARTPHONE MOCKUP FRAME */}
      <div
        onClick={onOpen}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="relative w-[260px] sm:w-[280px] aspect-[9/18.5] rounded-[48px] p-2.5 bg-gradient-to-b from-[#2d3139] via-[#1a1d24] to-[#111317] dark:from-[#3a4150] dark:via-[#1c212c] dark:to-[#0e121a] shadow-[0_20px_50px_rgba(0,0,0,0.35),0_0_0_1px_rgba(255,255,255,0.15)] hover:shadow-[0_25px_65px_rgba(60,20,122,0.35)] dark:hover:shadow-[0_25px_65px_rgba(59,130,246,0.3)] transition-all duration-300 cursor-pointer transform hover:-translate-y-2"
      >
        {/* Phone Outer Edge Highlights (Glass glare & side button indentations) */}
        <div className="absolute -left-[3px] top-24 w-[3px] h-9 bg-slate-600 rounded-l-sm opacity-60" />
        <div className="absolute -left-[3px] top-36 w-[3px] h-9 bg-slate-600 rounded-l-sm opacity-60" />
        <div className="absolute -right-[3px] top-28 w-[3px] h-14 bg-slate-600 rounded-r-sm opacity-60" />

        {/* INNER SCREEN */}
        <div className="relative w-full h-full rounded-[38px] overflow-hidden bg-black flex flex-col justify-between">
          
          {/* Top Dynamic Island / Camera Notch */}
          <div className="absolute top-2 left-1/2 -translate-x-1/2 z-30 flex items-center justify-center">
            <div className="w-24 h-5 bg-black rounded-full border border-white/10 flex items-center justify-between px-2.5 shadow-md">
              <div className="w-2 h-2 rounded-full bg-[#1c1c1e] border border-white/20" />
              <div className="w-8 h-1 bg-[#2c2c2e] rounded-full" />
            </div>
          </div>

          {/* Video / Poster */}
          <div className="absolute inset-0 z-0">
            <img
              src={item.thumbnailUrl}
              alt={item.title}
              className={`w-full h-full object-cover transition-opacity duration-300 ${
                isPlaying ? 'opacity-0' : 'opacity-100'
              }`}
              loading="lazy"
            />
            <video
              ref={videoRef}
              src={item.videoUrl}
              playsInline
              muted={isMuted}
              loop
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
                isPlaying ? 'opacity-100' : 'opacity-0'
              }`}
            />
          </div>

          {/* Top Status Bar Inside Screen */}
          <div className="relative z-20 pt-8 px-4 flex items-center justify-between pointer-events-none">
            <span className="text-[10px] font-bold text-white tracking-wider drop-shadow-md">
              9:41
            </span>
            <span className="text-[9px] font-mono font-bold bg-[#D8FC38] text-[#182C05] px-2 py-0.5 rounded-full shadow-sm">
              PROVEN AD
            </span>
          </div>

          {/* Center Play Indicator (Hidden while playing) */}
          <div
            onClick={togglePlay}
            className={`absolute inset-0 z-20 flex items-center justify-center transition-opacity duration-300 ${
              isPlaying ? 'opacity-0 hover:opacity-100' : 'opacity-100'
            }`}
          >
            <button
              type="button"
              className="w-12 h-12 rounded-full bg-white/90 text-black flex items-center justify-center shadow-lg hover:scale-110 transition-transform cursor-pointer"
            >
              {isPlaying ? (
                <Pause className="w-5 h-5 fill-black" />
              ) : (
                <Play className="w-5 h-5 fill-black translate-x-0.5" />
              )}
            </button>
          </div>

          {/* Bottom Screen Content (Clean UI: No hearts/likes clutter, only clean ad hook & audio) */}
          <div className="relative z-20 p-3.5 pb-4 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex flex-col gap-2">
            
            {/* Business Handle & Audio Tag */}
            <div className="flex items-center justify-between text-white text-[11px] font-bold">
              <span className="truncate max-w-[140px] drop-shadow-md">
                {item.handle}
              </span>
              <button
                type="button"
                onClick={toggleMute}
                className="w-6 h-6 rounded-full bg-black/60 border border-white/20 flex items-center justify-center text-white cursor-pointer hover:bg-black/80 transition-colors"
                title={isMuted ? "Unmute" : "Mute"}
              >
                {isMuted ? <VolumeX className="w-3 h-3" /> : <Volume2 className="w-3 h-3 text-[#D8FC38]" />}
              </button>
            </div>

            {/* Direct 3-Sec Hook Angle */}
            <div className="bg-black/75 backdrop-blur-md border border-white/15 p-2 rounded-xl text-left">
              <span className="text-[9px] font-mono text-[#D8FC38] block uppercase font-bold tracking-wider">
                3-SEC HOOK
              </span>
              <p className="text-[10px] font-medium text-white leading-snug line-clamp-2">
                "{item.hookText}"
              </p>
            </div>

            {/* Bottom Home-Indicator Bar */}
            <div className="w-24 h-1 bg-white/60 rounded-full mx-auto mt-1" />
          </div>

        </div>
      </div>

      {/* CARD METADATA (Neat & Clean Below The Mockup) */}
      <div className="w-[260px] sm:w-[280px] mt-4 text-center">
        <div className="flex items-center justify-center gap-2 mb-1.5">
          <span className="text-[11px] font-mono font-bold uppercase text-[#3C147A] dark:text-[#D8FC38]">
            {item.categoryLabel}
          </span>
          <span className="text-[10px] font-bold bg-[#EDE5FA] dark:bg-white/10 text-[#17092F] dark:text-white px-2 py-0.5 rounded-full">
            {item.metrics}
          </span>
        </div>

        <h3 className="text-xs sm:text-sm font-bold text-[#17092F] dark:text-white leading-tight mb-1 line-clamp-1">
          {item.title}
        </h3>

        <button
          onClick={onOpen}
          className="inline-flex items-center gap-1 text-[11px] font-bold text-[#3C147A] dark:text-blue-400 hover:underline cursor-pointer mt-1"
        >
          <span>View Script & Angles</span>
          <Eye className="w-3 h-3" />
        </button>
      </div>

    </motion.div>
  );
};

export const CreativeShowcase: React.FC<CreativeShowcaseProps> = ({ onSelectCreative }) => {
  const { language } = useApp();
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [customReels, setCustomReels] = useState<CreativeItem[]>([]);

  useEffect(() => {
    try {
      const saved = localStorage.getItem('agency_custom_reels');
      if (saved) {
        setCustomReels(JSON.parse(saved));
      }
    } catch (e) {}
  }, []);

  const allItems = [...customReels, ...CREATIVE_SHOWCASE_ITEMS];

  const categories = [
    'All',
    'Instagram Reel Ads',
    'Product Advertising',
    'Local Business Ads',
    'Lead Generation Creatives',
    'Promotional Videos'
  ];

  const filteredItems = activeCategory === 'All'
    ? allItems
    : allItems.filter(item => item.categoryLabel === activeCategory);

  return (
    <section id="portfolio" className="relative py-20 sm:py-28 bg-[#F8F9FC] dark:bg-[#07090E] bg-grid-oversight border-y border-[#3C147A]/10 dark:border-white/10 transition-colors duration-300 overflow-hidden">
      
      {/* Background glow in dark mode */}
      <div className="absolute top-1/2 right-10 w-[550px] h-[550px] bg-purple-600/10 dark:bg-blue-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Badge variant="purple" className="mb-4">
            {language === 'hi' ? 'स्मार्टफोन रील मॉकअप शोकेस' : 'SMARTPHONE REEL MOCKUP SHOWCASE'}
          </Badge>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#17092F] dark:text-white tracking-tight leading-tight mb-4">
            {language === 'hi' ? 'मोबाइल स्क्रीन पर ऐसे दिखते हैं' : 'How Your Ads Look'} <br />
            <span className="text-[#3C147A] dark:text-[#D8FC38]">
              {language === 'hi' ? 'हमारे हाई-कन्वर्टिंग रील्स।' : 'On Real Mobile Screens.'}
            </span>
          </h2>

          <p className="text-sm sm:text-base text-[#685984] dark:text-slate-300 leading-relaxed font-normal max-w-2xl mx-auto">
            {language === 'hi'
              ? 'मोबाइल मॉकअप पर होवर या क्लिक करके देखें कि कैसे 3-सेकंड हुक्स और डायनामिक एडिटिंग सीधे कस्टमर्स का ध्यान खींचते हैं।'
              : 'Hover or tap any mobile mockup to preview the high-retention 9:16 vertical video and see how scroll-stopping hooks grab immediate attention.'}
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer ${
                activeCategory === cat
                  ? 'bg-[#3C147A] dark:bg-[#D8FC38] text-white dark:text-[#182C05] shadow-lg'
                  : 'bg-white dark:bg-white/10 text-[#685984] dark:text-slate-300 hover:text-[#17092F] dark:hover:text-white border border-[#3C147A]/10 dark:border-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Sleek Smartphone Mockups Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 justify-items-center">
          <AnimatePresence>
            {filteredItems.map((item) => (
              <PhoneReelMockup
                key={item.id}
                item={item}
                onOpen={() => onSelectCreative(item)}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Simple Bottom Tip */}
        <div className="mt-12 text-center text-xs font-mono text-[#685984] dark:text-slate-400 border-t border-[#3C147A]/10 dark:border-white/10 pt-6 max-w-xl mx-auto font-medium">
          {language === 'hi'
            ? '💡 मोबाइल पर टैप या होवर करके वीडियो चलाएं। पूरी स्क्रिप्ट देखने के लिए कार्ड पर क्लिक करें।'
            : '💡 Tap or hover over any phone mockup to stream the video. Click to inspect the complete script framework.'}
        </div>

      </div>
    </section>
  );
};
