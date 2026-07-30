import Image from "next/image";

import { EXTERNAL_ROUTES, ROUTES } from "@/lib/route";
import { cn } from "@/lib/utils";

import Section from "@/components/ui/section";

import RachitInfoBgMobile from "@/assets/images/architects/rachit-info-bg-mobile.webp";
import RachitInfoBg from "@/assets/images/architects/rachit-info-bg.webp";
import RachitMalhotraMobile from "@/assets/images/architects/rachit-malhotra-mobile.webp";
import RachitMalhotra from "@/assets/images/architects/rachit-malhotra.webp";
import RachitStudio from "@/assets/images/architects/rachit-studio.webp";
import VikramPannuMobile from "@/assets/images/architects/vikram-pannu-mobile.webp";
import VikramPannu from "@/assets/images/architects/vikram-pannu.webp";
import GlobeIcon from "@/assets/svgs/social/globe";
import InstagramIcon from "@/assets/svgs/social/instagram";
import XIcon from "@/assets/svgs/social/x";
import YoutubeIcon from "@/assets/svgs/social/youtube";

const KICKER = "Architect";

// TODO: swap in each architect's own handles once they are supplied.
const SOCIALS = [
  { label: "Website", href: ROUTES.HOME, Icon: GlobeIcon },
  { label: "Instagram", href: EXTERNAL_ROUTES.INSTAGRAM, Icon: InstagramIcon },
  { label: "X", href: EXTERNAL_ROUTES.X, Icon: XIcon },
  { label: "YouTube", href: EXTERNAL_ROUTES.YOUTUBE, Icon: YoutubeIcon },
];

const ARCHITECTS = [
  {
    name: "Vikram Pannu",
    role: "Architect",
    bio: "We follow advanced construction methods designed for structural balance, load optimisation, long-term settlement control, and resistance to environmental stress — engineering every element with future resilience in mind.",
    photo: VikramPannu,
    photoMobile: VikramPannuMobile,
    className:
      "border-b-[0.5px] border-[#EBC37F] bg-[#071521] py-32 md:py-50 lg:py-88",
  },
  {
    name: "Rachit Malhotra",
    role: "Architect",
    bio: "Every plan begins with the site and the people who will live on it — orientation, daylight, airflow and privacy resolved long before a line is drawn, so that the design which follows feels inevitable rather than imposed.",
    photo: RachitMalhotra,
    photoMobile: RachitMalhotraMobile,
    studio: RachitStudio,
    reverse: true,
    className:
      "bg-[#071521] bg-(image:--bg-mobile) bg-cover bg-center bg-no-repeat py-32 lg:bg-(image:--bg-desktop) md:py-50 lg:py-88",
    style: {
      "--bg-mobile": `url(${RachitInfoBgMobile.src})`,
      "--bg-desktop": `url(${RachitInfoBg.src})`,
    },
  },
];

export default function ArchitectProfilesSection() {
  return (
    <>
      {ARCHITECTS.map(
        ({
          name,
          role,
          bio,
          photo,
          photoMobile,
          studio,
          reverse,
          className,
          style,
        }) => (
          <Section
            key={name}
            bg="dark"
            spacing="none"
            className={className}
            style={style}
          >
            <article
              className={cn(
                "mx-auto flex max-w-1075 flex-col gap-24 lg:items-center lg:gap-64",
                reverse ? "lg:flex-row-reverse" : "lg:flex-row"
              )}
            >
              <div className="shrink-0">
                <Image
                  src={photo}
                  alt={`${name}, ${role}`}
                  className="hidden max-w-449 lg:block"
                />
                <Image
                  src={photoMobile}
                  alt={`${name}, ${role}`}
                  className="mx-auto w-full max-w-350 lg:hidden"
                />
              </div>

              <div className="lg:max-w-558">
                {/* Tracking is 2.52px here, off the shared `text-eyebrow`
                  preset, and desktop sets it bold where mobile stays medium. */}
                <p className="text-gold-300 text-[14px]/[22px] font-medium tracking-[2.52px] uppercase lg:font-bold">
                  {KICKER}
                </p>

                {/* Mobile tightens the name by -0.96px; desktop sets it normal. */}
                <h2 className="mt-8 text-[32px]/[40px] font-medium tracking-[-0.96px] text-white sm:text-[36px]/[42px] md:text-[42px]/[54px] lg:text-[48px]/[60px] lg:tracking-normal">
                  {name}
                </h2>

                {/* Deeper gold than the kicker, and tracked in on mobile only. */}
                <p className="font-serif text-[26px]/[34px] font-medium tracking-[-0.78px] text-[#DFB367] italic sm:text-[28px]/[36px] md:text-[32px]/[40px] lg:text-[36px]/[44px] lg:tracking-normal">
                  {role}
                </p>

                {/* Gold rule — the recurring 34px divider under every heading */}
                <span
                  aria-hidden
                  className="bg-gold-300 my-11 block h-1 w-34 lg:my-16"
                />

                {/* Mobile carries the extra weight; desktop drops back to 400. */}
                <p className="text-[12px]/[18px] font-medium text-[rgba(255,255,255,0.60)] sm:text-[16px]/[24px] lg:font-normal">
                  {bio}
                </p>

                {studio && (
                  <Image
                    src={studio}
                    alt={`${name}'s studio`}
                    className="mt-8"
                  />
                )}

                <ul className="mt-8 flex items-center gap-20 md:mt-16">
                  {SOCIALS.map(({ label, href, Icon }) => (
                    <li key={label}>
                      <a
                        href={href}
                        target="_blank"
                        rel="noreferrer noopener"
                        aria-label={`${name} on ${label}`}
                        className="hover:text-gold-300 block text-white transition-colors duration-200"
                      >
                        <Icon className="size-24" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </Section>
        )
      )}
    </>
  );
}
