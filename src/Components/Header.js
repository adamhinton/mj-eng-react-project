// This is fairly self explanatory. A header with an h1, and a Clear All button which allows user to delete all stored meals.

import { AppBar } from "@mui/material";
import { Button } from "@mui/material";
import ItemCtrl from "../CrudFunctions/ItemCtrl";
import StorageCtrl from "../CrudFunctions/StorageCtrl";
import { useContext } from "react";
import ThingsContext from "../Context/MyContext";

const Header = () => {
  //setmealsListGlobalState lets user update context (meals list)
  const { setmealsListGlobalState } = useContext(ThingsContext);

  return (
    <AppBar id="header-styling" data-testid="appBar">
      <h1 data-testid="header-h1">Calorie Counter</h1>
      <Button
        id="header-button"
        variant="contained"
        data-testid="clear-all-btn"
        onClick={() => {
          //delete all items
          clearAllItemsClick(setmealsListGlobalState);
        }}
      >
        Clear All
      </Button>
    </AppBar>
  );
};

export default Header;

const clearAllItemsClick = (setmealsListGlobalState) => {
  //delete all items
  ItemCtrl.clearAllMeals();
  StorageCtrl.clearMealsFromStorage();
  setmealsListGlobalState([]);
};
