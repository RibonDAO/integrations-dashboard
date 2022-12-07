import { ComponentStory, ComponentMeta } from "@storybook/react";
import { useState } from "react";
import RangeDatePicker, { Props } from ".";

export default {
  title: "RangeDatePicker",
  component: RangeDatePicker,
} as ComponentMeta<typeof RangeDatePicker>;

const Template: ComponentStory<typeof RangeDatePicker> = function (
  args: Props,
) {
  return <RangeDatePicker {...args} />;
};

export const Default = Template.bind({});

Default.args = {
  startDate: new Date(),
  endDate: new Date(new Date().setDate(new Date().getDate() + 7)),
  handleStartDateChange: () => {},
  handleEndDateChange: () => {},
};
