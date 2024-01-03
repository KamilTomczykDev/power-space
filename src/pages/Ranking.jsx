import { useProfiles } from "../features/profiles/useProfiles";
import RankingTable from "../features/ranking/RankingTable";
import AppHeading from "../ui/AppHeading";
import Spinner from "../ui/Spinner";

function Ranking() {
  const { profiles, isLoading } = useProfiles();
  if (isLoading)
    return (
      <div className="flex h-screen w-full items-center justify-center">
        <Spinner color={"#1be053"} />
      </div>
    );

  return (
    <>
      <AppHeading title="Ranking">
        Find friends or meet your rivals on the leaderboard.
      </AppHeading>
      <RankingTable profiles={profiles} />
    </>
  );
}

export default Ranking;
