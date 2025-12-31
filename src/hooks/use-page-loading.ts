"use client";

import { useState, useEffect } from "react";

/**
 * Custom hook for page loading state
 * 
 * Shows loading skeleton while page content is loading.
 * Useful for slow internet connections.
 */

export function usePageLoading(minLoadingTime: number = 500) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Ensure minimum loading time for smooth UX
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, minLoadingTime);

    // Check if all images are loaded
    const checkImagesLoaded = () => {
      const images = document.querySelectorAll("img");
      if (images.length === 0) {
        return;
      }

      const imagePromises = Array.from(images).map((img) => {
        if ((img as HTMLImageElement).complete) {
          return Promise.resolve();
        }
        return new Promise<void>((resolve) => {
          img.addEventListener("load", () => resolve(), { once: true });
          img.addEventListener("error", () => resolve(), { once: true });
        });
      });

      Promise.all(imagePromises).then(() => {
        setIsLoading(false);
      });
    };

    // Use requestAnimationFrame to ensure DOM is ready
    const rafId = requestAnimationFrame(() => {
      checkImagesLoaded();
    });

    return () => {
      clearTimeout(timer);
      cancelAnimationFrame(rafId);
    };
  }, [minLoadingTime]);

  return isLoading;
}

