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
        <span className={`${currentPriceSizes[size]} text-white tracking-tight`}>
          {price.toLocaleString('fr-FR')} €
        </span>
        {oldPrice && oldPrice > price && (
          <span className={`${oldPriceSizes[size]} text-gray-400 line-through font-normal`}>
            {oldPrice.toLocaleString('fr-FR')} €
          </span>
        )}
        {discountPercentage && (
          <span className="text-xs font-bold text-red-400 bg-red-500/10 px-1.5 py-0.5 rounded border border-red-500/20">
            -{discountPercentage}%
          </span>
        )}
      </div>
      {showSavings && savings > 0 && (
        <span className="text-[12px] text-emerald-400 font-medium mt-0.5">
          Économie : {savings.toLocaleString('fr-FR')} €
        </span>
      )}
    </div>
  );
};
