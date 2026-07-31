import Image from "next/image";

import Section from "@/components/ui/section";

import ConsultationBg from "@/assets/images/team/consultation-bg.webp";
import ConsultationBadge from "@/assets/images/team/consultion-badge.webp";

const KICKER = "OUR MISSION";

const DESCRIPTION =
  "We promise to build spaces that not only look luxurious, but perform exceptionally for decades - backed by a 10-year structural warranty, post-handover technical assistance, dedicated service support, and fully transparent documentation. We promise integrity in materials, precision in execution, and transparency in commitment. Because we create spaces that stand tall - architecturally, structurally, and ethically and we stand by our work long after the project is complete.";

export default function OurMission() {
  // The blurred backdrop rides as a CSS background rather than an <Image>
  // child — the section's container is width-capped, so a child could not
  // bleed across — and the URL comes in as a custom property because its
  // hashed path isn't known at build time.
  return (
    <Section
      bg="dark"
      spacing="none"
      className="bg-[#001B2E] bg-cover bg-center bg-no-repeat py-32 lg:bg-(image:--bg-desktop) lg:py-64"
      style={{
        "--bg-desktop": `url(${ConsultationBg.src})`,
      }}
    >
      <div className="flex flex-col gap-24 md:flex-row md:items-center lg:justify-between lg:gap-32 xl:gap-64">
        <div className="w-full lg:max-w-675">
          <p className="text-gold-300 text-body-sm font-medium tracking-[2.52px]">
            {KICKER}
          </p>

          <h2 className="lg:text-display mt-8 text-[32px]/[40px] font-medium text-white sm:text-[40px]/[48px] md:text-[46px]/[58px]">
            Our Promise Doesn&rsquo;t{" "}
            <span className="text-gold-300 font-playfair italic">
              End with Possession
            </span>
          </h2>

          <hr className="text-gold-300 my-16 w-34" />

          <p className="md:text-body sm:text-body-sm text-body-xs font-medium text-white/60">
            {DESCRIPTION}
          </p>
        </div>

        <Image
          src={ConsultationBadge}
          alt="Kapuria Developers, established 2023"
          className="-my-36 md:my-0 lg:shrink-0"
          width={438}
          height={487}
        />
      </div>
    </Section>
  );
}
