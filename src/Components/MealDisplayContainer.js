import SingleMeal from "./SingleMeal";
import ThingsContext from "../Context/MyContext";
import { useContext } from "react";
import { useEffect } from "react";

const MealDisplayContainer = () => {
  const { myThings, setMyThings } = useContext(ThingsContext);

  return (
    <ul>
      {myThings.mealInfo.map((item) => {
        const { mealName, count } = item;
        return <SingleMeal mealName={mealName} count={count} key={mealName} />;
      })}
    </ul>
  );
};

export default MealDisplayContainer;
