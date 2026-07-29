import React from "react";

export default function ClockIcon({ className = "", ...other }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="17"
      height="17"
      viewBox="0 0 17 17"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.0625"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...other}
    >
      <path d="M8.50033 15.5846C12.4123 15.5846 15.5837 12.4133 15.5837 8.5013C15.5837 4.58928 12.4123 1.41797 8.50033 1.41797C4.58831 1.41797 1.41699 4.58928 1.41699 8.5013C1.41699 12.4133 4.58831 15.5846 8.50033 15.5846Z" />
      <path d="M8.5 4.25V8.5L11.3333 9.91667" />
    </svg>
  );
}
