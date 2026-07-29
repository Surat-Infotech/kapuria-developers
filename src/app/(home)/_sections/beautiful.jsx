import Image from "next/image";
import Link from "next/link";

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
            <h2 className="lg:text-display text-[32px]/[40px] text-white sm:text-[48px]/[56px]">
              Before its beautiful{" "}
              <span className="font-playfair text-gold-300 italic">
                it&rsquo;s tested.
              </span>
            </h2>

            <hr className="text-gold-300 w-34" />

            <p className="md:text-body sm:text-body-sm text-[12px]/[18px] text-white/60">
              Before a Kapuria property is beautiful, it is tested. Soil
              studies, load calculations, seismic-resistant framing, and a
              115-point inspection process happen long before the first finish
              goes on - because the parts of a home that matter most are the
              ones you&rsquo;ll never see. What you will see is a property
              designed for light, air, and calm, on land that&rsquo;s
              appreciating as fast as the city around it.
            </p>
          </div>

          <Button asChild variant="secondary" className="w-full sm:w-auto">
            <Link href="">Schedule Consultation</Link>
          </Button>
        </div>

        <Image
          src={workingConstruction}
          alt="Kapuria site team at work during construction"
          width={458}
          height={579}
          className="w-full shrink-0 rounded-xl object-cover lg:w-458"
        />
      </div>
    </Section>
  );
}
