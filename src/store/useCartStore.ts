import { create } from 'zustand';
import { CartItem, Product, PromoCode } from '../types';

export const AVAILABLE_PROMOS: Record<string, PromoCode> = {
  BLACK10: {
    code: 'BLACK10',
    discountRate: 0.1,
    description: '10% de réduction immédiate Black Friday',
  },
  NOVA20: {
    code: 'NOVA20',
    discountRate: 0.2,
    description: '20% de remise supplémentaire pour les membres NOVA',
  },
};

interface CartState {
  items: CartItem[];
  isOpen: boolean;
  appliedPromo: PromoCode | null;
  promoError: string | null;

  openCart: () => void;
  closeCart: () => void;
  toggleCart: () => void;

  addItem: (product: Product, selectedColor?: string) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;

  applyPromo: (code: string) => boolean;
  removePromo: () => void;

  getTotalItemsCount: () => number;
  getSubtotal: () => number;
  getRawSavings: () => number;
  getPromoDiscountAmount: () => number;
  getFinalTotal: () => number;
}

export const useCartStore = create<CartState>((set, get) => ({
  items: [],
  isOpen: false,
  appliedPromo: null,
  promoError: null,

  openCart: () => set({ isOpen: true }),
  closeCart: () => set({ isOpen: false }),
  toggleCart: () => set((state) => ({ isOpen: !state.isOpen })),

  addItem: (product, selectedColor) => {
    set((state) => {
      const existingIndex = state.items.findIndex(
        (item) => item.product.id === product.id && item.selectedColor === selectedColor
      );

      if (existingIndex > -1) {
        const updated = [...state.items];
        updated[existingIndex].quantity += 1;
        return { items: updated, isOpen: true };
      }

      return {
        items: [
          ...state.items,
          {
            product,
            quantity: 1,
            selectedColor: selectedColor || product.colors?.[0]?.name,
          },
        ],
        isOpen: true,
      };
    });
  },

  removeItem: (productId) => {
    set((state) => ({
      items: state.items.filter((item) => item.product.id !== productId),
    }));
  },

  updateQuantity: (productId, quantity) => {
    if (quantity <= 0) {
      get().removeItem(productId);
      return;
    }
    set((state) => ({
      items: state.items.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      ),
    }));
  },

  clearCart: () => set({ items: [], appliedPromo: null, promoError: null }),

  applyPromo: (code: string) => {
    const cleanCode = code.trim().toUpperCase();
    const promo = AVAILABLE_PROMOS[cleanCode];

    if (promo) {
      set({ appliedPromo: promo, promoError: null });
      return true;
    } else {
      set({ promoError: 'Code promotionnel invalide ou expiré.' });
      return false;
    }
  },

  removePromo: () => set({ appliedPromo: null, promoError: null }),

  getTotalItemsCount: () => {
    return get().items.reduce((sum, item) => sum + item.quantity, 0);
  },

  getSubtotal: () => {
    return get().items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  },

  getRawSavings: () => {
    return get().items.reduce(
      (sum, item) => sum + (item.product.oldPrice - item.product.price) * item.quantity,
      0
    );
  },

  getPromoDiscountAmount: () => {
    const promo = get().appliedPromo;
    if (!promo) return 0;
    const subtotal = get().getSubtotal();
    return Math.round(subtotal * promo.discountRate);
  },

  getFinalTotal: () => {
    const subtotal = get().getSubtotal();
    const promoDiscount = get().getPromoDiscountAmount();
    return Math.max(0, subtotal - promoDiscount);
  },
}));
