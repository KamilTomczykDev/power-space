import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";

function CallToAction() {
  const [ref, inView] = useInView({
    threshold: 0.2,
  });

  return (
    <div ref={ref} className="flex w-full items-center justify-center md:py-10">
      <div
        className={`flex max-w-[1500px] flex-col items-center p-4 transition duration-1000 md:gap-6 ${
          inView ? "" : "translate-y-10 opacity-0"
        }`}
      >
        <h3 className="max-w-[800px] text-center text-4xl font-semibold tracking-wide text-white transition duration-1000 sm:text-6xl md:text-8xl">
          The best way to improve is to take action.
        </h3>
        <Link to="login">
          <button className="text-md mt-4 rounded border-2 border-green-500 bg-green-900 px-4 py-2 font-semibold text-white hover:bg-green-800 md:px-6 md:py-3 md:text-2xl xl:px-8 xl:py-4">
            Start now
          </button>
        </Link>
      </div>
    </div>
  );
}

export default CallToAction;
