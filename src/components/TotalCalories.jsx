import { Stack } from "@mui/material";
import { useMeal } from "../../MealContext";

export default function TotalCalories() {
  const { meals } = useMeal();
  const totalCalories = meals.reduce((sum, meal) => sum + parseInt(meal.calories), 0);
  return (
    <div
      className="card"
      style={{ background: "#F0FDF4", display:"flex", alignItems:"center", justifyContent:"space-between"}}
    >
      <Stack direction={"column"}>
            <h2 style={{fontSize:"18px"}}>today calories</h2>
            <h1 style={{marginTop:"10px", color:"#15803D", fontSize:"25px"}}>{totalCalories} kcal</h1>
      </Stack>
      <Stack direction={"column"}>
            <h2 style={{fontSize:"18px"}}>daily goal</h2>
            <h1 style={{marginTop:"10px", color:"#15803D", fontSize:"20px"}}>2000 kcal</h1>
      </Stack>
    </div>
  );
}
