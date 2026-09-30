import React from 'react';
import { Flame, Zap, ShieldCheck, Award, Tag, ArrowUpRight } from 'lucide-react';

export const PromoMarquee: React.FC = () => {
  const items = [
    { text: "BLACK FRIDAY 2026 : OFFRES JUSQU'À -70%", icon: Flame, color: "text-red-500" },
    { text: "VENTES FLASH SONY, PS5, APPLE & LG", icon: Zap, color: "text-blue-500" },
    { text: "CODE BLACK10 : -10% IMMÉDIATS DANS LE PANIER", icon: Tag, color: "text-amber-500" },
    { text: "EXPÉDITION EXPRESS 24H OFFERTE DÈS 75 €", icon: ShieldCheck, color: "text-emerald-500" },
    { text: "STOCKS PHYSIQUES RÉSERVÉS EN DIRECT", icon: Award, color: "text-blue-500 dark:text-red-500" },
  ];

  return (
    <div className="py-2.5 bg-brand-surface dark:bg-brand-surface border-y border-brand-border-light dark:border-brand-border overflow-hidden whitespace-nowrap select-none relative z-20">
      <div className="inline-flex animate-marquee">
        {[...items, ...items].map((item, idx) => {
          const Icon = item.icon;
          return (
            <div key={idx} className="inline-flex items-center gap-2.5 mx-6 text-xs font-bold uppercase tracking-wider text-gray-700 dark:text-gray-300">
              <Icon size={14} className={item.color} />
              <span>{item.text}</span>
              <ArrowUpRight size={12} className="text-gray-400 dark:text-gray-600" />
            </div>
          );
        })}
      </div>
    </div>
  );
};
