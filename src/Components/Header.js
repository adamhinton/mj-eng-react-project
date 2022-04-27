import { AppBar } from "@mui/material";
import { Button } from "@mui/material";

const Header = () => {
  return (
    <AppBar>
      <h1>Calorie Counter</h1>
      <Button variant="contained">Clear All</Button>
    </AppBar>
  );
};

export default Header;
