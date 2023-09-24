import './Input.css';

function Input({
  name,
  type,
  placeholder,
  isValid,
  errorMessage,
  onChange,
  filled,
}) {
  return (
    <>
      <input
        className={isValid ? 'input' : 'input input_invalid'}
        name={name}
        type={type}
        onChange={(e) => onChange(e)}
      />
      <div className={`input__label ${filled ? 'input__label_filled' : ''}`}>
        {placeholder}
      </div>
      <div
        className={
          isValid
            ? 'input__error-massage_visible_off'
            : 'input__error-massage_visible_on'
        }
      >
        {errorMessage}
      </div>
    </>
  );
}

export default Input;
