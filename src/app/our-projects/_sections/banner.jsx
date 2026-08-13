import Image from "next/image";

import Section from "@/components/ui/section";

import bannerMobile from "@/assets/images/our-projects/project-banner-mobile.webp";
import banner from "@/assets/images/our-projects/project-banner.webp";

export default function BannerSection() {
  return (
    <div className="relative">
      <Image
        src={banner}
        alt="Our Projects Banner"
        width="100%"
        height="100%"
        className="hidden h-screen w-full object-cover min-[700px]:block"
      />
      <Image
        src={bannerMobile}
        alt="Our Projects Banner"
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
              Take a look at{" "}
              <span className="font-playfair text-gold-300 italic">
                our projects
              </span>
            </h1>
            <hr className="text-gold-300 my-14 w-34" />
            <p className="md:text-body sm:text-body-sm text-body-xs mb-0 text-white">
              Peruse are projects from all over the world.
            </p>
          </div>
        </div>
      </Section>
    </div>
  );
}
