import { useCurrentProfile } from "../features/profiles/useCurrentProfile";
import { useInView } from "react-intersection-observer";

import PasswordUpdateForm from "../features/authentication/PasswordUpdateForm";
import UsernameUpdateForm from "../features/authentication/UsernameUpdateForm";
import AppHeading from "../ui/AppHeading";
import Spinner from "../ui/Spinner";

function Account() {
  const [ref, inView] = useInView({
    threshold: 0.2,
  });
  const { isLoading } = useCurrentProfile();

  if (isLoading)
    return (
      <div className="flex h-screen w-full items-center justify-center">
        <Spinner color={"#1be053"} />
      </div>
    );

  return (
    <>
      <AppHeading title="Account">Control your account data.</AppHeading>
      <div
        ref={ref}
        className={`flex flex-col gap-4 transition duration-1000 ${
          inView ? "" : "translate-y-10 opacity-0"
        } `}
      >
        <UsernameUpdateForm />
        <PasswordUpdateForm />
      </div>
    </>
  );
}

export default Account;
