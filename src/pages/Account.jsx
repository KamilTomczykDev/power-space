import PasswordUpdateForm from "../features/authentication/PasswordUpdateForm";
import UsernameUpdateForm from "../features/authentication/UsernameUpdateForm";
import AppHeading from "../ui/AppHeading";

function Account() {
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
