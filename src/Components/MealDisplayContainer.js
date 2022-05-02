// This component is pretty simple. It takes in from Context the list of meals that the user has added, and maps over it, displaying a SingleMeal component for each.

import SingleMeal from "./SingleMeal";
import ThingsContext from "../Context/MyContext";
import { useContext } from "react";

const MealDisplayContainer = () => {
  // mealsListGlobalState is the array of all meals, taken from context
  const { mealsListGlobalState } = useContext(ThingsContext);

  return (
    <ul className="all-meals-display-container">
      {mealsListGlobalState.map((item) => {
        const { name, calories, id } = item;
        return <SingleMeal name={name} calories={calories} id={id} key={id} />;
      })}
    </ul>
  );
};

export default MealDisplayContainer;
