import Image from "next/image";

import Section from "@/components/ui/section";

import helloWordmark from "@/assets/images/home/svg/hello.svg";
import muteIcon from "@/assets/images/home/svg/mute.svg";
import violinist from "@/assets/images/home/violinist.webp";

export default function SoundsGood() {
  return (
    <Section bg="dark" spacing="default">
      <div className="flex flex-col items-center gap-64">
        <div className="flex w-full items-end gap-24">
          <div className="flex flex-1 flex-wrap items-end gap-40 lg:gap-120">
            <Image
              src={helloWordmark}
              alt="hello."
              width={617}
              height={209}
              className="h-auto w-full max-w-400 lg:max-w-617"
            />

            <Image
              src={violinist}
              alt="An animated violinist playing in an arched window"
              width={300}
              height={300}
              unoptimized
              className="size-150 shrink-0 object-cover lg:size-300"
            />
          </div>

          <Image
            src={muteIcon}
            alt=""
            width={60}
            height={64}
            className="hidden shrink-0 lg:block lg:h-64 lg:w-60"
          />
        </div>

        <div className="flex w-full flex-col items-start gap-16">
          <h2 className="lg:text-display text-[32px]/[40px] text-white sm:text-[48px]/[56px]">
            A Home That Sounds{" "}
            <span className="font-playfair text-gold-400 italic">
              as Good as It Looks
            </span>
          </h2>

          <hr className="text-gold-400 w-34" />

          <p className="lg:text-body-lg text-[14px]/[24px] font-normal text-white/60">
            Every villa is equipped with home theatre provisions and
            high-quality audio wiring by{" "}
            <strong className="font-bold">Melody Home Theatre Systems</strong>,
            allowing you to effortlessly create an immersive entertainment
            setup. Enjoy cinematic experiences and soothing background music
            throughout your home with infrastructure that&rsquo;s built for
            modern living.
          </p>
        </div>
      </div>
    </Section>
  );
}
