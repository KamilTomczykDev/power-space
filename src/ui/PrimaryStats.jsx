import Total from "../features/profiles/Total";
import Score from "../features/profiles/Score";

function PrimaryStats({ profile }) {
  return (
    <div className=" flex flex-col justify-center gap-4 rounded-md bg-stone-800 p-4 sm:flex-row sm:gap-10">
      <Total profile={profile} />
      <Score profile={profile} />
    </div>
  );
}

export default PrimaryStats;
