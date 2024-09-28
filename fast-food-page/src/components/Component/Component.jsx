/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import "./style.css";

export const Component = ({ property1, className }) => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "frame-45",
  });

  return (
    <div
      className={`component ${state.property1} ${className}`}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
    >
      {state.property1 === "frame-46" && (
        <div className="overlap-group">
          <div className="order">
            <div className="text-wrapper">Order/Pre-Order</div>
          </div>
          <div className="order">
            <div className="text-wrapper">Order/Pre-Order</div>
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

Component.propTypes = {
  property1: PropTypes.oneOf(["frame-45", "frame-46"]),
};
