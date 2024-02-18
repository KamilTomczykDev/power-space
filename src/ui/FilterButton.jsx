function FilterButton({ children, disabled, onClick, active }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`rounded-md border-1 px-1 py-1 text-sm text-primary-400 transition-all duration-100 hover:border-secondary-400 hover:bg-secondary-800 hover:text-white disabled:cursor-not-allowed md:px-2 md:text-lg ${
        active
          ? "border-secondary-400 bg-secondary-800 text-white"
          : "border-primary-500  bg-primary-800"
      }`}
    >
      {children}
    </button>
  );
}

export default FilterButton;
