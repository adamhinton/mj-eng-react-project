import App from "../App";
import { render, screen } from "@testing-library/react";

test("Sanity Check", () => {
  const twoPlusTwo = 2 + 2;
  expect(twoPlusTwo).toStrictEqual(4);
  expect(twoPlusTwo).not.toStrictEqual(5);
});

test("renders without errors", () => {
  render(<App />);
});
