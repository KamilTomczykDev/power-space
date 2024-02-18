import useUnits from "../hooks/useUnits";

function Stat({ src, children, value }) {
  const { unit, calculateWeight } = useUnits();
  return (
    <div className="flex w-full gap-4 rounded-md bg-primary-800 p-2 text-white lg:gap-6 lg:p-4">
      <img src={src} className="w-[50px] sm:w-[60px] lg:w-[80px]" />
      <div className="flex flex-col justify-center">
        <label className="text-xs text-primary-400 lg:text-lg">
          {children}
        </label>
        <span className="text-xl font-semibold lg:text-4xl">
          {calculateWeight(value)} {unit}
        </span>
      </div>
    </div>
  );
}

export default Stat;
