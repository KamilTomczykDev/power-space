function IconLink({ children, onClick }) {
  return (
    <div
      className="cursor-pointer p-1 text-stone-400 hover:opacity-70"
      onClick={onClick}
    >
      {children}
    </div>
  );
}

export default IconLink;
