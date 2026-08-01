import Image from "next/image";

import Section from "@/components/ui/section";

import Portrait from "@/assets/images/team/somesh-kapuria.webp";

const NAME = "Somesh Kapuria";
const ROLE = "Managing Director";

const QUOTE =
  "For the families and businesses who come to us, a building is never just a building. It is the setting for a life, or the foundation of an enterprise. That understanding shapes everything we construct. At Kapuria Developers, we concentrate on what truly endures — sound engineering, considered design, and spaces that remain a source of confidence for years and generations to come. When someone places their trust in us, we believe that trust deserves nothing less than our very best.";

export default function ManagingDirectorSection() {
  return (
    <Section id="managing-director" spacing="lg">
      <div className="flex flex-col items-center gap-24 text-center lg:flex-row lg:gap-64 lg:text-left">
        {/* The gold circle and ring are baked into the artwork. */}
        <Image src={Portrait} alt={`${NAME}, ${ROLE}`} className="shrink-0" />

        <div>
          <h2 className="lg:text-display-sm text-[32px]/[40px] font-medium sm:text-[42px]/[50px] md:text-[52px]/[60px]">
            A word from our
            <span className="text-gold-400 block font-serif italic">
              {ROLE}
            </span>
          </h2>

          {/* Gold rule — the recurring 34px divider under every section heading */}
          <span
            aria-hidden
            className="bg-gold-400 mx-auto my-11 block h-1 w-34 lg:mx-0 lg:my-16"
          />

          <blockquote className="text-body-xs font-medium text-[rgba(8,34,53,0.60)] md:text-[14px]/[28px]">
            &ldquo;{QUOTE}&rdquo;
          </blockquote>

          <p className="text-foreground text-body-xs sm:text-body mt-8 font-medium md:text-[18px]/[36px] lg:mt-16">
            – {NAME}
            <span className="text-foreground/60">, {ROLE}</span>
          </p>
        </div>
      </div>
    </Section>
  );
}
