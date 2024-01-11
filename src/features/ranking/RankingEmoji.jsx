function RankingEmoji({ index }) {
  let emoji;
  if (index === 0) emoji = "🥇";
  if (index === 1) emoji = "🥈";
  if (index === 2) emoji = "🥉";
  if (index > 2) emoji = "";
  return <span>{emoji}</span>;
}

export default RankingEmoji;
