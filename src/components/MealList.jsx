import { Stack } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useMeal } from "../../MealContext";
import { useEffect } from "react";

export default function MealList() {
  const { meals, setMeals} = useMeal();

  return (
    <>
      <p style={{ textAlign: "center" }}>today meals</p>

        {meals.length === 0 && (
          <p style={{ textAlign: "center", color: "#9CA3AF" }}>
            no meals added yet
          </p>
        )}
      {meals.map((meal) => {
        return (
          <div
            className="card"
            key={meal.id}
            style={{
              background: "#fff",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Stack direction={"column"}>
              <h2 style={{ fontSize: "22px", fontWeight: "500" }}>{meal.name}</h2>
              <h1
                style={{ marginTop: "5px", color: "#9CA3AF", fontSize: "18px" }}
              >
                {meal.date}
              </h1>
            </Stack>

            <p style={{ color: "#15803D", fontSize: "18px" }}>{meal.calories} kcal</p>

            <button
              style={{
                background: "transparent",
                border: "none",
                cursor: "pointer",
              }}
              onClick={() => {
                setMeals(meals.filter((m) => m.id !== meal.id));
              }}
            >
              <DeleteIcon style={{ color: "#EF4444" }} />
            </button>
          </div>
        );
      })}
    </>
  );
}
