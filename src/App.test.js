import { render, screen, act } from "@testing-library/react";
import App from "./App";
import { configuration } from "./config/useConfig.jsx";

describe("App", () => {
  it("Loads columns correctly", async () => {
    act(() => render(<App />));
    expect(
      screen.getByText(configuration.columns[0].heading)
    ).toBeInTheDocument();
    expect(
      screen.getByText(configuration.columns[1].heading)
    ).toBeInTheDocument();
  });
});
