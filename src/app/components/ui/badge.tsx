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
          "bg-[var(--primary-600)] text-white border border-[var(--primary-600)] dark:bg-[var(--primary-300)] dark:text-[var(--neutral-near-black)] dark:border-[var(--primary-200)]",
        secondary:
          "bg-[var(--secondary-a-100)] text-[var(--secondary-a-700)] border border-[var(--secondary-a-300)] dark:bg-[var(--secondary-a-300)] dark:text-[var(--neutral-near-black)] dark:border-[var(--secondary-a-200)]",
        destructive:
          "bg-[var(--error-600)] text-white border border-[var(--error-600)] dark:bg-[var(--error-300)] dark:text-[var(--neutral-near-black)] dark:border-[var(--error-200)]",
        success:
          "bg-[var(--success-100)] text-[var(--secondary-c-700)] border border-[var(--success-300)] dark:bg-[var(--success-300)] dark:text-[var(--neutral-near-black)] dark:border-[var(--success-200)]",
        warning:
          "bg-[var(--warning-100)] text-[var(--neutral-near-black)] border border-[var(--warning-300)] dark:bg-[var(--warning-300)] dark:text-[var(--neutral-near-black)] dark:border-[var(--warning-200)]",
        outline:
          "bg-transparent text-[var(--text-primary)] border-2 border-[var(--border-strong)] hover:bg-[var(--background-subtle)]",
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
