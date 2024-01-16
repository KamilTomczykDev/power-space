function Score({ profile }) {
  const [{ squat, bench, deadlift, weight }] = profile;

  const score = Number((squat + bench + deadlift) / weight);

  return (
    <div className="flex gap-4 text-4xl tracking-wide text-white lg:text-5xl">
      <label className="font-bold text-green-400">SCORE:</label>
      <span className="">{!score ? "0" : score.toFixed(3)}</span>
    </div>
  );
}

export default Score;
