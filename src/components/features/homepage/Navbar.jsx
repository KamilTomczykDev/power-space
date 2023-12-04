import { useState } from "react";

import logo from "../../../assets/logo.png";
import { FaBars } from "react-icons/fa6";

function Navbar() {
  const [nav, setNav] = useState(false);

  return (
    <div className="fixed z-10 flex w-full justify-center">
      <nav className="md:grid-cols-headerDesktop flex h-[60px] w-full max-w-[1500px] items-center justify-between gap-4 px-4 text-stone-300 md:grid md:h-[80px] md:gap-0">
        <img src={logo} className="w-[100px] md:ml-8" />
        <div className="hidden items-center justify-between md:flex">
          <ul className="flex gap-8 text-sm">
            <li>Pricing</li>
            <li>FAQ</li>
            <li>Contact</li>
          </ul>
          <ul className="flex gap-5">
            <li>
              <button className="text-md hidden rounded border-2 border-green-500 bg-green-900 px-4 py-2 font-semibold text-white hover:bg-green-800 sm:flex md:px-6">
                Log in
              </button>
            </li>
            <li>
              <button className="text-md hidden rounded border-2 border-stone-400 bg-stone-800 px-4 py-2 font-semibold text-white hover:bg-stone-700 sm:flex md:px-6">
                Sign up
              </button>
            </li>
          </ul>
        </div>
        <div
          onClick={() => setNav(!nav)}
          className="cursor-pointer rounded-md border-[1px] border-stone-500 bg-stone-800 p-2 hover:bg-stone-700 md:hidden"
        >
          <FaBars size={25} />
        </div>
        {nav && (
          <div className="absolute left-0 top-[60px] h-screen w-full bg-stone-900"></div>
        )}
      </nav>
    </div>
  );
}

export default Navbar;
