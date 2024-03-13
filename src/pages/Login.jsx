import { Link, Outlet } from "react-router-dom";

import logo from "../assets/logo.png";

function Login() {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-stone-950">
      <div className="flex w-full items-center justify-center border-stone-600 bg-stone-900 xl:w-[50%] xl:border-r-2">
        <div className="flex min-h-screen  w-full max-w-[450px] flex-col justify-center gap-8 p-4 text-white xl:max-w-[550px] xl:p-[50px]">
          <Link to="/">
            <img src={logo} className="w-[100px] hover:opacity-75" />
          </Link>

          <Outlet />
        </div>
      </div>

      <div className="hidden min-h-screen w-full items-center justify-center bg-stone-950 p-10 text-center text-7xl font-semibold tracking-wide text-white xl:flex">
        <span className="max-w-[700px]">Keep calm and take an action</span>
      </div>
    </div>
  );
}

export default Login;
