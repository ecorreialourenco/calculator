import { ButtonProps } from "../../models/button.modal";
import "./Button.css";

const Button: React.FC<ButtonProps> = (props) => {
  const { value, onClick } = props;

  const handleClick = () => {
    onClick && onClick(value);
  };

  return (
    <div className="btn-container">
      <button className={`btn ${props.class}`} onClick={handleClick}>
        {value.toUpperCase()}
      </button>
    </div>
  );
};

export default Button;
