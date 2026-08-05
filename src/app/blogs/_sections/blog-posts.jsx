import Image from "next/image";
import Link from "next/link";

import Section from "@/components/ui/section";

import blogBanner from "@/assets/images/blogs/blog-banner.webp";
import blogPost1 from "@/assets/images/blogs/blog-post-1.webp";
import blogPost2 from "@/assets/images/blogs/blog-post-2.webp";
import blogPost3 from "@/assets/images/blogs/blog-post-3.webp";
import ChevronDownIcon from "@/assets/svgs/common/chevron-down";

const TODAYS_DATE = "10th June, 2026";

// `titleLead` carries the heavier weight; the rest runs at medium.
const POSTS = [
  {
    id: "building-better-futures-1",
    image: blogPost1,
    titleLead: "Building Better Futures:",
    titleRest: "Constructing Community Homes for a Brighter Tomorrow",
    excerpt:
      "The architectural construction of an eco-friendly villa combines innovative design with sustainable practices, prioritizing the integration of renewable materials and energy-efficient systems. From the initial blueprint, the emphasis is on maximizing natural light and ventilation.",
    meta: ["10 mins", "Sustainability", "10th June, 2026"],
    href: "/blogs/fly-ash-bricks-vs-red-bricks",
  },
  {
    id: "building-better-futures-2",
    image: blogPost2,
    titleLead: "Building Better Futures:",
    titleRest: "Constructing Community Homes for a Brighter Tomorrow",
    excerpt:
      "The architectural construction of an eco-friendly villa combines innovative design with sustainable practices, prioritizing the integration of renewable materials and energy-efficient systems. From the initial blueprint, the emphasis is on maximizing natural light and ventilation.",
    meta: ["10 mins", "Sustainability", "10th June, 2026"],
    href: "/blogs/fly-ash-bricks-vs-red-bricks",
  },
  {
    id: "building-better-futures-3",
    image: blogPost3,
    titleLead: "Building Better Futures:",
    titleRest: "Constructing Community Homes for a Brighter Tomorrow",
    excerpt:
      "The architectural construction of an eco-friendly villa combines innovative design with sustainable practices, prioritizing the integration of renewable materials and energy-efficient systems. From the initial blueprint, the emphasis is on maximizing natural light and ventilation.",
    meta: ["10 mins", "Sustainability", "10th June, 2026"],
    href: "/blogs/fly-ash-bricks-vs-red-bricks",
  },
];

const PostCard = ({ image, titleLead, titleRest, excerpt, meta, href }) => (
  <article className="flex flex-col items-start gap-16 sm:gap-18">
    <Link
      href={href}
      className="focus-visible:ring-gold-400 w-full overflow-hidden rounded-[11px] focus-visible:ring-2 focus-visible:outline-none"
    >
      <Image
        src={image}
        alt=""
        width={330}
        height={244}
        className="h-180 w-full object-cover transition-transform duration-500 ease-out hover:scale-105 sm:h-244"
      />
    </Link>

    <div className="flex w-full flex-col items-start gap-8 sm:gap-16">
      <div className="flex w-full flex-col items-start gap-8">
        <h3 className="text-navy-800 text-body-lg sm:text-body font-semibold">
          <Link
            href={href}
            className="focus-visible:ring-gold-400 rounded-sm focus-visible:ring-2 focus-visible:outline-none"
          >
            {titleLead} <span className="font-medium">{titleRest}</span>
          </Link>
        </h3>

        <p className="text-navy-800/60 text-body-xs xs:text-[14px]/[22px] line-clamp-3 font-normal">
          {excerpt}
        </p>
      </div>

      {/* Chip bar — hairlines separate the values, so they sit between. */}
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

export default function BlogPosts() {
  return (
    <Section
      bg="surface"
      spacing="none"
      className="pt-32 pb-32 sm:py-64 lg:pb-120"
    >
      <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-start sm:gap-16 md:gap-24">
        <div className="flex flex-col items-start gap-8 sm:gap-16">
          <h1 className="text-navy-800 text-[32px]/[40px] font-semibold sm:text-[48px]/[56px] lg:text-[64px]/[72px]">
            Blogs &amp; Media
          </h1>

          <hr className="text-gold-400 w-34" />

          <p className="text-navy-800/60 text-body-xs xs:text-body-sm max-w-871 font-medium sm:text-[16px]/[24px]">
            Stay up to date with the latest news, video, blogs and articles
            about Kapuria and the wider world.
          </p>
        </div>

        <div className="flex shrink-0 flex-col items-start sm:items-end">
          <p className="text-navy-800/60 text-[10px]/[14px] font-normal tracking-[2.05px] uppercase sm:text-[16px]/[34px] sm:tracking-[3.04px]">
            Todays Date
          </p>
          <p className="text-navy-800 text-body-sm font-medium sm:text-[22px]">
            {TODAYS_DATE}
          </p>
        </div>
      </div>
      <div className="relative mt-16 flex flex-col items-center gap-24 pt-16 sm:mt-32 sm:gap-36 md:mt-64">
        <hr className="text-gold-400/50 mt absolute -inset-x-16 top-0 w-auto lg:hidden" />
        <div className="flex w-full flex-col items-start justify-between gap-24 sm:flex-row sm:items-end">
          <div className="flex flex-col items-start gap-8">
            <h2 className="text-navy-800 sm:text-h3 text-[22px]/[30px] font-semibold md:text-[36px]/[44px]">
              Blog Posts
            </h2>
            <p className="text-navy-800/60 text-body-xs xs:text-body-xs font-medium sm:text-[16px]/[24px]">
              Stay up to date with our most recent blog posts.
            </p>
          </div>

          <button
            type="button"
            className="text-navy-800 hover:text-gold-400 focus-visible:ring-gold-400 sm:text-body text-body-xs flex cursor-pointer items-center gap-8 rounded-sm font-semibold tracking-[2.28px] uppercase transition-colors duration-200 focus-visible:ring-2 focus-visible:outline-none sm:tracking-[3.42px] md:text-[18px]/[26px]"
          >
            Sort by
            <ChevronDownIcon className="size-20 shrink-0" />
          </button>
        </div>

        <div className="grid w-full grid-cols-1 gap-32 sm:grid-cols-2 sm:gap-16 md:gap-24 lg:grid-cols-3">
          {POSTS.map((post) => (
            <PostCard key={post.id} {...post} />
          ))}
        </div>

        <button
          type="button"
          className="text-navy-800/60 hover:text-navy-800 focus-visible:ring-gold-400 text-body-sm flex cursor-pointer items-center gap-8 rounded-sm font-semibold tracking-[3px] uppercase transition-colors duration-200 focus-visible:ring-2 focus-visible:outline-none sm:text-[18px] sm:tracking-[3.42px]"
        >
          View more
          <ChevronDownIcon className="size-24 shrink-0" />
        </button>
      </div>
    </Section>
  );
}
