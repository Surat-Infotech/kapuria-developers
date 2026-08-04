import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import Section from "@/components/ui/section";

import bannerMobile from "@/assets/images/blogs/blog-banner-mobile.webp";
import banner from "@/assets/images/blogs/blog-banner.webp";

const FEATURED = {
  eyebrow: "Featured Blog",
  // Split so the lead clause can carry the heavier weight, as in the design.
  titleLead: "Building Better Futures:",
  titleRest: "Constructing Community Homes for a Brighter Tomorrow",
  meta: [
    { label: "Read Time", value: "10 Mins" },
    { label: "Date", value: "10th June, 2026" },
    { label: "Author", value: "Sophia Anderson" },
  ],
  excerpt:
    "The architectural construction of an eco-friendly villa combines innovative design with sustainable practices, prioritizing the integration of renewable materials and energy-efficient systems. From the initial blueprint, the emphasis is on maximizing natural light and ventilation, reducing the need for artificial heating or cooling. The villa's structure often incorporates recycled materials, such as reclaimed wood and repurposed stone, minimizing the ecological footprint while infusing the space with a rustic yet contemporary aesthetic.",
  href: "",
};

export default function BannerSection() {
  const { eyebrow, titleLead, titleRest, meta, excerpt, href } = FEATURED;

  return (
    <div className="relative">
      <Image
        src={banner}
        alt="Blog Banner"
        width="100%"
        height="100%"
        priority
        className="hidden w-full min-[700px]:block"
      />
      <Image
        src={bannerMobile}
        alt="Blog Banner"
        width="100%"
        height="100%"
        className="min-[700px]:hidden"
      />
      <Section
        bg="transparent"
        spacing="none"
        className="absolute inset-x-0 bottom-0 pb-32 sm:pb-48 lg:pb-64"
      >
        <div className="flex max-w-1004 flex-col items-start gap-16 sm:gap-26">
          <div className="flex w-full flex-col items-start gap-8 sm:gap-16">
            <p className="text-gold-300 text-[14px]/[22px] font-semibold tracking-[2.88px] uppercase sm:text-[16px]/[24px]">
              {eyebrow}
            </p>

            <div className="flex w-full flex-col items-start gap-8">
              <h2 className="text-[24px]/[32px] font-medium text-white sm:text-[32px]/[42px] lg:text-[48px]/[60px] lg:tracking-[-1.44px]">
                <span className="font-semibold">{titleLead}</span>{" "}
                <span className="font-normal">{titleRest}</span>
              </h2>

              {/* Hairline separators sit between the pairs, not after them. */}
              <dl className="flex flex-wrap items-center gap-x-8 gap-y-4 sm:gap-x-16">
                {meta.map(({ label, value }, index) => (
                  <div
                    key={label}
                    className="flex items-center gap-8 sm:gap-16"
                  >
                    <div className="flex items-center gap-8 sm:py-8">
                      <dt className="text-body-xs sm:text-body font-medium text-white/60">
                        {label}
                      </dt>
                      <dd className="text-body-xs xs:text-body-sm sm:text-body font-medium text-white">
                        {value}
                      </dd>
                    </div>

                    {index < meta.length - 1 && (
                      <span aria-hidden className="h-20 w-px bg-white/25" />
                    )}
                  </div>
                ))}
              </dl>
            </div>

            <hr className="text-gold-300 hidden w-34 sm:block" />

            <p className="sm:text-body text-muted-foreground line-clamp-4 hidden text-[12px]/[20px] font-medium sm:block">
              {excerpt}
            </p>
          </div>

          <Button
            asChild
            variant="outline"
            className="border-gold-300 w-full text-white hover:bg-white/10 sm:w-auto"
          >
            <Link href={href}>Read More</Link>
          </Button>
        </div>
      </Section>
    </div>
  );
}
