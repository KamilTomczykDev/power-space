function RankingUsername({ score, children }) {
  let color;
  if (score > 3) color = "text-blue-600";
  if (score > 5) color = "text-red-600";
  if (score > 7) color = "text-green-600";

  return <div className={color}>{children}</div>;
}

export default RankingUsername;
