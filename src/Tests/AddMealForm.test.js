import AddMealForm from "../Components/AddMealForm";
import { render, screen } from "@testing-library/react";

test("[1] Renders without errors", () => {
  render(<AddMealForm />);
});

test("[2] Meal input and label appear on screen", () => {
  render(<AddMealForm />);

  const mealLabel = screen.getByTestId("meal-label");
  const mealInput = screen.getByTestId("meal-input");

  expect(mealLabel).toBeVisible();
  expect(mealInput).toBeVisible();
});
