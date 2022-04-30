import SingleMeal from "./SingleMeal";
import ThingsContext from "../Context/MyContext";
import { useContext } from "react";

const MealDisplayContainer = () => {
  const { myThings } = useContext(ThingsContext);

  return (
    <ul>
      {myThings.map((item) => {
        const { name, calories, id } = item;
        return <SingleMeal name={name} calories={calories} id={id} key={id} />;
      })}
    </ul>
  );
};

export default MealDisplayContainer;
