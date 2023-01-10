import { renderComponent } from "config/testUtils";
import { expectTextToBeInTheDocument } from "config/testUtils/expects";
import ProjectImpactSection from ".";

describe("ProjectImpactSection", () => {
  it("should render without error", () => {
    renderComponent(<ProjectImpactSection integrationImpact={null} />);

    expectTextToBeInTheDocument("Results per Project");
  });
});
