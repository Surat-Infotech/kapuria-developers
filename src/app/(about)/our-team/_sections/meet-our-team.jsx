"use client";

import useEmblaCarousel from "embla-carousel-react";
import { rules } from "eslint-config-prettier";

import Image from "next/image";

import CarouselNav from "@/components/ui/carousel-nav";
import Section from "@/components/ui/section";
import SectionHeader from "@/components/ui/section-header";

import Amaan from "@/assets/images/team/amaan.webp";
import ErPradip from "@/assets/images/team/er-pradip.webp";
import NiteshSingh from "@/assets/images/team/nitish-singh.webp";
import SomeshKapuria from "@/assets/images/team/somesh.webp";

const DESCRIPTION =
  "Meet the talented team behind everything we do here at Kapuria Developers.";

const MEMBERS = [
  { name: "Somesh Kapuria", role: "Managing Director", photo: SomeshKapuria },
  { name: "Nitesh Singh", role: "Director", photo: NiteshSingh },
  { name: "Er Pradip", role: "Site Engineer", photo: ErPradip },
  { name: "Amaan", role: "Manager", photo: Amaan },
];

export default function MeetOurTeamSection() {
  // `align: start` keeps the first card flush with the section gutter, and the
  // fractional basis below leaves the next card peeking in — as in the design.
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    containScroll: "trimSnaps",
  });

  // Off-rhythm spacing on purpose — `cn` merges this over the `lg` preset.
  return (
    <Section className="py-32 lg:py-64">
      <SectionHeader
        className="mb-24 lg:mb-64"
        heading={
          <>
            Meet our{" "}
            <span className="text-gold-400 font-serif italic">team</span>
          </>
        }
        classNames={{
          heading:
            "text-[32px]/[40px] font-medium sm:text-[40px]/[48px] md:text-[52px]/[60px] lg:text-[64px]/[72px]",
          rule: "mt-8 sm:mt-16",
          description:
            "mt-8 text-[12px]/[18px] text-[rgba(8,34,53,0.60)] font-medium sm:mt-16 sm:text-[16px]/[24px]",
        }}
        description={DESCRIPTION}
      />

      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex gap-16 sm:gap-20">
          {MEMBERS.map(({ name, role, photo }) => (
            <article
              key={name}
              className="bg-navy-800 relative min-w-0 shrink-0 grow-0 basis-250 overflow-hidden rounded-[9px] sm:basis-428 sm:rounded-[20px]"
            >
              <Image
                src={photo}
                alt={`${name}, ${role}`}
                className="h-full w-full object-cover"
              />

              {/* Names sit over the foot of the portrait; the navy backdrop is
                  baked into the artwork, so no gradient overlay is needed. */}
              <div className="absolute inset-x-0 bottom-0 p-16 sm:p-24 md:p-36">
                <h3 className="md:text-h3 text-[18px]/[20px] font-bold text-white uppercase">
                  {name}
                </h3>
                <p className="text-gold-300 md:text-h3-accent font-serif text-[16px]/[24px] italic">
                  {role}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>

      <CarouselNav api={emblaApi} className="mt-32 justify-end" />
    </Section>
  );
}
