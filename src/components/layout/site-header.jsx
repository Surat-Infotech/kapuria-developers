"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

import { HEADER_CTA, NAV_ITEMS } from "@/config/navigation";

import { HeaderLogo, LogoMark } from "@/components/common/logo";
import { Button } from "@/components/ui/button";

import ChevronDownIcon from "@/assets/svgs/common/chevron-down";
import CloseIcon from "@/assets/svgs/common/close";
import MenuIcon from "@/assets/svgs/common/menu";

// Nav link type specs. Montserrat comes from `font-sans` on <body>.
const DESKTOP_LINK =
  "text-center text-[14px]/[26px] lg:text-[12px]/[26px] xl:text-[14px]/[26px] font-medium tracking-[2.66px] whitespace-nowrap uppercase transition-colors duration-200";

const MOBILE_LINK =
  "text-[14px]/[normal] font-medium uppercase transition-colors duration-200";

// Dropdown items are sentence-cased, not uppercase, and unspaced.
const DROPDOWN_LINK =
  "block text-center text-body-relaxed font-medium whitespace-nowrap transition-colors duration-200";

// Items without an `href` are dropdown triggers only, so their active state
// comes purely from whether a child route is current.
const isBranchActive = (pathname, item) =>
  Boolean(
    (item.href &&
      (pathname === item.href || pathname.startsWith(`${item.href}/`))) ||
    item.children?.some((child) => pathname.startsWith(child.href))
  );

const SiteHeader = ({ mobileTitle = "Welcome" }) => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [openSection, setOpenSection] = useState(null);
  const [lastPathname, setLastPathname] = useState(pathname);

  // Close the drawer whenever the route changes — covers back/forward too.
  if (lastPathname !== pathname) {
    setLastPathname(pathname);
    setMenuOpen(false);
  }

  const closeMenu = () => setMenuOpen(false);

  // Escape closes, and the page behind the drawer must not scroll.
  useEffect(() => {
    if (!menuOpen) return;

    const onKeyDown = (event) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen]);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 px-16 pt-16 lg:px-24 lg:pt-64">
      {/* ── Desktop: single floating pill ─────────────────────── */}
      <div className="bg-navy-800/60 pointer-events-auto mx-auto hidden max-w-1210 items-center gap-16 rounded-[60px] px-16 py-10 backdrop-blur-[12.5px] backdrop-filter lg:flex xl:gap-32 xl:px-30">
        <Link
          href="/"
          aria-label="Kapuria Developers — home"
          className="shrink-0"
        >
          <HeaderLogo priority />
        </Link>

        {/* self-stretch + items-stretch make each <li> span the bar's full
            content height, so the dropdown can be pinned to the bar's bottom
            edge with a fixed offset equal to the bar's py. */}
        <nav
          aria-label="Primary"
          className="flex flex-1 justify-center self-stretch"
        >
          <ul className="flex items-stretch gap-32">
            {NAV_ITEMS.map((item) => {
              const active = isBranchActive(pathname, item);

              if (!item.children) {
                return (
                  <li key={item.href} className="flex items-center">
                    <Link
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className={cn(
                        "block",
                        DESKTOP_LINK,
                        active
                          ? "text-gold-300"
                          : "hover:text-gold-300 text-white"
                      )}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              }

              const triggerClassName = cn(
                "flex items-center gap-6",
                DESKTOP_LINK,
                active ? "text-gold-300" : "hover:text-gold-300 text-white"
              );

              const chevron = (
                <ChevronDownIcon className="size-14 transition-transform duration-200 group-focus-within:-rotate-180 group-hover:-rotate-180" />
              );

              return (
                <li
                  key={item.label}
                  className="group relative flex items-center"
                >
                  {item.href ? (
                    <Link
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className={triggerClassName}
                    >
                      {item.label}
                      {chevron}
                    </Link>
                  ) : (
                    // The panel opens on hover/focus-within, so the trigger
                    // still has to be focusable for keyboard users — hence a
                    // real button rather than a plain span.
                    <button
                      type="button"
                      className={cn(triggerClassName, "cursor-pointer")}
                    >
                      {item.label}
                      {chevron}
                    </button>
                  )}

                  {/* mt-10 == the bar's py-10, so the panel's gold top border
                      sits flush on the bar's bottom edge with no hover gap. */}
                  <ul className="border-gold-300 bg-navy-800 invisible absolute top-full left-1/2 mt-10 flex -translate-x-1/2 flex-col gap-16 rounded-b-[10px] border-t px-26 py-16 opacity-0 shadow-[0_7px_15.5px_0_rgba(0,0,0,0.15)] backdrop-blur-[12.5px] backdrop-filter transition-[opacity,visibility] duration-200 group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          aria-current={
                            pathname === child.href ? "page" : undefined
                          }
                          className={cn(
                            DROPDOWN_LINK,
                            pathname === child.href
                              ? "text-gold-300"
                              : "hover:text-gold-300 text-white"
                          )}
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              );
            })}
          </ul>
        </nav>

        <Button
          asChild
          variant="secondary"
          size="sm"
          className="text-body-sm shrink-0 px-16 py-9 tracking-[0.56px]"
        >
          <Link href={HEADER_CTA.href}>{HEADER_CTA.label}</Link>
        </Button>
      </div>

      {/* ── Mobile: compact pill ──────────────────────────────── */}
      <div className="bg-navy-800/60 pointer-events-auto grid grid-cols-[1fr_auto_1fr] items-center rounded-[60px] px-20 py-12 backdrop-blur-[12.5px] backdrop-filter lg:hidden">
        <Link
          href="/"
          aria-label="Kapuria Developers — home"
          className="justify-self-start"
        >
          <LogoMark priority />
        </Link>

        <span className="text-body-sm font-medium tracking-[2.66px] text-white uppercase">
          {mobileTitle}
        </span>

        <button
          type="button"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          className="hover:text-gold-300 cursor-pointer justify-self-end p-4 text-white transition-colors duration-200"
        >
          <MenuIcon className="size-24" />
        </button>
      </div>

      {/* ── Mobile: full-screen drawer ────────────────────────── */}
      <div
        id="mobile-menu"
        aria-hidden={!menuOpen}
        className={cn(
          // Tailwind v4 `translate-x-*` writes the standalone `translate`
          // property, not `transform` — so `translate` is what must be
          // transitioned. `visibility` rides along so the panel stays visible
          // for the whole slide-out, then drops out of the a11y/tab order.
          "bg-navy-950 pointer-events-auto fixed inset-0 z-10 flex flex-col p-16 transition-[translate,visibility] duration-350 ease-out lg:hidden",
          menuOpen ? "translate-x-0" : "invisible translate-x-full"
        )}
      >
        <div className="flex items-start justify-between">
          <Link
            href="/"
            aria-label="Kapuria Developers — home"
            onClick={closeMenu}
          >
            <HeaderLogo />
          </Link>

          <button
            type="button"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
            className="flex size-40 cursor-pointer items-center justify-center rounded-[14px] border border-white/10 bg-white/8 text-white transition-colors duration-200 hover:bg-white/12"
          >
            <CloseIcon className="size-18" />
          </button>
        </div>

        <nav aria-label="Primary" className="mt-32 flex-1 overflow-y-auto">
          <ul className="flex flex-col gap-4">
            {NAV_ITEMS.map((item) => {
              const active = isBranchActive(pathname, item);
              const sectionKey = item.href ?? item.label;
              const expanded = openSection === sectionKey;

              const rowClassName = cn(
                "flex flex-1 items-center justify-between rounded-xl px-12 py-10",
                MOBILE_LINK,
                active ? "bg-white/8 text-white" : "text-[#B9C4CE]"
              );

              const chevron = (
                <ChevronDownIcon
                  className={cn(
                    "size-18 transition-transform duration-200",
                    expanded && "-rotate-180"
                  )}
                />
              );

              return (
                <li key={sectionKey}>
                  <div className="flex items-center">
                    {item.href ? (
                      <Link
                        href={item.href}
                        aria-current={active ? "page" : undefined}
                        onClick={closeMenu}
                        className={rowClassName}
                      >
                        {item.label}
                        {item.children ? (
                          <button
                            type="button"
                            // The toggle sits inside the <Link>, so a bare
                            // click would bubble to the anchor and navigate +
                            // close the drawer. preventDefault kills the
                            // anchor's default activation; stopPropagation
                            // keeps it out of the Link's onClick={closeMenu}.
                            onClick={(event) => {
                              event.preventDefault();
                              event.stopPropagation();
                              setOpenSection(expanded ? null : sectionKey);
                            }}
                            aria-label={`${expanded ? "Collapse" : "Expand"} ${item.label} menu`}
                            aria-expanded={expanded}
                            className="text-navy-100 hover:text-gold-300 cursor-pointer transition-colors duration-200"
                          >
                            {chevron}
                          </button>
                        ) : null}
                      </Link>
                    ) : (
                      // No href, so the whole row is the toggle — no nested
                      // button inside an anchor, nothing to preventDefault.
                      <button
                        type="button"
                        onClick={() =>
                          setOpenSection(expanded ? null : sectionKey)
                        }
                        aria-expanded={expanded}
                        className={cn(rowClassName, "cursor-pointer text-left")}
                      >
                        {item.label}
                        {chevron}
                      </button>
                    )}
                  </div>

                  {item.children ? (
                    <div
                      className={cn(
                        "grid transition-[grid-template-rows] duration-300 ease-out",
                        expanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                      )}
                    >
                      <ul className="flex flex-col gap-2 overflow-hidden">
                        {item.children.map((child) => (
                          <li key={child.href}>
                            <Link
                              href={child.href}
                              tabIndex={expanded ? undefined : -1}
                              onClick={closeMenu}
                              aria-current={
                                pathname === child.href ? "page" : undefined
                              }
                              className={cn(
                                "flex items-center gap-8 rounded-xl px-12 py-10",
                                MOBILE_LINK,
                                pathname === child.href
                                  ? "bg-white/8 text-white"
                                  : "text-[#B9C4CE]"
                              )}
                            >
                              <span
                                aria-hidden="true"
                                className="size-5 shrink-0 rounded-full bg-[#EBC37F]"
                              />
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                </li>
              );
            })}
          </ul>
        </nav>

        <Button
          asChild
          variant="secondary"
          size="sm"
          width="full"
          className="text-body-sm mt-32 py-9 font-medium tracking-[2px]"
          tabIndex={menuOpen ? undefined : -1}
        >
          <Link href={HEADER_CTA.href} onClick={closeMenu}>
            {HEADER_CTA.label}
          </Link>
        </Button>
      </div>
    </header>
  );
};

export default SiteHeader;
