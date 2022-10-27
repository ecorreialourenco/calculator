import { render } from "@testing-library/react";
import Screen from "./Screen";

describe("Screen", () => {
  it("Render Screen", () => {
    const inputValue = "1";
    const component = render(<Screen value={inputValue} />);
    const input = component.baseElement.querySelector(
      "input"
    ) as HTMLInputElement;

    expect(input.value).toBe(inputValue);
  });
});
