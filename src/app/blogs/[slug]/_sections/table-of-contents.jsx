"use client";

import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

// The fixed header's height shifts with the breakpoint, so measure it rather
// than hard-code an offset that drifts. +24 is the gap left below the bar.
const offset = () =>
  (document.querySelector("header")?.getBoundingClientRect().bottom || 128) +
  24;

const TableOfContents = ({ sections }) => {
  const [activeId, setActiveId] = useState(sections[0]?.id);
  const listRef = useRef(null);
  const timerRef = useRef(null);

  // A pending timer means a click is still scrolling, so the spy stands down —
  // otherwise headings swept past on the way steal the highlight and it flickers.
  const lock = (ms) => {
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => (timerRef.current = null), ms);
  };

  // Spy: the last heading past the offset line wins. Closing sections can be
  // too short to ever reach it, so at the page bottom the last one is it.
  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    const sync = () => {
      if (timerRef.current) return lock(120);

      const line = offset() + 4;
      let current = sections[0]?.id;

      sections.forEach(({ id }) => {
        if (document.getElementById(id)?.getBoundingClientRect().top <= line)
          current = id;
      });

      const atBottom =
        window.scrollY + window.innerHeight >=
        document.documentElement.scrollHeight - 2;

      setActiveId(atBottom ? sections.at(-1)?.id : current);
    };

    sync();
    window.addEventListener("scroll", sync, { passive: true, signal });
    window.addEventListener("resize", sync, { signal });

    return () => {
      controller.abort();
      clearTimeout(timerRef.current);
    };
  }, [sections]);

  // The list scrolls inside the sticky box, so the active item can fall out of
  // view on long posts. Nudge the container only — never the page. At most one
  // of the two terms is non-zero: the row sits above the box, below it, or in.
  useEffect(() => {
    const list = listRef.current;
    const row = list
      ?.querySelector(`[data-toc-id="${activeId}"]`)
      ?.getBoundingClientRect();

    if (!row) return;

    const box = list.getBoundingClientRect();
    list.scrollTop +=
      Math.min(0, row.top - box.top) + Math.max(0, row.bottom - box.bottom);
  }, [activeId]);

  const scrollToSection = (event, id) => {
    const target = document.getElementById(id);
    if (!target) return; // Let the anchor's native jump stand in.

    event.preventDefault();
    lock(700);
    setActiveId(id);
    window.scrollTo({
      top: window.scrollY + target.getBoundingClientRect().top - offset(),
      behavior: "smooth",
    });
    // Replaced, not pushed, so Back leaves the article rather than stepping
    // through every heading the reader clicked.
    window.history.replaceState(null, "", `#${id}`);
  };

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
