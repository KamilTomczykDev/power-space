import { MdOutlineManageAccounts } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useUser } from "../features/authentication/useUser";

import Logout from "../features/authentication/Logout";
import IconLink from "./IconLink";

function AppHeader() {
  const navigate = useNavigate();
  const {
    user: {
      user_metadata: { username },
    },
  } = useUser();
  return (
    <nav className="fixed top-0 z-10 h-[40px] w-full max-w-[1275px] border-b-2 border-stone-600 bg-stone-800 xl:border-r-2">
      <ul className="flex items-center gap-2 pl-2">
        <li className="flex items-center justify-center text-white">
          <Logout />
        </li>
        <li>
          <IconLink onClick={() => navigate("account")}>
            <MdOutlineManageAccounts size={30} />
          </IconLink>
        </li>
        <li>
          <label className="text-xl text-white">{username}</label>
        </li>
      </ul>
    </nav>
  );
}

export default AppHeader;
