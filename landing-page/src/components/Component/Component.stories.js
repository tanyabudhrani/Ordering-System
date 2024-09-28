import { Component } from ".";

export default {
  title: "Components/Component",
  component: Component,
  argTypes: {
    property1: {
      options: ["frame-18", "frame-19"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "frame-18",
    className: {},
    propertyFrame: "/img/property-1-frame-18.svg",
  },
};
