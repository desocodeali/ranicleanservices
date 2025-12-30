"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef } from "react";

const LOCALE_STORAGE_KEY = "raniclean-locale";
const REDIRECT_FLAG = "raniclean-redirecting";

export function LocalePersist() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const hasChecked = useRef(false);

  useEffect(() => {
    // Only run on client side and only once per page load
    if (typeof window === "undefined" || hasChecked.current) return;
    
    // Check if we're in the middle of a redirect (set by language switcher)
    const isRedirecting = sessionStorage.getItem(REDIRECT_FLAG);
    if (isRedirecting) {
      sessionStorage.removeItem(REDIRECT_FLAG);
      hasChecked.current = true;
      // Save the locale that we just navigated to
      localStorage.setItem(LOCALE_STORAGE_KEY, locale);
      return;
    }

    hasChecked.current = true;
    const savedLocale = localStorage.getItem(LOCALE_STORAGE_KEY);
    
    // Only redirect on initial page load if saved locale differs from URL
    if (
      savedLocale &&
      savedLocale !== locale &&
      (savedLocale === "en" || savedLocale === "de")
    ) {
      const newPath = pathname.replace(`/${locale}`, `/${savedLocale}`);
      if (newPath !== pathname) {
        router.replace(newPath);
        return;
      }
    }
    
    // Save current locale if no saved preference exists
    if (!savedLocale) {
      localStorage.setItem(LOCALE_STORAGE_KEY, locale);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Empty deps - only run once on mount

  return null;
}

