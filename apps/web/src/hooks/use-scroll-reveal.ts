import { useEffect, useRef, useState } from "react";

interface UseScrollRevealOptions {
  threshold?: number | undefined;
  rootMargin?: string | undefined;
}

export function useScrollReveal<T extends HTMLElement>({
  threshold = 0.08,
  rootMargin = "0px 0px -40px 0px",
}: UseScrollRevealOptions = {}) {
  const ref = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(node);
        }
      },
      { threshold, rootMargin },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return { ref, isVisible };
}
