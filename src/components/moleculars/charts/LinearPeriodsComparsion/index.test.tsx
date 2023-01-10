import { renderComponent } from "config/testUtils";
import { expectTextToBeInTheDocument } from "config/testUtils/expects";
import LinearPeriodsComparsion from ".";

describe("LinearPeriodsComparsion", () => {
  it("should render without error", () => {
    renderComponent(
      <LinearPeriodsComparsion
        labels={["Jan", "Feb", "Mar", "Apr", "May"]}
        currentPeriodData={[1, 2, 3, 4, 5]}
        previousPeriodData={[1, 2, 3, 4, 5]}
        daysOffset={2}
        title="Test Graph"
      />,
    );

    expectTextToBeInTheDocument("Test Graph");
    expectTextToBeInTheDocument("current period");
    expectTextToBeInTheDocument("2 days before");
  });
});
