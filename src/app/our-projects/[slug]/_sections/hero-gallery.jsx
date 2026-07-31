"use client";

import useEmblaCarousel from "embla-carousel-react";

import Image from "next/image";

import CarouselNav from "@/components/ui/carousel-nav";
import Section from "@/components/ui/section";

// The renders are art, not photography, and the design labels them as such.
const DISCLAIMER = "Computer Generated";

// Full-bleed banner. It sits under the fixed header, which is why the badge and
// the arrows are pinned to the bottom edge rather than the top.
export default function HeroGallerySection({ project, images }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  return (
    <div className="relative">
      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex">
          {images.map((photo, index) => (
            <Image
              key={index}
              src={photo}
              alt={`${project.name} — view ${index + 1}`}
              priority={index === 0}
              sizes="100vw"
              className="aspect-375/393 h-screen w-full min-w-0 shrink-0 grow-0 basis-full object-cover lg:w-full"
            />
          ))}
        </div>
      </div>

      {/* Aligned to the page container, not the viewport, so the badge sits on
          the same gutter as the copy below it. */}
      <Section
        bg="transparent"
        spacing="none"
        className="pointer-events-none absolute inset-x-0 bottom-16 min-[700px]:bottom-32 lg:bottom-40"
      >
        <div className="flex items-center justify-between gap-16">
          <span className="rounded-full bg-[rgba(255,255,255,0.20)] px-12 py-4 text-[12px]/[18px] font-medium text-white/90 backdrop-blur-[6px] backdrop-filter lg:text-[14px]/[22px]">
            {DISCLAIMER}
          </span>

          {/* One render is still a valid gallery — hide the controls rather
              than show a pair that can't do anything. */}
          {images.length > 1 ? (
            <CarouselNav
              api={emblaApi}
              variant="light"
              className="pointer-events-auto gap-0"
              iconClassName="size-24 lg:size-54"
            />
          ) : null}
        </div>
      </Section>
    </div>
  );
}
