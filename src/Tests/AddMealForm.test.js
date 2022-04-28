import AddMealForm from "../Components/AddMealForm";
import { render, screen } from "@testing-library/react";

test("[1] Renders without errors", () => {
  render(<AddMealForm />);
});
