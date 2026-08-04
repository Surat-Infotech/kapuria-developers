"use client";

import useEmblaCarousel from "embla-carousel-react";

import Image from "next/image";

import { useState } from "react";

import CarouselNav from "@/components/ui/carousel-nav";
import Section from "@/components/ui/section";

import videoCover1 from "@/assets/images/blogs/videos-cover-1.webp";
import videoCover2 from "@/assets/images/blogs/videos-cover-2.webp";
import playIcon from "@/assets/images/home/svg/play.svg";
import ChevronDownIcon from "@/assets/svgs/common/chevron-down";

// `shortTitle` is the terser line the mobile comp uses in place of the
// title + description pair shown on desktop.
const VIDEOS = [
  {
    id: "newest-development",
    image: videoCover1,
    video: "/videos/blogs/newest-development.webm",
    title: "Take a Look Inside Our Newest Development",
    shortTitle: "How a sustainable villa comes together",
    description: "Inspired by timeless architecture and elegant living.",
  },
  {
    id: "quality-process",
    image: videoCover2,
    video: "/videos/blogs/quality-process.webm",
    title: "Take a Look Inside Our Newest Development",
    shortTitle: "Inside our 115-point quality process",
    description: "Inspired by timeless architecture and elegant living.",
  },
];

const VideoCard = ({
  image,
  video,
  title,
  shortTitle,
  description,
  isPlaying,
  onPlay,
}) => {
  if (isPlaying) {
    return (
      <video
        src={video}
        poster={image.src}
        controls
        autoPlay
        playsInline
        className="h-200 w-full rounded-[12px] bg-black object-cover lg:h-589 lg:rounded-[18px]"
      />
    );
  }

  return (
    <button
      type="button"
      onClick={onPlay}
      aria-label={`Play video — ${title}`}
      className="group focus-visible:ring-gold-400 relative h-200 w-full shrink-0 cursor-pointer overflow-hidden rounded-[12px] focus-visible:ring-2 focus-visible:outline-none lg:h-589 lg:rounded-[18px]"
    >
      <Image
        src={image}
        alt=""
        width={1044}
        height={589}
        className="absolute inset-0 size-full object-cover"
      />

      {/* Flat wash on mobile, gradient on desktop — both from the design. */}
      <span aria-hidden className="bg-navy-800/25 absolute inset-0 lg:hidden" />
      <span
        aria-hidden
        className="absolute inset-0 hidden lg:block lg:bg-[linear-gradient(185deg,rgba(8,34,53,0)_50.08%,#082235_98.39%)]"
      />

      {/* Mobile centres the play button; desktop stacks it above the copy. */}
      <span className="absolute inset-0 flex items-center justify-center lg:hidden">
        <span className="grid size-54 place-items-center rounded-full bg-white">
          <Image
            src={playIcon}
            alt="Play Icon"
            width={20}
            height={22}
            className="ms-2 h-20 w-18 object-contain"
          />
        </span>
      </span>

      <span className="absolute inset-0 flex flex-col justify-end p-16 text-left lg:p-50">
        <span className="hidden lg:flex lg:h-277 lg:flex-col lg:items-center lg:justify-between">
          <Image
            src={playIcon}
            alt="Play Icon"
            width={96}
            height={96}
            className="size-96 object-contain transition-transform duration-300 ease-out group-hover:scale-105"
          />

          <span className="flex w-full flex-col items-start gap-16">
            <span className="text-h3 font-bold text-white">{title}</span>
            <span className="text-body font-medium text-white/90">
              {description}
            </span>
          </span>
        </span>

        <span className="text-[14px]/[22px] font-semibold text-white lg:hidden">
          {shortTitle}
        </span>
      </span>
    </button>
  );
};

export default function Videos() {
  // Only the clicked card swaps its cover for a <video>, so nothing downloads
  // until someone presses play.
  const [playingId, setPlayingId] = useState(null);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    containScroll: "trimSnaps",
  });

  return (
    <Section
      bg="surface"
      spacing="none"
      className="border-gold-400/50 border-t border-b py-32 lg:border-t-0 lg:py-64"
    >
      <div className="flex flex-col items-start gap-24 lg:flex-row lg:items-end lg:justify-between lg:gap-16">
        <div className="flex flex-col items-start gap-8">
          <h2 className="text-navy-800 text-[22px]/[30px] font-semibold lg:text-[36px]/[44px]">
            Videos
          </h2>
          <p className="text-navy-800/60 text-[12px]/[18px] font-medium lg:text-[16px]/[24px]">
            Stay up to date with our latest videos.
          </p>
        </div>

        <button
          type="button"
          className="text-navy-800 hover:text-gold-400 focus-visible:ring-gold-400 flex cursor-pointer items-center gap-4 rounded-sm text-[12px]/[18px] font-semibold tracking-[2.28px] uppercase transition-colors duration-200 focus-visible:ring-2 focus-visible:outline-none lg:gap-8 lg:text-[18px]/[26px] lg:tracking-[3.42px]"
        >
          Sort by
          <ChevronDownIcon className="size-16 shrink-0 lg:size-24" />
        </button>
      </div>

      {/* Mobile stacks every video; desktop rides them on an Embla rail. */}
      <div className="mt-24 flex flex-col gap-20 lg:hidden">
        {VIDEOS.map((item) => (
          <VideoCard
            key={item.id}
            {...item}
            isPlaying={playingId === item.id}
            onPlay={() => setPlayingId(item.id)}
          />
        ))}
      </div>

      <div className="mt-53 hidden lg:block">
        <div ref={emblaRef} className="overflow-hidden">
          <div className="flex gap-20">
            {VIDEOS.map((item) => (
              <div key={item.id} className="w-full shrink-0 basis-full">
                <VideoCard
                  {...item}
                  isPlaying={playingId === item.id}
                  onPlay={() => setPlayingId(item.id)}
                />
              </div>
            ))}
          </div>
        </div>

        <CarouselNav
          api={emblaApi}
          className="mt-24 justify-end"
          iconClassName="size-42"
          prevLabel="Previous video"
          nextLabel="Next video"
        />
      </div>
    </Section>
  );
}
