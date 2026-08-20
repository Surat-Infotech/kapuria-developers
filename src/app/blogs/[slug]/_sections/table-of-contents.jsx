"use client";

import { useCallback, useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

// Clearance between the header's bottom edge and the heading it scrolls to.
const HEADER_GAP = 24;

// The header is a fixed pill whose height shifts with the breakpoint — and
// with the CTA button's line-height — so a hard-coded offset drifts out of
// sync the moment either changes. Measure the real box instead. The 128px
// fallback matches the desktop bar for the frame before hydration.
const headerOffset = () => {
  const header = document.querySelector("header");
  const bottom = header?.getBoundingClientRect().bottom;

  return (bottom || 128) + HEADER_GAP;
};

const TableOfContents = ({ sections }) => {
  const [activeId, setActiveId] = useState(sections[0]?.id);
  const listRef = useRef(null);

  // A click sets the highlight up front, so the spy has to stay out of the way
  // until the smooth scroll settles — otherwise every heading swept past on
  // the way there steals the highlight and it visibly flickers.
  const lockedRef = useRef(false);
  const unlockTimerRef = useRef(null);

  const scrollToSection = useCallback((event, id) => {
    const target = document.getElementById(id);

    // No target means the anchor's native jump is still the better fallback.
    if (!target) return;

    event.preventDefault();

    lockedRef.current = true;
    setActiveId(id);

    window.scrollTo({
      top: window.scrollY + target.getBoundingClientRect().top - headerOffset(),
      behavior: "smooth",
    });

    // `replaceState` rather than a pushed entry, so Back leaves the article
    // instead of stepping the reader through every heading they visited.
    window.history.replaceState(null, "", `#${id}`);

    // Released once scrolling goes quiet. `scrollend` isn't universal yet, so
    // an idle timer refreshed by the scroll handler does the same job.
    clearTimeout(unlockTimerRef.current);
    unlockTimerRef.current = setTimeout(() => {
      lockedRef.current = false;
    }, 700);
  }, []);

  // Scroll spy: whichever heading last crossed the offset line wins.
  useEffect(() => {
    const ids = sections.map(({ id }) => id);

    const syncActive = () => {
      if (lockedRef.current) {
        clearTimeout(unlockTimerRef.current);
        unlockTimerRef.current = setTimeout(() => {
          lockedRef.current = false;
        }, 120);
        return;
      }

      const headings = ids
        .map((id) => ({ id, element: document.getElementById(id) }))
        .filter(({ element }) => element);

      if (!headings.length) return;

      // The final sections can be shorter than the remaining scroll distance,
      // so they'd never reach the offset line on their own — at the very
      // bottom of the page the last one is what's being read.
      const atBottom =
        window.scrollY + window.innerHeight >=
        document.documentElement.scrollHeight - 2;

      if (atBottom) {
        setActiveId(headings[headings.length - 1].id);
        return;
      }

      // Sits a few pixels below the landing line so a heading parked there by
      // a click still counts as passed, rounding included.
      const line = headerOffset() + 4;

      const passed = headings.filter(
        ({ element }) => element.getBoundingClientRect().top <= line
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

  useEffect(() => () => clearTimeout(unlockTimerRef.current), []);

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
      className="sticky top-150 flex max-h-[calc(100dvh-140px)] scrollbar-thin flex-col gap-18 overflow-y-auto overscroll-contain pr-8"
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
                onClick={(event) => scrollToSection(event, id)}
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
