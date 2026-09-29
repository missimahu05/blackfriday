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
        <div className="flex justify-between items-center text-[11px] mb-1.5 font-semibold">
          <span className="text-slate-600 dark:text-slate-400">{label}</span>
          <span className="text-blue-600 dark:text-red-400 font-bold">{percentage}% vendu</span>
        </div>
      )}
      <div className="w-full h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden p-0.5 border border-slate-200 dark:border-white/5">
        <div
          className="h-full bg-blue-600 dark:bg-red-600 rounded-full transition-all duration-500 ease-out"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};
