import { useEffect, useState } from "react";

const useMountTransition = (isOpen, unmountDelay) => {
  const [hasTransitionedIn, setHasTransitionedIn] = useState(false);

  useEffect(() => {
    let timeoutId;

    if (isOpen && !hasTransitionedIn) {
      setHasTransitionedIn(true);
    } else if (!isOpen && hasTransitionedIn) {
      timeoutId = setTimeout(() => setHasTransitionedIn(false), unmountDelay);
    }
    return () => {
      clearTimeout(timeoutId);
    };
  }, [unmountDelay, isOpen, hasTransitionedIn]);

  return hasTransitionedIn;
};

export default useMountTransition;
