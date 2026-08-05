import Image from "next/image";
import Link from "next/link";

import Section from "@/components/ui/section";

import allsopp from "@/assets/images/blogs/allsopp.webp";
import bloomberg from "@/assets/images/blogs/bloomberg.webp";
import forbes from "@/assets/images/blogs/forbes.webp";
import ChevronDownIcon from "@/assets/svgs/common/chevron-down";

// Third-party coverage — the card art is the publication's own branding, so
// there is no category badge here as there is on our own articles.
const PRESS = [
  {
    id: "forbes",
    image: forbes,
    publication: "Forbes",
    titleLead: "Building Better Futures:",
    titleRest: "Constructing Community Homes for a Brighter Tomorrow",
    excerpt:
      "The architectural construction of an eco-friendly villa combines innovative design with sustainable practices, prioritizing the integration of renewable materials and energy-efficient systems. From the initial blueprint, the emphasis is on maximizing natural light and ventilation.",
    meta: ["10 mins", "Sustainability", "10th June, 2026"],
    href: "",
  },
  {
    id: "bloomberg",
    image: bloomberg,
    publication: "Bloomberg",
    titleLead: "Building Better Futures:",
    titleRest: "Constructing Community Homes for a Brighter Tomorrow",
    excerpt:
      "The architectural construction of an eco-friendly villa combines innovative design with sustainable practices, prioritizing the integration of renewable materials and energy-efficient systems. From the initial blueprint, the emphasis is on maximizing natural light and ventilation.",
    meta: ["10 mins", "Sustainability", "10th June, 2026"],
    href: "",
  },
  {
    id: "allsopp",
    image: allsopp,
    publication: "Allsopp & Allsopp",
    titleLead: "Building Better Futures:",
    titleRest: "Constructing Community Homes for a Brighter Tomorrow",
    excerpt:
      "The architectural construction of an eco-friendly villa combines innovative design with sustainable practices, prioritizing the integration of renewable materials and energy-efficient systems. From the initial blueprint, the emphasis is on maximizing natural light and ventilation.",
    meta: ["10 mins", "Sustainability", "10th June, 2026"],
    href: "",
  },
];

const PressCard = ({
  image,
  publication,
  titleLead,
  titleRest,
  excerpt,
  meta,
  href,
}) => (
  <article className="flex flex-col items-start gap-16 lg:gap-18">
    <Link
      href={href}
      className="focus-visible:ring-gold-400 w-full overflow-hidden rounded-xl focus-visible:ring-2 focus-visible:outline-none lg:rounded-[11px]"
    >
      <Image
        src={image}
        alt={publication}
        width={546}
        height={244}
        className="h-210 w-full object-cover transition-transform duration-500 ease-out hover:scale-105 lg:h-244"
      />
    </Link>

    <div className="flex w-full flex-col items-start gap-8 lg:gap-16">
      <div className="flex w-full flex-col items-start gap-8">
        <h3 className="text-navy-800 text-[18px]/[26px] font-semibold sm:text-[16px]/[24px]">
          <Link
            href={href}
            className="focus-visible:ring-gold-400 rounded-sm focus-visible:ring-2 focus-visible:outline-none"
          >
            {titleLead}{" "}
            <span className="font-normal lg:font-medium">{titleRest}</span>
          </Link>
        </h3>

        <p className="text-navy-800/60 line-clamp-3 text-[12px]/[18px] font-normal sm:text-[14px]/[22px]">
          {excerpt}
        </p>
      </div>

      {/* Chip bar — dots separate the values on mobile, hairlines inside a
          bordered box from `lg` up. */}
      <div className="border-navy-800/5 flex flex-wrap items-center gap-8 rounded-md bg-white lg:border-[0.75px] lg:px-16 lg:py-7">
        {meta.map((value, index) => (
          <div key={value} className="flex items-center gap-8">
            <span className="text-navy-800/60 text-body-xs font-normal whitespace-nowrap sm:text-[14px]/[22px]">
              {value}
            </span>

            {index < meta.length - 1 && (
              <>
                <span
                  aria-hidden
                  className="bg-navy-800/10 hidden h-18 w-px lg:block"
                />
                <span className="bg-navy-800/60 size-3 rounded-2xl lg:hidden"></span>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  </article>
);

export default function Press() {
  return (
    <Section
      bg="transparent"
      spacing="none"
      className="border-gold-400 border-t border-b bg-[#F4EFE6]/15 py-32 lg:py-64"
    >
      <div className="flex flex-col items-start gap-24 lg:flex-row lg:items-end lg:justify-between lg:gap-16">
        <div className="flex flex-col items-start gap-8">
          <h2 className="text-navy-800 text-[22px]/[30px] font-semibold lg:text-[36px]/[44px]">
            Articles Written About Us
          </h2>
          <p className="text-navy-800/60 text-[12px]/[18px] font-medium lg:text-[16px]/[24px]">
            Third party articles written about Kapuria Developers.
          </p>
        </div>

        <button
          type="button"
          className="text-navy-800 hover:text-gold-400 focus-visible:ring-gold-400 flex cursor-pointer items-center gap-4 rounded-sm text-[12px]/[18px] font-semibold tracking-[2.28px] uppercase transition-colors duration-200 focus-visible:ring-2 focus-visible:outline-none lg:gap-8 lg:text-[18px]/[26px] lg:tracking-[3.42px]"
        >
          Sort by
          <ChevronDownIcon className="size-16 shrink-0 lg:size-24" />
        </button>
      </div>

      <div className="mt-24 flex flex-col gap-32 sm:grid sm:grid-cols-2 sm:gap-16 md:grid-cols-3 lg:mt-36">
        {PRESS.map((item) => (
          <PressCard key={item.id} {...item} />
        ))}
      </div>

      <div className="mt-24 flex justify-center pt-8 lg:mt-36">
        <button
          type="button"
          className="text-navy-800/60 hover:text-navy-800 focus-visible:ring-gold-400 flex cursor-pointer items-center gap-8 rounded-sm text-[14px]/[22px] font-semibold tracking-[3px] uppercase transition-colors duration-200 focus-visible:ring-2 focus-visible:outline-none lg:text-[18px] lg:tracking-[3.42px]"
        >
          View more
          <ChevronDownIcon className="size-16 shrink-0 lg:size-24" />
        </button>
      </div>
    </Section>
  );
}
