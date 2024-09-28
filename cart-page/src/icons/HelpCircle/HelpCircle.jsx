/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

export const HelpCircle = ({ className }) => {
  return (
    <svg
      className={`help-circle ${className}`}
      fill="none"
      height="33"
      viewBox="0 0 33 33"
      width="33"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g className="g" clipPath="url(#clip0_51_343)">
        <path
          className="path"
          d="M12.4988 12.375C12.822 11.456 13.4601 10.6811 14.2999 10.1876C15.1398 9.69397 16.1272 9.51354 17.0874 9.67823C18.0475 9.84292 18.9184 10.3421 19.5457 11.0874C20.1731 11.8326 20.5165 12.7758 20.515 13.75C20.515 16.5 16.39 17.875 16.39 17.875M16.5 23.375H16.5138M30.25 16.5C30.25 24.0939 24.0939 30.25 16.5 30.25C8.90608 30.25 2.75 24.0939 2.75 16.5C2.75 8.90608 8.90608 2.75 16.5 2.75C24.0939 2.75 30.25 8.90608 30.25 16.5Z"
          stroke="black"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="4"
        />
      </g>
      <defs className="defs">
        <clipPath className="clip-path" id="clip0_51_343">
          <rect className="rect" fill="white" height="33" width="33" />
        </clipPath>
      </defs>
    </svg>
  );
};
