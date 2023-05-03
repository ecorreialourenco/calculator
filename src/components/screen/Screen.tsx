import { ScreenProps } from "../../models/screen.modal";
import "./Screen.css";

export const Screen: React.FC<ScreenProps> = (props) => (
  <div className="screen">
    <input
      data-testid="screenInput"
      type="text"
      className="screen-input"
      value={props.value}
      readOnly
    />
  </div>
);
