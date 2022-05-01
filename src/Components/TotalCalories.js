import React, { useContext } from "react";
import ItemCtrl from "../CrudFunctions/ItemCtrl";
import ThingsContext from "../Context/MyContext";
import StorageCtrl from "../CrudFunctions/StorageCtrl";

const TotalCalories = () => {
  // console.log("context changing in TC:");
  useContext(ThingsContext);

  const currentData = StorageCtrl.getItemsFromStorage();
  let totalCalories = 0;

  currentData.forEach((item) => {
    totalCalories += item.calories;
  });

  return <h3 data-testid="total-calories">Total Calories: {totalCalories} </h3>;
};

export default TotalCalories;
