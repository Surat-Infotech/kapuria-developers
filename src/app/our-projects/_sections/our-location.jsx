import Image from "next/image";

import Section from "@/components/ui/section";
import SectionHeader from "@/components/ui/section-header";

import ourLocation from "@/assets/images/our-projects/our-location.webp";

const EYEBROW = "Our Reach";

const DESCRIPTION =
  "Building timeless homes and communities with local expertise and global standards.";

export default function OurLocationSection() {
  return (
    <Section spacing="none" className="py-32 md:py-60 lg:py-128">
      <p className="text-eyebrow text-gold-400 mb-8 hidden uppercase lg:block">
        {EYEBROW}
      </p>

      <SectionHeader
        className="mb-24 md:mb-40 lg:mb-64"
        heading={
          <>
            Crafting{" "}
            <span className="font-playfair text-gold-400 italic">
              Spaces Worldwide
            </span>
          </>
        }
        classNames={{
          heading:
            "text-[32px]/[40px] font-medium min-[426px]:text-[40px]/[48px] md:text-[48px]/[56px] lg:text-display",
          rule: "mt-8 lg:mt-16",
          description:
            "mt-8 text-body-xs font-normal text-[rgba(8,34,53,0.60)] sm:text-body lg:mt-16",
        }}
        description={DESCRIPTION}
      />

      {/* The plate is sized to the container, so it renders at its native
          ratio — no crop, which a map can't afford. */}
      <div className="overflow-hidden rounded-xl border border-[rgba(235,195,127,0.40)] md:rounded-[25px] lg:border-5">
        <Image
          src={ourLocation}
          alt="Map of the regions Kapuria Developers builds in — India, the UAE and Greece"
          className="w-full"
        />
      </div>
    </Section>
  );
}
