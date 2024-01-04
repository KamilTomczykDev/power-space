function RankingRow({ profile, index }) {
  const { squat, deadlift, bench, username, age } = profile;
  console.log(profile);
  return (
    <tr className="grid-cols-ranking-table grid w-full px-2 py-4 text-center text-[0.5rem] lg:text-base">
      <td>{index}</td>
      <td>{username}</td>
      <td>TOTAL</td>

      <td>SQUAT</td>

      <td>{squat}</td>
      <td>{bench}</td>

      <td>{deadlift}</td>

      <td>{age}</td>
    </tr>
  );
}

export default RankingRow;
