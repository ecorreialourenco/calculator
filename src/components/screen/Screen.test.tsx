import { render, screen } from "@testing-library/react";
import { Screen } from ".";

describe("Screen", () => {
  it("Render Screen", () => {
    const inputValue = "1";
    render(<Screen value={inputValue} />);

    const input = screen.getByTestId("screenInput") as HTMLInputElement;
    expect(input.value).toBe(inputValue);
  });
});
