"use client";

import useEmblaCarousel from "embla-carousel-react";

import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import CarouselNav from "@/components/ui/carousel-nav";
import Section from "@/components/ui/section";

import canopyVeil from "@/assets/images/our-projects/cabopy-veil-1.webp";
import magesticVilla from "@/assets/images/our-projects/magestic-project-1.webp";
import palatialArc from "@/assets/images/our-projects/palatial-arc-1.webp";
import vantage from "@/assets/images/our-projects/vantage-1.webp";
import QuadrantIcon from "@/assets/svgs/common/quadrant";

// Every project in the design carries this same paragraph, so it is hoisted
// until each one gets copy of its own.
const DESCRIPTION =
  "The architectural construction of an eco-friendly villa combines innovative design with sustainable practices, prioritizing the integration of renewable materials and energy-efficient systems. From the initial blueprint, the emphasis is on maximizing natural light and ventilation, reducing the need for artificial lighting and climate control.";

const PALATIAL_ARC = {
  id: "the-palatial-arc",
  name: "The Palatial Arc",
  // Split around the letter the brand mark stands in for on desktop; mobile
  // keeps the letter itself.
  lockup: ["The P", "o", "latial Arc"],
  location: "Sector 88, Mohali, Punjab, India",
  // Only the first interior shot has been delivered; it is repeated so the
  // gallery arrows have somewhere to go. Add the rest of the photography as it
  // lands.
  images: [palatialArc, palatialArc],
  type: "Villa",
  plotSize: "2,852 sq.ft.",
  builtArea: "2,753 sq.ft.",
  floors: "2",
  bedrooms: "5",
  amenities: ["Private Pool", "2 Indoor Parking"],
  description: DESCRIPTION,
  href: "",
};

const MAJESTIC_VILLA = {
  id: "the-majestic-villa",
  name: "The Majestic Villa",
  lockup: ["The M", "a", "gestic Villa"],
  location: "Sector 89, Mohali, Punjab, India",
  images: [magesticVilla, magesticVilla],
  type: "Villa",
  plotSize: "1,835.19 sq.ft.",
  builtArea: "1,830 sq.ft",
  floors: "2",
  bedrooms: "5",
  amenities: ["Private Pool", "1 Indoor Parking"],
  description: DESCRIPTION,
  href: "",
};

const VANTAGE = {
  id: "the-vantage",
  name: "The Vantage",
  lockup: ["The V", "a", "ntage"],
  location: "Sector 79, Mohali, Punjab, India",
  images: [vantage, vantage],
  type: "Villa",
  plotSize: "2,756.25 sq.ft.",
  builtArea: "1,835.28 sq.ft.",
  floors: "3",
  bedrooms: "5",
  amenities: ["Private Pool", "1 Indoor Parking"],
  description: DESCRIPTION,
  href: "",
};

const CANOPY_VEIL = {
  id: "the-canopy-veil",
  name: "The Canopy Veil",
  lockup: ["The C", "a", "nopy Veil"],
  location: "Sector 60, Mohali, Punjab, India",
  images: [canopyVeil, canopyVeil],
  type: "Villa",
  plotSize: "3,750 sq.ft.",
  builtArea: "8,041 sq.ft.",
  floors: "3",
  bedrooms: "5",
  amenities: ["Private Pool", "1 Indoor Parking"],
  description: DESCRIPTION,
  href: "",
};

const PROJECTS = [PALATIAL_ARC, MAJESTIC_VILLA, VANTAGE, CANOPY_VEIL];

// Mobile lists every spec as its own row; desktop condenses the same values
// onto two lines, so the labels live here rather than in the data.
const specRows = (project) => [
  ["Property Type", project.type],
  ["Plot Size", project.plotSize],
  ["Built Area", project.builtArea],
  ["Floors", project.floors],
  ["Bedrooms", project.bedrooms],
];

// The only part of the card that moves — the photography. Everything in the
// details column stays put while this scrolls.
function ProjectGallery({ project, className = "" }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    containScroll: "trimSnaps",
  });

  return (
    <div className={className}>
      <div
        ref={emblaRef}
        className="overflow-hidden rounded-xl border border-[rgba(235,195,127,0.30)]"
      >
        <div className="flex">
          {project.images.map((photo, index) => (
            <Image
              key={index}
              src={photo}
              alt={`${project.name} — photo ${index + 1}`}
              width={photo.width}
              height={photo.height}
              className="aspect-4/3 w-full min-w-0 shrink-0 grow-0 basis-full object-cover lg:aspect-481/492 lg:basis-auto"
            />
          ))}
        </div>
      </div>

      {/* Arrows tuck under the photo, right-aligned to it, as in the design. */}
      <CarouselNav
        api={emblaApi}
        variant="light"
        className="mt-16 justify-end gap-0 lg:mt-32"
      />
    </div>
  );
}

function ProjectSpecTable({ project, className = "" }) {
  return (
    <dl className={className}>
      {specRows(project).map(([label, value]) => (
        <div
          key={label}
          className="flex items-center justify-between gap-16 border-b border-[rgba(255,255,255,0.12)] py-8"
        >
          <dt className="text-[12px]/[18px] font-medium text-white/60">
            {label}
          </dt>
          <dd className="text-[12px]/[18px] font-semibold text-white">
            {value}
          </dd>
        </div>
      ))}
    </dl>
  );
}

// 18px, not the 22px in Figma: the details column is a fixed 595px at `lg`+
// (1140 container − 481 gallery − 64 gap), and row one needs ~693px at 22px, so
// it could only ever wrap. At 18px it comes to ~576px and sits on one line for
// the shorter projects, while Vantage and Canopy Veil push `Built Area` down —
// which is the grouping each mock shows.
//
// Each pair is `whitespace-nowrap` so a value can never split mid-phrase
// ("2,756.25" / "sq.ft"); `flex-wrap` gives the whole pair somewhere to go.
function ProjectSpecLines({ project, className = "" }) {
  return (
    <div className={className}>
      <div className="flex flex-wrap items-center gap-x-16 gap-y-8 text-[18px]/[26px] font-medium text-white/60">
        <span className="font-bold whitespace-nowrap text-white">
          {project.type},
        </span>
        <span className="whitespace-nowrap">
          Plot Size{" "}
          <span className="font-bold text-white">{project.plotSize}</span>
        </span>
        <span aria-hidden className="h-26 w-px shrink-0 bg-white/25" />
        <span className="whitespace-nowrap">
          Built Area{" "}
          <span className="font-bold text-white">{project.builtArea}</span>
        </span>
      </div>

      <div className="mt-8 flex flex-wrap items-center gap-x-16 gap-y-8 text-[18px]/[26px] font-medium text-white/60">
        <span className="whitespace-nowrap">
          Bedrooms{" "}
          <span className="font-bold text-white">{project.bedrooms}</span>
        </span>
        <span aria-hidden className="h-26 w-px shrink-0 bg-white/25" />
        <span className="whitespace-nowrap">
          Floors <span className="font-bold text-white">{project.floors}</span>
        </span>
      </div>
    </div>
  );
}

function ProjectCard({ project }) {
  const [nameStart, nameLetter, nameEnd] = project.lockup;

  // Each block carries its own vertical padding rather than the list spacing
  // them with a gap, so the rhythm survives cards being added or reordered.
  return (
    <article className="flex flex-col gap-16 py-32 md:gap-32 md:py-64 lg:flex-row lg:gap-64 lg:py-128">
      <ProjectGallery
        project={project}
        className="mx-auto w-full sm:max-w-481 lg:shrink-0"
      />

      <div className="lg:min-w-0 lg:flex-1">
        <h3 className="text-[18px]/[26px] font-medium text-white lg:text-[26px]/[34px]">
          {/* The mark replaces a letter on desktop, so the readable name is
              kept aside for assistive tech. */}
          <span className="sr-only">{project.name}</span>
          <span aria-hidden>
            {nameStart}
            <span className="lg:hidden">{nameLetter}</span>
            {/* Sized to the cap height of the 26px lockup, not the full em. */}
            <QuadrantIcon className="hidden size-18 -translate-y-px lg:inline-block" />
            {nameEnd}
          </span>
        </h3>

        {/* The shadow only exists on desktop, where the line sits against the
            open navy field rather than the tight mobile stack. */}
        <p className="mt-6 text-[12px]/[18px] font-normal text-white/60 sm:text-[16px]/[24px] md:text-[18px]/[26px] lg:text-shadow-[4px_6px_20px_rgba(0,0,0,0.50)]">
          {project.location}
        </p>

        <ProjectSpecTable project={project} className="mt-16 lg:hidden" />
        <ProjectSpecLines project={project} className="mt-24 hidden lg:block" />

        <ul className="mt-16 flex flex-wrap gap-12 sm:gap-16">
          {project.amenities.map((amenity) => (
            <li
              key={amenity}
              className="rounded-full border border-[rgba(255,255,255,0.40)] bg-[rgba(255,255,255,0.00)] px-16 py-8 text-[12px]/[18px] font-medium text-white backdrop-blur-[107px] backdrop-filter sm:text-[16px]/[24x] md:text-[18px]/[26px] lg:px-20 lg:py-10"
            >
              {amenity}
            </li>
          ))}
        </ul>

        <p className="mt-24 line-clamp-3 text-[12px]/[18px] font-normal text-white/60 sm:text-[16px]/[24px] sm:font-medium lg:line-clamp-4 lg:max-w-590">
          {project.description}
        </p>

        <Button
          asChild
          variant="secondary"
          width="full"
          className="mt-16 px-16 py-8 font-medium tracking-[3.04px] text-[#082235] md:px-24 md:py-16 md:tracking-[3.42px] lg:mt-36 lg:w-auto"
        >
          <Link href={project.href}>
            {/* Mobile leads with the action, desktop with the invitation. */}
            <span className="lg:hidden">View Property</span>
            <span className="hidden lg:inline">Know More</span>
          </Link>
        </Button>
      </div>
    </article>
  );
}

export default function FeaturedProjectsSection() {
  return (
    <Section bg="dark" spacing="none" className="py-0">
      {PROJECTS.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </Section>
  );
}
