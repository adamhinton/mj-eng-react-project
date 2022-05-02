// This component allows user to add a form (name and calorie count), and stores it in localStorage.
//The meal will be displayed in SingleMeal at bottom of screen.

import React from "react";
import TextField from "@material-ui/core/TextField";
import { Paper } from "@material-ui/core";
import FormLabel from "@material-ui/core/FormLabel";
import { Button } from "@mui/material";
import { useState } from "react";
import { useContext } from "react";
import ThingsContext from "../Context/MyContext";
import StorageCtrl from "../CrudFunctions/StorageCtrl";
import ItemCtrl from "../CrudFunctions/ItemCtrl";

export default function AddMealForm() {
  //setmealsListGlobalState lets user update meal list in context
  const { setmealsListGlobalState } = useContext(ThingsContext);

  const [formValues, setFormValues] = useState({ name: "", calories: 0 });

  return (
    <form>
      <Paper id="add-meal-form">
        <h2 data-testid="add-meal-form-h2" className="add-meal-form-h2">
          Add Meal / Food Item
        </h2>

        <section className="all-form-items">
          <div className="form-item-container">
            <FormLabel
              data-testid="meal-label"
              htmlFor="meal-name"
              name="meal-name"
            >
              Meal
            </FormLabel>
            <TextField
              data-testid="meal-input"
              placeholder="Add Item"
              type="text"
              name="meal-name"
              value={formValues.name}
              onChange={(e) => {
                setFormValues({
                  ...formValues,
                  name: e.target.value,
                });
              }}
            />
          </div>

          <div className="form-item-container">
            <FormLabel data-testid="calories-label" htmlFor="calorie-calories">
              Calories
            </FormLabel>
            <TextField
              data-testid="calories-input"
              placeholder="Add Calories"
              type="number"
              name="calorie-calories"
              value={formValues.calories}
              onChange={(e) => {
                setFormValues({
                  ...formValues,
                  calories: e.target.value,
                });
              }}
            />
          </div>
        </section>
      </Paper>
      <Button
        id="add-meal-submit-button"
        data-testid="add-meal-submit-btn"
        variant="contained"
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          const input = formValues;
          const newMeal = ItemCtrl.addMeal(input.name, input.calories);

          //now to store item in localStorage
          if (input.name !== "" && input.calories !== "") {
            StorageCtrl.storeMeal(newMeal);
          }

          setmealsListGlobalState(StorageCtrl.getMealsFromStorage());
          setFormValues({ name: "", calories: 0 });
        }}
      >
        Add Meal
      </Button>
    </form>
  );
}
