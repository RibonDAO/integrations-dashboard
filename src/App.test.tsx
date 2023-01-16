import { waitForPromises } from "config/testUtils";
import { render } from "@testing-library/react";
import App from "./App";

describe("renders learn react link", () => {
  it("renders without errors", async () => {
    render(<App />);
    await waitForPromises();
  });
});
