import Stat from "./Stat";
import bench from "../assets/bench-icon.png";
import squat from "../assets/squat-icon.png";
import deadlift from "../assets/deadlift-icon.png";
import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import ProfileEtiquette from "../features/profiles/ProfileEtiquette";

function SecondaryStats({ profile }) {
  const [
    { squat_pr: squatPr, bench_pr: benchPr, deadlift_pr: deadliftPr, weight },
  ] = profile;
  console.log(profile);

  const competitionLiftsData = [
    {
      lift: "Squat",
      value: squatPr / weight,
      color: "#0b8437",
    },
    {
      lift: "Bench press",
      value: benchPr / weight,
      color: "#22c55e",
    },
    {
      lift: "Deadlift",
      value: deadliftPr / weight,
      color: "#7ddda0",
    },
  ];

  return (
    <div className="lg:grid-cols-mobile-chart grid grid-rows-2 gap-4 lg:grid-rows-none">
      <ProfileEtiquette profile={profile} />

      <div className="flex w-full flex-col gap-4 rounded-md bg-stone-800 p-4 text-2xl text-white">
        <h2 className="font-semibold">Lifts chart</h2>
        <ResponsiveContainer width="100%">
          <PieChart>
            <Pie
              data={competitionLiftsData}
              nameKey="lift"
              dataKey="value"
              outerRadius={100}
              innerRadius={75}
            >
              {competitionLiftsData.map((entry) => (
                <Cell
                  stroke={entry.color}
                  fill={entry.color}
                  key={entry.lift}
                />
              ))}
            </Pie>
            <Tooltip />
            <Legend
              wrapperStyle={{ fontSize: 25, display: "none" }}
              verticalAlign="middle"
              align="left"
              width="35%"
              layout="vertical"
              iconSize={12}
              iconType="circle"
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="flex flex-col items-center justify-between gap-4 ">
        <Stat src={squat} value={squatPr}>
          Squat
        </Stat>
        <Stat src={bench} value={benchPr}>
          Bench
        </Stat>
        <Stat src={deadlift} value={deadliftPr}>
          Deadlift
        </Stat>
      </div>
    </div>
  );
}

export default SecondaryStats;
