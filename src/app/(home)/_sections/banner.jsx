import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import Section from "@/components/ui/section";

import circluarMotion from "@/assets/images/home/circluar-motion.webp";
import bannerMobile from "@/assets/images/home/home-banner-mobile.webp";
import banner from "@/assets/images/home/home-banner.webp";

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
        className="min-[700px]:hidden"
      />
      <Section
        bg="transparent"
        spacing="none"
        className="absolute bottom-64 w-full"
      >
        <div className="flex w-full items-end justify-between">
          <div className="max-w-581">
            <h1 className="lg:text-display text-[32px]/[40px] font-medium text-white sm:text-[48px]/[56px]">
              Built to a Standard
              <br />
              <span className="font-playfair text-gold-300 italic">
                you can verify
              </span>
            </h1>
            <hr className="text-gold-300 my-14 w-34" />
            <p className="md:text-body sm:text-body-sm text-body-xs mb-24 font-medium text-white">
              Curating premium residential and commercial properties across the
              globe, backed by a 115-point quality promise, a 10-year structural
              warranty, and a philosophy that values substance over shine.
            </p>
            <Button asChild variant="secondary" className="w-full sm:w-auto">
              <Link href="">VIEW OUR WORK</Link>
            </Button>
          </div>

          <div>
            <Image
              src={circluarMotion}
              alt="Circluar Motion"
              width={175}
              height={176}
              className="hidden md:block"
            />
          </div>
        </div>
      </Section>
    </div>
  );
}
