import React, { type ButtonHTMLAttributes } from 'react';

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
    'relative inline-flex items-center justify-center font-bold rounded-xl transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none select-none';

  const sizeClasses = {
    sm: 'text-xs px-3 py-1.5 gap-1.5',
    md: 'text-xs px-4 py-2.5 gap-2',
    lg: 'text-sm px-6 py-3.5 gap-2.5',
  };

  const variantClasses = {
    primary:
      'bg-blue-600 hover:bg-blue-700 text-white dark:bg-red-600 dark:hover:bg-red-700 shadow-lg shadow-blue-600/20 dark:shadow-red-600/25 focus-visible:ring-blue-600 dark:focus-visible:ring-red-600',
    promo:
      'bg-blue-600 hover:bg-blue-700 text-white dark:bg-red-600 dark:hover:bg-red-700 shadow-lg shadow-blue-600/20 dark:shadow-red-600/25 focus-visible:ring-blue-600 dark:focus-visible:ring-red-600',
    secondary:
      'bg-slate-100 text-slate-900 hover:bg-slate-200 border border-slate-200 dark:bg-[#1a202c] dark:text-white dark:border-slate-800 dark:hover:bg-[#252e3f]',
    outline:
      'bg-transparent text-blue-600 border border-blue-600 hover:bg-blue-50 dark:text-red-400 dark:border-red-500 dark:hover:bg-red-950/40',
    ghost:
      'bg-transparent text-slate-600 hover:text-blue-600 hover:bg-blue-50 dark:text-slate-300 dark:hover:text-red-400 dark:hover:bg-red-950/30',
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
