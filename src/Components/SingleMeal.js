import EditIcon from "@mui/icons-material/Edit";

const SingleMeal = (props) => {
  const { name, count } = props;

  return (
    <li>
      <div>
        <strong>{name}:</strong>
        <em> {count} Calories</em>
      </div>

      <div>
        <button className="meal-edit-button">
          <EditIcon />
        </button>
      </div>
    </li>
  );
};

export default SingleMeal;
