function Stat({ src, children, value }) {
  return (
    <div className="flex w-full gap-4 rounded-md bg-stone-800 p-2 text-white lg:gap-6 lg:p-4">
      <img src={src} className="w-[50px] sm:w-[60px] lg:w-[100px]" />
      <div className="flex flex-col justify-center">
        <label className="text-xs text-stone-400 lg:text-lg">{children}</label>
        <span className="text-xl font-semibold lg:text-4xl">{value} kg</span>
      </div>
    </div>
  );
}

export default Stat;
