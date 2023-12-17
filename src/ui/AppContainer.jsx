function AppContainer({ children }) {
  return (
    <div className="flex w-full justify-center px-2 py-[80px] sm:px-6 md:px-8 xl:px-10">
      <div className="flex w-full flex-col gap-8">{children}</div>
    </div>
  );
}

export default AppContainer;
