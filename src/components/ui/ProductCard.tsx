import React from 'react';
import { Heart, ShoppingCart, Eye } from 'lucide-react';
import { Product } from '../../types';
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
    <div
      onClick={() => onQuickView(product)}
      className="group relative flex flex-col justify-between rounded-2xl bg-brand-surface border border-brand-border/80 hover:border-brand-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-brand-primary/10 overflow-hidden cursor-pointer"
    >
      {/* Product Image Area */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-black/40">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-surface via-transparent to-transparent opacity-80" />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5 items-start">
          <Badge variant="promo">-{product.discountPercentage}%</Badge>
          {product.badge && (
            <span className="text-[10px] font-bold uppercase tracking-wider bg-black/70 backdrop-blur-md text-white px-2 py-0.5 rounded-full border border-white/10">
              {product.badge}
            </span>
          )}
        </div>

        {/* Wishlist button */}
        <button
          onClick={handleToggleWishlist}
          className={`absolute top-3 right-3 p-2 rounded-full backdrop-blur-md transition-all ${
            isFavorite
              ? 'bg-red-500 text-white shadow-lg shadow-red-500/30'
              : 'bg-black/50 text-gray-300 hover:text-white hover:bg-black/70 border border-white/10'
          }`}
          aria-label="Ajouter aux favoris"
        >
          <Heart size={15} className={isFavorite ? 'fill-white' : ''} />
        </button>

        {/* Quick View Button on Hover */}
        <div className="absolute bottom-3 inset-x-3 hidden sm:flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <span className="flex items-center gap-1.5 text-[11px] font-bold text-white bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/15">
            <Eye size={13} />
            Aperçu rapide
          </span>
        </div>
      </div>

      {/* Card Content Area */}
      <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
        <div className="space-y-1.5">
          <div className="flex items-center justify-between text-[11px]">
            <span className="text-gray-400 uppercase tracking-wider font-medium">
              {product.categoryLabel}
            </span>
            <RatingStars rating={product.rating} reviewsCount={product.reviewsCount} />
          </div>

          <h3 className="text-sm font-bold text-white group-hover:text-blue-400 transition-colors line-clamp-1">
            {product.name}
          </h3>

          <p className="text-xs text-gray-400 line-clamp-2 leading-relaxed">
            {product.description}
          </p>
        </div>

        {/* Stock progress */}
        <div className="pt-2 border-t border-white/5">
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

          <button
            onClick={handleAddToCart}
            className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-brand-primary hover:bg-brand-primary-hover text-white text-xs font-semibold shadow-md shadow-brand-primary/20 transition-all active:scale-95 shrink-0"
            aria-label="Ajouter au panier"
          >
            <ShoppingCart size={14} />
            <span className="hidden xs:inline">Ajouter</span>
          </button>
        </div>
      </div>
    </div>
  );
};
