import {
  RESET_SELECTED_ITEMS,
  SET_SELECTED_ITEMS,
} from "./selected-items-types";
import initialData from "../../assets/data/initialData.json";

const activeID = JSON.parse(localStorage.getItem("activeID")) || 0;
const selectedItems = JSON.parse(localStorage.getItem("selectedItems")) || [];
const activeLayer = selectedItems.find((item) => item.historyID === activeID);
const initialState = activeLayer ? activeLayer : initialData;

const selectedItemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SELECTED_ITEMS:
      return action.payload;
    case RESET_SELECTED_ITEMS:
      return initialData;
    default:
      return state;
  }
};

export default selectedItemsReducer;
