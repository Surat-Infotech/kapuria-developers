import Image from "next/image";

import Section from "@/components/ui/section";

import helloWordmark from "@/assets/images/home/svg/hello.svg";
import muteIcon from "@/assets/images/home/svg/mute.svg";
import violinist from "@/assets/images/home/violinist.gif";

export default function SoundsGood() {
  return (
    <Section bg="dark" spacing="default">
      <div className="flex flex-col items-center gap-64">
        <div className="flex w-full items-end gap-24">
          <div className="flex flex-1 flex-wrap-reverse items-start justify-center gap-24 md:justify-between">
            <Image
              src={helloWordmark}
              alt="hello."
              width={617}
              height={209}
              className="h-auto w-full max-w-400 lg:max-w-500 xl:max-w-617"
            />
            <div className="flex items-center gap-4 md:items-end lg:gap-24">
              <Image
                src={violinist}
                alt="An animated violinist playing in an arched window"
                width={300}
                height={300}
                unoptimized
                className="shrink-0 object-cover md:max-lg:w-270"
              />

              <Image
                src={muteIcon}
                alt="Mute icon"
                width={64}
                height={64}
                className="size-36 shrink-0 lg:block lg:size-64"
              />
            </div>
          </div>
        </div>
        <div className="flex w-full flex-col items-start gap-16">
          <h2 className="lg:text-display text-[32px]/[40px] font-medium text-white sm:text-[48px]/[56px]">
            A Home That Sounds{" "}
            <span className="font-playfair text-gold-400 italic">
              as Good as It Looks
            </span>
          </h2>

          <hr className="text-gold-400 w-34" />

          <p className="lg:text-body-lg xs:text-body-sm text-body-xs font-normal text-white/60">
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
