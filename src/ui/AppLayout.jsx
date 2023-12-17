import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import AppHeader from "./AppHeader";

function AppLayout() {
  // BIG CONTAINER
  // SIDEBAR
  //MAIN
  //CONTAINER
  //OUTLET

  return (
    <div className="flex min-h-screen w-full justify-center bg-red-900">
      <div className="grid h-screen w-full max-w-[1500px] grid-rows-mobile-app bg-blue-900 xl:grid-cols-desktop-app xl:grid-rows-none">
        <main className="relative flex w-full flex-col justify-start overflow-scroll border-r-2 bg-stone-900 xl:order-last xl:border-stone-600">
          <AppHeader />
          <Outlet />
        </main>
        <Sidebar />
      </div>
    </div>
  );
}

export default AppLayout;
