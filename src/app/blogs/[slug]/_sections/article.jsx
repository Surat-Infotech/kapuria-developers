"use client";

import Image from "next/image";

import { useState } from "react";

import Section from "@/components/ui/section";

import articleImage from "@/assets/images/blogs/blog-detail.webp";
import blogPost1 from "@/assets/images/blogs/blog-post-1.webp";
import blogPost2 from "@/assets/images/blogs/blog-post-2.webp";
import blogPost3 from "@/assets/images/blogs/blog-post-3.webp";
import ChevronDownIcon from "@/assets/svgs/common/chevron-down";
import FacebookIcon from "@/assets/svgs/social/facebook";
import InstagramIcon from "@/assets/svgs/social/instagram";
import XIcon from "@/assets/svgs/social/x";
import YoutubeIcon from "@/assets/svgs/social/youtube";

const RELATED = [
  { id: "rel-1", image: blogPost1 },
  { id: "rel-2", image: blogPost2 },
];

const SHARE = [
  { Icon: FacebookIcon, label: "Share on Facebook" },
  { Icon: InstagramIcon, label: "Share on Instagram" },
  { Icon: XIcon, label: "Share on X" },
  { Icon: YoutubeIcon, label: "Share on YouTube" },
];

// Same block serves the mobile inline placement and the desktop sidebar.
const RelatedPanel = ({ className = "" }) => (
  <div className={className}>
    <h2 className="text-navy-800 text-body-relaxed text-center font-semibold">
      Related Articles
    </h2>

    <ul className="mt-16 flex flex-col gap-18">
      {RELATED.map(({ id, image }) => (
        <li
          key={id}
          className="flex items-center gap-12 lg:flex-col lg:items-start lg:gap-8"
        >
          <Image
            src={image}
            alt=""
            width={104}
            height={78}
            className="h-78 w-104 shrink-0 rounded-md object-cover lg:h-97 lg:w-full"
          />
          <div className="flex flex-col gap-4">
            <p className="text-navy-800 line-clamp-2 text-[12px]/[18px] font-semibold">
              Building Better Futures: Constructing Community Homes for a
              Brighter Tomorrow
            </p>
            <p className="text-navy-800/60 text-[12px]/[18px] font-normal">
              10 mins
            </p>
          </div>
        </li>
      ))}
    </ul>

    <div className="border-navy-800/10 mt-18 flex flex-col items-center gap-16 border-t pt-18">
      <p className="text-navy-800 text-[16px]/[24px] font-semibold">
        Share this article
      </p>

      <div className="flex items-center gap-16">
        {SHARE.map(({ Icon, label }) => (
          <button
            key={label}
            type="button"
            aria-label={label}
            className="text-navy-800/60 hover:text-gold-400 focus-visible:ring-gold-400 cursor-pointer rounded-sm transition-colors duration-200 focus-visible:ring-2 focus-visible:outline-none"
          >
            <Icon className="size-24" />
          </button>
        ))}
      </div>
    </div>
  </div>
);

const ComparisonTable = ({ columns, rows }) => (
  <div className="mt-16 overflow-x-auto rounded-lg shadow-[0_10px_61.56px_0_rgba(21,21,21,0.05)]">
    <table className="w-full min-w-480 border-collapse text-left">
      <thead>
        <tr className="border-navy-800/10 border-b">
          {columns.map((col) => (
            <th
              key={col}
              scope="col"
              className="text-navy-800 px-8 py-8 text-[12px]/[18px] font-semibold lg:px-16 lg:text-[14px]/[22px]"
            >
              {col}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map(([label, ...values]) => (
          <tr key={label} className="">
            <th
              scope="row"
              className="text-navy-800 px-8 py-8 align-top text-[12px]/[18px] font-medium lg:px-16 lg:text-[14px]/[22px]"
            >
              {label}
            </th>
            {values.map((value, index) => (
              <td
                key={index}
                className="text-navy-800 px-8 py-8 align-top text-[12px]/[18px] font-normal lg:px-16 lg:text-[14px]/[22px]"
              >
                {value}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const FaqItem = ({ index, question, answer, isOpen, onToggle }) => (
  <div className="border-navy-800/10 rounded-lg border px-8 lg:px-20">
    <h3>
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="focus-visible:ring-gold-400 flex w-full cursor-pointer items-center gap-16 rounded-sm py-16 text-left focus-visible:ring-2 focus-visible:outline-none"
      >
        <span className="text-navy-800 shrink-0 text-[14px]/[22px] font-bold tabular-nums">
          {String(index + 1).padStart(2, "0")}
        </span>

        <span className="text-navy-800 text-body-sm flex-1 font-semibold">
          {question}
        </span>

        <ChevronDownIcon
          className={`text-navy-800/60 size-20 shrink-0 transition-transform duration-200 ${
            isOpen ? "-rotate-180" : ""
          }`}
        />
      </button>
    </h3>

    {/* Grid-rows trick keeps the reveal animatable without a fixed height. */}
    <div
      className={`grid transition-[grid-template-rows] duration-300 ease-out ${
        isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
      }`}
    >
      <div className="overflow-hidden">
        <p className="text-body-xs pr-0 pb-16 pl-36 font-normal text-black">
          {answer}
        </p>
      </div>
    </div>
  </div>
);

export default function Article({ post, sections, comparison, faqs }) {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <Section
      bg="surface"
      spacing="none"
      className="py-32 sm:py-64 lg:pt-64 lg:pb-120"
    >
      <div className="flex flex-col gap-36 lg:flex-row">
        {/* Table of contents — desktop only, sticks while the body scrolls. */}
        <aside className="hidden shrink-0 lg:block lg:w-218">
          {/* Taller than the viewport, so the list scrolls inside the sticky
              box rather than running past the fold. */}
          <div className="sticky top-124 flex max-h-[calc(100dvh-140px)] scrollbar-thin flex-col gap-18 overflow-y-auto overscroll-contain pr-8">
            <h2 className="text-navy-800 text-[18px]/[26px] font-bold">
              Table of Contents
            </h2>

            <ul className="flex list-disc flex-col gap-16 ps-21">
              {sections.map(({ id, title }, index) => (
                <li
                  key={id}
                  className={
                    index === 0
                      ? "text-navy-800 text-[14px]/[22px] font-bold"
                      : "text-navy-800/60 text-[14px]/[22px] font-medium"
                  }
                >
                  <a
                    href={`#${id}`}
                    className="focus-visible:ring-gold-400 hover:text-navy-800 rounded-sm transition-colors duration-200 focus-visible:ring-2 focus-visible:outline-none"
                  >
                    {title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        <div className="flex min-w-0 flex-1 flex-col gap-32 lg:gap-40">
          <article className="flex flex-col gap-24 lg:gap-32">
            {sections.map(
              (
                { id, title, body, list, type, imagePosition, imageAlt },
                index
              ) => (
                <section
                  key={id}
                  id={id}
                  className="flex scroll-mt-124 flex-col gap-8 lg:gap-16"
                >
                  {imagePosition === "top" && (
                    <Image
                      src={articleImage}
                      alt={imageAlt ?? ""}
                      width="100%"
                      height="100%"
                      className="w-full rounded-xl object-cover"
                    />
                  )}

                  {/* The opening section leads with body copy, not a heading. */}
                  {index > 0 && (
                    <h2 className="text-navy-800 text-[18px]/[24px] font-semibold lg:text-[22px]/[30px]">
                      {title}
                    </h2>
                  )}

                  {body?.map((paragraph) => (
                    <p
                      key={paragraph.slice(0, 40)}
                      className="text-[12px]/[18px] font-normal text-black lg:text-[14px]/[22px]"
                    >
                      {paragraph}
                    </p>
                  ))}

                  {list && (
                    <ul className="flex list-disc flex-col gap-4 ps-21 text-[12px]/[18px] font-normal text-black lg:text-[14px]/[22px]">
                      {list.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  )}

                  {type === "table" && <ComparisonTable {...comparison} />}
                </section>
              )
            )}
          </article>

          <div className="flex items-center gap-12">
            <span
              aria-hidden
              className="bg-navy-800/10 text-navy-800/40 grid size-56 shrink-0 place-items-center rounded-full text-[18px] font-semibold sm:size-76"
            >
              {post.author.name.charAt(0)}
            </span>

            <div className="flex flex-col gap-4">
              <p className="text-navy-800 sm:text-body text-[14px]/[22px] font-semibold">
                {post.author.name}
              </p>
              <p className="text-navy-800/60 text-[12px]/[18px] font-normal">
                {post.author.role}
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-8">
            <h2 className="text-navy-800 text-[18px]/[26px] font-bold">FAQ</h2>

            <div className="flex flex-col gap-10">
              {faqs.map((faq, index) => (
                <FaqItem
                  key={faq.question}
                  index={index}
                  {...faq}
                  isOpen={openFaq === index}
                  onToggle={() => setOpenFaq(openFaq === index ? -1 : index)}
                />
              ))}
            </div>
          </div>

          {/* Below `lg` the panel follows the article instead of sitting beside it. */}
          <RelatedPanel className="lg:hidden" />
        </div>

        <aside className="hidden shrink-0 lg:block lg:w-266">
          <RelatedPanel className="sticky top-124 max-h-[calc(100dvh-140px)] [scrollbar-width:thin] overflow-y-auto overscroll-contain rounded-2xl p-16 shadow-[0_10px_61.56px_0_rgba(21,21,21,0.05)] sm:p-24" />
        </aside>
      </div>
    </Section>
  );
}
