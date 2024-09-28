/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const Size483 = ({ color = "#1E1E1E", className }) => {
  return (
    <svg
      className={`size-48-3 ${className}`}
      fill="none"
      height="21"
      viewBox="0 0 25 21"
      width="25"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M12.5 4.375V16.625M5.20834 10.5H19.7917"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="4"
      />
    </svg>
  );
};

Size483.propTypes = {
  color: PropTypes.string,
};
