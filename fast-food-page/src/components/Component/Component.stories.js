import { Component } from ".";

export default {
  title: "Components/Component",
  component: Component,
  argTypes: {
    property1: {
      options: ["frame-45", "frame-46"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "frame-45",
    className: {},
  },
};
