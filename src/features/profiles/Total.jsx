function Total({ profile }) {
  const [{ squat, bench, deadlift }] = profile;

  const totalValue = squat + deadlift + bench;
  return (
    <div className="flex gap-4 text-4xl italic tracking-wide text-white lg:text-5xl">
      <label className="font-bold text-green-400">TOTAL:</label>
      <span className="">{totalValue} kg</span>
    </div>
  );
}

export default Total;
