import { combineReducers } from "redux";
import backgroundReducer from "./backgrounds/background-reducer";

const rootReducer = combineReducers({
  background: backgroundReducer,
});

export default rootReducer;
