import { ROUTES } from "@/lib/route";

export const NAV_ITEMS = [
  { label: "Projects", href: ROUTES.PROJECTS },
  { label: "Construction", href: ROUTES.CONSTRUCTION },
  {
    // No `href` — this item only opens its dropdown, it never navigates.
    label: "About",
    children: [
      { label: "Our Team", href: ROUTES.OUR_TEAM },
      { label: "Architects", href: ROUTES.ARCHITECTS },
    ],
  },
  { label: "Blog", href: ROUTES.BLOG },
  { label: "Contact", href: ROUTES.CONTACT },
];

export const HEADER_CTA = {
  label: "Book a consultation",
  href: ROUTES.CONTACT,
};
