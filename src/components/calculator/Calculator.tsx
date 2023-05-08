import { Keypad, Screen } from "..";
import { useCalculations } from "../../hooks/useCalculations";
import "./Calculator.css";

export const Calculator = () => {
  const { display, count, handleSetAction, handleSetCount } = useCalculations();

  return (
    <div className="calculator">
      <Screen value={display !== "0" ? display : count} />
      <Keypad setAction={handleSetAction} setCount={handleSetCount} />
    </div>
  );
};
