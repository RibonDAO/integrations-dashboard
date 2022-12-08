import { ComponentStory, ComponentMeta } from "@storybook/react";
import ModalBlank, { Props } from ".";

export default {
  title: "ModalBlank",
  component: ModalBlank,
} as ComponentMeta<typeof ModalBlank>;

const Template: ComponentStory<typeof ModalBlank> = function (args: Props) {
  return <ModalBlank {...args} />;
};

export const Default = Template.bind({});

Default.args = {
  visible: true,
  children: [<h1>oi</h1>],
  onClose: () => {},
};
