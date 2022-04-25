import React from "react";
import { render, screen, act } from "@testing-library/react";
import ListWidget from "./ListWidget";

describe("ListWidget", () => {
  it("Loads data correctly", async () => {
    jest.spyOn(global, "fetch").mockImplementation(() =>
      Promise.resolve({
        json: () =>
          Promise.resolve({
            results: [
              { name: "colour1" },
              { name: "colour2" },
              { name: "colour3" },
            ],
          }),
      })
    );
    await act(async () => render(<ListWidget title="testTitle" api="" />));
    expect(screen.getByText("colour1")).toBeInTheDocument();
    expect(screen.getAllByText(/colour/).length).toBe(3);
  });

  it("Loads title correctly", async () => {
    jest.spyOn(global, "fetch").mockImplementation(() =>
      Promise.resolve({
        json: () =>
          Promise.resolve({
            results: [
              { name: "colour1" },
              { name: "colour2" },
              { name: "colour3" },
            ],
          }),
      })
    );
    await act(async () => render(<ListWidget title="testTitle" api="" />));
    expect(screen.getByText("testTitle")).toBeInTheDocument();
  });
});
