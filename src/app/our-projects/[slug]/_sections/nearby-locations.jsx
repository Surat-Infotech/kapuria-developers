import Link from "next/link";

import { ROUTES } from "@/lib/route";

import { Button } from "@/components/ui/button";
import Section from "@/components/ui/section";

import ArrowRightIcon from "@/assets/svgs/common/arrow-right";
import QuadrantIcon from "@/assets/svgs/common/quadrant";

// Embed rather than a flat image: the location has to move with the project,
// and this form of the embed needs no API key.
//
// `ll` is the viewport-only form — it frames the coordinates without dropping
// a marker, which is what we want: the brief is to show the area, not the
// address. Projects still waiting on a map link fall back to `q`, which does
// resolve to a pin.
const MAP_ZOOM = 15;

const mapSrc = (project) =>
  project.mapCenter
    ? `https://maps.google.com/maps?ll=${project.mapCenter}&z=${MAP_ZOOM}&output=embed`
    : `https://www.google.com/maps?q=${encodeURIComponent(project.mapQuery)}&z=${MAP_ZOOM}&output=embed`;

// Web Mercator resolution is 156543.03392·cos(lat)/2^zoom metres per pixel.
// Every project sits at ~30.68°N, so at zoom 15 that is 4.108 m/px and the
// 300m radius comes to 73px — 146px across. Fixed in pixels rather than
// relative units because the embed renders at the same scale whatever size the
// frame is, so one value is correct at both breakpoints.
const CATCHMENT_DIAMETER_PX = 146;

export default function NearbyLocationsSection({ project }) {
  return (
    <Section spacing="none" className="pt-16 pb-48 md:pb-64 lg:pt-64 lg:pb-128">
      {/* The column split is the design's 491 / 607 either side of a 42 gutter,
          which is the container's 1140 exactly. */}
      <div className="grid grid-cols-1 gap-32 lg:grid-cols-[minmax(0,491fr)_minmax(0,607fr)] lg:gap-36">
        <div>
          <h2 className="text-[26px]/[34px] font-medium text-[#082235] lg:text-[36px]/[68px]">
            Near by locations
          </h2>
          <div className="mt-16 max-h-210 overflow-y-auto [mask-image:linear-gradient(to_bottom,#000_80%,transparent_100%)] lg:mt-24 lg:max-h-588">
            <dl>
              {project.nearby.map((place) => (
                <div
                  key={place.name}
                  className="flex items-center justify-between gap-16 border-b border-[rgba(8,34,53,0.12)] pt-8 pb-8 last:border-b-0 lg:block lg:border-[rgba(223,179,103,0.60)] lg:pt-36 lg:pb-36 lg:first:pt-0"
                >
                  <dt className="text-[18px]/[26px] font-bold text-[#082235] lg:text-[25px]/[34px]">
                    {place.name}
                  </dt>
                  {/* No margin between the two: the 26/34 and 22/30 leading is
                      what sets them apart in the design. */}
                  <dd className="text-[14px]/[22px] font-normal text-[rgba(8,34,53,0.60)] lg:text-[16px]/[26px]">
                    {place.distance}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <div>
          {/* The plate is wider and shorter on mobile than on desktop, so the
              ratio is not shared. */}
          <div className="relative overflow-hidden rounded-lg border-2 border-[#DFB367] lg:rounded-xl">
            <iframe
              title={`Map of the area around ${project.name}, ${project.location}`}
              src={mapSrc(project)}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="block aspect-342/206 w-full border-0 lg:aspect-607/484"
            />

            {/* The 300m catchment. Only drawn where we have real coordinates —
                without them the frame is centred by a text search and the
                circle would be claiming a precision we do not have.
                `pointer-events-none` keeps the map itself pannable. */}
            {project.mapCenter ? (
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0"
                style={{ "--catchment": `${CATCHMENT_DIAMETER_PX}px` }}
              >
                <span className="absolute top-1/2 left-1/2 size-(--catchment) -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#1A73E8] bg-[rgba(66,133,244,0.18)]" />
                <span className="absolute top-1/2 left-1/2 size-20 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#1A73E8]" />
              </div>
            ) : null}
          </div>

          {/* Mobile runs full width and trails an arrow; desktop shrinks to its
              content and leads with the brand mark instead. */}
          <Button
            asChild
            size="sm"
            width="full"
            className="mt-44 gap-12 px-24 py-8 text-[16px]/[30px] tracking-[3px] lg:mt-56 lg:w-auto lg:gap-12 lg:py-14 lg:text-[18px]/[30px] lg:tracking-[3.42px]"
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
