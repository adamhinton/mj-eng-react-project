import SingleMeal from "./SingleMeal";

const dummyArray = [
  {
    mealName: "Meal One",
    count: 23112,
  },
  {
    mealName: "Meal Two",
    count: 223423,
  },
];

const MealDisplayContainer = () => {
  return (
    <ul>
      {dummyArray.map((item) => {
        const { mealName, count } = item;
        return <SingleMeal mealName={mealName} count={count} />;
      })}
    </ul>
  );
};

export default MealDisplayContainer;
