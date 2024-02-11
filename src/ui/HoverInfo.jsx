import { useState } from "react";

function HoverInfo({ children, text }) {
  const [isVisible, setIsVisible] = useState(false);

  const handleMouseEnter = () => setIsVisible(true);
  const handleMouseLeave = () => setIsVisible(false);

  return (
    <div className="relative">
      {isVisible && (
        <div className="absolute bottom-5 w-[100px] border-2 border-stone-500 bg-stone-800 p-1 text-center text-xs md:text-sm">
          {text}
        </div>
      )}

      <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        {children}
      </div>
    </div>
  );
}

export default HoverInfo;
