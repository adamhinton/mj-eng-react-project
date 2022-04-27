import App from "../App";
import { render } from "@testing-library/react";

test("[1] Sanity Check", () => {
  const twoPlusTwo = 2 + 2;
  expect(twoPlusTwo).toStrictEqual(4);
  expect(twoPlusTwo).not.toStrictEqual(5);
});

test("[2] renders without errors", () => {
  render(<App />);
});
