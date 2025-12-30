import * as z from "zod";

/**
 * Contact Form Validation Schema
 * 
 * Centralized validation schema for the contact form.
 * This can be easily extended or modified without touching component logic.
 */

export interface ContactFormTranslations {
  nameMin: string;
  emailInvalid: string;
  serviceRequired: string;
  messageMin: string;
}

export function createContactFormSchema(t: ContactFormTranslations) {
  return z.object({
    name: z.string().min(2, t.nameMin),
    email: z.string().email(t.emailInvalid),
    phone: z.string().optional(),
    service: z.string().min(1, t.serviceRequired),
    message: z.string().min(10, t.messageMin),
  });
}

export type ContactFormData = z.infer<ReturnType<typeof createContactFormSchema>>;

