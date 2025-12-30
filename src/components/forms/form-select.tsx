import { ReactNode } from "react";

/**
 * Form Select Component
 * 
 * Reusable select field component that handles label, select, and error display.
 * Follows Single Responsibility Principle by focusing only on select field rendering.
 */

export interface FormSelectProps {
  id: string;
  label: string;
  options: Array<{ value: string; label: string }>;
  error?: string;
  register: any; // react-hook-form register function
  placeholder?: string;
  required?: boolean;
}

export function FormSelect({
  id,
  label,
  options,
  error,
  register,
  placeholder,
  required = false,
}: FormSelectProps) {
  return (
    <div className="space-y-2">
      <label htmlFor={id} className="text-sm font-medium">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <select
        id={id}
        {...register(id)}
        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {placeholder && <option value="">{placeholder}</option>}
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
}

