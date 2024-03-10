import { Link } from "react-router-dom";
import headerImg from "../../assets/header-image.jpg";
import stripes from "../../assets/stripes.svg";
import { useInView } from "react-intersection-observer";
import Button from "../../ui/Button";

function Header() {
  const { inView, ref } = useInView();

  return (
    <div ref={ref} className="flex justify-center overflow-hidden">
      <div className="relative w-full max-w-[1500px] md:grid md:grid-cols-headerDesktop">
        <img
          src={stripes}
          className="translate absolute right-[-400px] top-[-400px] hidden w-[1000px] opacity-10 md:flex"
        />
        <div className="relative hidden h-screen max-h-[900px] px-10 py-4 md:flex">
          <img
            src={headerImg}
            alt="Header image"
            className="w-full object-cover"
          />
        </div>
        <div className="z-10 flex h-screen max-h-[900px] w-full flex-col items-start justify-end">
          <div className="flex w-full max-w-[1300px] pb-4">
            <div
              className={`${
                inView ? "" : "translate-x-10 opacity-0"
              } flex max-w-[400px] flex-col items-start gap-1 px-4 text-primary-100 transition duration-[2000ms] sm:max-w-[500px] md:mb-[100px] md:px-0 xl:max-w-[600px] xl:gap-3 2xl:mb-[200px] 2xl:max-w-[1200px]`}
            >
              <h2 className="sm:text-md xl:text-md text-sm 2xl:text-lg">
                Put your belt on and
              </h2>
              <h1
                className={`text-3xl font-semibold tracking-wide sm:text-4xl xl:text-5xl xl:leading-[55px]  2xl:text-[70px] 2xl:leading-[82px]`}
              >
                Unleash your{" "}
                <span className="bg-gradient-to-br from-secondary-400 to-secondary-900 bg-clip-text text-transparent">
                  powerlifting
                </span>{" "}
                potential.
              </h1>
              <h2 className="sm:text-md xl:text-md max-w-[400px] text-sm 2xl:max-w-[500px] 2xl:text-xl">
                Meet your friends and approach new rivals. Everything is
                possible buddy. We love you.
              </h2>
              <Link to="login">
                <Button className="mt-4 md:px-6">Start now</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
