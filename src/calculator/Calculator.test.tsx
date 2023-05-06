import { fireEvent, render, screen } from "@testing-library/react";
import Calculator from "./Calculator";

describe("Calculator", () => {
  it("Render Calculator and display the value 10.5", () => {
    render(<Calculator />);

    ["1", "0", ".", "5"].forEach((value: string) =>
      fireEvent.click(screen.getByText(value))
    );

    const input = screen.getByTestId("screenInput") as HTMLInputElement;

    expect(input.value).toBe("10.5");
  });

  it("Sum 2 numbers", () => {
    render(<Calculator />);

    ["5", "+", "2", "="].forEach((value: string) =>
      fireEvent.click(screen.getByText(value))
    );

    const input = screen.getByTestId("screenInput") as HTMLInputElement;

    expect(input.value).toBe("7");
  });

  it("Subtract 2 numbers", () => {
    render(<Calculator />);

    ["5", "-", "2", "="].forEach((value: string) =>
      fireEvent.click(screen.getByText(value))
    );

    const input = screen.getByTestId("screenInput") as HTMLInputElement;

    expect(input.value).toBe("3");
  });

  it("Multiply 2 numbers", () => {
    render(<Calculator />);

    ["5", "*", "9", "="].forEach((value: string) =>
      fireEvent.click(screen.getByText(value))
    );

    const input = screen.getByTestId("screenInput") as HTMLInputElement;

    expect(input.value).toBe("45");
  });

  it("Divide 2 numbers", () => {
    render(<Calculator />);

    ["9", "/", "3", "="].forEach((value: string) =>
      fireEvent.click(screen.getByText(value))
    );

    const input = screen.getByTestId("screenInput") as HTMLInputElement;

    expect(input.value).toBe("3");
  });

  it("Sum 2 numbers and subtract another", () => {
    render(<Calculator />);

    ["9", "+", "4", "-", "1", "="].forEach((value: string) =>
      fireEvent.click(screen.getByText(value))
    );

    const input = screen.getByTestId("screenInput") as HTMLInputElement;

    expect(input.value).toBe("12");
  });

  it("Get percentage", () => {
    render(<Calculator />);

    ["1", "0", "-", "2", "0", "%"].forEach((value: string) =>
      fireEvent.click(screen.getByText(value))
    );

    const input = screen.getByTestId("screenInput") as HTMLInputElement;

    expect(input.value).toBe("8");
  });

  it("Clear selected value", () => {
    render(<Calculator />);

    ["1", "0"].forEach((value: string) =>
      fireEvent.click(screen.getByText(value))
    );

    const firstInputValue = screen.getByTestId(
      "screenInput"
    ) as HTMLInputElement;

    expect(firstInputValue.value).toBe("10");

    fireEvent.click(screen.getByText("C"));
    const secondInputValue = screen.getByTestId(
      "screenInput"
    ) as HTMLInputElement;

    expect(secondInputValue.value).toBe("0");

    ["2", "0"].forEach((value: string) =>
      fireEvent.click(screen.getByText(value))
    );

    const fourthInputValue = screen.getByTestId(
      "screenInput"
    ) as HTMLInputElement;

    expect(fourthInputValue.value).toBe("20");

    fireEvent.click(screen.getByText("AC"));
    const fifthInputValue = screen.getByTestId(
      "screenInput"
    ) as HTMLInputElement;

    expect(fifthInputValue.value).toBe("0");
  });

  it("Reach number limit", () => {
    render(<Calculator />);

    for (let i = 0; i < 50; i++) {
      if (i % 5 === 1) {
        fireEvent.click(screen.getByText("."));
      } else {
        fireEvent.click(screen.getByText("5"));
      }
    }

    const input = screen.getByTestId("screenInput") as HTMLInputElement;

    expect(input.value).toBe("5.555555555555555555555555");
  });

  it("Try to show results without calculations", () => {
    render(<Calculator />);

    fireEvent.click(screen.getByText("1"));
    fireEvent.click(screen.getByText("="));

    const input = screen.getByTestId("screenInput") as HTMLInputElement;

    expect(input.value).toBe("1");
  });

  it("Try to get percentage without calculations", () => {
    render(<Calculator />);

    fireEvent.click(screen.getByText("1"));
    fireEvent.click(screen.getByText("%"));

    const input = screen.getByTestId("screenInput") as HTMLInputElement;

    expect(input.value).toBe("1");
  });
});
