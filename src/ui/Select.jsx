function Select({ options, value, onChange }) {
  return (
    <select
      onChange={onChange}
      className="rounded-md border-2 border-stone-500 bg-stone-800 p-2 text-sm text-stone-400 md:text-lg"
      value={value}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}

export default Select;
