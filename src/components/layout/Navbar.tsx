import React, { useState, useRef, useEffect } from 'react';
import {
  Zap,
  Search,
  Heart,
  ShoppingCart,
  Menu,
  X,
  Flame,
  ChevronRight,
  ShieldCheck,
  Tag,
  Sun,
  Moon
} from 'lucide-react';
import { useCartStore } from '../../store/useCartStore';
import { useWishlistStore } from '../../store/useWishlistStore';
import { useThemeStore } from '../../store/useThemeStore';
import { PRODUCTS } from '../../data/products';
import type { Product } from '../../types';

interface NavbarProps {
  onSelectProduct: (product: Product) => void;
  onNavigateSection: (sectionId: string) => void;
  onOpenCheckout: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onSelectProduct,
  onNavigateSection,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  const { openCart, getTotalItemsCount } = useCartStore();
  const { openWishlist, items: wishlistItems } = useWishlistStore();
  const { theme, toggleTheme } = useThemeStore();

  const cartCount = getTotalItemsCount();
  const wishlistCount = wishlistItems.length;

  const searchResults = searchQuery.trim()
    ? PRODUCTS.filter(
        (p) =>
          p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.description.toLowerCase().includes(searchQuery.toLowerCase())
      ).slice(0, 5)
    : [];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsSearchOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearchResultClick = (product: Product) => {
    onSelectProduct(product);
    setSearchQuery('');
    setIsSearchOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 dark:bg-[#0f121a]/95 backdrop-blur-xl border-b border-blue-100 dark:border-red-950/40 shadow-sm shadow-blue-500/5 dark:shadow-red-500/5 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4">
          {/* Logo Brand Distinctif */}
          <div className="flex items-center gap-8">
            <button
              onClick={() => onNavigateSection('hero')}
              className="flex items-center gap-3 text-left group focus:outline-none"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-primary to-blue-400 dark:from-red-600 dark:to-red-500 flex items-center justify-center shadow-lg shadow-brand-primary/25 dark:shadow-red-600/30 group-hover:scale-105 group-active:scale-95 transition-all">
                <Zap className="w-5 h-5 text-white fill-white" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="text-xl font-black tracking-tight text-slate-900 dark:text-white font-sans">
                    NOVA
                  </span>
                  <span className="text-xs font-bold text-white bg-brand-primary dark:bg-brand-promo px-2 py-0.5 rounded-full shadow-sm tracking-wider">
                    DEALS
                  </span>
                </div>
                <span className="text-[10px] text-blue-600 dark:text-red-400 uppercase tracking-widest block font-bold">
                  Black Friday 2026
                </span>
              </div>
            </button>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold text-slate-600 dark:text-slate-300">
              <button
                onClick={() => onNavigateSection('flash-deals')}
                className="flex items-center gap-1.5 hover:text-brand-primary dark:hover:text-red-400 transition-colors py-2"
              >
                <Flame className="w-4 h-4 text-brand-primary dark:text-red-500 animate-pulse" />
                Ventes Flash
              </button>
              <button
                onClick={() => onNavigateSection('categories')}
                className="hover:text-slate-950 dark:hover:text-white transition-colors py-2"
              >
                Rayons
              </button>
              <button
                onClick={() => onNavigateSection('spotlight')}
                className="hover:text-slate-950 dark:hover:text-white transition-colors py-2"
              >
                Offre Phare
              </button>
              <button
                onClick={() => onNavigateSection('catalog')}
                className="hover:text-slate-950 dark:hover:text-white transition-colors py-2"
              >
                Catalogue
              </button>
              <button
                onClick={() => onNavigateSection('guarantees')}
                className="hover:text-slate-950 dark:hover:text-white transition-colors py-2"
              >
                Garanties
              </button>
            </nav>
          </div>

          {/* Search bar, Theme Switcher & Actions */}
          <div className="flex items-center gap-3 sm:gap-4 flex-1 justify-end max-w-lg">
            {/* Search Input Box */}
            <div ref={searchRef} className="relative w-full max-w-xs hidden sm:block">
              <div className="relative">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Rechercher un produit..."
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setIsSearchOpen(true);
                  }}
                  onFocus={() => setIsSearchOpen(true)}
                  className="w-full pl-9 pr-4 py-2 bg-slate-100 dark:bg-[#151a24] rounded-xl border border-slate-200 dark:border-slate-800 text-xs text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-brand-primary dark:focus:border-brand-promo focus:ring-2 focus:ring-brand-primary/10 transition-all"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700 dark:hover:text-white"
                  >
                    <X size={13} />
                  </button>
                )}
              </div>

              {/* Search Dropdown */}
              {isSearchOpen && searchResults.length > 0 && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-[#1a202c] border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl overflow-hidden z-50">
                  <div className="p-2 border-b border-slate-100 dark:border-white/5 text-[11px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                    {searchResults.length} résultats correspondants
                  </div>
                  <div className="max-h-72 overflow-y-auto divide-y divide-slate-100 dark:divide-white/5">
                    {searchResults.map((product) => (
                      <button
                        key={product.id}
                        onClick={() => handleSearchResultClick(product)}
                        className="w-full p-2.5 flex items-center gap-3 hover:bg-slate-50 dark:hover:bg-white/5 text-left transition-colors group"
                      >
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-10 h-10 object-cover rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-white/10 shrink-0"
                        />
                        <div className="flex-1 min-w-0">
                          <p className="text-xs font-semibold text-slate-900 dark:text-white truncate group-hover:text-blue-600 dark:group-hover:text-red-400 transition-colors">
                            {product.name}
                          </p>
                          <div className="flex items-center gap-2 mt-0.5">
                            <span className="text-xs font-bold text-brand-primary dark:text-red-400">
                              {product.price} €
                            </span>
                            <span className="text-[10px] text-slate-400 line-through">
                              {product.oldPrice} €
                            </span>
                            <span className="text-[10px] bg-red-500/10 text-red-600 dark:text-red-400 px-1 rounded font-bold">
                              -{product.discountPercentage}%
                            </span>
                          </div>
                        </div>
                        <ChevronRight className="w-4 h-4 text-slate-400 group-hover:translate-x-0.5 transition-all" />
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Dark / Light Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2.5 text-slate-600 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white bg-slate-100 dark:bg-[#151a24] hover:bg-slate-200 dark:hover:bg-[#1d2331] border border-slate-200 dark:border-slate-800 rounded-xl transition-all min-w-[42px] min-h-[42px] flex items-center justify-center focus:outline-none"
              aria-label={theme === 'dark' ? 'Passer en mode clair' : 'Passer en mode sombre'}
              title={theme === 'dark' ? 'Passer en Mode Clair' : 'Passer en Mode Sombre'}
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400 transition-transform hover:rotate-90 duration-300" />
              ) : (
                <Moon className="w-4 h-4 text-blue-600 transition-transform hover:-rotate-12 duration-300" />
              )}
            </button>

            {/* Wishlist Button with perfectly centered badge */}
            <button
              onClick={openWishlist}
              className="relative p-2.5 text-slate-600 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white bg-slate-100 dark:bg-[#151a24] hover:bg-slate-200 dark:hover:bg-[#1d2331] border border-slate-200 dark:border-slate-800 rounded-xl transition-colors focus:outline-none min-w-[42px] min-h-[42px] flex items-center justify-center"
              aria-label="Voir mes favoris"
            >
              <Heart className="w-4 h-4" />
              {wishlistCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-brand-primary dark:bg-red-500 text-white text-[10px] font-extrabold w-5 h-5 rounded-full flex items-center justify-center border-2 border-white dark:border-[#0f121a] shadow-md">
                  {wishlistCount}
                </span>
              )}
            </button>

            {/* Cart Button with perfectly embedded framing */}
            <button
              onClick={openCart}
              className="relative flex items-center justify-center gap-2.5 px-4 py-2.5 text-white bg-brand-primary dark:bg-brand-promo hover:bg-brand-primary-hover dark:hover:bg-brand-promo-hover rounded-xl transition-all shadow-md shadow-brand-primary/25 dark:shadow-brand-promo/30 focus:outline-none active:scale-95 min-h-[42px]"
              aria-label="Ouvrir le panier"
            >
              <ShoppingCart className="w-4 h-4 text-white" />
              <span className="text-xs font-bold hidden sm:inline">Panier</span>
              {cartCount > 0 ? (
                <span className="bg-white text-brand-primary dark:text-brand-promo text-[11px] font-black min-w-[20px] h-5 px-1.5 rounded-full flex items-center justify-center shadow-inner">
                  {cartCount}
                </span>
              ) : null}
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2.5 text-slate-600 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white bg-slate-100 dark:bg-[#151a24] border border-slate-200 dark:border-slate-800 rounded-xl transition-colors min-w-[42px] min-h-[42px] flex items-center justify-center"
              aria-label="Menu principal"
            >
              {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-slate-200 dark:border-slate-800 space-y-2">
            <button
              onClick={() => {
                onNavigateSection('flash-deals');
                setIsMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-between p-3 rounded-xl bg-blue-50 dark:bg-red-500/10 text-brand-primary dark:text-red-400 font-semibold text-sm"
            >
              <span className="flex items-center gap-2">
                <Flame className="w-4 h-4 text-brand-primary dark:text-red-500" />
                Ventes Flash Exclusives
              </span>
              <ChevronRight size={16} />
            </button>
            <button
              onClick={() => {
                onNavigateSection('categories');
                setIsMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-slate-100 dark:hover:bg-white/5 text-slate-700 dark:text-slate-200 text-sm"
            >
              <span className="flex items-center gap-2">
                <Tag className="w-4 h-4 text-slate-400" />
                Catégories de Produits
              </span>
              <ChevronRight size={16} />
            </button>
            <button
              onClick={() => {
                onNavigateSection('spotlight');
                setIsMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-slate-100 dark:hover:bg-white/5 text-slate-700 dark:text-slate-200 text-sm"
            >
              <span className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-blue-500 dark:text-red-500" />
                Offre Phare de la Semaine
              </span>
              <ChevronRight size={16} />
            </button>
            <button
              onClick={() => {
                onNavigateSection('catalog');
                setIsMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-slate-100 dark:hover:bg-white/5 text-slate-700 dark:text-slate-200 text-sm"
            >
              <span className="flex items-center gap-2">
                <Tag className="w-4 h-4 text-slate-400" />
                Catalogue Complet
              </span>
              <ChevronRight size={16} />
            </button>
            <button
              onClick={() => {
                onNavigateSection('guarantees');
                setIsMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-slate-100 dark:hover:bg-white/5 text-slate-700 dark:text-slate-200 text-sm"
            >
              <span className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-500" />
                Engagements & Garanties
              </span>
              <ChevronRight size={16} />
            </button>
          </div>
        )}
      </div>
    </header>
  );
};
