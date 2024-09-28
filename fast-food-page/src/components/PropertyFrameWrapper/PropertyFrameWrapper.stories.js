import { PropertyFrameWrapper } from ".";

export default {
  title: "Components/PropertyFrameWrapper",
  component: PropertyFrameWrapper,
  argTypes: {
    property1: {
      options: ["frame-46", "frame-44"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "frame-46",
    className: {},
  },
};
