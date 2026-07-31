import { cva } from "class-variance-authority";

import { Slot } from "@radix-ui/react-slot";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "group/button relative isolate inline-flex shrink-0 cursor-pointer items-center justify-center overflow-hidden rounded-full whitespace-nowrap uppercase no-underline transition-[transform,filter,background-color,box-shadow] duration-250 ease-out outline-none select-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background hover:-translate-y-px active:translate-y-0 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-55 disabled:transform-none aria-disabled:pointer-events-none aria-disabled:cursor-not-allowed aria-disabled:opacity-55 aria-disabled:transform-none",
  {
    variants: {
      variant: {
        primary: "bg-navy-800 text-primary-foreground hover:bg-navy-900",
        secondary: "bg-gold-300 text-navy-800 hover:bg-gold-400",
        outline:
          "border border-gold-400 bg-transparent text-navy-800 hover:bg-gold-400/10",
        ghost: "bg-transparent text-navy-800 hover:bg-navy-800/5",
      },
      size: {
        sm: "gap-12 px-16 py-8 text-body font-medium tracking-[3px]",
        default:
          "gap-16 sm:px-24 sm:py-16 py-8 px-16 font-medium text-[16px]/[30px] tracking-[3.04px] sm:text-btn sm:tracking-[3.42px]",
      },
      width: {
        auto: "",
        full: "w-full",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
      width: "auto",
    },
  }
);

const Button = ({
  className,
  variant,
  size,
  width,
  asChild = false,
  ...props
}) => {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, width }), className)}
      {...props}
    />
  );
};

export { Button, buttonVariants };
