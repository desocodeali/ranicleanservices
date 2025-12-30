import ImprintPage from "@/components/pages/imprint-page";
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
        ? "Impressum - RaniClean Service"
        : "Imprint - RaniClean Service";
    
    const description = isGerman
        ? "Impressum und rechtliche Informationen von RaniClean Service. Kurfürstendamm 162, 10709 Berlin."
        : "Imprint and legal information of RaniClean Service. Kurfürstendamm 162, 10709 Berlin.";

    return {
        title,
        description,
        robots: {
            index: false,
            follow: true,
        },
        openGraph: {
            title,
            description,
            url: `${baseUrl}/${locale}/imprint`,
            type: "website",
        },
        alternates: {
            canonical: `${baseUrl}/${locale}/imprint`,
            languages: {
                en: `https://ranicleangservice.com/en/imprint`,
                de: `https://ranicleangservice.de/de/imprint`,
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

    return <ImprintPage />;
}

