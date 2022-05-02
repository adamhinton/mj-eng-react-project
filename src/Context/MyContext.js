// This file creates the Context, which is a global state holder.
// Components pull from context and edit context.
// Much easier than passing props through multiple generations in this case.

import { createContext } from "react";
import { useState } from "react";
import StorageCtrl from "../CrudFunctions/StorageCtrl";

const ThingsContext = createContext();
export default ThingsContext;

export const ThingsProvider = ({ children }) => {
  // "Things" is the list of meals
  const things = StorageCtrl.getItemsFromStorage();

  //allows components to edit and view list of meals
  const [myThings, setMyThings] = useState(things);

  return (
    <ThingsContext.Provider value={{ myThings, setMyThings }}>
      {children}
    </ThingsContext.Provider>
  );
};
