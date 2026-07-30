import React from "react";

// Stands in for the "O" in project wordmarks — a four-pane window whose top
// two panes are arched. Larger, arch-topped sibling of `quadrant.jsx`.
export default function ArchQuadrantIcon({ className = "", ...other }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="41"
      height="41"
      viewBox="0 0 41 41"
      fill="none"
      aria-hidden="true"
      {...other}
    >
      <path
        d="M22.8614 18.3242V0C32.8779 0 41 8.20525 41 18.3242H22.8614Z"
        fill="currentColor"
      />
      <path d="M18.1386 41H0V22.6759H18.1386V41Z" fill="currentColor" />
      <path d="M41 41H22.8614V22.6759H41V41Z" fill="currentColor" />
      <path
        d="M18.1386 18.3242H0C0 8.20525 8.12214 0 18.1386 0V18.3242Z"
        fill="currentColor"
      />
    </svg>
  );
}
