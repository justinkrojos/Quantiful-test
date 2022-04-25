import React from "react";
import { render, screen, act } from "@testing-library/react";
import NumberWidget from "./NumberWidget";

describe("NumberWidget", () => {
  it("Loads data correctly", async () => {
    jest.spyOn(global, "fetch").mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve({ pokemon_species_details: ["", "", ""] }),
      })
    );
    await act(async () => render(<NumberWidget title="testTitle" api="" />));
    expect(screen.getByText("3")).toBeInTheDocument();
  });

  it("Loads title correctly", async () => {
    jest.spyOn(global, "fetch").mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve({ pokemon_species_details: ["", "", ""] }),
      })
    );
    await act(async () => render(<NumberWidget title="testTitle" api="" />));
    expect(screen.getByText("testTitle")).toBeInTheDocument();
  });
});
