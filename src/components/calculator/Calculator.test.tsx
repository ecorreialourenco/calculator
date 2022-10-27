import { fireEvent, render } from "@testing-library/react";
import Calculator from "./Calculator";

describe("Calculator", () => {
  it("Render Calculator and display the value 10.5", () => {
    const component = render(<Calculator />);

    fireEvent.click(component.getByText("1"));
    fireEvent.click(component.getByText("0"));
    fireEvent.click(component.getByText("."));
    fireEvent.click(component.getByText("5"));

    const input = component.baseElement.querySelector(
      "input"
    ) as HTMLInputElement;

    expect(input.value).toBe("10.5");
  });

  it("Sum 2 numbers", () => {
    const component = render(<Calculator />);

    fireEvent.click(component.getByText("5"));
    fireEvent.click(component.getByText("+"));
    fireEvent.click(component.getByText("2"));
    fireEvent.click(component.getByText("="));

    const input = component.baseElement.querySelector(
      "input"
    ) as HTMLInputElement;

    expect(input.value).toBe("7");
  });

  it("Subtract 2 numbers", () => {
    const component = render(<Calculator />);

    fireEvent.click(component.getByText("5"));
    fireEvent.click(component.getByText("-"));
    fireEvent.click(component.getByText("2"));
    fireEvent.click(component.getByText("="));

    const input = component.baseElement.querySelector(
      "input"
    ) as HTMLInputElement;

    expect(input.value).toBe("3");
  });

  it("Multiply 2 numbers", () => {
    const component = render(<Calculator />);

    fireEvent.click(component.getByText("5"));
    fireEvent.click(component.getByText("*"));
    fireEvent.click(component.getByText("9"));
    fireEvent.click(component.getByText("="));

    const input = component.baseElement.querySelector(
      "input"
    ) as HTMLInputElement;

    expect(input.value).toBe("45");
  });

  it("Divide 2 numbers", () => {
    const component = render(<Calculator />);

    fireEvent.click(component.getByText("9"));
    fireEvent.click(component.getByText("/"));
    fireEvent.click(component.getByText("3"));
    fireEvent.click(component.getByText("="));

    const input = component.baseElement.querySelector(
      "input"
    ) as HTMLInputElement;

    expect(input.value).toBe("3");
  });

  it("Sum 2 numbers and subtract another", () => {
    const component = render(<Calculator />);

    fireEvent.click(component.getByText("9"));
    fireEvent.click(component.getByText("+"));
    fireEvent.click(component.getByText("4"));
    fireEvent.click(component.getByText("-"));
    fireEvent.click(component.getByText("1"));
    fireEvent.click(component.getByText("="));

    const input = component.baseElement.querySelector(
      "input"
    ) as HTMLInputElement;

    expect(input.value).toBe("12");
  });

  it("Get percentage", () => {
    const component = render(<Calculator />);

    fireEvent.click(component.getByText("1"));
    fireEvent.click(component.getByText("0"));
    fireEvent.click(component.getByText("-"));
    fireEvent.click(component.getByText("2"));
    fireEvent.click(component.getByText("0"));
    fireEvent.click(component.getByText("%"));

    const input = component.baseElement.querySelector(
      "input"
    ) as HTMLInputElement;

    expect(input.value).toBe("8");
  });

  it("Clear selected value", () => {
    const component = render(<Calculator />);

    fireEvent.click(component.getByText("1"));
    fireEvent.click(component.getByText("0"));

    const firstInputValue = component.baseElement.querySelector(
      "input"
    ) as HTMLInputElement;

    expect(firstInputValue.value).toBe("10");

    fireEvent.click(component.getByText("C"));
    const secondInputValue = component.baseElement.querySelector(
      "input"
    ) as HTMLInputElement;

    expect(secondInputValue.value).toBe("0");

    fireEvent.click(component.getByText("2"));
    fireEvent.click(component.getByText("0"));

    const fourthInputValue = component.baseElement.querySelector(
      "input"
    ) as HTMLInputElement;

    expect(fourthInputValue.value).toBe("20");

    fireEvent.click(component.getByText("AC"));
    const fifthInputValue = component.baseElement.querySelector(
      "input"
    ) as HTMLInputElement;

    expect(fifthInputValue.value).toBe("0");
  });

  it("Reach number limit", () => {
    const component = render(<Calculator />);

    for (let i = 0; i < 50; i++) {
      if (i % 5 === 1) {
        fireEvent.click(component.getByText("."));
      } else {
        fireEvent.click(component.getByText("5"));
      }
    }

    const input = component.baseElement.querySelector(
      "input"
    ) as HTMLInputElement;

    expect(input.value).toBe("5.555555555555555555555555");
  });

  it("Try to show results without calculations", () => {
    const component = render(<Calculator />);

    fireEvent.click(component.getByText("1"));
    fireEvent.click(component.getByText("="));

    const input = component.baseElement.querySelector(
      "input"
    ) as HTMLInputElement;

    expect(input.value).toBe("1");
  });

  it("Try to get percentage without calculations", () => {
    const component = render(<Calculator />);

    fireEvent.click(component.getByText("1"));
    fireEvent.click(component.getByText("%"));

    const input = component.baseElement.querySelector(
      "input"
    ) as HTMLInputElement;

    expect(input.value).toBe("1");
  });
});
