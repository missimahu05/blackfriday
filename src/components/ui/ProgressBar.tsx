import React from 'react';

interface ProgressBarProps {
  current: number;
  total: number;
  label?: string;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ current, total, label }) => {
  const percentage = Math.min(100, Math.round((current / total) * 100));

  return (
    <div className="w-full">
      {label && (
        <div className="flex justify-between items-center text-[11px] mb-1.5 font-medium">
          <span className="text-gray-300">{label}</span>
          <span className="text-red-400 font-bold">{percentage}% vendu</span>
        </div>
      )}
      <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden p-0.5 border border-white/5">
        <div
          className="h-full bg-gradient-to-r from-brand-primary to-brand-promo rounded-full transition-all duration-500 ease-out"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};
