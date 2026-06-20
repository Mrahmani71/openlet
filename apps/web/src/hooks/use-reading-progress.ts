import { useEffect, useRef, useState } from "react";

export function useReadingProgress() {
  const [progress, setProgress] = useState(0);
  const enabled = useRef(false);

  const startTracking = () => {
    enabled.current = true;
  };

  const stopTracking = () => {
    enabled.current = false;
    setProgress(0);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (!enabled.current) return;
      const scrollTop = document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
      setProgress(Math.min(pct, 100));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return { progress, startTracking, stopTracking };
}
