import { ProductCategory } from '../types';

export interface CategoryInfo {
  id: ProductCategory;
  name: string;
  shortDesc: string;
  itemCount: number;
  featuredDiscount: string;
  image: string;
  iconName: 'Laptop' | 'Gamepad2' | 'Shirt' | 'Home' | 'Watch';
}

export const CATEGORIES: CategoryInfo[] = [
  {
    id: 'tech',
    name: 'High-Tech & Audio',
    shortDesc: 'Casques ANC, ordinateurs ultrabooks, smartphones et accessoires de pointe.',
    itemCount: 42,
    featuredDiscount: "Jusqu'à -55%",
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=80',
    iconName: 'Laptop',
  },
  {
    id: 'gaming',
    name: 'Gaming & Setup',
    shortDesc: 'Consoles next-gen, écrans OLED 240Hz, claviers mécaniques et cartes graphiques.',
    itemCount: 28,
    featuredDiscount: "Jusqu'à -65%",
    image: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=800&auto=format&fit=crop&q=80',
    iconName: 'Gamepad2',
  },
  {
    id: 'fashion',
    name: 'Mode & Streetwear',
    shortDesc: 'Sneakers en édition limitée, vestes techniques et prêt-à-porter automne/hiver.',
    itemCount: 35,
    featuredDiscount: "Jusqu'à -70%",
    image: 'https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?w=800&auto=format&fit=crop&q=80',
    iconName: 'Shirt',
  },
  {
    id: 'home',
    name: 'Maison Connectée',
    shortDesc: 'Robots aspirateurs intelligents, éclairage dynamique et cafetières barista.',
    itemCount: 24,
    featuredDiscount: "Jusqu'à -50%",
    image: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=800&auto=format&fit=crop&q=80',
    iconName: 'Home',
  },
  {
    id: 'lifestyle',
    name: 'Montres & Lifestyle',
    shortDesc: 'Montres GPS d’exploration, bagagerie technique et accessoires quotidiens.',
    itemCount: 19,
    featuredDiscount: "Jusqu'à -45%",
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&auto=format&fit=crop&q=80',
    iconName: 'Watch',
  },
];
