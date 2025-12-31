import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FieldPath, UseFormRegister, FieldValues } from "react-hook-form";

/**
 * Form Field Component
 * 
 * Reusable form field component that handles label, input, and error display.
 * Follows Single Responsibility Principle by focusing only on form field rendering.
 */

export interface FormFieldProps<TFieldValues extends FieldValues = FieldValues> {
  id: string;
  label: string;
  type?: "text" | "email" | "tel" | "textarea";
  rows?: number;
  error?: string;
  register: UseFormRegister<TFieldValues>;
  required?: boolean;
}

export function FormField<TFieldValues extends FieldValues = FieldValues>({
  id,
  label,
  type = "text",
  rows,
  error,
  register,
  required = false,
}: FormFieldProps<TFieldValues>) {
  return (
    <div className="space-y-2">
      <label htmlFor={id} className="text-sm font-medium">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      {type === "textarea" ? (
        <Textarea id={id} rows={rows || 4} {...register(id as FieldPath<TFieldValues>)} />
      ) : (
        <Input id={id} type={type} {...register(id as FieldPath<TFieldValues>)} />
      )}
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
}

