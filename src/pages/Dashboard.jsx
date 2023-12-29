import UpdateProfile from "../features/profiles/UpdateProfile";
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
        <UpdateProfile />
      </div>
      <PrimaryStats profile={profile} />
      <SecondaryStats profile={profile} />
    </>
  );
}

export default Dashboard;
