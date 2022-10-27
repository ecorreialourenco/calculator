import { KeypadProps } from "../../models/keypad.modal";
import Button from "../button/Button";
import "./Keypad.css";

const Keypad: React.FC<KeypadProps> = (props) => {
  const { setAction, setCount } = props;

  return (
    <div className="keypad">
      <Button value="ac" onClick={setAction} class="ac" />
      <Button value="/" onClick={setAction} />
      <Button value="*" onClick={setAction} />
      <Button value="c" onClick={setAction} />

      <Button value="7" onClick={setCount} />
      <Button value="8" onClick={setCount} />
      <Button value="9" onClick={setCount} />
      <Button value="-" onClick={setAction} />

      <Button value="4" onClick={setCount} />
      <Button value="5" onClick={setCount} />
      <Button value="6" onClick={setCount} />
      <Button value="+" onClick={setAction} />

      <Button value="1" onClick={setCount} />
      <Button value="2" onClick={setCount} />
      <Button value="3" onClick={setCount} />
      <Button value="=" onClick={setAction} class="enter" />

      <Button value="%" onClick={setAction} />
      <Button value="0" onClick={setCount} />
      <Button value="." onClick={setCount} />
    </div>
  );
};

export default Keypad;
