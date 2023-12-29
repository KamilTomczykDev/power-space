function Score({ profile }) {
  const [
    { squat_pr: squatPr, bench_pr: benchPr, deadlift_pr: deadliftPr, weight },
  ] = profile;

  const score = Number((squatPr + benchPr + deadliftPr) / weight).toFixed(3);

  return (
    <div className="flex gap-4 text-4xl italic tracking-wide text-white lg:text-5xl">
      <label className="font-bold text-green-400">Score:</label>
      <span className="">{!score ? "0" : score}</span>
    </div>
  );
}

export default Score;
