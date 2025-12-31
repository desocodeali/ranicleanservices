import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { UseFormRegisterReturn } from "react-hook-form";

/**
 * Form Field Component
 * 
 * Reusable form field component that handles label, input, and error display.
 * Follows Single Responsibility Principle by focusing only on form field rendering.
 */

export interface FormFieldProps {
  id: string;
  label: string;
  type?: "text" | "email" | "tel" | "textarea";
  rows?: number;
  error?: string;
  register: (name: string) => UseFormRegisterReturn;
  required?: boolean;
}

export function FormField({
  id,
  label,
  type = "text",
  rows,
  error,
  register,
  required = false,
}: FormFieldProps) {
  return (
    <div className="space-y-2">
      <label htmlFor={id} className="text-sm font-medium">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      {type === "textarea" ? (
        <Textarea id={id} rows={rows || 4} {...register(id)} />
      ) : (
        <Input id={id} type={type} {...register(id)} />
      )}
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
}

