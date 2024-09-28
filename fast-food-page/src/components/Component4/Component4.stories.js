import { Component4 } from ".";

export default {
  title: "Components/Component4",
  component: Component4,
  argTypes: {
    property1: {
      options: ["frame-47", "frame-48"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "frame-47",
    className: {},
  },
};
