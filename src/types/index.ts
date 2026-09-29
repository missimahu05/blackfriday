export type ProductCategory = 'tech' | 'gaming' | 'fashion' | 'home' | 'lifestyle';

export interface Product {
  id: string;
  name: string;
  slug: string;
  category: ProductCategory;
  categoryLabel: string;
  price: number;
  oldPrice: number;
  discountPercentage: number;
  rating: number;
  reviewsCount: number;
  image: string;
  gallery: string[];
  description: string;
  features: string[];
  stock: number;
  soldCount: number;
  isFlashDeal?: boolean;
  flashEndsInMinutes?: number;
  badge?: string;
  colors?: { name: string; hex: string }[];
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedColor?: string;
}

export interface PromoCode {
  code: string;
  discountRate: number; // e.g., 0.1 for 10%
  description: string;
}

export interface Review {
  id: string;
  author: string;
  avatar: string;
  rating: number;
  date: string;
  verified: boolean;
  title: string;
  comment: string;
  productName: string;
}
