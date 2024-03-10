function IconLink({ children, onClick }) {
  return (
    <button
      className="cursor-pointer p-1 text-primary-400 hover:opacity-70"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default IconLink;
