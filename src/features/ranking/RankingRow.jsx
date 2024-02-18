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
    <tr className="grid w-full grid-cols-ranking-table items-center border-t-1 border-main px-2 py-2 text-center text-[0.6rem] text-primary-400 md:py-4 md:text-lg">
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
      <td>{age}</td>
      <td>
        {calculateWeight(weight)}
        {unit}
      </td>
    </tr>
  );
}

export default RankingRow;
