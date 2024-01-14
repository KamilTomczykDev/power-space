import {
  IoHomeOutline,
  IoOptionsOutline,
  IoPeopleOutline,
  IoRibbonOutline,
  IoBarbellOutline,
} from "react-icons/io5";

import logo from "../assets/logo.png";
import SidebarLink from "./SidebarLink";

function Sidebar() {
  return (
    <>
      <nav className="flex h-full w-full items-center justify-center gap-1 overflow-x-auto border-t-2 border-stone-500 bg-stone-800 p-2 xl:flex-col xl:justify-start xl:gap-6 xl:border-l-2 xl:border-r-2 xl:border-t-0 xl:pt-10 ">
        <img src={logo} className="hidden w-[200px] xl:flex" />

        <SidebarLink
          to="dashboard"
          icon={<IoHomeOutline size={30} />}
          title="Dashboard"
        />
        <SidebarLink
          to="/login"
          icon={<IoBarbellOutline size={30} />}
          title="Workouts"
        />
        <SidebarLink
          to="ranking"
          icon={<IoRibbonOutline size={30} />}
          title="Ranking"
        />
        <SidebarLink
          to="friends"
          icon={<IoPeopleOutline size={30} />}
          title="Friends"
        />
        <SidebarLink
          to="settings"
          icon={<IoOptionsOutline size={30} />}
          title="Settings"
        />
      </nav>
    </>
  );
}
export default Sidebar;
