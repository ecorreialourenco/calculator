import { KeypadProps } from "../../models/keypad.modal";
import { Button } from "../Button";
import "./Keypad.css";

export const Keypad: React.FC<KeypadProps> = ({ setAction, setCount }) => (
  <div className="keypad">
    <Button value="ac" onClick={setAction} className="ac" />
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
    <Button value="=" onClick={setAction} className="enter" />

    <Button value="%" onClick={setAction} />
    <Button value="0" onClick={setCount} />
    <Button value="." onClick={setCount} />
  </div>
);
