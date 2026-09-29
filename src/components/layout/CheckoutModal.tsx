import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  Lock,
  CreditCard,
  Truck,
  ShieldCheck,
  ArrowRight,
  ChevronLeft
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { useCartStore } from '../../store/useCartStore';
import { Button } from '../ui/Button';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOrderSuccess: (orderId: string, orderTotal: number) => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  onOrderSuccess,
}) => {
  const { items, getFinalTotal, getRawSavings, clearCart } = useCartStore();
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [isProcessing, setIsProcessing] = useState(false);

  const [formData, setFormData] = useState({
    firstName: 'Alexandre',
    lastName: 'Dubois',
    email: 'alexandre.dubois@email.com',
    phone: '+33 6 12 34 56 78',
    address: '14 Boulevard Saint-Germain',
    city: 'Paris',
    postalCode: '75005',
    country: 'France',
    paymentMethod: 'card',
    cardNumber: '•••• •••• •••• 4242',
    cardExpiry: '12/28',
    cardCvc: '•••',
  });

  if (!isOpen) return null;

  const total = getFinalTotal();
  const savings = getRawSavings();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    setTimeout(() => {
      setIsProcessing(false);
      const randomOrderId = `NOVA-${Math.floor(10000 + Math.random() * 90000)}`;

      try {
        confetti({
          particleCount: 120,
          spread: 80,
          origin: { y: 0.6 },
          colors: ['#2563EB', '#EF4444', '#10B981', '#F59E0B'],
        });
      } catch (err) {
        // fallback
      }

      clearCart();
      onOrderSuccess(randomOrderId, total);
      onClose();
    }, 1200);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          className="relative w-full max-w-2xl bg-white dark:bg-[#131722] border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl overflow-hidden my-8 z-10 text-slate-900 dark:text-white"
        >
          {/* Header */}
          <div className="p-6 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-[#0c0f17] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-blue-50 dark:bg-red-500/10 flex items-center justify-center">
                <Lock className="w-4 h-4 text-blue-600 dark:text-red-400" />
              </div>
              <div>
                <h3 className="font-bold text-base text-slate-900 dark:text-white">Finalisation de Commande</h3>
                <p className="text-[11px] text-slate-500 dark:text-slate-400">
                  Transaction 100% sécurisée - Étape {step} sur 3
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-slate-900 dark:hover:text-white rounded-lg hover:bg-slate-100 dark:hover:bg-white/5 transition-colors"
            >
              <X size={18} />
            </button>
          </div>

          {/* Stepper Progress */}
          <div className="flex border-b border-slate-200 dark:border-slate-800 text-xs bg-slate-50/50 dark:bg-[#0c0f17]/50">
            <div
              className={`flex-1 py-3 px-4 text-center font-semibold border-b-2 transition-colors ${
                step >= 1
                  ? 'border-blue-600 dark:border-red-500 text-blue-600 dark:text-red-400 font-bold bg-blue-50/50 dark:bg-red-500/10'
                  : 'border-transparent text-slate-400'
              }`}
            >
              1. Coordonnées
            </div>
            <div
              className={`flex-1 py-3 px-4 text-center font-semibold border-b-2 transition-colors ${
                step >= 2
                  ? 'border-blue-600 dark:border-red-500 text-blue-600 dark:text-red-400 font-bold bg-blue-50/50 dark:bg-red-500/10'
                  : 'border-transparent text-slate-400'
              }`}
            >
              2. Livraison
            </div>
            <div
              className={`flex-1 py-3 px-4 text-center font-semibold border-b-2 transition-colors ${
                step === 3
                  ? 'border-blue-600 dark:border-red-500 text-blue-600 dark:text-red-400 font-bold bg-blue-50/50 dark:bg-red-500/10'
                  : 'border-transparent text-slate-400'
              }`}
            >
              3. Paiement Sécurisé
            </div>
          </div>

          {/* Form Content */}
          <form onSubmit={step === 3 ? handleSubmitOrder : (e) => { e.preventDefault(); setStep((step + 1) as 2 | 3); }}>
            <div className="p-6 space-y-4 max-h-[65vh] overflow-y-auto">
              {step === 1 && (
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-1">
                        Prénom
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 dark:bg-[#0c0f17] border border-slate-300 dark:border-slate-700 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-blue-600 dark:focus:border-red-500"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-1">
                        Nom
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 dark:bg-[#0c0f17] border border-slate-300 dark:border-slate-700 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-blue-600 dark:focus:border-red-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-1">
                      Email de confirmation
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 dark:bg-[#0c0f17] border border-slate-300 dark:border-slate-700 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-blue-600 dark:focus:border-red-500"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-1">
                      Téléphone pour le suivi du transporteur
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 dark:bg-[#0c0f17] border border-slate-300 dark:border-slate-700 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-blue-600 dark:focus:border-red-500"
                    />
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-4">
                  <div>
                    <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-1">
                      Adresse de livraison
                    </label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 dark:bg-[#0c0f17] border border-slate-300 dark:border-slate-700 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-blue-600 dark:focus:border-red-500"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-1">
                        Code Postal
                      </label>
                      <input
                        type="text"
                        name="postalCode"
                        value={formData.postalCode}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 dark:bg-[#0c0f17] border border-slate-300 dark:border-slate-700 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-blue-600 dark:focus:border-red-500"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-1">
                        Ville
                      </label>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 dark:bg-[#0c0f17] border border-slate-300 dark:border-slate-700 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-blue-600 dark:focus:border-red-500"
                      />
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl border border-blue-200 dark:border-red-900/50 bg-blue-50 dark:bg-red-950/40 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Truck className="w-5 h-5 text-blue-600 dark:text-red-400" />
                      <div>
                        <span className="text-xs font-bold text-slate-900 dark:text-white block">
                          Livraison Prioritaire Black Friday Express (24-48h)
                        </span>
                        <span className="text-[11px] text-slate-600 dark:text-slate-300">
                          Colis préparé et expédié sous scellé sécurisé
                        </span>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-blue-600 dark:text-red-400 uppercase">Gratuit</span>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-4">
                  <div className="grid grid-cols-3 gap-2.5">
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, paymentMethod: 'card' })}
                      className={`p-3 rounded-xl border text-xs font-semibold flex flex-col items-center gap-1.5 transition-all ${
                        formData.paymentMethod === 'card'
                          ? 'border-blue-600 dark:border-red-500 bg-blue-50 dark:bg-red-500/10 text-blue-700 dark:text-red-400 font-bold'
                          : 'border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-[#0c0f17] text-slate-500 dark:text-slate-400'
                      }`}
                    >
                      <CreditCard size={18} className="text-blue-600 dark:text-red-400" />
                      <span>Carte Bancaire</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, paymentMethod: 'paypal' })}
                      className={`p-3 rounded-xl border text-xs font-semibold flex flex-col items-center gap-1.5 transition-all ${
                        formData.paymentMethod === 'paypal'
                          ? 'border-blue-600 dark:border-red-500 bg-blue-50 dark:bg-red-500/10 text-blue-700 dark:text-red-400 font-bold'
                          : 'border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-[#0c0f17] text-slate-500 dark:text-slate-400'
                      }`}
                    >
                      <ShieldCheck size={18} className="text-blue-600 dark:text-red-400" />
                      <span>PayPal</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, paymentMethod: 'applepay' })}
                      className={`p-3 rounded-xl border text-xs font-semibold flex flex-col items-center gap-1.5 transition-all ${
                        formData.paymentMethod === 'applepay'
                          ? 'border-blue-600 dark:border-red-500 bg-blue-50 dark:bg-red-500/10 text-blue-700 dark:text-red-400 font-bold'
                          : 'border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-[#0c0f17] text-slate-500 dark:text-slate-400'
                      }`}
                    >
                      <Lock size={18} className="text-blue-600 dark:text-red-400" />
                      <span>Apple Pay</span>
                    </button>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#0c0f17] border border-slate-200 dark:border-slate-800 space-y-3">
                    <div>
                      <label className="text-[11px] font-semibold text-slate-700 dark:text-slate-300 block mb-1">
                        Numéro de Carte
                      </label>
                      <input
                        type="text"
                        name="cardNumber"
                        value={formData.cardNumber}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3.5 py-2 rounded-lg bg-white dark:bg-[#131722] border border-slate-300 dark:border-slate-700 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-blue-600 dark:focus:border-red-500"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="text-[11px] font-semibold text-slate-700 dark:text-slate-300 block mb-1">
                          Expiration (MM/AA)
                        </label>
                        <input
                          type="text"
                          name="cardExpiry"
                          value={formData.cardExpiry}
                          onChange={handleInputChange}
                          required
                          className="w-full px-3.5 py-2 rounded-lg bg-white dark:bg-[#131722] border border-slate-300 dark:border-slate-700 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-blue-600 dark:focus:border-red-500"
                        />
                      </div>
                      <div>
                        <label className="text-[11px] font-semibold text-slate-700 dark:text-slate-300 block mb-1">
                          Cryptogramme (CVC)
                        </label>
                        <input
                          type="text"
                          name="cardCvc"
                          value={formData.cardCvc}
                          onChange={handleInputChange}
                          required
                          className="w-full px-3.5 py-2 rounded-lg bg-white dark:bg-[#131722] border border-slate-300 dark:border-slate-700 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-blue-600 dark:focus:border-red-500"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-[#0c0f17] border border-slate-200 dark:border-white/5 space-y-1.5 text-xs">
                    <div className="flex justify-between text-slate-500 dark:text-slate-400">
                      <span>Total articles ({items.length})</span>
                      <span>{total} €</span>
                    </div>
                    {savings > 0 && (
                      <div className="flex justify-between text-blue-600 dark:text-red-400 font-medium">
                        <span>Économies réalisées</span>
                        <span>-{savings} €</span>
                      </div>
                    )}
                    <div className="flex justify-between text-slate-500 dark:text-slate-400">
                      <span>Frais de port</span>
                      <span className="text-blue-600 dark:text-red-400 font-medium">Offerts</span>
                    </div>
                    <div className="flex justify-between text-base font-bold text-slate-900 dark:text-white pt-1.5 border-t border-slate-200 dark:border-white/5">
                      <span>Montant prélevé</span>
                      <span className="text-lg font-black text-blue-600 dark:text-white">{total.toLocaleString('fr-FR')} €</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="p-6 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-[#0c0f17] flex items-center justify-between gap-4">
              {step > 1 ? (
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={() => setStep((step - 1) as 1 | 2)}
                  className="text-slate-700 dark:text-white"
                >
                  <ChevronLeft size={16} />
                  <span>Précédent</span>
                </Button>
              ) : (
                <div />
              )}

              {step < 3 ? (
                <Button type="submit" variant="primary" size="md">
                  <span>Continuer</span>
                  <ArrowRight size={16} />
                </Button>
              ) : (
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  isLoading={isProcessing}
                  className="shadow-lg shadow-blue-600/20 dark:shadow-red-600/30"
                >
                  <Lock size={16} />
                  <span>Confirmer et Payer {total.toLocaleString('fr-FR')} €</span>
                </Button>
              )}
            </div>
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
