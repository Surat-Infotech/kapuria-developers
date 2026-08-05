import Image from "next/image";

import Section from "@/components/ui/section";

import bannerMobile from "@/assets/images/construction/construction-banner-mobile.webp";
import banner from "@/assets/images/construction/construction-banner.webp";
import mouseScroll from "@/assets/images/home/svg/mouse-scroll.svg";

export default function BannerSection() {
  return (
    <div className="relative">
      <Image
        src={banner}
        alt="Construction Banner"
        width="100%"
        height="100%"
        className="hidden w-full min-[700px]:block"
      />
      <Image
        src={bannerMobile}
        alt="Construction Banner"
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
            <h1 className="lg:text-display text-[32px]/[40px] tracking-[-0.96px] text-white min-[426px]:text-[40px]/[48px] md:text-[48px]/[56px] lg:tracking-[-1.92px]">
              The method behind a building that{" "}
              <span className="font-playfair text-gold-300 italic">
                lasts for generations.
              </span>
            </h1>
            <hr className="text-gold-300 my-14 w-34" />
            <p className="md:text-body sm:max-w-auto sm:text-body-sm mb-0 text-[12px]/[18px] text-white">
              Curating premium residential and commercial properties across the
              globe, backed by a 115-point quality promise, a 10-year structural
              warranty, and a philosophy that values substance over shine.
            </p>
          </div>
        </div>

        {/* Scroll cue — mouse body plus the chevron below it, one asset.
            Anchors to the next section so it works without client JS. */}
        <a
          href="#our-approach"
          aria-label="Scroll to next section"
          className="mx-auto mt-24 hidden w-fit rounded-full transition-opacity duration-200 hover:opacity-70 focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:outline-none sm:block"
        >
          <Image
            src={mouseScroll}
            alt=""
            width={29}
            height={56}
            className="animate-scroll-bob h-56 w-29"
          />
        </a>
      </Section>
    </div>
  );
}
