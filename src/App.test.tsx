import { render } from "@testing-library/react";
import { waitForPromises } from "config/testUtils";
import App from "./App";

test("renders learn react link", async () => {
  render(<App />);
  await waitForPromises();
});
