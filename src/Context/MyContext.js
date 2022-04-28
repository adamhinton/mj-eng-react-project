import React from "react";

const ThingsContext = React.createContext({
  count: 12345,
  example: "example, yay!",
});
export const ThingsProvider = ThingsContext.Provider;

export default ThingsContext;
