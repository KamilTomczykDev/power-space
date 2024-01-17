import useUnits from "../../hooks/useUnits";
import { countScore } from "../../utils/helpers";

import ExperienceLevel from "./ExperienceLevel";

function ProfileEtiquette({ profile }) {
  const { unit, calculateWeight } = useUnits();
  const [
    {
      username,
      age,
      weight,
      height,
      squat,
      bench,
      deadlift,

      training_since: since,
    },
  ] = profile;

  const score = countScore(squat, bench, deadlift, weight);

  let color = ["bg-stone-800", "bg-stone-700"];
  if (score > 3) color = ["bg-blue-900", "bg-blue-950"];
  if (score > 5) color = ["bg-red-900", "bg-red-950"];
  if (score > 7) color = ["bg-green-900", "bg-green-950"];

  return (
    <div className="w-full">
      <div className="grid h-[375px] grid-rows-stats">
        <div
          className={`flex flex-col items-end justify-end rounded-t-md ${color.at(
            0,
          )} p-4 text-xl  text-white`}
        >
          <span>
            <ExperienceLevel score={score} />
          </span>
          <span className="brake-words text-3xl font-semibold">{username}</span>
        </div>
        <div
          className={`flex flex-col justify-end gap-2 rounded-b-md ${color.at(
            1,
          )} p-4 text-2xl text-white`}
        >
          <div className="flex gap-2">
            <label className="font-semibold">Weight:</label>
            <span>
              {calculateWeight(weight)}
              {unit}
            </span>
          </div>

          <div className="flex gap-2">
            <label className="font-semibold">Height:</label>
            <span>{height}cm</span>
          </div>
          <div className="flex gap-2">
            <label className="font-semibold">Age:</label>
            <span>{age}yo</span>
          </div>
          <div className="flex gap-2">
            <label className="font-semibold">Training since:</label>
            <span>{since}y</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileEtiquette;
