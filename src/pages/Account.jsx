import PasswordUpdateForm from "../features/authentication/PasswordUpdateForm";
import UsernameUpdateForm from "../features/authentication/UsernameUpdateForm";
import AppContainer from "../ui/AppContainer";
import AppHeading from "../ui/AppHeading";

function Account() {
  return (
    <AppContainer>
      <AppHeading>Account</AppHeading>
      <div className="flex flex-col gap-2 xl:gap-4">
        <UsernameUpdateForm />
        <PasswordUpdateForm />
      </div>
    </AppContainer>
  );
}

export default Account;
