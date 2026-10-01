import React, { useState } from 'react';
import { Mail, ArrowRight, CheckCircle2, Lock, Zap } from 'lucide-react';
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
    <section className="py-20 lg:py-28 relative overflow-hidden transition-colors duration-300 bg-white dark:bg-[#080A0F]">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[350px] bg-blue-500/5 dark:bg-red-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="relative rounded-3xl bg-gradient-to-br from-slate-50 via-white to-blue-50/40 dark:from-[#181C25] dark:via-[#131722] dark:to-[#0e121a] border border-slate-200 dark:border-[#283040] p-8 sm:p-14 shadow-xl dark:shadow-2xl text-center max-w-3xl mx-auto">
          {/* Internal ambient halo */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 dark:bg-red-600/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 dark:bg-red-500/10 border border-blue-200 dark:border-red-500/20 text-blue-700 dark:text-red-400 text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
            <Zap size={13} />
            Accès Privilège Coupe-File
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
            Recevez les Ventes Privées en Avant-Première
          </h2>

          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-3 max-w-md mx-auto leading-relaxed">
            Inscrivez-vous pour recevoir les alertes de réassort sur les consoles, cartes graphiques et casques haut de gamme avant l'ouverture générale.
          </p>

          {submitted ? (
            <div className="mt-8 p-4 rounded-xl bg-blue-50 dark:bg-red-500/10 border border-blue-200 dark:border-red-500/20 text-blue-700 dark:text-red-400 flex items-center justify-center gap-2 max-w-md mx-auto text-xs font-semibold">
              <CheckCircle2 size={16} />
              <span>Invitation confirmée ! Votre code prioritaire vous a été envoyé.</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <div className="relative flex-1">
                <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="email"
                  placeholder="Votre adresse email professionnelle..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-white dark:bg-[#0c0f16] border border-slate-300 dark:border-[#283040] text-xs text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-blue-600 dark:focus:border-red-500 shadow-inner"
                />
              </div>

              <Button type="submit" variant="primary" size="md" className="shrink-0 shadow-md">
                <span>Accès Prioritaire</span>
                <ArrowRight size={16} />
              </Button>
            </form>
          )}

          <div className="flex items-center justify-center gap-2 text-[11px] text-slate-500 mt-4">
            <Lock size={12} />
            <span>Vos données sont strictement confidentielles. Aucun spam, désinscription en 1 clic.</span>
          </div>
        </div>
      </div>
    </section>
  );
};
