import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "./utils";

const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-[var(--radius-sm)] px-2.5 py-1 text-[var(--text-xs)] font-semibold w-fit whitespace-nowrap shrink-0 transition-colors",
  {
    variants: {
      variant: {
        default:
          "bg-[var(--primary-600)] dark:bg-[var(--primary-500)] text-white border border-[var(--primary-600)] dark:border-[var(--primary-500)]",
        secondary:
          "bg-[var(--secondary-a-100)] dark:bg-[var(--secondary-a-600)] dark:bg-opacity-25 text-[var(--secondary-a-700)] dark:text-[var(--secondary-a-200)] border border-[var(--secondary-a-300)] dark:border-[var(--secondary-a-500)]",
        destructive:
          "bg-[var(--error-600)] dark:bg-[var(--error-500)] text-white border border-[var(--error-600)] dark:border-[var(--error-500)]",
        success:
          "bg-[var(--success-100)] dark:bg-[var(--success-600)] dark:bg-opacity-25 text-[var(--success-700)] dark:text-[var(--success-200)] border border-[var(--success-300)] dark:border-[var(--success-500)]",
        warning:
          "bg-[var(--warning-100)] dark:bg-[var(--warning-600)] dark:bg-opacity-25 text-[var(--warning-700)] dark:text-[var(--warning-200)] border border-[var(--warning-300)] dark:border-[var(--warning-500)]",
        outline:
          "bg-transparent text-[var(--text-primary)] border-2 border-[var(--border-medium)] hover:bg-[var(--background-subtle)]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

function Badge({
  className,
  variant,
  asChild = false,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "span";

  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  );
}

export { Badge, badgeVariants };
