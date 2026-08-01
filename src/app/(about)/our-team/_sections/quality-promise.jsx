import Image from "next/image";

import Section from "@/components/ui/section";

import KapuriaBadge from "@/assets/images/team/kapuria-badge.webp";
import PromiseBadgeMobile from "@/assets/images/team/kd-promise-badge-mobile.webp";
import BadgeCheckIcon from "@/assets/svgs/common/badge-check";
import ClockIcon from "@/assets/svgs/common/clock";
import HeadphonesIcon from "@/assets/svgs/common/headphones";
import LayersIcon from "@/assets/svgs/common/layers";
import ShieldCheckIcon from "@/assets/svgs/common/shield-check";
import WrenchIcon from "@/assets/svgs/common/wrench";

const EYEBROW = "Our Quality Promise";

const CREDENTIALS =
  "Behind every Kapuria space is a team of senior architects, structural consultants, Vastu experts, sustainability planners, and experienced engineers — decades of expertise";

const DOCUMENTATION = "And behind every promise is documentation.";

// The desktop cards run short labels; the mobile list has room for the fuller
// wording, so each promise carries both.
const PROMISES = [
  {
    icon: ShieldCheckIcon,
    title: "70-Point Audit",
    detail: "Soil to slab, every layer verified",
    mobileTitle: "A 115-Point Audit",
    mobileDetail: "Soil to slab to seal — each point signed off.",
  },
  {
    icon: ClockIcon,
    title: "10-Year Warranty",
    detail: "Structural peace of mind, in writing",
    mobileTitle: "10 Year Warranty",
    mobileDetail: "A 10-year structural warranty signed at the handover.",
  },
  {
    icon: WrenchIcon,
    title: "Service Protection",
    detail: "Ongoing maintenance coverage included",
    mobileTitle: "Seepage Protection",
    mobileDetail: "Advanced seepage protection, pond-tested before sign-off.",
  },
  {
    icon: LayersIcon,
    title: "Seismic Engineered",
    detail: "Designed to exceed safety standards",
    mobileTitle: "Seismic-Engineered",
    mobileDetail: "Foundations tested before a single line is drawn.",
  },
  {
    icon: HeadphonesIcon,
    title: "Post-Handover Support",
    detail: "We stay present after the keys are yours",
    mobileTitle: "Post-Handover Support",
    mobileDetail:
      "Transparent records & support for as long as you own the home.",
  },
];

// The promise card. Mobile is a near-transparent navy lit by a wide, shallow
// bloom off the bottom edge; desktop switches to solid navy with the bloom
// washing in from the top-left corner (behind the coin) and a second lifting
// the bottom.
//
// The `image:` hint is what lets the tint and the blooms coexist: without it
// Tailwind reads `bg-[…]` as another background-*color* and the two classes
// fight over one property instead of filling in colour + image.
const PANEL =
  "relative overflow-hidden rounded-[16px] border border-[rgba(235,195,127,0.20)] backdrop-filter backdrop-blur-[11px] bg-[rgba(12,35,64,0.20)] bg-[image:radial-gradient(196.65%_24.39%_at_49.83%_99.75%,rgba(235,195,127,0.60)_0%,rgba(0,0,0,0.00)_65.64%)] lg:border-[rgba(235,195,127,0.35)] lg:backdrop-blur-[22.600000381469727px] lg:bg-[#0C2340] lg:bg-[image:radial-gradient(81.29%_80.77%_at_2.46%_1.81%,rgba(235,195,127,0.60)_0%,rgba(0,0,0,0.00)_65.64%),radial-gradient(105.82%_55.78%_at_49.83%_99.75%,rgba(235,195,127,0.60)_0%,rgba(0,0,0,0.00)_65.64%)]";

// Gold cap sitting flush on each card's top edge. A real border can't carry
// its own radius here, so it rides as a layer inside the rounded shell.
const CAP = "absolute inset-x-0 top-0 h-3 rounded-b-[3px] bg-[#C9A45C]";

// The mobile-only 115 plate — same shell, but a tighter bloom rising off the
// bottom edge.
const PLATE =
  "relative overflow-hidden rounded-[16px] border border-[rgba(235,195,127,0.20)] backdrop-filter backdrop-blur-[11px] bg-[rgba(12,35,64,0.20)] bg-[image:radial-gradient(70.06%_50%_at_49.85%_99.99%,rgba(235,195,127,0.60)_0%,rgba(0,0,0,0.00)_100%)]";

export default function QualityPromiseSection() {
  return (
    // The panel straddles the seam between the cream page and the navy block
    // below it, so the split lives on the section rather than its neighbours.
    // Mobile has no seam — it is navy end to end.
    <Section
      bg="transparent"
      spacing="none"
      className="bg-navy-950 lg:bg-[linear-gradient(to_bottom,var(--color-cream-200)_0,var(--color-cream-200)_50%,var(--color-navy-950)_50%)] lg:py-64"
      classNames={{ container: "px-16 py-40 lg:py-0" }}
    >
      {/* ── Mobile: the coin gets its own plate above the promise card. The
          coin, the numeral and the lockup are all baked into the artwork. ── */}
      <div className={`${PLATE} mb-24 lg:hidden`}>
        <span aria-hidden className={CAP} />

        <Image
          src={PromiseBadgeMobile}
          alt="Kapuria Developers 115 point promise"
          className="w-full"
        />
      </div>

      <div className={`${PANEL} p-16 lg:px-36 lg:py-32`}>
        <span aria-hidden className={CAP} />

        <div className="l flex flex-col items-center gap-40 lg:flex-row lg:items-start lg:gap-64 lg:pt-40">
          {/* Coin repeats inline on desktop, where there is no separate plate. */}
          <Image
            src={KapuriaBadge}
            width={429}
            height={411}
            alt="Kapuria Developers, established 2023"
            className="hidden w-167 shrink-0 lg:block"
          />

          <div className="w-full lg:max-w-712">
            <p className="text-gold-300 text-body-xs flex items-center justify-center gap-16 text-center font-medium tracking-[2.2px] uppercase lg:justify-start lg:text-left lg:text-[14px]/[16px] lg:font-semibold lg:tracking-[2.4px] lg:text-[#C9A452]">
              <span
                aria-hidden
                className="hidden h-px w-44 bg-[#C9A452] lg:block"
              />
              {EYEBROW}
            </p>

            {/* Mobile and desktop run different line breaks and emphasis, so
                the heading is written out once for each. */}
            <h2 className="mt-16 text-center text-[21px]/[30px] font-medium text-[#94A9C0] lg:hidden">
              You&rsquo;ll check <span className="text-white">6</span> things
              before buying a building.
              <span className="mt-8 block text-[32px]/[40px] font-medium text-white">
                We check{" "}
                <span className="text-gold-300 font-serif text-[40px]/[40px] italic">
                  115
                </span>
                .
              </span>
            </h2>

            <h2 className="hidden text-[38px]/[52.8px] font-semibold text-[#F0EBE0] lg:mt-24 lg:block">
              You check 6 things
              <span className="block text-[#7A8EA6]">
                before buying a building.
              </span>
              We check all{" "}
              <span className="text-gold-300 font-serif italic">115</span>.
            </h2>

            <span aria-hidden className="my-16 block h-px w-full bg-white/12" />

            <div className="lg:flex lg:items-center lg:gap-24">
              {/* Width and shrink belong on the flex child, not the copy. */}
              <div className="lg:border-r-gold-300/50 lg:w-354 lg:shrink-0 lg:border-r">
                <p className="text-gold-300 text-body-sm text-center font-medium tracking-[1.5px] uppercase lg:text-left lg:text-[20px]/[28px] lg:tracking-[3.6px]">
                  Soil to slab to seal
                  {/* Italic is a desktop-only distinction — mobile runs both
                    lines in the one upright style. */}
                  <span className="block lg:italic">
                    Every checkpoint signed off
                  </span>
                </p>
              </div>

              <p className="text-body-sm lg:text-body mt-16 text-center font-medium text-[rgba(255,255,255,0.60)] lg:mt-0 lg:text-left">
                {CREDENTIALS}{" "}
                <span className="text-white">
                  in every wall you&rsquo;ll never see.
                </span>
              </p>
            </div>

            <span aria-hidden className="mt-16 block h-px w-full bg-white/12" />
          </div>
        </div>

        <p className="text-body mt-16 font-normal text-[#F2F5FA] sm:mt-24 md:mt-40 lg:mt-56 lg:text-center lg:text-[18px]/[26px] lg:font-medium">
          {DOCUMENTATION}
        </p>

        {/* ── Mobile: gold-ruled list ── */}
        <ul className="mt-16 lg:hidden">
          {PROMISES.map(({ mobileTitle, mobileDetail }) => (
            <li
              key={mobileTitle}
              className="border-gold-400/80 border-t pt-8 pb-16 last:pb-0"
            >
              <h3 className="text-body-xs flex items-center gap-10 font-medium tracking-[1.8px] text-[#F2F5FA] uppercase">
                <BadgeCheckIcon className="text-gold-400 shrink-0" />
                {mobileTitle}
              </h3>
              <p className="text-body-xs mt-4 pl-28 font-normal text-[rgba(255,255,255,0.60)]">
                {mobileDetail}
              </p>
            </li>
          ))}
        </ul>

        {/* ── Desktop: five bordered tiles ── */}
        <ul className="mt-32 hidden gap-16 lg:grid lg:grid-cols-5">
          {PROMISES.map(({ icon: Icon, title, detail }) => (
            <li
              key={title}
              className="border-gold-300 rounded-[10px] border-[0.667px] bg-[#13223A] p-20"
            >
              <span className="text-gold-300 flex h-36 w-36 items-center justify-center rounded-lg bg-[rgba(201,164,82,0.10)]">
                <Icon />
              </span>

              <h3 className="mt-24 text-[14px]/[17.5px] font-medium text-[#F0EBE0]">
                {title}
              </h3>
              <p className="mt-8 text-[12px]/[19.5px] font-light text-[#B8C4D4]">
                {detail}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
