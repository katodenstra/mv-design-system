interface EmptyStateProps {
  icon?: string;
  title: string;
  description?: string;
  action?: {
    label: string;
    onClick: () => void;
  };
}

export function EmptyState({ icon = 'inbox', title, description, action }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
      <div className="w-20 h-20 rounded-full bg-[var(--primary-100)] dark:bg-[var(--primary-700)] dark:bg-opacity-20 flex items-center justify-center mb-6">
        <span className="material-symbols-outlined text-[var(--icon-xl)] text-[var(--primary-600)] dark:text-[var(--primary-400)]">
          {icon}
        </span>
      </div>
      <h3 className="text-[var(--text-xl)] font-[var(--font-weight-semibold)] text-display text-[var(--text-primary)] mb-3">
        {title}
      </h3>
      {description && (
        <p className="text-[var(--text-base)] text-[var(--text-secondary)] mb-8 max-w-md leading-relaxed">
          {description}
        </p>
      )}
      {action && (
        <button
          onClick={action.onClick}
          className="px-6 py-3 bg-[var(--action-primary-bg)] hover:bg-[var(--action-primary-hover)] text-[var(--action-primary-text)] border border-[var(--action-primary-border)] rounded-[var(--radius-md)] font-medium shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-[var(--focus-ring)] focus:ring-offset-2"
        >
          {action.label}
        </button>
      )}
    </div>
  );
}
