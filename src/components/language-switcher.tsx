"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const toggleLanguage = () => {
    const newLocale = locale === "en" ? "de" : "en";
    const newPath = pathname.replace(`/${locale}`, `/${newLocale}`);
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

