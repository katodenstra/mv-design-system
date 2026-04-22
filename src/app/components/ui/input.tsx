import * as React from "react";

import { cn } from "./utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "flex h-10 w-full rounded-[var(--radius-md)] border border-[var(--border-subtle)] bg-[var(--surface)] px-3.5 py-2.5 text-[var(--text-base)] text-[var(--text-primary)]",
        "placeholder:text-[var(--text-tertiary)]",
        "transition-all duration-200 outline-none",
        "focus:border-[var(--focus-ring)] focus:ring-2 focus:ring-[var(--focus-ring)] focus:ring-opacity-20",
        "disabled:cursor-not-allowed disabled:opacity-50",
        "aria-invalid:border-[var(--focus-ring-error)] aria-invalid:ring-2 aria-invalid:ring-[var(--focus-ring-error)] aria-invalid:ring-opacity-20",
        className,
      )}
      {...props}
    />
  );
}

export { Input };
