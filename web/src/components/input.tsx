import { InputHTMLAttributes, forwardRef } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  onChange: () => void;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ onChange, ...props }, ref) => (
    <input
      ref={ref}
      className="h-10 w-full rounded-md border border-gray-300 p-2"
      onChange={onChange}
      {...props}
    />
  ),
);
