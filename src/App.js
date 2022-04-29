import "./App.css";
import Header from "./Components/Header";
import AddMealForm from "./Components/AddMealForm";
import TotalCalories from "./Components/TotalCalories";
import MealDisplayContainer from "./Components/MealDisplayContainer";
import ThingsContext from "./Context/MyContext";
import { useState } from "react";
import StorageCtrl from "./CrudFunctions/StorageCtrl";

const things = StorageCtrl.getItemsFromStorage();

function App() {
  const [myThings, setMyThings] = useState(things);

  return (
    <div className="App">
      <ThingsContext.Provider value={{ myThings, setMyThings }}>
        <Header />
        <main>
          <AddMealForm />
          <TotalCalories />
          <MealDisplayContainer />
        </main>
      </ThingsContext.Provider>
    </div>
  );
}

export default App;
