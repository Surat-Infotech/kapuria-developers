import Image from "next/image";

import Section from "@/components/ui/section";

import Banner from "@/assets/images/home/home-banner.png";

export default function BannerSection() {
  return (
    <>
      <Image src={Banner} alt="Home Banner" width="100%" height="100%" />
      <Section spacing="default">
        <h1>Kapuria's Developer</h1>
      </Section>
    </>
  );
}
