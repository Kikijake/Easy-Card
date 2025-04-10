import { SET_BACKGROUND } from "./background-types";

export const setBackground = (background) => {
  return {
    type: SET_BACKGROUND,
    payload: background,
  };
};