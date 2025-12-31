"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { CompactPageSkeleton } from "@/components/loading/page-skeleton";

export default function ImprintPage() {
    const t = useTranslations("ImprintPage");
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 300);
        return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
        return <CompactPageSkeleton />;
    }

    return (
        <div className="container px-4 py-16 md:px-6 md:py-24">
            <motion.div
                className="mx-auto max-w-3xl space-y-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h1 className="text-3xl font-bold tracking-tighter md:text-4xl text-primary">
                    {t("title")}
                </h1>

                <div className="space-y-4 text-muted-foreground">
                    <section>
                        <h2 className="text-xl font-semibold text-foreground mb-2">{t("legalInfo.title")}</h2>
                        <p className="font-medium">{t("legalInfo.company")}</p>
                        <p>{t("legalInfo.owner")}</p>
                        <a
                            href="https://maps.google.com/?q=Kurfürstendamm+162,10709+Berlin"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block hover:text-primary hover:underline transition-colors"
                        >
                            <p>{t("legalInfo.address")}</p>
                            <p>{t("legalInfo.postalCode")}</p>
                            <p>{t("legalInfo.city")}</p>
                            <p>{t("legalInfo.country")}</p>
                        </a>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-foreground mb-2">{t("contact.title")}</h2>
                        <a
                            href="tel:+4917670914743"
                            className="block hover:text-primary hover:underline transition-colors mb-2"
                        >
                            <p>{t("contact.phone")}</p>
                        </a>
                        <a
                            href="mailto:b.1975ferchichi@hotmail.com"
                            className="block hover:text-primary hover:underline transition-colors mb-2"
                        >
                            <p>{t("contact.email")}</p>
                        </a>
                        <a
                            href="mailto:ranicleanservice@yahoo.com"
                            className="block hover:text-primary hover:underline transition-colors"
                        >
                            <p>ranicleanservice@yahoo.com</p>
                        </a>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-foreground mb-2">{t("tax.title")}</h2>
                        <p>{t("tax.number")}</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-foreground mb-2">{t("disclaimer.title")}</h2>
                        <p className="text-sm">
                            {t("disclaimer.content")}
                        </p>
                    </section>
                </div>
            </motion.div>
        </div>
    );
}

