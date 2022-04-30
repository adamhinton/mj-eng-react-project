import AddMealForm from "../Components/AddMealForm";
import { render, screen } from "@testing-library/react";
import { ThingsProvider } from "../Context/MyContext";

//I couldn't get these to work with a Provider component.ping for now.

test("[1] Renders without errors", () => {
  render(
    <ThingsProvider>
      <AddMealForm />
    </ThingsProvider>
  );
});

test("[2] Meal input and label appear on screen", () => {
  render(
    <ThingsProvider>
      <AddMealForm />
    </ThingsProvider>
  );

  const mealLabel = screen.getByTestId("meal-label");
  const mealInput = screen.getByTestId("meal-input");

  expect(mealLabel).toBeVisible();
  expect(mealInput).toBeVisible();
});

test("[3] Calories input and label appear on screen", () => {
  render(
    <ThingsProvider>
      <AddMealForm />
    </ThingsProvider>
  );

  const caloriesLabel = screen.getByTestId("calories-label");
  const caloriesInput = screen.getByTestId("calories-input");

  expect(caloriesLabel).toBeVisible();
  expect(caloriesInput).toBeVisible();
});

test("[4] Submit button appears in document", () => {
  render(
    <ThingsProvider>
      <AddMealForm />
    </ThingsProvider>
  );

  const submitBtn = screen.getByTestId("submit-btn");
  expect(submitBtn).toBeVisible();
});
