import Total from "../features/profiles/Total";
import Wilks from "../features/profiles/Wilks";

function PrimaryStats({ profile }) {
  return (
    <div className=" flex flex-col justify-center gap-4 rounded-md bg-stone-800 p-4 sm:flex-row sm:gap-10">
      <Total profile={profile} />
      <Wilks profile={profile} />
    </div>
  );
}

export default PrimaryStats;
