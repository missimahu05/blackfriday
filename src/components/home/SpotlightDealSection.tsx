import React from 'react';
import { Sparkles, ShieldCheck, Truck, ShoppingCart, Clock, Check } from 'lucide-react';
import { SPOTLIGHT_PRODUCT } from '../../data/products';
import { useCartStore } from '../../store/useCartStore';
import { useNotificationStore } from '../../store/useNotificationStore';
import { PriceTag } from '../ui/PriceTag';
import { RatingStars } from '../ui/RatingStars';
import { Button } from '../ui/Button';
import { Product } from '../../types';

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
    <section id="spotlight" className="py-16 lg:py-24 border-b border-brand-border relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-brand-primary/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-brand-surface-elevated via-brand-surface to-[#0e121a] border border-brand-border shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Visual showcase */}
            <div className="lg:col-span-6 relative">
              <div
                onClick={() => onSelectProduct(product)}
                className="relative aspect-square max-w-lg mx-auto rounded-2xl overflow-hidden bg-black/50 border border-white/10 group cursor-pointer"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  <span className="bg-brand-promo text-white font-black text-xs px-3 py-1.5 rounded-full uppercase tracking-wider shadow-lg flex items-center gap-1.5">
                    <Sparkles size={13} />
                    Offre Phare de la Semaine
                  </span>
                  <span className="bg-black/70 backdrop-blur-md text-emerald-400 font-bold text-xs px-3 py-1 rounded-full border border-emerald-500/20">
                    Économisez {product.oldPrice - product.price} € Immédiatement
                  </span>
                </div>
              </div>
            </div>

            {/* Description & Purchase trigger */}
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-3">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <span className="text-xs uppercase tracking-wider font-semibold text-blue-400">
                    {product.categoryLabel}
                  </span>
                  <RatingStars rating={product.rating} reviewsCount={product.reviewsCount} />
                </div>

                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-tight">
                  {product.name}
                </h2>

                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Price card */}
              <div className="p-4 sm:p-5 rounded-2xl bg-brand-surface border border-brand-border">
                <PriceTag
                  price={product.price}
                  oldPrice={product.oldPrice}
                  discountPercentage={product.discountPercentage}
                  size="xl"
                />

                <div className="flex items-center gap-2 mt-3 pt-3 border-t border-white/5 text-xs text-amber-400 font-medium">
                  <Clock size={14} className="text-amber-400" />
                  <span>Derniers stocks alloués à ce tarif préférentiel Black Friday.</span>
                </div>
              </div>

              {/* Verified Features */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                {product.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-gray-300">
                    <Check size={14} className="text-emerald-400 mt-0.5 shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              {/* Action buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-brand-border">
                <Button
                  variant="promo"
                  size="lg"
                  onClick={handleAddToCart}
                  className="shadow-xl shadow-brand-promo/20 flex-1"
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

              <div className="flex items-center gap-6 text-[11px] text-gray-400 pt-1">
                <span className="flex items-center gap-1.5">
                  <Truck size={14} className="text-blue-400" />
                  Expédition en 24h
                </span>
                <span className="flex items-center gap-1.5">
                  <ShieldCheck size={14} className="text-emerald-400" />
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
