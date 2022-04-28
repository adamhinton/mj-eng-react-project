import SingleMeal from "./SingleMeal";
import ThingsContext from "../Context/MyContext";
import { useContext } from "react";

const MealDisplayContainer = () => {
  const things = useContext(ThingsContext);

  // console.log("things.mealInfo:", things.mealInfo);

  return (
    <ul>
      {things.mealInfo.map((item) => {
        const { mealName, count } = item;
        return <SingleMeal mealName={mealName} count={count} key={mealName} />;
      })}
    </ul>
  );
};

export default MealDisplayContainer;
