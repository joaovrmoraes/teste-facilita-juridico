import { ReactNode } from "react";

const variantColorMap = {
  default: "bg-blue-500 hover:bg-blue-400",
  success: "bg-green-500 hover:bg-green-400",
  danger: "bg-red-500 hover:bg-red-400",
};

export function Button({
  variant = "default",
  children,
}: {
  variant?: "default" | "success" | "danger";
  children: ReactNode;
}) {
  const colorClass = variantColorMap[variant];

  return (
    <button
      className={`rounded-md p-2 text-sm font-semibold text-white ${colorClass}`}
    >
      {children}
    </button>
  );
}
