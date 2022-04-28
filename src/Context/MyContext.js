import React from "react";

const ThingsContext = React.createContext({
  count: 12345,
  example: "example, yay!",
});
export const ThingsContextProvider = ThingsContext.Provider;

export default ThingsContext;
