import React, { useState } from 'react';
import { Mail, ArrowRight, CheckCircle2, Lock, Sparkles } from 'lucide-react';
import { Button } from '../ui/Button';

export const NewsletterSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;
    setSubmitted(true);
  };

  return (
    <section className="py-16 lg:py-20 relative overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-to-r from-white via-slate-50 to-blue-50/40 dark:from-brand-surface-elevated dark:via-brand-surface dark:to-[#0e121a] border border-gray-200 dark:border-brand-border p-8 sm:p-12 shadow-xl dark:shadow-2xl text-center max-w-3xl mx-auto">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles size={13} />
            Accès Privilège Coupe-File
          </div>

          <h2 className="text-2xl sm:text-3xl font-black text-gray-950 dark:text-white tracking-tight">
            Recevez les Ventes Privées en Avant-Première
          </h2>

          <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 mt-2 max-w-md mx-auto leading-relaxed">
            Inscrivez-vous pour recevoir les alertes de réassort sur les consoles, cartes graphiques et casques haut de gamme avant l'ouverture générale.
          </p>

          {submitted ? (
            <div className="mt-8 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center gap-2 max-w-md mx-auto text-xs font-semibold">
              <CheckCircle2 size={16} />
              <span>Invitation confirmée ! Votre code prioritaire vous a été envoyé.</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <div className="relative flex-1">
                <Mail className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="email"
                  placeholder="Votre adresse email professionnelle..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-white dark:bg-brand-surface border border-gray-300 dark:border-brand-border text-xs text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:border-brand-primary"
                />
              </div>

              <Button type="submit" variant="primary" size="md" className="shrink-0 shadow-md">
                <span>Accès Prioritaire</span>
                <ArrowRight size={16} />
              </Button>
            </form>
          )}

          <div className="flex items-center justify-center gap-2 text-[11px] text-gray-500 mt-4">
            <Lock size={12} />
            <span>Vos données sont strictement confidentielles. Aucun spam, désinscription en 1 clic.</span>
          </div>
        </div>
      </div>
    </section>
  );
};
