import { motion } from "motion/react";

interface KPICardProps {
  label: string;
  value: string | number;
  change?: number;
  changeLabel?: string;
  icon?: string;
  trend?: 'up' | 'down' | 'neutral';
  variant?: 'default' | 'primary' | 'success' | 'warning' | 'error';
}

export function KPICard({
  label,
  value,
  change,
  changeLabel = 'vs last period',
  icon,
  trend = 'neutral',
  variant = 'default'
}: KPICardProps) {
  const variantStyles = {
    default: {
      card: 'bg-[var(--surface)] border-[var(--border-subtle)]',
      label: 'text-[var(--text-secondary)]',
      value: 'text-[var(--text-primary)]',
      icon: 'text-[var(--text-tertiary)]'
    },
    primary: {
      card: 'bg-[var(--primary-100)] dark:bg-[var(--primary-700)] dark:bg-opacity-20 border-[var(--primary-300)] dark:border-[var(--primary-500)]',
      label: 'text-[var(--primary-700)] dark:text-[var(--primary-300)]',
      value: 'text-[var(--primary-700)] dark:text-[var(--primary-200)]',
      icon: 'text-[var(--primary-600)] dark:text-[var(--primary-400)]'
    },
    success: {
      card: 'bg-[var(--success-100)] dark:bg-[var(--success-700)] dark:bg-opacity-15 border-[var(--success-300)] dark:border-[var(--success-600)]',
      label: 'text-[var(--success-700)] dark:text-[var(--success-300)]',
      value: 'text-[var(--success-700)] dark:text-[var(--success-200)]',
      icon: 'text-[var(--success-600)] dark:text-[var(--success-400)]'
    },
    warning: {
      card: 'bg-[var(--warning-100)] dark:bg-[var(--warning-700)] dark:bg-opacity-15 border-[var(--warning-300)] dark:border-[var(--warning-600)]',
      label: 'text-[var(--warning-700)] dark:text-[var(--warning-300)]',
      value: 'text-[var(--warning-700)] dark:text-[var(--warning-200)]',
      icon: 'text-[var(--warning-600)] dark:text-[var(--warning-400)]'
    },
    error: {
      card: 'bg-[var(--error-100)] dark:bg-[var(--error-700)] dark:bg-opacity-15 border-[var(--error-300)] dark:border-[var(--error-600)]',
      label: 'text-[var(--error-700)] dark:text-[var(--error-300)]',
      value: 'text-[var(--error-700)] dark:text-[var(--error-200)]',
      icon: 'text-[var(--error-600)] dark:text-[var(--error-400)]'
    },
  };

  const currentVariant = variantStyles[variant];

  const getTrendColor = () => {
    if (trend === 'up') return 'text-[var(--success-600)] dark:text-[var(--success-400)]';
    if (trend === 'down') return 'text-[var(--error-600)] dark:text-[var(--error-400)]';
    return 'text-[var(--text-secondary)]';
  };

  const getTrendIcon = () => {
    if (trend === 'up') return 'trending_up';
    if (trend === 'down') return 'trending_down';
    return 'remove';
  };

  return (
    <motion.div
      whileHover={{ y: -2 }}
      transition={{ duration: 0.2 }}
      className={`rounded-[var(--radius-xl)] border p-6 shadow-[var(--shadow-sm)] ${currentVariant.card}`}
    >
      <div className="flex items-start justify-between mb-3">
        <p className={`text-[var(--text-sm)] font-medium ${currentVariant.label}`}>{label}</p>
        {icon && (
          <span className={`material-symbols-outlined text-[var(--icon-md)] ${currentVariant.icon}`}>
            {icon}
          </span>
        )}
      </div>

      <div className="mb-2">
        <p className={`text-[var(--text-4xl)] font-[var(--font-weight-bold)] text-display leading-none ${currentVariant.value}`}>
          {value}
        </p>
      </div>

      {change !== undefined && (
        <div className={`flex items-center gap-1 text-[var(--text-sm)] ${getTrendColor()}`}>
          <span className="material-symbols-outlined text-[var(--icon-xs)]">
            {getTrendIcon()}
          </span>
          <span className="font-medium">
            {change > 0 ? '+' : ''}{change}%
          </span>
          <span className={`ml-1 ${currentVariant.label}`}>{changeLabel}</span>
        </div>
      )}
    </motion.div>
  );
}
