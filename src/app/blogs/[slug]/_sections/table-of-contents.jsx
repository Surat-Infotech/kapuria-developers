"use client";

import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

// Matches the `scroll-mt-124` on the article sections, plus a few pixels of
// slack — a heading becomes current once it has cleared the fixed header.
const ACTIVE_OFFSET = 130;

const TableOfContents = ({ sections }) => {
  const [activeId, setActiveId] = useState(sections[0]?.id);
  const listRef = useRef(null);

  // Scroll spy: whichever section heading last crossed the offset line wins.
  useEffect(() => {
    const ids = sections.map(({ id }) => id);

    const syncActive = () => {
      const headings = ids
        .map((id) => ({ id, element: document.getElementById(id) }))
        .filter(({ element }) => element);

      if (!headings.length) return;

      // The final sections can be shorter than the remaining scroll distance,
      // so they'd never reach the offset line on their own — at the very
      // bottom of the page the last one is the one being read.
      const atBottom =
        window.scrollY + window.innerHeight >=
        document.documentElement.scrollHeight - 2;

      if (atBottom) {
        setActiveId(headings[headings.length - 1].id);
        return;
      }

      const passed = headings.filter(
        ({ element }) => element.getBoundingClientRect().top <= ACTIVE_OFFSET
      );

      setActiveId((passed[passed.length - 1] ?? headings[0]).id);
    };

    syncActive();

    window.addEventListener("scroll", syncActive, { passive: true });
    window.addEventListener("resize", syncActive);

    return () => {
      window.removeEventListener("scroll", syncActive);
      window.removeEventListener("resize", syncActive);
    };
  }, [sections]);

  // The list scrolls inside the sticky box, so on long posts the active item
  // can sit outside it. Nudge the container only — never the page.
  useEffect(() => {
    const list = listRef.current;
    const item = list?.querySelector(`[data-toc-id="${activeId}"]`);

    if (!list || !item) return;

    const listRect = list.getBoundingClientRect();
    const itemRect = item.getBoundingClientRect();

    if (itemRect.top < listRect.top) {
      list.scrollTop += itemRect.top - listRect.top;
    } else if (itemRect.bottom > listRect.bottom) {
      list.scrollTop += itemRect.bottom - listRect.bottom;
    }
  }, [activeId]);

  return (
    <div
      ref={listRef}
      className="sticky top-124 flex max-h-[calc(100dvh-140px)] scrollbar-thin flex-col gap-18 overflow-y-auto overscroll-contain pr-8"
    >
      <h2 className="text-navy-800 text-[18px]/[26px] font-bold">
        Table of Contents
      </h2>

      <ul className="flex list-disc flex-col gap-16 ps-21">
        {sections.map(({ id, title }) => {
          const active = id === activeId;

          return (
            <li
              key={id}
              data-toc-id={id}
              className={cn(
                "text-[14px]/[22px] transition-colors duration-200",
                active
                  ? "text-navy-800 font-bold"
                  : "text-navy-800/60 font-medium"
              )}
            >
              <a
                href={`#${id}`}
                aria-current={active ? "true" : undefined}
                // The native jump already lands correctly thanks to
                // `scroll-mt-124`; flipping the state here just means the
                // highlight doesn't wait for the smooth scroll to finish.
                onClick={() => setActiveId(id)}
                className="focus-visible:ring-gold-400 hover:text-navy-800 rounded-sm transition-colors duration-200 focus-visible:ring-2 focus-visible:outline-none"
              >
                {title}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TableOfContents;
