import { renderComponent } from "config/testUtils";
import { expectTextToBeInTheDocument } from "config/testUtils/expects";
import PlusMinus from ".";

describe("PlusMinus", () => {
  describe("when value is positive", () => {
    it("returns a plus sign", () => {
      renderComponent(<PlusMinus value={100} />);
      expectTextToBeInTheDocument("+");
    });
  });

  describe("when value is negative", () => {
    it("returns a plus minus", () => {
      renderComponent(<PlusMinus value={-100} />);
      expectTextToBeInTheDocument("-");
    });
  });
});
