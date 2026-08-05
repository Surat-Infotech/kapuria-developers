import Image from "next/image";

import Section from "@/components/ui/section";

import approach from "@/assets/images/construction/over-approach.webp";

const KICKER = "OUR APPROACH";

const DESCRIPTION =
  "We follow advanced construction methods designed for structural balance, load optimisation, long-term settlement control, and resistance to environmental stress — engineering every element with future resilience in mind.";

export default function OurApproachSection() {
  return (
    <Section
      bg="none"
      spacing="none"
      className="bg-[#071521] py-32 sm:py-64 md:py-100 lg:py-203"
      id="our-approach"
    >
      {/* Reversed on mobile so the artwork leads; at `md` the text takes the
          left column again. */}
      <div className="flex flex-col-reverse gap-24 md:flex-row md:items-center lg:justify-between lg:gap-32 xl:gap-64">
        <div className="w-full lg:max-w-558">
          <p className="text-[14px]/[22px] font-medium tracking-[2.52px] text-[#EBC37F]">
            {KICKER}
          </p>

          <h2 className="mt-8 text-[32px]/[40px] font-medium text-white sm:text-[40px]/[48px] md:text-[46px]/[58px] lg:text-[64px]/[72px]">
            How we{" "}
            <span className="text-gold-300 font-playfair italic">build.</span>
          </h2>

          <hr className="text-gold-300 my-8 w-34 lg:my-16" />

          <p className="text-[12px]/[18px] font-medium text-white/60 lg:text-[16px]/[24px]">
            {DESCRIPTION}
          </p>
        </div>

        <Image
          src={approach}
          alt="A Kapuria Developers slab lifted into place by crane"
          width={456}
          height={534}
          className="aspect-343/366 w-full rounded-xl object-cover md:aspect-auto md:h-414 md:max-w-450 lg:max-w-518 lg:shrink-0"
        />
      </div>
    </Section>
  );
}
