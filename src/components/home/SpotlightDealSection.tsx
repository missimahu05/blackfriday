import React from 'react';
import { Flame, ShieldCheck, Truck, ShoppingCart, Clock, Check } from 'lucide-react';
import { SPOTLIGHT_PRODUCT } from '../../data/products';
import { useCartStore } from '../../store/useCartStore';
import { useNotificationStore } from '../../store/useNotificationStore';
import { PriceTag } from '../ui/PriceTag';
import { RatingStars } from '../ui/RatingStars';
import { Button } from '../ui/Button';
import type { Product } from '../../types';

interface SpotlightDealSectionProps {
  onSelectProduct: (product: Product) => void;
}

export const SpotlightDealSection: React.FC<SpotlightDealSectionProps> = ({
  onSelectProduct,
}) => {
  const product = SPOTLIGHT_PRODUCT;
  const { addItem } = useCartStore();
  const { addToast } = useNotificationStore();

  const handleAddToCart = () => {
    addItem(product);
    addToast({
      type: 'success',
      title: 'Offre Vedette ajoutée !',
      message: `${product.name} a été ajouté à votre panier.`,
    });
  };

  return (
    <section id="spotlight" className="min-h-screen py-16 lg:py-24 border-b border-slate-200 dark:border-[#232936] relative flex flex-col justify-center overflow-hidden transition-colors duration-300">
      {/* Ambient background glows */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[550px] h-[550px] bg-blue-500/10 dark:bg-red-500/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-blue-600/5 dark:bg-red-600/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-white via-slate-50 to-blue-50/40 dark:from-[#181C25] dark:via-[#11141B] dark:to-[#080A0F] border border-blue-100 dark:border-[#232936] shadow-xl dark:shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Visual showcase */}
            <div className="lg:col-span-6 relative">
              <div
                onClick={() => onSelectProduct(product)}
                className="relative aspect-square max-w-lg mx-auto rounded-2xl overflow-hidden bg-slate-100 dark:bg-black/50 border border-blue-100 dark:border-white/10 group cursor-pointer shadow-lg"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  <span className="bg-blue-600 dark:bg-red-600 text-white font-black text-xs px-3 py-1.5 rounded-full uppercase tracking-wider shadow-lg flex items-center gap-1.5">
                    <Flame size={13} />
                    Offre Phare de la Semaine
                  </span>
                  <span className="bg-white/95 dark:bg-black/75 backdrop-blur-md text-blue-600 dark:text-red-400 font-bold text-xs px-3 py-1 rounded-full border border-blue-200 dark:border-red-900/50 shadow-sm">
                    Économisez {product.oldPrice - product.price} € Immédiatement
                  </span>
                </div>
              </div>
            </div>

            {/* Description & Purchase trigger */}
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-3">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <span className="text-xs uppercase tracking-wider font-bold text-blue-600 dark:text-red-400">
                    {product.categoryLabel}
                  </span>
                  <RatingStars rating={product.rating} reviewsCount={product.reviewsCount} />
                </div>

                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
                  {product.name}
                </h2>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Price card */}
              <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-[#11141B] border border-blue-100 dark:border-[#232936] shadow-sm">
                <PriceTag
                  price={product.price}
                  oldPrice={product.oldPrice}
                  discountPercentage={product.discountPercentage}
                  size="xl"
                />

                <div className="flex items-center gap-2 mt-3 pt-3 border-t border-slate-100 dark:border-white/5 text-xs text-blue-700 dark:text-red-400 font-medium">
                  <Clock size={14} className="text-blue-600 dark:text-red-500" />
                  <span>Derniers stocks alloués à ce tarif préférentiel Black Friday.</span>
                </div>
              </div>

              {/* Verified Features */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                {product.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                    <Check size={14} className="text-blue-600 dark:text-red-400 mt-0.5 shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              {/* Action buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-slate-100 dark:border-[#232936]">
                <Button
                  variant="primary"
                  size="lg"
                  onClick={handleAddToCart}
                  className="flex-1"
                >
                  <ShoppingCart size={18} />
                  <span>Ajouter au Panier ({product.price} €)</span>
                </Button>

                <Button
                  variant="secondary"
                  size="lg"
                  onClick={() => onSelectProduct(product)}
                >
                  <span>Consulter la Fiche Complète</span>
                </Button>
              </div>

              <div className="flex items-center gap-6 text-[11px] text-slate-500 dark:text-slate-400 pt-1">
                <span className="flex items-center gap-1.5">
                  <Truck size={14} className="text-blue-600 dark:text-red-400" />
                  Expédition en 24h
                </span>
                <span className="flex items-center gap-1.5">
                  <ShieldCheck size={14} className="text-emerald-500" />
                  Garantie 2 ans constructeur
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
