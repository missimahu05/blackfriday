import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  Trash2,
  Plus,
  Minus,
  ShoppingBag,
  ArrowRight,
  Tag,
  ShieldCheck,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import { useCartStore } from '../../store/useCartStore';
import { Button } from '../ui/Button';

interface CartDrawerProps {
  onProceedToCheckout: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({ onProceedToCheckout }) => {
  const {
    items,
    isOpen,
    closeCart,
    removeItem,
    updateQuantity,
    appliedPromo,
    promoError,
    applyPromo,
    removePromo,
    getSubtotal,
    getRawSavings,
    getPromoDiscountAmount,
    getFinalTotal,
  } = useCartStore();

  const [promoInput, setPromoInput] = useState('');
  const [promoSuccessMsg, setPromoSuccessMsg] = useState<string | null>(null);

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (!promoInput.trim()) return;

    const success = applyPromo(promoInput);
    if (success) {
      setPromoSuccessMsg('Code promo appliqué avec succès !');
      setPromoInput('');
      setTimeout(() => setPromoSuccessMsg(null), 3000);
    }
  };

  const handleCheckoutClick = () => {
    closeCart();
    onProceedToCheckout();
  };

  const subtotal = getSubtotal();
  const rawSavings = getRawSavings();
  const promoDiscount = getPromoDiscountAmount();
  const total = getFinalTotal();

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
            className="absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
          />

          <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 280 }}
              className="w-screen max-w-md bg-white dark:bg-brand-surface-elevated border-l border-gray-200 dark:border-brand-border flex flex-col shadow-2xl text-gray-900 dark:text-white"
            >
              {/* Drawer Header */}
              <div className="p-5 border-b border-gray-200 dark:border-brand-border flex items-center justify-between bg-gray-50 dark:bg-brand-surface">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center">
                    <ShoppingBag className="w-4 h-4 text-brand-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-base text-gray-900 dark:text-white">Votre Panier</h3>
                    <p className="text-[11px] text-gray-500 dark:text-gray-400">
                      {items.length === 0
                        ? 'Aucun article pour le moment'
                        : `${items.reduce((acc, i) => acc + i.quantity, 0)} articles sélectionnés`}
                    </p>
                  </div>
                </div>

                <button
                  onClick={closeCart}
                  className="p-2 text-gray-400 hover:text-gray-900 dark:hover:text-white rounded-lg hover:bg-gray-100 dark:hover:bg-white/5 transition-colors"
                  aria-label="Fermer le panier"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Items List */}
              <div className="flex-1 overflow-y-auto p-5 space-y-4">
                {items.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-3">
                    <div className="w-16 h-16 rounded-2xl bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 flex items-center justify-center text-gray-400">
                      <ShoppingBag size={28} />
                    </div>
                    <h4 className="text-base font-semibold text-gray-900 dark:text-white">Votre panier est vide</h4>
                    <p className="text-xs text-gray-500 dark:text-gray-400 max-w-xs leading-relaxed">
                      Profitez des remises exclusives Black Friday avant épuisement définitif des stocks.
                    </p>
                    <Button variant="primary" size="sm" onClick={closeCart} className="mt-2">
                      Découvrir les offres
                    </Button>
                  </div>
                ) : (
                  items.map((item) => {
                    const itemSavings = (item.product.oldPrice - item.product.price) * item.quantity;
                    return (
                      <div
                        key={`${item.product.id}-${item.selectedColor}`}
                        className="flex gap-3.5 p-3 rounded-xl bg-gray-50 dark:bg-brand-surface border border-gray-200 dark:border-brand-border/80 relative group shadow-sm"
                      >
                        <img
                          src={item.product.image}
                          alt={item.product.name}
                          className="w-20 h-20 object-cover rounded-lg bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-white/10 shrink-0"
                        />
                        <div className="flex-1 min-w-0 flex flex-col justify-between">
                          <div>
                            <div className="flex items-start justify-between gap-2">
                              <h4 className="text-xs font-bold text-gray-900 dark:text-white line-clamp-2">
                                {item.product.name}
                              </h4>
                              <button
                                onClick={() => removeItem(item.product.id)}
                                className="text-gray-400 hover:text-red-500 transition-colors p-1"
                                aria-label="Supprimer cet article"
                              >
                                <Trash2 size={14} />
                              </button>
                            </div>
                            {item.selectedColor && (
                              <p className="text-[11px] text-gray-500 dark:text-gray-400 mt-0.5">
                                Variante : <span className="text-gray-800 dark:text-gray-200">{item.selectedColor}</span>
                              </p>
                            )}
                          </div>

                          <div className="flex items-center justify-between mt-2 pt-2 border-t border-gray-200 dark:border-white/5">
                            <div className="flex items-center border border-gray-300 dark:border-brand-border rounded-lg bg-white dark:bg-brand-surface-elevated">
                              <button
                                onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                                className="p-1.5 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                                aria-label="Diminuer la quantité"
                              >
                                <Minus size={12} />
                              </button>
                              <span className="text-xs font-semibold px-2 text-gray-900 dark:text-white">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                                className="p-1.5 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                                aria-label="Augmenter la quantité"
                              >
                                <Plus size={12} />
                              </button>
                            </div>

                            <div className="text-right">
                              <div className="flex items-baseline gap-1.5 justify-end">
                                <span className="text-sm font-extrabold text-gray-900 dark:text-white">
                                  {(item.product.price * item.quantity).toLocaleString('fr-FR')} €
                                </span>
                                <span className="text-[10px] text-gray-400 line-through">
                                  {(item.product.oldPrice * item.quantity).toLocaleString('fr-FR')} €
                                </span>
                              </div>
                              {itemSavings > 0 && (
                                <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-medium block">
                                  Économie: {itemSavings} €
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })
                )}
              </div>

              {/* Drawer Footer if items exist */}
              {items.length > 0 && (
                <div className="p-5 border-t border-gray-200 dark:border-brand-border bg-gray-50 dark:bg-brand-surface space-y-4">
                  <form onSubmit={handleApplyPromo} className="space-y-1.5">
                    <div className="flex gap-2">
                      <div className="relative flex-1">
                        <Tag className="w-3.5 h-3.5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                        <input
                          type="text"
                          placeholder="Code promo (ex: BLACK10)"
                          value={promoInput}
                          onChange={(e) => setPromoInput(e.target.value)}
                          className="w-full pl-8 pr-3 py-2 bg-white dark:bg-brand-surface-elevated rounded-lg border border-gray-300 dark:border-brand-border text-xs text-gray-900 dark:text-white uppercase placeholder-gray-500 focus:outline-none focus:border-brand-primary"
                        />
                      </div>
                      <Button type="submit" variant="secondary" size="sm">
                        Appliquer
                      </Button>
                    </div>

                    {promoSuccessMsg && (
                      <p className="text-[11px] text-emerald-600 dark:text-emerald-400 flex items-center gap-1 mt-1">
                        <CheckCircle2 size={12} />
                        {promoSuccessMsg}
                      </p>
                    )}

                    {promoError && (
                      <p className="text-[11px] text-red-600 dark:text-red-400 flex items-center gap-1 mt-1">
                        <AlertCircle size={12} />
                        {promoError}
                      </p>
                    )}

                    {appliedPromo && (
                      <div className="flex items-center justify-between text-[11px] bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 dark:text-emerald-400 px-2.5 py-1.5 rounded-lg">
                        <span className="flex items-center gap-1.5 font-medium">
                          <CheckCircle2 size={13} />
                          {appliedPromo.code} ({appliedPromo.description})
                        </span>
                        <button
                          type="button"
                          onClick={removePromo}
                          className="text-gray-400 hover:text-gray-700 dark:hover:text-white"
                        >
                          <X size={12} />
                        </button>
                      </div>
                    )}
                  </form>

                  <div className="space-y-2 pt-2 border-t border-gray-200 dark:border-white/5 text-xs">
                    <div className="flex justify-between text-gray-600 dark:text-gray-400">
                      <span>Sous-total articles</span>
                      <span>{subtotal.toLocaleString('fr-FR')} €</span>
                    </div>

                    {rawSavings > 0 && (
                      <div className="flex justify-between text-emerald-600 dark:text-emerald-400 font-medium">
                        <span>Économies Black Friday</span>
                        <span>-{rawSavings.toLocaleString('fr-FR')} €</span>
                      </div>
                    )}

                    {promoDiscount > 0 && (
                      <div className="flex justify-between text-blue-600 dark:text-blue-400 font-medium">
                        <span>Remise code privilège</span>
                        <span>-{promoDiscount.toLocaleString('fr-FR')} €</span>
                      </div>
                    )}

                    <div className="flex justify-between text-gray-600 dark:text-gray-400">
                      <span>Frais de port estimés</span>
                      <span className="text-emerald-600 dark:text-emerald-400 font-medium">Offerts (Express)</span>
                    </div>

                    <div className="flex justify-between items-baseline pt-2 border-t border-gray-200 dark:border-brand-border text-base font-bold text-gray-900 dark:text-white">
                      <span>Total TTC</span>
                      <span className="text-xl font-black text-gray-900 dark:text-white">
                        {total.toLocaleString('fr-FR')} €
                      </span>
                    </div>
                  </div>

                  <Button
                    variant="promo"
                    size="lg"
                    fullWidth
                    onClick={handleCheckoutClick}
                    className="shadow-lg shadow-brand-promo/20"
                  >
                    <span>Valider ma commande</span>
                    <ArrowRight size={18} />
                  </Button>

                  <div className="flex items-center justify-center gap-2 text-[11px] text-gray-500 dark:text-gray-400 text-center">
                    <ShieldCheck size={14} className="text-emerald-500" />
                    <span>Paiement 100% sécurisé et garantie constructeur 2 ans</span>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
};
