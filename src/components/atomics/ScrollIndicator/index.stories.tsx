import { ComponentStory, ComponentMeta } from "@storybook/react";
import ScrollIndicator from ".";

export default {
  title: "ScrollIndicator",
  component: ScrollIndicator,
} as ComponentMeta<typeof ScrollIndicator>;

const Template: ComponentStory<typeof ScrollIndicator> = function () {
  return <ScrollIndicator />;
};

export const Default = Template.bind({});
