import { resolveAmenity } from "@/config/projects";

import Section from "@/components/ui/section";

import QuadrantIcon from "@/assets/svgs/common/quadrant";

// Same four figures for every project, so the labels live here and the values
// come off the record — the listing page reads the exact same fields.
const specPairs = (project) => [
  ["Plot Size", project.plotSize],
  ["Built Area", project.builtArea],
  ["Floors", project.floors],
  ["Bedrooms", project.bedrooms],
];

// Mobile stacks the figures into a ruled table; desktop runs them along one
// line after the heading. Same data, two shapes — as on the listing card.
function SpecTable({ project, className = "" }) {
  return (
    <dl className={className}>
      {specPairs(project).map(([label, value]) => (
        <div
          key={label}
          className="flex items-center justify-between gap-16 border-b border-[#DFB367] py-8"
        >
          <dt className="text-body-sm font-medium text-[rgba(8,34,53,0.60)]">
            {label}
          </dt>
          <dd className="text-body-sm text-navy-800 font-semibold">{value}</dd>
        </div>
      ))}
    </dl>
  );
}

function SpecLine({ project, className = "" }) {
  return (
    <div className={className}>
      {specPairs(project).map(([label, value], index) => (
        <div key={label} className="flex items-center gap-x-24">
          {index > 0 ? (
            <span
              aria-hidden
              className="h-30 w-px shrink-0 bg-[rgba(223,179,103,0.80)]"
            />
          ) : null}

          <p className="flex gap-10 text-[18px]/[28px] font-medium whitespace-nowrap text-[rgba(8,34,53,0.55)] xl:text-[20px]/[34px]">
            {label} <span className="text-navy-800 font-semibold">{value}</span>
          </p>
        </div>
      ))}
    </div>
  );
}

export default function OverviewSection({ project }) {
  // The middle slot is the letter the mark stands in for — the listing card
  // still sets it on mobile, this page never does.
  const [nameStart, , nameEnd] = project.lockup;
  const amenities = project.amenities.map(resolveAmenity).filter(Boolean);

  return (
    <Section spacing="none" className="pt-32 pb-32 md:pt-64 lg:pt-128 lg:pb-64">
      <h1 className="text-navy-800 text-[29px]/[36px] font-medium sm:text-[42px]/[50px] md:text-[56px]/[68px] lg:text-[70px]/[82px]">
        <span className="sr-only">{project.name}</span>
        <span aria-hidden>
          {nameStart}
          {/* The mark replaces the letter at every width here, so it tracks
              the heading's cap height (≈0.6 of the type size) up the scale
              rather than swapping in at `lg` the way the listing card does. */}
          <QuadrantIcon className="inline-block size-18 -translate-y-1 sm:size-25 md:size-34 lg:size-42 lg:-translate-y-2" />
          {nameEnd}
        </span>
      </h1>

      {/* Mobile mutes the location and leans on the description; desktop does
          the reverse, so the two lines swap weight across the breakpoint. */}
      <p className="mt-8 text-[16px]/[24px] text-[rgba(8,34,53,0.55)] sm:text-[18px]/[26px] md:text-[22px]/[30px] lg:mt-12 lg:text-[25px]/[34px] lg:text-[#082235]">
        {project.city}
      </p>

      {/* The rule only exists on mobile, where the stack needs a break between
          the lockup and the body copy. */}
      <hr
        aria-hidden
        className="mt-16 h-px w-full border-0 bg-[rgba(8,34,53,0.12)] lg:hidden"
      />

      <p className="text-body-sm mt-16 font-normal text-[rgba(8,34,53,0.60)] lg:max-w-1100 lg:text-[16px]/[30px]">
        {project.description}
      </p>

      <div className="mt-32 lg:mt-54 lg:flex lg:flex-wrap lg:items-end lg:gap-x-36">
        <h2 className="font-playfair text-h3 font-medium italic sm:text-[28px]/[36px] md:text-[32px]/[42px] lg:-mb-11 lg:text-[36px]/[68px]">
          Specifications
        </h2>

        <SpecTable
          project={project}
          className="mt-16 flex flex-col gap-8 lg:hidden"
        />
        <SpecLine
          project={project}
          className="hidden lg:flex lg:flex-wrap lg:items-center lg:gap-x-24"
        />
      </div>

      <ul className="mt-32 grid grid-cols-2 gap-x-24 gap-y-16 lg:mt-64 lg:grid-cols-3 lg:gap-x-30 lg:gap-y-40">
        {amenities.map((amenity) => {
          const Icon = amenity.icon;

          return (
            <li
              key={amenity.label}
              className="flex items-center gap-8 md:gap-15 lg:gap-20"
            >
              {/* No stroke-width override here: a CSS rule outranks the
                  presentation attribute, so it would flatten the delivered
                  marks that carry their own weight. Each mark owns its own. */}
              <Icon className="text-gold-400 size-30 shrink-0 md:size-40 lg:size-80" />
              {/* Capped so the longer labels break onto two lines the way the
                  design sets them, rather than running the column's width. */}
              <span className="text-body-xs font-medium text-[#082235] sm:text-[16px]/[22px] lg:max-w-210 lg:text-[22px]/[34px]">
                {amenity.label}
              </span>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
