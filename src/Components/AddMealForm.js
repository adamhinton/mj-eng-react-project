import React from "react";
import TextField from "@material-ui/core/TextField";
import { Paper } from "@material-ui/core";
import FormLabel from "@material-ui/core/FormLabel";
import { Button } from "@mui/material";
import { useState } from "react";
import { useContext } from "react";
import ThingsContext from "../Context/MyContext";

export default function AddMealForm() {
  const { myThings, setMyThings } = useContext(ThingsContext);

  const [formValues, setFormValues] = useState({ mealName: "", count: 0 });

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
              value={formValues.mealName}
              onChange={(e) => {
                setFormValues({
                  ...formValues,
                  mealName: e.target.value,
                });
              }}
            />
          </div>

          <div className="form-item-container">
            <FormLabel data-testid="calories-label" htmlFor="calorie-count">
              Calories
            </FormLabel>
            <TextField
              data-testid="calories-input"
              placeholder="Add Calories"
              type="number"
              name="calorie-count"
              value={formValues.count}
              onChange={(e) => {
                setFormValues({
                  ...formValues,
                  count: e.target.value,
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
          setMyThings({
            ...myThings,
            mealInfo: [...myThings.mealInfo, formValues],
          });
        }}
      >
        Add Meal
      </Button>
    </form>
  );
}
