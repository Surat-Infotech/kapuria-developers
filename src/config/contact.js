import { EXTERNAL_ROUTES } from "@/lib/route";

import ClockBoldIcon from "@/assets/svgs/common/clock-bold";
import MailIcon from "@/assets/svgs/common/mail";
import MapPinIcon from "@/assets/svgs/common/map-pin";
import PhoneIcon from "@/assets/svgs/common/phone";
import GreeceFlag from "@/assets/svgs/flags/greece";
import IndiaFlag from "@/assets/svgs/flags/india";
import UnitedArabEmiratesFlag from "@/assets/svgs/flags/united-arab-emirates";
import UnitedKingdomFlag from "@/assets/svgs/flags/united-kingdom";
import UnitedStatesFlag from "@/assets/svgs/flags/united-states";
import FacebookIcon from "@/assets/svgs/social/facebook";
import InstagramIcon from "@/assets/svgs/social/instagram";
import XIcon from "@/assets/svgs/social/x";
import YoutubeIcon from "@/assets/svgs/social/youtube";

// TODO: swap in the real desk details.
export const CONTACT_INTRO =
  "Serenity Palms Mansions, Sector 120, Mohali — your dedicated project desk.";

// `href` marks a detail as actionable — those render as emphasised links,
// the rest as plain text.
export const CONTACT_DETAILS = [
  {
    label: "Phone",
    value: "+91 70552 21522",
    href: "tel:+917055221522",
    Icon: PhoneIcon,
  },
  {
    label: "Email",
    value: "social@kapuria.com",
    href: "mailto:social@kapuria.com",
    Icon: MailIcon,
  },
  {
    label: "Office",
    value: "Kapuria House, Sector 120, Mohali, Punjab 140301",
    Icon: MapPinIcon,
  },
  {
    label: "Hours",
    value: "Mon–Fri · 10:00 – 18:00 IST",
    Icon: ClockBoldIcon,
  },
];

// Same icons and chip as the footer — only the destinations differ, and the
// desk lists them in its own order.
export const CONTACT_SOCIAL_LINKS = [
  {
    label: "Facebook",
    href: EXTERNAL_ROUTES.CONTACT_FACEBOOK,
    Icon: FacebookIcon,
  },
  {
    label: "Instagram",
    href: EXTERNAL_ROUTES.CONTACT_INSTAGRAM,
    Icon: InstagramIcon,
  },
  {
    label: "YouTube",
    href: EXTERNAL_ROUTES.CONTACT_YOUTUBE,
    Icon: YoutubeIcon,
  },
  { label: "X", href: EXTERNAL_ROUTES.CONTACT_X, Icon: XIcon },
];

// Dial codes cover the regions on the global-presence map, plus the two
// markets most enquiries arrive from. Flags ship as SVGs — the emoji ones
// don't render on Windows.
export const PHONE_COUNTRY_CODES = [
  { code: "+91", label: "India", Flag: IndiaFlag },
  { code: "+971", label: "United Arab Emirates", Flag: UnitedArabEmiratesFlag },
  { code: "+30", label: "Greece", Flag: GreeceFlag },
  { code: "+44", label: "United Kingdom", Flag: UnitedKingdomFlag },
  { code: "+1", label: "United States", Flag: UnitedStatesFlag },
];

export const ENQUIRY_TOPICS = [
  "General enquiry",
  "Booking a new villa",
  "My villa — existing project",
  "Documents & paperwork",
  "Handover & possession",
  "Careers",
  "Something else",
];
