/**
 * EmailJS Configuration
 * 
 * For static sites (like Hostinger), these values are baked into the build.
 * 
 * Option 1: Use environment variables (recommended for flexibility)
 * - Create .env.local file with NEXT_PUBLIC_ prefixed variables
 * - Values will be replaced at build time
 * 
 * Option 2: Hardcode values (current setup - works fine)
 * - EmailJS Public Key is safe to expose (it's meant to be public)
 * - Service ID and Template ID are also safe in client-side code
 * 
 * Note: For static exports, environment variables must be prefixed with NEXT_PUBLIC_
 * to be included in the client bundle.
 */

export const EMAILJS_CONFIG = {
  SERVICE_ID: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_yf7pdez",
  TEMPLATE_ID: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "template_5pqvlwc",
  PUBLIC_KEY: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "kbwlY4Oxr7UscFPR3",
} as const;

