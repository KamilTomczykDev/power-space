import { FaRegUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import IconLink from "../../ui/IconLink";
import { countScore, countTotal } from "../../utils/helpers";

function RankingRow({ profile, index }) {
  const { id, squat, deadlift, bench, username, age, weight, visible } =
    profile;
  const navigate = useNavigate();
  const score = countScore(squat, bench, deadlift, weight);

  let color;
  if (score > 3) color = "text-blue-600";
  if (score > 5) color = "text-red-600";
  if (score > 7) color = "text-green-600";

  let emoji;
  if (index === 0) emoji = "🥇";
  if (index === 1) emoji = "🥈";
  if (index === 2) emoji = "🥉";
  if (index > 2) emoji = "";

  function handleClick() {
    navigate(id);
  }

  if (!visible) return null;

  return (
    <tr className="grid-cols-ranking-table grid w-full items-center border-t-2 border-stone-500 px-2 py-2 text-center text-[0.5rem] text-stone-400 even:bg-stone-900 md:py-4 md:text-base">
      <td>{index + 1}</td>
      <td className={`${color}`}>{`${username} ${emoji}`}</td>
      <td>{countTotal(squat, bench, deadlift)}</td>

      <td>{score}</td>

      <td>{squat}</td>
      <td>{bench}</td>

      <td>{deadlift}</td>

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
