import { cn } from "@openlet/ui/lib/utils";
import { type HTMLAttributes, forwardRef } from "react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

interface ScrollRevealProps extends HTMLAttributes<HTMLDivElement> {
  delay?: 1 | 2 | 3 | 4;
  threshold?: number;
}

export const ScrollReveal = forwardRef<HTMLDivElement, ScrollRevealProps>(
  ({ className, delay, threshold, children, ...props }, _ref) => {
    const { ref, isVisible } = useScrollReveal<HTMLDivElement>({ threshold });

    return (
      <div
        ref={ref}
        className={cn(
          "translate-y-8 opacity-0 transition-[opacity,transform] duration-700 ease-out",
          isVisible && "translate-y-0 opacity-100",
          delay === 1 && "transition-delay-100",
          delay === 2 && "transition-delay-200",
          delay === 3 && "transition-delay-300",
          delay === 4 && "transition-delay-400",
          "motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none",
          className,
        )}
        {...props}
      >
        {children}
      </div>
    );
  },
);

ScrollReveal.displayName = "ScrollReveal";
