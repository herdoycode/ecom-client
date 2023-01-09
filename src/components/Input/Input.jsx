import "./Input.css";
const Input = ({ type, name, value, placeholder, onChange }) => {
  return (
    <div className="input">
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="form__control"
      />
    </div>
  );
};

export default Input;
