import SingleMeal from "../Components/SingleMeal";
import { render, screen } from "@testing-library/react";
import { ThingsProvider } from "../Context/MyContext";
import userEvent from "@testing-library/user-event";

const testMeal = {
  name: "Meal One",
  calories: 12345,
};

test("[1] Renders without errors", () => {
  render(
    <ThingsProvider>
      <SingleMeal name={testMeal.name} calories={testMeal.calories} />
    </ThingsProvider>
  );
});

test("[2] Display correct meal name and calorie count", () => {
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

test("[3] Displays meal edit icon", () => {
  render(
    <ThingsProvider>
      <SingleMeal name={testMeal.name} calories={testMeal.calories} />
    </ThingsProvider>
  );

  const mealEditBtn = screen.getByTestId("meal-edit-button");

  expect(mealEditBtn).toBeVisible();
});

test("[4] SingleMeal edit form appears only after user clicks edit button", () => {
  render(
    <ThingsProvider>
      <SingleMeal name={testMeal.name} calories={testMeal.calories} />
    </ThingsProvider>
  );

  const mealEditBtn = screen.getByTestId("meal-edit-button");
  expect(screen.queryByTestId("single-meal-edit-form")).toBeFalsy();

  userEvent.click(mealEditBtn);

  expect(screen.getByTestId("single-meal-edit-form")).toBeVisible();
});
