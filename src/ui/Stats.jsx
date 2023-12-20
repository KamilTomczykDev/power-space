import Stat from "./Stat";
import bench from "../assets/bench-icon.png";
import squat from "../assets/squat-icon.png";
import deadlift from "../assets/deadlift-icon.png";
import { useProfile } from "../features/profiles/useProfile";
import { useEffect } from "react";

function Stats() {
  const { data, isSuccess } = useProfile();
  useEffect(
    function () {
      if (isSuccess) console.log(data);
    },
    [isSuccess, data],
  );

  return (
    <div className="flex w-full flex-row flex-wrap items-center justify-center gap-8">
      <Stat src={squat} value="Hi">
        Squat
      </Stat>
      <Stat src={bench} value="100 KG">
        Bench
      </Stat>
      <Stat src={deadlift} value="60 KG">
        Deadlift
      </Stat>
    </div>
  );
}

export default Stats;
