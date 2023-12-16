import logo from "../../assets/logo.png";
import HomepageLink from "../../ui/HomepageLink";

function Footer() {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-2 bg-stone-950">
      <div className="flex w-full max-w-[1500px] flex-col gap-4 p-4 pt-10 md:flex-row md:items-center md:justify-center md:gap-[75px] md:pb-[50px]">
        <img src={logo} className="w-[100px]" />
        <ul className="flex flex-col gap-2 text-stone-600 md:flex-row md:gap-[75px] md:text-lg">
          <HomepageLink to="pricing" className="border-b-0">
            Pricing
          </HomepageLink>
          <HomepageLink to="faq" className="border-b-0">
            FAQ
          </HomepageLink>
          <HomepageLink to="contact" className="border-b-0">
            Contact
          </HomepageLink>
        </ul>
      </div>
      <div className="md:text-md w-full border-t-2 border-stone-800 p-4 text-center text-sm text-white">
        <p>All rights reserved Kamil Tomczyk ©2024</p>
      </div>
    </div>
  );
}

export default Footer;
