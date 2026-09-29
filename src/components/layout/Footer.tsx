import React from 'react';
import {
  Zap,
  ShieldCheck,
  Truck,
  RotateCcw,
  Headphones,
  Lock,
  CreditCard
} from 'lucide-react';

interface FooterProps {
  onNavigateSection: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigateSection }) => {
  return (
    <footer className="bg-white dark:bg-brand-surface border-t border-gray-200 dark:border-brand-border mt-24 text-gray-600 dark:text-gray-400 text-sm transition-colors duration-300">
      {/* Reassurance Grid */}
      <div className="border-b border-gray-200 dark:border-brand-border/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0">
                <Truck className="w-6 h-6 text-brand-primary" />
              </div>
              <div>
                <h4 className="text-gray-900 dark:text-white font-semibold text-base">Livraison Express 24-48h</h4>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  Expédition prioritaire gratuite dès 75 € d'achat avec suivi sécurisé en temps réel.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-6 h-6 text-emerald-500" />
              </div>
              <div>
                <h4 className="text-gray-900 dark:text-white font-semibold text-base">Garantie 2 Ans Incluse</h4>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  Tous nos produits électroniques bénéficient de la garantie constructeur officielle.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center shrink-0">
                <RotateCcw className="w-6 h-6 text-purple-500" />
              </div>
              <div>
                <h4 className="text-gray-900 dark:text-white font-semibold text-base">Retours Étendus 30 Jours</h4>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  Changez d'avis en toute sérénité. Procédure de retour simplifiée et étiquette prépayée.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0">
                <Headphones className="w-6 h-6 text-amber-500" />
              </div>
              <div>
                <h4 className="text-gray-900 dark:text-white font-semibold text-base">Assistance Spécialisée 7j/7</h4>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  Nos conseillers techniques répondent à vos questions en moins de 15 minutes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-lg bg-brand-primary flex items-center justify-center shadow-md shadow-brand-primary/30">
                <Zap className="w-5 h-5 text-white fill-white" />
              </div>
              <span className="text-xl font-black text-gray-950 dark:text-white tracking-tight">NOVA DEALS</span>
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed max-w-sm">
              Plateforme e-commerce haute performance dédiée aux ventes exclusives du Black Friday 2026. Des remises vérifiées, des stocks authentiques et une expérience d'achat ultra-rapide.
            </p>
            <div className="pt-2 flex items-center gap-4 text-xs">
              <span className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-medium">
                <Lock className="w-3.5 h-3.5" />
                Paiements Cryptés SSL 256-bit
              </span>
            </div>
          </div>

          <div>
            <h5 className="text-gray-900 dark:text-white font-semibold text-xs uppercase tracking-wider mb-4">
              Rayons Black Friday
            </h5>
            <ul className="space-y-2.5 text-xs text-gray-500 dark:text-gray-400">
              <li>
                <button
                  onClick={() => onNavigateSection('catalog')}
                  className="hover:text-gray-950 dark:hover:text-white transition-colors"
                >
                  High-Tech & Audio
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('catalog')}
                  className="hover:text-gray-950 dark:hover:text-white transition-colors"
                >
                  Gaming & Consoles
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('catalog')}
                  className="hover:text-gray-950 dark:hover:text-white transition-colors"
                >
                  Mode & Streetwear
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('catalog')}
                  className="hover:text-gray-950 dark:hover:text-white transition-colors"
                >
                  Maison Intelligente
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('catalog')}
                  className="hover:text-gray-950 dark:hover:text-white transition-colors"
                >
                  Montres & Exploration
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="text-gray-900 dark:text-white font-semibold text-xs uppercase tracking-wider mb-4">
              Support & Suivi
            </h5>
            <ul className="space-y-2.5 text-xs text-gray-500 dark:text-gray-400">
              <li>
                <a href="#tracking" className="hover:text-gray-950 dark:hover:text-white transition-colors">
                  Suivre une commande
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-gray-950 dark:hover:text-white transition-colors">
                  FAQ Black Friday
                </a>
              </li>
              <li>
                <a href="#shipping" className="hover:text-gray-950 dark:hover:text-white transition-colors">
                  Politique d'expédition
                </a>
              </li>
              <li>
                <a href="#returns" className="hover:text-gray-950 dark:hover:text-white transition-colors">
                  Formulaire de retour
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-gray-950 dark:hover:text-white transition-colors">
                  Contacter le support
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="text-gray-900 dark:text-white font-semibold text-xs uppercase tracking-wider mb-4">
              Paiements Sécurisés
            </h5>
            <div className="space-y-3">
              <div className="flex flex-wrap gap-2">
                <span className="px-2.5 py-1.5 rounded bg-gray-100 dark:bg-brand-surface-elevated border border-gray-200 dark:border-brand-border text-[11px] font-medium text-gray-700 dark:text-gray-300 flex items-center gap-1.5">
                  <CreditCard className="w-3.5 h-3.5 text-blue-500" />
                  Carte Bancaire
                </span>
                <span className="px-2.5 py-1.5 rounded bg-gray-100 dark:bg-brand-surface-elevated border border-gray-200 dark:border-brand-border text-[11px] font-medium text-gray-700 dark:text-gray-300">
                  Apple Pay
                </span>
                <span className="px-2.5 py-1.5 rounded bg-gray-100 dark:bg-brand-surface-elevated border border-gray-200 dark:border-brand-border text-[11px] font-medium text-gray-700 dark:text-gray-300">
                  PayPal 4X
                </span>
              </div>
              <p className="text-[11px] text-gray-500 leading-relaxed">
                Transactions certifiées 3D Secure v2 et conformes aux protocoles bancaires européens.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 dark:border-brand-border/60 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
            <p>© 2026 NOVA DEALS SAS. Tous droits réservés.</p>
            <span className="hidden sm:inline text-gray-300 dark:text-gray-700">•</span>
            <p className="flex items-center gap-1.5 font-medium text-slate-700 dark:text-slate-300">
              Développé par{' '}
              <a
                href="https://jolidonhoungue.pages.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-slate-900 dark:text-white hover:text-brand-primary dark:hover:text-red-400 transition-colors underline decoration-brand-primary dark:decoration-red-500 underline-offset-4"
              >
                Jolidon HOUNGUE
              </a>
            </p>
          </div>
          <div className="flex items-center gap-6">
            <a href="#mentions" className="hover:text-gray-700 dark:hover:text-gray-400 transition-colors">
              Mentions Légales
            </a>
            <a href="#privacy" className="hover:text-gray-700 dark:hover:text-gray-400 transition-colors">
              Données Personnelles
            </a>
            <a href="#cgv" className="hover:text-gray-700 dark:hover:text-gray-400 transition-colors">
              CGV
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
