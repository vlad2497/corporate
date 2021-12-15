import "./index.css";

const Input = ({ value = "", setValue, placeholder = "", width }) => {
  const handleInput = (e) => setValue(e.target.value);
  return (
    <input
      className="input"
      value={value}
      onChange={handleInput}
      placeholder={placeholder}
      width={width}
    />
  );
};

export default Input;
