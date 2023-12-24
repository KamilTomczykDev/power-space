import { useProfile } from "../features/profiles/useProfile";
import AppHeading from "../ui/AppHeading";
import PrimaryStats from "../ui/PrimaryStats";
import SecondaryStats from "../ui/SecondaryStats";
import Spinner from "../ui/Spinner";

function Dashboard() {
  const { profile, isLoading } = useProfile();

  if (isLoading)
    return (
      <div className="flex h-screen w-full items-center justify-center">
        <Spinner color={"#1be053"} />
      </div>
    );

  return (
    <>
      <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-center sm:gap-0">
        <AppHeading title="Dashboard">
          Check out all your statistics.
        </AppHeading>
        <button className="flex items-center justify-center rounded-md border-2 border-green-400 bg-green-900 px-4 py-2 font-semibold text-white hover:bg-green-800 disabled:opacity-60">
          Change lifting values
        </button>
      </div>
      <PrimaryStats profile={profile} />
      <SecondaryStats profile={profile} />
    </>
  );
}

export default Dashboard;
