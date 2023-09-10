import { ButtonHTMLAttributes, HTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "normal" | "transparent";
}

export default function Button({
  variant = "normal",
  className,
  children,
  disabled,
  ...props
}: ButtonProps) {
  return (
    <button
      disabled={disabled}
      className={`rounded-full p-4 ${
        variant === "transparent"
          ? "text-gg-primary"
          : "text-white bg-gg-primary"
      } ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
