import { ComponentStory, ComponentMeta } from "@storybook/react";
import PlusMinus, { Props } from ".";

export default {
  title: "PlusMinus",
  component: PlusMinus,
} as ComponentMeta<typeof PlusMinus>;

const Template: ComponentStory<typeof PlusMinus> = function (args: Props) {
  return <PlusMinus {...args} />;
};

export const Default = Template.bind({});

Default.args = {
  value: 100,
};
