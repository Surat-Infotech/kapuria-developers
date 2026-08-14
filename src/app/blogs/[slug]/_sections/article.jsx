"use client";

import Image from "next/image";

import { useState } from "react";

import Section from "@/components/ui/section";

import blogPost1 from "@/assets/images/blogs/blog-post-1.webp";
import blogPost2 from "@/assets/images/blogs/blog-post-2.webp";
import blogPost3 from "@/assets/images/blogs/blog-post-3.webp";
import ChevronDownIcon from "@/assets/svgs/common/chevron-down";
import FacebookIcon from "@/assets/svgs/social/facebook";
import InstagramIcon from "@/assets/svgs/social/instagram";
import XIcon from "@/assets/svgs/social/x";
import YoutubeIcon from "@/assets/svgs/social/youtube";

const RELATED_TITLE =
  "Building Better Futures: Constructing Community Homes for a Brighter Tomorrow";

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
    <h2 className="text-navy-800 text-body xs:text-body-lg text-center font-semibold">
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
            alt={RELATED_TITLE}
            width={104}
            height={78}
            className="h-93 w-104 shrink-0 rounded-md object-cover lg:h-97 lg:w-full"
          />
          <div className="flex flex-col gap-6 sm:gap-4">
            <p className="text-navy-800 line-clamp-3 text-xs font-semibold">
              {RELATED_TITLE}
            </p>
            <p className="text-navy-800/60 text-xs font-normal">10 mins</p>
          </div>
        </li>
      ))}
    </ul>

    <div className="border-navy-800/10 mt-18 flex flex-col items-center gap-16 border-t pt-18">
      <p className="text-navy-800 text-body md:text-body-lg font-semibold">
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

// A rich paragraph is an array of runs: plain strings, plus `{ text, href }`
// objects wherever the copy cites a source.
const RichText = ({ runs }) =>
  runs.map((run, index) =>
    typeof run === "string" ? (
      run
    ) : (
      <a
        key={`${run.href}-${index}`}
        href={run.href}
        target="_blank"
        rel="noreferrer noopener"
        className="hover:text-gold-400 focus-visible:ring-gold-400 rounded-sm underline transition-colors duration-200 focus-visible:ring-2 focus-visible:outline-none"
      >
        {run.text}
      </a>
    )
  );

// Runs carry no stable id of their own, so the first chunk of text stands in.
const richKey = (runs) =>
  runs
    .map((run) => (typeof run === "string" ? run : run.text))
    .join("")
    .slice(0, 40);

const ComparisonTable = ({ columns, rows }) => (
  <div className="overflow-x-auto rounded-lg shadow-[0_10px_61.56px_0_rgba(21,21,21,0.05)]">
    <table className="w-full min-w-480 border-collapse text-left">
      <thead>
        <tr className="border-navy-800/10 border-b">
          {columns.map((col) => (
            <th
              key={col}
              scope="col"
              className="text-navy-800 xs:text-body-xs p-8 text-[10px]/[14px] font-bold sm:p-16 lg:px-16"
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
              className="text-navy-800 xs:text-body-xs p-8 align-top text-[10px]/[14px] font-bold lg:px-16"
            >
              {label}
            </th>
            {values.map((value, index) => (
              <td
                key={index}
                className="text-navy-800 xs:text-body-xs p-8 align-top text-[10px]/[14px] font-normal lg:px-16"
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
  <div className="border-navy-800/10 rounded-lg border px-16 sm:px-20">
    <h3>
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="focus-visible:ring-gold-400 flex w-full cursor-pointer items-center gap-16 rounded-sm py-15 text-left focus-visible:ring-2 focus-visible:outline-none"
      >
        <span className="text-navy-800 shrink-0 text-[14px]/[22px] font-bold tabular-nums">
          {String(index + 1).padStart(2, "0")}
        </span>

        <span className="text-navy-800 text-body-sm flex-1 font-semibold">
          {question}
        </span>

        {/* Tailwind v4 writes the standalone `rotate` property, not
            `transform`, so that is what has to be transitioned. */}
        <ChevronDownIcon
          className={`size-20 shrink-0 transition-[rotate,color] duration-200 ${
            isOpen ? "text-navy-800 -rotate-180" : "text-[#6A7680]"
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
  // `null` = every question collapsed on first paint.
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <Section
      bg="surface"
      spacing="none"
      className="py-32 sm:py-64 lg:pt-64 lg:pb-120"
    >
      <div className="flex flex-col gap-24 lg:flex-row xl:gap-36">
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
          <article className="flex flex-col gap-24">
            {sections.map(
              (
                {
                  id,
                  title,
                  body,
                  richBody,
                  listIntro,
                  list,
                  steps,
                  blocks,
                  richBlocks,
                  definitions,
                  footer,
                  outro,
                  type,
                  imagePosition,
                  imageAlt,
                },
                index
              ) => (
                <section
                  key={id}
                  id={id}
                  className="flex scroll-mt-124 flex-col gap-8"
                >
                  {/* Mobile reads the copy first and meets the photo after;
                      `order` flips it without disturbing the DOM sequence. */}
                  {imagePosition === "top" && (
                    <Image
                      src={post.image}
                      alt={imageAlt ?? post.title}
                      width="100%"
                      height="100%"
                      className="order-last w-full rounded-xl object-cover lg:order-first"
                    />
                  )}

                  {/* The opening section leads with body copy, not a heading. */}
                  {index > 0 && (
                    <h2 className="text-navy-800 sm:text-body-lg text-body font-semibold">
                      {title}
                    </h2>
                  )}

                  {/* One wrapper for everything below the heading — this is the
                      node the CMS will hand back as a single rich-text blob. */}
                  <div className="text-body-xs sm:text-body-sm flex flex-col gap-8 font-normal text-black lg:gap-16">
                    {body?.map((paragraph) => (
                      <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                    ))}

                    {richBody?.map((runs) => (
                      <p key={richKey(runs)}>
                        <RichText runs={runs} />
                      </p>
                    ))}

                    {/* Like `steps` but unnumbered — a labelled block of copy
                        rather than an ordered procedure. */}
                    {blocks?.map((block) => (
                      <div key={block.title}>
                        <p className="text-navy-800 font-semibold">
                          {block.title}
                        </p>
                        <p>{block.body}</p>
                      </div>
                    ))}

                    {/* Same shape as `blocks`, but the copy cites sources. */}
                    {richBlocks?.map((block) => (
                      <div key={block.title}>
                        <p className="text-navy-800 font-semibold">
                          {block.title}
                        </p>
                        <p>
                          <RichText runs={block.body} />
                        </p>
                      </div>
                    ))}

                    {/* The lead-in sits tight against its list, so the two
                        share a wrapper instead of taking the parent gap. */}
                    {list && (
                      <div>
                        {listIntro && <p>{listIntro}</p>}
                        <ul className="flex list-disc flex-col gap-4 ps-21">
                          {list.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Numbered variant — each item leads with its own
                        heading, so it needs more room than `list` gives. */}
                    {steps && (
                      <ol className="flex list-decimal flex-col gap-16 ps-21">
                        {steps.map((step) => (
                          <li key={step.title}>
                            <p className="text-navy-800 font-semibold">
                              {step.title}
                            </p>
                            <p>{step.body}</p>
                          </li>
                        ))}
                      </ol>
                    )}

                    {/* Trails whatever structured block sits above it. */}
                    {footer?.map((paragraph) => (
                      <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                    ))}

                    {/* The term runs inline ahead of its definition, so this
                        stays one paragraph rather than a heading plus body. */}
                    {definitions?.map(({ term, body: definition }) => (
                      <p key={term}>
                        <strong className="text-navy-800 font-semibold">
                          {term}
                        </strong>{" "}
                        {definition}
                      </p>
                    ))}

                    {/* Closes the section, after the definitions. */}
                    {outro?.map((paragraph) => (
                      <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                    ))}

                    {imagePosition === "bottom" && (
                      <Image
                        src={post.image}
                        alt={imageAlt ?? post.title}
                        width="100%"
                        height="100%"
                        className="w-full rounded-xl object-cover"
                      />
                    )}

                    {type === "table" && <ComparisonTable {...comparison} />}
                  </div>
                </section>
              )
            )}
          </article>

          <div className="flex items-center gap-12">
            <Image
              src={post.author.avatar}
              alt="Author Avatar"
              width={76}
              height={76}
              className="size-56 shrink-0 rounded-full object-cover sm:size-76"
            />

            <div className="flex flex-col gap-4">
              <p className="text-navy-800 sm:text-body text-[14px]/[22px] font-semibold">
                {post.author.name}
              </p>
              <p className="text-navy-800/60 text-[12px]/[18px] font-normal">
                {post.author.role}
              </p>
            </div>
          </div>

          {/* <div className="flex flex-col gap-8">
            <h2 className="text-navy-800 text-[18px]/[26px] font-bold">FAQ</h2>

            <div className="flex flex-col gap-10">
              {faqs.map((faq, index) => (
                <FaqItem
                  key={faq.question}
                  index={index}
                  {...faq}
                  isOpen={openFaq === index}
                  onToggle={() => setOpenFaq(openFaq === index ? null : index)}
                />
              ))}
            </div>
          </div> */}

          {/* Below `lg` the panel follows the article instead of sitting beside it. */}
          <RelatedPanel className="rounded-2xl px-16 py-20 shadow-[0_10px_61.56px_0_rgba(21,21,21,0.05)] sm:p-24 lg:hidden" />
        </div>

        <aside className="hidden shrink-0 lg:block lg:w-266">
          <RelatedPanel className="sticky top-124 max-h-[calc(100dvh-140px)] [scrollbar-width:thin] overflow-y-auto overscroll-contain rounded-2xl p-16 shadow-[0_10px_61.56px_0_rgba(21,21,21,0.05)] sm:p-24" />
        </aside>
      </div>
    </Section>
  );
}
