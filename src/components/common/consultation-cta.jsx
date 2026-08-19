import Image from "next/image";
import Link from "next/link";

import { ROUTES } from "@/lib/route";
import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import Section from "@/components/ui/section";

import ConsultationBg from "@/assets/images/team/consultation-bg.webp";
import ConsultationBadge from "@/assets/images/team/consultion-badge.webp";

// The kicker reads two ways across the site: a gold spaced label ("OUR
// MISSION"), or a muted sentence that italicises on mobile only.
const KICKER_STYLES = {
  label: "text-gold-300 text-body-sm font-medium tracking-[2.52px] uppercase",
  sentence:
    "text-body font-medium text-[rgba(255,255,255,0.60)] italic sm:text-[18px]/[26px] md:text-[22px]/[30px] lg:not-italic",
};

/**
 * Dark CTA band: copy on the left, the gold coin on the right.
 *
 * The artwork is fixed — every page shows the same coin and backdrop — so only
 * the copy varies. `heading` and `accent` are separate because the accent half
 * is always set in gold serif italic.
 *
 * @param {string} [kicker] Small line above the heading. Omitted when absent.
 * @param {"label"|"sentence"} [kickerVariant] Gold spaced label, or muted sentence.
 * @param {React.ReactNode} heading Upright first half of the headline.
 * @param {React.ReactNode} accent Gold italic second half.
 * @param {string} description Body copy under the rule.
 * @param {React.ReactNode} [button] Pass `false` to drop the button entirely.
 * @param {string} [className] Extra classes for the left column (e.g. width).
 * @param {string} [headingClassName] Extra classes for the headline.
 */
export default function ConsultationCta({
  kicker,
  kickerVariant = "sentence",
  heading,
  accent,
  description,
  button,
  className = "lg:max-w-638",
  headingClassName = "",
}) {
  return (
    <Section
      spacing="none"
      className="bg-(image:--bg-desktop) bg-cover bg-center bg-no-repeat py-32 sm:py-64 lg:py-156"
      style={{
        "--bg-desktop": `url(${ConsultationBg.src})`,
      }}
    >
      <div className="flex flex-col gap-24 md:flex-row md:items-center lg:justify-between lg:gap-32 xl:gap-64">
        <div className={cn("w-full", className)}>
          {kicker ? (
            <p className={KICKER_STYLES[kickerVariant]}>{kicker}</p>
          ) : null}

          <h2
            className={cn(
              "lg:text-display mt-8 text-[32px]/[42px] font-medium text-white sm:text-[40px]/[48px] md:text-[46px]/[58px]",
              headingClassName
            )}
          >
            {heading}{" "}
            <span className="text-gold-300 font-serif italic">{accent}</span>
          </h2>

          <hr className="text-gold-300 my-8 w-34 lg:my-16" />

          <p className="text-body-xs sm:text-body font-medium text-[rgba(255,255,255,0.60)] lg:text-[18px]/[26px]">
            {description}
          </p>

          {button === false ? null : (
            <Button
              asChild
              variant="secondary"
              className="mt-24 w-full gap-8 sm:mt-36 sm:w-auto"
            >
              <Link href={ROUTES.CONTACT}>
                Schedule <span className="hidden lg:inline">a</span>
                Consultation
              </Link>
            </Button>
          )}
        </div>

        <Image
          src={ConsultationBadge}
          alt="Kapuria Developers, established 2023"
          className="mx-auto block size-250 sm:h-350 sm:w-336 lg:shrink-0"
          width={438}
          height={487}
        />
      </div>
    </Section>
  );
}
