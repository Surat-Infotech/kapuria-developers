import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import Section from "@/components/ui/section";

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
          </div>
        </div>
      </Section>
    </div>
  );
}
