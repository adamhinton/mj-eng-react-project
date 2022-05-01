import React, { useContext } from "react";
import ThingsContext from "../Context/MyContext";
import StorageCtrl from "../CrudFunctions/StorageCtrl";

const TotalCalories = () => {
  useContext(ThingsContext);

  //For some reason, the total calories finder function from ItemCtrl.js didn't work right. Either I was using it wrong or it was buggy.
  //So I wrote my own here.
  const currentData = StorageCtrl.getItemsFromStorage();
  let totalCalories = 0;

  currentData.forEach((item) => {
    totalCalories += item.calories;
  });

  return <h3 data-testid="total-calories">Total Calories: {totalCalories} </h3>;
};

export default TotalCalories;
