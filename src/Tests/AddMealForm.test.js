import AddMealForm from "../Components/AddMealForm";
import { render, screen } from "@testing-library/react";
import { ThingsProvider } from "../Context/MyContext";
import userEvent from "@testing-library/user-event";

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

test("[5] Form values accept valid typed values, and reset on submit", () => {
  render(
    <ThingsProvider>
      <AddMealForm />
    </ThingsProvider>
  );

  // console.log("abc:", screen.getByPlaceholderText("Add Item"));

  userEvent.type(screen.getByPlaceholderText("Add Item"), "abc");
  userEvent.type(screen.getByPlaceholderText("Add Calories"), "123");

  expect(screen.getByPlaceholderText("Add Item")).toHaveValue("abc");
  expect(screen.getByPlaceholderText("Add Calories")).toHaveValue(123);
});
