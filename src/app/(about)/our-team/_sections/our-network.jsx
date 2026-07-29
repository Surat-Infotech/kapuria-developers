import { Button } from "@/components/ui/button";
import Section from "@/components/ui/section";

import NetworkBg from "@/assets/images/team/network-bg.webp";

const EYEBROW = "Our Network";

const DESCRIPTION =
  "A network of trusted contractors and material partners — each vetted, each held to the same 115-point standard.";

const VETTING_NOTE =
  "Every partner is vetted before a single order is placed — verified licences, references and on-site quality checks.";

const STATS = [
  { value: "35", label: "Brands" },
  { value: "50+", label: "Partners" },
  { value: "100%", label: "Audited" },
];

const CONTRACTORS = [
  { trade: "Paint", names: ["Sanjay"] },
  { trade: "Electrical", names: ["Parkash"] },
  { trade: "Iron Fabrication", names: ["Kamaljeet"] },
  { trade: "Tiles", names: ["Dharmender"] },
  { trade: "Woodwork", names: ["Raj Kumar"] },
  { trade: "Civil", names: ["GL Sharma", "Salalmat", "Mishra"] },
  { trade: "Harvesting Tank", names: ["Shiv"] },
  { trade: "Louvers", names: ["Rajinder (Inder Enterprise)"] },
  { trade: "Plumbing", names: ["Shailesh", "Pintu"] },
  { trade: "POP / False Ceiling", names: ["Bablu", "Rajesh"] },
  { trade: "Tile Elevation", names: ["Mohd Zeeshan"] },
  { trade: "Waterproofing", names: ["Omparkash", "Gagan"] },
  { trade: "Structural Engineer", names: ["Mr. Nanda", "Mr. Rakhra"] },
  { trade: "GMADA Sanction", names: ["Virender"] },
];

const SUPPLIERS = [
  { trade: "Bricks", names: ["Mahalaxmi Cement Bricks"] },
  {
    trade: "Air Conditioning",
    names: ["Danish", "Satinder–Narender (Daikin)"],
  },
  { trade: "Paint", names: ["Chetan Karni Paints"] },
  { trade: "Plywood", names: ["Raghav (Punjab Timber)"] },
  { trade: "Modular Kitchen", names: ["Amit"] },
  { trade: "Stone", names: ["Housetones (Amrinder)"] },
  { trade: "Granite", names: ["Vipul (Maharaja Marbles)"] },
  { trade: "Sanitary", names: ["Garg Sanitary"] },
  { trade: "Windows", names: ["Sabhya"] },
  { trade: "Wardrobes", names: ["Ankit"] },
  { trade: "LT Panel", names: ["Ravinder"] },
  { trade: "Civil", names: ["Raj Traders", "Pawan"] },
  {
    trade: "Electrical",
    names: [
      "Vandana Electrical",
      "Goyal (3B2)",
      "Hanuman",
      "Pooman",
      "Mohit Verma",
      "New Jaspal Electrical",
      "Philips Lights",
      "Sahil Electrical",
    ],
  },
  { trade: "Hardware", names: ["Agarwal Enterprises", "United (Sector 18)"] },
  { trade: "Plumbing", names: ["Raj Hardware (3B2)"] },
  {
    trade: "Tiles",
    names: [
      "House of Tiles (Sahil)",
      "Jagdamba Samarjeet",
      "Rakesh Kumar",
      "Shree Choudary",
    ],
  },
  { trade: "Veneer", names: ["Gupta Ply (Sec 7)"] },
  { trade: "Laminates & Tiles", names: ["Kapes Laminates (Mohit)"] },
  { trade: "Glass", names: ["Roshan"] },
];

// Same card shell as the quality-promise panels — translucent navy behind a
// hairline gold edge, with the gold cap riding inside the radius (a real
// border can't carry its own rounding).
const CARD =
  "relative overflow-hidden rounded-[8px] border border-[rgba(235,195,127,0.35)] bg-[rgba(12,35,64,0.20)] backdrop-filter backdrop-blur-[22px]";

const CAP =
  "absolute inset-x-0 top-0 left-1/2 -translate-x-1/2 h-3 w-full max-w-[calc(100%-32px)] rounded-b-[3px] bg-[#C9A45C]";

function PartnerTable({ heading, count, rows }) {
  return (
    <div>
      <div className="mb-12 flex items-baseline justify-between gap-16">
        <h3 className="text-[12px]/[18px] font-medium tracking-[1.8px] text-white uppercase lg:text-[14px]/[16px] lg:tracking-[2px]">
          {heading}
        </h3>
        <span className="text-gold-300 font-serif text-[20px]/[22px] italic lg:text-[22px]/[24px]">
          {count}
        </span>
      </div>

      <div className={`${CARD} px-16`}>
        <span aria-hidden className={CAP} />

        <dl>
          {rows.map(({ trade, names }) => (
            // Label and names sit shoulder to shoulder on mobile with the
            // names flushed right; desktop drops them into a fixed label
            // column so every row lines up.
            <div
              key={trade}
              className="flex items-start justify-between gap-16 border-b border-white/8 py-12 last:border-b-0 lg:justify-start"
            >
              <dt className="shrink-0 text-[12px]/[18px] font-semibold text-[#F0EBE0] lg:w-150 lg:text-[14px]/[22px]">
                {trade}
              </dt>
              <dd className="text-right text-[12px]/[18px] font-normal text-[rgba(255,255,255,0.62)] lg:flex-1 lg:text-left lg:text-[14px]/[22px]">
                {names.map((name, index) => (
                  <span key={name}>
                    {/* Separator carries the gold; the names stay muted. */}
                    {index > 0 && (
                      <span className="text-gold-300 mx-6">&middot;</span>
                    )}
                    {name}
                  </span>
                ))}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}

export default function OurNetworkSection() {
  return (
    // Blueprint linework sits behind the whole section, so it rides as a CSS
    // background rather than an <Image> — the section's own container is
    // width-capped and would clip it.
    <Section
      bg="dark"
      className="bg-cover bg-center bg-no-repeat py-32 lg:py-64"
      style={{ backgroundImage: `url(${NetworkBg.src})` }}
    >
      <div className="flex flex-col gap-24 lg:flex-row lg:items-center lg:justify-between">
        <div className="lg:max-w-770">
          <p className="text-[14px]/[22px] font-medium tracking-[2.52px] text-[#EBC37F] uppercase">
            {EYEBROW}
          </p>

          <h2 className="mt-8 text-[32px]/[40px] font-medium text-white sm:text-[36px]/[44px] md:text-[40px]/[48px] lg:text-[44px]/[54px]">
            The specialists behind{" "}
            <span className="text-gold-300 font-serif italic">every</span>{" "}
            build.
          </h2>

          {/* Gold rule is a desktop-only beat — mobile runs heading into copy. */}
          <hr className="my-8 h-1 w-34 border-0 bg-[#EBC37F] sm:my-16" />

          <p className="max-w-596 text-[12px]/[18px] font-medium text-[rgba(255,255,255,0.60)] lg:text-[16px]/[24px]">
            {DESCRIPTION}
          </p>
        </div>

        <dl className="flex gap-28 lg:shrink-0 lg:gap-36">
          {STATS.map(({ value, label }) => (
            <div key={label}>
              <dt className="text-gold-300 font-serif text-[32px]/[40px] italic sm:text-[40px]/[48px] md:text-[44px]/[54px] lg:text-[48px]/[60px]">
                {value}
              </dt>
              <dd className="mt-4 text-[10px]/[14px] font-medium tracking-[1.6px] text-[#B8C4D4] uppercase md:mt-8">
                {label}
              </dd>
            </div>
          ))}
        </dl>
      </div>

      {/* `items-start` so the shorter contractors card doesn't stretch to
          match the suppliers column. */}
      <div className="mt-24 grid gap-32 md:grid-cols-2 lg:mt-64 lg:items-start lg:gap-24">
        <PartnerTable
          heading="Contractors & Trades"
          count="20"
          rows={CONTRACTORS}
        />

        <div className="grid gap-24">
          <PartnerTable
            heading="Materials & Suppliers"
            count="15"
            rows={SUPPLIERS}
          />

          <div
            className={`${CARD} flex flex-col gap-16 px-16 pt-24 pb-16 lg:flex-row lg:items-center lg:justify-between lg:gap-32 lg:px-20 lg:py-16`}
          >
            <span aria-hidden className={CAP} />

            <p className="text-[12px]/[18px] font-normal text-[rgba(255,255,255,0.50)]">
              {VETTING_NOTE}
            </p>

            <Button
              variant="outline"
              size="sm"
              className="hover:bg-gold-400/10 w-full shrink-0 px-16 py-11 text-[16px]/[24px] font-semibold tracking-[1.8px] text-[#EBC37F] sm:py-12 sm:text-[12px]/[18px] lg:w-auto"
            >
              Become a Partner
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}
