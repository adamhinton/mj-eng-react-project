import TotalCalories from "../Components/TotalCalories";
import { render, screen } from "@testing-library/react";

test("[1] Renders without errors", () => {
  render(<TotalCalories />);
});

test("[2] Total Calories text appears on screen", () => {
  render(<TotalCalories />);

  const totalCaloriesText = screen.getByTestId("total-calories");

  expect(totalCaloriesText).toBeVisible();
});
