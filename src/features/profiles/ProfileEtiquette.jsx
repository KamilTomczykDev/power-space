function ProfileEtiquette({ profile }) {
  const [{ username, age, weight, height }] = profile;
  return (
    <div className="w-full">
      <div className="grid-rows-stats grid">
        <div className="flex flex-col items-end justify-end rounded-t-md bg-blue-900 p-4 text-xl  text-white">
          <span>Beginner</span>
          <span className="brake-words text-3xl font-semibold">{username}</span>
        </div>
        <div className="flex flex-col justify-end gap-2 rounded-b-md bg-blue-950 p-4 text-2xl text-white">
          <div className="flex gap-2">
            <label className="font-semibold">Weight:</label>
            <span>{weight}kg</span>
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
            <label className="font-semibold">Age:</label>
            <span>{age}yo</span>
          </div>
          <div className="flex gap-2">
            <label className="font-semibold">Age:</label>
            <span>{age}yo</span>
          </div>
          <div className="flex gap-2">
            <label className="font-semibold">Age:</label>
            <span>{age}yo</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileEtiquette;
