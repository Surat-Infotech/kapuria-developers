import ConsultationCta from "@/components/common/consultation-cta";

export default function ConsultationCtaSection() {
  return (
    <ConsultationCta
      kicker="You're not buying for the next ten years."
      heading={<>You&rsquo;re building for the</>}
      accent="next hundred."
      description="Visit a site, meet the team, and ask us every hard question. We won't hesitate."
    />
  );
}
