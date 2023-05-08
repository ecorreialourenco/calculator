import { ButtonProps } from "../../models/button.modal";
import "./Button.css";

export const Button: React.FC<ButtonProps> = ({
  value,
  className,
  onClick,
}) => {
  const handleClick = () => {
    onClick(value);
  };

  return (
    <div className="btn-container">
      <button className={`btn ${className}`} onClick={handleClick}>
        {value.toUpperCase()}
      </button>
    </div>
  );
};
