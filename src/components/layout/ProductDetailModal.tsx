import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  Heart,
  ShoppingCart,
  ShieldCheck,
  Truck,
  RotateCcw,
  Check,
  Clock
} from 'lucide-react';
import type { Product } from '../../types';
import { useCartStore } from '../../store/useCartStore';
import { useWishlistStore } from '../../store/useWishlistStore';
import { useNotificationStore } from '../../store/useNotificationStore';
import { PriceTag } from '../ui/PriceTag';
import { RatingStars } from '../ui/RatingStars';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
}) => {
  if (!product) return null;

  const [selectedImage, setSelectedImage] = useState(product.image);
  const [selectedColor, setSelectedColor] = useState(
    product.colors?.[0]?.name || ''
  );
  const [quantity, setQuantity] = useState(1);

  const { addItem } = useCartStore();
  const { toggleWishlist, isInWishlist } = useWishlistStore();
  const { addToast } = useNotificationStore();

  const isFavorite = isInWishlist(product.id);

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addItem(product, selectedColor);
    }
    addToast({
      type: 'success',
      title: 'Ajouté au panier !',
      message: `${quantity}x ${product.name} (${selectedColor || 'Standard'})`,
    });
    onClose();
  };

  const handleToggleWishlist = () => {
    toggleWishlist(product);
    addToast({
      type: isFavorite ? 'info' : 'success',
      title: isFavorite ? 'Retiré des favoris' : 'Enregistré dans vos favoris',
      message: product.name,
    });
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 15 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-4xl bg-white dark:bg-[#11141B] border border-slate-200 dark:border-[#232936] rounded-2xl shadow-2xl overflow-hidden my-8 z-10 text-slate-900 dark:text-white"
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-slate-900/70 text-white hover:bg-slate-900 transition-colors border border-white/10"
            aria-label="Fermer la vue produit"
          >
            <X size={18} />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Gallery Left */}
            <div className="p-6 md:p-8 bg-slate-50 dark:bg-[#080A0F] flex flex-col justify-between border-b md:border-b-0 md:border-r border-slate-200 dark:border-[#232936]">
              <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-slate-200 dark:bg-black/40 border border-slate-200 dark:border-white/10 group mb-4">
                <img
                  src={selectedImage}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {product.badge && (
                  <div className="absolute top-3 left-3">
                    <Badge variant="promo">{product.badge}</Badge>
                  </div>
                )}
              </div>

              {product.gallery && product.gallery.length > 1 && (
                <div className="flex gap-3 overflow-x-auto pb-1">
                  {product.gallery.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedImage(img)}
                      className={`relative w-16 h-16 rounded-lg overflow-hidden border-2 transition-all shrink-0 ${
                        selectedImage === img
                          ? 'border-blue-600 dark:border-red-500 ring-2 ring-blue-500/20 dark:ring-red-500/20'
                          : 'border-slate-200 dark:border-white/10 opacity-70 hover:opacity-100'
                      }`}
                    >
                      <img src={img} alt="" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Product Details Right */}
            <div className="p-6 md:p-8 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-2 flex-wrap">
                  <span className="text-xs uppercase tracking-wider font-semibold text-blue-600 dark:text-red-400">
                    {product.categoryLabel}
                  </span>
                  <RatingStars rating={product.rating} reviewsCount={product.reviewsCount} />
                </div>

                <h2 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight leading-snug">
                  {product.name}
                </h2>

                <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#11141B] border border-slate-200 dark:border-[#232936]">
                  <PriceTag
                    price={product.price}
                    oldPrice={product.oldPrice}
                    discountPercentage={product.discountPercentage}
                    size="xl"
                  />
                  {product.stock <= 10 && (
                    <div className="flex items-center gap-2 mt-3 pt-3 border-t border-slate-200 dark:border-white/5 text-xs text-blue-700 dark:text-red-400 font-medium">
                      <Clock size={14} className="text-blue-600 dark:text-red-500 animate-pulse" />
                      <span>Forte demande : plus que {product.stock} pièces en réserve !</span>
                    </div>
                  )}
                </div>

                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {product.description}
                </p>

                {product.colors && product.colors.length > 0 && (
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block">
                      Finition / Coloris : <span className="text-slate-900 dark:text-white font-bold">{selectedColor}</span>
                    </label>
                    <div className="flex gap-2.5">
                      {product.colors.map((c) => (
                        <button
                          key={c.name}
                          onClick={() => setSelectedColor(c.name)}
                          className={`relative px-3 py-1.5 rounded-lg border text-xs font-medium flex items-center gap-2 transition-all ${
                            selectedColor === c.name
                              ? 'border-blue-600 dark:border-red-500 bg-blue-50 dark:bg-red-500/10 text-blue-700 dark:text-red-400 font-bold'
                              : 'border-slate-200 dark:border-[#232936] bg-white dark:bg-[#11141B] text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                          }`}
                        >
                          <span
                            className="w-3 h-3 rounded-full border border-black/20 dark:border-white/20"
                            style={{ backgroundColor: c.hex }}
                          />
                          {c.name}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-white/5">
                  <h4 className="text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider">
                    Points Clés Vérifiés
                  </h4>
                  <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-400">
                    {product.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check size={14} className="text-blue-600 dark:text-red-400 mt-0.5 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3 pt-4 border-t border-slate-200 dark:border-[#232936]">
                <div className="flex gap-3">
                  <div className="flex items-center border border-slate-300 dark:border-slate-700 rounded-lg bg-slate-50 dark:bg-[#11141B] px-2">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-red-400 px-2 py-1 text-sm font-bold"
                    >
                      -
                    </button>
                    <span className="text-xs font-bold text-slate-900 dark:text-white px-2">{quantity}</span>
                    <button
                      onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                      className="text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-red-400 px-2 py-1 text-sm font-bold"
                    >
                      +
                    </button>
                  </div>

                  <Button
                    variant="primary"
                    size="lg"
                    fullWidth
                    onClick={handleAddToCart}
                    className="flex-1 shadow-lg shadow-blue-600/20 dark:shadow-red-600/25"
                  >
                    <ShoppingCart size={18} />
                    <span>Ajouter au Panier</span>
                  </Button>

                  <button
                    onClick={handleToggleWishlist}
                    className={`p-3 rounded-lg border transition-colors ${
                      isFavorite
                        ? 'border-blue-600 dark:border-red-500 bg-blue-50 dark:bg-red-500/10 text-blue-600 dark:text-red-500'
                        : 'border-slate-200 dark:border-[#232936] bg-slate-50 dark:bg-[#11141B] text-slate-400 hover:text-blue-600 dark:hover:text-red-400'
                    }`}
                    aria-label="Ajouter aux favoris"
                  >
                    <Heart size={18} className={isFavorite ? 'fill-blue-600 dark:fill-red-500' : ''} />
                  </button>
                </div>

                <div className="grid grid-cols-3 gap-2 pt-2 text-[11px] text-slate-500 dark:text-slate-400 text-center">
                  <div className="flex items-center justify-center gap-1">
                    <Truck size={12} className="text-blue-600 dark:text-red-400" />
                    <span>Livraison 24h</span>
                  </div>
                  <div className="flex items-center justify-center gap-1">
                    <ShieldCheck size={12} className="text-blue-600 dark:text-red-400" />
                    <span>Garantie 2 ans</span>
                  </div>
                  <div className="flex items-center justify-center gap-1">
                    <RotateCcw size={12} className="text-blue-600 dark:text-red-400" />
                    <span>Retour 30j</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
