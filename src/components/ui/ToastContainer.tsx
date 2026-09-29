import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';
import { useNotificationStore } from '../../store/useNotificationStore';

export const ToastContainer: React.FC = () => {
  const { toasts, removeToast } = useNotificationStore();

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-2 max-w-sm w-full pointer-events-none px-4 sm:px-0">
      <AnimatePresence>
        {toasts.map((toast) => {
          return (
            <motion.div
              key={toast.id}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.15 } }}
              className="pointer-events-auto flex items-start gap-3 p-4 rounded-xl bg-white dark:bg-[#131722] border border-slate-200 dark:border-slate-800 shadow-2xl text-slate-900 dark:text-white backdrop-blur-md"
            >
              <div className="shrink-0 mt-0.5">
                {toast.type === 'success' && (
                  <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-red-400" />
                )}
                {toast.type === 'alert' && (
                  <AlertCircle className="w-5 h-5 text-blue-600 dark:text-red-400" />
                )}
                {toast.type === 'info' && (
                  <Info className="w-5 h-5 text-blue-600 dark:text-red-400" />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-semibold text-slate-900 dark:text-white">{toast.title}</h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5 leading-relaxed">{toast.message}</p>
              </div>
              <button
                onClick={() => removeToast(toast.id)}
                className="shrink-0 text-slate-400 hover:text-slate-900 dark:hover:text-white p-1 rounded-md transition-colors"
                aria-label="Fermer"
              >
                <X size={14} />
              </button>
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
};
