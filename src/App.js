import "./App.css";
import Header from "./Components/Header";
import AddMealForm from "./Components/AddMealForm";
import TotalCalories from "./Components/TotalCalories";
import MealDisplayContainer from "./Components/MealDisplayContainer";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <AddMealForm />
        <TotalCalories />
        <MealDisplayContainer />
      </main>
    </div>
  );
}

export default App;
