import { fireEvent, render, screen } from "@testing-library/react";
import { Button } from "../Button";

describe("Button", () => {
  it("Render Button", () => {
    render(<Button value="1" onClick={(val: string) => console.log(val)} />);
    expect(screen.getByText("1")).toBeInTheDocument();
  });

  it("Button click", () => {
    const buttonClickSpy = jest.fn();

    render(<Button value="1" onClick={buttonClickSpy} />);
    fireEvent.click(screen.getByText("1"));

    expect(buttonClickSpy).toBeCalled();
  });
});
