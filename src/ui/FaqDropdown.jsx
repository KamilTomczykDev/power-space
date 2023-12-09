import { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";
import useMountTransition from "../hooks/useMountTransition";

function FaqDropdown({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);
  const hasTransitionedIn = useMountTransition(isOpen, 0);
  return (
    <>
      <div className="flex w-full max-w-[1000px] flex-col items-center rounded-sm border-[1px] border-stone-600 bg-stone-800 hover:bg-stone-700">
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="flex w-full cursor-pointer items-center justify-between gap-2 p-3 sm:p-6"
        >
          <h3 className="text-sm font-semibold tracking-wide text-white sm:text-2xl">
            {title}
          </h3>
          {!isOpen ? (
            <FaAngleDown size={25} color={"white"} />
          ) : (
            <FaAngleUp size={25} color={"white"} />
          )}
        </div>
        {(isOpen || hasTransitionedIn) && (
          <div
            className={`text-white ${
              hasTransitionedIn && isOpen ? "" : "translate-y-5 opacity-0"
            } p-3 text-sm transition-all duration-500 sm:p-6 sm:text-xl`}
          >
            <span className="font-semibold">Answer: </span>
            {children}
          </div>
        )}
      </div>
    </>
  );
}

export default FaqDropdown;
