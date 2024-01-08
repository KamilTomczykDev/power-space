import { FaRegUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import IconLink from "../../ui/IconLink";

function RankingRow({ profile, index }) {
  const { id, squat, deadlift, bench, username, age, visible } = profile;
  const navigate = useNavigate();

  function handleClick() {
    navigate(id);
  }

  if (!visible) return null;

  return (
    <tr className="grid-cols-ranking-table grid w-full items-center border-t-2 border-stone-500 px-2 py-2 text-center text-[0.5rem] text-stone-400 even:bg-stone-900 md:py-4 md:text-base">
      <td>{index + 1}</td>
      <td>{username}</td>
      <td>TOTAL</td>

      <td>SQUAT</td>

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
