import { Component5 } from ".";

export default {
  title: "Components/Component5",
  component: Component5,
  argTypes: {
    property1: {
      options: ["frame-51", "frame-50"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "frame-51",
    className: {},
  },
};
