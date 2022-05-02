//This component serves as both the single meal's display,
//And also that meal's edit form when user clicks edit button.
//when isEditMode is true, it displays the form called by the function editForm().

import EditIcon from "@mui/icons-material/Edit";
import StorageCtrl from "../CrudFunctions/StorageCtrl";
import { useContext, useState } from "react";
import ThingsContext from "../Context/MyContext";
import { Button, TextField } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const SingleMeal = (props) => {
  //setMyThings updates context with the edited meal. Used for editing.
  const { setMyThings } = useContext(ThingsContext);
  const { name, calories, id } = props;
  //isEditMode is toggled when user clicks edit button
  const [isEditMode, setIsEditMode] = useState(false);
  //the formValues are set when user fills out edit form
  const [formValues, setFormValues] = useState({
    name: name,
    calories: calories,
    id: id,
  });

  return (
    <li className="single-meal-display-item">
      {/* when edit mode is NOT selected, this displays */}
      {!isEditMode && (
        <>
          <div>
            <strong>{name}:</strong>
            <em> {calories} Calories</em>
          </div>
          <div className="meal-display-button-container">
            {/* Edit selected item */}
            <button
              className="single-meal-edit-button"
              data-testid="meal-edit-button"
              onClick={() => {
                setIsEditMode(!isEditMode);
              }}
            >
              <EditIcon />
            </button>
            {/* Delete selected item */}
            <Button
              onClick={() => {
                deleteSingleItemClick(id, setMyThings);
              }}
            >
              <DeleteIcon />
            </Button>
          </div>
        </>
      )}
      {/* When edit mode IS selected, this edit form displays */}
      {isEditMode &&
        editForm(
          formValues,
          setFormValues,
          setMyThings,
          calories,
          setIsEditMode
        )}
    </li>
  );
};

export default SingleMeal;

//edit current item
const updateCurrentMeal = (newMealObject, setMyThings) => {
  StorageCtrl.updateItemStorage(newMealObject);
  setMyThings(StorageCtrl.getItemsFromStorage());
};

//Delete selected item
const deleteSingleItemClick = (id, setMyThings) => {
  StorageCtrl.deleteItemFromStorage(id);
  const newContext = StorageCtrl.getItemsFromStorage();
  setMyThings(newContext);
};

//this is the edit form, I put it down here to keep things more readable. Only shows up after clicking edit button
const editForm = (
  formValues,
  setFormValues,
  setMyThings,
  calories,
  setIsEditMode
) => {
  return (
    <form
      className="single-meal-edit-form"
      data-testid="single-meal-edit-form"
      onSubmit={(e) => {
        e.preventDefault();
        updateCurrentMeal(formValues, setMyThings);
        setIsEditMode(false);
      }}
    >
      <TextField
        data-testid="editmeal-input"
        placeholder={formValues.name}
        type="text"
        name="meal-name"
        value={formValues.name}
        default={formValues.name}
        onChange={(e) => {
          setFormValues({
            ...formValues,
            name: e.target.value,
          });
        }}
      />
      <TextField
        data-testid="edit-calories-input"
        placeholder={String(calories)}
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

      <div className="single-meal-edit-form-btns-container">
        <Button type="submit" data-testid="edit-singlemeal-submit">
          Submit
        </Button>
        <Button
          onClick={() => {
            setIsEditMode(false);
          }}
        >
          Cancel
        </Button>
      </div>
    </form>
  );
};
