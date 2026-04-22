import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

interface CustomDatePickerProps {
  value?: Date;
  onChange?: (date: Date) => void;
  label?: string;
}

export function CustomDatePicker({ value, onChange, label }: CustomDatePickerProps) {
  const [selectedDate, setSelectedDate] = useState<Date>(value || new Date());
  const [isOpen, setIsOpen] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(value || new Date());
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const daysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const firstDayOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const getDaysArray = () => {
    const days = [];
    const totalDays = daysInMonth(currentMonth);
    const firstDay = firstDayOfMonth(currentMonth);

    for (let i = 0; i < firstDay; i++) {
      days.push(null);
    }

    for (let i = 1; i <= totalDays; i++) {
      days.push(i);
    }

    return days;
  };

  const handleDateSelect = (day: number) => {
    const newDate = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
    setSelectedDate(newDate);
    onChange?.(newDate);
    setIsOpen(false);
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
                      'July', 'August', 'September', 'October', 'November', 'December'];

  const weekDays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

  const isToday = (day: number) => {
    const today = new Date();
    return day === today.getDate() &&
           currentMonth.getMonth() === today.getMonth() &&
           currentMonth.getFullYear() === today.getFullYear();
  };

  const isSelected = (day: number) => {
    return day === selectedDate.getDate() &&
           currentMonth.getMonth() === selectedDate.getMonth() &&
           currentMonth.getFullYear() === selectedDate.getFullYear();
  };

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
        <span>{formatDate(selectedDate)}</span>
        <span className="material-symbols-outlined text-[var(--icon-sm)] text-[var(--text-tertiary)]">
          calendar_today
        </span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.15, ease: [0.4, 0, 0.2, 1] }}
            className="absolute z-[var(--z-popover)] mt-2 w-full min-w-[320px] glass rounded-[var(--radius-xl)] p-4 shadow-[var(--shadow-xl)]"
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <button
                onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1))}
                className="p-2 hover:bg-[var(--action-ghost-hover)] rounded-[var(--radius-md)] transition-colors"
              >
                <span className="material-symbols-outlined text-[var(--icon-sm)]">chevron_left</span>
              </button>

              <h3 className="text-[var(--text-base)] font-semibold text-display text-[var(--text-primary)]">
                {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
              </h3>

              <button
                onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1))}
                className="p-2 hover:bg-[var(--action-ghost-hover)] rounded-[var(--radius-md)] transition-colors"
              >
                <span className="material-symbols-outlined text-[var(--icon-sm)]">chevron_right</span>
              </button>
            </div>

            {/* Week days */}
            <div className="grid grid-cols-7 gap-1 mb-2">
              {weekDays.map(day => (
                <div key={day} className="text-center text-[var(--text-xs)] font-medium text-[var(--text-tertiary)] py-2">
                  {day}
                </div>
              ))}
            </div>

            {/* Calendar grid */}
            <div className="grid grid-cols-7 gap-1">
              {getDaysArray().map((day, idx) => (
                <button
                  key={idx}
                  onClick={() => day && handleDateSelect(day)}
                  disabled={!day}
                  className={`
                    aspect-square flex items-center justify-center rounded-[var(--radius-md)] text-[var(--text-sm)] font-medium transition-all
                    ${!day ? 'invisible' : ''}
                    ${isSelected(day!) ? 'bg-[var(--primary-600)] dark:bg-[var(--primary-400)] text-white dark:text-[var(--neutral-near-black)] shadow-sm' : ''}
                    ${!isSelected(day!) && isToday(day!) ? 'bg-[var(--primary-100)] dark:bg-[var(--primary-700)] dark:bg-opacity-20 text-[var(--primary-700)] dark:text-[var(--primary-300)]' : ''}
                    ${!isSelected(day!) && !isToday(day!) ? 'text-[var(--text-primary)] hover:bg-[var(--action-ghost-hover)]' : ''}
                  `}
                >
                  {day}
                </button>
              ))}
            </div>

            {/* Today button */}
            <div className="mt-4 pt-3 border-t border-[var(--border-subtle)]">
              <button
                onClick={() => {
                  const today = new Date();
                  setCurrentMonth(today);
                  handleDateSelect(today.getDate());
                }}
                className="w-full py-2 text-[var(--text-sm)] font-medium text-[var(--primary-600)] dark:text-[var(--primary-400)] hover:bg-[var(--action-ghost-hover)] rounded-[var(--radius-md)] transition-colors"
              >
                Today
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
