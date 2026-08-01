"use client";

import useEmblaCarousel from "embla-carousel-react";

import Image from "next/image";

import CarouselNav from "@/components/ui/carousel-nav";
import Section from "@/components/ui/section";

import advancedCement from "@/assets/images/home/advanced-cement.webp";
import aluminiumWindows from "@/assets/images/home/aluminium-windows.webp";
import highGradeIronBars from "@/assets/images/home/high-grade-iron-bars.webp";
import premiumBricks from "@/assets/images/home/premium-bricks.webp";
import strongAdhesive from "@/assets/images/home/strong-adhesive.webp";
import superiorWood from "@/assets/images/home/superior-wood.webp";

// `emphasis` marks the phrase Figma sets in bold inside the description.
const MATERIALS = [
  {
    image: premiumBricks,
    title: "Premium Bricks",
    description: [
      "Cemented high-density ",
      { emphasis: "Fly Ash" },
      "-M15 bricks that provide durability, fire resistance, low water absorption, superior thermal insulation compared to traditional clay bricks and long-lasting structural strength.",
    ],
  },
  {
    image: highGradeIronBars,
    title: "High-Grade Iron Bars",
    description: [
      "TMT (Thermo-Mechanically Treated) iron bars are corrosion-resistant, high-tensile steel for enhanced structural strength, earthquake resistance, and long-term durability.",
    ],
  },
  {
    image: advancedCement,
    title: "Advanced Cement",
    description: [
      "Engineered blocks that deliver thermal insulation, sound control, and improved energy efficiency - cooler, quieter rooms by design.",
    ],
  },
  {
    image: superiorWood,
    title: "Superior Wood",
    description: [
      { emphasis: "HDHMR" },
      " (High-Density High Moisture Resistance) is an engineered wood with superior density, moisture resistance, pest & borer resistance compared to traditional MDF.",
    ],
  },
  {
    image: strongAdhesive,
    title: "Strong Adhesive",
    description: [
      "Bioflex is a highly polymer-modified, flexible mineral adhesive designed for high-performance bonding. It features a non-slip formula and is ideal for wet zones.",
    ],
  },
  {
    image: aluminiumWindows,
    title: "Aluminium Windows",
    description: [
      "Aluminium windows offer superior durability, slim profiles, and weather resistance for residential spaces. Because the material is exceptionally strong, it easily supports large glass spans without needing bulky framing.",
    ],
  },
];

export default function Materials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    containScroll: "trimSnaps",
  });

  return (
    <Section bg="dark" spacing="default">
      <div className="flex max-w-740 flex-col items-start gap-16">
        <h2 className="lg:text-display text-[32px]/[40px] font-medium text-white sm:text-[48px]/[56px]">
          Structure strength &amp;{" "}
          <span className="font-playfair text-gold-300 italic">
            material superiority.
          </span>
        </h2>

        <hr className="text-gold-300 w-34" />

        <p className="md:text-body sm:text-body-sm text-muted-foreground text-body-xs font-medium">
          We select materials based on performance and durability - never on
          cost alone.
        </p>
      </div>

      <div ref={emblaRef} className="my-24 overflow-hidden sm:my-36 md:my-64">
        <div className="flex gap-24">
          {MATERIALS.map(({ image, title, description }) => (
            <div
              key={title}
              tabIndex={0}
              className="rounded-md bg-[linear-gradient(180deg,#00000000_0%,#EBC37F33_100%)] p-1 sm:rounded-[18px]"
            >
              <article className="group focus-visible:ring-gold-300 relative h-500 w-280 shrink-0 overflow-hidden rounded-md focus-visible:ring-2 focus-visible:outline-none sm:h-600 sm:w-360 sm:rounded-[18px] lg:h-689 lg:w-480">
                <Image
                  src={image}
                  alt={title}
                  width={480}
                  height={689}
                  className="absolute inset-0 size-full object-cover"
                />

                {/* Scrim and copy both retreat downward on hover, leaving just
                  the photograph. Touch devices have no hover, so they keep it. */}
                <div
                  aria-hidden
                  className="absolute inset-0 transition-transform duration-500 ease-out [background:linear-gradient(0deg,rgba(8,34,53,0)_48.84%,rgba(8,34,53,0.5)_100%),linear-gradient(180deg,rgba(8,34,53,0)_51.16%,#001B2E_100%)] motion-reduce:transition-none lg:group-hover:translate-y-full lg:group-focus-visible:translate-y-full"
                />

                <div className="relative flex h-full flex-col justify-end p-16 sm:p-24 lg:p-36">
                  <div className="flex flex-col gap-8 transition-[transform,opacity] duration-500 ease-out motion-reduce:transition-none sm:gap-16 lg:group-hover:translate-y-24 lg:group-hover:opacity-0 lg:group-focus-visible:translate-y-24 lg:group-focus-visible:opacity-0">
                    <h3 className="text-body xs:text-body-lg sm:text-h5 lg:text-h4 font-bold text-white">
                      {title}
                    </h3>

                    <p className="lg:text-body-lg xs:text-[12px]/[20px] sm:text-body-sm text-[10px]/[18px] font-normal text-white/90">
                      {description.map((part, index) =>
                        typeof part === "string" ? (
                          part
                        ) : (
                          <strong key={index} className="font-bold">
                            {part.emphasis}
                          </strong>
                        )
                      )}
                    </p>
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>

      <CarouselNav
        api={emblaApi}
        variant="light"
        className="justify-end"
        prevLabel="Previous material"
        nextLabel="Next material"
      />
    </Section>
  );
}
