import { FaRegUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import IconLink from "../../ui/IconLink";
import { countScore, countTotal } from "../../utils/helpers";
import RankingEmoji from "./RankingEmoji";
import RankingUsername from "./RankingUsername";
import useUnits from "../../hooks/useUnits";

function RankingRow({ profile, index }) {
  const { unit, calculateWeight } = useUnits();
  const { id, squat, deadlift, bench, username, age, weight, visible } =
    profile;

  const navigate = useNavigate();
  const score = countScore(squat, bench, deadlift, weight);
  const total = calculateWeight(countTotal(squat, bench, deadlift));

  function handleClick() {
    navigate(id);
  }

  if (!visible) return null;

  return (
    <tr className="grid w-full grid-cols-ranking-table items-center border-t-2 border-stone-500 px-2 py-2 text-center text-[0.5rem] text-stone-400 md:py-4 md:text-base">
      <td>{index + 1}</td>
      <td>
        <RankingUsername score={score}>
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
      <td>
        <IconLink onClick={handleClick}>
          <FaRegUser size={15} color={"#1be053"} />
        </IconLink>
      </td>
    </tr>
  );
}

export default RankingRow;
