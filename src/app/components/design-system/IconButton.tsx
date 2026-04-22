import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../ui/utils";

const iconButtonVariants = cva(
  "inline-flex items-center justify-center font-medium transition-all duration-200 disabled:pointer-events-none disabled:opacity-40 outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
  {
    variants: {
      variant: {
        default: "bg-[var(--action-primary-bg)] text-[var(--action-primary-text)] border border-[var(--action-primary-border)] hover:bg-[var(--action-primary-hover)] hover:shadow-md active:bg-[var(--action-primary-active)] active:scale-[0.95] focus-visible:ring-[var(--focus-ring)] shadow-sm",
        destructive:
          "bg-[var(--action-destructive-bg)] text-[var(--action-destructive-text)] border border-[var(--action-destructive-bg)] hover:bg-[var(--action-destructive-hover)] hover:shadow-md active:bg-[var(--action-destructive-active)] active:scale-[0.95] focus-visible:ring-[var(--focus-ring-error)] shadow-sm",
        outline:
          "border-2 border-[var(--action-outline-border)] bg-[var(--action-outline-bg)] text-[var(--action-outline-text)] hover:bg-[var(--action-outline-hover)] hover:border-[var(--border-strong)] active:bg-[var(--action-outline-active)] active:scale-[0.95] focus-visible:ring-[var(--focus-ring)]",
        secondary:
          "bg-[var(--action-secondary-bg)] text-[var(--action-secondary-text)] border border-[var(--action-secondary-border)] hover:bg-[var(--action-secondary-hover)] active:bg-[var(--action-secondary-active)] active:scale-[0.95] focus-visible:ring-[var(--focus-ring)]",
        ghost:
          "bg-[var(--action-ghost-bg)] text-[var(--action-ghost-text)] hover:bg-[var(--action-ghost-hover)] active:bg-[var(--action-ghost-active)] active:scale-[0.95] focus-visible:ring-[var(--focus-ring)]",
      },
      size: {
        sm: "size-8 rounded-[var(--radius-sm)]",
        default: "size-10 rounded-[var(--radius-md)]",
        lg: "size-12 rounded-[var(--radius-lg)]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof iconButtonVariants> {
  icon: string;
  label: string;
}

export function IconButton({
  className,
  variant,
  size,
  icon,
  label,
  ...props
}: IconButtonProps) {
  return (
    <button
      aria-label={label}
      className={cn(iconButtonVariants({ variant, size, className }))}
      {...props}
    >
      <span className="material-symbols-outlined text-[var(--icon-sm)]">
        {icon}
      </span>
    </button>
  );
}
