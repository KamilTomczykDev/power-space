import { useLogout } from "./useLogout";
import { MdLogout } from "react-icons/md";

import IconLink from "../../ui/IconLink";

function Logout() {
  const { logout } = useLogout();
  return (
    <IconLink onClick={logout}>
      <MdLogout size={30} />
    </IconLink>
  );
}

export default Logout;
