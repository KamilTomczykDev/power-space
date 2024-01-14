import { useSearchParams } from "react-router-dom";

function RankingEmoji({ index }) {
  let emoji;
  const [searchParams] = useSearchParams();
  const sortBy = searchParams.get("sortBy") || "score-desc";

  const [field, direction] = sortBy.split("-");

  if (field === "weight" || direction === "asc") return;
  if (index === 0) emoji = "🥇";
  if (index === 1) emoji = "🥈";
  if (index === 2) emoji = "🥉";
  if (index > 2) emoji = "";
  return <span>{emoji}</span>;
}

export default RankingEmoji;
