import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Truck, ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';

interface OrderSuccessModalProps {
  orderId: string | null;
  total: number;
  onClose: () => void;
}

export const OrderSuccessModal: React.FC<OrderSuccessModalProps> = ({
  orderId,
  total,
  onClose,
}) => {
  if (!orderId) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/85 backdrop-blur-md"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-lg bg-white dark:bg-brand-surface-elevated border border-gray-200 dark:border-brand-border rounded-2xl shadow-2xl p-6 sm:p-8 text-center my-8 z-10 text-gray-900 dark:text-white"
        >
          <div className="w-20 h-20 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mx-auto mb-6 shadow-xl shadow-emerald-500/20">
            <CheckCircle2 className="w-10 h-10 text-emerald-500" />
          </div>

          <span className="text-xs uppercase tracking-widest font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
            Commande Confirmée
          </span>

          <h2 className="text-2xl sm:text-3xl font-black text-gray-950 dark:text-white mt-4 tracking-tight">
            Merci pour votre achat !
          </h2>

          <p className="text-xs text-gray-600 dark:text-gray-300 mt-2 max-w-sm mx-auto leading-relaxed">
            Votre commande a bien été enregistrée et transmise à notre centre logistique prioritaire Black Friday.
          </p>

          <div className="mt-6 p-4 rounded-xl bg-gray-50 dark:bg-brand-surface border border-gray-200 dark:border-brand-border text-left space-y-3">
            <div className="flex justify-between items-center text-xs border-b border-gray-200 dark:border-white/5 pb-2.5">
              <span className="text-gray-500 dark:text-gray-400">Numéro de commande</span>
              <span className="font-mono font-bold text-gray-900 dark:text-white tracking-wider">{orderId}</span>
            </div>

            <div className="flex justify-between items-center text-xs border-b border-gray-200 dark:border-white/5 pb-2.5">
              <span className="text-gray-500 dark:text-gray-400">Montant total réglé</span>
              <span className="font-extrabold text-emerald-600 dark:text-emerald-400 text-sm">
                {total.toLocaleString('fr-FR')} €
              </span>
            </div>

            <div className="flex items-center gap-3 pt-1 text-xs text-gray-600 dark:text-gray-300">
              <Truck className="w-4 h-4 text-blue-500 shrink-0" />
              <span>
                Expédition sous 24h avec numéro de suivi envoyé par email.
              </span>
            </div>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <Button variant="primary" size="lg" onClick={onClose} fullWidth>
              <span>Continuer mes achats</span>
              <ArrowRight size={18} />
            </Button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
