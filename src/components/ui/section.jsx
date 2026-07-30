import React from "react";

import { cn } from "@/lib/utils";

// Container
const widthStyles = {
  full: "w-full px-0",
  desktop: "max-w-1172",
};

// Section Wrapper
const bgStyles = {
  muted: "bg-muted text-foreground",
  cream: "bg-background text-foreground",
  raised: "bg-surface-raised text-foreground",
  surface: "bg-surface text-foreground",
  dark: "bg-navy-950 text-surface-inverse-foreground",
  inverse: "bg-surface-inverse text-surface-inverse-foreground",
  transparent: "bg-transparent",
};

// Vertical rhythm — mobile value scales up at `lg`. Matches the three
// block spacings used across the designs (44 / 64 / 120).
const spacingStyles = {
  sm: "py-32 lg:py-44",
  default: "py-40 lg:py-64",
  lg: "py-64 lg:py-120",
  none: "",
};

// Each side can be overridden independently, so a section can sit flush
// against its neighbour without hand-writing `pt-0` at the call site.
const spacingTopStyles = {
  sm: "pt-32 lg:pt-44",
  default: "pt-40 lg:pt-64",
  lg: "pt-64 lg:pt-120",
  none: "pt-0 lg:pt-0",
};

const spacingBottomStyles = {
  sm: "pb-32 lg:pb-44",
  default: "pb-40 lg:pb-64",
  lg: "pb-64 lg:pb-120",
  none: "pb-0 lg:pb-0",
};

const Section = ({
  children,
  className = "",
  bg = "muted",
  classNames = {
    container: "",
  },
  width = "desktop",
  spacing = "lg",
  spacingTop,
  spacingBottom,
  ...other
}) => {
  return (
    <section
      className={cn(
        bgStyles[bg],
        spacingStyles[spacing],
        spacingTop && spacingTopStyles[spacingTop],
        spacingBottom && spacingBottomStyles[spacingBottom],
        className
      )}
      {...other}
    >
      <div
        className={cn(
          "mx-auto px-16",
          widthStyles[width],
          classNames.container
        )}
      >
        {children}
      </div>
    </section>
  );
};

export default Section;
