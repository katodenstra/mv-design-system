interface AppBarProps {
  title?: string;
  leftAction?: {
    icon: string;
    onClick: () => void;
    label?: string;
  };
  rightActions?: {
    icon: string;
    onClick: () => void;
    label?: string;
  }[];
  variant?: 'default' | 'glass';
}

export function AppBar({ title, leftAction, rightActions = [], variant = 'default' }: AppBarProps) {
  const variantClasses = variant === 'glass'
    ? 'glass sticky top-0 shadow-[var(--shadow-sm)]'
    : 'bg-[var(--surface)] border border-[var(--border-subtle)]';

  return (
    <header className={`${variantClasses} z-[var(--z-sticky)] mx-4 mt-4 px-4 py-4 rounded-[var(--radius-xl)] overflow-hidden`}>
      <div className="flex items-center justify-between max-w-[1440px] mx-auto">
        <div className="flex items-center gap-3">
          {leftAction && (
            <button
              onClick={leftAction.onClick}
              className="text-[var(--text-primary)] hover:bg-[var(--action-ghost-hover)] p-2 rounded-[var(--radius-md)] transition-all focus:outline-none focus:ring-2 focus:ring-[var(--focus-ring)]"
              aria-label={leftAction.label}
            >
              <span className="material-symbols-outlined text-[var(--icon-md)]">
                {leftAction.icon}
              </span>
            </button>
          )}
          {title && (
            <h1 className="text-[var(--text-xl)] font-[var(--font-weight-bold)] text-display text-[var(--text-primary)]">
              {title}
            </h1>
          )}
        </div>

        <div className="flex items-center gap-1">
          {rightActions.map((action, i) => (
            <button
              key={i}
              onClick={action.onClick}
              className="text-[var(--text-primary)] hover:bg-[var(--action-ghost-hover)] p-2 rounded-[var(--radius-md)] transition-all focus:outline-none focus:ring-2 focus:ring-[var(--focus-ring)]"
              aria-label={action.label}
            >
              <span className="material-symbols-outlined text-[var(--icon-md)]">
                {action.icon}
              </span>
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}
