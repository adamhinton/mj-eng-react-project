import "./App.css";
import Header from "./Components/Header";
import AddMealForm from "./Components/AddMealForm";
import TotalCalories from "./Components/TotalCalories";
import MealDisplayContainer from "./Components/MealDisplayContainer";
import ThingsContext from "./Context/MyContext";
import { useState } from "react";
import StorageCtrl from "./CrudFunctions/StorageCtrl";
import { ThingsProvider } from "./Context/MyContext";

const things = StorageCtrl.getItemsFromStorage();

function App() {
  // const [myThings, setMyThings] = useState(things);

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
