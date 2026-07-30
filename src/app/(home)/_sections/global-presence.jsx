"use client";

import useEmblaCarousel from "embla-carousel-react";

import Image from "next/image";

import CarouselNav from "@/components/ui/carousel-nav";
import Section from "@/components/ui/section";

import abuDhabi from "@/assets/images/home/abu-dhabi.webp";
import athens from "@/assets/images/home/athens.webp";
import dubai from "@/assets/images/home/dubai.webp";
import india from "@/assets/images/home/india.webp";

const LOCATIONS = [
  {
    image: athens,
    city: "Athens",
    country: "Greece",
    description: "Inspired by timeless architecture and elegant living.",
  },
  {
    image: india,
    city: "Mohali",
    country: "India",
    description: "Built on craftsmanship and enduring value.",
  },
  {
    image: dubai,
    city: "Dubai",
    country: "UAE",
    description: "Driven by innovation, precision, and modern luxury.",
  },
  {
    image: abuDhabi,
    city: "Abu Dhabi",
    country: "UAE",
    description:
      "Built with structural integrity, meticulous craftsmanship & lasting value.",
  },
];

export default function GlobalPresence() {
  // `align: start` keeps the first card flush with the section gutter, and
  // `trimSnaps` stops the rail overscrolling past the last card.
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    containScroll: "trimSnaps",
  });

  return (
    <Section bg="dark" className="py-64 lg:py-120">
      <div className="flex flex-col items-start gap-16">
        <p className="text-eyebrow text-gold-300 font-medium uppercase">
          Our Reach
        </p>

        <h2 className="lg:text-display text-[32px]/[40px] font-medium text-white sm:text-[48px]/[56px]">
          Our{" "}
          <span className="font-playfair text-gold-300 italic">
            Global Presence
          </span>
        </h2>

        <hr className="text-gold-300 w-34" />

        <p className="md:text-body sm:text-body-sm text-[12px]/[18px] font-medium text-white/60">
          Bringing thoughtful design, lasting quality, and timeless
          craftsmanship to every location we build in.
        </p>
      </div>

      {/* Horizontal rail — the next card peeks in past the gutter, as designed. */}
      <div ref={emblaRef} className="mt-64 overflow-hidden">
        <div className="flex gap-24">
          {LOCATIONS.map(({ image, city, country, description }) => (
            <article
              key={city}
              tabIndex={0}
              className="group focus-visible:ring-gold-300 relative h-500 w-280 shrink-0 overflow-hidden rounded-[18px] focus-visible:ring-2 focus-visible:outline-none sm:h-600 sm:w-360 lg:h-689 lg:w-429"
            >
              <Image
                src={image}
                alt={`${city}, ${country}`}
                width={429}
                height={689}
                className="absolute inset-0 size-full object-cover"
              />

              {/* Resting scrim — navy rising from the bottom so the copy stays
                legible over the photo. Figma: #082235 0% → 100%, layer at 50%. */}
              <div
                aria-hidden
                className="absolute inset-0 bg-[linear-gradient(0deg,var(--navy-800)_0%,rgba(8,34,53,0)_100%)] opacity-50"
              />

              {/* Hover layer — slides up from the bottom, then retreats. There
                  is no hover on touch, so below `lg` it just stays put. */}
              <div
                aria-hidden
                className="absolute inset-0 transition-transform duration-500 ease-out [background:linear-gradient(0deg,rgba(8,34,53,0)_48.84%,rgba(8,34,53,0.5)_100%),linear-gradient(180deg,rgba(8,34,53,0)_51.16%,#001B2E_100%)] motion-reduce:transition-none lg:translate-y-full lg:group-hover:translate-y-0 lg:group-focus-visible:translate-y-0"
              />

              <div className="relative flex h-full flex-col justify-between p-24 lg:p-36">
                <div className="flex flex-col gap-3">
                  <h3 className="text-h3 font-bold text-white uppercase">
                    {city}
                  </h3>
                  <p className="font-playfair text-[24px]/[34px] text-white/60 italic lg:text-[26px]/[34px]">
                    {country}
                  </p>
                </div>

                {/* Rides in with the overlay on desktop; always visible on
                    touch, where there is nothing to trigger the reveal. */}
                <p className="lg:text-body-lg text-[14px]/[24px] font-medium text-white transition-[transform,opacity] duration-500 ease-out motion-reduce:transition-none lg:translate-y-16 lg:opacity-0 lg:group-hover:translate-y-0 lg:group-hover:opacity-100 lg:group-focus-visible:translate-y-0 lg:group-focus-visible:opacity-100">
                  {description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>

      <CarouselNav
        api={emblaApi}
        variant="light"
        className="mt-40 justify-end"
        prevLabel="Previous locations"
        nextLabel="Next locations"
      />
    </Section>
  );
}
