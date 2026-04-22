import { motion, AnimatePresence } from "motion/react";

interface StickyActionBarProps {
  show: boolean;
  primaryAction?: {
    label: string;
    onClick: () => void;
    loading?: boolean;
  };
  secondaryAction?: {
    label: string;
    onClick: () => void;
  };
  status?: 'saved' | 'unsaved' | 'saving' | 'error';
}

export function StickyActionBar({ show, primaryAction, secondaryAction, status }: StickyActionBarProps) {
  const statusConfig = {
    saved: { icon: 'check_circle', color: 'text-[var(--success-600)]', label: 'All changes saved' },
    unsaved: { icon: 'circle', color: 'text-[var(--warning-600)]', label: 'Unsaved changes' },
    saving: { icon: 'sync', color: 'text-[var(--info-600)]', label: 'Saving...' },
    error: { icon: 'error', color: 'text-[var(--error-600)]', label: 'Error saving' },
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="fixed bottom-0 left-0 right-0 z-[var(--z-sticky)] p-4"
        >
          <div className="max-w-[600px] mx-auto glass rounded-[var(--radius-xl)] p-4 shadow-[var(--shadow-xl)]">
            <div className="flex items-center justify-between">
              {status && (
                <div className={`flex items-center gap-2 text-[var(--text-sm)] ${statusConfig[status].color}`}>
                  <span className={`material-symbols-outlined text-[var(--icon-sm)] ${status === 'saving' ? 'animate-spin' : ''}`}>
                    {statusConfig[status].icon}
                  </span>
                  <span className="font-medium">{statusConfig[status].label}</span>
                </div>
              )}

              <div className="flex items-center gap-2 ml-auto">
                {secondaryAction && (
                  <button
                    onClick={secondaryAction.onClick}
                    className="px-4 py-2 bg-[var(--action-secondary)] hover:bg-[var(--action-secondary-hover)] text-[var(--action-secondary-text)] rounded-[var(--radius-md)] font-medium transition-colors"
                  >
                    {secondaryAction.label}
                  </button>
                )}
                {primaryAction && (
                  <button
                    onClick={primaryAction.onClick}
                    disabled={primaryAction.loading}
                    className="px-4 py-2 bg-[var(--action-primary)] hover:bg-[var(--action-primary-hover)] text-[var(--action-primary-text)] rounded-[var(--radius-md)] font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                  >
                    {primaryAction.loading && (
                      <span className="material-symbols-outlined text-[var(--icon-sm)] animate-spin">
                        progress_activity
                      </span>
                    )}
                    {primaryAction.label}
                  </button>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
