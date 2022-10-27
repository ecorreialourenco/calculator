import { ScreenProps } from "../../models/screen.modal";
import "./Screen.css";

const Screen: React.FC<ScreenProps> = (props) => {
  return (
    <div className="screen">
      <input
        type="text"
        className="screen-input"
        value={props.value}
        readOnly
      />
    </div>
  );
};

export default Screen;
