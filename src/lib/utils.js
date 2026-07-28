import { clsx } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      // Typography utilities from globals.css — these are font-size+line-height,
      // registered so tailwind-merge does not confuse them with color utilities.
      "font-size": [
        {
          text: [
            "display",
            "display-accent",
            "display-sm",
            "display-sm-accent",
            "h3",
            "h3-accent",
            "h4",
            "h5",
            "body-lg",
            "body",
            "body-relaxed",
            "body-sm",
            "btn",
            "eyebrow",
            "link",
          ],
        },
      ],
    },
  },
});

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
