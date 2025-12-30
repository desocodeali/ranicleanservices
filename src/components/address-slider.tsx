"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useTranslations } from "next-intl";

export function AddressSlider() {
    const t = useTranslations("AddressSlider");

    const address = {
        location: t("location"),
        description: t("description"),
        address: t("address"),
        phone: t("phone"),
        email: "b.1975ferchichi@hotmail.com",
        image: "/contact.png",
    };

    return (
        <div className="bg-gray-50 py-16 md:py-24 lg:py-32">
            <div className="container mx-auto px-4 md:px-6 lg:px-8">
                <div className="mb-12 md:mb-16">
                    <motion.div
                        className="address-title_block"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="address-title_wrap">
                            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl mb-2 text-foreground">
                                {t("title")}
                            </h2>
                            <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary">
                                {t("subtitle")}
                            </div>
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    className="grid gap-6 md:gap-8 lg:gap-12 md:grid-cols-2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <div className="address-image_wrap relative h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden rounded-xl">
                        <Image
                            src={address.image}
                            alt="Berlin office"
                            fill
                            className="address_image object-cover"
                            unoptimized
                        />
                    </div>
                    <div className="address-content_wrap bg-white rounded-xl p-6 md:p-8 lg:p-10 flex flex-col justify-center shadow-sm">
                        <div className="address_content mb-6">
                            <div className="mb-4">
                                <h3 className="text-2xl md:text-3xl font-bold text-foreground">{address.location}</h3>
                            </div>
                            <p className="text-muted-foreground text-base md:text-lg">{address.description}</p>
                        </div>
                        <div className="address-content_divider h-px bg-gray-200 mb-6"></div>
                        <div className="address_info space-y-6">
                            <div className="address-info_item">
                                <div className="mb-3">
                                    <div className="text-sm font-bold text-foreground">
                                        {t("labels.address")}
                                    </div>
                                </div>
                                <a
                                    href="https://maps.google.com/?q=Kurfürstendamm+162,10709+Berlin"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="address_link text-foreground hover:text-primary hover:underline text-base"
                                >
                                    {address.address}
                                </a>
                            </div>
                            <div className="address-info_item">
                                <div className="mb-3">
                                    <div className="text-sm font-bold text-foreground">
                                        {t("labels.phone")}
                                    </div>
                                </div>
                                <a
                                    href={`tel:${address.phone.replace(/\s/g, "")}`}
                                    className="address_link text-foreground hover:text-primary hover:underline text-base"
                                >
                                    {address.phone}
                                </a>
                            </div>
                            <div className="address-info_item">
                                <div className="mb-3">
                                    <div className="text-sm font-bold text-foreground">
                                        {t("labels.email")}
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <a
                                        href={`mailto:${address.email}`}
                                        className="block address_link text-foreground hover:text-primary hover:underline text-base"
                                    >
                                        {address.email}
                                    </a>
                                    <a
                                        href="mailto:ranicleanservice@yahoo.com"
                                        className="block address_link text-foreground hover:text-primary hover:underline text-base"
                                    >
                                        ranicleanservice@yahoo.com
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
