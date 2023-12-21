import { useProfile } from "../features/profiles/useProfile";

import Stat from "./Stat";
import bench from "../assets/bench-icon.png";
import squat from "../assets/squat-icon.png";
import deadlift from "../assets/deadlift-icon.png";
import Spinner from "./SpinnerMini";

function Stats() {
  const { profile, isLoading } = useProfile();

  if (isLoading) return <Spinner />;

  const { squat_pr, bench_pr, deadlift_pr } = profile[0];
  return (
    <div className="flex w-full flex-row flex-wrap items-center justify-center gap-8">
      <Stat src={squat} value={squat_pr}>
        Squat
      </Stat>
      <Stat src={bench} value={bench_pr}>
        Bench
      </Stat>
      <Stat src={deadlift} value={deadlift_pr}>
        Deadlift
      </Stat>
    </div>
  );
}

export default Stats;
