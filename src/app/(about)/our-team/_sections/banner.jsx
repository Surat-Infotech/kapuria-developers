import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import Section from "@/components/ui/section";

import mouseScroll from "@/assets/images/home/svg/mouse-scroll.svg";
import bannerMobile from "@/assets/images/team/team-banner-mobile.webp";
import banner from "@/assets/images/team/team-banner.webp";

export default function BannerSection() {
  return (
    <div className="relative">
      <Image
        src={banner}
        alt="Home Banner"
        width="100%"
        height="100%"
        className="hidden w-full min-[700px]:block md:h-732 lg:h-auto"
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
          <div>
            <h1 className="lg:text-display text-[32px]/[40px] font-medium text-white min-[426px]:text-[40px]/[48px] md:text-[48px]/[56px]">
              We don't build structures.
              <br />
              <span className="font-playfair text-gold-300 italic">
                We build a place where life happens.
              </span>
            </h1>
            <hr className="text-gold-300 my-14 w-34" />
            <p className="md:text-body sm:text-body-sm text-body-xs mb-0 font-medium text-white">
              Walk through any building we've made, and you'll find it holding
              more than walls - first steps near a doorway, a deal closed in a
              corner office, the quiet routines of an ordinary day. The spaces
              people live and work in carry more of their story than almost
              anything else they own. <br /> <br /> So they should be the
              strongest thing you own, too. <br /> That belief is where Kapuria
              Developers begins.
            </p>

            {/* Scroll cue — mouse body plus the chevron below it, one asset.
            Anchors to the next section so it works without client JS. */}
            <a
              href="#managing-director"
              aria-label="Scroll to next section"
              className="mx-auto mt-24 hidden w-fit rounded-full transition-opacity duration-200 hover:opacity-70 focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:outline-none sm:block"
            >
              <Image
                src={mouseScroll}
                alt="Mouse scroll"
                width={29}
                height={56}
                className="animate-scroll-bob h-56 w-29"
              />
            </a>
          </div>
        </div>
      </Section>
    </div>
  );
}
