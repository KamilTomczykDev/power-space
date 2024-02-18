function AppHeading({ children, title }) {
  return (
    <div className="flex flex-col">
      <h2 className="text-lg font-semibold tracking-wide text-secondary-400 md:text-2xl">
        {title}
      </h2>
      <p className="text-xl text-primary-400 md:text-3xl">{children}</p>
    </div>
  );
}

export default AppHeading;
