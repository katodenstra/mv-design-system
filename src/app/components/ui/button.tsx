import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "./utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-all duration-200 disabled:pointer-events-none disabled:opacity-40 outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
  {
    variants: {
      variant: {
        default: "bg-[var(--action-primary-bg)] text-[var(--action-primary-text)] border border-[var(--action-primary-border)] hover:bg-[var(--action-primary-hover)] hover:shadow-md active:bg-[var(--action-primary-active)] active:scale-[0.98] focus-visible:ring-[var(--focus-ring)] shadow-sm",
        destructive:
          "bg-[var(--action-destructive-bg)] text-[var(--action-destructive-text)] border border-[var(--action-destructive-bg)] hover:bg-[var(--action-destructive-hover)] hover:shadow-md active:bg-[var(--action-destructive-active)] active:scale-[0.98] focus-visible:ring-[var(--focus-ring-error)] shadow-sm",
        outline:
          "border-2 border-[var(--action-outline-border)] bg-[var(--action-outline-bg)] text-[var(--action-outline-text)] hover:bg-[var(--action-outline-hover)] hover:border-[var(--border-strong)] active:bg-[var(--action-outline-active)] active:scale-[0.98] focus-visible:ring-[var(--focus-ring)]",
        secondary:
          "bg-[var(--action-secondary-bg)] text-[var(--action-secondary-text)] border border-[var(--action-secondary-border)] hover:bg-[var(--action-secondary-hover)] active:bg-[var(--action-secondary-active)] active:scale-[0.98] focus-visible:ring-[var(--focus-ring)]",
        ghost:
          "bg-[var(--action-ghost-bg)] text-[var(--action-ghost-text)] hover:bg-[var(--action-ghost-hover)] active:bg-[var(--action-ghost-active)] active:scale-[0.98] focus-visible:ring-[var(--focus-ring)]",
        link: "text-[var(--action-ghost-text)] underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2 rounded-[var(--radius-md)] text-[var(--text-base)]",
        sm: "h-8 px-3 py-1.5 rounded-[var(--radius-sm)] text-[var(--text-sm)]",
        lg: "h-12 px-6 py-3 rounded-[var(--radius-lg)] text-[var(--text-md)]",
        icon: "size-10 rounded-[var(--radius-md)]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
