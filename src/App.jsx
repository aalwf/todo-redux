import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "./components/Header";
import Table from "./components/Table";
import Modal from "./components/Modal";
import {
  addTodo,
  deleteTodo,
  editTodo,
  toggleStatus,
  setFilter,
  setNewItem,
  setNewCategory,
  setEditing,
  setCurrentItem,
  setModalVisible,
  setModalContent,
} from "./actions/todoActions";

const App = () => {
  const dispatch = useDispatch();
  const {
    items,
    filterCategory,
    newItem,
    newCategory,
    isEditing,
    currentItem,
    modalVisible,
    modalContent,
  } = useSelector((state) => state.todo);

  useEffect(() => {
    if (items) {
      localStorage.setItem("items", JSON.stringify(items));
    }
  }, [items]);

  const handleButtonAdd = () => {
    dispatch(setModalVisible(true));
    dispatch(setModalContent(false));
    dispatch(setEditing(false));
    dispatch(setNewItem(""));
    dispatch(setNewCategory("Personal"));
  };

  const handleButtonClickMe = () => {
    dispatch(setModalVisible(true));
    dispatch(setModalContent(true));
  };

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (newItem.trim() !== "") {
      if (isEditing) {
        dispatch(
          editTodo({
            ...currentItem,
            name: newItem,
            category: newCategory,
          })
        );
      } else {
        dispatch(
          addTodo({
            id: items.length + 1,
            name: newItem,
            category: newCategory,
            status: false,
          })
        );
      }
      dispatch(setNewItem(""));
      dispatch(setNewCategory("Personal"));
      dispatch(setModalVisible(false));
    }
  };

  const handleToggleStatus = (id) => {
    dispatch(toggleStatus(id));
  };

  const handleChangeName = (e) => {
    dispatch(setNewItem(e.target.value));
  };

  const handleEditTodo = (e, item) => {
    e.stopPropagation();
    dispatch(setNewItem(item.name));
    dispatch(setNewCategory(item.category));
    dispatch(setEditing(true));
    dispatch(setCurrentItem(item));
    dispatch(setModalVisible(true));
    dispatch(setModalContent(false));
  };

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
    dispatch(setModalContent(null));
    dispatch(setModalVisible(true));
  };

  const handleFilterChange = (e) => {
    dispatch(setFilter(e.target.value));
  };

  const filteredItems =
    filterCategory === "All"
      ? items
      : items.filter((item) => item.category === filterCategory);

  return (
    <div className="text-center">
      <Header
        onHandleButtonClickMe={handleButtonClickMe}
        onHandleButtonAdd={handleButtonAdd}
        onHandleFilterChange={handleFilterChange}
        filterCategory={filterCategory}
      />

      <div className="container mx-auto relative pt-6 overflow-x-auto shadow-md sm:rounded-lg">
        <Table
          filteredItems={filteredItems}
          onEditTodo={handleEditTodo}
          onDeleteTodo={handleDeleteTodo}
          onToggleStatus={handleToggleStatus}
        />
      </div>

      {modalVisible && (
        <Modal
          onSetModalVisible={(visible) => dispatch(setModalVisible(visible))}
          modalContent={modalContent}
          onAddTodo={handleAddTodo}
          newItem={newItem}
          handleChangeName={handleChangeName}
          isEditing={isEditing}
          newCategory={newCategory}
          onChangeCategory={(e) => dispatch(setNewCategory(e.target.value))}
        />
      )}
    </div>
  );
};

export default App;
