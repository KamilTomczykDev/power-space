import LinkButton from "../ui/LinkButton";

import logo from "../assets/logo.png";

function PageNotFound() {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <div className="relative w-full max-w-[1200px] items-center justify-center p-4 text-white">
        <img
          src={logo}
          className="absolute left-[10px] top-[-50px] w-[100px]"
        />
        <h3 className="text-xl">{`We're sorry`}</h3>
        <h2 className="mb-4 text-5xl font-semibold tracking-wide">
          Page not found
        </h2>
        <LinkButton to="/">Go to homepage</LinkButton>
      </div>
    </div>
  );
}

export default PageNotFound;
