import headerImg from "../../../assets/header-img.jpg";

function Header() {
  return (
    <header className="flex min-h-screen flex-col bg-stone-800">
      <nav className="flex items-center justify-start gap-10 px-4 py-5">
        <h1 className="text-xl font-bold">P S</h1>
        <ul className="flex gap-8 text-sm">
          <li>Pricing</li>
          <li>FAQ</li>
          <li>Contact</li>
        </ul>
      </nav>
      <div className="flex w-full max-w-[1300px] flex-col justify-between bg-white">
        <div className="flex flex-col justify-between">
          <div className="flex h-full items-center justify-center">
            <div className="flex flex-col items-start gap-2 px-4">
              <h1 className="text-3xl font-bold">
                Unleash your powerlifting potential.
              </h1>
              <h2 className="text-sm">
                Meet your friends and approach new rivals. Everything is
                possible buddy. We love you.
              </h2>
              <button className="text-md rounded bg-green-900 px-4 py-2 font-semibold text-white">
                Start now
              </button>
            </div>
          </div>
        </div>
        <div className="py-5 pl-5">
          <img
            className="h-[200px] w-full rounded-l-3xl object-cover"
            src={headerImg}
          ></img>
        </div>
      </div>
    </header>
  );
}

export default Header;
