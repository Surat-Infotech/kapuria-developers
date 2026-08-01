import Image from "next/image";

import Section from "@/components/ui/section";

import ourLocation from "@/assets/images/our-projects/our-location.webp";

const EYEBROW = "Our Reach";

const DESCRIPTION =
  "Building timeless homes and communities with local expertise and global standards.";

export default function OurLocationSection() {
  return (
    <Section spacing="none" className="py-32 md:py-60 lg:py-128">
      <p className="text-eyebrow text-gold-400 mb-8 hidden font-medium uppercase lg:block">
        {EYEBROW}
      </p>

      <div className="mb-24 flex flex-col items-start text-left md:mb-40 lg:mb-64">
        <h2 className="lg:text-display max-w-xl text-[32px]/[40px] font-medium min-[426px]:text-[40px]/[48px] md:text-[48px]/[56px]">
          Crafting{" "}
          <span className="font-playfair text-gold-400 italic">
            Spaces Worldwide
          </span>
        </h2>

        {/* Gold rule — the recurring 34px divider under every section heading */}
        <hr className="text-gold-400 my-8 block w-34 lg:my-16" />

        <p className="text-body-xs sm:text-body text-navy-800/60 font-medium">
          {DESCRIPTION}
        </p>
      </div>

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
