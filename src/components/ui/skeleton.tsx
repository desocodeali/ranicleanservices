import { cn } from "@/lib/utils";

/**
 * Skeleton Component
 * 
 * Loading placeholder component for better UX during content loading.
 */

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-muted", className)}
      {...props}
    />
  );
}

export { Skeleton };

