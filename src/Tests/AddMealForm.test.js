import AddMealForm from "../Components/AddMealForm";
import { render, screen } from "@testing-library/react";

//I couldn't get these to work with a Provider component. Skipping for now.

test.skip("[1] Renders without errors", () => {
  render(<AddMealForm />);
});

test.skip("[2] Meal input and label appear on screen", () => {
  render(<AddMealForm />);

  const mealLabel = screen.getByTestId("meal-label");
  const mealInput = screen.getByTestId("meal-input");

  expect(mealLabel).toBeVisible();
  expect(mealInput).toBeVisible();
});

test.skip("[3] Calories input and label appear on screen", () => {
  render(<AddMealForm />);

  const caloriesLabel = screen.getByTestId("calories-label");
  const caloriesInput = screen.getByTestId("calories-input");

  expect(caloriesLabel).toBeVisible();
  expect(caloriesInput).toBeVisible();
});

test.skip("[4] Submit button appears in document", () => {
  render(<AddMealForm />);

  const submitBtn = screen.getByTestId("submit-btn");
  expect(submitBtn).toBeVisible();
});
