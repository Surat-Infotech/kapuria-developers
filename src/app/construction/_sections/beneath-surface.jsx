import Image from "next/image";

import Section from "@/components/ui/section";

import beneathSurface from "@/assets/images/construction/beneath-surface.webp";

const KICKER = "FOUNDATIONS";

const LEAD =
  "We design our foundations only after detailed soil testing and accurate load calculations.";

const DESCRIPTION =
  "Before a single line of the design is drawn, we verify the soil’s bearing capacity, plan the site’s levelling and drainage, complete anti-termite treatment, and mark the boundaries precisely. The excavation is cut to drawing, properly supported, and compacted to a solid base. Only once we fully understand the ground do we begin to build on it — because everything else rests on what lies underneath.";

export default function BeneathSurfaceSection() {
  return (
    <Section bg="none" spacing="none" className="bg-[#FAF6F2] py-32 md:py-50">
      {/* Artwork leads in both layouts — stacked on mobile, left column at `md`. */}
      <div className="flex flex-col gap-24 md:flex-row md:items-center lg:justify-between lg:gap-32 xl:gap-64">
        {/* The cutaway is a cut-out with its own transparency, so it sits on the
            cream without a card or frame. */}
        <Image
          src={beneathSurface}
          alt="A cutaway model showing a Kapuria home resting on its soil layers"
          width={456}
          height={534}
          priority={false}
          className="aspect-343/366 w-full object-contain md:aspect-auto md:h-534 md:max-w-456 lg:shrink-0"
        />

        <div className="w-full lg:max-w-620">
          <p className="text-foreground text-[12px]/[18px] font-medium tracking-[2.4px] sm:text-[14px]/[22px] sm:tracking-[2.52px]">
            {KICKER}
          </p>

          <h2 className="text-foreground mt-8 text-[32px]/[40px] font-medium sm:text-[40px]/[48px] md:text-[46px]/[58px] lg:text-[64px]/[72px]">
            We begin beneath
            <span className="text-gold-400 font-playfair block italic">
              the surface.
            </span>
          </h2>

          <hr className="text-gold-400 my-8 w-34 lg:my-16" />

          <p className="text-foreground text-[12px]/[18px] font-medium lg:text-[16px]/[24px]">
            {LEAD}
          </p>

          <p className="mt-8 text-[12px]/[18px] font-medium text-[rgba(8,34,53,0.60)] lg:mt-16 lg:text-[16px]/[24px]">
            {DESCRIPTION}
          </p>
        </div>
      </div>
    </Section>
  );
}
