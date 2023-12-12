import SpinnerMini from "../../ui/SpinnerMini";
import { useLogout } from "./useLogout";

function Logout() {
  const { logout, isLoading } = useLogout();
  return (
    <button
      onClick={logout}
      className="w-full rounded-md border-2 border-green-400 bg-green-900 px-3 py-2 text-white hover:bg-green-800"
    >
      {isLoading ? <SpinnerMini /> : "Log out"}
    </button>
  );
}

export default Logout;
