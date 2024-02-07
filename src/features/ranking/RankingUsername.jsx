import { useNavigate } from "react-router-dom";

function RankingUsername({ score, children, id }) {
  const navigate = useNavigate();

  let color;
  if (score > 3) color = "text-blue-600";
  if (score > 5) color = "text-red-600";
  if (score > 7) color = "text-green-600";

  function handleClick() {
    navigate(`/app/${id}`);
  }

  return (
    <div
      onClick={handleClick}
      className={`cursor-pointer hover:underline ${color}`}
    >
      {children}
    </div>
  );
}

export default RankingUsername;
