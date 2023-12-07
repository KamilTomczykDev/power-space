function AboutItem({ icon, title, children }) {
  return (
    <div className="flex flex-col items-center text-center text-stone-500">
      <div className="mb-4 border-2 border-green-400 p-2">{icon}</div>
      <h3 className="max-w-[200px] text-3xl font-semibold tracking-wide text-white md:max-w-[300px] md:text-4xl">
        {title}
      </h3>
      <p className="max-w-[200px] md:max-w-[300px] md:text-xl">{children}</p>
    </div>
  );
}

export default AboutItem;
