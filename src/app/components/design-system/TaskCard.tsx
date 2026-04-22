import { useState } from "react";
import { motion } from "motion/react";

interface TaskCardProps {
  title: string;
  description?: string;
  priority?: 'low' | 'medium' | 'high' | 'urgent';
  status?: 'todo' | 'in-progress' | 'review' | 'done';
  dueDate?: string;
  tags?: string[];
  assignee?: { name: string; avatar?: string };
  onEdit?: () => void;
  onDelete?: () => void;
  onStatusChange?: (status: string) => void;
}

export function TaskCard({
  title,
  description,
  priority = 'medium',
  status = 'todo',
  dueDate,
  tags = [],
  assignee,
  onEdit,
  onDelete,
  onStatusChange
}: TaskCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const priorityConfig = {
    low: { bg: 'bg-[var(--neutral-200)] dark:bg-[var(--neutral-600)]', text: 'text-[var(--text-secondary)]', label: 'Low' },
    medium: { bg: 'bg-[var(--info-200)] dark:bg-[var(--info-700)] dark:bg-opacity-30', text: 'text-[var(--info-700)] dark:text-[var(--info-400)]', label: 'Medium' },
    high: { bg: 'bg-[var(--warning-200)] dark:bg-[var(--warning-700)] dark:bg-opacity-30', text: 'text-[var(--warning-700)] dark:text-[var(--warning-400)]', label: 'High' },
    urgent: { bg: 'bg-[var(--error-200)] dark:bg-[var(--error-700)] dark:bg-opacity-30', text: 'text-[var(--error-700)] dark:text-[var(--error-400)]', label: 'Urgent' },
  };

  const statusConfig = {
    'todo': { icon: 'radio_button_unchecked', color: 'text-[var(--text-tertiary)]', label: 'To Do' },
    'in-progress': { icon: 'pending', color: 'text-[var(--info-600)]', label: 'In Progress' },
    'review': { icon: 'rate_review', color: 'text-[var(--warning-600)]', label: 'Review' },
    'done': { icon: 'check_circle', color: 'text-[var(--success-600)]', label: 'Done' },
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-[var(--surface)] border border-[var(--border-subtle)] rounded-[var(--radius-lg)] p-4 shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-md)] transition-shadow"
    >
      <div className="flex items-start gap-3">
        <button
          onClick={() => onStatusChange?.(status === 'done' ? 'todo' : 'done')}
          className={`flex-shrink-0 ${statusConfig[status].color} hover:opacity-70 transition-opacity`}
        >
          <span className="material-symbols-outlined text-[var(--icon-md)]">
            {statusConfig[status].icon}
          </span>
        </button>

        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2 mb-2">
            <h4 className="font-[var(--font-weight-semibold)] text-[var(--text-base)] text-[var(--text-primary)]">
              {title}
            </h4>
            <div className="flex items-center gap-1">
              {onEdit && (
                <button
                  onClick={onEdit}
                  className="text-[var(--text-tertiary)] hover:text-[var(--text-primary)] transition-colors"
                >
                  <span className="material-symbols-outlined text-[var(--icon-sm)]">edit</span>
                </button>
              )}
              {onDelete && (
                <button
                  onClick={onDelete}
                  className="text-[var(--text-tertiary)] hover:text-[var(--error-600)] transition-colors"
                >
                  <span className="material-symbols-outlined text-[var(--icon-sm)]">delete</span>
                </button>
              )}
            </div>
          </div>

          {description && isExpanded && (
            <motion.p
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="text-[var(--text-sm)] text-[var(--text-secondary)] mb-3"
            >
              {description}
            </motion.p>
          )}

          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className={`px-2 py-0.5 rounded-[var(--radius-sm)] text-[var(--text-xs)] font-medium ${priorityConfig[priority].bg} ${priorityConfig[priority].text}`}>
              {priorityConfig[priority].label}
            </span>

            {dueDate && (
              <div className="flex items-center gap-1 text-[var(--text-xs)] text-[var(--text-secondary)]">
                <span className="material-symbols-outlined text-[var(--icon-xs)]">schedule</span>
                <span>{dueDate}</span>
              </div>
            )}
          </div>

          {tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mb-3">
              {tags.map((tag, i) => (
                <span
                  key={i}
                  className="px-2 py-0.5 rounded-[var(--radius-sm)] text-[var(--text-xs)] bg-[var(--secondary-a-100)] dark:bg-[var(--secondary-a-700)] dark:bg-opacity-20 text-[var(--secondary-a-700)] dark:text-[var(--secondary-a-300)]"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {assignee && (
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-[var(--primary-400)] flex items-center justify-center text-[var(--text-xs)] text-white font-medium">
                {assignee.name.charAt(0).toUpperCase()}
              </div>
              <span className="text-[var(--text-xs)] text-[var(--text-secondary)]">{assignee.name}</span>
            </div>
          )}

          {description && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="mt-2 text-[var(--text-sm)] text-[var(--action-ghost-text)] hover:underline"
            >
              {isExpanded ? 'Show less' : 'Show more'}
            </button>
          )}
        </div>
      </div>
    </motion.div>
  );
}
