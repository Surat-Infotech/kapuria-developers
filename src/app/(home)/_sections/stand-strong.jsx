import Image from "next/image";

import Section from "@/components/ui/section";

import strongConstruction from "@/assets/images/home/strong-construction.webp";

export default function StandStrong() {
  return (
    <Section bg="raised" className="relative overflow-hidden py-32 md:py-0">
      <div className="relative flex flex-col items-center gap-36 md:flex-row xl:gap-64">
        <Image
          src={strongConstruction}
          alt="A wrecking ball striking a Kapuria building that stands intact"
          width={610}
          height={691}
          className="min-[1300px]:-ml-100 min-[1400px]:-ml-150 xl:shrink-0"
        />

        <div className="flex w-full flex-col items-start gap-16 lg:w-647">
          <h2 className="lg:text-display text-[32px]/[40px] sm:text-[48px]/[56px] md:text-[40px]/[50px]">
            Built to stand strong{" "}
            <span className="font-playfair text-gold-400 italic">
              for generations
            </span>
          </h2>

          <hr className="text-gold-400 w-34" />

          <p className="lg:text-body sm:text-body-sm text-navy-800/60 text-[12px]/[18px]">
            We develop residential and commercial properties that combine
            structural excellence, meticulous craftsmanship, and enduring
            quality. Every project is built to perform, endure, and inspire
            confidence for generations to come.
          </p>
        </div>
      </div>
    </Section>
  );
}
