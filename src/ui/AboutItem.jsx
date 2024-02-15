function AboutItem({ icon, title, children }) {
  return (
    <div className="flex flex-col items-start text-primary-500 xs:items-center xs:text-center">
      <div className="mb-4 border-1 border-secondary-400 p-2">{icon}</div>
      <h3 className="max-w-[250px] text-4xl font-semibold tracking-wide text-white sm:max-w-[300px] md:max-w-[300px] md:text-4xl">
        {title}
      </h3>
      <p className="max-w-[200px] sm:text-lg md:max-w-[300px] md:text-xl">
        {children}
      </p>
    </div>
  );
}

export default AboutItem;
