import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'lime' | 'purple' | 'white' | 'blue' | 'cyan';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({ 
  children, 
  variant = 'lime', 
  className = '' 
}) => {
  if (variant === 'lime' || variant === 'cyan') {
    return (
      <span className={`badge-lime-pill ${className}`}>
        <span className="w-1.5 h-1.5 rounded-full bg-[#182C05] animate-pulse"></span>
        {children}
      </span>
    );
  }

  if (variant === 'purple' || variant === 'blue') {
    return (
      <span className={`inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-[#EDE5FA] text-[#3C147A] border border-[#3C147A]/20 ${className}`}>
        <span className="w-1.5 h-1.5 rounded-full bg-[#3C147A] animate-pulse"></span>
        {children}
      </span>
    );
  }

  return (
    <span className={`inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-white/15 text-white border border-white/20 backdrop-blur-md ${className}`}>
      <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
      {children}
    </span>
  );
};
