import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { LocalePersist } from "@/components/locale-persist";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  // Use .de for German, .com for English
  const baseUrl = locale === "de"
    ? "https://ranicleangservice.de"
    : "https://ranicleangservice.com";
  const isGerman = locale === "de";

  const title = isGerman
    ? "RaniClean Service - Professionelle Reinigungsdienste in Berlin"
    : "RaniClean Service - Professional Cleaning Services in Berlin";

  const description = isGerman
    ? "Professionelle Reinigungsdienste für Wohnungen, Büros und Gewerbe in Berlin. Über 20 Jahre Erfahrung. Kommerzielle Reinigung, Fensterreinigung, umweltfreundliche Reinigung. Jetzt buchen!"
    : "Professional cleaning services for homes, offices, and commercial spaces in Berlin. Over 20 years of experience. Commercial cleaning, window cleaning, eco-friendly cleaning. Book now!";

  const keywords = isGerman
    ? "Reinigungsdienst Berlin, Büroreinigung Berlin, Hausreinigung Berlin, Fensterreinigung Berlin, Gewerbereinigung Berlin, umweltfreundliche Reinigung, Reinigungsfirma Berlin, RaniClean"
    : "cleaning service Berlin, office cleaning Berlin, house cleaning Berlin, window cleaning Berlin, commercial cleaning Berlin, eco-friendly cleaning, cleaning company Berlin, RaniClean";

  return {
    metadataBase: new URL(baseUrl),
    title: {
      default: title,
      template: `%s | RaniClean Service`,
    },
    description,
    keywords,
    authors: [{ name: "RaniClean Service" }],
    creator: "RaniClean Service",
    publisher: "RaniClean Service",
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    openGraph: {
      type: "website",
      locale: locale === "de" ? "de_DE" : "en_US",
      alternateLocale: locale === "de" ? "en_US" : "de_DE",
      url: `${baseUrl}/${locale}`,
      siteName: "RaniClean Service",
      title,
      description,
      images: [
        {
          url: `${baseUrl}/logo1.png`,
          width: 1200,
          height: 630,
          alt: "RaniClean Service Logo",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${baseUrl}/logo1.png`],
      creator: "@ranicleanservice", // Update with your Twitter handle if available
    },
    alternates: {
      canonical: `${baseUrl}/${locale}`,
      languages: {
        en: `https://ranicleangservice.com/en`,
        de: `https://ranicleangservice.de/de`,
        "x-default": `https://ranicleangservice.de/de`,
      },
    },
    verification: {
      // Add your verification codes here when available
      // google: "your-google-verification-code",
      // yandex: "your-yandex-verification-code",
      // yahoo: "your-yahoo-verification-code",
    },
    category: "Cleaning Services",
    classification: "Business",
  };
}

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "de" }];
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Enable static rendering
  setRequestLocale(locale);

  const messages = await getMessages();
  // Use .de for German, .com for English
  const baseUrl = locale === "de"
    ? "https://ranicleangservice.de"
    : "https://ranicleangservice.com";

  // Structured Data (JSON-LD) for LocalBusiness
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${baseUrl}/#organization`,
    name: "RaniClean Service",
    alternateName: "Rani Cleanservice",
    url: baseUrl,
    logo: `${baseUrl}/logo1.png`,
    image: `${baseUrl}/logo1.png`,
    description: locale === "de"
      ? "Professionelle Reinigungsdienste für Wohnungen, Büros und Gewerbe in Berlin"
      : "Professional cleaning services for homes, offices, and commercial spaces in Berlin",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Kurfürstendamm 162",
      addressLocality: "Berlin",
      postalCode: "10709",
      addressCountry: "DE",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "52.5044",
      longitude: "13.3333",
    },
    telephone: "+4917670914743",
    email: ["b.1975ferchichi@hotmail.com", "ranicleanservice@yahoo.com"],
    priceRange: "$$",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "08:00",
        closes: "18:00",
      },
    ],
    areaServed: {
      "@type": "City",
      name: "Berlin",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Cleaning Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: locale === "de" ? "Gewerbereinigung" : "Commercial Cleaning",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: locale === "de" ? "Fensterreinigung" : "Window Cleaning",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: locale === "de" ? "Umweltfreundliche Reinigung" : "Eco-friendly Cleaning",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: locale === "de" ? "Bodenreinigung" : "Floor Cleaning",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: locale === "de" ? "Gerätereinigung" : "Appliance Cleaning",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: locale === "de" ? "Sanitärreinigung" : "Restroom Sanitization",
          },
        },
      ],
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      reviewCount: "50",
    },
  };

  return (
    <html lang={locale}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased min-h-screen flex flex-col`}
      >
        <NextIntlClientProvider messages={messages}>
          <LocalePersist />
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
