import { Keypad } from "../components/Keypad";
import { Screen } from "../components/Screen";
import { useCalculations } from "../hooks/useCalculations";
import "./Calculator.css";

function Calculator() {
  const { display, count, handleSetAction, handleSetCount } = useCalculations();

  return (
    <div className="calculator">
      <Screen value={display !== "0" ? display : count} />
      <Keypad setAction={handleSetAction} setCount={handleSetCount} />
    </div>
  );
}

export default Calculator;
