import React, { useState } from 'react';
import { AnnouncementBar } from './components/layout/AnnouncementBar';
import { Navbar } from './components/layout/Navbar';
import { PromoMarquee } from './components/layout/PromoMarquee';
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

import { Product, ProductCategory } from './types';

export function App() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [completedOrder, setCompletedOrder] = useState<{ id: string; total: number } | null>(null);
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState<ProductCategory | 'all'>('all');

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
    <div className="min-h-screen bg-slate-50 dark:bg-brand-bg text-slate-900 dark:text-brand-text-main flex flex-col font-sans selection:bg-brand-primary selection:text-white transition-colors duration-300">
      {/* Top Banner */}
      <AnnouncementBar onExploreDeals={() => scrollToSection('flash-deals')} />

      {/* Sticky Navbar with Dark/Light Toggle */}
      <Navbar
        onSelectProduct={(p) => setSelectedProduct(p)}
        onNavigateSection={scrollToSection}
        onOpenCheckout={() => setIsCheckoutOpen(true)}
      />

      {/* Main Content View */}
      <main className="flex-1">
        {/* Hero Section with Framer Motion and Countdown */}
        <HeroSection
          onExploreDeals={() => scrollToSection('catalog')}
          onExploreFlash={() => scrollToSection('flash-deals')}
          onSelectProduct={(p) => setSelectedProduct(p)}
        />

        {/* Infinite Promo Marquee Ticker */}
        <PromoMarquee />

        {/* Flash Deals Section with Individual Timers */}
        <FlashDealsSection
          onSelectProduct={(p) => setSelectedProduct(p)}
          onExploreAll={() => scrollToSection('catalog')}
        />

        {/* Categories Section with Vector Icons */}
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

      {/* Footer */}
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

      {/* Toast System */}
      <ToastContainer />
    </div>
  );
}

export default App;
