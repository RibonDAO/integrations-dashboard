import { ComponentStory, ComponentMeta } from "@storybook/react";
import Loader from ".";

export default {
  title: "Loader",
  component: Loader,
} as ComponentMeta<typeof Loader>;

const Template: ComponentStory<typeof Loader> = function () {
  return <Loader />;
};

export const Default = Template.bind({});
