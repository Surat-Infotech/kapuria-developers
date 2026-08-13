"use client";

import useEmblaCarousel from "embla-carousel-react";

import Image from "next/image";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import CarouselNav from "@/components/ui/carousel-nav";
import Section from "@/components/ui/section";

import reel1 from "@/assets/images/home/reels/reel-1.webp";
import reel2 from "@/assets/images/home/reels/reel-2.webp";
import reel3 from "@/assets/images/home/reels/reel-3.webp";
import reel4 from "@/assets/images/home/reels/reel-4.webp";
import reel5 from "@/assets/images/home/reels/reel-5.webp";
import instagramIcon from "@/assets/images/home/svg/instagram.svg";
import playIcon from "@/assets/images/home/svg/play.svg";
import EyeIcon from "@/assets/svgs/common/eye";

const INSTAGRAM_URL = "https://www.instagram.com/kapuria_developers/reels/";

const REELS = [
  {
    id: "DZpkDCNsXuO",
    cover: reel1,
    video: "/videos/reels/reel-1.webm",
    views: "374",
  },
  {
    id: "DaFA9zyMVZ4",
    cover: reel2,
    video: "/videos/reels/reel-2.webm",
    views: "1,788",
  },
  {
    id: "DadYlnrBVru",
    cover: reel3,
    video: "/videos/reels/reel-3.webm",
    views: "3,360",
  },
  {
    id: "DZ7Xfpvstt9",
    cover: reel4,
    video: "/videos/reels/reel-4.webm",
    views: "2,145",
  },
  {
    id: "DZfDa0TNCux",
    cover: reel5,
    video: "/videos/reels/reel-5.webm",
    views: "912",
  },
];

export default function LatestContent() {
  // Only the clicked reel mounts a <video>; the rest stay as cover images, so
  // nothing downloads until someone actually presses play.
  const [playingId, setPlayingId] = useState(null);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    containScroll: "trimSnaps",
  });

  return (
    <Section className="py-32 sm:py-64 lg:py-120">
      <div className="flex max-w-742 flex-col items-start gap-8 sm:gap-16">
        <h2 className="lg:text-display text-navy-800 text-[32px]/[40px] font-medium sm:text-[48px]/[56px]">
          Watch our{" "}
          <span className="font-playfair text-gold-400 italic">
            latest content.
          </span>
        </h2>

        <hr className="text-gold-400 w-34" />

        <p className="md:text-body sm:text-body-sm text-navy-800/60 text-body-xs font-medium">
          A live rolling instagram feed, showing our latest and greatest
          content.
        </p>
      </div>

      <div ref={emblaRef} className="mt-24 overflow-hidden sm:mt-36 md:mt-64">
        <div className="flex gap-16 sm:gap-24">
          {REELS.map(({ id, cover, video, views }) => {
            const isPlaying = playingId === id;

            return (
              <div
                key={id}
                className="relative h-305 w-195 shrink-0 overflow-hidden rounded-[9px] sm:h-500 sm:w-280 sm:rounded-[18px] md:h-600 md:w-360 lg:h-689 lg:w-441"
              >
                {isPlaying ? (
                  <video
                    src={video}
                    poster={cover.src}
                    controls
                    autoPlay
                    playsInline
                    className="absolute inset-0 size-full bg-black object-cover"
                  />
                ) : (
                  <button
                    type="button"
                    onClick={() => setPlayingId(id)}
                    aria-label={`Play reel — ${views} views`}
                    className="group focus-visible:ring-gold-400 absolute inset-0 cursor-pointer focus-visible:ring-2 focus-visible:outline-none"
                  >
                    <Image
                      src={cover}
                      alt="Cover image for reel"
                      width={441}
                      height={689}
                      className="absolute inset-0 size-full object-cover"
                    />

                    <span
                      aria-hidden
                      className="absolute inset-0 [background:linear-gradient(0deg,rgba(8,34,53,0)_48.84%,rgba(8,34,53,0.5)_100%),linear-gradient(180deg,rgba(8,34,53,0)_51.16%,#001B2E_100%)]"
                    />

                    <span className="relative flex h-full flex-col justify-between p-24 lg:p-36">
                      {/* Same glass-morphism treatment as the video in `apart`. */}
                      <span className="m-auto flex min-h-45 min-w-45 items-center justify-center rounded-[112px] border border-[#6B6B6B] bg-[rgba(54,54,54,0.1)] backdrop-blur-[13.964285850524902px] transition-transform duration-300 ease-out group-hover:scale-105 sm:h-80 sm:w-80 md:h-112 md:w-112">
                        <span className="flex items-center justify-center sm:h-52 sm:w-52">
                          <Image
                            src={playIcon}
                            alt="Play Icon"
                            width={40}
                            height={40}
                            className="ms-4 h-16 w-16 sm:ms-8 sm:h-24 sm:w-24 md:h-full md:w-full"
                          />
                        </span>
                      </span>

                      <span className="flex items-center gap-8 text-white">
                        <EyeIcon className="size-20 shrink-0 lg:size-24" />
                        <span className="text-[18px]/[normal] font-medium lg:text-[20px]/[normal]">
                          {views}
                        </span>
                      </span>
                    </span>
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-24 flex flex-col-reverse items-stretch gap-24 sm:mt-36 sm:flex-row sm:items-center sm:justify-between md:mt-64 lg:gap-64">
        <Button asChild className="gap-9 py-12 sm:w-auto">
          <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer">
            <Image src={instagramIcon} alt="Instagram" width={21} height={21} />
            Follow our journey
          </a>
        </Button>

        <CarouselNav
          api={emblaApi}
          className="justify-end"
          prevLabel="Previous reel"
          nextLabel="Next reel"
        />
      </div>
    </Section>
  );
}
