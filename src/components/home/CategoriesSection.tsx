import React from 'react';
import { Laptop, Gamepad2, Shirt, Home, Watch, ArrowRight, Tag } from 'lucide-react';
import { CATEGORIES } from '../../data/categories';
import type { ProductCategory } from '../../types';

interface CategoriesSectionProps {
  onSelectCategory: (categoryId: ProductCategory) => void;
}

export const CategoriesSection: React.FC<CategoriesSectionProps> = ({ onSelectCategory }) => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Laptop':
        return <Laptop className="w-5 h-5 text-blue-500" />;
      case 'Gamepad2':
        return <Gamepad2 className="w-5 h-5 text-purple-500" />;
      case 'Shirt':
        return <Shirt className="w-5 h-5 text-pink-500" />;
      case 'Home':
        return <Home className="w-5 h-5 text-emerald-500" />;
      case 'Watch':
        return <Watch className="w-5 h-5 text-amber-500" />;
      default:
        return <Tag className="w-5 h-5 text-blue-500" />;
    }
  };

  return (
    <section id="categories" className="py-16 lg:py-24 border-b border-brand-border-light dark:border-brand-border bg-slate-100/50 dark:bg-brand-surface/40 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-wider mb-3">
              <Tag size={13} />
              Navigation Thématique
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-950 dark:text-white tracking-tight">
              Parcourir par Univers
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-2 max-w-xl">
              Chaque rayon applique des remises exclusives négociées directement auprès des marques officielles.
            </p>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {CATEGORIES.map((cat) => (
            <div
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className="group relative rounded-2xl overflow-hidden bg-white dark:bg-brand-surface border border-gray-200 dark:border-brand-border hover:border-brand-primary/60 transition-all duration-300 cursor-pointer shadow-sm hover:shadow-xl dark:shadow-none flex flex-col justify-between"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100 dark:bg-black/40">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-80" />

                <div className="absolute top-3 left-3 bg-red-600 text-white font-extrabold text-[11px] px-2.5 py-1 rounded-md shadow-md">
                  {cat.featuredDiscount}
                </div>

                <div className="absolute bottom-3 left-3 w-9 h-9 rounded-lg bg-white/90 dark:bg-black/60 backdrop-blur-md border border-gray-200 dark:border-white/10 flex items-center justify-center shadow-md">
                  {getIcon(cat.iconName)}
                </div>
              </div>

              <div className="p-4 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="font-bold text-sm text-gray-900 dark:text-white group-hover:text-brand-primary dark:group-hover:text-blue-400 transition-colors">
                    {cat.name}
                  </h3>
                  <p className="text-[11px] text-gray-600 dark:text-gray-400 line-clamp-2 mt-1 leading-relaxed">
                    {cat.shortDesc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-gray-100 dark:border-white/5 flex items-center justify-between text-xs font-semibold text-gray-700 dark:text-gray-300 group-hover:text-brand-primary dark:group-hover:text-white">
                  <span>{cat.itemCount} offres</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform text-blue-500" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
