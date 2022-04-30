import "./App.css";
import Header from "./Components/Header";
import AddMealForm from "./Components/AddMealForm";
import TotalCalories from "./Components/TotalCalories";
import MealDisplayContainer from "./Components/MealDisplayContainer";
import { ThingsProvider } from "./Context/MyContext";

function App() {
  return (
    <div className="App">
      <ThingsProvider>
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
