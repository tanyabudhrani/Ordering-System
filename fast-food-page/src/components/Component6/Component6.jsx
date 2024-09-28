/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import "./style.css";

export const Component6 = ({ property1, className }) => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "frame-54",
  });

  return (
    <div
      className={`component-6 ${className}`}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
    >
      {state.property1 === "frame-53" && (
        <div className="overlap-group-2">
          <div className="order-4">
            <div className="text-wrapper-4">Order/Pre-Order</div>
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
        property1: "frame-53",
      };
  }

  return state;
}

Component6.propTypes = {
  property1: PropTypes.oneOf(["frame-53", "frame-54"]),
};
