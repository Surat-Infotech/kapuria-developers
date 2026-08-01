import ConsultationCta from "@/components/common/consultation-cta";

export default function OurMission() {
  return (
    <ConsultationCta
      kicker="Our Mission"
      kickerVariant="label"
      heading={<>Our Promise Doesn&rsquo;t</>}
      accent="End with Possession"
      description="We promise to build spaces that not only look luxurious, but perform exceptionally for decades - backed by a 10-year structural warranty, post-handover technical assistance, dedicated service support, and fully transparent documentation. We promise integrity in materials, precision in execution, and transparency in commitment. Because we create spaces that stand tall - architecturally, structurally, and ethically and we stand by our work long after the project is complete."
      className="lg:max-w-675"
      button={false}
    />
  );
}
