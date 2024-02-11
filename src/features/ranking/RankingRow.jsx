import { countScore, countTotal } from "../../utils/helpers";
import RankingEmoji from "./RankingEmoji";
import RankingUsername from "./RankingUsername";
import useUnits from "../../hooks/useUnits";

function RankingRow({ profile, index }) {
  const { unit, calculateWeight } = useUnits();
  const { id, squat, deadlift, bench, username, age, weight } = profile;

  const score = countScore(squat, bench, deadlift, weight);
  const total = calculateWeight(countTotal(squat, bench, deadlift));

  return (
    <tr className="grid w-full grid-cols-ranking-table items-center border-t-2 border-stone-500 px-2 py-2 text-center text-[0.5rem] text-stone-400 md:py-4 md:text-base">
      <td>{index + 1}</td>
      <td>
        <RankingUsername id={id} score={score}>
          {username}
          <RankingEmoji index={index} />
        </RankingUsername>
      </td>
      <td>
        {total}
        {unit}
      </td>
      <td>{score}</td>
      <td>
        {calculateWeight(squat)}
        {unit}
      </td>
      <td>
        {calculateWeight(bench)}
        {unit}
      </td>
      <td>
        {calculateWeight(deadlift)}
        {unit}
      </td>
      <td>{age}</td>
      <td></td>
    </tr>
  );
}

export default RankingRow;
