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
  const { myThings, setMyThings } = useContext(ThingsContext);
  console.log("myThings:", myThings);

  const [formValues, setFormValues] = useState({ name: "", calories: 0 });

  return (
    <form>
      <Paper id="add-meal-form">
        <h2 data-testid="form-h2">Add Meal / Food Item</h2>

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
        id="submit-button"
        data-testid="submit-btn"
        variant="contained"
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          const input = formValues;
          const newItem = ItemCtrl.addItem(input.name, input.calories);

          if (input.name !== "" && input.calories !== "") {
            StorageCtrl.storeItem(newItem);
          }

          setMyThings(StorageCtrl.getItemsFromStorage());
          // e.preventDefault();
          // StorageCtrl.StorageCtrl.storeItem();
          // // console.log("addItem:", ItemCtrl.addItem);
          // ItemCtrl.addItem(formValues.name, formValues.calories);
          // setMyThings([...myThings, formValues]);
          console.log("items in storage:", StorageCtrl.getItemsFromStorage());
        }}
      >
        Add Meal
      </Button>
    </form>
  );
}
