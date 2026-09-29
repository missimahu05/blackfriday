import React from 'react';
import { Star, CheckCircle2, ShieldCheck } from 'lucide-react';
import { REVIEWS } from '../../data/reviews';

export const ReviewsSection: React.FC = () => {
  return (
    <section id="reviews" className="py-16 lg:py-24 border-b border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-[#0c0f17] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 dark:bg-red-500/10 border border-blue-200 dark:border-red-500/20 text-blue-700 dark:text-red-400 text-xs font-bold uppercase tracking-wider mb-3">
            <CheckCircle2 size={13} />
            Retours Clients Authentifiés
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
            Pourquoi Choisir NOVA DEALS ?
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-2">
            Plus de 2 840 commandes expédiées avec un taux de satisfaction certifié de 98,6%.
          </p>

          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="flex items-center text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} className="fill-amber-500 text-amber-500" />
              ))}
            </div>
            <span className="text-sm font-bold text-slate-900 dark:text-white">4.9 / 5</span>
            <span className="text-xs text-slate-500 dark:text-slate-400">Avis Collectés et Vérifiés</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {REVIEWS.map((rev) => (
            <div
              key={rev.id}
              className="p-6 rounded-2xl bg-white dark:bg-[#131722] border border-slate-200 dark:border-slate-800 flex flex-col justify-between space-y-4 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-amber-500">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} size={14} className="fill-amber-500 text-amber-500" />
                    ))}
                  </div>
                  <span className="text-[11px] text-slate-400">{rev.date}</span>
                </div>

                <h4 className="text-sm font-bold text-slate-900 dark:text-white leading-snug">
                  "{rev.title}"
                </h4>

                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {rev.comment}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <img
                    src={rev.avatar}
                    alt={rev.author}
                    className="w-8 h-8 rounded-full object-cover border border-slate-200 dark:border-white/10"
                  />
                  <div>
                    <h5 className="text-xs font-bold text-slate-900 dark:text-white">{rev.author}</h5>
                    <span className="text-[10px] text-slate-500 dark:text-slate-400 block truncate max-w-[130px]">
                      {rev.productName}
                    </span>
                  </div>
                </div>

                {rev.verified && (
                  <span className="flex items-center gap-1 text-[11px] text-blue-700 dark:text-red-400 font-semibold bg-blue-50 dark:bg-red-500/10 px-2 py-0.5 rounded-full border border-blue-200 dark:border-red-500/20">
                    <ShieldCheck size={12} />
                    Achat vérifié
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
