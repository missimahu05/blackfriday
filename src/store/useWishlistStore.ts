import { create } from 'zustand';
import { Product } from '../types';

interface WishlistState {
  items: Product[];
  isOpen: boolean;
  openWishlist: () => void;
  closeWishlist: () => void;
  toggleWishlistDrawer: () => void;
  toggleWishlist: (product: Product) => void;
  isInWishlist: (productId: string) => boolean;
  removeItem: (productId: string) => void;
  clearWishlist: () => void;
}

export const useWishlistStore = create<WishlistState>((set, get) => ({
  items: [],
  isOpen: false,
  openWishlist: () => set({ isOpen: true }),
  closeWishlist: () => set({ isOpen: false }),
  toggleWishlistDrawer: () => set((state) => ({ isOpen: !state.isOpen })),

  toggleWishlist: (product) => {
    const exists = get().items.some((item) => item.id === product.id);
    if (exists) {
      set((state) => ({
        items: state.items.filter((item) => item.id !== product.id),
      }));
    } else {
      set((state) => ({
        items: [...state.items, product],
      }));
    }
  },

  isInWishlist: (productId) => {
    return get().items.some((item) => item.id === productId);
  },

  removeItem: (productId) => {
    set((state) => ({
      items: state.items.filter((item) => item.id !== productId),
    }));
  },

  clearWishlist: () => set({ items: [] }),
}));
