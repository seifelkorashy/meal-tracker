import MealProvider from "../MealContext";
import "./App.css";
import MealForm from "./components/MealForm";
import MealList from "./components/MealList";
import Navbar from "./components/Navbar";
import TotalCalories from "./components/TotalCalories";
function App() {
  return (
    <MealProvider>
      <Navbar />
      <MealForm />
      <TotalCalories />
      <MealList />
    </MealProvider>
  );
}

export default App;
