"use client";

import { useCallback, useEffect, useState } from "react";

import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

import ChevronRightIcon from "@/assets/svgs/common/chevron-right";

const carouselNavButtonVariants = cva(
  "cursor-pointer transition-colors duration-250 ease-out outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed",
  {
    variants: {
      variant: {
        // Default — dark arrows on a light section.
        default: "text-navy-800 disabled:text-neutral-300",
        // For sections sitting on a navy/dark background.
        light: "text-white disabled:text-white/30",
        // Gold accent arrows.
        gold: "text-gold-400 hover:text-gold-500 disabled:text-gold-400/30",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

// Arrow size lives on the svg itself (not as a `[&_svg]:` rule on the button) so
// `iconClassName` can still override it through tailwind-merge.
const iconSizes = {
  default: "size-54",
  sm: "size-54",
};

// Shared prev/next control for every Embla carousel on the site. Pass it the
// `emblaApi` returned by `useEmblaCarousel` and it wires itself up — the arrows
// grey out on their own once there is nothing left to scroll in that direction.
// Per-page looks go through `variant`; `buttonClassName` / `iconClassName` are
// the escape hatch for one-off tweaks that don't deserve a variant.
const CarouselNav = ({
  api,
  className = "",
  variant,
  size,
  buttonClassName = "",
  iconClassName = "",
  prevLabel = "Previous slide",
  nextLabel = "Next slide",
}) => {
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const syncState = useCallback((embla) => {
    setCanScrollPrev(embla.canScrollPrev());
    setCanScrollNext(embla.canScrollNext());
  }, []);

  useEffect(() => {
    if (!api) return;

    syncState(api);
    api.on("select", syncState).on("reInit", syncState);

    return () => {
      api.off("select", syncState).off("reInit", syncState);
    };
  }, [api, syncState]);

  const buttonStyles = cn(
    carouselNavButtonVariants({ variant }),
    buttonClassName
  );
  const iconStyles = cn(iconSizes[size] ?? iconSizes.default, iconClassName);

  return (
    <div className={cn("flex items-center", className)}>
      <button
        type="button"
        data-slot="carousel-nav-prev"
        aria-label={prevLabel}
        disabled={!canScrollPrev}
        onClick={() => api?.scrollPrev()}
        className={buttonStyles}
      >
        <ChevronRightIcon className={cn(iconStyles, "rotate-180")} />
      </button>

      <button
        type="button"
        data-slot="carousel-nav-next"
        aria-label={nextLabel}
        disabled={!canScrollNext}
        onClick={() => api?.scrollNext()}
        className={buttonStyles}
      >
        <ChevronRightIcon className={iconStyles} />
      </button>
    </div>
  );
};

export default CarouselNav;
export { carouselNavButtonVariants };
