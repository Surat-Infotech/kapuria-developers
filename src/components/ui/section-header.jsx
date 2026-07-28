import React from "react";

import { cn } from "@/lib/utils";

// Alignment
const alignStyles = {
  left: { wrapper: "items-start text-left", rule: "" },
  center: { wrapper: "items-center text-center", rule: "mx-auto" },
};

export const SectionHeader = ({
  heading,
  description,
  align = "left",
  rule = true,
  className = "",
  classNames = {
    heading: "",
    description: "",
  },
}) => {
  const styles = alignStyles[align] ?? alignStyles.left;

  return (
    <div className={cn("flex flex-col", styles.wrapper, "mb-40", className)}>
      {heading && (
        <h2
          className={cn(
            "text-display-sm sm:text-display max-w-xl",
            classNames.heading
          )}
        >
          {heading}
        </h2>
      )}

      {/* Gold rule — the recurring 34px divider under every section heading */}
      {rule && (
        <span
          aria-hidden
          className={cn("bg-gold-300 mt-16 block h-1 w-34", styles.rule)}
        />
      )}

      {description && (
        <p className={cn("text-body mt-16", classNames.description)}>
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
