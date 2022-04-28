import EditIcon from "@mui/icons-material/Edit";

const SingleMeal = (props) => {
  const { mealName, count } = props;

  return (
    <li>
      <div>
        <strong>{mealName}:</strong>
        <em> {count} Calories</em>
      </div>

      <div>
        <button className="meal-edit-button" data-testid="meal-edit-button">
          <EditIcon />
        </button>
      </div>
    </li>
  );
};

export default SingleMeal;
