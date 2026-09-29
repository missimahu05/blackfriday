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
        return <Laptop className="w-5 h-5 text-blue-600 dark:text-red-400" />;
      case 'Gamepad2':
        return <Gamepad2 className="w-5 h-5 text-blue-600 dark:text-red-400" />;
      case 'Shirt':
        return <Shirt className="w-5 h-5 text-blue-600 dark:text-red-400" />;
      case 'Home':
        return <Home className="w-5 h-5 text-blue-600 dark:text-red-400" />;
      case 'Watch':
        return <Watch className="w-5 h-5 text-blue-600 dark:text-red-400" />;
      default:
        return <Tag className="w-5 h-5 text-blue-600 dark:text-red-400" />;
    }
  };

  return (
    <section id="categories" className="min-h-screen py-16 lg:py-24 border-b border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-[#0c0f17] flex flex-col justify-center transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 dark:bg-red-500/10 border border-blue-200 dark:border-red-500/20 text-blue-700 dark:text-red-400 text-xs font-bold uppercase tracking-wider mb-3">
              <Tag size={13} />
              Navigation Thématique
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
              Parcourir par Univers
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-2 max-w-xl">
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
              className="group relative rounded-2xl overflow-hidden bg-white dark:bg-[#131722] border border-slate-200 dark:border-slate-800 hover:border-blue-500/60 dark:hover:border-red-500/60 transition-all duration-300 cursor-pointer shadow-sm hover:shadow-xl dark:shadow-none flex flex-col justify-between"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100 dark:bg-black/40">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-80" />

                {/* Badge de remise : Bleu en clair, Rouge en sombre */}
                <div className="absolute top-3 left-3 bg-blue-600 dark:bg-red-600 text-white font-extrabold text-[11px] px-2.5 py-1 rounded-md shadow-md">
                  {cat.featuredDiscount}
                </div>

                <div className="absolute bottom-3 left-3 w-9 h-9 rounded-xl bg-white/90 dark:bg-black/60 backdrop-blur-md border border-slate-200 dark:border-white/10 flex items-center justify-center shadow-md">
                  {getIcon(cat.iconName)}
                </div>
              </div>

              <div className="p-4 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="font-bold text-sm text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-red-400 transition-colors">
                    {cat.name}
                  </h3>
                  <p className="text-[11px] text-slate-600 dark:text-slate-400 line-clamp-2 mt-1 leading-relaxed">
                    {cat.shortDesc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 dark:border-white/5 flex items-center justify-between text-xs font-semibold text-slate-700 dark:text-slate-300 group-hover:text-blue-600 dark:group-hover:text-red-400">
                  <span>{cat.itemCount} offres</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform text-blue-600 dark:text-red-400" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
