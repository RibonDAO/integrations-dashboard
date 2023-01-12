import { ComponentStory, ComponentMeta } from "@storybook/react";
import LinearPeriodsComparsion, { Props } from ".";

export default {
  title: "LinearPeriodsComparsion",
  component: LinearPeriodsComparsion,
} as ComponentMeta<typeof LinearPeriodsComparsion>;

const Template: ComponentStory<typeof LinearPeriodsComparsion> = function (
  args: Props,
) {
  return (
    <div style={{ width: "400px" }}>
      <LinearPeriodsComparsion {...args} />
    </div>
  );
};

export const Default = Template.bind({});

Default.args = {
  title: "Dummy data",
  currentPeriodData: [1, 2, 3, 4, 5],
  previousPeriodData: [0, 1, 2, 3, 4],
  labels: ["Jan", "Feb", "Mar", "Apr", "May"],
  daysOffset: 1,
};
