import { getIDandItems, getLayerByChangedID, initiateSelectedItems } from "../../utils";
import {
  SET_SELECTED_ITEMS,
  RESET_SELECTED_ITEMS,
} from "./selected-items-types";

export const resetSelectedItems = () => {
  initiateSelectedItems();
  return { type: RESET_SELECTED_ITEMS };
};

export const setSelectedItems = (key, value) => {
  const { activeID, selectedItems } = getIDandItems();
  const findIndex = selectedItems.findIndex(
    (item) => item.historyID === activeID
  );
  let newSelectedItems = selectedItems;
  if (findIndex !== -1) {
    newSelectedItems = selectedItems.slice(findIndex);
  }
  const newActiveID = newSelectedItems[0].historyID + 1;
  const updatedSelections = {
    ...newSelectedItems[0],
    [key]: value,
    historyID: newActiveID,
  };
  newSelectedItems.unshift(updatedSelections);
  localStorage.setItem("activeID", JSON.stringify(newActiveID));
  localStorage.setItem("selectedItems", JSON.stringify(newSelectedItems));
  return { type: SET_SELECTED_ITEMS, payload: updatedSelections };
};

export const undoSelectedItems = () => {
  const { activeID, selectedItems } = getIDandItems();
  const decreasedID = activeID === 0 ? 0 : activeID - 1;
  const changedLayer = getLayerByChangedID(selectedItems, decreasedID);
  return { type: SET_SELECTED_ITEMS, payload: changedLayer };
};

export const redoSelectedItems = () => {
  const { activeID, selectedItems } = getIDandItems();
  const increasedID = activeID === selectedItems[0].historyID ? selectedItems[0].historyID : activeID + 1;
  const changedLayer = getLayerByChangedID(selectedItems, increasedID);
  return { type: SET_SELECTED_ITEMS, payload: changedLayer };
};
