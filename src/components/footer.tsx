"use client";

import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";

export function Footer() {
  const t = useTranslations("Footer");
  const locale = useLocale();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t bg-muted/30">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-primary">RaniClean Service</h3>
            <p className="text-sm text-muted-foreground">
              {t("brandStatement")}
            </p>
          </div>
          <div>
            <h4 className="mb-4 font-semibold">{t("links")}</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href={`/${locale}`} className="hover:text-primary">
                  {t("home")}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/services`} className="hover:text-primary">
                  {t("services")}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/about`} className="hover:text-primary">
                  {t("about")}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/contact`} className="hover:text-primary">
                  {t("contact")}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 font-semibold">{t("contact")}</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a
                  href="mailto:b.1975ferchichi@hotmail.com"
                  className="hover:text-primary hover:underline"
                >
                  b.1975ferchichi@hotmail.com
                </a>
              </li>
              <li>
                <a
                  href="mailto:ranicleanservice@yahoo.com"
                  className="hover:text-primary hover:underline"
                >
                  ranicleanservice@yahoo.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+4917670914743"
                  className="hover:text-primary hover:underline"
                >
                  +49 176 709 147 43
                </a>
              </li>
              <li>
                <a
                  href="https://maps.google.com/?q=Kurfürstendamm+162,10709+Berlin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary hover:underline"
                >
                  Kurfürstendamm 162, 10709 Berlin
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 font-semibold">{t("legal")}</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href={`/${locale}/imprint`} className="hover:text-primary">
                  {t("imprint")}
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>© {year} RaniClean Service. {t("copyright")}</p>
        </div>
      </div>
    </footer>
  );
}

