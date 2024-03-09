import { useState } from "react";
import { FaBars } from "react-icons/fa6";

import logo from "../../assets/logo.png";
import HomepageLink from "../../ui/HomepageLink";
import { Link } from "react-router-dom";
import Button from "../../ui/Button";

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
      className={`fixed z-40 flex w-full justify-center border-main transition-all duration-500 ${
        nav ? "" : "border-b-1"
      } ${
        color
          ? "bg-primary-900 md:border-b-1  md:border-opacity-100"
          : "md:border-opacity-0"
      }`}
    >
      <nav className="flex h-[60px] w-full max-w-[1500px] items-center justify-between gap-4 px-4 text-primary-300 md:grid md:h-[80px] md:grid-cols-headerDesktop md:gap-0">
        <img
          src={logo}
          className={`z-30 w-[50px] transition duration-500 md:ml-8 md:w-[70px] ${
            color ? "md:opacity-1" : "md:opacity-0"
          }`}
        />
        <div className="hidden items-center justify-between md:flex">
          <ul className="flex gap-8 text-sm xl:text-lg">
            <HomepageLink to="pricing">Pricing</HomepageLink>
            <HomepageLink to="faq">FAQ</HomepageLink>
            <HomepageLink to="contact">Contact</HomepageLink>
          </ul>
          <div className="flex gap-5">
            <Link to="login">
              <Button className="hidden sm:flex md:px-6" data-testid="button">
                Log in
              </Button>
            </Link>
            <Link to="login/signup">
              <Button variant="secondary" className="hidden sm:flex md:px-6">
                Sign up
              </Button>
            </Link>
          </div>
        </div>
        <div
          onClick={() => setNav(!nav)}
          className="z-30 cursor-pointer rounded-md bg-primary-800 p-2 hover:bg-primary-700 md:hidden"
        >
          <FaBars size={20} />
        </div>
        {nav && (
          <div className="absolute left-0 top-0 z-20 grid h-screen w-full grid-rows-navMobile bg-primary-800 md:hidden">
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
            <div className="flex items-center justify-center gap-5 bg-primary-900">
              <Link to="login">
                <button className="text-md rounded border-1 border-secondary-500 bg-secondary-900 px-6 py-2 font-semibold text-white hover:bg-secondary-800">
                  Log in
                </button>
              </Link>
              <Link to="login/signup">
                <button className="text-md rounded border-1 border-primary-400 bg-primary-800 px-6 py-2 font-semibold text-white hover:bg-primary-700">
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
