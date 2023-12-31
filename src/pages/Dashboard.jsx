import { useState } from "react";
import { useProfile } from "../features/profiles/useProfile";

import AppHeading from "../ui/AppHeading";
import PrimaryStats from "../ui/PrimaryStats";
import SecondaryStats from "../ui/SecondaryStats";
import Spinner from "../ui/Spinner";
import UpdateProfileForm from "../features/profiles/UpdateProfileForm";

function Dashboard() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const { profile, isLoading } = useProfile();

  function handleClick() {
    setIsFormOpen(!isFormOpen);
  }

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
          {isFormOpen
            ? "Change your statistics."
            : "Check out all your statistics."}
        </AppHeading>
        <button
          onClick={handleClick}
          className="flex items-center justify-center rounded-md border-2 border-green-400 bg-green-900 px-4 py-2 font-semibold text-white hover:bg-green-800 disabled:opacity-60"
        >
          {isFormOpen ? "Show my profile" : "Change lifting values"}
        </button>
      </div>
      {isFormOpen ? (
        <UpdateProfileForm />
      ) : (
        <>
          <PrimaryStats profile={profile} />
          <SecondaryStats profile={profile} />
        </>
      )}
    </>
  );
}

export default Dashboard;
