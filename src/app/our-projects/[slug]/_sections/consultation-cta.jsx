import Image from "next/image";

import { Button } from "@/components/ui/button";
import Section from "@/components/ui/section";

import ConsultationBgMobile from "@/assets/images/team/consultation-bg-mobile.webp";
import ConsultationBg from "@/assets/images/team/consultation-bg.webp";
import ConsultationBadgeMobile from "@/assets/images/team/consultion-badge-mobile.webp";
import ConsultationBadge from "@/assets/images/team/consultion-badge.webp";

const DESCRIPTION =
  "Our team offers clients a license of various floorplans and modifications to choose from. Learn more about our licensing options in Tricity Region.";

export default function ConsultationCtaSection() {
  return (
    <Section
      bg="dark"
      spacing="none"
      className="bg-[#001B2E] bg-cover bg-center bg-no-repeat py-32 lg:bg-(image:--bg-desktop) lg:py-64"
      style={{
        "--bg-mobile": `url(${ConsultationBgMobile.src})`,
        "--bg-desktop": `url(${ConsultationBg.src})`,
      }}
    >
      <div className="flex flex-col gap-24 md:flex-row md:items-center lg:justify-between lg:gap-32 xl:gap-64">
        <div className="w-full lg:max-w-680">
          <h2 className="mt-8 text-[32px]/[42px] font-medium text-white sm:text-[40px]/[48px] md:text-[46px]/[58px] xl:text-[64px]/[72px]">
            Interested in buying a{" "}
            <span className="text-gold-300 font-serif italic">
              residence or space?
            </span>
          </h2>

          <hr className="my-8 h-1 w-34 border-0 bg-[#EBC37F] lg:my-16" />

          <p className="text-[12px]/[18px] font-medium text-[rgba(255,255,255,0.60)] sm:text-[16px]/[24px] lg:text-[22px]/[30px]">
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
          src={ConsultationBadgeMobile}
          alt="Kapuria Developers, established 2023"
          className="w-full md:hidden"
        />

        <Image
          src={ConsultationBadge}
          alt="Kapuria Developers, established 2023"
          className="hidden md:block lg:shrink-0"
          width={400}
          height={517}
        />
      </div>
    </Section>
  );
}
