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
    <footer className="bg-white dark:bg-[#0c0f17] border-t border-slate-200 dark:border-slate-800 mt-24 text-slate-600 dark:text-slate-400 text-sm transition-colors duration-300">
      {/* Reassurance Grid */}
      <div className="border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-red-500/10 border border-blue-200 dark:border-red-500/20 flex items-center justify-center shrink-0">
                <Truck className="w-6 h-6 text-blue-600 dark:text-red-400" />
              </div>
              <div>
                <h4 className="text-slate-900 dark:text-white font-semibold text-base">Livraison Express 24-48h</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  Expédition prioritaire gratuite dès 75 € d'achat avec suivi sécurisé en temps réel.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-red-500/10 border border-blue-200 dark:border-red-500/20 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-6 h-6 text-blue-600 dark:text-red-400" />
              </div>
              <div>
                <h4 className="text-slate-900 dark:text-white font-semibold text-base">Garantie 2 Ans Incluse</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  Tous nos produits électroniques bénéficient de la garantie constructeur officielle.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-red-500/10 border border-blue-200 dark:border-red-500/20 flex items-center justify-center shrink-0">
                <RotateCcw className="w-6 h-6 text-blue-600 dark:text-red-400" />
              </div>
              <div>
                <h4 className="text-slate-900 dark:text-white font-semibold text-base">Retours Étendus 30 Jours</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  Changez d'avis en toute sérénité. Procédure de retour simplifiée et étiquette prépayée.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-red-500/10 border border-blue-200 dark:border-red-500/20 flex items-center justify-center shrink-0">
                <Headphones className="w-6 h-6 text-blue-600 dark:text-red-400" />
              </div>
              <div>
                <h4 className="text-slate-900 dark:text-white font-semibold text-base">Assistance Spécialisée 7j/7</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
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
              <div className="w-9 h-9 rounded-lg bg-blue-600 dark:bg-red-600 flex items-center justify-center shadow-md shadow-blue-600/30 dark:shadow-red-600/30">
                <Zap className="w-5 h-5 text-white fill-white" />
              </div>
              <span className="text-xl font-black text-slate-950 dark:text-white tracking-tight">NOVA DEALS</span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed max-w-sm">
              Plateforme e-commerce haute performance dédiée aux ventes exclusives du Black Friday 2026. Des remises vérifiées, des stocks authentiques et une expérience d'achat ultra-rapide.
            </p>
            <div className="pt-2 flex items-center gap-4 text-xs">
              <span className="flex items-center gap-1.5 text-blue-600 dark:text-red-400 font-medium">
                <Lock className="w-3.5 h-3.5" />
                Paiements Cryptés SSL 256-bit
              </span>
            </div>
          </div>

          <div>
            <h5 className="text-slate-900 dark:text-white font-semibold text-xs uppercase tracking-wider mb-4">
              Rayons Black Friday
            </h5>
            <ul className="space-y-2.5 text-xs text-slate-500 dark:text-slate-400">
              <li>
                <button
                  onClick={() => onNavigateSection('catalog')}
                  className="hover:text-blue-600 dark:hover:text-red-400 transition-colors"
                >
                  High-Tech & Audio
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('catalog')}
                  className="hover:text-blue-600 dark:hover:text-red-400 transition-colors"
                >
                  Gaming & Consoles
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('catalog')}
                  className="hover:text-blue-600 dark:hover:text-red-400 transition-colors"
                >
                  Mode & Streetwear
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('catalog')}
                  className="hover:text-blue-600 dark:hover:text-red-400 transition-colors"
                >
                  Maison Intelligente
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('catalog')}
                  className="hover:text-blue-600 dark:hover:text-red-400 transition-colors"
                >
                  Montres & Exploration
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="text-slate-900 dark:text-white font-semibold text-xs uppercase tracking-wider mb-4">
              Support & Suivi
            </h5>
            <ul className="space-y-2.5 text-xs text-slate-500 dark:text-slate-400">
              <li>
                <a href="#tracking" className="hover:text-blue-600 dark:hover:text-red-400 transition-colors">
                  Suivre une commande
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-blue-600 dark:hover:text-red-400 transition-colors">
                  FAQ Black Friday
                </a>
              </li>
              <li>
                <a href="#shipping" className="hover:text-blue-600 dark:hover:text-red-400 transition-colors">
                  Politique d'expédition
                </a>
              </li>
              <li>
                <a href="#returns" className="hover:text-blue-600 dark:hover:text-red-400 transition-colors">
                  Formulaire de retour
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-blue-600 dark:hover:text-red-400 transition-colors">
                  Contacter le support
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="text-slate-900 dark:text-white font-semibold text-xs uppercase tracking-wider mb-4">
              Paiements Sécurisés
            </h5>
            <div className="space-y-3">
              <div className="flex flex-wrap gap-2">
                <span className="px-2.5 py-1.5 rounded bg-slate-100 dark:bg-[#131722] border border-slate-200 dark:border-slate-800 text-[11px] font-medium text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                  <CreditCard className="w-3.5 h-3.5 text-blue-600 dark:text-red-400" />
                  Carte Bancaire
                </span>
                <span className="px-2.5 py-1.5 rounded bg-slate-100 dark:bg-[#131722] border border-slate-200 dark:border-slate-800 text-[11px] font-medium text-slate-700 dark:text-slate-300">
                  Apple Pay
                </span>
                <span className="px-2.5 py-1.5 rounded bg-slate-100 dark:bg-[#131722] border border-slate-200 dark:border-slate-800 text-[11px] font-medium text-slate-700 dark:text-slate-300">
                  PayPal 4X
                </span>
              </div>
              <p className="text-[11px] text-slate-500 leading-relaxed">
                Transactions certifiées 3D Secure v2 et conformes aux protocoles bancaires européens.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-200 dark:border-slate-800 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
            <p>© 2026 NOVA DEALS SAS. Tous droits réservés.</p>
            <span className="hidden sm:inline text-slate-300 dark:text-slate-700">•</span>
            <p className="flex items-center gap-1.5 font-medium text-slate-700 dark:text-slate-300">
              Développé par{' '}
              <a
                href="https://jolidonhoungue.pages.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-red-400 transition-colors underline decoration-blue-600 dark:decoration-red-500 underline-offset-4"
              >
                Jolidon HOUNGUE
              </a>
            </p>
          </div>
          <div className="flex items-center gap-6">
            <a href="#mentions" className="hover:text-blue-600 dark:hover:text-red-400 transition-colors">
              Mentions Légales
            </a>
            <a href="#privacy" className="hover:text-blue-600 dark:hover:text-red-400 transition-colors">
              Données Personnelles
            </a>
            <a href="#cgv" className="hover:text-blue-600 dark:hover:text-red-400 transition-colors">
              CGV
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
