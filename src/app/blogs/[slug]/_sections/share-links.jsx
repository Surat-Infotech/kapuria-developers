"use client";

import { EXTERNAL_ROUTES } from "@/lib/route";

import FacebookIcon from "@/assets/svgs/social/facebook";
import InstagramIcon from "@/assets/svgs/social/instagram";
import XIcon from "@/assets/svgs/social/x";
import YoutubeIcon from "@/assets/svgs/social/youtube";

// The article URL isn't known on the server — the post can be reached from
// more than one host — so each target is built from `location.href` at click
// time. Facebook and X take a share intent; Instagram and YouTube have no way
// to share a link, so those two open the Kapuria accounts instead.
const SHARE = [
  {
    Icon: FacebookIcon,
    label: "Share on Facebook",
    href: (url) => EXTERNAL_ROUTES.FACEBOOK,
  },
  {
    Icon: InstagramIcon,
    label: "Kapuria Developers on Instagram",
    href: () => EXTERNAL_ROUTES.INSTAGRAM,
  },
  {
    Icon: XIcon,
    label: "Share on X",
    href: (url) => EXTERNAL_ROUTES.X,
  },
  {
    Icon: YoutubeIcon,
    label: "Kapuria Developers on YouTube",
    href: () => EXTERNAL_ROUTES.YOUTUBE,
  },
];

const ShareLinks = ({ title }) => (
  <div className="border-navy-800/10 mt-18 flex flex-col items-center gap-16 border-t pt-18">
    <p className="text-navy-800 text-body md:text-body-lg font-semibold">
      Share this article
    </p>

    <div className="flex items-center gap-16">
      {SHARE.map(({ Icon, label, href }) => (
        <button
          key={label}
          type="button"
          aria-label={label}
          onClick={() =>
            window.open(
              href(window.location.href, title),
              "_blank",
              "noopener,noreferrer"
            )
          }
          className="text-navy-800/60 hover:text-gold-400 focus-visible:ring-gold-400 cursor-pointer rounded-sm transition-colors duration-200 focus-visible:ring-2 focus-visible:outline-none"
        >
          <Icon className="size-24" />
        </button>
      ))}
    </div>
  </div>
);

export default ShareLinks;
