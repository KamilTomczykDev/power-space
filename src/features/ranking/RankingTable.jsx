import RankingRow from "./RankingRow";

function RankingTable({ profiles }) {
  return (
    <table className="flex w-full flex-col bg-blue-500">
      <tr className="grid-cols-ranking-table grid bg-stone-800 p-4 text-xl font-semibold text-white">
        <td></td>
        <td>Username</td>
        <td>Total</td>
        <td>Score</td>
        <td>Squat</td>
        <td>Bench</td>
        <td>Deadlift</td>
        <td>Age</td>
      </tr>
      {profiles.map((profile, index) => (
        <RankingRow profile={profile} index={index} key={profile.id} />
      ))}
    </table>
  );
}

export default RankingTable;
