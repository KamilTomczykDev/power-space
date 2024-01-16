import useUnits from "../../hooks/useUnits";

function ProfileEtiquette({ profile }) {
  const { unit, calculateWeight } = useUnits();
  const [
    {
      username,
      age,
      weight,
      height,

      training_since: since,
    },
  ] = profile;

  return (
    <div className="w-full">
      <div className="grid h-[375px] grid-rows-stats">
        <div className="flex flex-col items-end justify-end rounded-t-md bg-blue-900 p-4 text-xl  text-white">
          <span>Beginner</span>
          <span className="brake-words text-3xl font-semibold">{username}</span>
        </div>
        <div className="flex flex-col justify-end gap-2 rounded-b-md bg-blue-950 p-4 text-2xl text-white">
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
