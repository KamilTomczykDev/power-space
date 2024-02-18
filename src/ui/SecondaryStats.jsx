import Stat from "./Stat";
import benchIcon from "../assets/bench-icon.png";
import squatIcon from "../assets/squat-icon.png";
import deadliftIcon from "../assets/deadlift-icon.png";
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
  const [{ squat, bench, deadlift, weight }] = profile;

  const competitionLiftsData = [
    {
      lift: "Squat",
      value: squat / weight,
      color: "#0b8437",
    },
    {
      lift: "Bench press",
      value: bench / weight,
      color: "#22c55e",
    },
    {
      lift: "Deadlift",
      value: deadlift / weight,
      color: "#7ddda0",
    },
  ];

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="rounded-md bg-primary-700 p-2">
          <p className="">{`${payload[0].value.toFixed(2)}`}</p>
        </div>
      );
    }

    return null;
  };

  return (
    <div className="grid grid-rows-2 gap-4 lg:grid-cols-mobile-chart lg:grid-rows-none">
      <ProfileEtiquette
        profile={profile}
        // score={countScore(squat, bench, deadlift, weight)}
      />

      <div className="flex w-full flex-col gap-4 rounded-md bg-primary-800 p-4 text-2xl text-white">
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
            <Tooltip content={<CustomTooltip />} />
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
        <Stat src={squatIcon} value={squat}>
          Squat
        </Stat>
        <Stat src={benchIcon} value={bench}>
          Bench
        </Stat>
        <Stat src={deadliftIcon} value={deadlift}>
          Deadlift
        </Stat>
      </div>
    </div>
  );
}

export default SecondaryStats;
