import emailjs from "@emailjs/browser";
import { EMAILJS_CONFIG } from "@/lib/config/emailjs.config";

/**
 * EmailJS Service
 * 
 * Handles all email sending operations through EmailJS.
 * This service abstracts the EmailJS implementation details.
 */

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  service: string;
  message: string;
}

export interface EmailJSParams extends Record<string, unknown> {
  from_name: string;
  from_email: string;
  phone: string;
  service_type: string;
  message: string;
}

export class EmailJSService {
  /**
   * Sends a contact form submission via EmailJS
   * @param formData - The contact form data
   * @param phoneNotProvidedText - Text to display if phone is not provided
   * @returns Promise that resolves when email is sent
   * @throws Error if email sending fails
   */
  static async sendContactForm(
    formData: ContactFormData,
    phoneNotProvidedText: string
  ): Promise<void> {
    const params: EmailJSParams = {
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone || phoneNotProvidedText,
      service_type: formData.service,
      message: formData.message,
    };

    await emailjs.send(
      EMAILJS_CONFIG.SERVICE_ID,
      EMAILJS_CONFIG.TEMPLATE_ID,
      params,
      EMAILJS_CONFIG.PUBLIC_KEY
    );
  }
}

