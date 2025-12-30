import ContactPage from "@/components/pages/contact-page";
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
    ? "Kontakt - RaniClean Service Berlin"
    : "Contact - RaniClean Service Berlin";
  
  const description = isGerman
    ? "Kontaktieren Sie RaniClean Service für professionelle Reinigungsdienste in Berlin. Kurfürstendamm 162, 10709 Berlin. Telefon: +49 176 709 147 43"
    : "Contact RaniClean Service for professional cleaning services in Berlin. Kurfürstendamm 162, 10709 Berlin. Phone: +49 176 709 147 43";

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `${baseUrl}/${locale}/contact`,
      type: "website",
    },
    alternates: {
      canonical: `${baseUrl}/${locale}/contact`,
      languages: {
        en: `https://ranicleangservice.com/en/contact`,
        de: `https://ranicleangservice.de/de/contact`,
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

  return <ContactPage />;
}
