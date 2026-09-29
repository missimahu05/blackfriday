import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Heart, Trash2, ShoppingCart, ArrowRight } from 'lucide-react';
import { useWishlistStore } from '../../store/useWishlistStore';
import { useCartStore } from '../../store/useCartStore';
import { Button } from '../ui/Button';
import type { Product } from '../../types';

interface WishlistDrawerProps {
  onSelectProduct: (product: Product) => void;
}

export const WishlistDrawer: React.FC<WishlistDrawerProps> = ({ onSelectProduct }) => {
  const { items, isOpen, closeWishlist, removeItem, clearWishlist } = useWishlistStore();
  const { addItem } = useCartStore();

  const handleMoveToCart = (product: Product) => {
    addItem(product);
    removeItem(product.id);
  };

  const handleMoveAllToCart = () => {
    items.forEach((p) => addItem(p));
    clearWishlist();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeWishlist}
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
          />

          <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 280 }}
              className="w-screen max-w-md bg-white dark:bg-[#131722] border-l border-slate-200 dark:border-slate-800 flex flex-col shadow-2xl text-slate-900 dark:text-white"
            >
              <div className="p-5 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between bg-slate-50 dark:bg-[#0c0f17]">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 dark:bg-red-500/10 flex items-center justify-center">
                    <Heart className="w-4 h-4 text-blue-600 dark:text-red-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-base text-slate-900 dark:text-white">Vos Favoris</h3>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400">
                      {items.length === 0
                        ? 'Aucun favori enregistré'
                        : `${items.length} références sauvegardées`}
                    </p>
                  </div>
                </div>

                <button
                  onClick={closeWishlist}
                  className="p-2 text-slate-400 hover:text-slate-900 dark:hover:text-white rounded-lg hover:bg-slate-100 dark:hover:bg-white/5 transition-colors"
                  aria-label="Fermer les favoris"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-5 space-y-4">
                {items.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-3">
                    <div className="w-16 h-16 rounded-2xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-400">
                      <Heart size={28} />
                    </div>
                    <h4 className="text-base font-semibold text-slate-900 dark:text-white">Aucun favori pour le moment</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 max-w-xs leading-relaxed">
                      Cliquez sur le coeur d'une fiche produit pour sauvegarder vos offres préférées du Black Friday.
                    </p>
                    <Button variant="outline" size="sm" onClick={closeWishlist} className="mt-2 text-slate-700 dark:text-white">
                      Explorer le catalogue
                    </Button>
                  </div>
                ) : (
                  items.map((product) => (
                    <div
                      key={product.id}
                      className="flex gap-3.5 p-3 rounded-xl bg-slate-50 dark:bg-[#1b202e] border border-slate-200 dark:border-slate-800 shadow-sm"
                    >
                      <img
                        src={product.image}
                        alt={product.name}
                        onClick={() => {
                          onSelectProduct(product);
                          closeWishlist();
                        }}
                        className="w-20 h-20 object-cover rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-white/10 shrink-0 cursor-pointer"
                      />
                      <div className="flex-1 min-w-0 flex flex-col justify-between">
                        <div>
                          <div className="flex items-start justify-between gap-2">
                            <h4
                              onClick={() => {
                                onSelectProduct(product);
                                closeWishlist();
                              }}
                              className="text-xs font-bold text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-red-400 cursor-pointer line-clamp-2"
                            >
                              {product.name}
                            </h4>
                            <button
                              onClick={() => removeItem(product.id)}
                              className="text-slate-400 hover:text-blue-600 dark:hover:text-red-400 transition-colors p-1"
                              aria-label="Supprimer du panier"
                            >
                              <Trash2 size={14} />
                            </button>
                          </div>
                          <span className="text-[11px] text-slate-500 dark:text-slate-400 block mt-0.5">
                            {product.categoryLabel}
                          </span>
                        </div>

                        <div className="flex items-center justify-between mt-2 pt-2 border-t border-slate-200 dark:border-white/5">
                          <div>
                            <span className="text-sm font-extrabold text-slate-900 dark:text-white">
                              {product.price} €
                            </span>
                            <span className="text-[10px] text-slate-400 line-through ml-1.5">
                              {product.oldPrice} €
                            </span>
                          </div>

                          <Button
                            variant="primary"
                            size="sm"
                            onClick={() => handleMoveToCart(product)}
                            className="text-xs py-1.5 px-3"
                          >
                            <ShoppingCart size={13} />
                            Ajouter
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>

              {items.length > 0 && (
                <div className="p-5 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-[#0c0f17]">
                  <Button
                    variant="primary"
                    size="md"
                    fullWidth
                    onClick={handleMoveAllToCart}
                  >
                    <span>Tout déplacer vers le panier</span>
                    <ArrowRight size={16} />
                  </Button>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
};
