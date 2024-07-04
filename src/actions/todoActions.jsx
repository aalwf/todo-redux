import {
  ADD_TODO,
  DELETE_TODO,
  EDIT_TODO,
  TOGGLE_STATUS,
  SET_FILTER,
  SET_NEW_ITEM,
  SET_NEW_CATEGORY,
  SET_EDITING,
  SET_CURRENT_ITEM,
  SET_MODAL_VISIBLE,
  SET_MODAL_CONTENT,
} from "./actionTypes";

export const addTodo = (todo) => ({
  type: ADD_TODO,
  payload: todo,
});

export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  payload: id,
});

export const editTodo = (todo) => ({
  type: EDIT_TODO,
  payload: todo,
});

export const toggleStatus = (id) => ({
  type: TOGGLE_STATUS,
  payload: id,
});

export const setFilter = (filter) => ({
  type: SET_FILTER,
  payload: filter,
});

export const setNewItem = (item) => ({
  type: SET_NEW_ITEM,
  payload: item,
});

export const setNewCategory = (category) => ({
  type: SET_NEW_CATEGORY,
  payload: category,
});

export const setEditing = (isEditing) => ({
  type: SET_EDITING,
  payload: isEditing,
});

export const setCurrentItem = (item) => ({
  type: SET_CURRENT_ITEM,
  payload: item,
});

export const setModalVisible = (visible) => ({
  type: SET_MODAL_VISIBLE,
  payload: visible,
});

export const setModalContent = (content) => ({
  type: SET_MODAL_CONTENT,
  payload: content,
});
