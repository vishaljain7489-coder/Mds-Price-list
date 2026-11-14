import React from 'react';
import { X, Play, Sparkles, MapPin } from 'lucide-react';

interface ReelModalProps {
  isOpen: boolean;
  onClose: () => void;
  caseItem: {
    client: string;
    categoryLabel: string;
    location: string;
    hook: string;
    resultMetric: string;
    videoUrl?: string;
    image: string;
  } | null;
}

export const ReelModal: React.FC<ReelModalProps> = ({ isOpen, onClose, caseItem }) => {
  if (!isOpen || !caseItem) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        onClick={onClose}
        className="fixed inset-0 bg-black/90 backdrop-blur-md transition-opacity" 
      />

      {/* Modal Frame: 9:16 aspect ratio */}
      <div className="relative w-full max-w-sm sm:max-w-md aspect-[9/16] max-h-[90vh] bg-black rounded-3xl overflow-hidden border border-white/20 shadow-2xl z-10 flex flex-col justify-between animate-in zoom-in-95 duration-200">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-30 w-9 h-9 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center border border-white/20 cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Video Player */}
        <div className="relative w-full h-full flex items-center justify-center bg-[#171919]">
          <video
            src={caseItem.videoUrl}
            autoPlay
            controls
            playsInline
            className="w-full h-full object-cover"
            onError={(e) => {
              const target = e.currentTarget;
              target.style.display = 'none';
              const fallback = document.getElementById('modal-reel-fallback');
              if (fallback) fallback.style.display = 'flex';
            }}
          />

          {/* Fallback frame */}
          <div 
            id="modal-reel-fallback"
            style={{ display: 'none', backgroundImage: `url(${caseItem.image})` }}
            className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 bg-cover bg-center"
          >
            <div className="absolute inset-0 bg-black/75" />
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-[#C8102E] text-white flex items-center justify-center mb-4 shadow-[0_0_25px_#C8102E]">
                <Play className="w-7 h-7 fill-white translate-x-0.5" />
              </div>
              <p className="font-display text-2xl uppercase tracking-wider text-white">
                {caseItem.client}
              </p>
              <p className="text-xs font-mono text-[#CCC5C4] mt-2">
                Hook: "{caseItem.hook}"
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="absolute bottom-4 left-4 right-4 z-20 p-3.5 rounded-2xl bg-black/75 backdrop-blur-md border border-white/10 flex items-center justify-between">
          <div>
            <span className="text-[10px] font-mono text-[#C8102E] uppercase font-bold block">
              {caseItem.categoryLabel} · {caseItem.location}
            </span>
            <p className="text-xs font-bold text-white line-clamp-1">
              Result: {caseItem.resultMetric}
            </p>
          </div>
          <span className="text-[10px] font-mono px-2 py-1 rounded-md bg-white/10 text-white">
            4K 60FPS
          </span>
        </div>

      </div>
    </div>
  );
};
