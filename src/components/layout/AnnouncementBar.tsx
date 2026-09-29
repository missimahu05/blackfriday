import React from 'react';
import { Flame, Clock, ArrowRight } from 'lucide-react';

interface AnnouncementBarProps {
  onExploreDeals?: () => void;
}

export const AnnouncementBar: React.FC<AnnouncementBarProps> = ({ onExploreDeals }) => {
  return (
    <div className="bg-gradient-to-r from-brand-promo via-red-600 to-brand-primary text-white text-xs font-semibold py-2 px-4 shadow-sm relative z-40">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3 text-center sm:text-left">
        <div className="flex items-center gap-2 mx-auto sm:mx-0 flex-wrap justify-center">
          <span className="flex items-center gap-1.5 bg-black/30 px-2 py-0.5 rounded text-[11px] font-bold tracking-wide uppercase">
            <Flame className="w-3.5 h-3.5 text-amber-300" />
            Événement Black Friday
          </span>
          <span className="font-normal text-white/90">
            Jusqu’à -70% sur le catalogue premium. Code <strong className="text-yellow-300 underline font-bold">BLACK10</strong> pour -10% immédiats.
          </span>
        </div>

        <div className="hidden md:flex items-center gap-3 shrink-0">
          <span className="flex items-center gap-1 text-[11px] text-white/80">
            <Clock className="w-3.5 h-3.5 text-white/80" />
            Stocks limités par référence
          </span>
          <button
            onClick={onExploreDeals}
            className="flex items-center gap-1 bg-white/15 hover:bg-white/25 text-white px-2.5 py-1 rounded text-[11px] font-bold transition-colors"
          >
            Voir les offres
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>
      </div>
    </div>
  );
};
