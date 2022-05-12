import AddMealForm from "../Components/AddMealForm";
import { render, screen } from "@testing-library/react";
import { MealsProvider } from "../Context/MyContext";
import userEvent from "@testing-library/user-event";

test("[1] Renders without errors", () => {
  render(
    <MealsProvider>
      <AddMealForm />
    </MealsProvider>
  );
});

test("[2] Meal input and label appear on screen", () => {
  render(
    <MealsProvider>
      <AddMealForm />
    </MealsProvider>
  );

  const mealLabel = screen.getByTestId("add-new-meal-name-label");
  const mealInput = screen.getByTestId("add-new-meal-name-input");

  expect(mealLabel).toBeVisible();
  expect(mealInput).toBeVisible();
});

test("[3] Calories input and label appear on screen", () => {
  render(
    <MealsProvider>
      <AddMealForm />
    </MealsProvider>
  );

  const caloriesLabel = screen.getByTestId("add-new-meal-calories-label");
  const caloriesInput = screen.getByTestId("add-new-meal-calories-input");

  expect(caloriesLabel).toBeVisible();
  expect(caloriesInput).toBeVisible();
});

test("[4] Submit button appears in document", () => {
  render(
    <MealsProvider>
      <AddMealForm />
    </MealsProvider>
  );

  const submitBtn = screen.getByTestId("add-meal-submit-btn");
  expect(submitBtn).toBeVisible();
});

test("[5] Form values accept valid typed values, and reset on submit", () => {
  render(
    <MealsProvider>
      <AddMealForm />
    </MealsProvider>
  );

  userEvent.type(screen.getByPlaceholderText("Add Item"), "abc");
  userEvent.type(screen.getByPlaceholderText("Add Calories"), "123");

  expect(screen.getByPlaceholderText("Add Item")).toHaveValue("abc");
  expect(screen.getByPlaceholderText("Add Calories")).toHaveValue(123);

  const submitBtn = screen.getByTestId("add-meal-submit-btn");

  userEvent.click(submitBtn);

  expect(screen.getByPlaceholderText("Add Item")).toHaveValue("");
  expect(screen.getByPlaceholderText("Add Calories")).toHaveValue(0);
});

test("[6] Calories input only accepts numbers", () => {
  render(
    <MealsProvider>
      <AddMealForm />
    </MealsProvider>
  );

  userEvent.type(screen.getByPlaceholderText("Add Calories"), "abc");
  expect(screen.getByPlaceholderText("Add Calories")).toHaveValue(0);
});
