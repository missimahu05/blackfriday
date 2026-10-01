import React, { useState, useEffect } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { CartDrawer } from './components/layout/CartDrawer';
import { WishlistDrawer } from './components/layout/WishlistDrawer';
import { ProductDetailModal } from './components/layout/ProductDetailModal';
import { CheckoutModal } from './components/layout/CheckoutModal';
import { OrderSuccessModal } from './components/layout/OrderSuccessModal';
import { ToastContainer } from './components/ui/ToastContainer';

import { HeroSection } from './components/home/HeroSection';
import { FlashDealsSection } from './components/home/FlashDealsSection';
import { CategoriesSection } from './components/home/CategoriesSection';
import { SpotlightDealSection } from './components/home/SpotlightDealSection';
import { FeaturedProductsSection } from './components/home/FeaturedProductsSection';
import { ReviewsSection } from './components/home/ReviewsSection';
import { NewsletterSection } from './components/home/NewsletterSection';

import { Sun, Moon } from 'lucide-react';
import { useThemeStore, applyThemeToDOM } from './store/useThemeStore';
import type { Product, ProductCategory } from './types';

export function App() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [completedOrder, setCompletedOrder] = useState<{ id: string; total: number } | null>(null);
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState<ProductCategory | 'all'>('all');

  const { theme, setTheme } = useThemeStore();

  // Force documentElement & body class synchronization
  useEffect(() => {
    applyThemeToDOM(theme);
  }, [theme]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else if (sectionId === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (sectionId === 'guarantees') {
      const footerElement = document.querySelector('footer');
      footerElement?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectCategoryFromHeroOrSection = (cat: ProductCategory) => {
    setSelectedCategoryFilter(cat);
    scrollToSection('catalog');
  };

  const handleOrderSuccess = (orderId: string, orderTotal: number) => {
    setCompletedOrder({ id: orderId, total: orderTotal });
  };

  return (
    <div
      data-theme={theme}
      className={`min-h-screen ${theme === 'dark' ? 'dark bg-mesh-dark bg-grid-dark text-white' : 'bg-mesh-light bg-grid-light text-slate-900'} flex flex-col font-sans selection:bg-blue-600 dark:selection:bg-red-600 selection:text-white transition-colors duration-200`}
    >
      {/* Sticky Navbar without clutter bands */}
      <Navbar
        onSelectProduct={(p) => setSelectedProduct(p)}
        onNavigateSection={scrollToSection}
        onOpenCheckout={() => setIsCheckoutOpen(true)}
      />

      {/* Main Content View with Full Viewport Sections */}
      <main className="flex-1">
        {/* Full-Height Hero Section with 3D Tilt */}
        <HeroSection
          onExploreDeals={() => scrollToSection('catalog')}
          onExploreFlash={() => scrollToSection('flash-deals')}
          onSelectProduct={(p) => setSelectedProduct(p)}
        />

        {/* Flash Deals Section */}
        <FlashDealsSection
          onSelectProduct={(p) => setSelectedProduct(p)}
          onExploreAll={() => scrollToSection('catalog')}
        />

        {/* Categories Section */}
        <CategoriesSection
          onSelectCategory={handleSelectCategoryFromHeroOrSection}
        />

        {/* Spotlight Featured Deal */}
        <SpotlightDealSection
          onSelectProduct={(p) => setSelectedProduct(p)}
        />

        {/* Full Interactive Catalog */}
        <FeaturedProductsSection
          onSelectProduct={(p) => setSelectedProduct(p)}
          selectedCategoryFilter={selectedCategoryFilter}
          onCategoryFilterChange={(cat) => setSelectedCategoryFilter(cat)}
        />

        {/* Reviews Section */}
        <ReviewsSection />

        {/* Newsletter Section */}
        <NewsletterSection />
      </main>

      {/* Footer with Jolidon HOUNGUE developer credit */}
      <Footer onNavigateSection={scrollToSection} />

      {/* Slide-over Drawers & Modals */}
      <CartDrawer onProceedToCheckout={() => setIsCheckoutOpen(true)} />
      <WishlistDrawer onSelectProduct={(p) => setSelectedProduct(p)} />
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        onOrderSuccess={handleOrderSuccess}
      />
      <OrderSuccessModal
        orderId={completedOrder?.id || null}
        total={completedOrder?.total || 0}
        onClose={() => setCompletedOrder(null)}
      />

      {/* Floating Theme Quick Switcher (Dual segmented pill with active illuminated badge) */}
      <aside aria-label="Sélecteur de mode d'affichage" className="fixed bottom-5 left-5 z-40">
        <div className="flex items-center p-1 rounded-full bg-white/95 dark:bg-[#11141B]/95 backdrop-blur-md border border-slate-300 dark:border-[#232936] shadow-2xl shadow-slate-900/15 dark:shadow-black/60">
          <button
            onClick={() => setTheme('light')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold transition-all focus:outline-none ${
              theme === 'light'
                ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
            title="Activer le Mode Clair (Blanc & Bleu)"
          >
            <Sun className="w-3.5 h-3.5" />
            <span>Clair</span>
          </button>
          <button
            onClick={() => setTheme('dark')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold transition-all focus:outline-none ${
              theme === 'dark'
                ? 'bg-red-600 text-white shadow-md shadow-red-600/30'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
            title="Activer le Mode Sombre (Noir & Rouge)"
          >
            <Moon className="w-3.5 h-3.5" />
            <span>Sombre</span>
          </button>
        </div>
      </aside>

      {/* Toast System */}
      <ToastContainer />
    </div>
  );
}

export default App;
