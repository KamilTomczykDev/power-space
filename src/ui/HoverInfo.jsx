import { useState } from "react";

function HoverInfo({ children, text }) {
  const [isVisible, setIsVisible] = useState(false);

  const handleMouseEnter = () => setIsVisible(true);
  const handleMouseLeave = () => setIsVisible(false);

  return (
    <div className="relative">
      {isVisible && (
        <div className="absolute bottom-10 right-[-30px] border-2 border-stone-500 bg-stone-800 px-4 py-1 text-center text-xs">
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
