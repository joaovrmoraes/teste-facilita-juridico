import { ReactNode, ButtonHTMLAttributes, forwardRef } from "react";

const variantColorMap = {
  default: "bg-blue-500 hover:bg-blue-400",
  success: "bg-green-500 hover:bg-green-400",
  danger: "bg-red-500 hover:bg-red-400",
};

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "success" | "danger";
  children: ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "default", children, ...props }, ref) => {
    const colorClass = variantColorMap[variant];

    return (
      <button
        ref={ref}
        className={`rounded-md p-2 text-sm font-semibold text-white ${colorClass} focus:outline-none`}
        {...props}
      >
        {children}
      </button>
    );
  },
);
