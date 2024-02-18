import { useState } from "react";

function HoverInfo({ children, text }) {
  const [isVisible, setIsVisible] = useState(false);

  const handleMouseEnter = () => setIsVisible(true);
  const handleMouseLeave = () => setIsVisible(false);

  return (
    <div className="relative">
      {isVisible && (
        <div className="absolute bottom-10 right-[-30px] border-1 border-main bg-primary-800 px-4 py-1 text-center text-xs text-secondary-400">
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
