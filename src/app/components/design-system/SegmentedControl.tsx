import { motion } from "motion/react";

interface SegmentedControlProps {
  options: { label: string; value: string; icon?: string }[];
  value: string;
  onChange: (value: string) => void;
}

export function SegmentedControl({ options, value, onChange }: SegmentedControlProps) {
  return (
    <div className="inline-flex bg-[var(--background-subtle)] p-1.5 rounded-[var(--radius-lg)] border border-[var(--border-subtle)] shadow-inner gap-1">
      {options.map((option) => (
        <button
          key={option.value}
          onClick={() => onChange(option.value)}
          className="relative px-5 py-2.5 text-[var(--text-sm)] font-medium transition-all rounded-[var(--radius-md)] hover:bg-[var(--action-ghost-hover)]"
        >
          {value === option.value && (
            <motion.div
              layoutId="segmented-control-active"
              className="absolute inset-0 bg-[var(--surface)] rounded-[var(--radius-md)] shadow-[var(--shadow-sm)] border border-[var(--border-subtle)]"
              transition={{ type: 'spring', damping: 30, stiffness: 500 }}
            />
          )}
          <span className={`relative z-10 flex items-center gap-2 ${value === option.value ? 'text-[var(--text-primary)]' : 'text-[var(--text-secondary)]'}`}>
            {option.icon && (
              <span className="material-symbols-outlined text-[var(--icon-sm)]">
                {option.icon}
              </span>
            )}
            {option.label}
          </span>
        </button>
      ))}
    </div>
  );
}
