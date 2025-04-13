import { combineReducers } from "redux";
import selectedItemsReducer from "./selectedItems/selected-items-reducer";

const rootReducer = combineReducers({
  selectedItems: selectedItemsReducer
});

export default rootReducer;
