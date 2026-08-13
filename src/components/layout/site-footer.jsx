import Link from "next/link";

import {
  COPYRIGHT,
  FOOTER_COLUMNS,
  FOOTER_TAGLINE,
  LEGAL_LINKS,
  SOCIAL_LINKS,
} from "@/config/footer";

import { FooterLogo } from "@/components/common/logo";
import FooterNavLink from "@/components/layout/footer-nav-link";
import NewsletterForm from "@/components/layout/newsletter-form";

const COLUMN_HEADING =
  "text-[14px]/[26px] font-medium tracking-[2.66px] text-gold-300 uppercase sm:tracking-[2.8px] xl:tracking-[3.04px] sm:text-body-relaxed";

const COLUMN_LINK =
  " text-body-relaxed block font-medium text-white transition-colors duration-200 hover:text-gold-300";

const SiteFooter = () => (
  <footer className="bg-navy-800">
    <div className="mx-auto max-w-xl px-16 py-32 md:py-64 lg:px-24">
      <div className="flex flex-col gap-32 lg:flex-row lg:justify-between xl:gap-32">
        {/* ── Brand + newsletter ─────────────────────────────── */}
        <div className="flex w-full flex-col items-center text-center lg:max-w-550 lg:items-start lg:text-left">
          <Link href="/" aria-label="Kapuria Developers — home">
            <FooterLogo />
          </Link>

          <p className="text-muted-foreground mt-16 max-w-400 text-[16px]/[22px] font-medium">
            {FOOTER_TAGLINE}
          </p>

          <div className="mt-32 w-full lg:mt-60">
            <NewsletterForm />
          </div>
        </div>

        {/* ── Link columns ───────────────────────────────────── */}
        <div className="grid grid-cols-2 gap-x-24 gap-y-32 md:grid-cols-3 lg:flex lg:shrink-0 xl:gap-x-36">
          {FOOTER_COLUMNS.map((column) => (
            <nav key={column.title} aria-label={column.title}>
              <h2 className={COLUMN_HEADING}>{column.title}</h2>

              <ul className="mt-16 flex flex-col gap-16 lg:mt-25 lg:gap-20">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <FooterNavLink href={link.href} className={COLUMN_LINK}>
                      {link.label}
                    </FooterNavLink>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          {/* Full width under the two link columns on mobile. */}
          <div className="col-span-2 md:col-span-1">
            <h2 className={COLUMN_HEADING}>Social Handles</h2>

            <ul className="mt-16 flex items-center gap-24 lg:mt-24">
              {SOCIAL_LINKS.map(({ label, href, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={label}
                    className="hover:text-gold-300 block text-white transition-colors duration-200"
                  >
                    <Icon className="size-24" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <hr className="my-32 border-white/20" />

      {/* ── Legal row ────────────────────────────────────────── */}
      <div className="flex flex-col gap-8 sm:gap-24 lg:flex-row lg:items-center lg:justify-between lg:gap-32">
        <p className="md:text-body-relaxed text-[12px]/[26px] text-neutral-400 sm:text-[14px]/[26px]">
          {COPYRIGHT}
        </p>

        <ul className="flex items-center justify-between gap-24 lg:justify-end lg:gap-40">
          {LEGAL_LINKS.map((link) => (
            <li key={link.href}>
              <FooterNavLink
                href={link.href}
                className="hover:text-gold-300 text-body-xs sm:text-body-sm md:text-body-relaxed whitespace-nowrap text-neutral-400 transition-colors duration-200"
              >
                {link.label}
              </FooterNavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </footer>
);

export default SiteFooter;
