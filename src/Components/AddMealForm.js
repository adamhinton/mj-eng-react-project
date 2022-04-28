import React from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
// import React, { useState } from "react";
import { Button, Paper } from "@material-ui/core";
import FormLabel from "@material-ui/core/FormLabel";

export default function AddMealForm() {
  return (
    <form>
      <Paper id="add-meal-form">
        <h2>Add Meal / Food Item</h2>

        <section className="all-form-items">
          <div className="form-item-container">
            <FormLabel>Meal</FormLabel>
            <TextField placeholder="Add Item" />
          </div>

          <div className="form-item-container">
            <FormLabel>Calories</FormLabel>
            <TextField placeholder="Add Calories" />
          </div>
        </section>
      </Paper>
    </form>
  );
}
