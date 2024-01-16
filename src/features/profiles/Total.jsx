import useUnits from "../../hooks/useUnits";
import { countTotal } from "../../utils/helpers";

function Total({ profile }) {
  const { calculateWeight, unit } = useUnits();
  const [{ squat, bench, deadlift }] = profile;

  const totalValue = calculateWeight(countTotal(squat, bench, deadlift));
  return (
    <div className="flex gap-4 text-4xl tracking-wide text-white lg:text-5xl">
      <label className="font-bold text-green-400">TOTAL:</label>
      <span className="">
        {totalValue} {unit}
      </span>
    </div>
  );
}

export default Total;
