import SingleMeal from "./SingleMeal";
import ThingsContext from "../Context/MyContext";
import { useContext } from "react";

const MealDisplayContainer = () => {
  const { myThings, setMyThings } = useContext(ThingsContext);

  return (
    <ul>
      {myThings.map((item) => {
        const { name, calories } = item;
        return <SingleMeal name={name} calories={calories} key={name} />;
      })}
      fjdaiofadsifo
    </ul>
  );
};

export default MealDisplayContainer;
