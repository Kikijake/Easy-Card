import { SET_BACKGROUND } from "./background-types";

const initialState = {
  image: "",
  color: "white",
};

const backgroundReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_BACKGROUND:
      return action.payload;
    default:
      return state;
  }
};

export default backgroundReducer;