import Screen from "../screen/Screen";
import { useState } from "react";
import Keypad from "../keypad/Keypad";
import { setCalculations } from "../../utils/setCalculations";
import "./Calculator.css";

function Calculator() {
  const [display, setDisplay] = useState<string>("0");
  const [action, setAction] = useState<string | null>(null);
  const [count, setCount] = useState<string>("0");

  const handleSetAction = (val: string) => {
    switch (val) {
      case "ac":
        setDisplay("0");
        setAction(null);
        setCount("0");
        break;

      case "c":
        setDisplay("0");
        break;

      case "=":
        if (action) {
          const newCalc: string = setCalculations(
            action,
            parseFloat(count),
            parseFloat(display)
          ).toString();
          setDisplay(newCalc);

          setAction(null);
        }

        setCount("0");
        break;

      case "%":
        if (action) {
          const newCalc: string = setCalculations(
            action,
            parseFloat(count),
            parseFloat(count) * (parseFloat(display) / 100)
          ).toString();

          setCount(newCalc);
          setDisplay("0");
        }
        break;

      default:
        if (action) {
          const newCalc: string = setCalculations(
            action,
            parseFloat(count),
            parseFloat(display)
          ).toString();
          setCount(newCalc);
        } else {
          setCount(display);
        }

        setAction(val);
        setDisplay("0");
    }
  };

  const handleSetCount = (val: string) => {
    let newVal: string;

    if (display.length < 26) {
      if (val === ".") {
        let result = display.indexOf(val);
        newVal = result === -1 ? `${display}${val}` : display;
        setDisplay(newVal);
      } else {
        newVal = display !== "0" ? `${display}${val}` : val;
      }
      setDisplay(newVal);
    }
  };

  return (
    <div className="calculator">
      <Screen value={display !== "0" ? display : count} />
      <Keypad setAction={handleSetAction} setCount={handleSetCount} />
    </div>
  );
}

export default Calculator;
