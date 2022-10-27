import { fireEvent, render } from "@testing-library/react";
import Button from "./Button";

describe("Button", () => {
  it("Render Button", () => {
    const component = render(
      <Button value="1" onClick={(val) => console.log(val)} />
    );
    expect(component.getByText("1")).toBeInTheDocument();
  });

  it("Button click", () => {
    const buttonClickSpy = jest.fn();

    const component = render(<Button value="1" onClick={buttonClickSpy} />);
    fireEvent.click(component.getByText("1"));

    expect(buttonClickSpy).toBeCalled();
  });
});
