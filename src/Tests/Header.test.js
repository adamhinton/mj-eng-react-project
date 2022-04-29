import Header from "../Components/Header";
import { render, screen } from "@testing-library/react";

test.skip("[1] Renders without errors", () => {
  render(<Header />);
});

test.skip("[2] AppBar appears on screen", () => {
  render(<Header />);

  const appBar = screen.getByTestId("appBar");
  expect(appBar).toBeVisible();
});

test.skip("[3] Header h1 and Button appear on screen", () => {
  render(<Header />);

  const h1 = screen.getByTestId("header-h1");
  const headerBtn = screen.getByTestId("header-btn");

  expect(h1).toBeVisible();
  expect(headerBtn).toBeVisible();
});
