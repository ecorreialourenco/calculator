export const setCalculations = (act: string, val1: number, val2: number) => {
  switch (act) {
    case "+":
      return val1 + val2;
    case "-":
      return val1 - val2;
    case "/":
      return val1 / val2;
    case "*":
      return val1 * val2;
    default:
      return 0;
  }
};
