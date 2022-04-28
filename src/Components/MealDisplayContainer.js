import SingleMeal from "./SingleMeal";

const dummyArray = [
  {
    name: "Meal One",
    count: 23112,
  },
  {
    name: "Meal Two",
    count: 223423,
  },
];

const MealDisplayContainer = () => {
  return (
    <ul>
      {dummyArray.map((item) => {
        return <SingleMeal />;
      })}
    </ul>
  );
};

export default MealDisplayContainer;
