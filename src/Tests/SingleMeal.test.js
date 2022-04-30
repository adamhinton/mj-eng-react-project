import SingleMeal from "../Components/SingleMeal";
import { render, screen } from "@testing-library/react";

const testMeal = {
  name: "Meal One",
  calories: 12345,
};

test.skip("[1] Renders without errors", () => {
  render(<SingleMeal />);
});

test.skip("[2] Display correct meal name and calorie count", () => {
  render(<SingleMeal name={testMeal.name} calories={testMeal.calories} />);

  const mealNameText = screen.getByText(/meal one/i);
  const mealCountText = screen.getByText(/12345/);

  expect(mealNameText).toBeVisible();
  expect(mealCountText).toBeVisible();
});

test.skip("[3] Displays meal edit icon", () => {
  render(<SingleMeal />);

  const mealEditBtn = screen.getByTestId("meal-edit-button");

  expect(mealEditBtn).toBeVisible();
});
