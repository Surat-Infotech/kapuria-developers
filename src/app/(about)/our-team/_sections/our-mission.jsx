import Image from "next/image";

import Section from "@/components/ui/section";

import KapuriaBadge from "@/assets/images/team/kapuria-badge.webp";
import CheckIcon from "@/assets/svgs/common/check";

const EYEBROW = "Our Mission";

const MISSION =
  "Our mission is to craft residences of uncompromising structural integrity, built with responsible materials and timeless design. Every space we deliver is verified before it is ever admired.";

const PILLARS = [
  {
    label: "Tested",
    detail:
      "Soil, load and structure, checked before a single line is designed.",
  },
  {
    label: "Audited",
    detail: "Across 115 inspection checkpoints, signed off in stages.",
  },
  {
    label: "Warranted",
    detail: "Backed by a signed 10-year structural guarantee.",
  },
];

export default function OurMissionSection() {
  return (
    <Section
      spacing="default"
      className="bg-navy-700 py-32 lg:py-64"
      classNames={{ container: "lg:px-24" }}
    >
      <div className="flex flex-col items-center gap-24 lg:flex-row lg:items-center lg:gap-36">
        {/* The gold coin and ring are baked into the artwork. */}
        <Image
          src={KapuriaBadge}
          width={429}
          height={411}
          alt="Kapuria Developers, established 2023"
          className="w-full max-w-315 shrink-0 lg:max-w-429"
        />

        <div className="w-full">
          <p className="text-gold-300 text-body-sm font-medium tracking-[2.52px] uppercase">
            {EYEBROW}
          </p>

          <h2 className="mt-8 text-[30px]/[38px] font-medium tracking-[-0.9px] text-white lg:text-[35px]/[44px] lg:tracking-normal">
            We don&rsquo;t ask for trust &ndash; we hand you the{" "}
            <span className="text-gold-300 font-serif italic">proof.</span>
          </h2>

          {/* Rule sits under the eyebrow on mobile only. */}
          <hr className="text-gold-400 my-10 w-34 md:my-16" />

          <p className="text-body-xs md:text-body mb-24 font-medium text-[rgba(255,255,255,0.60)]">
            {MISSION}
          </p>
          <div className="grid grid-cols-1 gap-24 md:grid-cols-3">
            {PILLARS.map(({ label, detail }) => (
              <div
                key={label}
                className="border-t border-[#EBC37F] pt-8 md:pt-14"
              >
                <h3 className="text-body-sm flex items-center gap-8 font-medium tracking-[2.52px] text-[#F2F5FA] uppercase">
                  <CheckIcon className="text-gold-300 shrink-0" />
                  {label}
                </h3>

                <p className="md:text-body-xs text-body-sm mt-8 font-normal text-[#B8C4D4]">
                  {detail}
                </p>
              </div>
            ))}
          </div>

          <p className="text-body-xs md:text-body mt-24 font-medium text-[rgba(255,255,255,0.60)]">
            We don&rsquo;t ask families to take our word for it.{" "}
            <span className="text-white">We hand them the proof.</span>
          </p>
        </div>
      </div>
    </Section>
  );
}
