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
      { label: "Our Story", href: "/about" },
      { label: "Our Projects", href: "/projects" },
      { label: "Why Us?", href: "/why-us" },
      { label: "News & Media", href: "/blog" },
    ],
  },
  {
    title: "Help Center",
    links: [
      { label: "FAQs", href: "/faqs" },
      { label: "Contact us", href: "/contact" },
    ],
  },
];

// TODO: swap in the real profile URLs.
export const SOCIAL_LINKS = [
  { label: "Facebook", href: "https://facebook.com", Icon: FacebookIcon },
  { label: "Instagram", href: "https://instagram.com", Icon: InstagramIcon },
  { label: "X", href: "https://x.com", Icon: XIcon },
  { label: "YouTube", href: "https://youtube.com", Icon: YoutubeIcon },
];

export const LEGAL_LINKS = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms-and-conditions" },
  { label: "Cookies", href: "/cookies" },
];

export const COPYRIGHT = "© 2023 Kapuria Developers All rights reserved.";
