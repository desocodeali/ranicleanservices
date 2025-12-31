"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { ServiceCard } from "@/components/service-card";
import {
  Building2,
  Leaf,
  Layers,
  WashingMachine,
  Droplets,
  Scan,
} from "lucide-react";
import { CompactPageSkeleton } from "@/components/loading/page-skeleton";

export default function ServicesPage() {
  const t = useTranslations("HomePage.servicesList");
  const tSection = useTranslations("HomePage.sections.services");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  const services = [
    {
      title: t("commercial.title"),
      description: t("commercial.description"),
      icon: Building2,
    },
    {
      title: t("window.title"),
      description: t("window.description"),
      icon: Scan,
    },
    {
      title: t("eco.title"),
      description: t("eco.description"),
      icon: Leaf,
    },
    {
      title: t("floor.title"),
      description: t("floor.description"),
      icon: Layers,
    },
    {
      title: t("appliance.title"),
      description: t("appliance.description"),
      icon: WashingMachine,
    },
    {
      title: t("restroom.title"),
      description: t("restroom.description"),
      icon: Droplets,
    },
  ];

  if (isLoading) {
    return <CompactPageSkeleton />;
  }

  return (
    <div className="container px-4 py-16 md:px-6 md:py-24">
      <motion.div
        className="mb-12 flex flex-col items-center justify-center space-y-4 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold tracking-tighter md:text-5xl text-primary">
          {tSection("title")}
        </h1>
        <p className="max-w-[700px] text-muted-foreground md:text-xl">
          {tSection("subtitle")}
        </p>
      </motion.div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <ServiceCard {...service} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
