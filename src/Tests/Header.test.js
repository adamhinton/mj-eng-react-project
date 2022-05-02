import Header from "../Components/Header";
import { render, screen } from "@testing-library/react";
import { MealsProvider } from "../Context/MyContext";

test("[1] Renders without errors", () => {
  render(
    <MealsProvider>
      <Header />
    </MealsProvider>
  );
});

test("[2] AppBar appears on screen", () => {
  render(
    <MealsProvider>
      <Header />
    </MealsProvider>
  );

  const appBar = screen.getByTestId("appBar");
  expect(appBar).toBeVisible();
});

test("[3] Header h1 and Button appear on screen", () => {
  render(
    <MealsProvider>
      <Header />
    </MealsProvider>
  );

  const h1 = screen.getByTestId("header-h1");
  const headerBtn = screen.getByTestId("clear-all-btn");

  expect(h1).toBeVisible();
  expect(headerBtn).toBeVisible();
});
