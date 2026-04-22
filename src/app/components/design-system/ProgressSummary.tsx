interface ProgressSummaryProps {
  total: number;
  completed: number;
  inProgress?: number;
  label?: string;
}

export function ProgressSummary({ total, completed, inProgress = 0, label = "Tasks" }: ProgressSummaryProps) {
  const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;
  const remaining = total - completed - inProgress;

  return (
    <div className="bg-[var(--surface)] border border-[var(--border-subtle)] rounded-[var(--radius-lg)] p-4">
      <div className="flex items-center justify-between mb-3">
        <h4 className="text-[var(--text-sm)] font-medium text-[var(--text-secondary)]">{label}</h4>
        <span className="text-[var(--text-sm)] font-semibold text-[var(--text-primary)]">
          {percentage}%
        </span>
      </div>

      <div className="w-full h-2 bg-[var(--background-subtle)] rounded-full overflow-hidden mb-3">
        <div
          className="h-full bg-[var(--success-600)] rounded-full transition-all duration-300"
          style={{ width: `${percentage}%` }}
        />
      </div>

      <div className="grid grid-cols-3 gap-2 text-center">
        <div>
          <p className="text-[var(--text-xs)] text-[var(--text-tertiary)] mb-1">Completed</p>
          <p className="text-[var(--text-lg)] font-semibold text-[var(--success-600)]">{completed}</p>
        </div>
        <div>
          <p className="text-[var(--text-xs)] text-[var(--text-tertiary)] mb-1">In Progress</p>
          <p className="text-[var(--text-lg)] font-semibold text-[var(--info-600)]">{inProgress}</p>
        </div>
        <div>
          <p className="text-[var(--text-xs)] text-[var(--text-tertiary)] mb-1">To Do</p>
          <p className="text-[var(--text-lg)] font-semibold text-[var(--text-secondary)]">{remaining}</p>
        </div>
      </div>
    </div>
  );
}
