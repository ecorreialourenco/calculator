import { ButtonProps } from "../../models/button.modal";
import "./Button.css";

export const Button: React.FC<ButtonProps> = ({
  value,
  className,
  onClick,
}) => (
  <div className="btn-container">
    <button
      className={`btn ${className}`}
      onClick={() => {
        onClick(value);
      }}
    >
      {value.toUpperCase()}
    </button>
  </div>
);
