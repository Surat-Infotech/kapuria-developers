import Image from "next/image";

import { Button } from "@/components/ui/button";
import Section from "@/components/ui/section";

import ConsultationBgMobile from "@/assets/images/team/consultation-bg-mobile.webp";
import ConsultationBg from "@/assets/images/team/consultation-bg.webp";
import ConsultationBadgeMobile from "@/assets/images/team/consultion-badge-mobile.webp";
import ConsultationBadge from "@/assets/images/team/consultion-badge.webp";

const KICKER = "OUR MISSION";

const DESCRIPTION =
  "Visit us, meet the engineers behind your walls, and ask us anything about the process. We will gladly show you every step.";

export default function ConsultationCtaSection() {
  return (
    // The blurred backdrop swaps portrait for landscape at `sm`. It rides as a
    // CSS background — the section's container is width-capped, so an <Image>
    // child could not bleed across — and the two URLs come in as custom
    // properties because their hashed paths aren't known at build time.
    <Section
      bg="dark"
      spacing="none"
      className="bg-[#001B2E] bg-cover bg-center bg-no-repeat py-32 lg:bg-(image:--bg-desktop) lg:py-64"
      style={{
        "--bg-desktop": `url(${ConsultationBg.src})`,
      }}
    >
      <div className="flex flex-col gap-24 md:flex-row md:items-center lg:justify-between lg:gap-32 xl:gap-64">
        <div className="w-full lg:max-w-638">
          {/* Italic is a mobile-only nuance — desktop sets this line upright. */}
          <p className="text-[16px]/[24px] font-medium text-[#B8C4D4] italic lg:not-italic">
            {KICKER}
          </p>

          <h2 className="mt-8 max-w-300 text-[32px]/[42px] font-medium text-white sm:text-[40px]/[48px] md:max-w-600 md:text-[46px]/[58px] lg:text-[64px]/[72px]">
            See the method{" "}
            <span className="text-gold-300 font-serif italic">
              for yourself.
            </span>
          </h2>

          <hr className="my-8 h-1 w-34 border-0 bg-[#EBC37F] lg:my-16" />

          <p className="text-[16px]/[24px] font-medium text-[rgba(255,255,255,0.60)] lg:text-[18px]/[26px]">
            {DESCRIPTION}
          </p>

          <Button
            variant="secondary"
            size="sm"
            className="mt-24 w-full gap-0 rounded-full px-24 py-8 text-[16px]/[30px] font-medium tracking-[3.04px] sm:py-16 sm:tracking-[3.42px] md:w-auto md:text-[18px]/[30px] lg:mt-36 lg:gap-8"
          >
            {/* Desktop has room for the article; mobile drops it. */}
            Schedule <span className="hidden lg:inline">a</span>
            Consultation
          </Button>
        </div>

        {/* Mobile stacks a second coin beneath the first, so it is its own
            artwork rather than a crop of the desktop one. */}

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
