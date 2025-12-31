"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, AlertCircle } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { FormField } from "@/components/forms/form-field";
import { FormSelect } from "@/components/forms/form-select";
import { createContactFormSchema, type ContactFormData } from "@/lib/validation/contact-form.schema";
import { EmailJSService } from "@/lib/services/emailjs.service";
import { fadeInUp } from "@/lib/constants/animations";

/**
 * Contact Form Component
 * 
 * Handles the contact form UI and submission logic.
 * Follows Single Responsibility Principle by focusing only on form rendering and submission.
 */

export function ContactForm() {
  const t = useTranslations("ContactPage");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const formSchema = createContactFormSchema({
    nameMin: t("form.validation.nameMin"),
    emailInvalid: t("form.validation.emailInvalid"),
    serviceRequired: t("form.validation.serviceRequired"),
    messageMin: t("form.validation.messageMin"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setSubmitError(null);
    try {
      await EmailJSService.sendContactForm(data, t("form.phoneNotProvided"));
      setIsSubmitted(true);
      reset();
    } catch (error) {
      console.error("EmailJS Error:", error);
      setSubmitError(t("form.error"));
    }
  };

  const serviceOptions = [
    { value: "home", label: t("form.services.home") },
    { value: "office", label: t("form.services.office") },
    { value: "deep", label: t("form.services.deep") },
  ];

  return (
    <section id="contact-form" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={fadeInUp.initial}
          whileInView={fadeInUp.animate}
          viewport={{ once: true }}
          transition={fadeInUp.transition}
          className="mx-auto w-full max-w-2xl"
        >
          <Card>
            <CardHeader>
              <CardTitle>{t("title")}</CardTitle>
              <CardDescription>{t("subtitle")}</CardDescription>
            </CardHeader>
            <CardContent>
              {isSubmitted ? (
                <div className="flex h-full flex-col items-center justify-center space-y-4 py-12 text-center">
                  <CheckCircle2 className="h-16 w-16 text-green-500" />
                  <h3 className="text-2xl font-bold">{t("form.success")}</h3>
                  <Button onClick={() => setIsSubmitted(false)}>
                    {t("form.sendAnother")}
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  {submitError && (
                    <Alert variant="destructive">
                      <AlertCircle className="h-4 w-4" />
                      <AlertTitle>{t("form.errorTitle")}</AlertTitle>
                      <AlertDescription>{submitError}</AlertDescription>
                    </Alert>
                  )}

                  <FormField
                    id="name"
                    label={t("form.name")}
                    type="text"
                    error={errors.name?.message as string}
                    register={register}
                    required
                  />

                  <FormField
                    id="email"
                    label={t("form.email")}
                    type="email"
                    error={errors.email?.message as string}
                    register={register}
                    required
                  />

                  <FormField
                    id="phone"
                    label={t("form.phone")}
                    type="tel"
                    error={errors.phone?.message as string}
                    register={register}
                  />

                  <FormSelect
                    id="service"
                    label={t("form.service")}
                    options={serviceOptions}
                    placeholder={t("form.selectService")}
                    error={errors.service?.message as string}
                    register={register}
                    required
                  />

                  <FormField
                    id="message"
                    label={t("form.message")}
                    type="textarea"
                    rows={4}
                    error={errors.message?.message as string}
                    register={register}
                    required
                  />

                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? t("form.sending") : t("form.submit")}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}

