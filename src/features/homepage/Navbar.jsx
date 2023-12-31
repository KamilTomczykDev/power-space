import { useState } from "react";
import { FaBars } from "react-icons/fa6";

import logo from "../../assets/logo.png";
import HomepageLink from "../../ui/HomepageLink";
import { Link } from "react-router-dom";

function Navbar() {
  const [nav, setNav] = useState(false);

  const [color, setColor] = useState();

  const colorNav = () => {
    if (window.scrollY >= 80) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", colorNav);

  return (
    <div
      className={`fixed z-40 flex w-full justify-center border-stone-600 transition-all duration-500 ${
        nav ? "" : "border-b-[1px]"
      } ${
        color
          ? "bg-stone-900 md:border-b-[1px]  md:border-opacity-100"
          : "md:border-opacity-0"
      }`}
    >
      <nav
        className={` flex h-[60px] w-full max-w-[1500px] items-center justify-between gap-4 px-4 text-stone-300 md:grid md:h-[80px] md:grid-cols-headerDesktop md:gap-0`}
      >
        <img src={logo} className="z-30 w-[100px] md:ml-8" />
        <div className="hidden items-center justify-between md:flex">
          <ul className="flex gap-8 text-sm xl:text-lg">
            <HomepageLink to="pricing">Pricing</HomepageLink>
            <HomepageLink to="faq">FAQ</HomepageLink>
            <HomepageLink to="contact">Contact</HomepageLink>
          </ul>
          <div className="flex gap-5">
            <Link to="login">
              <button className="text-md hidden rounded border-2 border-green-500 bg-green-900 px-4 py-2 font-semibold text-white hover:bg-green-800 sm:flex md:px-6">
                Log in
              </button>
            </Link>
            <Link to="login/signup">
              <button className="text-md hidden rounded border-2 border-stone-400 bg-stone-800 px-4 py-2 font-semibold text-white hover:bg-stone-700 sm:flex md:px-6">
                Sign up
              </button>
            </Link>
          </div>
        </div>
        <div
          onClick={() => setNav(!nav)}
          className="z-30 cursor-pointer rounded-md bg-stone-800 p-2 hover:bg-stone-800 md:hidden"
        >
          <FaBars size={20} />
        </div>
        {nav && (
          <div className="absolute left-0 top-0 z-20 grid h-screen w-full grid-rows-navMobile bg-stone-800 md:hidden">
            <div className="mt-[60px] flex p-8">
              <ul className="flex w-full flex-col gap-5 text-xl font-semibold tracking-wider">
                <HomepageLink onClick={() => setNav(!nav)} to="pricing">
                  Pricing
                </HomepageLink>
                <HomepageLink onClick={() => setNav(!nav)} to="faq">
                  FAQ
                </HomepageLink>
                <HomepageLink onClick={() => setNav(!nav)} to="contact">
                  Contact
                </HomepageLink>
              </ul>
            </div>
            <div className="flex items-center justify-center gap-5 bg-stone-900">
              <Link to="login">
                <button className="text-md rounded border-2 border-green-500 bg-green-900 px-6 py-2 font-semibold text-white hover:bg-green-800">
                  Log in
                </button>
              </Link>
              <Link to="login/signup">
                <button className="text-md rounded border-2 border-stone-400 bg-stone-800 px-6 py-2 font-semibold text-white hover:bg-stone-700">
                  Sign up
                </button>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}

export default Navbar;
