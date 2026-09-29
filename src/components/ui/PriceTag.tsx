import React from 'react';

interface PriceTagProps {
  price: number;
  oldPrice?: number;
  discountPercentage?: number;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showSavings?: boolean;
}

export const PriceTag: React.FC<PriceTagProps> = ({
  price,
  oldPrice,
  discountPercentage,
  size = 'md',
  showSavings = true,
}) => {
  const savings = oldPrice ? oldPrice - price : 0;

  const currentPriceSizes = {
    sm: 'text-base font-bold',
    md: 'text-xl font-bold',
    lg: 'text-2xl font-extrabold',
    xl: 'text-3xl lg:text-4xl font-black',
  };

  const oldPriceSizes = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-base',
    xl: 'text-lg',
  };

  return (
    <div className="flex flex-col">
      <div className="flex items-baseline gap-2.5 flex-wrap">
        <span className={`${currentPriceSizes[size]} text-slate-900 dark:text-white tracking-tight`}>
          {price.toLocaleString('fr-FR')} €
        </span>
        {oldPrice && oldPrice > price && (
          <span className={`${oldPriceSizes[size]} text-slate-400 line-through font-normal`}>
            {oldPrice.toLocaleString('fr-FR')} €
          </span>
        )}
        {discountPercentage && (
          <span className="text-xs font-bold text-blue-700 bg-blue-50 border border-blue-200 dark:text-red-400 dark:bg-red-950/60 dark:border-red-900/50 px-2 py-0.5 rounded">
            -{discountPercentage}%
          </span>
        )}
      </div>
      {showSavings && savings > 0 && (
        <span className="text-[12px] text-blue-600 dark:text-red-400 font-semibold mt-0.5">
          Économie : {savings.toLocaleString('fr-FR')} €
        </span>
      )}
    </div>
  );
};
