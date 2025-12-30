"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, Building2, Shield } from "lucide-react";
import { fadeInUp, createStaggeredFadeIn } from "@/lib/constants/animations";

/**
 * What We Can Do Section Component
 * 
 * Displays the features/benefits section on the contact page.
 * Follows Single Responsibility Principle by focusing only on this section's rendering.
 */

export function WhatWeCanDoSection() {
  const t = useTranslations("ContactPage");

  const features = [
    {
      title: t("whatWeCanDo.features.experience.title"),
      description: t("whatWeCanDo.features.experience.description"),
      icon: Award,
    },
    {
      title: t("whatWeCanDo.features.comprehensive.title"),
      description: t("whatWeCanDo.features.comprehensive.description"),
      icon: Shield,
    },
    {
      title: t("whatWeCanDo.features.quality.title"),
      description: t("whatWeCanDo.features.quality.description"),
      icon: Building2,
    },
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <motion.div
          className="mb-12 text-center"
          initial={fadeInUp.initial}
          whileInView={fadeInUp.animate}
          viewport={{ once: true }}
          transition={fadeInUp.transition}
        >
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-primary mb-4">
            {t("whatWeCanDo.title")}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t("whatWeCanDo.subtitle")}
          </p>
        </motion.div>
        <div className="grid gap-6 md:grid-cols-3">
          {features.map((item, index) => (
            <motion.div
              key={index}
              initial={createStaggeredFadeIn(index * 0.1).initial}
              whileInView={createStaggeredFadeIn(index * 0.1).animate}
              viewport={{ once: true }}
              transition={createStaggeredFadeIn(index * 0.1).transition}
            >
              <Card className="h-full">
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

