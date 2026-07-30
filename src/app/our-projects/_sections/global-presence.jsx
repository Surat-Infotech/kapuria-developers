"use client";

import useEmblaCarousel from "embla-carousel-react";

import Image from "next/image";

import CarouselNav from "@/components/ui/carousel-nav";
import Section from "@/components/ui/section";
import SectionHeader from "@/components/ui/section-header";

import abuDhabi from "@/assets/images/our-projects/abu-dhabi.webp";
import athens from "@/assets/images/our-projects/athens.webp";
import dubai from "@/assets/images/our-projects/dubai.webp";
import globalPresenceBgMobile from "@/assets/images/our-projects/global-presence-bg.-mobile.webp";
import globalPresenceBg from "@/assets/images/our-projects/global-presence-bg.webp";
import mohali from "@/assets/images/our-projects/mohali.webp";

const EYEBROW = "Our Reach";

const DESCRIPTION =
  "Bringing thoughtful design, lasting quality, and timeless craftsmanship to every location we build in.";

const LOCATIONS = [
  {
    id: "athens",
    city: "Athens",
    country: "Greece",
    photo: athens,
    tagline: "Inspired by timeless architecture and elegant living.",
  },
  {
    id: "mohali",
    city: "Mohali",
    country: "India",
    photo: mohali,
    tagline: "Built on craftsmanship and enduring value.",
  },
  {
    id: "abu-dhabi",
    city: "Abu Dhabi",
    country: "UAE",
    photo: abuDhabi,
    tagline:
      "Built with structural integrity, meticulous craftsmanship & lasting value.",
  },
  {
    id: "dubai",
    city: "Dubai",
    country: "UAE",
    photo: dubai,
    // The design stops at Abu Dhabi, so this line is a placeholder — swap it
    // for the real copy when it lands.
    tagline: "Designed for modern luxury and enduring value.",
  },
];

function LocationCard({ location }) {
  return (
    <article className="relative min-w-0 shrink-0 grow-0 basis-250 overflow-hidden rounded-xl border border-white/12 md:basis-429">
      <Image
        src={location.photo}
        alt={`${location.city}, ${location.country}`}
        className="aspect-250/415 w-full object-cover lg:aspect-428/689"
      />

      {/* The photography carries no gradient of its own, so the labels at both
          ends of the card need their own footing. */}
      <div
        aria-hidden
        className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,27,46,0.85)_0%,rgba(0,27,46,0)_30%,rgba(0,27,46,0)_55%,rgba(0,27,46,0.95)_100%)]"
      />

      <div className="absolute inset-0 flex flex-col justify-between p-16 md:p-24 lg:p-36">
        <div>
          <h3 className="text-[16px]/[24px] font-bold text-white uppercase md:text-[20px]/[28px] lg:text-[24px]/[34px]">
            {location.city}
          </h3>
          <p className="font-playfair text-[18px]/[24px] text-white/80 italic md:text-[20px]/[28px] lg:text-[24px]/[34px]">
            {location.country}
          </p>
        </div>

        <p className="text-[12px]/[18px] font-medium text-white sm:text-[16px]/[24px] md:text-[18px]/[30px]">
          {location.tagline}
        </p>
      </div>
    </article>
  );
}

export default function GlobalPresenceSection() {
  // `align: start` keeps the first card flush with the section gutter, and the
  // basis below leaves the next card peeking in — as in the design.
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    containScroll: "trimSnaps",
  });

  return (
    <Section
      bg="dark"
      spacing="none"
      className="bg-(image:--bg-mobile) bg-cover bg-center bg-no-repeat py-32 md:py-60 lg:bg-(image:--bg-desktop) lg:py-128"
      style={{
        "--bg-mobile": `url(${globalPresenceBgMobile.src})`,
        "--bg-desktop": `url(${globalPresenceBg.src})`,
      }}
    >
      <p className="text-eyebrow text-gold-300 uppercase">{EYEBROW}</p>

      <SectionHeader
        className="mt-8 mb-24 md:mb-40 lg:mb-64"
        heading={
          <>
            Our{" "}
            <span className="font-playfair text-gold-300 italic">
              Global Presence
            </span>
          </>
        }
        classNames={{
          heading:
            "text-[32px]/[40px] font-medium text-white min-[426px]:text-[40px]/[48px] md:text-[48px]/[56px] lg:text-display",
          rule: "mt-8 lg:mt-16",
          description:
            "mt-8 text-[12px]/[18px] font-normal text-white/60 sm:text-[16px]/[24px] lg:mt-16",
        }}
        description={DESCRIPTION}
      />

      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex gap-16 lg:gap-24">
          {LOCATIONS.map((location) => (
            <LocationCard key={location.id} location={location} />
          ))}
        </div>
      </div>

      <CarouselNav
        api={emblaApi}
        variant="light"
        className="mt-24 justify-end lg:mt-64"
      />
    </Section>
  );
}
