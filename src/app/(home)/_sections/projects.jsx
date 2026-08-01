"use client";

import useEmblaCarousel from "embla-carousel-react";

import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import CarouselNav from "@/components/ui/carousel-nav";

import villa1 from "@/assets/images/home/villa-1.webp";
import villa2 from "@/assets/images/home/villa-2.webp";
import villa3 from "@/assets/images/home/villa-3.webp";
import villa4 from "@/assets/images/home/villa-4.webp";
import ArchQuadrantIcon from "@/assets/svgs/common/arch-quadrant";
import QuadrantIcon from "@/assets/svgs/common/quadrant";

// `name` is split around the arched-window glyph that replaces one letter.
const PROJECTS = [
  {
    image: villa1,
    prefix: "C",
    suffix: "NOPY VEIL",
    tagline:
      "For the contemporary house with suspended green planters cascading from the top",
    specs: [
      { label: "Property Type", value: "Villa" },
      { label: "Plot Size", value: "3,750 sq.ft." },
      { label: "Built Area", value: "8,041 sq.ft." },
      { label: "Floors", value: "3" },
      { label: "Bedrooms", value: "5" },
    ],
    pills: ["Private Pool", "1 Indoor Parking"],
    href: "",
  },
  {
    image: villa2,
    prefix: "P",
    suffix: "LATIAL ARC",
    tagline:
      "For the classical royal mansion with grand arches on the widest plot",
    specs: [
      { label: "Property Type", value: "Villa" },
      { label: "Plot Size", value: "2,852 sq.ft." },
      { label: "Built Area", value: "2,753 sq.ft." },
      { label: "Floors", value: "3" },
      { label: "Bedrooms", value: "5" },
    ],
    pills: ["Private Pool", "2 Indoor Parking"],
    href: "",
  },
  {
    image: villa3,
    prefix: "V",
    suffix: "NTAGE",
    tagline:
      "For the corner residence with complete ventilation and scientific Vastu",
    specs: [
      { label: "Plot Size", value: "2,756.25 sq.ft." },
      { label: "Built Area", value: "1,835.28 sq.ft." },
      { label: "Floors", value: "3" },
      { label: "Bedrooms", value: "5" },
    ],
    pills: ["Private Pool", "1 Indoor Parking"],
    href: "",
  },
  {
    image: villa4,
    prefix: "M",
    suffix: "GESTIC VISTA",
    tagline:
      "For the luxury residence built on a wide plot with an impressive front elevation",
    specs: [
      { label: "Plot Size", value: "1,835.19 sq.ft." },
      { label: "Built Area", value: "1,830 sq.ft." },
      { label: "Floors", value: "3" },
      { label: "Bedrooms", value: "5" },
    ],
    pills: ["Private Pool", "1 Indoor Parking"],
    href: "",
  },
];

const Pill = ({ children }) => (
  <span className="border-navy-800/40 text-navy-800 text-body-xs flex items-center justify-center rounded-[145px] border px-16 py-8 font-normal whitespace-nowrap sm:py-11 lg:text-[14px]/[18px]">
    {children}
  </span>
);

// Desktop stacks a smaller "THE" above the name; mobile runs the whole thing
// on one line. The arched window always replaces the name's first vowel.
const Wordmark = ({ prefix, suffix }) => (
  <h3 className="text-navy-800 font-bold uppercase sm:mb-16">
    <span className="flex flex-wrap items-center gap-2 text-[22px]/[30px] lg:flex-col lg:items-start lg:gap-4 lg:text-[60px]/[44px]">
      <span className="lg:text-[36px]/[44px]">THE</span>

      <span className="flex items-center gap-2 lg:items-end lg:gap-4">
        {prefix}
        <ArchQuadrantIcon className="size-16 shrink-0 lg:size-41" />
        {suffix}
      </span>
    </span>
  </h3>
);

export default function ProjectsSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    containScroll: "trimSnaps",
  });

  return (
    <section className="border-gold-300/25 border-y">
      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex">
          {PROJECTS.map(
            ({ image, prefix, suffix, tagline, specs, pills, href }) => (
              <article
                key={prefix + suffix}
                className="relative w-full shrink-0 basis-full lg:min-h-768"
              >
                {/* Desktop: the villa fills the panel and a white scrim from the
                    left keeps the copy readable. Mobile stacks image over card. */}
                <Image
                  src={image}
                  alt={`The ${prefix}A${suffix}`}
                  width={1440}
                  height={768}
                  className="h-241 w-full object-cover lg:absolute lg:inset-0 lg:h-full"
                />

                <div
                  aria-hidden
                  className="hidden lg:absolute lg:inset-0 lg:block lg:bg-[linear-gradient(264.82deg,rgba(255,255,255,0)_51.99%,rgba(255,255,255,0.5)_98.1%)]"
                />

                <div className="border-navy-800/25 relative border-b bg-white px-16 py-32 lg:border-0 lg:bg-transparent lg:px-150 lg:py-64">
                  <div className="flex flex-col gap-24 lg:max-w-618 lg:gap-36">
                    <div className="flex flex-col gap-16">
                      <div className="flex flex-col gap-6 lg:gap-4">
                        <Wordmark prefix={prefix} suffix={suffix} />

                        <p className="text-navy-800 lg:text-body text-body-xs font-normal">
                          {tagline}
                        </p>
                      </div>

                      <hr className="text-navy-800 hidden w-34 lg:block" />
                    </div>

                    <div className="flex flex-col gap-24">
                      <p className="font-playfair text-navy-800 hidden text-[36px]/[68px] font-medium italic lg:block">
                        Specifications
                      </p>

                      {/* Mobile: one spec per row, ruled. Desktop: a single
                          wrapping line with hairline separators between items. */}
                      <dl className="flex flex-col lg:flex-row lg:flex-wrap lg:items-center lg:gap-20">
                        {specs.map(({ label, value }, index) => (
                          <div
                            key={label}
                            className="border-navy-800/12 text-body-xs sm:text-body flex items-center justify-between border-b py-8 lg:justify-start lg:gap-10 lg:border-0 lg:py-0 lg:text-[20px]/[34px]"
                          >
                            <dt className="text-navy-800/60 font-medium">
                              {label}
                            </dt>
                            <dd className="text-navy-800 font-semibold">
                              {value}
                            </dd>

                            {index < specs.length - 1 && (
                              <span
                                aria-hidden
                                className="bg-gold-400 ml-20 hidden h-34 w-px lg:block"
                              />
                            )}
                          </div>
                        ))}
                      </dl>
                    </div>

                    <div className="flex gap-12">
                      {pills.map((pill) => (
                        <Pill key={pill}>{pill}</Pill>
                      ))}
                    </div>

                    <div className="flex flex-col gap-8 lg:flex-row lg:items-center">
                      <Button asChild width="full" className="lg:w-auto">
                        <Link href={href}>
                          <QuadrantIcon className="text-gold-300 size-18 shrink-0" />
                          View Property
                        </Link>
                      </Button>

                      {/* Desktop pairs the arrows with a label; mobile drops it. */}
                      <div className="hidden items-center gap-4 lg:flex">
                        <CarouselNav
                          api={emblaApi}
                          prevLabel="Previous property"
                          nextLabel="Next property"
                        />
                        <span className="text-navy-800/80 text-body-sm font-semibold whitespace-nowrap">
                          View Next Property
                        </span>
                      </div>
                    </div>

                    <CarouselNav
                      api={emblaApi}
                      className="justify-end lg:hidden"
                      prevLabel="Previous property"
                      nextLabel="Next property"
                    />
                  </div>
                </div>
              </article>
            )
          )}
        </div>
      </div>
    </section>
  );
}
