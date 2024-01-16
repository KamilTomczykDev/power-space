import useUnits from "../../hooks/useUnits";

function UnitChange() {
  const { setUnit, unit } = useUnits();

  function handleChange(value) {
    setUnit(value);
  }

  return (
    <div className="flex w-full flex-col gap-4 rounded-md bg-stone-800 p-4 sm:flex-row sm:items-center sm:p-8 md:gap-8">
      <label className="font-semibold text-stone-400">Units</label>
      <select
        onChange={(e) => handleChange(e.target.value)}
        value={unit}
        className="rounded-md border-2 border-stone-500 bg-stone-800 p-1 text-stone-500 sm:w-[200px]"
      >
        <option value="kg">Kg</option>
        <option value="lbs">Lbs</option>
      </select>
    </div>
  );
}

export default UnitChange;
