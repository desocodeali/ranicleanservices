"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

const LOCALE_STORAGE_KEY = "raniclean-locale";
const REDIRECT_FLAG = "raniclean-redirecting";

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const toggleLanguage = () => {
    const newLocale = locale === "en" ? "de" : "en";
    const newPath = pathname.replace(`/${locale}`, `/${newLocale}`);
    
    // Set flag to indicate we're doing a manual redirect
    if (typeof window !== "undefined") {
      sessionStorage.setItem(REDIRECT_FLAG, "true");
      localStorage.setItem(LOCALE_STORAGE_KEY, newLocale);
    }
    
    // Navigate to new locale
    router.replace(newPath);
  };

  return (
    <Button
      variant="ghost"
      onClick={toggleLanguage}
      className="font-medium text-foreground hover:bg-secondary/50"
    >
      {locale === "en" ? "DE" : "EN"}
    </Button>
  );
}

