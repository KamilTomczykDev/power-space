import { useProfile } from "../features/profiles/useProfile";
import SettingsForm from "../features/settings/SettingsForm";
import AppHeading from "../ui/AppHeading";
import Spinner from "../ui/Spinner";

function Settings() {
  const { profile, isLoading } = useProfile();

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
      <SettingsForm profile={profile} />
    </>
  );
}

export default Settings;
