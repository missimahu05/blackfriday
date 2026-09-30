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
import { useThemeStore } from './store/useThemeStore';
import type { Product, ProductCategory } from './types';

export function App() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [completedOrder, setCompletedOrder] = useState<{ id: string; total: number } | null>(null);
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState<ProductCategory | 'all'>('all');

  const { theme, toggleTheme } = useThemeStore();

  // Force documentElement & body class synchronization
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      document.body.classList.add('dark');
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.body.classList.remove('dark');
      document.documentElement.setAttribute('data-theme', 'light');
    }
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
      className={`min-h-screen ${theme === 'dark' ? 'dark' : ''} bg-white dark:bg-[#080A0F] text-slate-900 dark:text-white flex flex-col font-sans selection:bg-blue-600 dark:selection:bg-red-600 selection:text-white transition-colors duration-200`}
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

      {/* Floating Theme Quick Switcher (Always accessible on all devices) */}
      <aside aria-label="Sélecteur de mode d'affichage" className="fixed bottom-5 left-5 z-40">
        <button
          onClick={toggleTheme}
          className="group flex items-center gap-2.5 px-3.5 py-2.5 rounded-full bg-white dark:bg-[#11141B] text-slate-800 dark:text-white border-2 border-blue-600 dark:border-red-600 shadow-xl shadow-blue-500/20 dark:shadow-red-500/25 hover:scale-105 active:scale-95 transition-all focus:outline-none"
          title={theme === 'dark' ? 'Basculer en Mode Clair (Blanc & Bleu)' : 'Basculer en Mode Sombre (Noir & Rouge)'}
        >
          {theme === 'dark' ? (
            <>
              <Sun className="w-4 h-4 text-red-500" />
              <span className="text-xs font-bold hidden sm:inline text-red-400">Mode Sombre (Noir/Rouge)</span>
            </>
          ) : (
            <>
              <Moon className="w-4 h-4 text-blue-600" />
              <span className="text-xs font-bold hidden sm:inline text-blue-700">Mode Clair (Blanc/Bleu)</span>
            </>
          )}
        </button>
      </aside>

      {/* Toast System */}
      <ToastContainer />
    </div>
  );
}

export default App;
