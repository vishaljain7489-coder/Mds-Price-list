import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Play, Pause, Volume2, VolumeX, CheckCircle2, Heart, MessageCircle, Share2, Music, Sparkles } from 'lucide-react';
import { CreativeItem } from '../../types';

interface VideoModalProps {
  creative: CreativeItem | null;
  onClose: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({ creative, onClose }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  if (!creative) return null;

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-xl"
        />

        {/* Modal Window Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 20 }}
          className="relative w-full max-w-4xl glass-card-glow rounded-[36px] p-6 sm:p-8 shadow-2xl overflow-hidden z-10 my-auto"
        >
          {/* Subtle background glow */}
          <div className="absolute -top-24 -right-24 w-60 h-60 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full glass-pill text-slate-400 hover:text-white transition-colors z-20"
            aria-label="Close Preview"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Left: 9:16 Vertical Mobile Reel Player */}
            <div className="md:col-span-5 flex justify-center">
              <div className="relative w-full max-w-[280px] aspect-[9/16] rounded-[28px] overflow-hidden border-2 border-white/20 shadow-2xl bg-black group">
                
                {/* HTML5 Video Element */}
                <video
                  ref={videoRef}
                  src={creative.videoUrl}
                  autoPlay
                  loop
                  playsInline
                  muted={isMuted}
                  className="w-full h-full object-cover"
                />

                {/* Video Controls Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50 pointer-events-none" />

                {/* Top Bar: Handle & Mute button */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
                  <div className="glass-pill px-2.5 py-0.5 rounded-full text-[10px] font-medium text-white flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    <span>{creative.handle}</span>
                  </div>

                  <button
                    onClick={toggleMute}
                    className="p-1.5 rounded-full bg-black/60 text-white hover:text-cyan-400 transition-colors"
                  >
                    {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
                  </button>
                </div>

                {/* Center Click to Pause/Play */}
                <div
                  onClick={togglePlay}
                  className="absolute inset-0 flex items-center justify-center cursor-pointer"
                >
                  {!isPlaying && (
                    <div className="w-14 h-14 rounded-full bg-white/90 text-black flex items-center justify-center shadow-2xl">
                      <Play className="w-6 h-6 fill-black translate-x-0.5" />
                    </div>
                  )}
                </div>

                {/* Right Reel Counter Icons */}
                <div className="absolute right-3 bottom-20 flex flex-col items-center gap-3 z-10 text-[10px] font-mono text-white">
                  <div className="flex flex-col items-center">
                    <Heart className="w-4 h-4 text-red-400 fill-red-400/30" />
                    <span>{creative.likes}</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <MessageCircle className="w-4 h-4 text-white" />
                    <span>{creative.comments}</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <Share2 className="w-4 h-4 text-white" />
                    <span>{creative.shares}</span>
                  </div>
                </div>

                {/* Bottom Hook & Call to Action */}
                <div className="absolute bottom-3 left-3 right-12 z-10 flex flex-col gap-1.5 text-left">
                  <p className="text-[11px] font-semibold text-white leading-tight bg-black/70 p-2 rounded-lg border border-white/10">
                    "{creative.hookText}"
                  </p>
                  <div className="bg-cyan-400 text-black px-2.5 py-1 rounded text-[11px] font-bold text-center">
                    {creative.ctaBadge}
                  </div>
                </div>

              </div>
            </div>

            {/* Right: Strategy Blueprint & Hook Breakdown */}
            <div className="md:col-span-7 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-3 py-0.5 rounded-full text-[11px] font-mono uppercase bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
                    {creative.categoryLabel}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono glass-pill text-white font-bold">
                    {creative.metrics}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
                  {creative.title}
                </h3>

                <p className="text-sm text-slate-300 mb-6 leading-relaxed font-light">
                  {creative.description}
                </p>

                {/* Hook Psychology Breakdown Box */}
                <div className="glass-card p-5 rounded-2xl mb-6 space-y-3">
                  <span className="text-xs font-mono uppercase text-cyan-400 font-bold flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    Direct-Response Hook Architecture
                  </span>

                  <div className="space-y-2 text-xs text-slate-300">
                    <div className="flex items-start gap-2">
                      <span className="font-mono text-cyan-400 font-bold">0:00 - 0:03s</span>
                      <span><strong>Pattern Interrupt:</strong> Shocking question / sensory action breaking the doom-scroll.</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="font-mono text-cyan-400 font-bold">0:03 - 0:15s</span>
                      <span><strong>Core Problem / Transformation:</strong> Addressing client's real bottleneck with zero corporate fluff.</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="font-mono text-cyan-400 font-bold">0:15 - 0:30s</span>
                      <span><strong>Direct Call-to-Action:</strong> Low-friction route to WhatsApp enquiry or Instant Form.</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs text-slate-400 mb-6">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Script variations and shot list guidelines provided for your in-house footage.</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                <a
                  href="#contact"
                  onClick={onClose}
                  className="py-3 px-6 rounded-full bg-white text-black font-semibold text-xs tracking-wider uppercase hover:bg-slate-100 transition-colors shadow-lg"
                >
                  Request Similar Campaign
                </a>
                <button
                  onClick={onClose}
                  className="py-3 px-5 rounded-full glass-pill text-slate-400 hover:text-white text-xs font-semibold transition-colors"
                >
                  Close Blueprint
                </button>
              </div>

            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
