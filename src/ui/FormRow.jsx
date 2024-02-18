function FormRow({ label, error, children }) {
  return (
    <div className="relative flex w-full flex-col gap-1">
      {label && (
        <label className="font-semibold text-primary-400">{label}</label>
      )}
      {children}
      {error && (
        <div className="absolute bottom-[-17px] right-5 rounded-md text-xs text-red-400 xl:bottom-0 xl:top-[5px] xl:text-sm">
          {error}
        </div>
      )}
    </div>
  );
}

export default FormRow;
