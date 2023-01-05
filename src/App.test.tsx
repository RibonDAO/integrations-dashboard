import { renderComponent, waitForPromises } from "config/testUtils";
import App from "./App";

describe("renders learn react link", () => {
  it("renders without errors", async () => {
    renderComponent(<App />);
    await waitForPromises();
  });
});
