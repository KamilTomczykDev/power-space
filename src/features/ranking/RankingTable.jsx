import RankingRow from "./RankingRow";

function RankingTable({ profiles }) {
  return (
    <table className="flex w-full flex-col rounded-t-md border-1 border-stone-500 bg-stone-800">
      <tr className="grid-cols-ranking-table grid items-center p-2 text-center text-[0.5rem] text-white lg:p-4 lg:text-xl lg:font-semibold">
        <td></td>
        <td>Username</td>
        <td>Total</td>
        <td>Score</td>
        <td>Squat</td>
        <td>Bench</td>
        <td>Deadlift</td>
        <td>Age</td>
        <td></td>
      </tr>
      {profiles.map((profile, index) => (
        <RankingRow profile={profile} index={index} key={profile.id} />
      ))}
    </table>
  );
}

export default RankingTable;
