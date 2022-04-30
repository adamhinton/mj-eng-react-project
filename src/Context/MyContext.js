import { createContext } from "react";
import { useState } from "react";
import StorageCtrl from "../CrudFunctions/StorageCtrl";

const ThingsContext = createContext();
export default ThingsContext;

export const ThingsProvider = ({ children }) => {
  const things = StorageCtrl.getItemsFromStorage();

  const [myThings, setMyThings] = useState(things);

  return (
    <ThingsContext.Provider value={{ myThings, setMyThings }}>
      {children}
    </ThingsContext.Provider>
  );
};
