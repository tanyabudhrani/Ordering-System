import React from "react";
import { IconButton } from "../../components/IconButton";
import { AccountCircle } from "../../icons/AccountCircle";
import { HelpCircle } from "../../icons/HelpCircle";
import { Icon32 } from "../../icons/Icon32";
import { Search } from "../../icons/Search";
import { ShoppingCart } from "../../icons/ShoppingCart";
import { Size482 } from "../../icons/Size482";
import "./style.css";

export const Help = () => {
  return (
    <div className="help">
      <div className="div">
        <div className="text-wrapper">HELP</div>
        <div className="search-bar">
          <div className="state-layer-2">
            <IconButton
              className="leading-icon"
              icon={<Icon32 className="icon-instance-node" color="#49454F" />}
              stateProp="enabled"
              style="standard"
            />
            <div className="content">
              <p className="supporting-text">What do you need help with?</p>
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
        <div className="frame">
          <img className="rectangle" alt="Rectangle" src="/img/rectangle-3.png" />
        </div>
        <div className="text-wrapper-2">Popular Questions</div>
        <div className="text-wrapper-3">Other Topics</div>
        <div className="group-wrapper">
          <div className="group">
            <div className="div-wrapper">
              <p className="p">Can I cancel my order?</p>
            </div>
            <div className="frame-2">
              <p className="text-wrapper-4">How do I change the language?</p>
            </div>
            <div className="frame-3">
              <div className="text-wrapper-5">How do I order?</div>
            </div>
          </div>
        </div>
        <div className="frame-4">
          <div className="text-wrapper-6">Payment Options</div>
          <p className="text-wrapper-7">Change payment, update card, ...</p>
          <img className="img" alt="Frame" src="/img/frame-30.svg" />
        </div>
        <div className="frame-5">
          <img className="img" alt="Frame" src="/img/frame-29.svg" />
          <div className="text-wrapper-8">Technological Issues</div>
          <p className="text-wrapper-9">Glitches on the app, crashes, ...</p>
        </div>
        <div className="frame-wrapper">
          <div className="frame-6">
            <Size482 className="home" />
            <ShoppingCart className="shopping-cart" />
            <HelpCircle className="help-circle" />
            <AccountCircle className="account-circle" color="#1E1E1E" />
            <div className="text-wrapper-10">Home</div>
            <div className="text-wrapper-11">Cart</div>
            <div className="text-wrapper-12">Help</div>
            <div className="text-wrapper-13">Account</div>
          </div>
        </div>
      </div>
    </div>
  );
};
