import { EXTERNAL_ROUTES, ROUTES } from "@/lib/route";

import FacebookIcon from "@/assets/svgs/social/facebook";
import InstagramIcon from "@/assets/svgs/social/instagram";
import XIcon from "@/assets/svgs/social/x";
import YoutubeIcon from "@/assets/svgs/social/youtube";

export const FOOTER_TAGLINE =
  "The best minds in villa, farmhouse Architecture & design, in your inbox.";

export const FOOTER_COLUMNS = [
  {
    title: "About Us",
    links: [
      { label: "Our Story", href: ROUTES.OUR_STORY },
      { label: "Our Projects", href: ROUTES.PROJECTS },
      { label: "Why Us?", href: ROUTES.WHY_US },
      { label: "News & Media", href: ROUTES.BLOG },
    ],
  },
  {
    title: "Help Center",
    links: [
      { label: "FAQs", href: ROUTES.FAQS },
      { label: "Contact us", href: ROUTES.CONTACT },
    ],
  },
];

export const SOCIAL_LINKS = [
  { label: "Facebook", href: EXTERNAL_ROUTES.FACEBOOK, Icon: FacebookIcon },
  { label: "Instagram", href: EXTERNAL_ROUTES.INSTAGRAM, Icon: InstagramIcon },
  { label: "X", href: EXTERNAL_ROUTES.X, Icon: XIcon },
  { label: "YouTube", href: EXTERNAL_ROUTES.YOUTUBE, Icon: YoutubeIcon },
];

export const LEGAL_LINKS = [
  { label: "Privacy Policy", href: ROUTES.PRIVACY_POLICY },
  { label: "Terms & Conditions", href: ROUTES.TERMS_AND_CONDITIONS },
  { label: "Cookies", href: ROUTES.COOKIES },
];

export const COPYRIGHT = "© 2023 Kapuria Developers All rights reserved.";
