import EditIcon from "@mui/icons-material/Edit";
import StorageCtrl from "../CrudFunctions/StorageCtrl";
import { useContext, useState } from "react";
import ThingsContext from "../Context/MyContext";
import { Button, TextField } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import ItemCtrl from "../CrudFunctions/ItemCtrl";

//PLAN for edit single meal:

//FUNCTIONALITY:
//Write functionality to edit SM
//take from template
//confirm it works first with dummy data

//UI:
//Set isEditing, setIsEditing to state
//if false, display component as usual
//if true, show form fields and submit btn in SM.js to edit
//Maybe make new component just for the form and nest it

const SingleMeal = (props) => {
  const { setMyThings } = useContext(ThingsContext);
  const { name, calories, id } = props;
  // console.log("props:", props);

  const [isEditMode, setIsEditMode] = useState(false);
  const [formValues, setFormValues] = useState({
    name: name,
    calories: calories,
    id: id,
  });

  return (
    <li>
      <div>
        <strong>{name}:</strong>
        <em> {calories} Calories</em>
      </div>

      <div>
        <button
          className="meal-edit-button"
          data-testid="meal-edit-button"
          onClick={() => {
            setIsEditMode(!isEditMode);
          }}
        >
          <EditIcon />
        </button>
        <Button
          onClick={() => {
            deleteSingleItemClick(id, setMyThings);
          }}
        >
          <DeleteIcon />
        </Button>
      </div>

      <form
        onSubmit={() => {
          updateCurrentMeal(formValues, setMyThings);
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

        <Button type="submit">Submit</Button>
      </form>
    </li>
  );
};

export default SingleMeal;

const updateCurrentMeal = (newMealObject, setMyThings) => {
  StorageCtrl.updateItemStorage(newMealObject);

  console.log("new data:", StorageCtrl.getItemsFromStorage());
  setMyThings(StorageCtrl.getItemsFromStorage());
};

const deleteSingleItemClick = (id, setMyThings) => {
  StorageCtrl.deleteItemFromStorage(id);
  const newContext = StorageCtrl.getItemsFromStorage();
  setMyThings(newContext);
};
