import React from "react";
import { Component } from "../../components/Component";
import { Component4 } from "../../components/Component4";
import { Component5 } from "../../components/Component5";
import { Component6 } from "../../components/Component6";
import { Component7 } from "../../components/Component7";
import { PropertyFrameWrapper } from "../../components/PropertyFrameWrapper";
import { AccountCircle } from "../../icons/AccountCircle";
import { HelpCircle } from "../../icons/HelpCircle";
import { ShoppingCart } from "../../icons/ShoppingCart";
import { Size482 } from "../../icons/Size482";
import "./style.css";

export const FastFood = () => {
  return (
    <div className="fast-food">
      <div className="div-2">
        <div className="text-wrapper-6">FAST-FOOD</div>
        <div className="overlap-group-3">
          <div className="group-wrapper">
            <div className="group">
              <Component className="component-3" property1="frame-45" />
              <PropertyFrameWrapper className="component-2" property1="frame-44" />
              <Component4 className="component-instance" property1="frame-47" />
              <Component5 className="component-5-instance" property1="frame-50" />
              <Component6 className="component-6-instance" property1="frame-54" />
              <Component7 className="component-7-instance" property1="frame-53" />
              <PropertyFrameWrapper className="component-2-instance" property1="frame-44" />
              <Component5 className="design-component-instance-node" property1="frame-50" />
            </div>
          </div>
          <div className="frame-wrapper">
            <div className="frame-4">
              <Size482 className="home" />
              <ShoppingCart className="shopping-cart" />
              <HelpCircle className="help-circle" />
              <AccountCircle className="account-circle" color="#1E1E1E" />
              <div className="text-wrapper-7">Home</div>
              <div className="text-wrapper-8">Cart</div>
              <div className="text-wrapper-9">Help</div>
              <div className="text-wrapper-10">Account</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
