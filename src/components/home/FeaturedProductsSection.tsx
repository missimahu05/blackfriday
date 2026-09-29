import React, { useState, useMemo } from 'react';
import { Filter, SlidersHorizontal, ArrowUpDown, Search, RotateCcw, Tag } from 'lucide-react';
import { PRODUCTS } from '../../data/products';
import { Product, ProductCategory } from '../../types';
import { ProductCard } from '../ui/ProductCard';

interface FeaturedProductsSectionProps {
  onSelectProduct: (product: Product) => void;
  selectedCategoryFilter?: ProductCategory | 'all';
  onCategoryFilterChange?: (cat: ProductCategory | 'all') => void;
}

export const FeaturedProductsSection: React.FC<FeaturedProductsSectionProps> = ({
  onSelectProduct,
  selectedCategoryFilter = 'all',
  onCategoryFilterChange,
}) => {
  const [activeCategory, setActiveCategory] = useState<ProductCategory | 'all'>(
    selectedCategoryFilter
  );
  const [sortBy, setSortBy] = useState<'discount' | 'price-asc' | 'price-desc' | 'rating'>('discount');
  const [priceRange, setPriceRange] = useState<'all' | 'under150' | '150to500' | 'above500'>('all');
  const [localSearch, setLocalSearch] = useState('');

  // Keep in sync with parent prop if provided
  React.useEffect(() => {
    if (selectedCategoryFilter) {
      setActiveCategory(selectedCategoryFilter);
    }
  }, [selectedCategoryFilter]);

  const handleCategoryClick = (cat: ProductCategory | 'all') => {
    setActiveCategory(cat);
    if (onCategoryFilterChange) {
      onCategoryFilterChange(cat);
    }
  };

  const handleResetFilters = () => {
    setActiveCategory('all');
    setSortBy('discount');
    setPriceRange('all');
    setLocalSearch('');
    if (onCategoryFilterChange) {
      onCategoryFilterChange('all');
    }
  };

  const filteredProducts = useMemo(() => {
    let result = [...PRODUCTS];

    // Filter by Category
    if (activeCategory !== 'all') {
      result = result.filter((p) => p.category === activeCategory);
    }

    // Filter by Search
    if (localSearch.trim()) {
      const q = localSearch.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.categoryLabel.toLowerCase().includes(q)
      );
    }

    // Filter by Price Range
    if (priceRange === 'under150') {
      result = result.filter((p) => p.price < 150);
    } else if (priceRange === '150to500') {
      result = result.filter((p) => p.price >= 150 && p.price <= 500);
    } else if (priceRange === 'above500') {
      result = result.filter((p) => p.price > 500);
    }

    // Sorting
    if (sortBy === 'discount') {
      result.sort((a, b) => b.discountPercentage - a.discountPercentage);
    } else if (sortBy === 'price-asc') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-desc') {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'rating') {
      result.sort((a, b) => b.rating - a.rating);
    }

    return result;
  }, [activeCategory, sortBy, priceRange, localSearch]);

  return (
    <section id="catalog" className="py-16 lg:py-24 border-b border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-wider mb-3">
              <Tag size={13} />
              Catalogue Officiel
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Toutes les Offres Black Friday
            </h2>
            <p className="text-xs sm:text-sm text-gray-400 mt-2 max-w-xl">
              Filtrez et comparez les promotions selon vos critères. Chaque article est en stock physique dans nos entrepôts.
            </p>
          </div>

          {/* Reset button if filtered */}
          {(activeCategory !== 'all' || priceRange !== 'all' || localSearch !== '' || sortBy !== 'discount') && (
            <button
              onClick={handleResetFilters}
              className="inline-flex items-center gap-1.5 text-xs text-gray-400 hover:text-white bg-brand-surface border border-brand-border px-3.5 py-2 rounded-lg transition-colors shrink-0"
            >
              <RotateCcw size={13} />
              <span>Réinitialiser les filtres</span>
            </button>
          )}
        </div>

        {/* Filter Controls Bar */}
        <div className="p-4 rounded-2xl bg-brand-surface border border-brand-border mb-8 space-y-4">
          {/* Categories Pill Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            {[
              { id: 'all', label: 'Toutes les Offres' },
              { id: 'tech', label: 'High-Tech & Audio' },
              { id: 'gaming', label: 'Gaming & Setup' },
              { id: 'fashion', label: 'Mode & Streetwear' },
              { id: 'home', label: 'Maison Connectée' },
              { id: 'lifestyle', label: 'Montres & Lifestyle' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleCategoryClick(tab.id as ProductCategory | 'all')}
                className={`px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                  activeCategory === tab.id
                    ? 'bg-brand-primary text-white shadow-md shadow-brand-primary/20'
                    : 'bg-brand-surface-elevated text-gray-400 hover:text-white hover:bg-white/5 border border-brand-border'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Sub-filters: Search, Price, Sort */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3 border-t border-white/5">
            {/* Search */}
            <div className="relative">
              <Search className="w-3.5 h-3.5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Filtrer par nom..."
                value={localSearch}
                onChange={(e) => setLocalSearch(e.target.value)}
                className="w-full pl-8 pr-3 py-2 bg-brand-surface-elevated rounded-lg border border-brand-border text-xs text-white placeholder-gray-500 focus:outline-none focus:border-brand-primary"
              />
            </div>

            {/* Price Filter */}
            <div className="flex items-center gap-2">
              <span className="text-xs text-gray-400 font-medium shrink-0">Prix :</span>
              <select
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value as any)}
                className="w-full px-3 py-2 bg-brand-surface-elevated rounded-lg border border-brand-border text-xs text-white focus:outline-none focus:border-brand-primary"
              >
                <option value="all">Tous les budgets</option>
                <option value="under150">Moins de 150 €</option>
                <option value="150to500">150 € à 500 €</option>
                <option value="above500">Plus de 500 €</option>
              </select>
            </div>

            {/* Sorting */}
            <div className="flex items-center gap-2">
              <span className="text-xs text-gray-400 font-medium shrink-0">Tri :</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="w-full px-3 py-2 bg-brand-surface-elevated rounded-lg border border-brand-border text-xs text-white focus:outline-none focus:border-brand-primary"
              >
                <option value="discount">Plus fortes réductions (%)</option>
                <option value="price-asc">Prix croissant</option>
                <option value="price-desc">Prix décroissant</option>
                <option value="rating">Meilleures notes clients</option>
              </select>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        {filteredProducts.length === 0 ? (
          <div className="p-12 text-center rounded-2xl bg-brand-surface border border-brand-border space-y-3">
            <SlidersHorizontal size={32} className="mx-auto text-gray-500" />
            <h3 className="text-base font-bold text-white">Aucun produit ne correspond à vos filtres</h3>
            <p className="text-xs text-gray-400 max-w-xs mx-auto">
              Essayez de modifier votre recherche ou réinitialisez les filtres pour afficher l'ensemble des offres.
            </p>
            <button
              onClick={handleResetFilters}
              className="mt-2 text-xs font-bold text-brand-primary hover:underline"
            >
              Afficher tout le catalogue
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onQuickView={onSelectProduct}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
