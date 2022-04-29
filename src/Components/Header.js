import { AppBar } from "@mui/material";
import { Button } from "@mui/material";
import ItemCtrl from "../CrudFunctions/ItemCtrl";
import StorageCtrl from "../CrudFunctions/StorageCtrl";
import { useContext } from "react";
import ThingsContext from "../Context/MyContext";

const Header = () => {
  const { setMyThings } = useContext(ThingsContext);

  return (
    <AppBar id="header-styling" data-testid="appBar">
      <h1 data-testid="header-h1">Calorie Counter</h1>
      <Button
        id="header-button"
        variant="contained"
        data-testid="header-btn"
        onClick={() => {
          clearAllItemsClick(setMyThings);
        }}
      >
        Clear All
      </Button>
    </AppBar>
  );
};

export default Header;

const clearAllItemsClick = (setMyThings) => {
  ItemCtrl.clearAllItems();
  StorageCtrl.clearItemsFromStorage();
  setMyThings([]);
};
