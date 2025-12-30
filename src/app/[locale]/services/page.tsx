import ServicesPage from "@/components/pages/services-page";
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
    ? "Unsere Reinigungsdienstleistungen - RaniClean Service"
    : "Our Cleaning Services - RaniClean Service";
  
  const description = isGerman
    ? "Umfassende Reinigungslösungen: Gewerbereinigung, Fensterreinigung, umweltfreundliche Reinigung, Bodenreinigung, Gerätereinigung und Sanitärreinigung in Berlin."
    : "Comprehensive cleaning solutions: Commercial cleaning, window cleaning, eco-friendly cleaning, floor cleaning, appliance cleaning, and restroom sanitization in Berlin.";

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `${baseUrl}/${locale}/services`,
      type: "website",
    },
    alternates: {
      canonical: `${baseUrl}/${locale}/services`,
      languages: {
        en: `https://ranicleangservice.com/en/services`,
        de: `https://ranicleangservice.de/de/services`,
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

  return <ServicesPage />;
}
