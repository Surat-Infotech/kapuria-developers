import { EXTERNAL_ROUTES, ROUTES } from "@/lib/route";

import FacebookIcon from "@/assets/svgs/social/facebook";
import InstagramIcon from "@/assets/svgs/social/instagram";

export const FOOTER_TAGLINE =
  "The best minds in villa, farmhouse Architecture & design, in your inbox.";

export const FOOTER_COLUMNS = [
  {
    title: "Links",
    links: [
      { label: "Projects", href: ROUTES.PROJECTS },
      { label: "Construction", href: ROUTES.CONSTRUCTION },
      { label: "Blog", href: ROUTES.BLOG },
      { label: "Architects", href: ROUTES.ARCHITECTS },
    ],
  },
  {
    title: "Help Center",
    links: [{ label: "Contact us", href: ROUTES.CONTACT }],
  },
];

export const SOCIAL_LINKS = [
  { label: "Facebook", href: EXTERNAL_ROUTES.FACEBOOK, Icon: FacebookIcon },
  { label: "Instagram", href: EXTERNAL_ROUTES.INSTAGRAM, Icon: InstagramIcon },
];

export const LEGAL_LINKS = [
  { label: "Privacy Policy", href: ROUTES.PRIVACY_POLICY },
  { label: "Terms & Conditions", href: ROUTES.TERMS_AND_CONDITIONS },
  { label: "Cookies", href: ROUTES.COOKIES },
];

export const COPYRIGHT = "© 2023 Kapuria Developers All rights reserved.";
