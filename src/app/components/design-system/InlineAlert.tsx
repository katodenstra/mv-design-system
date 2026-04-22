import { motion, AnimatePresence } from "motion/react";

interface InlineAlertProps {
  type: 'info' | 'success' | 'warning' | 'error';
  title?: string;
  message: string;
  show: boolean;
  onDismiss?: () => void;
  action?: {
    label: string;
    onClick: () => void;
  };
}

export function InlineAlert({ type, title, message, show, onDismiss, action }: InlineAlertProps) {
  const config = {
    info: {
      bg: 'bg-[var(--info-100)] dark:bg-[var(--info-700)] dark:bg-opacity-20',
      border: 'border-[var(--info-300)] dark:border-[var(--info-600)]',
      icon: 'info',
      iconColor: 'text-[var(--info-700)] dark:text-[var(--info-400)]',
      textColor: 'text-[var(--info-700)] dark:text-[var(--info-300)]'
    },
    success: {
      bg: 'bg-[var(--success-100)] dark:bg-[var(--success-700)] dark:bg-opacity-20',
      border: 'border-[var(--success-300)] dark:border-[var(--success-600)]',
      icon: 'check_circle',
      iconColor: 'text-[var(--success-700)] dark:text-[var(--success-400)]',
      textColor: 'text-[var(--success-700)] dark:text-[var(--success-300)]'
    },
    warning: {
      bg: 'bg-[var(--warning-100)] dark:bg-[var(--warning-700)] dark:bg-opacity-20',
      border: 'border-[var(--warning-300)] dark:border-[var(--warning-600)]',
      icon: 'warning',
      iconColor: 'text-[var(--warning-700)] dark:text-[var(--warning-400)]',
      textColor: 'text-[var(--warning-700)] dark:text-[var(--warning-300)]'
    },
    error: {
      bg: 'bg-[var(--error-100)] dark:bg-[var(--error-700)] dark:bg-opacity-20',
      border: 'border-[var(--error-300)] dark:border-[var(--error-600)]',
      icon: 'error',
      iconColor: 'text-[var(--error-700)] dark:text-[var(--error-400)]',
      textColor: 'text-[var(--error-700)] dark:text-[var(--error-300)]'
    }
  };

  const currentConfig = config[type];

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className={`${currentConfig.bg} border ${currentConfig.border} rounded-[var(--radius-lg)] p-4 mb-4`}
        >
          <div className="flex items-start gap-3">
            <span className={`material-symbols-outlined ${currentConfig.iconColor} flex-shrink-0`}>
              {currentConfig.icon}
            </span>
            <div className="flex-1 min-w-0">
              {title && (
                <h4 className={`font-semibold text-[var(--text-sm)] mb-1 ${currentConfig.textColor}`}>
                  {title}
                </h4>
              )}
              <p className={`text-[var(--text-sm)] ${currentConfig.textColor}`}>
                {message}
              </p>
              {action && (
                <button
                  onClick={action.onClick}
                  className={`mt-2 text-[var(--text-sm)] font-medium underline ${currentConfig.textColor} hover:opacity-80`}
                >
                  {action.label}
                </button>
              )}
            </div>
            {onDismiss && (
              <button
                onClick={onDismiss}
                className={`${currentConfig.iconColor} hover:opacity-70 flex-shrink-0`}
              >
                <span className="material-symbols-outlined text-[var(--icon-sm)]">close</span>
              </button>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
