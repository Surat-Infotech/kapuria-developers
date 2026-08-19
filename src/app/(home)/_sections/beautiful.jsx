import Image from "next/image";
import Link from "next/link";

import { ROUTES } from "@/lib/route";

import { Button } from "@/components/ui/button";
import Section from "@/components/ui/section";

import constructionBackground from "@/assets/images/home/construction-background.webp";
import workingConstruction from "@/assets/images/home/working-construction.webp";

export default function Beautiful() {
  return (
    <Section spacing="default" bg="dark" className="relative overflow-hidden">
      {/* Blueprint linework — sits behind the copy, right-aligned */}
      <Image
        src={constructionBackground}
        alt="Construction Background"
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 h-full w-auto max-w-none"
      />

      <div className="relative flex flex-col-reverse items-center gap-40 md:flex-col lg:flex-row lg:gap-64">
        <div className="flex w-full flex-col items-start gap-24 lg:w-618">
          <div className="flex w-full flex-col items-start gap-16">
            <h2 className="lg:text-display text-[32px]/[40px] font-medium text-white sm:text-[48px]/[56px]">
              Before its beautiful{" "}
              <span className="font-playfair text-gold-300 italic">
                it&rsquo;s tested.
              </span>
            </h2>

            <hr className="text-gold-300 w-34" />

            <p className="md:text-body sm:text-body-sm text-body-xs font-medium text-white/60">
              We develop residential and commercial properties that combine
              structural excellence, meticulous craftsmanship, and enduring
              quality. Every project is built to perform, endure, and inspire
              confidence for generations to come.
            </p>
          </div>

          <Button asChild variant="secondary" className="w-full sm:w-auto">
            <Link href={ROUTES.CONTACT}>Schedule Consultation</Link>
          </Button>
        </div>

        <Image
          src={workingConstruction}
          alt="Kapuria site team at work during construction"
          width={458}
          height={579}
          className="w-full max-w-458 shrink-0 rounded-xl object-cover lg:w-458"
        />
      </div>
    </Section>
  );
}
