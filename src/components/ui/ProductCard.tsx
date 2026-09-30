import React from 'react';
import { motion } from 'framer-motion';
import { Heart, ShoppingCart, Eye } from 'lucide-react';
import type { Product } from '../../types';
import { useCartStore } from '../../store/useCartStore';
import { useWishlistStore } from '../../store/useWishlistStore';
import { useNotificationStore } from '../../store/useNotificationStore';
import { PriceTag } from './PriceTag';
import { RatingStars } from './RatingStars';
import { ProgressBar } from './ProgressBar';
import { Badge } from './Badge';

interface ProductCardProps {
  product: Product;
  onQuickView: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onQuickView }) => {
  const { addItem } = useCartStore();
  const { toggleWishlist, isInWishlist } = useWishlistStore();
  const { addToast } = useNotificationStore();

  const isFavorite = isInWishlist(product.id);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addItem(product);
    addToast({
      type: 'success',
      title: 'Ajouté au panier !',
      message: product.name,
    });
  };

  const handleToggleWishlist = (e: React.MouseEvent) => {
    e.stopPropagation();
    toggleWishlist(product);
    addToast({
      type: isFavorite ? 'info' : 'success',
      title: isFavorite ? 'Favoris mis à jour' : 'Ajouté aux favoris',
      message: product.name,
    });
  };

  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 350, damping: 25 }}
      onClick={() => onQuickView(product)}
      className="group relative flex flex-col justify-between rounded-2xl bg-white dark:bg-[#11141B] border border-slate-200 dark:border-[#232936] hover:border-blue-500/60 dark:hover:border-red-500/60 transition-colors duration-300 shadow-sm hover:shadow-xl dark:shadow-none dark:hover:shadow-red-500/10 overflow-hidden cursor-pointer"
    >
      {/* Product Image Area */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100 dark:bg-black/40">
        <motion.img
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5 items-start">
          <Badge variant="promo">-{product.discountPercentage}%</Badge>
          {product.badge && (
            <span className="text-[10px] font-bold uppercase tracking-wider bg-white/90 dark:bg-black/75 backdrop-blur-md text-slate-800 dark:text-white px-2 py-0.5 rounded-full border border-slate-200 dark:border-white/10 shadow-sm">
              {product.badge}
            </span>
          )}
        </div>

        {/* Wishlist button */}
        <motion.button
          whileTap={{ scale: 0.85 }}
          onClick={handleToggleWishlist}
          className={`absolute top-3 right-3 p-2 rounded-full backdrop-blur-md transition-all shadow-md ${
            isFavorite
              ? 'bg-blue-600 dark:bg-red-600 text-white shadow-blue-500/30 dark:shadow-red-500/30'
              : 'bg-white/90 dark:bg-black/50 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-red-400 border border-slate-200 dark:border-white/10'
          }`}
          aria-label="Ajouter aux favoris"
        >
          <Heart size={15} className={isFavorite ? 'fill-white' : ''} />
        </motion.button>

        {/* Quick View Button on Hover */}
        <div className="absolute bottom-3 inset-x-3 hidden sm:flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
          <span className="flex items-center gap-1.5 text-[11px] font-bold text-white bg-slate-900/90 dark:bg-black/85 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/15 shadow-lg">
            <Eye size={13} />
            Aperçu rapide
          </span>
        </div>
      </div>

      {/* Card Content Area */}
      <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
        <div className="space-y-1.5">
          <div className="flex items-center justify-between text-[11px]">
            <span className="text-slate-500 dark:text-slate-400 uppercase tracking-wider font-semibold">
              {product.categoryLabel}
            </span>
            <RatingStars rating={product.rating} reviewsCount={product.reviewsCount} />
          </div>

          <h3 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-red-400 transition-colors line-clamp-1">
            {product.name}
          </h3>

          <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-2 leading-relaxed">
            {product.description}
          </p>
        </div>

        {/* Stock progress */}
        <div className="pt-2 border-t border-slate-100 dark:border-white/5">
          <ProgressBar
            current={product.soldCount}
            total={product.soldCount + product.stock}
            label={product.stock <= 8 ? `Plus que ${product.stock} dispo` : 'Stock Black Friday'}
          />
        </div>

        {/* Price & Action button */}
        <div className="pt-2 flex items-center justify-between gap-2">
          <PriceTag
            price={product.price}
            oldPrice={product.oldPrice}
            discountPercentage={product.discountPercentage}
            size="md"
            showSavings={false}
          />

          <motion.button
            whileTap={{ scale: 0.92 }}
            onClick={handleAddToCart}
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 dark:bg-red-600 dark:hover:bg-red-700 text-white text-xs font-bold shadow-md shadow-blue-600/20 dark:shadow-red-600/25 transition-all shrink-0"
            aria-label="Ajouter au panier"
          >
            <ShoppingCart size={14} />
            <span className="hidden xs:inline">Ajouter</span>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};
