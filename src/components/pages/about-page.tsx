"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { History, Award, Sparkles, Shield, Users } from "lucide-react";
import { CompactPageSkeleton } from "@/components/loading/page-skeleton";

export default function AboutPage() {
  const t = useTranslations("AboutPage");
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
      {/* Hero Section */}
      <motion.div
        className="mb-16 flex flex-col items-center justify-center space-y-4 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold tracking-tighter md:text-5xl text-primary">
          {t("title")}
        </h1>
        <p className="max-w-[700px] text-muted-foreground md:text-xl">
          {t("subtitle")}
        </p>
      </motion.div>

      {/* Story & Philosophy */}
      <div className="grid gap-12 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-primary">{t("story.title")}</h2>
            <p className="text-muted-foreground">{t("story.content")}</p>
          </div>
        </motion.div>

        <motion.div
          className="rounded-xl bg-secondary/20 p-8"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="mb-4 text-2xl font-bold text-primary">
            Philosophy
          </h2>
          <blockquote className="italic text-muted-foreground border-l-4 border-primary pl-4">
            &ldquo;{t("story.philosophy")}&rdquo;
          </blockquote>
        </motion.div>
      </div>

      {/* Image Gallery Section */}
      <motion.div
        className="mt-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-primary mb-4">
            {t("gallery.title")}
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            {t("gallery.subtitle")}
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <motion.div
            className="relative h-[300px] rounded-xl overflow-hidden group"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            whileHover={{ scale: 1.05 }}
          >
            <Image
              src="/image.png"
              alt="Professional cleaning service"
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-110"
              unoptimized
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
              <p className="text-white font-semibold text-lg">{t("gallery.image1")}</p>
            </div>
          </motion.div>
          <motion.div
            className="relative h-[300px] rounded-xl overflow-hidden group"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            whileHover={{ scale: 1.05 }}
          >
            <Image
              src="/image copy.png"
              alt="Eco-friendly cleaning"
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-110"
              unoptimized
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
              <p className="text-white font-semibold text-lg">{t("gallery.image2")}</p>
            </div>
          </motion.div>
          <motion.div
            className="relative h-[300px] rounded-xl overflow-hidden group"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            whileHover={{ scale: 1.05 }}
          >
            <Image
              src="/image copy 2.png"
              alt="Commercial cleaning"
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-110"
              unoptimized
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
              <p className="text-white font-semibold text-lg">{t("gallery.image3")}</p>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Features with Images */}
      <motion.div
        className="mt-16 grid gap-12 lg:grid-cols-2 items-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.0 }}
      >
        <div className="relative h-[400px] rounded-xl overflow-hidden">
          <Image
            src="/image copy 4.png"
            alt="Our commitment to excellence"
            fill
            className="object-cover"
            unoptimized
          />
        </div>
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <Sparkles className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">{t("features.innovation.title")}</h3>
              <p className="text-muted-foreground">{t("features.innovation.description")}</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <Shield className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">{t("features.quality.title")}</h3>
              <p className="text-muted-foreground">{t("features.quality.description")}</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <Users className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">{t("features.team.title")}</h3>
              <p className="text-muted-foreground">{t("features.team.description")}</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Stats */}
      <motion.div
        className="mt-16 grid gap-8 rounded-xl bg-primary p-8 text-primary-foreground sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.2 }}
      >
        <div className="flex flex-col items-center justify-center space-y-2">
          <History className="h-10 w-10 opacity-80" />
          <span className="text-4xl font-bold">20+</span>
          <span className="text-sm uppercase tracking-wider opacity-80">
            {t("stats.experience")}
          </span>
        </div>
        <div className="flex flex-col items-center justify-center space-y-2">
          <Award className="h-10 w-10 opacity-80" />
          <span className="text-4xl font-bold">100%</span>
          <span className="text-sm uppercase tracking-wider opacity-80">
            {t("stats.commitment")}
          </span>
        </div>
      </motion.div>
    </div>
  );
}
