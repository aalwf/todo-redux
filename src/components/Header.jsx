import PropTypes from "prop-types";
import Button from "./Button";
import Filter from "./Filter";

const Header = ({
  onHandleButtonAdd,
  onHandleButtonClickMe,
  filterCategory,
}) => {
  return (
    <>
      <div className="my-5">
        <h1 className="text-3xl text-indigo-500 font-extrabold">Todo List</h1>
      </div>
      <div className="flex items-center justify-center space-x-4">
        <Button onClick={onHandleButtonClickMe} label="Click Me" />
        <Button onClick={onHandleButtonAdd} label="Add Todo" />
        <Filter filterCategory={filterCategory} />
      </div>
    </>
  );
};

Header.propTypes = {
  onHandleButtonAdd: PropTypes.func.isRequired,
  onHandleButtonClickMe: PropTypes.func.isRequired,
  filterCategory: PropTypes.string.isRequired,
};

export default Header;
