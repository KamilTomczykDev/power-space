import { useContext } from "react";
import { UnitContext } from "../contexts/unitContext";

function useUnits() {
  const context = useContext(UnitContext);
  if (context === undefined) return new Error("Unit Context");
  return context;
}

export default useUnits;
