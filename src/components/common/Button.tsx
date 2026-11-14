import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: 'lime' | 'purple' | 'white' | 'outline' | 'whatsapp';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  icon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'lime',
  size = 'md',
  children,
  icon,
  className = '',
  ...props
}) => {
  const sizeStyles = {
    sm: 'px-4 py-2 text-xs font-semibold',
    md: 'px-6 py-2.5 text-sm font-bold tracking-wide',
    lg: 'px-8 py-3.5 text-base font-bold tracking-wide'
  };

  const variantStyles = {
    lime: 'bg-[#D8FC38] text-[#182C05] hover:bg-[#C7ED2A] shadow-[0_4px_20px_rgba(216,252,56,0.4)] border border-[#182C05]/10',
    purple: 'bg-[#3C147A] text-white hover:bg-[#2D0E60] shadow-[0_8px_25px_rgba(60,20,122,0.25)] border border-white/10',
    white: 'bg-white text-[#3C147A] hover:bg-slate-50 shadow-md border border-[#3C147A]/10 font-bold',
    outline: 'bg-transparent text-[#3C147A] border-2 border-[#3C147A] hover:bg-[#3C147A] hover:text-white',
    whatsapp: 'bg-[#25D366] text-white hover:bg-[#20ba59] shadow-[0_4px_20px_rgba(37,211,102,0.35)]'
  };

  return (
    <motion.button
      whileHover={{ y: -2, transition: { duration: 0.18 } }}
      whileTap={{ scale: 0.98 }}
      className={`inline-flex items-center justify-center gap-2 rounded-full transition-all duration-300 font-sans cursor-pointer ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
    </motion.button>
  );
};
