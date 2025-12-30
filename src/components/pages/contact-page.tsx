"use client";

import { motion } from "framer-motion";
import { AddressSlider } from "@/components/address-slider";
import { WhatWeCanDoSection } from "@/components/contact/what-we-can-do-section";
import { ContactForm } from "@/components/contact/contact-form";
import { useSmoothScroll } from "@/hooks/use-smooth-scroll";
import { fadeInUp } from "@/lib/constants/animations";

/**
 * Contact Page Component
 * 
 * Main page component that orchestrates the contact page sections.
 * Follows Single Responsibility Principle by focusing only on page composition.
 */
export default function ContactPage() {
  // Smooth scroll to contact form on mount
  useSmoothScroll("contact-form", {
    offset: 100,
    duration: 1500,
    delay: 100,
  });

  return (
    <div className="w-full">
      <WhatWeCanDoSection />

      <motion.div
        initial={fadeInUp.initial}
        whileInView={fadeInUp.animate}
        viewport={{ once: true }}
        transition={fadeInUp.transition}
      >
        <AddressSlider />
      </motion.div>

      <ContactForm />
    </div>
  );
}
