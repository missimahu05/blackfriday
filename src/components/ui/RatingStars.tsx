import React from 'react';
import { Star } from 'lucide-react';

interface RatingStarsProps {
  rating: number;
  reviewsCount?: number;
  size?: number;
  showCount?: boolean;
}

export const RatingStars: React.FC<RatingStarsProps> = ({
  rating,
  reviewsCount,
  size = 14,
  showCount = true,
}) => {
  return (
    <div className="inline-flex items-center gap-1.5">
      <div className="flex items-center text-amber-500">
        {[1, 2, 3, 4, 5].map((index) => {
          const filled = index <= Math.floor(rating);
          const half = !filled && index === Math.ceil(rating) && rating % 1 >= 0.5;

          return (
            <Star
              key={index}
              size={size}
              className={`${
                filled
                  ? 'fill-amber-500 text-amber-500'
                  : half
                  ? 'fill-amber-500/50 text-amber-500'
                  : 'text-gray-300 dark:text-gray-600'
              }`}
            />
          );
        })}
      </div>
      <span className="text-xs font-semibold text-gray-800 dark:text-gray-200">{rating.toFixed(1)}</span>
      {showCount && reviewsCount && (
        <span className="text-xs text-gray-500 dark:text-gray-400">({reviewsCount})</span>
      )}
    </div>
  );
};
