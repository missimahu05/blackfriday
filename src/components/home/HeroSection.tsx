import React, { useState, useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { Flame, Clock, ShieldCheck, ArrowRight, Zap, Star, TrendingUp } from 'lucide-react';
import { Button } from '../ui/Button';
import { SPOTLIGHT_PRODUCT } from '../../data/products';
import type { Product } from '../../types';

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
  const shouldReduceMotion = useReducedMotion();

  // Dynamic Countdown
  const [timeLeft, setTimeLeft] = useState({
    days: 4,
    hours: 14,
    minutes: 32,
    seconds: 18,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: 59, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        if (prev.days > 0) return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45 },
    },
  };

  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-16 lg:pb-24 border-b border-brand-border-light dark:border-brand-border transition-colors duration-300">
      {/* Animated Glowing Ambient Halos */}
      <motion.div
        animate={
          shouldReduceMotion
            ? {}
            : {
                scale: [1, 1.15, 1],
                opacity: [0.15, 0.28, 0.15],
              }
        }
        transition={{ repeat: Infinity, duration: 8, ease: 'easeInOut' }}
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-brand-primary/20 rounded-full blur-[150px] pointer-events-none"
      />
      <motion.div
        animate={
          shouldReduceMotion
            ? {}
            : {
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.22, 0.1],
              }
        }
        transition={{ repeat: Infinity, duration: 10, ease: 'easeInOut', delay: 2 }}
        className="absolute -top-10 right-10 w-[450px] h-[450px] bg-brand-promo/15 rounded-full blur-[130px] pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Motion-crafted Strategic Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
          >
            {/* Header Badge */}
            <motion.div variants={itemVariants} className="inline-block">
              <div className="inline-flex items-center gap-2 p-1.5 pr-4 rounded-full bg-white dark:bg-brand-surface border border-gray-200 dark:border-brand-border text-xs text-gray-700 dark:text-gray-300 shadow-sm">
                <span className="flex items-center gap-1.5 bg-gradient-to-r from-brand-promo to-red-600 text-white font-bold px-2.5 py-1 rounded-full text-[11px] uppercase tracking-wider shadow-sm">
                  <Flame size={13} className="text-amber-300 animate-bounce" />
                  Vente Annuelle
                </span>
                <span className="font-semibold text-gray-900 dark:text-white">
                  Édition Limitée Black Friday 2026
                </span>
              </div>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-950 dark:text-white tracking-tight leading-[1.08]"
            >
              Les prix chutent.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-500 to-brand-primary dark:from-blue-400 dark:via-indigo-300 dark:to-white">
                Pas vos attentes.
              </span>
            </motion.h1>

            {/* Sub-headline */}
            <motion.p
              variants={itemVariants}
              className="text-sm sm:text-base text-gray-600 dark:text-gray-300 max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal"
            >
              Accédez aux remises vérifiées jusqu’à <strong className="text-red-600 dark:text-red-400 font-bold">-70%</strong> sur l’audio haute fidélité, les setups gaming d’élite et la tech de pointe. Stocks garantis constructeurs, expédiés en 24h.
            </motion.p>

            {/* Dynamic Animated Countdown */}
            <motion.div
              variants={itemVariants}
              className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-brand-surface border border-gray-200 dark:border-brand-border max-w-lg mx-auto lg:mx-0 shadow-xl"
            >
              <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 mb-3">
                <span className="flex items-center gap-1.5 font-bold uppercase tracking-wider text-red-600 dark:text-red-400">
                  <Clock size={14} className="text-red-500 animate-pulse" />
                  Clôture Officielle Des Offres
                </span>
                <span className="flex items-center gap-1 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping inline-block" />
                  Décompte Actif
                </span>
              </div>

              <div className="grid grid-cols-4 gap-2 text-center">
                {[
                  { value: timeLeft.days, label: 'Jours', isRed: false },
                  { value: timeLeft.hours, label: 'Heures', isRed: false },
                  { value: timeLeft.minutes, label: 'Minutes', isRed: false },
                  { value: timeLeft.seconds, label: 'Secondes', isRed: true },
                ].map((unit, idx) => (
                  <div
                    key={idx}
                    className="p-2 sm:p-3 rounded-xl bg-gray-50 dark:bg-brand-surface-elevated border border-gray-200 dark:border-brand-border"
                  >
                    <span
                      className={`text-2xl sm:text-3xl font-black font-mono block ${
                        unit.isRed
                          ? 'text-red-600 dark:text-red-400'
                          : 'text-gray-900 dark:text-white'
                      }`}
                    >
                      {String(unit.value).padStart(2, '0')}
                    </span>
                    <span className="text-[10px] text-gray-500 dark:text-gray-400 uppercase tracking-wider font-semibold">
                      {unit.label}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Interactive CTAs */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-3 pt-2 justify-center lg:justify-start"
            >
              <Button
                variant="promo"
                size="lg"
                onClick={onExploreDeals}
                className="shadow-xl shadow-brand-promo/25 hover:shadow-brand-promo/40 group"
              >
                <span>Explorer les Offres (-70%)</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Button>

              <Button
                variant="secondary"
                size="lg"
                onClick={onExploreFlash}
                className="border-gray-200 dark:border-brand-border bg-white dark:bg-brand-surface-elevated text-gray-900 dark:text-white group"
              >
                <Flame size={18} className="text-red-500 group-hover:scale-110 transition-transform" />
                <span>Ventes Flash en Direct</span>
              </Button>
            </motion.div>

            {/* Micro assurances */}
            <motion.div
              variants={itemVariants}
              className="pt-2 flex items-center justify-center lg:justify-start gap-6 text-xs text-gray-500 dark:text-gray-400 flex-wrap"
            >
              <span className="flex items-center gap-1.5">
                <ShieldCheck size={14} className="text-emerald-500" />
                Garantie constructeur 2 ans
              </span>
              <span className="flex items-center gap-1.5">
                <Zap size={14} className="text-blue-500" />
                Livraison offerte dès 75 €
              </span>
              <span className="flex items-center gap-1.5">
                <Star size={14} className="text-amber-500 fill-amber-500" />
                4.9/5 sur +2 800 avis
              </span>
            </motion.div>
          </motion.div>

          {/* Right Column: Visual Product Showcase with Motion Floating Elements */}
          <div className="lg:col-span-5 relative">
            <div
              onClick={() => onSelectProduct(SPOTLIGHT_PRODUCT)}
              className="relative aspect-square max-w-md mx-auto rounded-3xl bg-gradient-to-b from-gray-100 to-white dark:from-brand-surface-elevated dark:to-brand-surface border border-gray-200 dark:border-brand-border p-6 shadow-2xl overflow-hidden cursor-pointer group"
            >
              {/* Radial backdrop */}
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-primary/20 via-transparent to-brand-promo/20 opacity-60" />

              {/* Product Hero Image with Scale */}
              <motion.img
                whileHover={{ scale: 1.06 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                src={SPOTLIGHT_PRODUCT.image}
                alt={SPOTLIGHT_PRODUCT.name}
                className="w-full h-full object-cover rounded-2xl relative z-10"
              />

              {/* Motion Floating Badge 1: Levitation animation */}
              <motion.div
                animate={shouldReduceMotion ? {} : { y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 4.5, ease: 'easeInOut' }}
                className="absolute top-6 left-6 z-20 bg-brand-promo text-white px-3.5 py-1.5 rounded-full font-black text-xs uppercase tracking-wider shadow-2xl flex items-center gap-1.5 border border-white/20"
              >
                <Flame size={14} className="text-amber-300" />
                -33% Vedette Black Friday
              </motion.div>

              {/* Motion Floating Badge 2: Stock Live Alert */}
              <motion.div
                animate={shouldReduceMotion ? {} : { y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut', delay: 1 }}
                className="absolute top-6 right-6 z-20 bg-black/75 dark:bg-brand-surface-elevated/90 backdrop-blur-md text-emerald-400 px-3 py-1.5 rounded-full font-bold text-xs uppercase tracking-wider shadow-2xl flex items-center gap-1.5 border border-white/10"
              >
                <TrendingUp size={13} className="text-emerald-400" />
                84 vendus aujourd'hui
              </motion.div>

              {/* Motion Bottom Card Bar */}
              <motion.div
                whileHover={{ y: -3 }}
                className="absolute bottom-6 left-6 right-6 z-20 p-4 rounded-xl bg-white/90 dark:bg-brand-surface/90 backdrop-blur-md border border-gray-200 dark:border-white/10 shadow-2xl flex items-center justify-between"
              >
                <div>
                  <h4 className="text-xs font-bold text-gray-900 dark:text-white line-clamp-1">
                    {SPOTLIGHT_PRODUCT.name}
                  </h4>
                  <div className="flex items-baseline gap-2 mt-0.5">
                    <span className="text-base font-extrabold text-gray-900 dark:text-white">
                      {SPOTLIGHT_PRODUCT.price} €
                    </span>
                    <span className="text-xs text-gray-400 line-through">
                      {SPOTLIGHT_PRODUCT.oldPrice} €
                    </span>
                    <span className="text-[11px] text-emerald-600 dark:text-emerald-400 font-semibold">
                      -{SPOTLIGHT_PRODUCT.oldPrice - SPOTLIGHT_PRODUCT.price} €
                    </span>
                  </div>
                </div>

                <span className="shrink-0 p-2.5 rounded-lg bg-brand-primary text-white group-hover:bg-brand-primary-hover group-hover:translate-x-0.5 transition-all shadow-md">
                  <ArrowRight size={16} />
                </span>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
