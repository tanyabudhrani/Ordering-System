/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Component = ({ property1, className, propertyFrame = "/img/property-1-frame-18.svg" }) => {
  return (
    <img
      className={`component ${className}`}
      alt="Property frame"
      src={property1 === "frame-19" ? "/img/property-1-frame-19.svg" : propertyFrame}
    />
  );
};

Component.propTypes = {
  property1: PropTypes.oneOf(["frame-18", "frame-19"]),
  propertyFrame: PropTypes.string,
};
