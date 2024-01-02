import { useProfile } from "../features/profiles/useProfile";

import PasswordUpdateForm from "../features/authentication/PasswordUpdateForm";
import UsernameUpdateForm from "../features/authentication/UsernameUpdateForm";
import AppHeading from "../ui/AppHeading";
import Spinner from "../ui/Spinner";

function Account() {
  const { isLoading } = useProfile();

  if (isLoading)
    return (
      <div className="flex h-screen w-full items-center justify-center">
        <Spinner color={"#1be053"} />
      </div>
    );

  return (
    <>
      <AppHeading title="Account">Control your account data.</AppHeading>
      <div className="flex flex-col gap-4 xl:gap-4">
        <UsernameUpdateForm />
        <PasswordUpdateForm />
      </div>
    </>
  );
}

export default Account;
