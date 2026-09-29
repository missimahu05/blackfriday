import React, { useState, useEffect } from 'react';
import { Flame, Clock, Zap, ArrowRight } from 'lucide-react';
import { Product } from '../../types';
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

  // Minutes and seconds dynamic countdown for flash
  const [secondsElapsed, setSecondsElapsed] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSecondsElapsed((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="flash-deals" className="py-16 lg:py-24 border-b border-brand-border relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-bold uppercase tracking-wider mb-3">
              <Flame size={14} className="text-red-500 animate-pulse" />
              Quantités Hyper Limitées
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Ventes Flash Black Friday
            </h2>
            <p className="text-xs sm:text-sm text-gray-400 mt-2 max-w-xl">
              Les prix ne resteront pas longtemps. Les réservations s'opèrent par ordre d’arrivée dans le panier.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onExploreAll}
              className="inline-flex items-center gap-2 text-xs font-semibold text-gray-300 hover:text-white bg-brand-surface border border-brand-border px-4 py-2.5 rounded-lg transition-colors group"
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
                {/* Individual flash countdown banner above card */}
                <div className="mb-2 px-3 py-1.5 rounded-lg bg-red-950/60 border border-red-500/30 flex items-center justify-between text-[11px] text-red-300">
                  <span className="flex items-center gap-1 font-bold">
                    <Clock size={12} className="text-red-400" />
                    Offre expire dans :
                  </span>
                  <span className="font-mono font-bold text-white bg-black/40 px-1.5 py-0.5 rounded">
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
