import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

function AppLayout() {
  // BIG CONTAINER
  // SIDEBAR
  //MAIN
  //CONTAINER
  //OUTLET

  return (
    <div className="flex min-h-screen w-full justify-center bg-red-900">
      <div className="grid-rows-mobile-app xl:grid-cols-desktop-app grid h-screen w-full max-w-[1500px] bg-blue-900 xl:grid-rows-none">
        <main className="flex w-full justify-center overflow-scroll bg-stone-900 p-4 xl:order-last xl:p-10">
          <Outlet />
        </main>
        <Sidebar />
      </div>
    </div>
  );
}

export default AppLayout;
