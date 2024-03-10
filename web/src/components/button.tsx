import { ReactNode, ButtonHTMLAttributes } from "react";

const variantColorMap = {
  default: "bg-blue-500 hover:bg-blue-400",
  success: "bg-green-500 hover:bg-green-400",
  danger: "bg-red-500 hover:bg-red-400",
};

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "success" | "danger";
  children: ReactNode;
}

export function Button({
  variant = "default",
  children,
  ...props
}: ButtonProps) {
  const colorClass = variantColorMap[variant];

  return (
    <button
      className={`rounded-md p-2 text-sm font-semibold text-white ${colorClass}`}
      {...props}
    >
      {children}
    </button>
  );
}