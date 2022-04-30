import EditIcon from "@mui/icons-material/Edit";

const SingleMeal = (props) => {
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
        <button>Dummy Button</button>
      </div>
    </li>
  );
};

export default SingleMeal;

//Needed for delete:
//Item ID for StorageCtrl.getItemFromStorage
//StorageCtrl.getItemFromStorage
//maybe setMyThings
