import EditIcon from "@mui/icons-material/Edit";
import StorageCtrl from "../CrudFunctions/StorageCtrl";
import { useContext } from "react";
import ThingsContext from "../Context/MyContext";

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
        <button
          onClick={() => {
            deleteSingleItemClick(id, setMyThings);
          }}
        >
          Dummy Button
        </button>
      </div>
    </li>
  );
};

export default SingleMeal;

//Needed for delete:
//Item ID for StorageCtrl.getItemFromStorage
//StorageCtrl.getItemFromStorage
//maybe setMyThings

const deleteSingleItemClick = (id, setMyThings) => {
  StorageCtrl.deleteItemFromStorage(id);

  const newContext = StorageCtrl.getItemsFromStorage();
  setMyThings(newContext);
};
