import useUnits from "../../hooks/useUnits";

function Total({ profile }) {
  const { calculateWeight, unit } = useUnits();
  const [{ squat, bench, deadlift }] = profile;

  const totalValue = squat + deadlift + bench;
  return (
    <div className="flex gap-4 text-4xl tracking-wide text-white lg:text-5xl">
      <label className="font-bold text-green-400">TOTAL:</label>
      <span className="">
        {calculateWeight(totalValue)} {unit}
      </span>
    </div>
  );
}

export default Total;
