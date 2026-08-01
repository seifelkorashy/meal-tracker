import { useContext, createContext, useState, useEffect } from "react";

const MealContext = createContext();

export default function MealProvider({ children }) {
  const [meals, setMeals] = useState(
    JSON.parse(localStorage.getItem("meals")) || []
  );
  

  useEffect(() => {
    localStorage.setItem("meals", JSON.stringify(meals));
  }, [meals]);
  return (
    <MealContext.Provider
      value={{
        meals,
        setMeals,
      }}
    >
      {children}
    </MealContext.Provider>
  );
}

export const useMeal = () => useContext(MealContext);