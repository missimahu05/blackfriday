import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'promo' | 'primary' | 'success' | 'neutral' | 'subtle';
  size?: 'sm' | 'md';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'promo',
  size = 'md',
  className = '',
}) => {
  const variantStyles = {
    // Mode clair = Bleu, Mode sombre = Rouge
    promo: 'bg-blue-50 text-blue-700 border border-blue-200 dark:bg-red-950/60 dark:text-red-400 dark:border-red-900/50 font-bold',
    primary: 'bg-blue-50 text-blue-700 border border-blue-200 dark:bg-red-950/60 dark:text-red-400 dark:border-red-900/50 font-bold',
    success: 'bg-emerald-50 text-emerald-700 border border-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-400 dark:border-emerald-900/50 font-medium',
    neutral: 'bg-slate-100 text-slate-700 border border-slate-200 dark:bg-[#181C25] dark:text-slate-300 dark:border-[#232936] font-medium',
    subtle: 'bg-slate-100/70 text-slate-600 border border-slate-200 dark:bg-white/5 dark:text-slate-400 dark:border-white/10 font-normal',
  };

  const sizeStyles = {
    sm: 'text-[11px] px-2 py-0.5 rounded-full',
    md: 'text-xs px-2.5 py-1 rounded-full',
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 uppercase tracking-wider ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
    >
      {children}
    </span>
  );
};
