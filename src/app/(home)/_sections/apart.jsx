import Image from "next/image";

import { cn } from "@/lib/utils";

import Section from "@/components/ui/section";

import bestGreenIcon from "@/assets/images/home/svg/best-green.svg";
import checklistIcon from "@/assets/images/home/svg/checklist.svg";
import experiencedProfessionalsIcon from "@/assets/images/home/svg/experienced-professionals.svg";
import playIcon from "@/assets/images/home/svg/play.svg";
import scientificVastuIcon from "@/assets/images/home/svg/scientific-vastu.svg";
import seepageProtectionIcon from "@/assets/images/home/svg/seepage-protection.svg";
import warrantyIcon from "@/assets/images/home/svg/warranty.svg";
import videoCover from "@/assets/images/home/video-cover.webp";

// `order` drives the mobile (2-column) sequence only — it is reset at `lg`,
// where the 3-column grid follows this array's natural order.
const FEATURES = [
  {
    icon: warrantyIcon,
    // `key` is the stable identity; `title` may carry markup for line breaks.
    key: "10 Year Warranty",
    title: (
      <>
        10 Year <br className="hidden lg:block" /> Warranty
      </>
    ),
    description:
      "We back our engineering with a decade-long commitment, post-handover.",
    order: "order-1 sm:order-1",
  },
  {
    icon: checklistIcon,
    key: "115-Point Quality Checklist",
    title: "115-Point Quality Checklist",
    description:
      "Every property is inspected across structural stability, finishing, waterproofing, materials, and safety and documented.",
    order: "order-3 sm:order-2",
  },
  {
    icon: seepageProtectionIcon,
    key: "Advanced Seepage Protection",
    title: "Advanced Seepage Protection",
    description:
      "Multi-layer waterproofing systems, tested in every water-prone area before handover.",
    order: "order-4 sm:order-3",
  },
  {
    icon: bestGreenIcon,
    key: "Best Green Practices",
    title: "Best Green Practices",
    description:
      "Rainwater harvesting, natural ventilation, and energy-efficient design, built in from day one.",
    order: "order-6 sm:order-4",
  },
  {
    icon: scientificVastuIcon,
    key: "Scientific Vastu",
    title: (
      <>
        Scientific <br className="hidden lg:block" /> Vastu
      </>
    ),
    description:
      "Traditional spatial wisdom, validated by architectural science.",
    order: "order-2 sm:order-5",
  },
  {
    icon: experiencedProfessionalsIcon,
    key: "Experienced Professionals",
    title: "Experienced Professionals",
    description:
      "Senior architects, structural consultants, Vastu experts, sustainability planners, and engineers - on every project, not just the flagship ones.",
    order: "order-5 sm:order-6",
  },
];

export default function ApartSection() {
  return (
    <Section spacing="default">
      <h2 className="lg:text-display-sm mb-32 text-center text-[32px]/[40px] sm:text-[40px]/[48px] md:hidden">
        What <span className="font-playfair text-gold-400 italic">sets</span> us
        apart?
      </h2>
      <div className="relative overflow-hidden rounded-3xl lg:rounded-[54px]">
        <Image
          src={videoCover}
          alt="A Kapuria residence lit at dusk"
          width={1140}
          height={613}
          className="h-full w-full object-cover"
        />

        <div
          aria-hidden
          className="absolute inset-0 bg-[linear-gradient(106.31deg,rgba(0,0,0,0.5)_17.9%,rgba(0,0,0,0.315)_39.9%,rgba(0,0,0,0.24)_44.9%,rgba(0,0,0,0.195)_57.6%,rgba(0,0,0,0)_64.6%)]"
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center gap-40 px-16 md:justify-start lg:gap-96 lg:pt-114">
          <h2 className="lg:text-display-sm hidden text-center text-[24px]/[32px] text-white sm:text-[40px]/[48px] md:block">
            What{" "}
            <span className="font-playfair text-gold-400 italic">sets</span> us
            apart?
          </h2>

          <button
            type="button"
            aria-label="Play video"
            className="flex min-h-32 min-w-32 cursor-pointer items-center justify-center rounded-[112px] border border-[#6B6B6B] bg-[rgba(54,54,54,0.1)] backdrop-blur-[13.964285850524902px] lg:h-112 lg:w-112"
          >
            <div className="flex items-center justify-center sm:h-52 sm:w-52">
              <Image
                src={playIcon}
                alt="Play Icon"
                width={40}
                height={40}
                className="ms-4 h-12 w-12 sm:ms-8 sm:h-20 sm:w-20 md:h-full md:w-full"
              />
            </div>
          </button>
        </div>
      </div>

      <div className="mt-32 grid grid-cols-2 gap-x-16 gap-y-24 sm:mt-64 md:mt-120 lg:grid-cols-3 lg:gap-y-64">
        {FEATURES.map(({ icon, key, title, description, order }) => (
          <div
            key={key}
            className={cn(
              "flex flex-col items-center gap-8 sm:gap-16 md:gap-20 lg:order-0",
              order
            )}
          >
            <Image
              src={icon}
              alt=""
              width={70}
              height={70}
              className="h-56 w-56 shrink-0 object-contain sm:h-70 sm:w-70"
            />

            <div className="flex flex-col items-center gap-8 text-center">
              <h3 className="text-body sm:text-h5 text-navy-800 max-w-242">
                {title}
              </h3>
              <p className="xs:text-body-sm text-navy-800/60 text-[12px]/[18px] font-medium">
                {description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
