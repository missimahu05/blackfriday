import React, { useState, useEffect } from 'react';
import { Flame, Clock, ShieldCheck, ArrowRight, Zap, Star } from 'lucide-react';
import { Button } from '../ui/Button';
import { SPOTLIGHT_PRODUCT } from '../../data/products';
import { Product } from '../../types';

interface HeroSectionProps {
  onExploreDeals: () => void;
  onExploreFlash: () => void;
  onSelectProduct: (product: Product) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreDeals,
  onExploreFlash,
  onSelectProduct,
}) => {
  // Real-time Countdown timer
  const [timeLeft, setTimeLeft] = useState({
    days: 4,
    hours: 14,
    minutes: 32,
    seconds: 18,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: 59, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-16 lg:pb-24 border-b border-brand-border">
      {/* Background radial gradient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-primary/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute -top-10 right-10 w-[400px] h-[400px] bg-brand-promo/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Strategic Value Proposition */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Header Micro Badges */}
            <div className="inline-flex items-center gap-2 p-1.5 pr-4 rounded-full bg-brand-surface border border-brand-border text-xs text-gray-300">
              <span className="flex items-center gap-1.5 bg-gradient-to-r from-brand-promo to-red-600 text-white font-bold px-2.5 py-1 rounded-full text-[11px] uppercase tracking-wider">
                <Flame size={13} className="text-amber-300" />
                Vente Annuelle
              </span>
              <span className="font-semibold text-white">Édition Limitée Black Friday 2026</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.08]">
              Les prix chutent.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-white">
                Pas vos attentes.
              </span>
            </h1>

            {/* Sub-headline */}
            <p className="text-sm sm:text-base text-gray-300 max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Accédez aux remises vérifiées jusqu’à <strong className="text-red-400 font-bold">-70%</strong> sur l’audio haute fidélité, les setups gaming d’élite et la tech de pointe. Stocks garantis constructeurs, expédiés en 24h.
            </p>

            {/* Dynamic Countdown Display */}
            <div className="p-4 sm:p-5 rounded-2xl bg-brand-surface border border-brand-border max-w-lg mx-auto lg:mx-0 shadow-lg">
              <div className="flex items-center justify-between text-xs text-gray-400 mb-3">
                <span className="flex items-center gap-1.5 font-bold uppercase tracking-wider text-red-400">
                  <Clock size={14} className="text-red-400" />
                  Clôture Officielle Des Offres
                </span>
                <span className="text-gray-500 font-medium">Temps Réel</span>
              </div>

              <div className="grid grid-cols-4 gap-2 text-center">
                <div className="p-2 sm:p-3 rounded-xl bg-brand-surface-elevated border border-brand-border">
                  <span className="text-2xl sm:text-3xl font-black text-white font-mono block">
                    {String(timeLeft.days).padStart(2, '0')}
                  </span>
                  <span className="text-[10px] text-gray-400 uppercase tracking-wider font-semibold">
                    Jours
                  </span>
                </div>
                <div className="p-2 sm:p-3 rounded-xl bg-brand-surface-elevated border border-brand-border">
                  <span className="text-2xl sm:text-3xl font-black text-white font-mono block">
                    {String(timeLeft.hours).padStart(2, '0')}
                  </span>
                  <span className="text-[10px] text-gray-400 uppercase tracking-wider font-semibold">
                    Heures
                  </span>
                </div>
                <div className="p-2 sm:p-3 rounded-xl bg-brand-surface-elevated border border-brand-border">
                  <span className="text-2xl sm:text-3xl font-black text-white font-mono block">
                    {String(timeLeft.minutes).padStart(2, '0')}
                  </span>
                  <span className="text-[10px] text-gray-400 uppercase tracking-wider font-semibold">
                    Minutes
                  </span>
                </div>
                <div className="p-2 sm:p-3 rounded-xl bg-brand-surface-elevated border border-brand-border">
                  <span className="text-2xl sm:text-3xl font-black text-red-400 font-mono block">
                    {String(timeLeft.seconds).padStart(2, '0')}
                  </span>
                  <span className="text-[10px] text-gray-400 uppercase tracking-wider font-semibold">
                    Secondes
                  </span>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2 justify-center lg:justify-start">
              <Button
                variant="promo"
                size="lg"
                onClick={onExploreDeals}
                className="shadow-xl shadow-brand-promo/25"
              >
                <span>Explorer les Offres (-70%)</span>
                <ArrowRight size={18} />
              </Button>

              <Button
                variant="secondary"
                size="lg"
                onClick={onExploreFlash}
                className="border-brand-border"
              >
                <Flame size={18} className="text-red-400" />
                <span>Ventes Flash en Direct</span>
              </Button>
            </div>

            {/* Micro assurances */}
            <div className="pt-2 flex items-center justify-center lg:justify-start gap-6 text-xs text-gray-400 flex-wrap">
              <span className="flex items-center gap-1.5">
                <ShieldCheck size={14} className="text-emerald-400" />
                Garantie constructeur 2 ans
              </span>
              <span className="flex items-center gap-1.5">
                <Zap size={14} className="text-blue-400" />
                Livraison offerte dès 75 €
              </span>
              <span className="flex items-center gap-1.5">
                <Star size={14} className="text-amber-400 fill-amber-400" />
                4.9/5 sur +2 800 avis
              </span>
            </div>
          </div>

          {/* Right Column: Visual Product Showcase with Floating Conversion Cards */}
          <div className="lg:col-span-5 relative">
            <div
              onClick={() => onSelectProduct(SPOTLIGHT_PRODUCT)}
              className="relative aspect-square max-w-md mx-auto rounded-3xl bg-gradient-to-b from-brand-surface-elevated to-brand-surface border border-brand-border p-6 shadow-2xl overflow-hidden cursor-pointer group"
            >
              {/* Radial backdrop */}
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-primary/20 via-transparent to-brand-promo/20 opacity-60" />

              {/* Product Hero Image */}
              <img
                src={SPOTLIGHT_PRODUCT.image}
                alt={SPOTLIGHT_PRODUCT.name}
                className="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-700 relative z-10"
              />

              {/* Floating Deal Badge: -33% Offre Vedette */}
              <div className="absolute top-8 left-8 z-20 bg-brand-promo/95 text-white px-3.5 py-1.5 rounded-full font-black text-xs uppercase tracking-wider shadow-xl flex items-center gap-1.5 border border-white/20">
                <Flame size={14} className="text-amber-300" />
                -33% Vedette Black Friday
              </div>

              {/* Floating Stock Badge */}
              <div className="absolute bottom-8 left-8 right-8 z-20 p-4 rounded-xl bg-brand-surface/90 backdrop-blur-md border border-white/10 shadow-2xl flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-bold text-white line-clamp-1">
                    {SPOTLIGHT_PRODUCT.name}
                  </h4>
                  <div className="flex items-baseline gap-2 mt-0.5">
                    <span className="text-base font-extrabold text-white">
                      {SPOTLIGHT_PRODUCT.price} €
                    </span>
                    <span className="text-xs text-gray-400 line-through">
                      {SPOTLIGHT_PRODUCT.oldPrice} €
                    </span>
                    <span className="text-[11px] text-emerald-400 font-semibold">
                      Économie : {SPOTLIGHT_PRODUCT.oldPrice - SPOTLIGHT_PRODUCT.price} €
                    </span>
                  </div>
                </div>

                <span className="shrink-0 p-2.5 rounded-lg bg-brand-primary text-white group-hover:bg-brand-primary-hover transition-colors shadow-md">
                  <ArrowRight size={16} />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
