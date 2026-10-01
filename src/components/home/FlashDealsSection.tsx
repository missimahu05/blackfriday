import React, { useState, useEffect } from 'react';
import { Flame, Clock, ArrowRight } from 'lucide-react';
import type { Product } from '../../types';
import { PRODUCTS } from '../../data/products';
import { ProductCard } from '../ui/ProductCard';

interface FlashDealsSectionProps {
  onSelectProduct: (product: Product) => void;
  onExploreAll: () => void;
}

export const FlashDealsSection: React.FC<FlashDealsSectionProps> = ({
  onSelectProduct,
  onExploreAll,
}) => {
  const flashProducts = PRODUCTS.filter((p) => p.isFlashDeal);
  const [secondsElapsed, setSecondsElapsed] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSecondsElapsed((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="flash-deals" className="min-h-screen py-16 lg:py-24 border-b border-slate-200 dark:border-[#232936] relative flex flex-col justify-center transition-colors duration-300 overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute -top-24 right-1/4 w-[500px] h-[500px] bg-blue-500/5 dark:bg-red-500/8 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute -bottom-24 left-10 w-[400px] h-[400px] bg-blue-600/5 dark:bg-red-600/8 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 dark:bg-red-500/10 border border-blue-200 dark:border-red-500/20 text-blue-700 dark:text-red-400 text-xs font-bold uppercase tracking-wider mb-3">
              <Flame size={14} className="text-blue-600 dark:text-red-500 animate-pulse" />
              Quantités Hyper Limitées
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
              Ventes Flash Black Friday
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-2 max-w-xl">
              Les prix ne resteront pas longtemps. Les réservations s'opèrent par ordre d’arrivée dans le panier.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onExploreAll}
              className="inline-flex items-center gap-2 text-xs font-bold text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-red-400 bg-white dark:bg-[#11141B] border border-slate-200 dark:border-[#232936] px-4 py-2.5 rounded-xl shadow-sm transition-colors group"
            >
              <span>Voir tout le catalogue</span>
              <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {flashProducts.map((product) => {
            const initialMinutes = product.flashEndsInMinutes || 45;
            const totalSec = Math.max(0, initialMinutes * 60 - secondsElapsed);
            const m = Math.floor(totalSec / 60);
            const s = totalSec % 60;

            return (
              <div key={product.id} className="relative flex flex-col">
                <div className="mb-2 px-3 py-1.5 rounded-xl bg-blue-50 dark:bg-red-950/60 border border-blue-200 dark:border-red-900/40 flex items-center justify-between text-[11px] text-blue-900 dark:text-red-300 shadow-sm">
                  <span className="flex items-center gap-1 font-bold">
                    <Clock size={12} className="text-blue-600 dark:text-red-500" />
                    Offre expire dans :
                  </span>
                  <span className="font-mono font-bold text-white bg-blue-600 dark:bg-red-600 px-1.5 py-0.5 rounded shadow-sm">
                    {String(m).padStart(2, '0')}:{String(s).padStart(2, '0')}
                  </span>
                </div>

                <ProductCard product={product} onQuickView={onSelectProduct} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
