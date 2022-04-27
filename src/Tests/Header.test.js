import Header from "../Components/Header";
import { render, screen } from "@testing-library/react";

test("[1] Renders without errors", () => {
  render(<Header />);
});

test("[2] AppBar appears on screen", () => {
  render(<Header />);

  const appBar = screen.getByTestId("appBar");
  expect(appBar).toBeVisible();
});
