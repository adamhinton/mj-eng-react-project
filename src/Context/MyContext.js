// import React from "react";

// const things = {
//   mealInfo: [
//     { mealName: "Dummy data", count: 1234 },
//     { mealName: "More dummy data", count: 324325 },
//   ],
// };

// const ThingsContext = React.createContext(things);
// export const ThingsProvider = ThingsContext.Provider;

// export default ThingsContext;
import { createContext } from "react";

const ThingsContext = createContext();
export default ThingsContext;
