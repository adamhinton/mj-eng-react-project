const SingleMeal = (props) => {
  const { name, count } = props;

  return (
    <li>
      <strong>{name}:</strong>
      <em> {count} Calories</em>
    </li>
  );
};

export default SingleMeal;
