import { Button } from "@/components/ui/button";
import Section from "@/components/ui/section";
import SectionHeader from "@/components/ui/section-header";

import QuadrantIcon from "@/assets/svgs/common/quadrant";

export default function testing() {
  return (
    <main className="flex min-h-dvh flex-col items-start gap-8 p-16">
      <h1 className="text-h3 text-foreground font-bold">
        Welcome to Kapuria Developers
      </h1>
      <p className="text-link font-semibold">
        Before a Kapuria property is beautiful, it is tested. Soil studies, load
        calculations, seismic-resistant framing, and a 115-point inspection
        process happen long before the first finish goes on - because the parts
        of a home that matter most are the ones you’ll never see. What you will
        see is a property designed for light, air, and calm, on land that’s
        appreciating as fast as the city around it.
      </p>
      <div className="">
        <Button className="w-full sm:w-auto">Download Checklist</Button>
        <Button variant="secondary">Subscribe</Button>
        <Button variant="outline">Learn More</Button>

        <Button>
          <QuadrantIcon className="text-gold-300 size-18 shrink-0" />
          Book Consultation
        </Button>
        <Button size="sm">Download Checklist</Button>
      </div>

      {/* Section variants */}
      <div className="-mx-16 w-[calc(100%+32px)]">
        <Section bg="muted">
          <SectionHeader
            heading="Our 115-point quality promise."
            description="Most residential and commercial properties are sold on a feeling. Ours passes a 115-point inspection - soil to slab to seal."
          />
          <Button>Download Checklist</Button>
        </Section>

        <Section bg="surface">
          <SectionHeader
            align="center"
            heading="We use top brands."
            description="We select only the top brands to ensure exceptional quality and longevity."
          />
        </Section>

        <Section bg="dark">
          <SectionHeader
            heading="A Home That Sounds as Good as It Looks"
            description="Every villa is equipped with home theatre provisions and high-quality audio wiring."
          />
          <Button variant="secondary">View Our Work</Button>
        </Section>

        <Section bg="inverse">
          <SectionHeader heading="Footer surface" rule={false} />
        </Section>

        {/* Spacing variants */}
        <Section bg="surface" spacing="sm">
          <SectionHeader heading="spacing sm — 32 / 44" rule={false} />
        </Section>

        <Section bg="muted" spacing="default">
          <SectionHeader heading="spacing default — 40 / 64" rule={false} />
        </Section>

        <Section bg="surface" spacing="lg" spacingBottom="none">
          <SectionHeader heading="lg, flush bottom" rule={false} />
        </Section>

        <Section bg="surface" spacingTop="none">
          <SectionHeader heading="flush top — pairs with above" rule={false} />
        </Section>
      </div>
    </main>
  );
}
