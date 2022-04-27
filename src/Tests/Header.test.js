import Header from "../Components/Header";
import { render, screen } from "@testing-library/react";

test("[1] Renders without errors", () => {
  render(<Header />);
});
