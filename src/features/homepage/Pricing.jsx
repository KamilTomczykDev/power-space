import { useState } from "react";
import { useInView } from "react-intersection-observer";
import { FaAngleDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";

import sun from "../../assets/sun.svg";

function Pricing() {
  const [personalOpen, setPersonalOpen] = useState();
  const [proOpen, setProOpen] = useState();
  const [ref, inView] = useInView({
    threshold: 0.4,
  });
  return (
    <div
      ref={ref}
      name="pricing"
      className="flex w-full items-center justify-center overflow-hidden py-[100px]"
    >
      <div className="relative flex w-full max-w-[1500px] flex-col items-center justify-center gap-6 p-4 text-white">
        <img
          src={sun}
          className="translate absolute bottom-[-100px] left-[-400px] w-[1000px] opacity-[0.03] md:flex"
        />
        <div className="rounded-full border-1 border-secondary bg-secondary-900 px-4 py-1 text-sm">
          Pricing
        </div>
        <h2 className="max-w-[900px] text-center text-4xl font-semibold tracking-wide sm:text-7xl sm:leading-[70px]">
          Choose a plan that fits your needs.
        </h2>
        <h3 className="max-w-[400px] text-center text-sm sm:text-lg">
          We belive that strong and fit body should be accessible availble for
          everybody.
        </h3>
        <div className="flex w-full flex-col gap-8 sm:hidden">
          <div
            onClick={() => setPersonalOpen(!personalOpen)}
            className="z-20 flex w-full flex-col gap-10 rounded-md border-1 border-main bg-primary-900 p-6"
          >
            <div className="flex w-full justify-between">
              <div className="flex items-center rounded-full border-1 border-main bg-primary-800 px-3 py-1">
                Personal
              </div>
              <div className="flex items-center gap-2">
                <h4 className="text-3xl font-semibold">Free</h4>
                {personalOpen ? (
                  <FaAngleUp size={25} />
                ) : (
                  <FaAngleDown size={25} />
                )}
              </div>
            </div>
            {personalOpen && (
              <>
                <div>
                  <div className="card-item">
                    <FaCheck size={20} /> Maximum 20 workouts
                  </div>
                  <div className="card-item">
                    <FaCheck size={20} /> Availble for 2 weeks
                  </div>
                  <div className="card-item">
                    <FaCheck size={20} /> Leaderboard
                  </div>
                  <div className="card-item">
                    <FaCheck size={20} /> Free E-book
                  </div>
                </div>
                <button className="rounded-md border-1 border-main bg-primary-800 p-2 hover:bg-primary-700">
                  Learn more
                </button>
              </>
            )}
          </div>
          <div
            onClick={() => setProOpen(!proOpen)}
            className="z-10 flex w-full flex-col gap-10 rounded-md border-1 border-primary-700 bg-primary-900 p-6 shadow-middle shadow-secondary-700"
          >
            <div className="flex w-full justify-between">
              <div className="flex items-center rounded-full border-1 border-secondary-500 bg-secondary-900 px-3 py-1">
                Pro
              </div>
              <div className="flex items-center gap-2">
                <h4 className="text-3xl font-semibold">
                  10$<span className="text-sm font-medium">/M</span>
                </h4>
                {proOpen ? <FaAngleUp size={25} /> : <FaAngleDown size={25} />}
              </div>
            </div>
            {proOpen && (
              <>
                <div>
                  <div className="card-item">
                    <FaCheck size={20} /> Unlimited workouts
                  </div>
                  <div className="card-item">
                    <FaCheck size={20} /> Unlimited access
                  </div>
                  <div className="card-item">
                    <FaCheck size={20} /> Leaderboard
                  </div>
                  <div className="card-item">
                    <FaCheck size={20} /> Free E-book
                  </div>
                </div>
                <button className="rounded-md border-1 border-secondary-500 bg-gradient-to-t from-secondary-800 p-2 hover:from-secondary-600">
                  Buy now
                </button>
              </>
            )}
          </div>
        </div>

        <div className="mt-10 hidden w-full justify-center gap-10 sm:flex">
          {/*card  */}
          <div
            className={`z-20 flex h-[450px] w-[290px] flex-col items-start gap-5 rounded border-1 border-main bg-primary-900 p-4 transition duration-[2000ms] ${
              inView ? "" : "translate-x-[-100px] opacity-0"
            }`}
          >
            <div className="flex items-center rounded-full border-1 border-main bg-primary-800 px-3 py-1">
              Personal
            </div>
            <h4 className="text-5xl font-semibold">Free</h4>
            <p className=" max-w-[200px] text-xs text-primary-400">
              Start for free now. Trial offers all main features of the
              platform.
            </p>
            <div className="flex h-full w-full flex-col border-t-1 border-main pt-10">
              <div className="card-item">
                <FaCheck size={20} /> Maximum 20 workouts
              </div>
              <div className="card-item">
                <FaCheck size={20} /> Availble for 2 weeks
              </div>
              <div className="card-item">
                <FaCheck size={20} /> Leaderboard
              </div>
              <div className="card-item">
                <FaCheck size={20} /> Free E-book
              </div>
            </div>
            <button className="w-full rounded-md border-1 border-primary-700 bg-primary-800 p-2 hover:bg-primary-700">
              Learn more
            </button>
          </div>

          <div
            className={`z-10 flex h-[450px] w-[290px] flex-col items-start justify-between gap-5 rounded border-1 border-main bg-primary-900 p-4 shadow-middle shadow-secondary-700 transition duration-[2000ms] ${
              inView ? "" : "translate-x-[100px] opacity-0"
            }`}
          >
            <div className="flex items-center rounded-full border-1 border-secondary-500 bg-secondary-900 px-3 py-1">
              Pro
            </div>
            <h4 className="text-5xl font-semibold">
              10$
              <span className="text-sm font-medium text-primary-400">
                {" "}
                per month
              </span>
            </h4>
            <p className=" max-w-[200px] text-xs text-primary-400">
              Ideal plan for those who value independency
            </p>
            <div className="w-full border-t-1 border-main pt-8">
              <div className="card-item">
                <FaCheck size={20} color={"#1be053"} /> Unlimited workouts
              </div>
              <div className="card-item">
                <FaCheck size={20} color={"#1be053"} /> Unlimited access
              </div>
              <div className="card-item">
                <FaCheck size={20} color={"#1be053"} /> Leaderboard
              </div>
              <div className="card-item">
                <FaCheck size={20} color={"#1be053"} /> Free E-book
              </div>
              <div className="card-item">
                <FaCheck size={20} color={"#1be053"} /> Free diet coach
              </div>
            </div>
            <button className="w-full rounded-md border-1 border-secondary-500 bg-gradient-to-t from-secondary-900 p-2 hover:from-secondary-700">
              Buy now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
