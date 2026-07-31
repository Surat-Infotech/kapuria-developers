import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import Section from "@/components/ui/section";

import brickWorkIcon from "@/assets/images/home/svg/brick-work.svg";
import electricalIcon from "@/assets/images/home/svg/electrical.svg";
import foundationFootingIcon from "@/assets/images/home/svg/foundation-footing.svg";
import plumbingIcon from "@/assets/images/home/svg/plumbing.svg";
import roofExternalIcon from "@/assets/images/home/svg/roof-external.svg";
import safetyChecksIcon from "@/assets/images/home/svg/safety-Checks.svg";
import siteSoilIcon from "@/assets/images/home/svg/site-soil.svg";
import structuralFrameIcon from "@/assets/images/home/svg/structural-frame.svg";

const CATEGORIES = [
  {
    icon: siteSoilIcon,
    title: "Site & Soil",
    description: "Soil testing, bearing capacity, drainage planning",
  },
  {
    icon: brickWorkIcon,
    title: "Brickwork",
    description: "Quality, alignment, mortar ratio, curing",
  },
  {
    icon: roofExternalIcon,
    title: "Roof & External",
    description: "Slope, parapet waterproofing, drainage",
  },
  {
    icon: electricalIcon,
    title: "Electrical",
    description: "Load calculation, earthing, MCB/ELCB checks",
  },
  {
    icon: plumbingIcon,
    title: "Plumbing & Waterproofing",
    description: "Pressure tests, pond tests, sealed joints",
  },
  {
    icon: structuralFrameIcon,
    title: (
      <>
        {" "}
        Structural <br /> Frame
      </>
    ),
    description: "Columns, beams, slab, and joint inspections",
  },
  {
    icon: foundationFootingIcon,
    title: "Foundation & Footing",
    description: "Reinforcement, alignment, curing",
  },
  {
    icon: safetyChecksIcon,
    title: "Safety & Final Checks",
    description: "Structural inspection and completion audit",
  },
];

export default function QualityPromise() {
  return (
    <Section className="py-56 sm:py-64 lg:py-120">
      <div className="flex flex-col gap-16 sm:items-center sm:text-center">
        <h2 className="lg:text-display text-[32px]/[40px] font-medium sm:text-[48px]/[56px]">
          Our 115-point{" "}
          <span className="font-playfair text-gold-400 italic">
            quality promise.
          </span>
        </h2>

        <hr className="text-gold-400 w-34" />

        <p className="md:text-body sm:text-body-sm text-navy-800/60 text-body-xs font-medium">
          Most residential and commercial properties are sold on a feeling. Ours
          passes a 115-point inspection - soil to slab to seal. Every stage of
          construction is checked and signed off on across nine categories.
          It&rsquo;s the difference between a builder telling you a property is
          solid and a builder showing you.
        </p>
      </div>

      <div className="mt-36 grid grid-cols-2 gap-x-16 gap-y-24 sm:mt-64 sm:gap-x-36 sm:gap-y-40 md:grid-cols-3 lg:grid-cols-4 lg:gap-y-64">
        {CATEGORIES.map(({ icon, title, description }) => (
          <div key={title} className="flex flex-col items-center gap-20">
            <Image
              src={icon}
              alt="Icon"
              width={70}
              height={70}
              className="size-56 shrink-0 object-contain lg:size-70"
            />

            <div className="flex flex-col items-center gap-8 text-center">
              <h3 className="text-body lg:text-h5 text-navy-800 max-w-242 font-medium sm:text-[20px]/[26px]">
                {title}
              </h3>
              <p className="text-body-xs sm:text-body-sm text-navy-800/60 font-medium">
                {description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-36 flex justify-center sm:mt-64">
        <Button asChild className="w-full sm:w-auto">
          <Link href="">Download Checklist</Link>
        </Button>
      </div>
    </Section>
  );
}
