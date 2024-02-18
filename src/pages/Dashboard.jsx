import { useState } from "react";
import { useCurrentProfile } from "../features/profiles/useCurrentProfile";

import AppHeading from "../ui/AppHeading";
import PrimaryStats from "../ui/PrimaryStats";
import SecondaryStats from "../ui/SecondaryStats";
import Spinner from "../ui/Spinner";
import UpdateProfileForm from "../features/profiles/UpdateProfileForm";
import Button from "../ui/Button";

function Dashboard() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const { profile, isLoading } = useCurrentProfile();

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
        <Button onClick={handleClick}>
          {isFormOpen ? "Show my profile" : "Change lifting values"}
        </Button>
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
