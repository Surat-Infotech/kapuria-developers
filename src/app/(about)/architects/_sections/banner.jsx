import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import Section from "@/components/ui/section";

import bannerMobile from "@/assets/images/architects/architect-banner-mobile.webp";
import banner from "@/assets/images/architects/architect-banner.webp";
import mouseScroll from "@/assets/images/home/svg/mouse-scroll.svg";

export default function BannerSection() {
  return (
    <div className="relative">
      <Image
        src={banner}
        alt="architects banner"
        width="100%"
        height="100%"
        className="hidden h-screen w-full object-cover min-[700px]:block"
      />
      <Image
        src={bannerMobile}
        alt="architects banner"
        width="100%"
        height="100%"
        className="w-full object-cover min-[508px]:h-screen min-[700px]:hidden"
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
            <p className="md:text-body sm:text-body-sm text-body-xs mb-0 text-white">
              Curating premium residential and commercial properties across the
              globe, backed by a 115-point quality promise, a 10-year structural
              warranty, and a philosophy that values substance over shine.
            </p>
          </div>
        </div>

        <a
          href="#architect-profiles"
          aria-label="Scroll to next section"
          className="mx-auto mt-24 hidden w-fit rounded-full transition-opacity duration-200 hover:opacity-70 focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:outline-none sm:block"
        >
          <Image
            src={mouseScroll}
            alt="Mouse Scroll"
            width={29}
            height={56}
            className="animate-scroll-bob h-56 w-29"
          />
        </a>
      </Section>
    </div>
  );
}
