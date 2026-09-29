import React, { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'promo' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  isLoading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  isLoading = false,
  className = '',
  disabled,
  ...props
}) => {
  const baseClasses =
    'relative inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#080A0F] active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none select-none';

  const sizeClasses = {
    sm: 'text-xs px-3 py-1.5 gap-1.5',
    md: 'text-sm px-4 py-2.5 gap-2',
    lg: 'text-base px-6 py-3.5 gap-2.5 font-semibold',
  };

  const variantClasses = {
    primary:
      'bg-brand-primary text-white hover:bg-brand-primary-hover focus-visible:ring-brand-primary shadow-lg shadow-brand-primary/20',
    secondary:
      'bg-brand-surface-elevated text-white hover:bg-[#232936] border border-brand-border focus-visible:ring-brand-primary',
    promo:
      'bg-brand-promo text-white hover:bg-brand-promo-hover focus-visible:ring-brand-promo shadow-lg shadow-brand-promo/25',
    outline:
      'bg-transparent text-white border border-brand-border hover:bg-white/5 hover:border-white/20 focus-visible:ring-white',
    ghost:
      'bg-transparent text-gray-300 hover:text-white hover:bg-white/5 focus-visible:ring-brand-primary',
  };

  return (
    <button
      className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${
        fullWidth ? 'w-full' : ''
      } ${className}`}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <span className="inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
      ) : null}
      {children}
    </button>
  );
};
