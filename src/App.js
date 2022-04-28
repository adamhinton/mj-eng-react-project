import "./App.css";
import Header from "./Components/Header";
import AddMealForm from "./Components/AddMealForm";
import TotalCalories from "./Components/TotalCalories";
import MealDisplayContainer from "./Components/MealDisplayContainer";
import { ThingsProvider } from "./Context/MyContext";

const things = {
  mealInfo: [
    { mealName: "Dummy data", count: 1234 },
    { mealName: "More dummy data", count: 324325 },
  ],
};

function App() {
  return (
    <div className="App">
      <ThingsProvider value={things}>
        <Header />
        <main>
          <AddMealForm />
          <TotalCalories />
          <MealDisplayContainer />
        </main>
      </ThingsProvider>
    </div>
  );
}

export default App;
