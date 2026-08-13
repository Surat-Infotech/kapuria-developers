"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

// Only this link needs the current route, so it carries the client boundary on
// its own — the rest of the footer stays a server component.
const FooterNavLink = ({ href, className, children }) => {
  const pathname = usePathname();

  // Same rule as the header: a section stays lit on its detail pages, so
  // /blogs/some-post keeps "Blog" active.
  const active = pathname === href || pathname.startsWith(`${href}/`);

  return (
    <Link
      href={href}
      aria-current={active ? "page" : undefined}
      className={cn(className, active && "text-gold-300")}
    >
      {children}
    </Link>
  );
};

export default FooterNavLink;
