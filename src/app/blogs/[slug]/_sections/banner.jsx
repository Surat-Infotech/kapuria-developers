import Image from "next/image";
import Link from "next/link";

import Section from "@/components/ui/section";

import blogDetailBanner from "@/assets/images/blogs/blog-detail.webp";
import ChevronsRightIcon from "@/assets/svgs/common/chevrons-right";

const CRUMBS = [
  { label: "Home", href: "/" },
  { label: "Blogs", href: "/blogs" },
];

export default function BannerSection({ post }) {
  const { titleLead, titleRest, readTime, date, author } = post;

  const meta = [
    { label: "Read Time", value: readTime },
    { label: "Date", value: date },
    { label: "Author", value: author.name },
  ];

  return (
    <div className="relative">
      <Image
        src={blogDetailBanner}
        alt={`${titleLead}${titleRest}`}
        width={1440}
        height={910}
        priority
        className="h-440 w-full object-cover lg:h-910"
      />

      <div
        aria-hidden
        className="absolute inset-0 mt-auto h-[70%] bg-[linear-gradient(180deg,rgba(0,0,0,0)_0.89%,#0A1D38_99.79%)]"
      />

      <Section
        bg="transparent"
        spacing="none"
        className="xs:pb-32 absolute inset-x-0 bottom-0 pb-16 lg:pb-64"
      >
        <div className="flex flex-col items-start gap-8 sm:gap-16">
          {/* The column is `items-start`, so nav/ol would otherwise size to
              their content and leave the title nothing to truncate against. */}
          <nav aria-label="Breadcrumb" className="w-full">
            <ol className="flex w-full items-center gap-4 sm:gap-8 lg:gap-10">
              {CRUMBS.map(({ label, href }) => (
                <li
                  key={label}
                  className="flex shrink-0 items-center gap-4 sm:gap-8 lg:gap-10"
                >
                  <Link
                    href={href}
                    className="focus-visible:ring-gold-300 text-body-xs xs:text-[14px] rounded-sm font-normal text-white/60 transition-colors duration-200 hover:text-white focus-visible:ring-2 focus-visible:outline-none lg:text-[18px]"
                  >
                    {label}
                  </Link>
                  <ChevronsRightIcon
                    aria-hidden
                    className="size-16 shrink-0 text-white/60 lg:size-24"
                  />
                </li>
              ))}

              {/* `min-w-0` lets this flex item shrink below its content width,
                  which is what `truncate` needs to kick in. */}
              <li
                aria-current="page"
                className="text-body-xs min-w-0 flex-1 truncate font-medium text-white lg:text-[18px]"
              >
                <span className="font-semibold">{titleLead}</span>
                {titleRest}
              </li>
            </ol>
          </nav>

          <div className="xs:gap-16 flex flex-col items-start gap-8 md:gap-24 lg:gap-36">
            <h1 className="text-[22px]/[30px] font-medium text-white sm:text-[40px]/[52px] lg:text-[56px]/[72px]">
              <span className="font-semibold">{titleLead}</span>
              {titleRest}
            </h1>

            {/* Frosted pill — hairlines sit between the pairs, not after them. */}
            <dl className="flex flex-wrap items-center gap-x-8 gap-y-4 rounded-md border border-white/20 bg-[#071521]/25 px-8 py-8 backdrop-blur-[13.3px] sm:gap-x-16 sm:px-16">
              {meta.map(({ label, value }, index) => (
                <div key={label} className="flex items-center gap-8 sm:gap-16">
                  <div className="flex items-center gap-8">
                    <dt className="xs:text-body-sm text-body-xs font-normal text-white lg:text-[18px]/[26px]">
                      {label}
                    </dt>
                    <dd className="xs:text-body-sm text-body-xs font-medium text-white lg:text-[18px]/[26px]">
                      {value}
                    </dd>
                  </div>

                  {index < meta.length - 1 && (
                    <span aria-hidden className="h-18 w-px bg-white/20" />
                  )}
                </div>
              ))}
            </dl>
          </div>
        </div>
      </Section>
    </div>
  );
}
