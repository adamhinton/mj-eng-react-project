import React, { useContext } from "react";
import ItemCtrl from "../CrudFunctions/ItemCtrl";
import ThingsContext from "../Context/MyContext";

const TotalCalories = () => {
  useContext(ThingsContext);

  const totalCalories = ItemCtrl.getTotalCalories();

  return <h3 data-testid="total-calories">Total Calories: {totalCalories} </h3>;
};

export default TotalCalories;
