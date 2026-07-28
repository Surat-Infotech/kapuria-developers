import React from "react";

export default function QuadrantIcon({ className = "", ...other }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      {...other}
    >
      <path
        d="M0 8.04581H8.09458V0C3.62489 0 0 3.60306 0 8.04581ZM9.90541 0V8.04581H18C18 3.60306 14.3751 0 9.90541 0ZM0 18H8.09458V9.95421H0V18ZM9.90541 18H18V9.95421H9.90541V18Z"
        fill="currentColor"
      />
    </svg>
  );
}
