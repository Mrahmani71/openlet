import { cn } from "@openlet/ui/lib/utils";

import type { ReactNode } from "react";

interface SectionHeadingProps {
  label: string;
  title: string;
  viewAllHref?: string;
  viewAllLabel?: string;
  icon?: ReactNode;
  className?: string;
}

export function SectionHeading({
  label,
  title,
  viewAllHref = "#",
  viewAllLabel = "View all",
  icon,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("mb-10 flex items-end justify-between", className)}>
      <div className={icon ? "flex items-center gap-4" : undefined}>
        {icon && (
          <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
            {icon}
          </div>
        )}
        <div>
          <span className="mb-2 block text-xs font-bold tracking-[0.2em] text-primary uppercase">
            {label}
          </span>
          <h2 className="font-heading text-3xl font-bold md:text-4xl">{title}</h2>
        </div>
      </div>
      {viewAllHref && (
        <a
          href={viewAllHref}
          className="hidden items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary md:inline-flex"
        >
          {viewAllLabel}{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 256 256"
            className="size-3"
            fill="currentColor"
          >
            <path d="M224.49 136.49l-72 72a12 12 0 01-17-17L187 140H40a12 12 0 010-24h147l-51.49-51.52a12 12 0 0117-17l72 72a12 12 0 01-.02 17.01z" />
          </svg>
        </a>
      )}
    </div>
  );
}
