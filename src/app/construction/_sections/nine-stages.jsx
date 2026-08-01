"use client";

import useEmblaCarousel from "embla-carousel-react";

import Image from "next/image";

import CarouselNav from "@/components/ui/carousel-nav";
import Section from "@/components/ui/section";

import stage1 from "@/assets/images/construction/stages-construction-1.webp";
import stage2 from "@/assets/images/construction/stages-construction-2.webp";
import stage3 from "@/assets/images/construction/stages-construction-3.webp";
import stage4 from "@/assets/images/construction/stages-construction-4.webp";
import stage5 from "@/assets/images/construction/stages-construction-5.webp";
import stage6 from "@/assets/images/construction/stages-construction-6.webp";
import stage7 from "@/assets/images/construction/stages-construction-7.webp";
import stage8 from "@/assets/images/construction/stages-construction-8.webp";
import stage9 from "@/assets/images/construction/stages-construction-9.webp";

const KICKER = "THE PROCESS";

const DESCRIPTION =
  "Each building moves through the same disciplined sequence. At every stage, work is checked, recorded, and approved before we continue.";

// Order is the build order — the card number is the array index, so reordering
// this list renumbers the carousel on its own.
const STAGES = [
  {
    image: stage1,
    title: "Site and soil",
    description:
      "Soil testing and load study, site levelling, drainage planning, anti-termite treatment, and proper base compaction — the groundwork on which the entire home depends.",
  },
  {
    image: stage2,
    title: "Foundation and footing",
    description:
      "Footings sized and reinforced to specification, cover blocks correctly placed to protect the steel, and verified-grade concrete poured continuously and fully compacted — then cured completely and checked for cracks before any load is added.",
  },
  {
    image: stage3,
    title: "Structural frame",
    description:
      "Columns, beams, and slabs built with reinforcement placed and tied exactly as designed. Concrete tested for consistency through a slump test before casting, vibrated properly, and cured fully. The skeleton is engineered to carry every load it will ever face.",
  },
  {
    image: stage4,
    title: "Walls and plaster",
    description:
      "Blockwork laid true to line and level with joints filled solid, then plaster applied in controlled coats over a properly prepared surface — straight walls that hold paint, tile, and fittings without cracking.",
  },
  {
    image: stage5,
    title: "Plumbing and drainage",
    description:
      "Concealed lines laid along a planned route and pressure-tested before anything covers them, with correct slopes, traps, and vents throughout. Tanks, pumps, and drainage are sized for real daily use, not the minimum.",
  },
  {
    image: stage6,
    title: "Electrical works",
    description:
      "Conduits, wiring, and earthing installed to a drawn layout with load-rated cable, dedicated circuits, and protection at every board — then continuity and insulation tested before a single fitting goes on.",
  },
  {
    image: stage7,
    title: "Roofing and rainwater",
    description:
      "Roof slopes, gutters, and downpipes set out so water leaves the building quickly and predictably, with rainwater carried to storage or recharge rather than left to stand against the structure.",
  },
  {
    image: stage8,
    title: "Waterproofing",
    description:
      "Terraces, bathrooms, sunken slabs, and external walls treated with the system suited to each surface — and every one of them ponding-tested before any finish is laid over the top.",
  },
  {
    image: stage9,
    title: "Checks and handover",
    description:
      "A 115-point quality check across the finished home, snags closed before they ever reach you, documents and warranties compiled, and the keys handed over only once every item on the list is signed off.",
  },
];

export default function NineStagesSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    containScroll: "trimSnaps",
  });

  return (
    <Section bg="none" spacing="none" className="bg-[#0A1C2B] py-32 md:py-64">
      <div className="max-w-880">
        <p className="text-[12px]/[18px] font-medium tracking-[2.4px] text-[#EBC37F] sm:text-[14px]/[22px] sm:tracking-[2.52px]">
          {KICKER}
        </p>

        <h2 className="mt-8 text-[32px]/[40px] font-medium text-white sm:text-[40px]/[48px] md:text-[46px]/[58px] lg:text-[64px]/[72px]">
          The{" "}
          <span className="text-gold-300 font-playfair italic">9 stages</span>{" "}
          of construction.
        </h2>

        <hr className="text-gold-300 my-8 w-34 lg:my-16" />

        <p className="text-[12px]/[18px] font-medium text-white/60 lg:text-[16px]/[24px]">
          {DESCRIPTION}
        </p>
      </div>

      <div ref={emblaRef} className="mt-24 overflow-hidden md:mt-36 lg:mt-64">
        <div className="flex items-stretch gap-16 sm:gap-20">
          {STAGES.map(({ image, title, description }, index) => (
            <article
              key={title}
              className="min-w-0 shrink-0 grow-0 basis-250 overflow-hidden rounded-[14px] border border-[rgba(235,195,127,0.25)] bg-[#0F2436] sm:basis-427"
            >
              <Image
                src={image}
                alt={title}
                width={427}
                height={389}
                className="aspect-427/389 w-full object-cover"
              />

              <div className="p-16 pt-8 lg:p-36 lg:pt-16">
                <p
                  aria-hidden
                  className="text-gold-300 font-playfair -mt-10 text-[150px]/[135px] italic"
                >
                  {String(index + 1).padStart(2, "0")}
                </p>

                <h3 className="mt-8 text-[16px]/[22px] font-bold text-white md:text-[20px]/[28px] lg:mt-16 lg:text-[24px]/[34px]">
                  {title}
                </h3>

                <p className="mt-8 text-[10px]/[13px] font-medium text-[#A5AEB4] lg:mt-16 lg:text-[16px]/[28px]">
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
        className="mt-32 justify-end lg:mt-53"
        prevLabel="Previous stage"
        nextLabel="Next stage"
      />
    </Section>
  );
}
