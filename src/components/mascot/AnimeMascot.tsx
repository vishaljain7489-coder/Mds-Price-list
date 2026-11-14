import React from 'react';

interface AnimeMascotProps {
  pose?: 'main' | 'heart' | 'peek';
  className?: string;
}

export const AnimeMascot: React.FC<AnimeMascotProps> = ({ pose = 'main', className = 'w-full h-auto' }) => {
  if (pose === 'heart') {
    return (
      <svg 
        viewBox="0 0 600 700" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg" 
        className={className}
        aria-label="Anime Creator Mascot - Heart Pose"
      >
        <defs>
          <linearGradient id="jacketHeartGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#171919" />
            <stop offset="60%" stopColor="#0A0A0A" />
            <stop offset="100%" stopColor="#C8102E" />
          </linearGradient>
          <linearGradient id="hairHeartGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="70%" stopColor="#CCC5C4" />
            <stop offset="100%" stopColor="#C8102E" />
          </linearGradient>
          <filter id="crimsonGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Aura Ring Behind Mascot */}
        <circle cx="300" cy="360" r="230" stroke="#C8102E" strokeWidth="2" strokeDasharray="8 6" opacity="0.6" />
        <circle cx="300" cy="360" r="190" fill="#C8102E" opacity="0.08" />

        {/* Hair - Back Layer */}
        <path d="M190 230L120 180L160 260L90 270L150 330L200 320Z" fill="#171919" />
        <path d="M410 230L480 180L440 260L510 270L450 330L400 320Z" fill="#171919" />

        {/* Torso / Cyber Streetwear Jacket */}
        <path d="M160 520C160 440 210 400 300 400C390 400 440 440 440 520L470 700H130L160 520Z" fill="url(#jacketHeartGrad)" stroke="#C8102E" strokeWidth="2.5" />
        
        {/* Crimson Collar */}
        <path d="M220 400L300 470L380 400L350 360L300 410L250 360L220 400Z" fill="#C8102E" />
        <line x1="300" y1="470" x2="300" y2="700" stroke="#C8102E" strokeWidth="3" />

        {/* Neck */}
        <path d="M260 320H340V400H260V320Z" fill="#F8E2D2" />
        <path d="M260 350C280 370 320 370 340 350V400H260V350Z" fill="#E4C1A8" />

        {/* Face */}
        <path d="M210 230C210 320 250 370 300 370C350 370 390 320 390 230C390 150 350 130 300 130C250 130 210 150 210 230Z" fill="#F8E2D2" />

        {/* Anime Eyes (Winking / Smiling Warmly) */}
        <path d="M240 250C255 240 275 245 280 255" stroke="#0A0A0A" strokeWidth="4.5" strokeLinecap="round" />
        <path d="M320 255C325 245 345 240 360 250" stroke="#0A0A0A" strokeWidth="4.5" strokeLinecap="round" />
        {/* Soft Blush */}
        <ellipse cx="245" cy="275" rx="14" ry="7" fill="#C8102E" opacity="0.35" />
        <ellipse cx="355" cy="275" rx="14" ry="7" fill="#C8102E" opacity="0.35" />

        {/* Confident Anime Smile */}
        <path d="M285 295C295 305 305 305 315 295" stroke="#0A0A0A" strokeWidth="3.5" strokeLinecap="round" />

        {/* High-Tech DJ Creator Headset */}
        <path d="M190 240C180 240 170 210 170 170C170 110 220 70 300 70C380 70 430 110 430 170C430 210 420 240 410 240" stroke="#C8102E" strokeWidth="8" strokeLinecap="round" />
        {/* Ear Cups */}
        <rect x="180" y="210" width="28" height="55" rx="12" fill="#171919" stroke="#C8102E" strokeWidth="3" />
        <circle cx="194" cy="237" r="7" fill="#C8102E" filter="url(#crimsonGlow)" />
        <rect x="392" y="210" width="28" height="55" rx="12" fill="#171919" stroke="#C8102E" strokeWidth="3" />
        <circle cx="406" cy="237" r="7" fill="#C8102E" filter="url(#crimsonGlow)" />

        {/* Spiky Anime Hair - Front */}
        <path d="M180 180L230 110L270 170L300 80L330 160L380 100L400 180L420 140L410 220L370 170L340 220L300 170L260 220L220 170L190 210Z" fill="url(#hairHeartGrad)" stroke="#0A0A0A" strokeWidth="3" />

        {/* Arms Reaching Up Forming Heart Hands (🫶) */}
        <path d="M160 540C180 430 240 370 285 410C295 420 305 420 315 410C360 370 420 430 440 540" stroke="#171919" strokeWidth="36" strokeLinecap="round" />
        <path d="M160 540C180 430 240 370 285 410C295 420 305 420 315 410C360 370 420 430 440 540" stroke="#C8102E" strokeWidth="6" strokeLinecap="round" />
        {/* Hand Gloves Forming Heart */}
        <path d="M275 415C265 400 280 380 295 390L300 395L305 390C320 380 335 400 325 415L300 440L275 415Z" fill="#C8102E" stroke="#FFFFFF" strokeWidth="3" filter="url(#crimsonGlow)" />
        
        {/* Glowing Heart Icon Inside Hands */}
        <path d="M290 412C285 403 293 392 300 398C307 392 315 403 310 412L300 422L290 412Z" fill="#FFFFFF" />
      </svg>
    );
  }

  // Default: Main Hero Pose (Edgy anime creator with dynamic high-tech jacket and cyber visor)
  return (
    <svg 
      viewBox="0 0 600 700" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={className}
      aria-label="Anime Creator Mascot - Main Pose"
    >
      <defs>
        <linearGradient id="jacketGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#171919" />
          <stop offset="50%" stopColor="#0A0A0A" />
          <stop offset="100%" stopColor="#C8102E" />
        </linearGradient>
        <linearGradient id="hairGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="60%" stopColor="#CCC5C4" />
          <stop offset="100%" stopColor="#C8102E" />
        </linearGradient>
        <linearGradient id="visorGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#C8102E" />
          <stop offset="50%" stopColor="#FF3355" />
          <stop offset="100%" stopColor="#C8102E" />
        </linearGradient>
        <filter id="visorGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="6" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* Cyberpunk Concentric Target Ring Behind Head */}
      <circle cx="300" cy="270" r="210" stroke="#C8102E" strokeWidth="2.5" strokeDasharray="14 8" opacity="0.85" />
      <circle cx="300" cy="270" r="160" stroke="#CCC5C4" strokeWidth="1" strokeDasharray="4 6" opacity="0.4" />
      <circle cx="300" cy="270" r="250" fill="#C8102E" opacity="0.12" />

      {/* Hair - Back Layer Spikes */}
      <path d="M170 210L90 150L130 250L60 260L120 320L180 310Z" fill="#0A0A0A" />
      <path d="M430 210L510 150L470 250L540 260L480 320L420 310Z" fill="#0A0A0A" />

      {/* Torso & Cyber Streetwear Jacket */}
      <path d="M140 520C140 430 200 390 300 390C400 390 460 430 460 520L490 700H110L140 520Z" fill="url(#jacketGrad)" stroke="#C8102E" strokeWidth="2.5" />
      
      {/* High Red Collar Flaps */}
      <path d="M210 390L300 465L390 390L360 345L300 395L240 345L210 390Z" fill="#C8102E" stroke="#0A0A0A" strokeWidth="2" />
      
      {/* Chest Cyber Straps & Zipper */}
      <line x1="300" y1="465" x2="300" y2="700" stroke="#C8102E" strokeWidth="3.5" />
      <line x1="200" y1="520" x2="400" y2="520" stroke="#CCC5C4" strokeWidth="1.5" strokeDasharray="6 4" opacity="0.5" />
      <rect x="280" y="540" width="40" height="24" rx="4" fill="#0A0A0A" stroke="#C8102E" strokeWidth="1.5" />
      <circle cx="300" cy="552" r="4" fill="#C8102E" />

      {/* Neck */}
      <path d="M255 310H345V390H255V310Z" fill="#F8E2D2" />
      <path d="M255 345C275 365 325 365 345 345V390H255V345Z" fill="#E4C1A8" />

      {/* Face Structure */}
      <path d="M205 220C205 315 245 365 300 365C355 365 395 315 395 220C395 145 355 120 300 120C245 120 205 145 205 220Z" fill="#F8E2D2" />

      {/* Cybernetic High-Tech Glowing Visor (Eyes) */}
      <path d="M225 225C240 215 360 215 375 225L380 255C365 268 235 268 220 255L225 225Z" fill="url(#visorGrad)" stroke="#FFFFFF" strokeWidth="2" filter="url(#visorGlow)" />
      {/* Visor Glare & Crosshair */}
      <line x1="240" y1="235" x2="270" y2="235" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" />
      <line x1="330" y1="235" x2="360" y2="235" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" />
      <circle cx="300" cy="242" r="3" fill="#FFFFFF" />

      {/* Anime Smirk */}
      <path d="M280 295C292 305 312 302 322 290" stroke="#0A0A0A" strokeWidth="4" strokeLinecap="round" />

      {/* Creator Over-Ear Headset */}
      <path d="M185 225C175 225 165 195 165 155C165 95 215 55 300 55C385 55 435 95 435 155C435 195 425 225 415 225" stroke="#C8102E" strokeWidth="10" strokeLinecap="round" />
      <rect x="175" y="195" width="30" height="60" rx="14" fill="#171919" stroke="#C8102E" strokeWidth="3" />
      <circle cx="190" cy="225" r="8" fill="#C8102E" filter="url(#visorGlow)" />
      <rect x="395" y="195" width="30" height="60" rx="14" fill="#171919" stroke="#C8102E" strokeWidth="3" />
      <circle cx="410" cy="225" r="8" fill="#C8102E" filter="url(#visorGlow)" />

      {/* Dynamic Spiky Anime Creator Hair (Front Layer) */}
      <path d="M175 165L225 95L265 155L300 65L335 145L385 85L410 165L435 125L420 210L380 160L350 210L300 155L255 210L215 160L185 200Z" fill="url(#hairGrad)" stroke="#0A0A0A" strokeWidth="3" />
    </svg>
  );
};
