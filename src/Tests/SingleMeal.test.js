import SingleMeal from "../Components/SingleMeal";
import { render, screen } from "@testing-library/react";
import { ThingsProvider } from "../Context/MyContext";

const testMeal = {
  name: "Meal One",
  calories: 12345,
};

test.skip("[1] Renders without errors", () => {
  render(
    <ThingsProvider>
      <SingleMeal name={testMeal.name} calories={testMeal.calories} />
    </ThingsProvider>
  );
});

test.skip("[2] Display correct meal name and calorie count", () => {
  render(
    <ThingsProvider>
      <SingleMeal name={testMeal.name} calories={testMeal.calories} />
    </ThingsProvider>
  );

  const mealNameText = screen.getByText(/meal one/i);
  const mealCountText = screen.getByText(/12345/);

  expect(mealNameText).toBeVisible();
  expect(mealCountText).toBeVisible();
});

test.skip("[3] Displays meal edit icon", () => {
  render(
    <ThingsProvider>
      <SingleMeal name={testMeal.name} calories={testMeal.calories} />
    </ThingsProvider>
  );

  const mealEditBtn = screen.getByTestId("meal-edit-button");

  expect(mealEditBtn).toBeVisible();
});
