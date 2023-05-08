import { render, screen } from "@testing-library/react";
import { Calculator } from "./Calculator";

describe("Calculator", () => {
  it("Render Calculator and display the value 10.5", () => {
    render(<Calculator />);

    const input = screen.getByTestId("screenInput") as HTMLInputElement;

    expect(input).toBeDefined();
  });
});
