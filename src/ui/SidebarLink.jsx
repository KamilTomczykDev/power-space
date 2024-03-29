import { NavLink } from "react-router-dom";

function SidebarLink({ to, icon, title }) {
  return (
    <NavLink
      to={to}
      className="flex h-full w-[65px] cursor-pointer flex-col items-center justify-center rounded-md text-primary-400 transition duration-200 hover:bg-primary-700 xl:h-auto xl:w-full xl:flex-row xl:justify-start xl:gap-6 xl:p-2"
    >
      {icon}
      <span className="text-center text-[10px] tracking-tight xl:text-lg xl:font-semibold 2xl:text-xl">
        {title}
      </span>
    </NavLink>
  );
}

export default SidebarLink;
