import { useEffect } from "react";

/**
 * Custom hook for smooth scrolling to an element
 * 
 * @param elementId - The ID of the element to scroll to
 * @param options - Configuration options for the scroll behavior
 */
export interface SmoothScrollOptions {
  offset?: number; // Offset from top in pixels
  duration?: number; // Animation duration in milliseconds
  delay?: number; // Delay before starting scroll in milliseconds
}

export function useSmoothScroll(
  elementId: string,
  options: SmoothScrollOptions = {}
) {
  const { offset = 100, duration = 1500, delay = 100 } = options;

  useEffect(() => {
    const timer = setTimeout(() => {
      const element = document.getElementById(elementId);
      if (!element) return;

      const startPosition = window.pageYOffset;
      const targetPosition = element.offsetTop - offset;
      const distance = targetPosition - startPosition;
      let startTime: number | null = null;

      const easeInOutCubic = (t: number): number => {
        return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
      };

      const animation = (currentTime: number) => {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);
        const ease = easeInOutCubic(progress);

        window.scrollTo(0, startPosition + distance * ease);

        if (progress < 1) {
          requestAnimationFrame(animation);
        }
      };

      requestAnimationFrame(animation);
    }, delay);

    return () => clearTimeout(timer);
  }, [elementId, offset, duration, delay]);
}

