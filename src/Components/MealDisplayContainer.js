import SingleMeal from "./SingleMeal";
import ThingsContext from "../Context/MyContext";
import { useContext } from "react";

const MealDisplayContainer = () => {
  const { myThings, setMyThings } = useContext(ThingsContext);

  return (
    <ul>
      {myThings.map((item) => {
        const { name, count } = item;
        return <SingleMeal name={name} count={count} key={name} />;
      })}
      fjdaiofadsifo
    </ul>
  );
};

export default MealDisplayContainer;
