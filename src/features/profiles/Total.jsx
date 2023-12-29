function Total({ profile }) {
  const [{ squat_pr: squatPr, bench_pr: benchPr, deadlift_pr: deadliftPr }] =
    profile;

  const totalValue = squatPr + deadliftPr + benchPr;
  return (
    <div className="flex gap-4 text-4xl italic tracking-wide text-white lg:text-5xl">
      <label className="font-bold text-green-400">TOTAL:</label>
      <span className="">{totalValue} kg</span>
    </div>
  );
}

export default Total;
