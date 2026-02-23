function BookInput({ value, onChange, onKeyDown, placeholder, disabled }) {
  return (
    <input
      type="text"
      className="book-input"
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
      placeholder={placeholder}
      disabled={disabled}
    />
  );
}

export default BookInput;
