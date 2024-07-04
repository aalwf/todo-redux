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
} from "../actions/actionTypes";

const initialState = {
  items: JSON.parse(localStorage.getItem("items")) || [],
  filterCategory: "All",
  newItem: "",
  newCategory: "Personal",
  isEditing: false,
  currentItem: null,
  modalVisible: false,
  modalContent: null,
};

const todoReducer = (state = initialState, action) => {
  let newItems;
  let toggledItems;
  let editedItems;

  switch (action.type) {
    case ADD_TODO:
      newItems = [...state.items, action.payload];
      localStorage.setItem("items", JSON.stringify(newItems));
      return {
        ...state,
        items: newItems,
      };
    case DELETE_TODO:
      newItems = state.items.filter((item) => item.id !== action.payload);
      localStorage.setItem("items", JSON.stringify(newItems));
      return {
        ...state,
        items: newItems,
      };
    case EDIT_TODO:
      editedItems = state.items.map((item) =>
        item.id === action.payload.id ? action.payload : item
      );
      localStorage.setItem("items", JSON.stringify(editedItems));
      return {
        ...state,
        items: editedItems,
        isEditing: false,
        currentItem: null,
        newItem: "",
        newCategory: "Personal",
      };
    case TOGGLE_STATUS:
      toggledItems = state.items.map((item) =>
        item.id === action.payload ? { ...item, status: !item.status } : item
      );
      localStorage.setItem("items", JSON.stringify(toggledItems));
      return {
        ...state,
        items: toggledItems,
      };
    case SET_FILTER:
      return {
        ...state,
        filterCategory: action.payload,
      };
    case SET_NEW_ITEM:
      return {
        ...state,
        newItem: action.payload,
      };
    case SET_NEW_CATEGORY:
      return {
        ...state,
        newCategory: action.payload,
      };
    case SET_EDITING:
      return {
        ...state,
        isEditing: action.payload,
      };
    case SET_CURRENT_ITEM:
      return {
        ...state,
        currentItem: action.payload,
      };
    case SET_MODAL_VISIBLE:
      return {
        ...state,
        modalVisible: action.payload,
      };
    case SET_MODAL_CONTENT:
      return {
        ...state,
        modalContent: action.payload,
      };
    default:
      return state;
  }
};

export default todoReducer;
