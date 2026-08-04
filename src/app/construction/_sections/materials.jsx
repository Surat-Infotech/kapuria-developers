"use client";

import useEmblaCarousel from "embla-carousel-react";

import Image from "next/image";

import CarouselNav from "@/components/ui/carousel-nav";
import Section from "@/components/ui/section";

import material1 from "@/assets/images/construction/material-1.webp";
import material2 from "@/assets/images/construction/material-2.webp";
import material3 from "@/assets/images/construction/material-3.webp";
import material4 from "@/assets/images/construction/material-4.webp";
import material5 from "@/assets/images/construction/material-5.webp";
import material6 from "@/assets/images/construction/material-6.webp";

const DESCRIPTION =
  "We select every material on performance and durability - never on cost alone.";

const CLOSING =
  "The best materials are placed where they matter most, so there is never anything to cover up later.";

// `description` takes a node rather than a string so a card can emphasise the
// grade or brand name inside its own sentence.
const MATERIALS = [
  {
    image: material1,
    title: "Premium Bricks",
    description: (
      <>
        Cemented high-density <strong className="font-bold">Fly Ash</strong>-M15
        bricks that provide durability, fire resistance, low water absorption,
        superior thermal insulation compared to traditional clay bricks and
        long-lasting structural strength.
      </>
    ),
  },
  {
    image: material2,
    title: "High-Grade Iron Bars",
    description:
      "TMT (Thermo-Mechanically Treated) iron bars are corrosion-resistant, high-tensile steel for enhanced structural strength, earthquake resistance, and long-term durability.",
  },
  {
    image: material3,
    title: "Advanced Cement",
    description:
      "Engineered blocks that deliver thermal insulation, sound control, and energy efficiency - cooler, quieter design.",
  },
  {
    image: material4,
    title: "Moisture-Resistant Boards",
    description:
      "Green-core boards used for ceilings, partitions, and service shafts - dimensionally stable, resistant to damp and warping, and finished flat enough to hold paint without hairline cracks.",
  },
  {
    image: material5,
    title: "Polymer Tile Adhesive",
    description:
      "Polymer-modified adhesive laid in place of site-mixed mortar, giving every tile full bed contact, far stronger bond strength, and floors and walls that stay put without hollow spots.",
  },
  {
    image: material6,
    title: "uPVC Windows",
    description:
      "Multi-chambered uPVC frames with sealed glazing and steel reinforcement - quieter rooms, no rust or repainting, and joinery that keeps dust and monsoon water outside where it belongs.",
  },
];

export default function MaterialsSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    containScroll: "trimSnaps",
  });

  return (
    <Section bg="none" spacing="none" className="bg-[#0A1C2B] py-32 md:py-64">
      <div className="max-w-880">
        <h2 className="text-[32px]/[40px] font-medium text-white sm:text-[40px]/[48px] md:text-[46px]/[58px] lg:text-[64px]/[72px]">
          The materials we{" "}
          <span className="text-gold-300 font-playfair italic">
            build with.
          </span>
        </h2>

        <hr className="text-gold-300 my-8 w-34 lg:my-16" />

        <p className="text-[12px]/[18px] font-medium text-white/60 lg:text-[16px]/[24px]">
          {DESCRIPTION}
        </p>
      </div>

      <div ref={emblaRef} className="mt-24 overflow-hidden md:mt-36 lg:mt-48">
        <div className="flex items-stretch gap-16 sm:gap-24">
          {MATERIALS.map(({ image, title, description }) => (
            <article
              key={title}
              className="relative min-w-0 shrink-0 grow-0 basis-251 overflow-hidden rounded-[14px] border border-[rgba(235,195,127,0.25)] bg-[#0F2436] sm:basis-477"
            >
              <Image
                src={image}
                alt={title}
                width={477}
                height={687}
                className="aspect-251/355 w-full object-cover sm:aspect-477/687"
              />

              {/* The copy sits on the artwork, so the image is darkened from the
                  bottom up rather than the card being split into two halves. */}
              <div
                aria-hidden
                className="absolute inset-0 bg-linear-to-t from-[#04121B] from-5% via-[#04121B]/70 via-40% to-transparent to-80%"
              />

              <div className="absolute inset-x-0 bottom-0 p-16 sm:p-24 lg:p-36">
                <h3 className="text-[16px]/[22px] font-bold text-white md:text-[20px]/[28px] lg:text-[24px]/[34px]">
                  {title}
                </h3>

                <p className="mt-8 text-[11px]/[18px] font-medium text-white/80 sm:text-[16px]/[28px] lg:mt-16">
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
        className="mt-24 justify-end lg:mt-40"
        prevLabel="Previous material"
        nextLabel="Next material"
      />

      <p className="mt-24 text-[12px]/[18px] font-medium text-white sm:text-[16px]/[24px] lg:hidden">
        {CLOSING}
      </p>
    </Section>
  );
}
