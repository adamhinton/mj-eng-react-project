import EditIcon from "@mui/icons-material/Edit";
import StorageCtrl from "../CrudFunctions/StorageCtrl";
import { useContext } from "react";
import ThingsContext from "../Context/MyContext";
import { Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

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

  return (
    <li>
      <div>
        <strong>{name}:</strong>
        <em> {calories} Calories</em>
      </div>

      <div>
        <button className="meal-edit-button" data-testid="meal-edit-button">
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
    </li>
  );
};

export default SingleMeal;

const deleteSingleItemClick = (id, setMyThings) => {
  StorageCtrl.deleteItemFromStorage(id);
  const newContext = StorageCtrl.getItemsFromStorage();
  setMyThings(newContext);
};
