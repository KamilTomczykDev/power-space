import headerImg from "../../../assets/header-image.jpg";
import bgSvg from "../../../assets/asset.svg";

function Header() {
  return (
    <div className="flex justify-center overflow-hidden bg-stone-900 ">
      <div className="md:grid-cols-headerDesktop relative w-full max-w-[1500px] md:grid">
        <img
          src={bgSvg}
          className="translate absolute right-[-400px] top-[-400px] hidden w-[1000px] opacity-10 md:flex"
        />
        <div className="relative hidden h-screen max-h-[900px] px-10 py-4 md:flex">
          <img src={headerImg} className="w-full rounded-xl object-cover" />
        </div>
        <div className="z-10 flex h-screen max-h-[900px] w-full flex-col items-start justify-end">
          <div className="flex w-full max-w-[1300px] pb-4">
            <div className="flex max-w-[400px] flex-col items-start gap-1 px-4 text-stone-100 sm:max-w-[500px] md:mb-[100px] md:px-0 xl:max-w-[600px] xl:gap-3 2xl:mb-[200px] 2xl:max-w-[1200px]">
              <h2 className="sm:text-md xl:text-md text-sm 2xl:text-lg">
                Put your belt on and
              </h2>
              <h1 className="xl: text-3xl font-bold sm:text-4xl xl:text-5xl xl:leading-[55px]  2xl:text-[70px] 2xl:leading-[80px]">
                Unleash your{" "}
                <span className="text-green-500">powerlifting</span> potential.
              </h1>
              <h2 className="sm:text-md xl:text-md max-w-[400px] text-sm 2xl:max-w-[500px] 2xl:text-xl">
                Meet your friends and approach new rivals. Everything is
                possible buddy. We love you.
              </h2>
              <button className="text-md mt-4 rounded border-2 border-green-500 bg-green-900 px-4 py-2 font-semibold text-white hover:bg-green-800 md:px-6">
                Start now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
