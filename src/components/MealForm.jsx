import { useState } from "react";
import { useMeal } from "../../MealContext";

export default function MealForm() {
  const [mealName, setMealName] = useState("");
  const [calories, setCalories] = useState("");
  const { meals, setMeals } = useMeal();

  function handleAddMeal() {
    if (!mealName || !calories) {
      alert("please fill all fields");
      return;
    }
    setMeals([
      ...meals,
      {
        id: Date.now(),
        name: mealName,
        calories: calories,
        date: new Date().toLocaleString(),
      },
    ]);

    setMealName("");
    setCalories("");
  }
  return (
    <div
      style={{
        background: "#F9FAFB",
      }}
      className="card"
    >
      <h3>hello, seif</h3>
      <p style={{ color: "#333333", opacity: ".8" }}>
        track your meals and calories easliy
      </p>

      <div style={{ background: "#fff", padding: "20px", marginTop: "10px" }}>
        <p style={{ color: "#6B7280", marginBottom: "10px" }}>add new meal</p>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "15px",
          }}
        >
          <input
            type="text"
            style={{
              padding: "8px 5px",
              border: "1px solid #E5E7EB",
              outline: "none",
              width: "40%",
            }}
            placeholder="meal name"
            value={mealName}
            onChange={(e) => setMealName(e.target.value)}
          />

          <input
            type="number"
            placeholder="calories(kcal)"
            style={{
              padding: "8px 5px",
              border: "1px solid #E5E7EB",
              outline: "none",
            }}
            value={calories}
            onChange={(e) => setCalories(e.target.value)}
          />
          <button
            style={{
              border: "none",
              outline: "none",
              padding: "15px 30px",
              background: "#16A34A",
              color: "white",
              borderRadius: "10px",
              cursor: "pointer",
            }}
            onClick={handleAddMeal}
          >
            add meal
          </button>
        </div>
      </div>
    </div>
  );
}
