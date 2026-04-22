import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

interface CustomTimePickerProps {
  value?: string;
  onChange?: (time: string) => void;
  label?: string;
}

export function CustomTimePicker({ value, onChange, label }: CustomTimePickerProps) {
  const [selectedTime, setSelectedTime] = useState(value || '12:00');
  const [isOpen, setIsOpen] = useState(false);
  const [hours, setHours] = useState(12);
  const [minutes, setMinutes] = useState(0);
  const [period, setPeriod] = useState<'AM' | 'PM'>('PM');
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (value) {
      const [h, m] = value.split(':').map(Number);
      setHours(h > 12 ? h - 12 : h === 0 ? 12 : h);
      setMinutes(m);
      setPeriod(h >= 12 ? 'PM' : 'AM');
    }
  }, [value]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const formatTime = (h: number, m: number, p: 'AM' | 'PM') => {
    return `${h}:${m.toString().padStart(2, '0')} ${p}`;
  };

  const handleApply = () => {
    let h24 = hours;
    if (period === 'PM' && hours !== 12) h24 = hours + 12;
    if (period === 'AM' && hours === 12) h24 = 0;

    const timeString = `${h24.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
    setSelectedTime(timeString);
    onChange?.(timeString);
    setIsOpen(false);
  };

  const incrementHours = () => setHours(h => h === 12 ? 1 : h + 1);
  const decrementHours = () => setHours(h => h === 1 ? 12 : h - 1);
  const incrementMinutes = () => setMinutes(m => (m + 5) % 60);
  const decrementMinutes = () => setMinutes(m => m === 0 ? 55 : m - 5);

  return (
    <div ref={containerRef} className="w-full relative">
      {label && (
        <label className="block text-[var(--text-sm)] font-medium text-[var(--text-primary)] mb-2">
          {label}
        </label>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-2.5 bg-[var(--surface)] border border-[var(--border-subtle)] rounded-[var(--radius-md)] text-[var(--text-base)] text-[var(--text-primary)] text-left flex items-center justify-between hover:border-[var(--border-medium)] transition-all focus:outline-none focus:ring-2 focus:ring-[var(--focus-ring)] focus:border-transparent"
      >
        <span>{formatTime(hours, minutes, period)}</span>
        <span className="material-symbols-outlined text-[var(--icon-sm)] text-[var(--text-tertiary)]">
          schedule
        </span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.15, ease: [0.4, 0, 0.2, 1] }}
            className="absolute z-[var(--z-popover)] mt-2 w-full min-w-[280px] glass rounded-[var(--radius-xl)] p-6 shadow-[var(--shadow-xl)]"
          >
            {/* Time selector */}
            <div className="flex items-center justify-center gap-4 mb-6">
              {/* Hours */}
              <div className="flex flex-col items-center gap-2">
                <button
                  onClick={incrementHours}
                  className="p-2 hover:bg-[var(--action-ghost-hover)] rounded-[var(--radius-md)] transition-colors"
                >
                  <span className="material-symbols-outlined text-[var(--icon-sm)]">expand_less</span>
                </button>
                <div className="w-16 h-16 flex items-center justify-center bg-[var(--primary-100)] dark:bg-[var(--primary-700)] dark:bg-opacity-20 rounded-[var(--radius-lg)] text-[var(--text-2xl)] font-bold text-display text-[var(--primary-700)] dark:text-[var(--primary-300)]">
                  {hours.toString().padStart(2, '0')}
                </div>
                <button
                  onClick={decrementHours}
                  className="p-2 hover:bg-[var(--action-ghost-hover)] rounded-[var(--radius-md)] transition-colors"
                >
                  <span className="material-symbols-outlined text-[var(--icon-sm)]">expand_more</span>
                </button>
              </div>

              <span className="text-[var(--text-2xl)] font-bold text-display text-[var(--text-primary)] mt-8">:</span>

              {/* Minutes */}
              <div className="flex flex-col items-center gap-2">
                <button
                  onClick={incrementMinutes}
                  className="p-2 hover:bg-[var(--action-ghost-hover)] rounded-[var(--radius-md)] transition-colors"
                >
                  <span className="material-symbols-outlined text-[var(--icon-sm)]">expand_less</span>
                </button>
                <div className="w-16 h-16 flex items-center justify-center bg-[var(--primary-100)] dark:bg-[var(--primary-700)] dark:bg-opacity-20 rounded-[var(--radius-lg)] text-[var(--text-2xl)] font-bold text-display text-[var(--primary-700)] dark:text-[var(--primary-300)]">
                  {minutes.toString().padStart(2, '0')}
                </div>
                <button
                  onClick={decrementMinutes}
                  className="p-2 hover:bg-[var(--action-ghost-hover)] rounded-[var(--radius-md)] transition-colors"
                >
                  <span className="material-symbols-outlined text-[var(--icon-sm)]">expand_more</span>
                </button>
              </div>

              {/* AM/PM */}
              <div className="flex flex-col gap-2 ml-2 mt-8">
                <button
                  onClick={() => setPeriod('AM')}
                  className={`px-3 py-1.5 rounded-[var(--radius-md)] text-[var(--text-sm)] font-medium transition-all ${
                    period === 'AM'
                      ? 'bg-[var(--primary-600)] dark:bg-[var(--primary-400)] text-white dark:text-[var(--neutral-near-black)] shadow-sm'
                      : 'text-[var(--text-secondary)] hover:bg-[var(--action-ghost-hover)]'
                  }`}
                >
                  AM
                </button>
                <button
                  onClick={() => setPeriod('PM')}
                  className={`px-3 py-1.5 rounded-[var(--radius-md)] text-[var(--text-sm)] font-medium transition-all ${
                    period === 'PM'
                      ? 'bg-[var(--primary-600)] dark:bg-[var(--primary-400)] text-white dark:text-[var(--neutral-near-black)] shadow-sm'
                      : 'text-[var(--text-secondary)] hover:bg-[var(--action-ghost-hover)]'
                  }`}
                >
                  PM
                </button>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex gap-2 pt-4 border-t border-[var(--border-subtle)]">
              <button
                onClick={() => setIsOpen(false)}
                className="flex-1 px-4 py-2 bg-[var(--action-secondary-bg)] hover:bg-[var(--action-secondary-hover)] text-[var(--action-secondary-text)] border border-[var(--action-secondary-border)] rounded-[var(--radius-md)] text-[var(--text-sm)] font-medium transition-all"
              >
                Cancel
              </button>
              <button
                onClick={handleApply}
                className="flex-1 px-4 py-2 bg-[var(--action-primary-bg)] hover:bg-[var(--action-primary-hover)] text-[var(--action-primary-text)] border border-[var(--action-primary-border)] rounded-[var(--radius-md)] text-[var(--text-sm)] font-medium shadow-sm transition-all"
              >
                Apply
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
