import SingleMeal from "../Components/SingleMeal";
import { render, screen } from "@testing-library/react";

test("[1] Renders without errors", () => {
  render(<SingleMeal />);
});

test("[2] Display correct meal name and calorie count", () => {
  render(<SingleMeal mealName="Meal One" count={300} />);

  const mealNameText = screen.getByText(/meal one/i);
  const mealCountText = screen.getByText(/300/);

  expect(mealNameText).toBeVisible();
  expect(mealCountText).toBeVisible();
});
