"use client";

import Image from "next/image";

import { cn } from "@/lib/utils";

import Section from "@/components/ui/section";

import bestGreenIcon from "@/assets/images/home/svg/best-green.svg";
import checklistIcon from "@/assets/images/home/svg/checklist.svg";
import experiencedProfessionalsIcon from "@/assets/images/home/svg/experienced-professionals.svg";
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
    <Section spacing="lg" className="py-32 sm:py-64 lg:py-120">
      <h2 className="lg:text-display-sm mb-32 text-center text-[32px]/[40px] font-medium sm:text-[40px]/[48px]">
        What <span className="font-playfair text-gold-400 italic">sets</span> us
        apart?
      </h2>
      <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl md:rounded-[54px]">
        {/* Muted is what makes the autoplay stick — browsers block an unmuted
            autoplay, and without controls there is no way back from that. */}
        <video
          src="/videos/home/kd-video.webm"
          poster={videoCover.src}
          autoPlay
          muted
          loop
          playsInline
          className="aspect-1140/613 h-full w-full bg-black object-cover"
        />
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
              alt={key}
              width={70}
              height={70}
              className="h-56 w-56 shrink-0 object-contain sm:h-70 sm:w-70"
            />

            <div className="flex flex-col items-center gap-8 text-center">
              <h3 className="text-body sm:text-h5 text-navy-800 max-w-242 font-medium">
                {title}
              </h3>
              <p className="xs:text-body-sm text-navy-800/60 text-body-xs font-medium">
                {description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
