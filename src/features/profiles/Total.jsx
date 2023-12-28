function Total({ profile }) {
  const [{ squat_pr, bench_pr, deadlift_pr }] = profile;

  const totalValue = squat_pr + deadlift_pr + bench_pr;
  return (
    <div className="flex gap-4 text-4xl italic tracking-wide text-white lg:text-5xl">
      <label className="font-bold text-green-400">TOTAL:</label>
      <span className="">{totalValue} kg</span>
    </div>
  );
}

export default Total;
