import { useState } from "react";
import { useCurrentProfile } from "../features/profiles/useCurrentProfile";
import { useInView } from "react-intersection-observer";

import AppHeading from "../ui/AppHeading";
import PrimaryStats from "../ui/PrimaryStats";
import SecondaryStats from "../ui/SecondaryStats";
import Spinner from "../ui/Spinner";
import UpdateProfileForm from "../features/profiles/UpdateProfileForm";
import Button from "../ui/Button";

function Dashboard() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const { profile, isLoading } = useCurrentProfile();
  const [ref, inView] = useInView({
    threshold: 0.2,
  });

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
      <div className="flex flex-col justify-between gap-8 transition duration-1000 sm:flex-row sm:items-center sm:gap-0">
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
        <div
          ref={ref}
          className={`flex flex-col gap-4 transition duration-1000 ${
            inView ? "" : "translate-y-10 opacity-0"
          }`}
        >
          <PrimaryStats profile={profile} />
          <SecondaryStats profile={profile} />
        </div>
      )}
    </>
  );
}

export default Dashboard;
