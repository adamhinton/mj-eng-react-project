import Header from "../Components/Header";
import { render, screen } from "@testing-library/react";
import { ThingsProvider } from "../Context/MyContext";

test("[1] Renders without errors", () => {
  render(
    <ThingsProvider>
      <Header />
    </ThingsProvider>
  );
});

test("[2] AppBar appears on screen", () => {
  render(
    <ThingsProvider>
      <Header />
    </ThingsProvider>
  );

  const appBar = screen.getByTestId("appBar");
  expect(appBar).toBeVisible();
});

test("[3] Header h1 and Button appear on screen", () => {
  render(
    <ThingsProvider>
      <Header />
    </ThingsProvider>
  );

  const h1 = screen.getByTestId("header-h1");
  const headerBtn = screen.getByTestId("header-btn");

  expect(h1).toBeVisible();
  expect(headerBtn).toBeVisible();
});
