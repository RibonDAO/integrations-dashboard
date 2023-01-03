import { ComponentStory, ComponentMeta } from "@storybook/react";

import IconAndText, { Props } from ".";

export default {
  title: "IconAndText",
  component: IconAndText,
} as ComponentMeta<typeof IconAndText>;

const Template: ComponentStory<typeof IconAndText> = function (args: Props) {
  return <IconAndText {...args} />;
};

export const Default = Template.bind({});

Default.args = {
  text: "IconAndText",
  icon: "https://s2.glbimg.com/2UBMGRs01DSMHsfaFz-7aIMOYVQ=/e.glbimg.com/og/ed/f/original/2019/02/25/oscar_wilde_sarony.jpg",
};
