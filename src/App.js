import "./App.css";
import Header from "./Components/Header";
import AddMealForm from "./Components/AddMealForm";
import TotalCalories from "./Components/TotalCalories";
import MealDisplayContainer from "./Components/MealDisplayContainer";
import { MealsProvider } from "./Context/MyContext";

function App() {
  return (
    <div className="App">
      <MealsProvider>
        <Header />
        <main>
          <AddMealForm />
          <TotalCalories />
          <MealDisplayContainer />
        </main>
      </MealsProvider>
    </div>
  );
}

export default App;
