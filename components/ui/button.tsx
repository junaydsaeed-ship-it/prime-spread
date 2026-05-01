"use client"

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer",
  {
    variants: {
      variant: {
        default:
          "bg-[#FFB162] text-[#1B2632] hover:bg-[#A35139] hover:text-white shadow-sm",
        dark:
          "bg-[#1B2632] text-[#EEE9DF] hover:bg-[#2C3B4D]",
        outline:
          "border-2 border-[#1B2632] text-[#1B2632] bg-transparent hover:bg-[#1B2632] hover:text-[#EEE9DF]",
        outlineLight:
          "border-2 border-[#EEE9DF] text-[#EEE9DF] bg-transparent hover:bg-[#EEE9DF] hover:text-[#1B2632]",
        ghost: "bg-transparent text-[#1B2632] hover:bg-[#C9C1B1]/30",
      },
      size: {
        default: "h-11 px-6 py-2",
        sm: "h-9 px-4 text-xs",
        lg: "h-13 px-8 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
