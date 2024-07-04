import { useSelector, useDispatch } from "react-redux";
import { setFilter } from "../actions/todoActions";

const Filter = () => {
  const filterCategory = useSelector((state) => state.todo.filterCategory);
  const dispatch = useDispatch();

  const handleFilterChange = (e) => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <select
      id="filterCategory"
      name="filterCategory"
      value={filterCategory}
      onChange={handleFilterChange}
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-2"
    >
      <option value="All">All</option>
      <option value="Personal">Personal</option>
      <option value="Home">Home</option>
      <option value="Work">Work</option>
    </select>
  );
};

export default Filter;
