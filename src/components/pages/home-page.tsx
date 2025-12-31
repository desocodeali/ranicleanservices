"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useTranslations, useLocale } from "next-intl";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ServiceCard } from "@/components/service-card";
import { TestimonialCard } from "@/components/testimonial-card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Building2,
  Leaf,
  Layers,
  WashingMachine,
  Droplets,
  Scan,
  Award,
  Shield,
  Clock,
  Heart,
} from "lucide-react";
import { PageSkeleton } from "@/components/loading/page-skeleton";

export default function HomePage() {
  const t = useTranslations("HomePage");
  const locale = useLocale();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time and wait for content/images
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 300);

    // Check if images are loaded
    const images = document.querySelectorAll("img");
    if (images.length === 0) {
      setIsLoading(false);
      return;
    }

    let loadedCount = 0;
    const checkImageLoad = () => {
      loadedCount++;
      if (loadedCount >= images.length || loadedCount >= 5) {
        setIsLoading(false);
      }
    };

    images.forEach((img) => {
      if ((img as HTMLImageElement).complete) {
        checkImageLoad();
      } else {
        img.addEventListener("load", checkImageLoad, { once: true });
        img.addEventListener("error", checkImageLoad, { once: true });
      }
    });

    return () => clearTimeout(timer);
  }, []);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  const services = [
    {
      title: t("servicesList.commercial.title"),
      description: t("servicesList.commercial.description"),
      icon: Building2,
    },
    {
      title: t("servicesList.window.title"),
      description: t("servicesList.window.description"),
      icon: Scan,
    },
    {
      title: t("servicesList.eco.title"),
      description: t("servicesList.eco.description"),
      icon: Leaf,
    },
    {
      title: t("servicesList.floor.title"),
      description: t("servicesList.floor.description"),
      icon: Layers,
    },
    {
      title: t("servicesList.appliance.title"),
      description: t("servicesList.appliance.description"),
      icon: WashingMachine,
    },
    {
      title: t("servicesList.restroom.title"),
      description: t("servicesList.restroom.description"),
      icon: Droplets,
    },
  ];


  const testimonials = [
    {
      name: "Sarah M.",
      review: t("testimonials.review1"),
      rating: 5,
    },
    {
      name: "Michael K.",
      review: t("testimonials.review2"),
      rating: 5,
    },
    {
      name: "Julia R.",
      review: t("testimonials.review3"),
      rating: 5,
    },
  ];

  const faqs = [
    {
      question: t("faq.q1.question"),
      answer: t("faq.q1.answer"),
      id: "item-1",
    },
    {
      question: t("faq.q2.question"),
      answer: t("faq.q2.answer"),
      id: "item-2",
    },
    {
      question: t("faq.q3.question"),
      answer: t("faq.q3.answer"),
      id: "item-3",
    },
    {
      question: t("faq.q4.question"),
      answer: t("faq.q4.answer"),
      id: "item-4",
    },
    {
      question: t("faq.q5.question"),
      answer: t("faq.q5.answer"),
      id: "item-5",
    },
  ];

  if (isLoading) {
    return <PageSkeleton />;
  }

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative flex min-h-[600px] items-center justify-center overflow-hidden pt-16">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-full object-cover"
            poster="https://cdn.prod.website-files.com/68c7fc532c18bd4c19f842d0%2F68f26ef2ae96390b3d18611b_home-background-video-poster-00001.jpg"
          >
            <source
              src="https://cdn.prod.website-files.com/68c7fc532c18bd4c19f842d0%2F68f26ef2ae96390b3d18611b_home-background-video-transcode.mp4"
              type="video/mp4"
            />
            <source
              src="https://cdn.prod.website-files.com/68c7fc532c18bd4c19f842d0%2F68f26ef2ae96390b3d18611b_home-background-video-transcode.webm"
              type="video/webm"
            />
          </video>
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Content */}
        <div className="container relative z-10 px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
            <motion.div
              className="flex flex-col justify-center space-y-4"
              initial="initial"
              animate="animate"
              variants={fadeIn}
            >
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-white drop-shadow-lg">
                  {t("hero.title")}
                </h1>
                <p className="max-w-[600px] text-white/90 md:text-xl drop-shadow-md">
                  {t("hero.subtitle")}
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" asChild>
                  <Link href={`/${locale}/contact`}>{t("hero.ctaPrimary")}</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white/10 text-white border-white/30 hover:bg-white/20"
                  asChild
                >
                  <Link href={`/${locale}/services`}>{t("hero.ctaSecondary")}</Link>
                </Button>
              </div>
            </motion.div>
            <motion.div
              className="flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {/* Empty space for layout balance */}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <motion.div
            className="flex flex-col items-center justify-center space-y-4 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-primary">
                {t("sections.services.title")}
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                {t("sections.services.subtitle")}
              </p>
            </div>
          </motion.div>
          <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ServiceCard {...service} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="w-full bg-gradient-to-b from-secondary/30 to-background py-16 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <motion.div
            className="mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl text-primary mb-4">
              {t("sections.whyUs.title")}
            </h2>
            <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
              {t("sections.whyUs.subtitle")}
            </p>
          </motion.div>

          {/* Image Gallery with Overlay Features */}
          <div className="mb-16 grid gap-6 md:grid-cols-3">
            {[
              { src: "/hotel.png", alt: "Luxury hotel cleaning", delay: 0.1 },
              { src: "/hotel2.png", alt: "Professional service", delay: 0.2 },
              { src: "/hotel3.png", alt: "Excellence in action", delay: 0.3 },
            ].map((img, index) => (
              <motion.div
                key={index}
                className="relative h-[250px] md:h-[350px] rounded-2xl overflow-hidden group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: img.delay }}
                whileHover={{ scale: 1.05, zIndex: 10 }}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="text-white">
                    <p className="font-semibold text-lg mb-1">
                      {t(`sections.whyUs.image${index + 1}.title`)}
                    </p>
                    <p className="text-sm opacity-90">
                      {t(`sections.whyUs.image${index + 1}.description`)}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Feature Cards */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Award,
                title: t("sections.whyUs.features.experience.title"),
                description: t("sections.whyUs.features.experience.description"),
                color: "text-yellow-500",
                bgColor: "bg-yellow-500/10",
              },
              {
                icon: Shield,
                title: t("sections.whyUs.features.quality.title"),
                description: t("sections.whyUs.features.quality.description"),
                color: "text-blue-500",
                bgColor: "bg-blue-500/10",
              },
              {
                icon: Clock,
                title: t("sections.whyUs.features.flexibility.title"),
                description: t("sections.whyUs.features.flexibility.description"),
                color: "text-green-500",
                bgColor: "bg-green-500/10",
              },
              {
                icon: Heart,
                title: t("sections.whyUs.features.care.title"),
                description: t("sections.whyUs.features.care.description"),
                color: "text-red-500",
                bgColor: "bg-red-500/10",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="relative rounded-xl bg-white p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className={`${feature.bgColor} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
                  <feature.icon className={`h-6 w-6 ${feature.color}`} />
                </div>
                <h3 className="text-xl font-bold mb-2 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <motion.div
            className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-primary">
              {t("sections.faq.title")}
            </h2>
          </motion.div>
          <div className="mx-auto max-w-3xl">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq) => (
                <AccordionItem key={faq.id} value={faq.id}>
                  <AccordionTrigger className="text-lg font-medium text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="w-full bg-secondary/30 py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <motion.h2
            className="mb-12 text-center text-3xl font-bold tracking-tighter md:text-4xl text-primary"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {t("sections.testimonials.title")}
          </motion.h2>
          <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <TestimonialCard {...testimonial} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-primary py-16 text-primary-foreground">
        <div className="container flex flex-col items-center px-4 text-center md:px-6">
          <h2 className="mb-4 text-3xl font-bold tracking-tighter md:text-4xl">
            {t("cta.title")}
          </h2>
          <p className="mb-8 max-w-[600px] text-lg text-primary-foreground/90">
            {t("cta.subtitle")}
          </p>
          <Button
            size="lg"
            variant="secondary"
            className="text-primary hover:bg-white"
            asChild
          >
            <Link href={`/${locale}/contact`}>{t("cta.button")}</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
