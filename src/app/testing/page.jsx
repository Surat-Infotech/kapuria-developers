import { Button } from "@/components/ui/button";
import Section from "@/components/ui/section";

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
          <div className="mb-40 flex flex-col items-start text-left">
            <h2 className="text-display-sm sm:text-display max-w-xl font-medium">
              Our 115-point quality promise.
            </h2>
            <span aria-hidden className="bg-gold-300 mt-16 block h-1 w-34" />
            <p className="text-body mt-16 font-medium">
              Most residential and commercial properties are sold on a feeling.
              Ours passes a 115-point inspection - soil to slab to seal.
            </p>
          </div>
          <Button>Download Checklist</Button>
        </Section>

        <Section bg="surface">
          <div className="mb-40 flex flex-col items-center text-center">
            <h2 className="text-display-sm sm:text-display max-w-xl font-medium">
              We use top brands.
            </h2>
            <span
              aria-hidden
              className="bg-gold-300 mx-auto mt-16 block h-1 w-34"
            />
            <p className="text-body mt-16 font-medium">
              We select only the top brands to ensure exceptional quality and
              longevity.
            </p>
          </div>
        </Section>

        <Section bg="dark">
          <div className="mb-40 flex flex-col items-start text-left">
            <h2 className="text-display-sm sm:text-display max-w-xl font-medium">
              A Home That Sounds as Good as It Looks
            </h2>
            <span aria-hidden className="bg-gold-300 mt-16 block h-1 w-34" />
            <p className="text-body mt-16 font-medium">
              Every villa is equipped with home theatre provisions and
              high-quality audio wiring.
            </p>
          </div>
          <Button variant="secondary">View Our Work</Button>
        </Section>

        <Section bg="inverse">
          <div className="mb-40 flex flex-col items-start text-left">
            <h2 className="text-display-sm sm:text-display max-w-xl font-medium">
              Footer surface
            </h2>
          </div>
        </Section>

        {/* Spacing variants */}
        <Section bg="surface" spacing="sm">
          <div className="mb-40 flex flex-col items-start text-left">
            <h2 className="text-display-sm sm:text-display max-w-xl font-medium">
              spacing sm — 32 / 44
            </h2>
          </div>
        </Section>

        <Section bg="muted" spacing="default">
          <div className="mb-40 flex flex-col items-start text-left">
            <h2 className="text-display-sm sm:text-display max-w-xl font-medium">
              spacing default — 40 / 64
            </h2>
          </div>
        </Section>

        <Section bg="surface" spacing="lg" spacingBottom="none">
          <div className="mb-40 flex flex-col items-start text-left">
            <h2 className="text-display-sm sm:text-display max-w-xl font-medium">
              lg, flush bottom
            </h2>
          </div>
        </Section>

        <Section bg="surface" spacingTop="none">
          <div className="mb-40 flex flex-col items-start text-left">
            <h2 className="text-display-sm sm:text-display max-w-xl font-medium">
              flush top — pairs with above
            </h2>
          </div>
        </Section>
      </div>
    </main>
  );
}
