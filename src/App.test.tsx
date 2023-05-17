import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("Render App", () => {
    render(<App />);

    const input = screen.getByTestId("screenInput") as HTMLInputElement;
    expect(input.value).toBe("0");
  });
});
