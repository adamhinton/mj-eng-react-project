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
        <EditIcon />
      </div>
    </li>
  );
};

export default SingleMeal;
