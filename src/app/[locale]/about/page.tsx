import AboutPage from "@/components/pages/about-page";
import { setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "de" }];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const baseUrl = locale === "de"
    ? "https://ranicleangservice.de"
    : "https://ranicleangservice.com";
  const isGerman = locale === "de";

  const title = isGerman
    ? "Über Uns - RaniClean Service Berlin"
    : "About Us - RaniClean Service Berlin";

  const description = isGerman
    ? "Erfahren Sie mehr über RaniClean Service. Über 20 Jahre Erfahrung in der Reinigungsbranche. Professionelle Reinigungsdienste für Hotels, Büros und Gewerbe in Berlin."
    : "Learn more about RaniClean Service. Over 20 years of experience in the cleaning industry. Professional cleaning services for hotels, offices, and commercial spaces in Berlin.";

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `${baseUrl}/${locale}/about`,
      type: "website",
    },
    alternates: {
      canonical: `${baseUrl}/${locale}/about`,
      languages: {
        en: `https://ranicleangservice.com/en/about`,
        de: `https://ranicleangservice.de/de/about`,
      },
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  // Enable static rendering
  setRequestLocale(locale);

  return <AboutPage />;
}
