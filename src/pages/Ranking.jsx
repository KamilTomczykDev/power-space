import { useSearchParams } from "react-router-dom";
import { useProfiles } from "../features/profiles/useProfiles";
import { countScore, countTotal } from "../utils/helpers";

import RankingTable from "../features/ranking/RankingTable";
import RankingTableOperations from "../features/ranking/RankingTableOperations";
import AppHeading from "../ui/AppHeading";
import Spinner from "../ui/Spinner";

function Ranking() {
  const { profiles, isLoading } = useProfiles();
  const [searchParams] = useSearchParams();

  if (isLoading)
    return (
      <div className="flex h-screen w-full items-center justify-center">
        <Spinner color={"#1be053"} />
      </div>
    );

  const filterValue = searchParams.get("filter") || "all";

  let filteredProfiles;

  if (filterValue === "all") filteredProfiles = profiles;
  if (filterValue === "juniors")
    filteredProfiles = profiles.filter((profile) => profile.age <= 23);
  if (filterValue === "seniors")
    filteredProfiles = profiles.filter((profile) => profile.age > 23);

  const sortBy = searchParams.get("sortBy") || "score-desc";
  const [field, direction] = sortBy.split("-");
  const modifier = direction === "desc" ? -1 : 1;

  let sortedProfiles;

  if (field === "score")
    sortedProfiles = filteredProfiles.sort(function (a, b) {
      const firstScore = countScore(a.squat, a.bench, a.deadlift, a.weight);
      const secondScore = countScore(b.squat, b.bench, b.deadlift, b.weight);

      return (firstScore - secondScore) * modifier;
    });

  if (field === "total")
    sortedProfiles = filteredProfiles.sort(function (a, b) {
      const firstTotal = countTotal(a.squat, a.bench, a.deadlift);
      const secondTotal = countTotal(b.squat, b.bench, b.deadlift);

      return (firstTotal - secondTotal) * modifier;
    });

  if (field !== "score" && field !== "total")
    sortedProfiles = filteredProfiles.sort(
      (a, b) => (a[field] - b[field]) * modifier,
    );

  console.log(sortedProfiles);

  return (
    <>
      <div className="flex flex-col justify-between gap-2 md:flex-row md:items-end">
        <AppHeading title="Ranking">
          Find friends or meet your rivals on the leaderboard.
        </AppHeading>
        <RankingTableOperations />
      </div>

      <RankingTable profiles={sortedProfiles} />
    </>
  );
}

export default Ranking;
