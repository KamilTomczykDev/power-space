function AppFormRow({ label, children, error }) {
  return (
    <div className="relative flex w-full flex-col gap-1 sm:grid sm:grid-cols-form-cols sm:items-center sm:gap-10 md:text-lg">
      {label && (
        <label className="font-semibold text-primary-400">{label}</label>
      )}
      {children}
      {error && (
        <div className="absolute bottom-[-17px] right-5 rounded-md text-xs text-red-400 xl:bottom-0 xl:right-[50px] xl:top-[15px] xl:text-sm">
          {error}
        </div>
      )}
    </div>
  );
}

export default AppFormRow;
