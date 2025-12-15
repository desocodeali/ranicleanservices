import Link from "next/link";
import { useTranslations } from "next-intl";

export function Footer() {
  const t = useTranslations("Footer");
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
                <Link href="/" className="hover:text-primary">
                  {t("home")}
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-primary">
                  {t("services")}
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-primary">
                  {t("about")}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary">
                  {t("contact")}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 font-semibold">{t("contact")}</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>email@example.com</li>
              <li>+49 123 456 789</li>
              <li>Berlin, Germany</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 font-semibold">{t("legal")}</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/privacy" className="hover:text-primary">
                  {t("privacy")}
                </Link>
              </li>
              <li>
                <Link href="/imprint" className="hover:text-primary">
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

