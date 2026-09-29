import React, { useState, useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { Flame, Clock, ShieldCheck, ArrowRight, Zap, Star, TrendingUp, Tag, Check } from 'lucide-react';
import { Button } from '../ui/Button';
import { Card3D } from '../ui/Card3D';
import { SPOTLIGHT_PRODUCT } from '../../data/products';
import { useNotificationStore } from '../../store/useNotificationStore';
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
  const { addToast } = useNotificationStore();
  const [copiedCode, setCopiedCode] = useState(false);

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

  const handleCopyCode = () => {
    navigator.clipboard?.writeText('BLACK10');
    setCopiedCode(true);
    addToast({
      type: 'success',
      title: 'Code BLACK10 copié !',
      message: '-10% de réduction immédiate à coller dans votre panier.',
    });
    setTimeout(() => setCopiedCode(false), 2500);
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.1,
        delayChildren: 0.05,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  };

  return (
    <section className="relative min-h-[calc(100vh-5rem)] w-full flex items-center justify-center overflow-hidden py-10 lg:py-16 border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
      {/* Background Animated Halos */}
      <motion.div
        animate={
          shouldReduceMotion
            ? {}
            : {
                scale: [1, 1.15, 1],
                opacity: [0.12, 0.25, 0.12],
              }
        }
        transition={{ repeat: Infinity, duration: 8, ease: 'easeInOut' }}
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-blue-500/15 dark:bg-red-500/10 rounded-full blur-[160px] pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Full-Height Content Framing */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 space-y-6 text-center lg:text-left flex flex-col justify-center"
          >
            {/* Promo Pill with Copy Action */}
            <motion.div variants={itemVariants} className="inline-flex justify-center lg:justify-start">
              <div className="inline-flex items-center gap-2 p-1.5 pr-3 rounded-full bg-slate-100 dark:bg-[#151a24] border border-slate-200 dark:border-slate-800 text-xs shadow-sm">
                <span className="flex items-center gap-1.5 bg-brand-primary dark:bg-brand-promo text-white font-bold px-2.5 py-1 rounded-full text-[11px] uppercase tracking-wider shadow-sm">
                  <Flame size={13} className="text-white animate-bounce" />
                  Black Friday 2026
                </span>
                <button
                  onClick={handleCopyCode}
                  className="flex items-center gap-1.5 text-slate-700 dark:text-slate-300 hover:text-brand-primary dark:hover:text-red-400 font-semibold cursor-pointer transition-colors"
                  title="Cliquer pour copier le code"
                >
                  <Tag size={12} className="text-brand-primary dark:text-red-400" />
                  <span>Code : <strong className="underline">BLACK10</strong></span>
                  {copiedCode ? <Check size={12} className="text-emerald-500" /> : null}
                </button>
              </div>
            </motion.div>

            {/* Main Title */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-slate-900 dark:text-white tracking-tight leading-[1.05]"
            >
              Les prix chutent.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-red-500 dark:to-orange-400">
                Pas vos attentes.
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal"
            >
              Remises directes constructeurs jusqu’à <strong className="text-blue-600 dark:text-red-400 font-bold">-70%</strong> sur l’audio de référence, les stations gaming et l’électronique haut de gamme. Stocks physiques vérifiés expédiés sous 24h.
            </motion.p>

            {/* Dynamic Countdown */}
            <motion.div
              variants={itemVariants}
              className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-[#131722] border border-slate-200 dark:border-slate-800 max-w-lg mx-auto lg:mx-0 shadow-lg"
            >
              <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 mb-3">
                <span className="flex items-center gap-1.5 font-bold uppercase tracking-wider text-blue-600 dark:text-red-400">
                  <Clock size={14} className="text-blue-600 dark:text-red-500 animate-pulse" />
                  Temps Restant Avant Clôture
                </span>
                <span className="flex items-center gap-1 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping inline-block" />
                  Offres En Cours
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
                    className="p-2 sm:p-3 rounded-xl bg-slate-50 dark:bg-[#1b202e] border border-slate-200 dark:border-slate-800"
                  >
                    <span
                      className={`text-2xl sm:text-3xl font-black font-mono block ${
                        unit.isRed
                          ? 'text-blue-600 dark:text-red-400'
                          : 'text-slate-900 dark:text-white'
                      }`}
                    >
                      {String(unit.value).padStart(2, '0')}
                    </span>
                    <span className="text-[10px] text-slate-500 dark:text-slate-400 uppercase tracking-wider font-semibold">
                      {unit.label}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-3 pt-2 justify-center lg:justify-start"
            >
              <Button
                variant="primary"
                size="lg"
                onClick={onExploreDeals}
                className="bg-brand-primary dark:bg-brand-promo hover:bg-brand-primary-hover dark:hover:bg-brand-promo-hover shadow-xl shadow-brand-primary/25 dark:shadow-brand-promo/30 group"
              >
                <span>Explorer les Offres (-70%)</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Button>

              <Button
                variant="secondary"
                size="lg"
                onClick={onExploreFlash}
                className="border-slate-200 dark:border-slate-800 bg-white dark:bg-[#151a24] text-slate-900 dark:text-white group"
              >
                <Flame size={18} className="text-blue-600 dark:text-red-500 group-hover:scale-110 transition-transform" />
                <span>Ventes Flash en Direct</span>
              </Button>
            </motion.div>

            {/* Micro Assurances */}
            <motion.div
              variants={itemVariants}
              className="pt-2 flex items-center justify-center lg:justify-start gap-6 text-xs text-slate-500 dark:text-slate-400 flex-wrap"
            >
              <span className="flex items-center gap-1.5">
                <ShieldCheck size={14} className="text-emerald-500" />
                Garantie constructeur 2 ans
              </span>
              <span className="flex items-center gap-1.5">
                <Zap size={14} className="text-blue-500" />
                Livraison express gratuite dès 75 €
              </span>
              <span className="flex items-center gap-1.5">
                <Star size={14} className="text-amber-500 fill-amber-500" />
                4.9/5 sur +2 800 commandes
              </span>
            </motion.div>
          </motion.div>

          {/* Right Column: 3D Interactive Parallax Card Showcase */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <Card3D
              depth={16}
              onClick={() => onSelectProduct(SPOTLIGHT_PRODUCT)}
              className="w-full max-w-md cursor-pointer group"
            >
              <div className="relative aspect-square rounded-3xl bg-gradient-to-b from-slate-100 to-white dark:from-[#1b202e] dark:to-[#131722] border border-slate-200 dark:border-slate-800 p-6 shadow-2xl overflow-hidden transition-all duration-300 group-hover:shadow-blue-500/10 dark:group-hover:shadow-red-500/10">
                {/* Product Image */}
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                  src={SPOTLIGHT_PRODUCT.image}
                  alt={SPOTLIGHT_PRODUCT.name}
                  className="w-full h-full object-cover rounded-2xl relative z-10"
                />

                {/* Floating Deal Badge 1 */}
                <motion.div
                  animate={shouldReduceMotion ? {} : { y: [0, -8, 0] }}
                  transition={{ repeat: Infinity, duration: 4.5, ease: 'easeInOut' }}
                  className="absolute top-6 left-6 z-20 bg-brand-primary dark:bg-brand-promo text-white px-3.5 py-1.5 rounded-full font-black text-xs uppercase tracking-wider shadow-2xl flex items-center gap-1.5 border border-white/20"
                >
                  <Flame size={14} className="text-white" />
                  -33% Vedette Black Friday
                </motion.div>

                {/* Floating Deal Badge 2 */}
                <motion.div
                  animate={shouldReduceMotion ? {} : { y: [0, 8, 0] }}
                  transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut', delay: 1 }}
                  className="absolute top-6 right-6 z-20 bg-white/90 dark:bg-black/75 backdrop-blur-md text-emerald-600 dark:text-emerald-400 px-3 py-1.5 rounded-full font-bold text-xs uppercase tracking-wider shadow-2xl flex items-center gap-1.5 border border-slate-200 dark:border-white/10"
                >
                  <TrendingUp size={13} className="text-emerald-500" />
                  84 vendus aujourd'hui
                </motion.div>

                {/* Bottom Spec Summary */}
                <div className="absolute bottom-6 left-6 right-6 z-20 p-4 rounded-xl bg-white/95 dark:bg-[#131722]/95 backdrop-blur-md border border-slate-200 dark:border-slate-800 shadow-2xl flex items-center justify-between">
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 dark:text-white line-clamp-1">
                      {SPOTLIGHT_PRODUCT.name}
                    </h4>
                    <div className="flex items-baseline gap-2 mt-0.5">
                      <span className="text-base font-extrabold text-brand-primary dark:text-white">
                        {SPOTLIGHT_PRODUCT.price} €
                      </span>
                      <span className="text-xs text-slate-400 line-through">
                        {SPOTLIGHT_PRODUCT.oldPrice} €
                      </span>
                      <span className="text-[11px] text-emerald-600 dark:text-emerald-400 font-semibold">
                        -{SPOTLIGHT_PRODUCT.oldPrice - SPOTLIGHT_PRODUCT.price} €
                      </span>
                    </div>
                  </div>

                  <span className="shrink-0 p-2.5 rounded-lg bg-brand-primary dark:bg-brand-promo text-white group-hover:scale-105 transition-transform shadow-md">
                    <ArrowRight size={16} />
                  </span>
                </div>
              </div>
            </Card3D>
          </div>
        </div>
      </div>
    </section>
  );
};
