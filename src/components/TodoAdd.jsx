import PropTypes from "prop-types";

const TodoAdd = ({
  onAddTodo,
  newItem,
  onChangeName,
  newCategory,
  onChangeCategory,
  isEditing,
}) => {
  return (
    <form onSubmit={onAddTodo}>
      <div className="mb-4">
        <label
          htmlFor="todoName"
          className="block text-sm font-medium text-gray-700"
        >
          Todo Name
        </label>
        <input
          type="text"
          id="todoName"
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          placeholder="Enter todo name"
          value={newItem}
          onChange={onChangeName}
          required
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="category"
          className="block text-sm font-medium text-gray-700"
        >
          Category
        </label>
        <select
          id="category"
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          value={newCategory}
          onChange={onChangeCategory}
          required
        >
          <option value="Personal">Personal</option>
          <option value="Work">Work</option>
          <option value="Others">Others</option>
        </select>
      </div>
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
      >
        {isEditing ? "Edit Todo" : "Add Todo"}
      </button>
    </form>
  );
};

TodoAdd.propTypes = {
  onAddTodo: PropTypes.func.isRequired,
  newItem: PropTypes.string.isRequired,
  onChangeName: PropTypes.func.isRequired,
  newCategory: PropTypes.string.isRequired,
  onChangeCategory: PropTypes.func.isRequired,
  isEditing: PropTypes.bool.isRequired,
};

export default TodoAdd;
