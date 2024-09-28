import { Component6 } from ".";

export default {
  title: "Components/Component6",
  component: Component6,
  argTypes: {
    property1: {
      options: ["frame-53", "frame-54"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "frame-53",
    className: {},
  },
};
