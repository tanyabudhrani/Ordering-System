/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

export const ShoppingCart = ({ className }) => {
  return (
    <svg
      className={`shopping-cart ${className}`}
      fill="none"
      height="33"
      viewBox="0 0 33 33"
      width="33"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g className="g" clipPath="url(#clip0_51_328)">
        <path
          className="path"
          d="M1.375 1.375H6.875L10.56 19.7863C10.6857 20.4193 11.0301 20.9879 11.5329 21.3927C12.0356 21.7974 12.6647 22.0124 13.31 22H26.675C27.3203 22.0124 27.9494 21.7974 28.4521 21.3927C28.9549 20.9879 29.2993 20.4193 29.425 19.7863L31.625 8.25H8.25M13.75 28.875C13.75 29.6344 13.1344 30.25 12.375 30.25C11.6156 30.25 11 29.6344 11 28.875C11 28.1156 11.6156 27.5 12.375 27.5C13.1344 27.5 13.75 28.1156 13.75 28.875ZM28.875 28.875C28.875 29.6344 28.2594 30.25 27.5 30.25C26.7406 30.25 26.125 29.6344 26.125 28.875C26.125 28.1156 26.7406 27.5 27.5 27.5C28.2594 27.5 28.875 28.1156 28.875 28.875Z"
          stroke="black"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="4"
        />
      </g>
      <defs className="defs">
        <clipPath className="clip-path" id="clip0_51_328">
          <rect className="rect" fill="white" height="33" width="33" />
        </clipPath>
      </defs>
    </svg>
  );
};
