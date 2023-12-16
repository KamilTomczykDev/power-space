import { MdOutlineManageAccounts } from "react-icons/md";

import { useNavigate } from "react-router-dom";
import Logout from "../features/authentication/Logout";
import IconLink from "./IconLink";

function AppHeader() {
  const navigate = useNavigate();
  return (
    <nav className="fixed top-0 h-[40px] w-full max-w-[1275px] border-b-2 border-stone-600 bg-stone-800">
      <ul className="justify- flex items-center">
        <li className="flex items-center justify-center text-white">
          <Logout />
        </li>
        <li>
          <IconLink onClick={() => navigate("account")}>
            <MdOutlineManageAccounts size={30} />
          </IconLink>
        </li>
      </ul>
    </nav>
  );
}

export default AppHeader;
