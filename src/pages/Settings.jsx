import { useCurrentProfile } from "../features/profiles/useCurrentProfile";
import { useInView } from "react-intersection-observer";

import SettingsForm from "../features/settings/SettingsForm";
import AppHeading from "../ui/AppHeading";
import Spinner from "../ui/Spinner";
import UnitChange from "../features/units/UnitChange";

function Settings() {
  const [ref, inView] = useInView({
    threshold: 0.2,
  });
  const { profile, isLoading } = useCurrentProfile();

  if (isLoading)
    return (
      <div className="flex h-screen w-full items-center justify-center">
        <Spinner color={"#1be053"} />
      </div>
    );
  return (
    <>
      <AppHeading title="Settings">
        Change public informations about your profile.
      </AppHeading>
      <div
        ref={ref}
        className={`flex flex-col gap-4 transition duration-1000 ${
          inView ? "" : "translate-y-10 opacity-0"
        } `}
      >
        <UnitChange />
        <SettingsForm profile={profile} />
      </div>
    </>
  );
}

export default Settings;
