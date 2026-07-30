import Image from "next/image";

import Section from "@/components/ui/section";

import astraPaints from "@/assets/images/home/brands/astra-paints.webp";
import blum from "@/assets/images/home/brands/blum.webp";
import chetak from "@/assets/images/home/brands/chetak.webp";
import daikin from "@/assets/images/home/brands/daikin.webp";
import diplast from "@/assets/images/home/brands/diplast.webp";
import dorset from "@/assets/images/home/brands/dorset.webp";
import dulux from "@/assets/images/home/brands/dulux.webp";
import eeeGroup from "@/assets/images/home/brands/eee-group.webp";
import euroDecor from "@/assets/images/home/brands/euro-decor.webp";
import finolex from "@/assets/images/home/brands/finolex.webp";
import havells from "@/assets/images/home/brands/havells.webp";
import jaquar from "@/assets/images/home/brands/jaquar.webp";
import kamdhenuSteel from "@/assets/images/home/brands/kamdhenu-steel.webp";
import kerakoll from "@/assets/images/home/brands/kerakoll.webp";
import lapox from "@/assets/images/home/brands/lapox.webp";
import mehtaTubes from "@/assets/images/home/brands/mehta-tubes.webp";
import melodyHomeTheatre from "@/assets/images/home/brands/melody-home-theatre.webp";
import norisys from "@/assets/images/home/brands/norisys.webp";
import philips from "@/assets/images/home/brands/philips.webp";
import polycab from "@/assets/images/home/brands/polycab.webp";
import sakarni from "@/assets/images/home/brands/sakarni.webp";
import supreme from "@/assets/images/home/brands/supreme.webp";
import tataKosh from "@/assets/images/home/brands/tata-kosh.webp";
import totaline from "@/assets/images/home/brands/totaline.webp";
import ultratechCement from "@/assets/images/home/brands/ultratech-cement.webp";

// Split across two rails that scroll in opposite directions, as in the design.
const TOP_ROW = [
  { logo: ultratechCement, name: "UltraTech Cement" },
  { logo: kamdhenuSteel, name: "Kamdhenu Steel" },
  { logo: polycab, name: "Polycab" },
  { logo: jaquar, name: "Jaquar" },
  { logo: havells, name: "Havells" },
  { logo: dulux, name: "Dulux" },
  { logo: kerakoll, name: "Kerakoll" },
  { logo: daikin, name: "Daikin" },
  { logo: blum, name: "Blum" },
  { logo: finolex, name: "Finolex" },
  { logo: supreme, name: "Supreme" },
  { logo: philips, name: "Philips" },
  { logo: mehtaTubes, name: "Mehta Tubes Limited" },
];

const BOTTOM_ROW = [
  { logo: sakarni, name: "Sakarni" },
  { logo: tataKosh, name: "Tata Kosh" },
  { logo: astraPaints, name: "Astra Paints" },
  { logo: lapox, name: "Lapox" },
  { logo: diplast, name: "Diplast" },
  { logo: chetak, name: "Chetak" },
  { logo: norisys, name: "Norisys" },
  { logo: dorset, name: "Dorset" },
  { logo: euroDecor, name: "Euro Decor" },
  { logo: totaline, name: "Totaline" },
  { logo: eeeGroup, name: "EEE Group" },
  { logo: melodyHomeTheatre, name: "Melody Home Theatre Store" },
];

const Row = ({ items, direction }) => (
  <div
    className={`flex w-max shrink-0 gap-24 ${
      direction === "left" ? "animate-marquee-left" : "animate-marquee-right"
    }`}
  >
    {/* Duplicated so the 50% shift lands on an identical frame. */}
    {[...items, ...items].map(({ logo, name }, index) => (
      <div
        key={`${name}-${index}`}
        className="flex h-96 w-200 shrink-0 items-center justify-center lg:h-128 lg:w-244"
      >
        <Image
          src={logo}
          alt={index < items.length ? name : ""}
          aria-hidden={index >= items.length}
          width={211}
          height={63}
          className="h-auto w-full max-w-160 object-contain lg:max-w-211"
        />
      </div>
    ))}
  </div>
);

export default function Brands() {
  return (
    <Section bg="surface" spacing="lg" width="full">
      <div className="mx-auto flex max-w-740 flex-col items-center gap-16 px-16 text-center">
        <h2 className="lg:text-display text-navy-800 text-[32px]/[40px] font-medium sm:text-[48px]/[56px]">
          We use top brands for{" "}
          <span className="font-playfair text-gold-400 italic">
            exceptional quality.
          </span>
        </h2>

        <hr className="text-gold-400 w-34" />

        <p className="md:text-body sm:text-body-sm text-navy-800/60 text-[12px]/[18px] font-medium">
          We select only the top brands to ensure exceptional quality and
          longevity.
        </p>
      </div>

      {/* Full-bleed: the rails run edge to edge, no container gutter. */}
      <div className="marquee mt-64 flex flex-col gap-24 overflow-hidden lg:gap-64">
        <Row items={TOP_ROW} direction="left" />
        <Row items={BOTTOM_ROW} direction="right" />
      </div>
    </Section>
  );
}
