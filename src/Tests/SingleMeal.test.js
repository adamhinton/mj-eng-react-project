import SingleMeal from "../Components/SingleMeal";
import { render, screen } from "@testing-library/react";

test("[1] Renders without errors", () => {
  render(<SingleMeal />);
});
