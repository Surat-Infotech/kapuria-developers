import Image from "next/image";

import { cn } from "@/lib/utils";

import footerLogo from "@/assets/images/footer-logo.svg";
import headerLogo from "@/assets/images/header-logo.svg";
import mobileHeaderLogo from "@/assets/images/mobile-header-logo.svg";

// Static imports carry their intrinsic size, so the defaults below render the
// artwork 1:1 — header-logo is 116x40, footer-logo is 209x72, and the mobile
// `kd` mark is 32x29.

const HeaderLogo = ({ className, ...props }) => (
  <Image
    src={headerLogo}
    alt="Kapuria Developers"
    className={cn("h-40 w-auto", className)}
    {...props}
  />
);

const FooterLogo = ({ className, ...props }) => (
  <Image
    src={footerLogo}
    alt="Kapuria Developers"
    className={cn("h-72 w-auto", className)}
    {...props}
  />
);

// Compact `kd` monogram used in the mobile bar.
const LogoMark = ({ className, ...props }) => (
  <Image
    src={mobileHeaderLogo}
    alt="Kapuria Developers"
    className={cn("h-29 w-auto", className)}
    {...props}
  />
);

export { FooterLogo, HeaderLogo, LogoMark };
