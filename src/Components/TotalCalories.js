import React from "react";
import ItemCtrl from "../CrudFunctions/ItemCtrl";

const TotalCalories = () => {
  const totalCalories = ItemCtrl.getTotalCalories();

  return <h3 data-testid="total-calories">Total Calories: {totalCalories} </h3>;
};

export default TotalCalories;
