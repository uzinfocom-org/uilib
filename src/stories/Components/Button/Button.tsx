import cn from "@/utils/cn";
import { VariantProps, cva } from "cva";
import React from "react";

export const buttonVariants = cva(
  "transition-all rounded-lg font-semibold outline-none focus:outline-none",
  {
    variants: {
      variant: {
        primary: [
          "bg-brand-600 border-2 border-brand-600 text-white",
          "hover:bg-brand-700 hover:border-brand-700",
          "focus:shadow-button-focus focus:shadow-brand-600/50",
          "disabled:bg-gray-100 disabled:text-gray-400 disabled:border-gray-200",
        ],
        "secondary-gray": [
          "text-gray-700 border-2 border-gray-300",
          "hover:bg-gray-50 hover:text-gray-800",
          "focus:shadow-button-focus focus:shadow-gray-100",
          "disabled:text-gray-400 disabled:border-gray-200 disabled:bg-white",
        ],
        "secondary-color": [
          "text-brand-700 border-2 border-brand-300",
          "hover:bg-brand-50 hover:text-brand-800",
          "focus:shadow-button-focus focus:shadow-brand-200",
          "disabled:bg-white disabled:text-gray-400 disabled:border-gray-200",
        ],
        "teritary-gray": [
          "text-gray-600",
          "hover:bg-gray-50 hover:text-gray-700",
          "focus:bg-gray-50",
          "disabled:text-gray-400 disabled:hover:bg-white",
        ],
        "teritary-color": [
          "text-brand-700",
          "hover:bg-brand-50 hover:text-brand-800",
          "focus:bg-brand-50",
          "disabled:text-gray-400 disabled:hover:bg-white",
        ],
        "link-gray": [
          "text-gray-600",
          "hover:text-gray-700",
          "disabled:text-gray-400",
        ],
        "link-color": [
          "text-brand-700",
          "hover:text-brand-800",
          "disabled:text-gray-400",
        ],
      },
      size: {
        sm: "py-2 px-3 text-sm",
        md: "py-2.5 px-3.5 text-sm",
        lg: "py-3 px-4 text-md",
        xl: "py-3.5 px-4.5 text-md",
        "2xl": "py-4 px-5.5 text-lg",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

type ButtonVariants = VariantProps<typeof buttonVariants>;
type StoryVariants = {
  [K in NonNullable<keyof ButtonVariants>]: NonNullable<ButtonVariants[K]>[];
};

export const storyButtonVariants: StoryVariants = {
  variant: [
    "primary",
    "secondary-gray",
    "secondary-color",
    "teritary-gray",
    "teritary-color",
    "link-gray",
    "link-color",
  ],
  size: ["sm", "md", "lg", "xl", "2xl"],
};

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    ButtonVariants {}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  className,
  ...restProps
}) => {
  return (
    <button
      className={cn(buttonVariants({ variant, size }), className)}
      {...restProps}
    >
      {children}
    </button>
  );
};

Button.displayName = "Button";

export default Button;