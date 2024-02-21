import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import AppHeader from "./AppHeader";
import AppContainer from "./AppContainer";

function AppLayout() {
  // BIG CONTAINER
  // SIDEBAR
  //MAIN
  //CONTAINER
  //OUTLET

  return (
    <div className="flex min-h-screen w-full justify-center ">
      <div className="grid h-screen w-full max-w-[1500px] grid-rows-mobile-app xl:grid-cols-desktop-app xl:grid-rows-none">
        <main className="relative flex w-full flex-col justify-start overflow-scroll border-r-1 bg-primary-900 xl:order-last xl:border-primary-700">
          <AppHeader />
          <AppContainer>
            <Outlet />
          </AppContainer>
        </main>
        <Sidebar />
      </div>
    </div>
  );
}

export default AppLayout;
