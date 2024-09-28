import React from "react";
import { Component } from "../../components/Component";
import { IconButton } from "../../components/IconButton";
import { AccountCircle } from "../../icons/AccountCircle";
import { HelpCircle } from "../../icons/HelpCircle";
import { Icon32 } from "../../icons/Icon32";
import { Search } from "../../icons/Search";
import { ShoppingCart } from "../../icons/ShoppingCart";
import { Size482 } from "../../icons/Size482";
import "./style.css";

export const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="div">
        <div className="frame">
          <div className="group-wrapper">
            <div className="group">
              <div className="overlap">
                <div className="frame-2">
                  <img className="ellipse" alt="Ellipse" src="/img/ellipse-1.png" />
                  <div className="text-wrapper">Fast-Food</div>
                </div>
                <div className="frame-3">
                  <img className="ellipse" alt="Ellipse" src="/img/ellipse-1-1.png" />
                  <div className="text-wrapper-2">Chinese</div>
                </div>
              </div>
              <div className="frame-4">
                <img className="ellipse" alt="Ellipse" src="/img/ellipse-1-2.png" />
                <div className="text-wrapper-2">Western</div>
              </div>
              <div className="frame-5">
                <img className="ellipse" alt="Ellipse" src="/img/ellipse-1-3.png" />
                <div className="text-wrapper-3">BBQ</div>
              </div>
              <div className="frame-6">
                <img className="ellipse" alt="Ellipse" src="/img/ellipse-1-4.png" />
                <div className="overlap-group">
                  <div className="text-wrapper-4">Bakery</div>
                  <div className="text-wrapper-4">Bakery</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="search-bar">
          <div className="state-layer-2">
            <IconButton
              className="leading-icon"
              icon={<Icon32 className="icon-instance-node" color="#49454F" />}
              stateProp="enabled"
              style="standard"
            />
            <div className="content">
              <div className="supporting-text">Hungry?</div>
            </div>
            <div className="trailing-elements">
              <IconButton
                icon={<Search className="icon-instance-node" color="#49454F" />}
                stateProp="enabled"
                style="standard"
              />
            </div>
          </div>
        </div>
        <div className="text-wrapper-5">Hot Items</div>
        <Component className="component-1" property1="frame-18" propertyFrame="/img/component-1.svg" />
        <img className="rectangle" alt="Rectangle" src="/img/rectangle-4.png" />
        <div className="frame-wrapper">
          <div className="div-wrapper">
            <div className="group-2">
              <div className="frame-7" />
              <div className="frame-8" />
              <div className="frame-9" />
              <div className="frame-10" />
              <div className="frame-11" />
              <div className="frame-12" />
            </div>
          </div>
        </div>
        <div className="group-3">
          <div className="frame-13">
            <Size482 className="home" color="#4C705E" />
            <ShoppingCart className="shopping-cart" />
            <HelpCircle className="help-circle" />
            <AccountCircle className="account-circle" color="#1E1E1E" />
            <div className="text-wrapper-6">Home</div>
            <div className="text-wrapper-7">Cart</div>
            <div className="text-wrapper-8">Help</div>
            <div className="text-wrapper-9">Account</div>
          </div>
        </div>
      </div>
    </div>
  );
};
