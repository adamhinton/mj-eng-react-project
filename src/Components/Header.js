import { AppBar } from "@mui/material";
import { Button } from "@mui/material";

const Header = () => {
  return (
    <AppBar id="header-styling">
      <h1>Calorie Counter</h1>
      <Button id="header-button" variant="contained">
        Clear All
      </Button>
    </AppBar>
  );
};

export default Header;
