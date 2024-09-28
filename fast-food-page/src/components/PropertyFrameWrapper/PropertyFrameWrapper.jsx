/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import "./style.css";

export const PropertyFrameWrapper = ({ property1, className }) => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "frame-44",
  });

  return (
    <div
      className={`property-frame-wrapper property-1-${state.property1} ${className}`}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
    >
      {state.property1 === "frame-46" && (
        <div className="frame">
          <div className="div-wrapper">
            <div className="div">Order/Pre-Order</div>
          </div>
        </div>
      )}
    </div>
  );
};

function reducer(state, action) {
  switch (action) {
    case "mouse_enter":
      return {
        ...state,
        property1: "frame-46",
      };
  }

  return state;
}

PropertyFrameWrapper.propTypes = {
  property1: PropTypes.oneOf(["frame-46", "frame-44"]),
};
