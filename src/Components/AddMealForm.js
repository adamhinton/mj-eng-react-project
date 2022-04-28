import React from "react";
import TextField from "@material-ui/core/TextField";
import { Paper } from "@material-ui/core";
import FormLabel from "@material-ui/core/FormLabel";
import { Button } from "@mui/material";

export default function AddMealForm() {
  return (
    <form>
      <Paper id="add-meal-form">
        <h2 data-testid="form-h2">Add Meal / Food Item</h2>

        <section className="all-form-items">
          <div className="form-item-container">
            <FormLabel data-testid="meal-label">Meal</FormLabel>
            <TextField data-testid="meal-input" placeholder="Add Item" />
          </div>

          <div className="form-item-container">
            <FormLabel data-testid="calories-label">Calories</FormLabel>
            <TextField
              data-testid="calories-input"
              placeholder="Add Calories"
            />
          </div>
        </section>
      </Paper>
      <Button id="submit-button" data-testid="submit-btn" variant="contained">
        Add Meal
      </Button>
    </form>
  );
}
