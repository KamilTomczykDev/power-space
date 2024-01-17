import {
  IoBarbellOutline,
  IoHomeOutline,
  IoOptionsOutline,
  IoPeopleOutline,
  IoRibbonOutline,
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
        {/* Work in progress - workout functionality */}
        {/* <SidebarLink
          to="/login"
          icon={<IoBarbellOutline size={30} />}
          title="Workouts"
        /> */}
        <div
          disabled
          className="flex h-full w-[65px] cursor-not-allowed flex-col items-center justify-center rounded-md text-stone-400 transition duration-200 hover:bg-stone-700 xl:h-auto xl:w-full xl:flex-row xl:justify-start xl:gap-8 xl:p-2"
        >
          <IoBarbellOutline size={30} />
          <span className="text-center text-[10px] tracking-tight xl:text-lg xl:font-semibold 2xl:text-xl">
            Workouts
          </span>
        </div>
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
