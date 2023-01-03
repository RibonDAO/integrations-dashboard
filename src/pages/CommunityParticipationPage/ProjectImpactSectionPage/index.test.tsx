import { renderComponent } from "config/testUtils";
import { expectTextToBeInTheDocument } from "config/testUtils/expects";
import ProjectImpactSectionPage from ".";

describe("ProjectImpactSectionPage", () => {
  it("should render without error", () => {
    renderComponent(<ProjectImpactSectionPage integrationImpact={null} />);

    expectTextToBeInTheDocument("Results per Project");
  });
});
