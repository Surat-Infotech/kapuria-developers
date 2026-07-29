export const NAV_ITEMS = [
  { label: "Projects", href: "/projects" },
  { label: "Construction", href: "/construction" },
  {
    // No `href` — this item only opens its dropdown, it never navigates.
    label: "About",
    children: [
      { label: "Our Team", href: "/about/team" },
      { label: "Architects", href: "/about/architects" },
    ],
  },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const HEADER_CTA = { label: "Book a consultation", href: "/contact" };
