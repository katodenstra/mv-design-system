import { cn } from "./utils";

function Skeleton({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="skeleton"
      className={cn(
        "relative overflow-hidden rounded-[var(--radius-md)] bg-[var(--skeleton-base)]",
        "before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite]",
        "before:bg-gradient-to-r before:from-transparent before:via-[var(--skeleton-shimmer)] before:to-transparent",
        className
      )}
      {...props}
    />
  );
}

export { Skeleton };
