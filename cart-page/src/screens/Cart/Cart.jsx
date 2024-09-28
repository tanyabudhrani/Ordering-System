import React from "react";
import { AccountCircle } from "../../icons/AccountCircle";
import { HelpCircle } from "../../icons/HelpCircle";
import { Search } from "../../icons/Search";
import { ShoppingCart } from "../../icons/ShoppingCart";
import { Size482 } from "../../icons/Size482";
import { Size483 } from "../../icons/Size483";
import "./style.css";

export const Cart = () => {
  return (
    <div className="cart">
      <div className="div">
        <div className="text-wrapper">MY CART</div>
        <div className="frame">
          <Search className="search-1" color="#4C705E" />
        </div>
        <div className="frame-2">
          <div className="text-wrapper-2">Asap(25 Minutes)</div>
          <div className="text-wrapper-3">Order time</div>
          <img className="rectangle" alt="Rectangle" src="/img/rectangle-3.png" />
        </div>
        <div className="frame-3">
          <div className="overlap-group-wrapper">
            <div className="overlap-group">
              <div className="text-wrapper-4">1</div>
              <Size483 className="plus" color="white" />
            </div>
          </div>
          <div className="overlap">
            <div className="text-wrapper-5">Vanilla Donut</div>
            <div className="text-wrapper-6">No icing</div>
          </div>
          <div className="frame-4" />
        </div>
        <div className="text-wrapper-7">Add more items</div>
        <div className="frame-5">
          <div className="overlap-group-wrapper">
            <div className="overlap-group">
              <div className="text-wrapper-4">1</div>
              <Size483 className="plus" color="white" />
            </div>
          </div>
          <div className="frame-6" />
          <div className="text-wrapper-8">Cheung Fun</div>
        </div>
        <div className="frame-7">
          <div className="overlap-group-wrapper">
            <div className="overlap-group">
              <div className="text-wrapper-4">1</div>
              <Size483 className="plus" color="white" />
            </div>
          </div>
          <div className="text-wrapper-9">Iced Lemon Tea</div>
          <div className="frame-8" />
        </div>
        <div className="frame-wrapper">
          <div className="div-wrapper">
            <div className="frame-9">
              <div className="group-wrapper">
                <div className="group">
                  <div className="frame-10" />
                  <div className="frame-11" />
                  <div className="frame-12" />
                  <div className="frame-13" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-wrapper-10">Popular with your items</div>
        <div className="group-2">
          <div className="frame-14">
            <Size482 className="home" />
            <ShoppingCart className="shopping-cart" />
            <HelpCircle className="help-circle" />
            <AccountCircle className="account-circle" color="#1E1E1E" />
            <div className="text-wrapper-11">Home</div>
            <div className="text-wrapper-12">Cart</div>
            <div className="text-wrapper-13">Help</div>
            <div className="text-wrapper-14">Account</div>
          </div>
        </div>
      </div>
    </div>
  );
};
