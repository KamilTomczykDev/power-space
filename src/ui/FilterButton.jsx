function FilterButton({ children, disabled, onClick, active }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`rounded-md border-2 px-1 py-1 text-sm text-stone-400 transition-all duration-100 hover:border-green-400 hover:bg-green-800 hover:text-white disabled:cursor-not-allowed md:px-2 md:text-lg ${
        active
          ? "border-green-400 bg-green-800 text-white"
          : "border-stone-500  bg-stone-800 "
      }`}
    >
      {children}
    </button>
  );
}

export default FilterButton;
