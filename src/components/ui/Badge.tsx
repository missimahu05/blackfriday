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
    promo: 'bg-brand-promo/15 text-red-400 border border-brand-promo/30 font-semibold',
    primary: 'bg-brand-primary/15 text-blue-400 border border-brand-primary/30 font-medium',
    success: 'bg-brand-success/15 text-emerald-400 border border-brand-success/30 font-medium',
    neutral: 'bg-gray-800 text-gray-300 border border-gray-700 font-medium',
    subtle: 'bg-white/5 text-gray-400 border border-white/10 font-normal',
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
