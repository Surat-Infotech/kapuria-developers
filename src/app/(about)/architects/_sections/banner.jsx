import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import Section from "@/components/ui/section";

import bannerMobile from "@/assets/images/architects/architect-banner-mobile.webp";
import banner from "@/assets/images/architects/architect-banner.webp";

export default function BannerSection() {
  return (
    <div className="relative">
      <Image
        src={banner}
        alt="Home Banner"
        width="100%"
        height="100%"
        className="hidden w-full min-[700px]:block"
      />
      <Image
        src={bannerMobile}
        alt="Home Banner"
        width="100%"
        height="100%"
        className="w-full min-[700px]:hidden"
      />
      <Section
        bg="transparent"
        spacing="none"
        className="absolute bottom-32 w-full min-[700px]:bottom-64"
      >
        <div className="flex w-full items-end justify-between">
          <div className="lg:max-w-958">
            <h1 className="lg:text-display text-[32px]/[40px] text-white min-[426px]:text-[40px]/[48px] md:text-[48px]/[56px]">
              Architects{" "}
              <span className="font-playfair text-gold-300 italic">Page.</span>
            </h1>
            <hr className="text-gold-300 my-14 w-34" />
            <p className="md:text-body sm:text-body-sm mb-0 text-[12px]/[18px] text-white">
              Curating premium residential and commercial properties across the
              globe, backed by a 115-point quality promise, a 10-year structural
              warranty, and a philosophy that values substance over shine.
            </p>
          </div>
        </div>
      </Section>
    </div>
  );
}
