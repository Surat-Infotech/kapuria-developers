import Image from "next/image";
import Link from "next/link";

import { ROUTES } from "@/lib/route";

import { Button } from "@/components/ui/button";
import Section from "@/components/ui/section";

import ArrowRightIcon from "@/assets/svgs/common/arrow-right";
import QuadrantIcon from "@/assets/svgs/common/quadrant";

// Both columns pin under the floating header from `lg` up, so the shorter of
// the two — whichever it is for a given project's list length — holds its
// place while the taller one scrolls past, then both release together at the
// end of the grid and travel up with the page (and re-pin on the way back).
// `items-start` on the grid is what makes this work: stretched grid items are
// exactly as tall as the row, which leaves sticky nothing to travel through.
// The offset clears the header's lg position — 64 top inset + a 60 tall bar.
const STICKY = "lg:sticky lg:top-144";

export default function NearbyLocationsSection({ project }) {
  return (
    <Section spacing="none" className="pt-16 pb-48 md:pb-64 lg:pt-64 lg:pb-128">
      {/* The column split is the design's 491 / 607 either side of a 42 gutter,
          which is the container's 1140 exactly. */}
      <div className="grid grid-cols-1 items-start gap-32 lg:grid-cols-[minmax(0,491fr)_minmax(0,607fr)] lg:gap-36">
        <div className={STICKY}>
          <h2 className="text-h3 font-medium text-[#082235] lg:text-[36px]/[68px]">
            Near by locations
          </h2>
          <div className="mt-16 lg:mt-24">
            <dl>
              {project.nearby.map((place) => (
                <div
                  key={place.name}
                  className="flex items-center justify-between gap-16 border-b border-[rgba(8,34,53,0.12)] pt-8 pb-8 last:border-b-0 lg:block lg:border-[rgba(223,179,103,0.60)] lg:pt-36 lg:pb-36 lg:first:pt-0"
                >
                  <dt className="text-navy-800 text-[18px]/[26px] font-bold lg:text-[25px]/[34px]">
                    {place.name}
                  </dt>
                  {/* No margin between the two: the 26/34 and 22/30 leading is
                      what sets them apart in the design. */}
                  <dd className="text-body-sm font-normal text-[rgba(8,34,53,0.60)] lg:text-[16px]/[30px]">
                    {place.distance}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <div className={STICKY}>
          {/* The plate is wider and shorter on mobile than on desktop, so the
              ratio is not shared. */}
          <div className="relative aspect-342/206 overflow-hidden rounded-lg border-2 border-[#DFB367] lg:aspect-607/484 lg:rounded-xl">
            <Image
              src={project.mapImage}
              alt={`Map of the area around ${project.name}, ${project.location}`}
              fill
              sizes="(min-width: 1024px) 607px, 100vw"
              className="object-cover"
            />
          </div>

          {/* Mobile runs full width and trails an arrow; desktop shrinks to its
              content and leads with the brand mark instead. */}
          <Button
            asChild
            size="sm"
            width="full"
            className="lg:text-body-lg mt-44 gap-12 px-24 py-8 text-[16px]/[30px] tracking-[3px] lg:mt-56 lg:w-auto lg:gap-12 lg:py-16 lg:tracking-[3.42px]"
          >
            <Link href={ROUTES.CONTACT}>
              <QuadrantIcon className="text-gold-300 hidden size-18 shrink-0 lg:inline-block" />
              Enquire Now
              <ArrowRightIcon className="size-20 shrink-0 lg:hidden" />
            </Link>
          </Button>
        </div>
      </div>
    </Section>
  );
}
