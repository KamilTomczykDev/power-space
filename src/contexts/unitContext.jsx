import { createContext, useState } from "react";

const UnitContext = createContext();

function UnitProvider({ children }) {
  //   const [{ lang }, dispatch] = useReducer(reducer, initialState);
  const [unit, setUnit] = useState("kg");

  function calculateWeight(weight) {
    if (unit === "lbs") return Number(weight * 2.20462262).toFixed(1);

    return weight;
  }

  return (
    <UnitContext.Provider value={{ unit, setUnit, calculateWeight }}>
      {children}
    </UnitContext.Provider>
  );
}

export { UnitProvider, UnitContext };
