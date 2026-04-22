interface StatBlockProps {
  label: string;
  value: string | number;
  icon?: string;
  color?: 'primary' | 'secondary-a' | 'secondary-b' | 'secondary-c' | 'success' | 'warning' | 'error' | 'info';
}

export function StatBlock({ label, value, icon, color = 'primary' }: StatBlockProps) {
  const colorClasses = {
    'primary': 'bg-[var(--primary-600)] text-white',
    'secondary-a': 'bg-[var(--secondary-a-600)] text-white',
    'secondary-b': 'bg-[var(--secondary-b-600)] text-white',
    'secondary-c': 'bg-[var(--secondary-c-600)] text-white',
    'success': 'bg-[var(--success-600)] text-white',
    'warning': 'bg-[var(--warning-600)] text-white',
    'error': 'bg-[var(--error-600)] text-white',
    'info': 'bg-[var(--info-600)] text-white',
  };

  return (
    <div className={`rounded-[var(--radius-lg)] p-4 ${colorClasses[color]}`}>
      <div className="flex items-center justify-between mb-2">
        <span className="text-[var(--text-xs)] font-medium opacity-90">{label}</span>
        {icon && (
          <span className="material-symbols-outlined text-[var(--icon-sm)] opacity-90">
            {icon}
          </span>
        )}
      </div>
      <p className="text-[var(--text-3xl)] font-[var(--font-weight-bold)] text-display leading-none">
        {value}
      </p>
    </div>
  );
}
