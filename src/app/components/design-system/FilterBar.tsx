import { useState } from "react";

interface FilterOption {
  label: string;
  value: string;
}

interface FilterBarProps {
  searchPlaceholder?: string;
  filters?: { label: string; options: FilterOption[] }[];
  onSearchChange?: (value: string) => void;
  onFilterChange?: (filterLabel: string, value: string) => void;
}

export function FilterBar({
  searchPlaceholder = "Search...",
  filters = [],
  onSearchChange,
  onFilterChange
}: FilterBarProps) {
  const [searchValue, setSearchValue] = useState('');

  const handleSearchChange = (value: string) => {
    setSearchValue(value);
    onSearchChange?.(value);
  };

  return (
    <div className="bg-[var(--surface)] border border-[var(--border-subtle)] rounded-[var(--radius-lg)] p-4">
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="flex-1 relative">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-tertiary)] text-[var(--icon-sm)]">
            search
          </span>
          <input
            type="text"
            value={searchValue}
            onChange={(e) => handleSearchChange(e.target.value)}
            placeholder={searchPlaceholder}
            className="w-full pl-10 pr-4 py-2 bg-[var(--background-subtle)] border border-[var(--border-subtle)] rounded-[var(--radius-md)] text-[var(--text-base)] text-[var(--text-primary)] placeholder:text-[var(--text-tertiary)] focus:outline-none focus:ring-2 focus:ring-[var(--focus-ring)] transition-all"
          />
        </div>

        {filters.map((filter, i) => (
          <select
            key={i}
            onChange={(e) => onFilterChange?.(filter.label, e.target.value)}
            className="px-4 py-2 bg-[var(--background-subtle)] border border-[var(--border-subtle)] rounded-[var(--radius-md)] text-[var(--text-base)] text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--focus-ring)] transition-all cursor-pointer"
          >
            <option value="">{filter.label}</option>
            {filter.options.map((option, j) => (
              <option key={j} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        ))}
      </div>
    </div>
  );
}
