import { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";

function Pricing() {
  const [personalOpen, setPersonalOpen] = useState();
  const [proOpen, setProOpen] = useState();
  return (
    <div className="flex w-full items-center justify-center py-[100px]">
      <div className="w-max-[1500px] flex w-full flex-col items-center justify-center gap-6 p-4 text-white">
        <div className="rounded-full border-[1px] border-green-500 bg-green-900 px-4 py-1 text-sm">
          Pricing
        </div>
        <h2 className="max-w-[900px] text-center text-4xl font-semibold tracking-wide sm:text-7xl sm:leading-[70px]">
          Choose a plan that fits your needs.
        </h2>
        <h3 className="max-w-[400px] text-center text-sm sm:text-lg">
          We belive that strong and fit body should be accessible availble for
          everybody.
        </h3>
        <div className="flex w-full flex-col gap-8">
          <div
            onClick={() => setPersonalOpen(!personalOpen)}
            className="z-20 flex w-full flex-col gap-10 rounded-md border-[1px] border-stone-700 bg-stone-900 p-6"
          >
            <div className="flex w-full justify-between">
              <div className="flex items-center rounded-full border-[1px] border-stone-700 bg-stone-800 px-3 py-1">
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
              <div>
                <div className="flex items-center gap-2 text-xl">
                  <FaCheck size={20} /> My profile
                </div>
                <div className="flex items-center gap-2 text-xl">
                  <FaCheck size={20} /> availble for 2 weeks
                </div>
              </div>
            )}
          </div>
          <div
            onClick={() => setProOpen(!proOpen)}
            className="shadow-middle flex w-full flex-col gap-10 rounded-md border-[1px] border-stone-700 p-6 shadow-green-700"
          >
            <div className="flex w-full justify-between">
              <div className="flex items-center rounded-full border-[1px] border-green-500 bg-green-900 px-3 py-1">
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
              <div>
                <div className="flex items-center gap-2 text-xl">
                  <FaCheck size={20} /> My profile
                </div>
                <div className="flex items-center gap-2 text-xl">
                  <FaCheck size={20} /> availble for 2 weeks
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
