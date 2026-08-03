"use client";

import useEmblaCarousel from "embla-carousel-react";

import Image from "next/image";
import Link from "next/link";

import { PROJECTS, projectHref } from "@/config/projects";

import { Button } from "@/components/ui/button";
import CarouselNav from "@/components/ui/carousel-nav";
import Section from "@/components/ui/section";

import QuadrantIcon from "@/assets/svgs/common/quadrant";

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
              className="aspect-343/241 w-full min-w-0 shrink-0 grow-0 basis-full object-cover lg:aspect-481/492 lg:basis-auto"
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
          <dt className="text-body-xs font-medium text-white/60">{label}</dt>
          <dd className="text-body-xs font-semibold text-white">{value}</dd>
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
      <div className="flex flex-wrap items-center gap-x-8 gap-y-8 text-[16px]/[24px] font-medium text-white/60 xl:gap-x-16 xl:text-[22px]/[30px]">
        <span className="text-[16px]/[24px] font-semibold whitespace-nowrap text-white xl:text-[22px]/[30px]">
          {project.type},
        </span>
        <span className="flex items-center gap-8 whitespace-nowrap">
          Plot Size{" "}
          <span className="text-[16px]/[24px] font-semibold whitespace-nowrap text-white xl:text-[22px]/[30px]">
            {project.plotSize}
          </span>
        </span>
        <span aria-hidden className="h-26 w-px shrink-0 bg-white/25" />
        <span className="flex items-center gap-8 whitespace-nowrap">
          Built Area{" "}
          <span className="text-[16px]/[24px] font-semibold whitespace-nowrap text-white xl:text-[22px]/[30px]">
            {project.builtArea}
          </span>
        </span>
      </div>

      <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-8 text-[16px]/[24px] font-medium text-white/60 xl:gap-x-16 xl:text-[22px]/[30px]">
        <span className="flex items-center gap-8 whitespace-nowrap">
          Bedrooms{" "}
          <span className="text-[16px]/[24px] font-semibold whitespace-nowrap text-white xl:text-[22px]/[30px]">
            {project.bedrooms}
          </span>
        </span>
        <span aria-hidden className="h-26 w-px shrink-0 bg-white/25" />
        <span className="flex items-center gap-8 whitespace-nowrap">
          Floors{" "}
          <span className="text-[16px]/[24px] font-semibold whitespace-nowrap text-white xl:text-[22px]/[30px]">
            {project.floors}
          </span>
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
        <h3 className="lg:text-h3 text-[18px]/[26px] font-medium text-white">
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
        <p className="text-body-xs sm:text-body mt-6 font-normal text-white/60 md:text-[18px]/[26px] lg:text-shadow-[4px_6px_20px_rgba(0,0,0,0.50)]">
          {project.location}
        </p>

        <ProjectSpecTable project={project} className="mt-16 lg:hidden" />
        <ProjectSpecLines project={project} className="mt-24 hidden lg:block" />

        <ul className="mt-16 flex flex-wrap gap-12 sm:gap-16">
          {project.highlights.map((highlight) => (
            <li
              key={highlight}
              className="text-body-xs rounded-full border border-[rgba(255,255,255,0.40)] bg-[rgba(255,255,255,0.00)] px-16 py-8 font-medium text-white backdrop-blur-[107px] backdrop-filter sm:text-[16px]/[24x] md:text-[18px]/[26px] lg:px-20 lg:py-10"
            >
              {highlight}
            </li>
          ))}
        </ul>

        <p className="text-body-xs sm:text-body mt-24 line-clamp-3 font-normal tracking-[-0.3px] text-white/60 sm:font-medium lg:line-clamp-4 lg:max-w-590">
          {project.description}
        </p>

        <Button
          asChild
          variant="secondary"
          width="full"
          className="text-navy-800 mt-16 px-16 py-8 font-medium tracking-[3.04px] md:px-24 md:py-16 md:tracking-[3.42px] lg:mt-36 lg:w-auto"
        >
          <Link href={projectHref(project)}>
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
        <ProjectCard key={project.slug} project={project} />
      ))}
    </Section>
  );
}
